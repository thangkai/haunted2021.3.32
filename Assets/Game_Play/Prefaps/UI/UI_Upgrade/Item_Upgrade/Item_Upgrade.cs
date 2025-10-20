using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;


public class Item_Upgrade : MonoBehaviour
{
    public Type_Character m_Type_Character;
    [SerializeField] Bool_Global_Variable m_Live_Data_Coin_In_Game_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Energy_In_Game_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Other_Player_Die;

   [SerializeField] UI_Upgrade m_UI_Upgrade;
    [HideInInspector] public bool is_Start;
    public Type_Item_Upgrade type_Item_Upgrade;
    Model_Price m_Reward_After_Remove;
    public Model_Info_Turret m_Model_Info_Turret;
    [SerializeField] Image m_Icon;
    [SerializeField] TextMeshProUGUI m_Txt_Name;

   
    [SerializeField]
    GameObject m_Obj_Price_Coin;

    [SerializeField] GameObject m_Obj_Active_Btn_Coin;
    [SerializeField] GameObject m_Obj_In_Active_Btn_Coin;
    [SerializeField] GameObject m_Bg_Remove_Btn_Coin;

   
    [SerializeField]
    GameObject m_Obj_Price_Energy;

    [SerializeField] GameObject m_Obj_Active_Btn_Energy;
    [SerializeField] GameObject m_Obj_In_Active_Btn_Energy;
    [SerializeField] GameObject m_Bg_Remove_Btn_Energy;

  
    [SerializeField]
    GameObject m_Obj_Price_Coin_Energy;

    [SerializeField] GameObject m_Obj_Active_Btn_Coin_Energy;
    [SerializeField] GameObject m_Obj_In_Active_Btn_Coin_Energy;
    [SerializeField] GameObject m_Bg_Remove_Btn_Coin_Energy;
    [SerializeField] TextMeshProUGUI m_Txt_Price_Coin_2;
    [SerializeField] TextMeshProUGUI m_Txt_Price_Energy_2;

    [SerializeField] GameObject m_Obj_Price_Ads;
    [SerializeField] TextMeshProUGUI m_Txt_Price_Coin;
    [SerializeField] TextMeshProUGUI m_Txt_Price_Energy;
    [SerializeField] GameObject m_Obj_Anim_Tut_Hand;
    [SerializeField] Animator m_Anim_Btn_Ads;

    [SerializeField] GameObject m_Obj_Smoke;
    [SerializeField] RectTransform m_Rect_Smoke;

    [SerializeField] List<Item_Stat_Upgrade> m_All_Item_Stat = new List<Item_Stat_Upgrade>();


    [SerializeField] List<GameObject> m_Star_List = new List<GameObject>();
    [SerializeField] private Sprite m_Star_active;
    [SerializeField] private Sprite m_Star_No_Active;


    Data_Type_Rank_Character m_Data_Type_Rank_Character;
    private float m_dame_EachLevel = 0f;
    private float m_dame_Star = 0f;
    private float m_dame_Bonus = 0f;

    private float m_Health_EachLevel = 0f;
    private float m_Health_Star = 0f;
    private float m_Health_Bonus = 0f;

    private void Start()
    {
        is_Start = true;
        On_Ready_Update_UI();

        Add_Listener();
    }

    private void OnDestroy()
    {
        if (m_Live_Data_Coin_In_Game_Change)
        {
            m_Live_Data_Coin_In_Game_Change.OnValueChanged.RemoveListener(On_Data_Coin_Energy_Change);
        }

        if (m_Live_Data_Energy_In_Game_Change)
        {
            m_Live_Data_Energy_In_Game_Change.OnValueChanged.RemoveListener(On_Data_Coin_Energy_Change);
        }


        if (m_Live_Data_Other_Player_Die)
        {
            m_Live_Data_Other_Player_Die.OnValueChanged.RemoveListener(On_Ready_Update_UI);
        }
    }

    private void Add_Listener()
    {
        if (m_Live_Data_Coin_In_Game_Change)
        {
            m_Live_Data_Coin_In_Game_Change.OnValueChanged.AddListener(On_Data_Coin_Energy_Change);
        }

        if (m_Live_Data_Energy_In_Game_Change)
        {
            m_Live_Data_Energy_In_Game_Change.OnValueChanged.AddListener(On_Data_Coin_Energy_Change);
        }

        if (m_Live_Data_Other_Player_Die)
        {
            m_Live_Data_Other_Player_Die.OnValueChanged.AddListener(On_Ready_Update_UI);
        }
    }

