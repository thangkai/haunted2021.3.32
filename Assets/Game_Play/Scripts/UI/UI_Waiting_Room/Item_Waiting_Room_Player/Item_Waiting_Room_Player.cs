using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Item_Waiting_Room_Player : MonoBehaviour
{
    [SerializeField] bool m_Is_Player_Control;
    //[SerializeField] State_Item_Waiting_Room m_State_Item;
    [SerializeField] Model_Player_Join_Game m_Info_Player;

    bool is_Start;
    bool is_Data_Updated;

    [Header("_____ UI _____")]
    [SerializeField] GameObject m_Obj_Bg_Not_Player;
    [SerializeField] GameObject m_Cursor_Player;
    [SerializeField] GameObject m_Label_Hide;
    [SerializeField] GameObject m_Obj_Name;
    [SerializeField] Animator m_Anim;

    [Space(20)]
    [SerializeField] Image m_Icon;
    [SerializeField] Image m_LayoutIcon;
 
    //[SerializeField] float m_Heigth_Icon_Default = 250f;

    [Space(20)]
    [SerializeField] TextMeshProUGUI m_Txt_Name;
    bool m_Is_Using_Skin_2;

    [SerializeField]private Type_Rank_Character _typeRankCharacter;

    public void Set_Data(bool is_Player_Control, State_Item_Waiting_Room state, Model_Player_Join_Game info_Player )
    {
        m_Is_Using_Skin_2 = info_Player.is_Using_Skin_2;
        m_Is_Player_Control = is_Player_Control;
        //m_State_Item = state;
        m_Info_Player = info_Player;
        
        if (is_Start)
        {
            is_Data_Updated = false;
            On_Ready_Update_UI();
        }
    
    }

    public void Play_Anim_Show()
    {
        if (m_Is_Player_Control)
        {
            m_Anim.enabled = false;
        }
        else
        {
            m_Anim.enabled = true;
            m_Anim.Play_Animation_Play();
         //   SoundController.Play_Sounds(Type_Sound.Pop_Up);
        }
    }

    void Start()
    {
        is_Start = true;
        On_Ready_Update_UI();
    }

    private void On_Ready_Update_UI()
    {
        if (is_Data_Updated)
        {
            return;
        }
        is_Data_Updated = true; 
        if (m_Info_Player == null) return;

        if (m_Is_Player_Control)
        {
            m_Label_Hide.Set_Active(false);
            m_Anim.enabled = false;
        }
        else
        {
            m_Anim.enabled = true;
            m_Anim.Play_Animation_Idle();
        }

        
        m_Obj_Name.Set_Active(!m_Is_Player_Control);

        m_Obj_Bg_Not_Player.Set_Active(!m_Is_Player_Control);
        m_Cursor_Player.Set_Active(m_Is_Player_Control);

        m_Txt_Name.Set_Text(m_Info_Player.name);

        // Update Icon
        // m_Icon.sprite = Data_Home.Instance.Get_All_Sprite().Get_Icon_Skin_Small_Character(
        //     //m_Info_Player.Get_Type_Character(), 
        //     DataSaved.Get_Type_Character_Playing(m_Info_Player.type_Player),
        //    m_Is_Using_Skin_2         );
        // m_LayoutIcon.sprite = Data_Home.Instance.Get_All_Sprite()
        //     .Get_Icon_Rank_Character(m_Info_Player.type_Rank_Character);
        //
        
        m_Icon.sprite = Data_Home.Instance.Get_All_Sprite().Get_Icon_Skin_Small_Character(
            //m_Info_Player.Get_Type_Character(), 
            DataSaved.Get_Type_Character_Playing(m_Info_Player.type_Player),
           m_Is_Using_Skin_2         );
        
        // m_Icon.sprite = Data_Home.Instance.Get_All_Sprite().Get_Icon_Skin_Character_V2(
        //     //m_Info_Player.Get_Type_Character(), 
        //     DataSaved.Get_Type_Character_Playing(m_Info_Player.type_Player),
        //     m_Is_Using_Skin_2         );
    }
}
