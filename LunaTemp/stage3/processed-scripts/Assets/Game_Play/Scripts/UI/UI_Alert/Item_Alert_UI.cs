using UnityEngine;
using TMPro;

public class Item_Alert_UI : MonoBehaviour
{
    bool m_Is_Start;
    bool m_Lock_Update;
    string m_Content;
    [SerializeField] TextMeshProUGUI m_Txt_Content_Alert;
    [SerializeField] Animator m_Anim;

    private void Start()
    {
        m_Is_Start = true;
        On_Ready_Update_UI();
    }

    public void Show_Alert(string content)
    {
        gameObject.SetActive(true);
        m_Content = content;
        m_Lock_Update = false;

        if (m_Is_Start)
        {
            On_Ready_Update_UI();
        }
    }

    private void On_Ready_Update_UI()
    {
        if (m_Lock_Update)
        {
            return;
        }
        m_Lock_Update = true;

        m_Txt_Content_Alert.Set_Text(m_Content);
        m_Anim.Play_Animation_Play();
    }
}