    //updateofjura
    public void Change_W_H_Item_Onslaught()
    {
        // this.GetComponent<RectTransform>().SetHeight(400);
        var rect = GetComponent<RectTransform>();
        rect.SetSizeWithCurrentAnchors(RectTransform.Axis.Vertical, 400);
    }

    public void Change_W_H_Item()
    {
       // this.GetComponent<RectTransform>().SetHeight(260);
        
        var rect = GetComponent<RectTransform>();
        rect.SetSizeWithCurrentAnchors(RectTransform.Axis.Vertical, 260);
    }

    public void Star_Acive(int m_Number_star)
    {
        for (int i = 0; i < m_Star_List.Count; i++)
        {
            if (i < m_Number_star)
            {
                m_Star_List[i].GetComponent<Image>().sprite = m_Star_active;
            }
            else
            {
                m_Star_List[i].GetComponent<Image>().sprite = m_Star_No_Active;
            }
        }
    }

    // de an hien star với các type_Turret khác 
    public void Star_Onslaught()
    {
        for (int i = 0; i < m_Star_List.Count; i++)
        {
            m_Star_List[i].SetActive(true);
        }
    }

    public void Star_Onslaught_Inactive()
    {
        for (int i = 0; i < m_Star_List.Count; i++)
        {
            m_Star_List[i].SetActive(false);
        }
    }


    public void Set_Data_Remove(UI_Upgrade uI_Upgrade, Model_Price model_Price)
    {
        m_UI_Upgrade = uI_Upgrade;
        m_Reward_After_Remove = model_Price;
        type_Item_Upgrade = Type_Item_Upgrade.Remove_Item;
        if (is_Start)
        {
            On_Ready_Update_UI();
        }
    }

    public void Set_Data_Upgrade_By_Ads(UI_Upgrade uI_Upgrade, Model_Info_Turret model_Info_Turret,
        Type_Character type_Character)
    {
        m_Type_Character = type_Character;
        type_Item_Upgrade = Type_Item_Upgrade.Upgrade_By_Ads;
        m_UI_Upgrade = uI_Upgrade;
        m_Model_Info_Turret = model_Info_Turret;

        if (is_Start)
        {
            On_Ready_Update_UI();
        }
    }

    public void Set_Data(UI_Upgrade uI_Upgrade, Model_Info_Turret model_Info_Turret, Type_Character type_Character)
    {
        m_Type_Character = type_Character;
        type_Item_Upgrade = Type_Item_Upgrade.Upgrade_Normal;
        m_UI_Upgrade = uI_Upgrade;
        m_Model_Info_Turret = model_Info_Turret;


        m_Data_Type_Rank_Character = Data_In_Game.Instance.Get_Data_Type_Rank_Character().Get_Data_Info_Character(
            Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character)
                .m_Rank_Character);
        if (DataSaved.Get_Key_Is_Try_Skin())
        {
            m_dame_EachLevel = m_Data_Type_Rank_Character.m_Info_Type_Rank[0].m_Dame_Increase_With_Each_Level_Star;
            m_dame_Star = m_Data_Type_Rank_Character.m_Info_Type_Rank[0].m_Dame_Increase_With_Each_Star;

            m_Health_EachLevel = m_Data_Type_Rank_Character.m_Info_Type_Rank[0].m_Health_Increase_With_Each_Level_Star;

            m_Health_Star = m_Data_Type_Rank_Character.m_Info_Type_Rank[0].m_Health_Increase_With_Each_Star;
        }
        else
        {
            Config_Dame_HP_Bonus();
        }


