using UnityEngine;
using TMPro;

public class UI_Log : Singleton<UI_Log>
{
    private void Start()
    {
        Print_Logs("Version Code =  " + RootManager.Instance.VERSION, true);
    }

    public static void Print_Logs(string content, bool is_Show)
    {
        if (Instance && is_Show)
        {
            Instance.Print_Log(content);
        }
    }

    public static void Print_Logs_FB(string content, bool is_Show)
    {
        if (Instance && is_Show)
        {
            Instance.Print_Log_FB(content);
        }
    }

    public static void Print_Logs_2(string content, bool is_Show)
    {
        if (Instance && is_Show)
        {
            Instance.Print_Log_2(content);
        }
    }

    public static void Add_Logs(string content, bool is_Show)
    {
        if (Instance && is_Show)
        {
            Instance.Add_Log(content);
        }
    }


    [SerializeField] TextMeshProUGUI m_Txt_Content;
    [SerializeField] TextMeshProUGUI m_Txt_Content_2;
    [SerializeField] TextMeshProUGUI m_Txt_Content_FB;

    string m_content = "";
    public void Print_Log(string content)
    {
        m_content = content;
        m_Txt_Content.Set_Text(m_content);
    }

    public void Print_Log_2(string content)
    {
        m_content = content;
        m_Txt_Content_2.Set_Text(m_content);
    }    
    
    public void Print_Log_FB(string content)
    {
        m_content = content;
        m_Txt_Content_FB.Set_Text(m_content);
    }

    public void Add_Log(string content)
    {
        m_content += "\n" + content;
        m_Txt_Content.Set_Text(m_content);
    }
}
