using UnityEngine;
using UnityEngine.UI;
using TMPro;

public enum Type_Alert_Boss
{
    Monster_Is_Stronger,
    Monster_Level_Is_Higher,
    Monster_Spawn,
    Monster_Crazy
}

public class UI_Alert_Boss : Singleton<UI_Alert_Boss>
{
    [SerializeField] Type_Alert_Boss m_Type_Alert_Boss;
    [SerializeField] BG_Warning m_BG_Warning;
    [SerializeField] GameObject m_Layout_Content;
    [SerializeField] Image m_Icon_Title;
    [SerializeField] TextMeshProUGUI m_Txt_Alert;
    [SerializeField] Animator m_Anim;
    [SerializeField] Model_Name[] m_Data_Alerts;
    [SerializeField] Sprite[] m_Data_Icon_Alert;

    public void Play_Alert(Type_Alert_Boss type_Alert_Boss)
    {
        m_Type_Alert_Boss = type_Alert_Boss;
        Update_UI();
    }

    public void Stop_Alert()
    {
        CancelInvoke(nameof(Pay_Anim_Hide));
        Pay_Anim_Hide();
    }

    private void Update_UI()
    {
        m_BG_Warning.Show_Effect(true);
        m_Layout_Content.Set_Active(true);
        m_Icon_Title.sprite = m_Data_Icon_Alert[(int)m_Type_Alert_Boss];
        m_Txt_Alert.Set_Text(My_Utils.Get_Content_By_Language(m_Data_Alerts[(int)m_Type_Alert_Boss]));

        m_Anim.gameObject.Set_Active(true);
        m_Anim.Play_Animation_Play();

        CancelInvoke(nameof(Pay_Anim_Hide));
        Invoke(nameof(Pay_Anim_Hide), m_Type_Alert_Boss == Type_Alert_Boss.Monster_Spawn ? 10 : 5);
    }

    private void Pay_Anim_Hide()
    {
        m_Anim.Play_Animation_Play_Hide();
        CancelInvoke(nameof(End_Anim));
        Invoke(nameof(End_Anim), 1f);
    }

    private void End_Anim()
    {
        m_Layout_Content.Set_Active(false);
        m_BG_Warning.Show_Effect(false);
        m_Anim.gameObject.Set_Active(false);
    }
}
