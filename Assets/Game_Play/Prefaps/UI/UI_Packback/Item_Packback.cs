using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

using TMPro;

public class Item_Packback : MonoBehaviour
{
    UI_Packback m_UI_Packback;
    [HideInInspector] public bool is_Start;
    [SerializeField] List<Item_Stat_Upgrade> m_All_Item_Stat = new List<Item_Stat_Upgrade>();
    Model_Info_Turret m_Model_Info_Turret;

    Type_Player m_Type_Player;
    Type_Buy_Turret m_Type_Buy_Turret;
    int m_Number_Curr;
    int m_Number_Limited;

 
    [SerializeField] Animator m_Anim_Btn_Build;
    [SerializeField] TextMeshProUGUI m_Txt_Name;
    [SerializeField] Image m_Icon;
    [SerializeField] GameObject m_Layout_Limit;
    [SerializeField] TextMeshProUGUI m_Txt_Value_Limit;
    [SerializeField] TextMeshProUGUI m_Txt_Amount;
    [SerializeField] GameObject m_BG_Active_Btn;
    [SerializeField] GameObject m_BG_InActive_Btn;
    [SerializeField] Transform m_Pos_Tut_Hand;

 
    [SerializeField] private Type_Character m_Type_Character;
    Data_Type_Rank_Character m_Data_Type_Rank_Character;
    private float m_dame_EachLevel = 0f;
    private float m_dame_Star = 0f;
    private float m_dame_Bonus = 0f;

    private float m_Health_EachLevel = 0f;
    private float m_Health_Star = 0f;
    private float m_Health_Bonus = 0f;
    // Start is called before the first frame update
    void Start()
    {
        is_Start = true;
        On_Ready_Update_UI();
    }

    public void Set_Data(
            Type_Player type_Player,
            UI_Packback uI_Packback,
            Model_Info_Turret model_Info_Turret,
            Type_Buy_Turret type_Buy_Turret, int number_Curr, int number_Limit)
    {
        m_Type_Player = type_Player;
        m_UI_Packback = uI_Packback;
        m_Model_Info_Turret = model_Info_Turret;
        m_Type_Buy_Turret = type_Buy_Turret;
        m_Number_Curr = number_Curr;
        m_Number_Limited = My_Utils.Get_Max_Number_Can_Builded(m_Model_Info_Turret.type_Turret, number_Limit);



        m_Type_Character = Player_Manager.Instance.Get_Type_Character(Type_Player.Player_1);
        m_Data_Type_Rank_Character = Data_In_Game.Instance.Get_Data_Type_Rank_Character().Get_Data_Info_Character(
            Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character)
                .m_Rank_Character);

