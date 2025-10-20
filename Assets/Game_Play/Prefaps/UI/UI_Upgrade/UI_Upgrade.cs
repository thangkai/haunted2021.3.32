using System.Collections.Generic;
using UnityEngine;

public class UI_Upgrade : Base_UI
{
    bool m_Is_Ready_Clickable;
    [SerializeField] CanvasGroup m_Canvas;
    [SerializeField] Base_Turret m_Curr_Turret;
    [SerializeField] Model_Price m_Price_Curr;
    [SerializeField] Type_Player m_Type_Player;
    [SerializeField] Model_Info_Turret m_Model_Info_Turret;

    [SerializeField] List<Item_Upgrade> m_All_Item_Upgrade = new List<Item_Upgrade>();




    [SerializeField] int Turret_Bed_Star = 1;


    public override void Open_UI(Base_Turret base_Turret, Type_Player type_Player, Model_Info_Turret model_Info_Turret, Model_Price price_Curr)
    {
        m_Is_Ready_Clickable = false;
        m_Curr_Turret = base_Turret;
        m_Price_Curr = price_Curr;
        m_Type_Player = type_Player;
        m_Model_Info_Turret = model_Info_Turret;
        base.Open_UI();
    }







    public override void OnReadyOpenUI()
    {
        m_Canvas.alpha = 1;
        for (int i = 0; i < m_All_Item_Upgrade.Count; i++)
        {
            if (m_All_Item_Upgrade[i])
            {
                m_All_Item_Upgrade[i].gameObject.SetActive(false);
                //updateofjura
                m_All_Item_Upgrade[i].Star_Onslaught_Inactive();
                m_All_Item_Upgrade[i].Change_W_H_Item();
            }
        }

        switch (m_Model_Info_Turret.type_Turret)
        {
            case Type_Turret.Bed:

                if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && DataSaved.Get_Current_Loading_Level() == 0 && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 1)
                {
                    m_All_Item_Upgrade[0].gameObject.SetActive(true);
                    m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);
                    m_All_Item_Upgrade[1].gameObject.SetActive(false);
                }
                else
                {
                    // Add Item Price Update Normal
                    m_All_Item_Upgrade[0].gameObject.SetActive(true);
                    m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);
                    // Add Item Price Update By ADS
                    m_All_Item_Upgrade[1].gameObject.SetActive(true);
                    //  m_All_Item_Upgrade[1].Set_Data_Upgrade_By_Ads(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);