        //xekotoby
        if (is_Start)
        {
            On_Ready_Update_UI();
        }
    }

    public void Config_Dame_HP_Bonus()
    {
        m_dame_EachLevel = m_Data_Type_Rank_Character
            .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
            .m_Dame_Increase_With_Each_Level_Star;
        m_dame_Star = m_Data_Type_Rank_Character
            .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
            .m_Dame_Increase_With_Each_Star;

        m_Health_EachLevel = m_Data_Type_Rank_Character
            .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
            .m_Health_Increase_With_Each_Level_Star;

        m_Health_Star = m_Data_Type_Rank_Character
            .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
            .m_Health_Increase_With_Each_Star;


        //dame bonus =  dame moi level * level hien tai + dame moilv+ dame ngoi sao * dame ngoi sao + dame moi lv 
        Config_Dame_Bonus_Total();
        m_dame_Bonus =
            (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character)) * m_dame_EachLevel +
               m_dame_Star + m_Dame_Total;


        // (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character) * m_dame_EachLevel + m_dame_EachLevel) +
        // (DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1) * (m_dame_Star +
        //                                                               m_dame_EachLevel *
        //                                                               (5 * DataSaved.Get_Is_Show_Star_Lv_SKin(
        //                                                                   m_Type_Character)));


        m_dame_Bonus +=
            Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character).m_Atk;

        m_dame_Bonus *= (float)Math.Pow(2, ((m_Model_Info_Turret.level + 1) - 1));
        m_dame_Bonus = (float)Math.Round(m_dame_Bonus, 2);

        m_Health_Bonus = (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character)) * m_Health_EachLevel +
                          m_Health_Star + m_Hp_Total;



        m_Health_Bonus +=
            Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character).m_Hp;
        m_Health_Bonus *= (float)Math.Pow(2, ((m_Model_Info_Turret.level + 1) - 1));

        m_Health_Bonus = (float)Math.Round(m_Health_Bonus, 2);
    }

    private float m_Dame_Total;
    private float m_Hp_Total;
    private int starActive = 0;

    public void Config_Dame_Bonus_Total()
    {
        starActive = DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character);

        m_Dame_Total = 0;
        m_Hp_Total = 0;
        // mau tong = mau nhan vat + mau star hien tai + (mau moi lv *lv)+?? dang thieu mau vu
        if (starActive == 2)
        {

            m_Dame_Total = m_Data_Type_Rank_Character
                .m_Info_Type_Rank[0]
                .m_Dame_Increase_With_Each_Level_Star * (5);
            m_Hp_Total = m_Data_Type_Rank_Character
                .m_Info_Type_Rank[0]
                .m_Health_Increase_With_Each_Level_Star * (5);
        }

        if (starActive == 3)
        {
            m_Dame_Total += m_Data_Type_Rank_Character
                .m_Info_Type_Rank[0]
                .m_Dame_Increase_With_Each_Level_Star * (5);
            m_Dame_Total += m_Data_Type_Rank_Character
                                .m_Info_Type_Rank[1]
                                .m_Dame_Increase_With_Each_Level_Star * (10) +
                            m_Data_Type_Rank_Character
                                .m_Info_Type_Rank[1]
                                .m_Dame_Increase_With_Each_Star;



            m_Hp_Total += m_Data_Type_Rank_Character
                .m_Info_Type_Rank[0]
                .m_Health_Increase_With_Each_Level_Star * (5);
            m_Hp_Total += m_Data_Type_Rank_Character
                              .m_Info_Type_Rank[1]
                              .m_Health_Increase_With_Each_Level_Star * (10) +
                          m_Data_Type_Rank_Character
                              .m_Info_Type_Rank[1]
                              .m_Health_Increase_With_Each_Star;
        }
    }
    public virtual void On_Ready_Update_UI()
    {
        if (m_Model_Info_Turret == null) return;

        m_Obj_Anim_Tut_Hand.Set_Active(false);

        switch (type_Item_Upgrade)
        {
            case Type_Item_Upgrade.Upgrade_Normal:
                Update_Data_Normal(false);
                break;

            case Type_Item_Upgrade.Upgrade_By_Ads:
                Update_Data_Normal(true);
                break;

            case Type_Item_Upgrade.Remove_Item:
                Update_Data_Remove_Item();
                break;
        }
    }

    string m_Temp_Des;
    int m_Price_Coin;
    int m_Price_Energy;

    private void Update_Data_Remove_Item()
    {
        m_Icon.sprite = Data_In_Game.Instance.Get_Data_Sprite_In_Game().Get_Sprite_Remove_Item();
        m_Txt_Name.text = "Remove";
        // Update data Des
        In_Active_All_Item_Stat();

        m_Temp_Des = "Remove and return certain resources";
        m_All_Item_Stat[0].Set_Data_String(m_Temp_Des);
        m_All_Item_Stat[0].gameObject.SetActive(true);

        // Update data Price
        m_Obj_Price_Ads.Set_Active(false);
        m_Price_Coin = (int)m_Reward_After_Remove.price_Coin / 2;
        m_Price_Energy = (int)m_Reward_After_Remove.price_Energy / 2;
        m_Obj_Price_Coin.Set_Active(m_Price_Coin > 0);
        m_Obj_Price_Energy.Set_Active(m_Price_Energy > 0);
        m_Txt_Price_Coin.Set_Text(m_Price_Coin.ToString());
        m_Txt_Price_Coin_2.Set_Text(m_Price_Coin.ToString());

        m_Txt_Price_Energy.Set_Text(m_Price_Energy.ToString());
        m_Txt_Price_Energy_2.Set_Text(m_Price_Energy.ToString());

        m_Obj_Price_Coin_Energy.Set_Active(false);

        if (m_Price_Coin > 0 && m_Price_Energy > 0)
        {
            m_Obj_Price_Coin.Set_Active(false);
            m_Obj_Price_Energy.Set_Active(false);
            m_Obj_Price_Coin_Energy.Set_Active(true);
        }

        m_Obj_Active_Btn_Coin.Set_Active(false);
        m_Obj_Active_Btn_Energy.Set_Active(false);
        m_Obj_In_Active_Btn_Coin_Energy.Set_Active(false);

        m_Obj_In_Active_Btn_Coin.Set_Active(false);
        m_Obj_In_Active_Btn_Energy.Set_Active(false);
        m_Obj_In_Active_Btn_Coin_Energy.Set_Active(false);

        m_Bg_Remove_Btn_Coin.Set_Active(true);
        m_Bg_Remove_Btn_Energy.Set_Active(true);
        m_Bg_Remove_Btn_Coin_Energy.Set_Active(true);
    }


    int label_Price_Coin;
    int label_Price_Energy;
    string m_Str_Label_Price_Coin;
    string m_Str_Label_Price_Energy;

    private void Update_Data_Normal(bool isAds)
    {
        m_Bg_Remove_Btn_Coin.Set_Active(false);
        m_Bg_Remove_Btn_Energy.Set_Active(false);
        m_Bg_Remove_Btn_Coin_Energy.Set_Active(false);

        m_Obj_Smoke.Set_Active(false);

        m_Txt_Name.text = m_Model_Info_Turret.model_Names.name_EN;
        m_Icon.sprite = Data_In_Game.Instance.Get_Data_Sprite_In_Game().Get_Sprite_Turret(
            m_Model_Info_Turret.type_Turret, m_Model_Info_Turret.level
        );

        //xekotoby
        m_Data_Type_Rank_Character = Data_In_Game.Instance.Get_Data_Type_Rank_Character().Get_Data_Info_Character(
            Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character)
                .m_Rank_Character);
        if (DataSaved.Get_Key_Is_Try_Skin())
        {
            m_dame_EachLevel = m_Data_Type_Rank_Character.m_Info_Type_Rank[0].m_Dame_Increase_With_Each_Level_Star;
            m_dame_Star = m_Data_Type_Rank_Character.m_Info_Type_Rank[0].m_Dame_Increase_With_Each_Star;

            m_Health_EachLevel = m_Data_Type_Rank_Character.m_Info_Type_Rank[0].m_Health_Increase_With_Each_Level_Star;

            m_Health_Star = m_Data_Type_Rank_Character.m_Info_Type_Rank[0].m_Health_Increase_With_Each_Star;
        }
        else
        {
            m_dame_EachLevel = m_Data_Type_Rank_Character
                .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
                .m_Dame_Increase_With_Each_Level_Star;
            m_dame_Star = m_Data_Type_Rank_Character
                .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
                .m_Dame_Increase_With_Each_Star;

            m_Health_EachLevel = m_Data_Type_Rank_Character
                .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
                .m_Health_Increase_With_Each_Level_Star;

            m_Health_Star = m_Data_Type_Rank_Character
                .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
                .m_Health_Increase_With_Each_Star;
        }

        m_dame_Bonus =
            (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character)) * m_dame_EachLevel +
            m_dame_Star + m_Dame_Total + Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character).m_Atk;


        m_dame_Bonus *=

            (float)Math.Pow(2, ((m_Model_Info_Turret.level + 1) - 1));
        m_dame_Bonus = (float)Math.Round(m_dame_Bonus, 2);

        m_Health_Bonus = (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character)) * m_Health_EachLevel +
                          m_Health_Star + m_Hp_Total + Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character).m_Hp;

        m_Health_Bonus *=

            (float)Math.Pow(2, ((m_Model_Info_Turret.level + 1) - 1));
        m_Health_Bonus = (float)Math.Round(m_Health_Bonus, 2);

        //xekotoby

        // Update Data Price
        if (!isAds)
        {
            m_Obj_Price_Ads.Set_Active(false);
            m_Price_Coin = My_Utils.Get_Price(m_Type_Character, m_Model_Info_Turret.type_Turret,
                m_Model_Info_Turret.price_Upgrades.price_Coin);
            m_Price_Energy = My_Utils.Get_Price(m_Type_Character, m_Model_Info_Turret.type_Turret,
                m_Model_Info_Turret.price_Upgrades.price_Energy);

            label_Price_Coin = m_Price_Coin;
            label_Price_Energy = m_Price_Energy;

            if (Check_Condition_Tut())
            {
                label_Price_Coin = 0;
                label_Price_Energy = 0;
                m_Obj_Anim_Tut_Hand.Set_Active(true);
            }
            else if (DataSaved.Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem.Skill_6_Upgrade_Free) &&
                     DataSaved.Get_Count_Other_Player_Die() > 0)
            {
                label_Price_Coin = 0;
                label_Price_Energy = 0;
            }

            if (label_Price_Coin <= 0)
            {
                m_Str_Label_Price_Coin = false ? "Miễn phí" : "Free";
            }
            else
            {
                m_Str_Label_Price_Coin = label_Price_Coin.ToString();
            }

            if (label_Price_Energy <= 0)
            {
                m_Str_Label_Price_Energy = false ? "Miễn phí" : "Free";
            }
            else
            {
                m_Str_Label_Price_Energy = label_Price_Energy.ToString();
            }

            m_Obj_Price_Coin.Set_Active(m_Price_Coin > 0);
            m_Obj_Price_Energy.Set_Active(m_Price_Energy > 0);

            m_Txt_Price_Coin.Set_Text(m_Str_Label_Price_Coin);
            m_Txt_Price_Coin_2.Set_Text(m_Str_Label_Price_Coin);

            m_Txt_Price_Energy.Set_Text(m_Str_Label_Price_Energy);
            m_Txt_Price_Energy_2.Set_Text(m_Str_Label_Price_Energy);

            m_Obj_Price_Coin_Energy.Set_Active(false);

            if (m_Price_Coin > 0 && m_Price_Energy > 0)
            {
                m_Obj_Price_Coin.Set_Active(false);
                m_Obj_Price_Energy.Set_Active(false);
                m_Obj_Price_Coin_Energy.Set_Active(true);
            }
        }

        switch (m_Model_Info_Turret.type_Turret)
        {
            case Type_Turret.Bed:
            case Type_Turret.Door:
            case Type_Turret.Turret:
            case Type_Turret.Turret_Bed:
            case Type_Turret.Turret_Pierce:
            case Type_Turret.Energy_Tower:
                Update_Data_Stat_Level();
                break;

            default:
                Update_Data_Stat_Normal();
                break;
        }

        if (m_Model_Info_Turret.type_Turret == Type_Turret.Energy_Tower)
        {
            if (m_Model_Info_Turret.level == 8)
            {
                m_Obj_Smoke.Set_Active(true);
                m_Rect_Smoke.localPosition = new Vector3(32f, 79.2f, 0f);
            }
            else if (m_Model_Info_Turret.level == 9)
            {
                m_Obj_Smoke.Set_Active(true);
                m_Rect_Smoke.localPosition = new Vector3(14.4f, 84f, 0f);
            }
        }

        On_Data_Coin_Energy_Change();

        if (isAds)
        {
            m_Obj_Price_Coin.Set_Active(false);
            m_Obj_Price_Energy.Set_Active(false);
            m_Obj_Price_Coin_Energy.Set_Active(false);
            m_Obj_Price_Ads.Set_Active(true);
        }
    }

    public virtual bool Check_Condition_Tut()
    {
        return !DataSaved.Get_Is_Complete_Tutorial() &&
               DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story &&
               DataSaved.Get_Current_Loading_Level() == 0 &&
               ((m_Model_Info_Turret.type_Turret == Type_Turret.Bed &&
                 DataSaved.Get_Index_Claimed_Mission_Tutorial() == 1) ||
                (m_Model_Info_Turret.type_Turret == Type_Turret.Door &&
                 DataSaved.Get_Index_Claimed_Mission_Tutorial() == 2) ||
                (m_Model_Info_Turret.type_Turret == Type_Turret.Turret &&
                 DataSaved.Get_Index_Claimed_Mission_Tutorial() == 4)
               );
    }

    List<string> m_Data_Des_Stat = new List<string>();

    private void Update_Data_Stat_Level()
    {
        In_Active_All_Item_Stat();

        m_Data_Des_Stat.Clear();


        m_Data_Des_Stat.AddRange(My_Utils.Get_Des_Stat_Update(m_Model_Info_Turret.model_Skills,
            m_Model_Info_Turret.requirement_Upgrades, m_dame_Bonus, m_Health_Bonus));

        for (int i = 0; i < m_Data_Des_Stat.Count; i++)
        {
            m_All_Item_Stat[i].Set_Data_String(m_Data_Des_Stat[i]);
            m_All_Item_Stat[i].gameObject.SetActive(true);
        }
    }

    private void Update_Data_Stat_Normal()
    {
        In_Active_All_Item_Stat();

        m_All_Item_Stat[0]
            .Set_Data_String(


                     m_Model_Info_Turret.description_EN, m_dame_Bonus, false);
        m_All_Item_Stat[0].gameObject.SetActive(true);
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

    public void _Btn_Upgrade_Item_OnClick()
    {
        if (m_UI_Upgrade)
        {
            m_UI_Upgrade.Btn_Upgrade_Item_OnClick(type_Item_Upgrade);
            //updateofjura
        }
    }

    bool m_Is_Can_Buy_Item;
    Data_Player m_Data_Player;

    public virtual bool Check_Can_Buy_Or_Upgrade_Item()
    {
        m_Data_Player = Player_Manager.Instance.Get_Data_Player_Current();
        bool ouput = m_Data_Player.Get_Sum_Coin() >= My_Utils.Get_Price(m_Type_Character,
                         m_Model_Info_Turret.type_Turret, m_Model_Info_Turret.price_Upgrades.price_Coin)
                     && m_Data_Player.Get_Sum_Energy() >= My_Utils.Get_Price(m_Type_Character,
                         m_Model_Info_Turret.type_Turret, m_Model_Info_Turret.price_Upgrades.price_Energy);

        bool is_Pass_Requirement = true;

        if (m_Model_Info_Turret.type_Turret == Type_Turret.Bed)
        {
            is_Pass_Requirement = My_Utils.Check_Requirement(Game_Controller.Instance.Get_Player_Curr(),
                m_Model_Info_Turret.requirement_Upgrades);
        }

        if (is_Pass_Requirement && Check_Condition_Tut())
        {
            return true;
        }

        if (is_Pass_Requirement &&
            DataSaved.Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem.Skill_6_Upgrade_Free) &&
            DataSaved.Get_Count_Other_Player_Die() > 0)
        {
            return true;
        }

        ouput = is_Pass_Requirement && ouput;

        return ouput;
    }

    public void On_Data_Coin_Energy_Change()
    {
        if (type_Item_Upgrade == Type_Item_Upgrade.Upgrade_By_Ads)
        {
            m_Is_Can_Buy_Item = Check_Can_Buy_Or_Upgrade_Item();
            if (m_Anim_Btn_Ads)
            {
                m_Anim_Btn_Ads.enabled = !m_Is_Can_Buy_Item;
            }

            return;
        }

        if (type_Item_Upgrade != Type_Item_Upgrade.Upgrade_Normal) return;

        m_Is_Can_Buy_Item = Check_Can_Buy_Or_Upgrade_Item();

        Set_Active_Bg_Btn(m_Is_Can_Buy_Item);
    }

    private void Set_Active_Bg_Btn(bool is_Active)
    {
        if (type_Item_Upgrade != Type_Item_Upgrade.Upgrade_By_Ads)
        {
            m_Obj_Active_Btn_Coin.Set_Active(is_Active);
            m_Obj_Active_Btn_Energy.Set_Active(is_Active);
            m_Obj_In_Active_Btn_Coin_Energy.Set_Active(is_Active);

            m_Obj_In_Active_Btn_Coin.Set_Active(!is_Active);
            m_Obj_In_Active_Btn_Energy.Set_Active(!is_Active);
            m_Obj_In_Active_Btn_Coin_Energy.Set_Active(!is_Active);
        }
    }
}