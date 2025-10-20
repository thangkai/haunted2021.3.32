using System.Collections.Generic;
using UnityEngine;


public class UI_Alert : Singleton<UI_Alert>
{
    [SerializeField] GameObject m_Pref_Item_Alert;
    [SerializeField] int m_Min_Item = 2;
    [SerializeField] int m_Max_Item = 5;
    [SerializeField] Vector3 m_Default_Pos;

    
    [SerializeField] bool m_Is_On_Clear_Data = true;
    [SerializeField] float m_Time_Clear_Data = 5f;

   
    [SerializeField] List<Item_Alert_UI> m_All_Item_Waiting = new List<Item_Alert_UI>();
    [SerializeField] List<Item_Alert_UI> m_All_Item_Playing = new List<Item_Alert_UI>();
    [SerializeField] List<float> m_Time_Start_Playing = new List<float>();

    private void Start()
    {
        Init_Audio_Source();
    }

    private void Init_Audio_Source()
    {
        m_Time_Start_Playing.Clear();
        m_All_Item_Waiting.Clear();
        m_All_Item_Playing.Clear();

        for (int i = 0; i < m_Min_Item; i++)
        {
            var obj_Item_Alert = Instantiate(m_Pref_Item_Alert, transform);
            obj_Item_Alert.GetComponent<RectTransform>().localPosition = m_Default_Pos;
            Item_Alert_UI item_Alert_UI = obj_Item_Alert.GetComponent<Item_Alert_UI>();
            if (item_Alert_UI)
            {
                m_All_Item_Waiting.Add(item_Alert_UI);
                item_Alert_UI.gameObject.Set_Active(false);
            }
        }

        if (m_Is_On_Clear_Data)
        {
            Invoke(nameof(Clear_Temp_Source), m_Time_Clear_Data);
        }
    }

    private void Update()
    {
        if (m_Time_Start_Playing.Count > 0)
        {
            if (Time.time - m_Time_Start_Playing[0] >= 2f)
            {
                Update_Status_Waiting();
                m_Time_Start_Playing.RemoveAt(0);
            }
        }
    }

    private void Update_Status_Waiting()
    {
        if (m_All_Item_Playing.Count > 0)
        {
            m_All_Item_Waiting.Add(m_All_Item_Playing[0]);
            m_All_Item_Playing[0].gameObject.Set_Active(false);
            m_All_Item_Playing[0].GetComponent<RectTransform>().localPosition = m_Default_Pos;
            m_All_Item_Playing.RemoveAt(0);
        }

        CancelInvoke(nameof(Clear_Temp_Source));
        Invoke(nameof(Clear_Temp_Source), m_Time_Clear_Data);
    }

    private void Clear_Temp_Source()
    {
        for (int i = m_All_Item_Waiting.Count - 1; i >= m_Min_Item; i--)
        {
            Destroy(m_All_Item_Waiting[i].gameObject);
            m_All_Item_Waiting.RemoveAt(i);
        }
    }

    public static void Show_Alerts(string content, Type_Alert type_Alert)
    {
        if (Instance)
        {
            Instance.Show_Alert(content, type_Alert);
        }
    }

    public static void Show_Alerts_Vampire_Level_Up(string content, int level)
    {
        if (Instance)
        {
            if(RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                level -= 4;
            }

            Instance.Show_Alert(content, Type_Alert.Vampire_Level_Up, level.ToString());
        }
    }

    public void Show_Alert(string content, Type_Alert type_Alert, string tail = "")
    {
        if (!string.IsNullOrEmpty(content))
        {
            content += " ";
        }
        content = content + My_Utils.Get_Content_By_Language(Data_In_Game.Instance.Get_Data_Alert().Get_Des_Alert(type_Alert)) + " " + tail;

        if (m_All_Item_Waiting.Count > 0)
        {
            m_All_Item_Waiting[m_All_Item_Waiting.Count - 1].Show_Alert(content);

            // Move to Playing 
            m_All_Item_Playing.Add(m_All_Item_Waiting[m_All_Item_Waiting.Count - 1]);
            m_All_Item_Waiting.RemoveAt(m_All_Item_Waiting.Count - 1);

            m_Time_Start_Playing.Add(Time.time);
        }
        else
        {
            if (m_All_Item_Waiting.Count + m_Time_Start_Playing.Count < m_Max_Item)
            {
                var obj_Item_Alert = Instantiate(m_Pref_Item_Alert, transform);
                obj_Item_Alert.GetComponent<RectTransform>().localPosition = m_Default_Pos;
                Item_Alert_UI item_Alert_UI = obj_Item_Alert.GetComponent<Item_Alert_UI>();
                if (item_Alert_UI)
                {
                    m_All_Item_Waiting.Add(item_Alert_UI);
                    item_Alert_UI.gameObject.Set_Active(false);
                }
            }
        }
    }
}