                    m_All_Item_Upgrade[1].gameObject.SetActive(false);
                }

                break;

            case Type_Turret.Door:

                if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && DataSaved.Get_Current_Loading_Level() == 0 && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 2)
                {
                    m_All_Item_Upgrade[0].gameObject.SetActive(true);
                    m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);
                    m_All_Item_Upgrade[1].gameObject.SetActive(false);
                }
                else
                {
                    // Add Item Price Update Normal
                    m_All_Item_Upgrade[0].gameObject.SetActive(true);
                    m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);
                    // Add Item Price Update By ADS
                    m_All_Item_Upgrade[1].gameObject.SetActive(true);
                    m_All_Item_Upgrade[1].gameObject.SetActive(false);
                    //  m_All_Item_Upgrade[1].Set_Data_Upgrade_By_Ads(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);
                }
                break;

            case Type_Turret.Turret:
                //updateofjura

                if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && DataSaved.Get_Current_Loading_Level() == 0 &&
                ((m_Model_Info_Turret.type_Turret == Type_Turret.Turret && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 4)
                ))
                {
                    // Add Item Price Update Normal
                    m_All_Item_Upgrade[0].gameObject.SetActive(true);
                    m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);

                    m_All_Item_Upgrade[1].gameObject.SetActive(false);
                }
                else
                {
                    // Add Item Price Update Normal
                    m_All_Item_Upgrade[0].gameObject.SetActive(true);
                    m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);
                    // Add Item Destroy
                    m_All_Item_Upgrade[1].gameObject.SetActive(true);
                    m_All_Item_Upgrade[1].Set_Data_Remove(this, m_Price_Curr);
                }
                break;

            //updateofjura

            case Type_Turret.Turret_Bed:
                m_All_Item_Upgrade[0].Star_Onslaught();
                m_All_Item_Upgrade[0].Star_Acive(Turret_Bed_Star);
                m_All_Item_Upgrade[0].Change_W_H_Item_Onslaught();
                m_All_Item_Upgrade[0].gameObject.SetActive(true);
                m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);
                m_All_Item_Upgrade[1].gameObject.SetActive(false);
                break;
            case Type_Turret.Turret_Pierce:
                //updateofjura

                if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && DataSaved.Get_Current_Loading_Level() == 0 &&
                    ((m_Model_Info_Turret.type_Turret == Type_Turret.Turret && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 4)
                    ))
                {
                    // Add Item Price Update Normal
                    m_All_Item_Upgrade[0].gameObject.SetActive(true);
                    m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);

                    m_All_Item_Upgrade[1].gameObject.SetActive(false);
                }
                else
                {
                    // Add Item Price Update Normal
                    m_All_Item_Upgrade[0].gameObject.SetActive(true);
                    m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);
                    // Add Item Destroy
                    m_All_Item_Upgrade[1].gameObject.SetActive(true);
                    m_All_Item_Upgrade[1].Set_Data_Remove(this, m_Price_Curr);
                }
                break;

            //updateofjura
            case Type_Turret.Energy_Tower:

                if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && DataSaved.Get_Current_Loading_Level() == 0 &&
                    ((m_Model_Info_Turret.type_Turret == Type_Turret.Turret && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 4)
                    ))
                {
                    // Add Item Price Update Normal
                    m_All_Item_Upgrade[0].gameObject.SetActive(true);
                    m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);
                    m_All_Item_Upgrade[1].gameObject.SetActive(false);
                }
                else
                {
                    // Add Item Price Update Normal
                    m_All_Item_Upgrade[0].gameObject.SetActive(true);
                    m_All_Item_Upgrade[0].Set_Data(this, m_Model_Info_Turret, m_Curr_Turret.m_Type_Character);
                    // Add Item Destroy
                    m_All_Item_Upgrade[1].gameObject.SetActive(true);
                    m_All_Item_Upgrade[1].Set_Data_Remove(this, m_Price_Curr);
                }
                break;

            case Type_Turret.Repair_Station:
            case Type_Turret.Mirror:
            case Type_Turret.Cross:
            case Type_Turret.ATM:
            case Type_Turret.Air_Conditioner:
            case Type_Turret.Trap:
            case Type_Turret.Garlic:
            case Type_Turret.Holy_Water:
            case Type_Turret.Compass:
            case Type_Turret.Bible:
            case Type_Turret.Electrical:
            case Type_Turret.Mine_Bronze:
            case Type_Turret.Mine_Gold:
            case Type_Turret.Mine_Platinum:
            case Type_Turret.Mine_Silver:
                // Add Item Destroy
                m_All_Item_Upgrade[0].gameObject.SetActive(true);
                m_All_Item_Upgrade[0].Set_Data_Remove(this, m_Price_Curr);
                break;
        }

        CancelInvoke(nameof(Set_Is_Ready_Clickable));
        Invoke(nameof(Set_Is_Ready_Clickable), 0.25f);
    }



    private void Set_Is_Ready_Clickable()
    {
        m_Is_Ready_Clickable = true;
    }


    public void Set_Star(bool level)
    {
        if (level == true)
        {
            Turret_Bed_Star++;
            if (Turret_Bed_Star >= 3)
            {
                Turret_Bed_Star = 3;
            }

        }


    }



    public void Btn_Upgrade_Item_OnClick(Type_Item_Upgrade type_Item_Upgrade)
    {
        if (!m_Is_Ready_Clickable) return;

        if (m_Model_Info_Turret.type_Turret == Type_Turret.Bed)
        {
            if (!My_Utils.Check_Requirement(m_Type_Player, m_Model_Info_Turret.requirement_Upgrades))
            {
                return;
            }
        }
        //updateofjura
        if (m_Model_Info_Turret.type_Turret == Type_Turret.Turret_Bed)
        {
            Debug.LogError(m_Model_Info_Turret.level + "aaaa");

            Set_Star((m_Model_Info_Turret.level + 1) % 3 == 0 ? true : false);
        }

        switch (type_Item_Upgrade)
        {
            case Type_Item_Upgrade.Upgrade_Normal:

                if (My_Utils.Update_Turret(false, m_Data_Player, m_Type_Player, m_Model_Info_Turret.price_Upgrades, m_Curr_Turret))
                {

                    Upgrade_Item_Success();
                }
                break;

            case Type_Item_Upgrade.Upgrade_By_Ads:
                if (m_Curr_Turret)
                {
                    m_Curr_Turret.Upgrade_Item_Success();
                }
                Upgrade_Item_Success();
                break;

            case Type_Item_Upgrade.Remove_Item:
                Remove_Item_Success();
                break;
        }
    }

    private void Upgrade_Item_Success()
    {
        SoundController.Play_Sounds(Type_Sound.Upgrade_Turret);
        Close_UI();
    }

    Data_Player m_Data_Player;

    private void Remove_Item_Success()
    {
        m_Data_Player = Player_Manager.Instance.Get_Data_Player(m_Type_Player);
        if (m_Price_Curr.price_Coin > 0)
        {
            m_Data_Player.Increase_Coin((int)(m_Price_Curr.price_Coin / 2));
        }

        if (m_Price_Curr.price_Energy > 0)
        {
            m_Data_Player.Increase_Energy((int)(m_Price_Curr.price_Energy / 2));
        }

        // Notify Remove Item Done
        if (m_Curr_Turret)
        {
            m_Curr_Turret.Remove_Item_Success();
        }

        SoundController.Play_Sounds(Type_Sound.Back);

        Close_UI();
    }

    public override void _Btn_Close_OnClick()
    {
        Close_UI();
    }

    public void _Btn_Close_Inter_OnClick()
    {
        _Btn_Close_OnClick();
    }
}
