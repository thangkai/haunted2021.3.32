using Newtonsoft.Json;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;


public enum Type_Mode_Build
{
    Normal,
    V_0_1_9,
    V_0_2_0
}

public class Load_Data_Level_From_GG_Sheet : MonoBehaviour
{
    [SerializeField] Type_Mode_Build m_Type_Mode_Build;
 
    [SerializeField] string m_Uri_Normal_10_Minutes_Normal = "Normal_10p";
    [SerializeField] string m_Uri_Hard_10_Minutes_Normal = "H_10p";
    //[SerializeField] string m_Uri_Hard_4_Minutes_Normal = "H_4_Minutes";

   
    [SerializeField] string m_Uri_Normal_10_Minutes_V_0_1_9;
    [SerializeField] string m_Uri_Hard_10_Minutes_V_0_1_9;
    //[SerializeField] string m_Uri_Hard_4_Minutes_V_0_1_9;

   
    [SerializeField] string m_Uri_Normal_V_0_2_0;
    [SerializeField] string m_Uri_Very_Hard_V_0_2_0;

 
    [SerializeField] string m_Uri_Challenge = "Challenge Level";

    string m_URI_ORIGINAL = "https://opensheet.elk.sh/1Fc5UvwuyFkI1Id0hU14ycS6eFfjdhQJ--HJChb9YUMU/";

    private string Get_Forder()
    {
        switch (m_Type_Mode_Build)
        {
            case Type_Mode_Build.V_0_1_9:
                return "Load_Data_V_0_1_9";

            case Type_Mode_Build.V_0_2_0:
                return "Load_Data_V_0_2_0";
        }
        return "Load_Data_From_Json";
    }

    private string Get_Name_File()
    {
        switch (m_Type_Mode_Build)
        {
            case Type_Mode_Build.V_0_1_9:
                return "LV_V_0_1_9";

            case Type_Mode_Build.V_0_2_0:
                return "LV_V_0_2_0";
        }
        return "Level";
    }

    private string Get_Uri_Normal()
    {
        switch (m_Type_Mode_Build)
        {
            case Type_Mode_Build.V_0_1_9:
                return m_Uri_Normal_10_Minutes_V_0_1_9;

            case Type_Mode_Build.V_0_2_0:
                return m_Uri_Normal_V_0_2_0;
        }
        return m_Uri_Normal_10_Minutes_Normal;
    }

    private string Get_Uri_Very_Hard()
    {
        switch (m_Type_Mode_Build)
        {
            case Type_Mode_Build.V_0_1_9:
                return m_Uri_Hard_10_Minutes_V_0_1_9;

            case Type_Mode_Build.V_0_2_0:
                return m_Uri_Very_Hard_V_0_2_0;
        }
        return m_Uri_Hard_10_Minutes_Normal;
    }

    #region ================ Level Normal ================
    public void _Btn_Load_Data_Normal_On_Click()
    {
        string uri = m_URI_ORIGINAL + Get_Uri_Normal();
        string prev_Path = "Assets/Game_Play/DATA/Data_Home/Data_All_Levels/"+ Get_Forder() + "/Data_Level_Normal/Data_" + Get_Name_File() + "_Normal_";
        StartCoroutine(Load_Data(uri, prev_Path));
    }

    public void _Btn_Load_Data_Very_Hard_On_Click()
    {
        string uri = m_URI_ORIGINAL + Get_Uri_Very_Hard();
        string prev_Path = "Assets/Game_Play/DATA/Data_Home/Data_All_Levels/" + Get_Forder() + "/Data_Level_Very_Hard/Data_" + Get_Name_File() + "_Very_Hard_";
        StartCoroutine(Load_Data(uri, prev_Path));
    }


    public void _Btn_Load_Data_Challenge_On_Click()
    {
        string uri = m_URI_ORIGINAL + m_Uri_Challenge;
        string prev_Path = "Assets/Game_Play/DATA/Data_Home/Data_All_Levels/" + "Load_Data_Level_Challenge" + "/Data_LV_Challenge_";
        StartCoroutine(Load_Data(uri, prev_Path, true));
    }

    #endregion


    IEnumerator Load_Data(string uri, string prev_Path, bool is_Challenge_Mode = false)
    {
        UnityWebRequest www = UnityWebRequest.Get(uri);
        yield return www.SendWebRequest();

#if UNITY_EDITOR
        if (www.isNetworkError || www.isHttpError)
        {
            
        }
        else
        {
            string json = www.downloadHandler.text;
            json = "{\"Items\":" + json + "}";

            var data = JsonConvert.DeserializeObject<Item_Json_V1>(json);
            Data_Level_Loader.Save_Data(Data_Level_Loader.Convert_V1_To_Item_Json(data), prev_Path, is_Challenge_Mode);
        }
#endif
    }
}