        m_dame_EachLevel = m_Data_Type_Rank_Character
            .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
            .m_Dame_Increase_With_Each_Level_Star;
        m_dame_Star = m_Data_Type_Rank_Character
            .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
            .m_Dame_Increase_With_Each_Star;
        m_dame_Bonus = (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character) * m_dame_EachLevel + m_dame_EachLevel) +
                         (DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1) * (m_dame_Star + m_dame_EachLevel * 10);

        m_Health_EachLevel = m_Data_Type_Rank_Character
            .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
            .m_Health_Increase_With_Each_Level_Star;

        m_Health_Star = m_Data_Type_Rank_Character
            .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
            .m_Health_Increase_With_Each_Star;

        m_Health_Bonus = (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character) * m_Health_EachLevel + m_Health_EachLevel) +
                         (DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1) * (m_Health_Star + m_Health_EachLevel * 10);
        //xekotby
        if (is_Start)
        {
            On_Ready_Update_UI();
        }
    }

    private void On_Ready_Update_UI()
    {
        if (m_Model_Info_Turret == null) return;

        m_Txt_Name.text = My_Utils.Get_Content_By_Language(m_Model_Info_Turret.model_Names);
        m_Icon.sprite = Data_In_Game.Instance.Get_Data_Sprite_In_Game().Get_Sprite_Turret(
            m_Model_Info_Turret.type_Turret, m_Model_Info_Turret.level
            );



        switch (m_Model_Info_Turret.type_Turret)
        {
            case Type_Turret.Bed:
            case Type_Turret.Door:
            case Type_Turret.Turret:
            case Type_Turret.Turret_Pierce:
            case Type_Turret.Energy_Tower:

                Update_Data_Stat_Level();
                break;

            default:
                Update_Data_Stat_Normal();
                break;
        }

        if (m_Type_Buy_Turret == Type_Buy_Turret.Limited)
        {
            m_Layout_Limit.Set_Active(true);
            m_Txt_Value_Limit.Set_Text(m_Number_Curr + "/" + m_Number_Limited);

            m_BG_Active_Btn.Set_Active(m_Number_Curr < m_Number_Limited);
            m_BG_InActive_Btn.Set_Active(m_Number_Curr >= m_Number_Limited);

        }
        else
        {
            m_Layout_Limit.Set_Active(false);
            m_BG_Active_Btn.Set_Active(true);
            m_BG_InActive_Btn.Set_Active(false);
        }

        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge && m_Model_Info_Turret.type_Turret == Type_Turret.Turret)
        {
            m_Layout_Limit.Set_Active(false);
        }

        m_Txt_Amount.Set_Text(DataSaved.Get_Sum_Item_Shop_Turret(m_Model_Info_Turret.type_Turret));

        Check_Tut();
    }

    private void Check_Tut()
    {
        m_Pos_Tut_Hand.Destroy_All_Children();

        m_Tmp_Data_Player = Player_Manager.Instance.Get_Data_Player(m_Type_Player);

        if (!DataSaved.Get_Complete_Tut_Use_Packback_Item() && m_Model_Info_Turret.type_Turret == Type_Turret.Repair_Station &&
            DataSaved.Get_Sum_Item_Shop_Turret(Type_Turret.Repair_Station) > 0 &&
            m_Tmp_Data_Player.Get_Sum_Repair_Station_Builded() < My_Utils.Get_Max_Number_Can_Builded(Type_Turret.Repair_Station, 1)
            )
        {
            var obj_Hand = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Hand_UI_Tut(), m_Pos_Tut_Hand);
            obj_Hand.transform.localPosition = Vector3.zero;

            m_Anim_Btn_Build.enabled = true;
        }
        else
        {
            m_Anim_Btn_Build.enabled = false;
        }
    }

    List<string> m_Data_Des_Stat = new List<string>();
    private void Update_Data_Stat_Level()
    {
        In_Active_All_Item_Stat();

        m_Data_Des_Stat.Clear();
        m_Data_Des_Stat.AddRange(My_Utils.Get_Des_Stat_Update(m_Model_Info_Turret.model_Skills, m_Model_Info_Turret.requirement_Upgrades, m_dame_Bonus, m_Health_Bonus));

        for (int i = 0; i < m_Data_Des_Stat.Count; i++)
        {
            m_All_Item_Stat[i].Set_Data_String(m_Data_Des_Stat[i]);
            m_All_Item_Stat[i].gameObject.SetActive(true);
        }
    }

    private void In_Active_All_Item_Stat()
    {
        for (int i = 0; i < m_All_Item_Stat.Count; i++)
        {
            if (m_All_Item_Stat[i])
            {
                m_All_Item_Stat[i].gameObject.SetActive(false);
            }
        }
    }

    private void Update_Data_Stat_Normal()
    {
        In_Active_All_Item_Stat();

        m_All_Item_Stat[0].Set_Data_String(m_Model_Info_Turret.description_EN, m_dame_Bonus, false);
        m_All_Item_Stat[0].gameObject.SetActive(true);
    }


    Data_Player m_Tmp_Data_Player;
    bool m_Tmp_Is_Can_Build;
    Type_Turret m_Tmp_Type_Turret;

    public void _Btn_Item_OnClick()
    {
        if (m_UI_Packback == null)
        {
            return;
        }

        //if (!m_UI_Packback.Get_Is_Ready_Clickable())
        //{
        //    return;
        //}

        if (m_Model_Info_Turret != null)
        {
            m_Tmp_Data_Player = Player_Manager.Instance.Get_Data_Player(m_Type_Player);

            // Check condition can Build
            m_Tmp_Is_Can_Build = false;
            if (m_Type_Buy_Turret == Type_Buy_Turret.Limited)
            {
                if (m_Number_Curr < m_Number_Limited)
                {
                    m_Tmp_Is_Can_Build = true;
                }
            }
            else
            {
                m_Tmp_Is_Can_Build = true;
            }

            if (m_Tmp_Is_Can_Build)
            {
                DataSaved.Set_Complete_Tut_Use_Packback_Item(true);
                m_Tmp_Type_Turret = m_Model_Info_Turret.type_Turret;
                My_Utils.Increase_Number_Turret(m_Tmp_Data_Player, m_Tmp_Type_Turret);
                DataSaved.Decrease_Sum_Item_Shop_Turret(m_Tmp_Type_Turret);

                if (m_UI_Packback)
                {
                    m_UI_Packback.On_Buy_Turret_Success(m_Tmp_Type_Turret);
                }
            }
        }
    }

}
