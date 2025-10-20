using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Item_Waiting_Room_Boss : MonoBehaviour
{
    [SerializeField] bool m_Is_Player_Control;
    [SerializeField] State_Item_Waiting_Room m_State_Item;
    [SerializeField] Model_Info_Level_Boss m_Info_Boss;

    bool is_Start;
    bool is_Data_Updated;

    [Header("_____ UI _____")]
    [SerializeField] GameObject m_Obj_Bg_Not_Player;
    [SerializeField] GameObject m_Cursor_Player;
    [SerializeField] GameObject m_Label_Hide;
    [SerializeField] GameObject m_Layout_Amount;
    [SerializeField] Animator m_Anim;

    [Space(20)]
    [SerializeField] Image m_Icon;
    [SerializeField] RectTransform m_Rec_Icon;
    //[SerializeField] float m_Heigth_Icon_Default = 250f;

    [Space(20)]
    [SerializeField] TextMeshProUGUI m_Txt_Name;
    [SerializeField] TextMeshProUGUI m_Txt_Amount;

    public void Set_Data(bool is_Player_Control, State_Item_Waiting_Room state, Model_Info_Level_Boss info_Boss)
    {
        m_Is_Player_Control = is_Player_Control;
        m_State_Item = state;
        m_Info_Boss = info_Boss;

        if (is_Start)
        {
            is_Data_Updated = false;
            On_Ready_Update_UI();
        }
    }

    public void Play_Anim_Show()
    {
        if (m_Anim == null)
        {
            m_Anim = GetComponent<Animator>();
        }
        if (m_Is_Player_Control)
        {
            m_Anim.enabled = false;
        }
        else
        {
            m_Anim.enabled = true;
            m_Anim.Play_Animation_Play();
        }
    }

    void Start()
    {
        is_Start = true;
        if(m_Anim == null)
        {
            m_Anim = GetComponent<Animator>();
        }
        On_Ready_Update_UI();
    }

    private void On_Ready_Update_UI()
    {
        if (is_Data_Updated)
        {
            return;
        }
        is_Data_Updated = true;

        if (m_Info_Boss == null) return;

        if (m_Is_Player_Control)
        {
            m_Label_Hide.Set_Active(false);
            m_Rec_Icon.localScale = new Vector3(1, 1, 1);
            m_Anim.enabled = false;
            m_Layout_Amount.Set_Active(false);
        }
        else
        {
            m_Anim.enabled = true;
            m_Anim.Play_Animation_Idle();
            m_Layout_Amount.Set_Active(true);
        }

        m_Obj_Bg_Not_Player.Set_Active(!m_Is_Player_Control);
        m_Cursor_Player.Set_Active(m_Is_Player_Control);

        m_Txt_Amount.Set_Text(m_Info_Boss.amount.ToString());

        if (m_Is_Player_Control)
        {
            m_Txt_Name.Set_Text("");
        }
        else
        {
            m_Txt_Name.Set_Text(My_Utils.Get_Content_By_Language(Data_Home.Instance.Get_All_Data_Boss().Get_Data_Info_Boss(m_Info_Boss.type_Boss).name_Boss));
        }

        // Update Icon
        m_Icon.sprite = Data_Home.Instance.Get_All_Sprite().Get_Icon_Boss_Small(m_Info_Boss.type_Boss);
    }
}
