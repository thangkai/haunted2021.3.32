using UnityEngine;
using TMPro;

public class Item_Build : Item_Upgrade
{
    [Header("_________ Item_Build _______")]
    [SerializeField] UI_Build m_UI_Build;
    [SerializeField] GameObject m_Layout_Limit;
    [SerializeField] GameObject m_Layout_Inactive;
    [SerializeField] GameObject m_Obj_Tut_Hand;
    [SerializeField] TextMeshProUGUI m_Txt_Value_Limit;

    [Header("..... Read Only .....")]
    [SerializeField] Type_Player m_Type_Player;
    [SerializeField] Type_Buy_Turret m_Type_Buy_Turret;
    [SerializeField] int m_Number_Curr;
    [SerializeField] int m_Number_Limited;

    Data_Player m_Tmp_Data_Player;
    bool m_Tmp_Is_Can_Build;
    bool m_Is_Show;
    int m_Tmp_Price_Coin;
    int m_Tmp_Price_Energy;
    Type_Turret m_Tmp_Type_Turret;

    public void Set_Data(
        Type_Player type_Player,
        Type_Character type_Character,
        UI_Build uI_Build, 
        Model_Info_Turret model_Info_Turret, 
        Type_Buy_Turret type_Buy_Turret, int number_Curr, int number_Limit, bool is_Show)
    {
        m_Type_Player = type_Player;
        m_Type_Character = type_Character;
        type_Item_Upgrade = Type_Item_Upgrade.Upgrade_Normal;
        m_UI_Build = uI_Build;
        m_Model_Info_Turret = model_Info_Turret;
        m_Type_Buy_Turret = type_Buy_Turret;
        m_Number_Curr = number_Curr;
        m_Number_Limited = My_Utils.Get_Max_Number_Can_Builded(m_Model_Info_Turret.type_Turret, number_Limit);
        m_Is_Show = is_Show;

        if (is_Start)
        {
            On_Ready_Update_UI();
        }
    }

    public override void On_Ready_Update_UI()
    {
        base.On_Ready_Update_UI();

        if (m_Type_Buy_Turret == Type_Buy_Turret.Limited)
        {
            m_Layout_Limit.Set_Active(true);
            m_Txt_Value_Limit.Set_Text(m_Number_Curr + "/" + m_Number_Limited);
        }
        else
        {
            m_Layout_Limit.Set_Active(false);
        }

        if(DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge && m_Model_Info_Turret.type_Turret == Type_Turret.Turret)
        {
            m_Layout_Limit.Set_Active(false);
        }

        m_Layout_Inactive.Set_Active(!m_Is_Show);
        m_Obj_Tut_Hand.Set_Active(false);

       
    }



    public void _Btn_Item_OnClick()
    {
        if(m_UI_Build == null)
        {
            return;
        }

        if (!m_UI_Build.Get_Is_Ready_Clickable())
        {
            return;
        }

        if (m_Model_Info_Turret != null)
        {
            m_Tmp_Data_Player = Player_Manager.Instance.Get_Data_Player(m_Type_Player);

            // Check condition can Build
            m_Tmp_Is_Can_Build = false;
            m_Tmp_Price_Coin = My_Utils.Get_Price(m_Type_Character, m_Model_Info_Turret.type_Turret, m_Model_Info_Turret.price_Upgrades.price_Coin);
            m_Tmp_Price_Energy = My_Utils.Get_Price(m_Type_Character, m_Model_Info_Turret.type_Turret, m_Model_Info_Turret.price_Upgrades.price_Energy);

            // if (Check_Condition_Tut() || DataSaved.Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem.Skill_6_Upgrade_Free) && DataSaved.Get_Count_Other_Player_Die() > 0)
            // {
            //     m_Tmp_Price_Coin = 0;
            //     m_Tmp_Price_Energy = 0;
            // }

            if (m_Tmp_Data_Player.Get_Sum_Coin() >= m_Tmp_Price_Coin && m_Tmp_Data_Player.Get_Sum_Energy() >= m_Tmp_Price_Energy)
            {
                if((DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge && 
                    m_Model_Info_Turret.type_Turret == Type_Turret.Turret))
                {
                    m_Tmp_Is_Can_Build = true;
                }
                else
                {
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
                }
            }

         

            if (m_Tmp_Is_Can_Build)
            {
                m_Tmp_Type_Turret = m_Model_Info_Turret.type_Turret;
                My_Utils.Increase_Number_Turret(m_Tmp_Data_Player, m_Tmp_Type_Turret);

                if (m_Tmp_Price_Coin > 0)
                {
                    m_Tmp_Data_Player.Decrease_Coin(m_Tmp_Price_Coin);
                }

                if (m_Tmp_Price_Energy > 0)
                {
                    m_Tmp_Data_Player.Decrease_Energy(m_Tmp_Price_Energy);
                }

                if (DataSaved.Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem.Skill_6_Upgrade_Free) 
                    && DataSaved.Get_Count_Other_Player_Die() > 0)
                {
                    DataSaved.Decrease_Count_Other_Player_Die();
                }

                if (m_UI_Build)
                {
                    m_UI_Build.On_Buy_Turret_Success(m_Tmp_Type_Turret);
                }
            }
        }
    }

    public override bool Check_Can_Buy_Or_Upgrade_Item()
    {
        // if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && DataSaved.Get_Current_Loading_Level() == 0 &&
        //     ((m_Model_Info_Turret.type_Turret == Type_Turret.Turret && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 3))
        //     )
        // {
        //     return true;
        // }

        bool output = base.Check_Can_Buy_Or_Upgrade_Item();

        if (output && 
            (
            (m_Type_Buy_Turret == Type_Buy_Turret.Limited && m_Number_Curr >= m_Number_Limited && ((DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story) || DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level ) )||
            (m_Type_Buy_Turret == Type_Buy_Turret.Limited && m_Number_Curr >= m_Number_Limited && m_Model_Info_Turret.type_Turret == Type_Turret.Repair_Station)||
            (m_Type_Buy_Turret == Type_Buy_Turret.Limited && m_Number_Curr >= m_Number_Limited && m_Model_Info_Turret.type_Turret == Type_Turret.Turret_Pierce)))//xekotoby
        {
            output = false;
        }

        return output;
    }
}
