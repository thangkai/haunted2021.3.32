using System.Collections.Generic;
using UnityEngine;


public class UI_Build : Base_UI
{
    bool m_Is_Ready_Clickable;
    [SerializeField] Base_Turret m_Base_Turret;
    [SerializeField] Type_Player m_Type_Player;
    [SerializeField] Data_Tab_Buy_Turret_Manager m_Data_Tab_Manager;
    [SerializeField] Type_Tab_Buy_Turret m_Tab_Selected;
    [SerializeField] List<Item_Tab_Build> m_All_Tab = new List<Item_Tab_Build>();
    [SerializeField] List<Item_Build> m_All_Item_Builds = new List<Item_Build>();

    Data_Player m_Tmp_Data_Player;
    Data_Tab_Buy_Turret m_Tmp_Data_Tab_Buy_Turret;
    Model_Tab_Buy_Turret m_Tmp_Model_Tab_Buy;
    int m_Tmp_Sum_Turret_Builed;
    [SerializeField] GameObject m_Obj_Btn_Packback;
    [SerializeField] GameObject m_Obj_Btn_Close;
    [SerializeField] Animator m_Anim_Btn_Backpack;
    [SerializeField] Transform m_Pos_Tut_Hand;
    //[ReadOnly] [SerializeField] Bool_Global_Variable m_Live_Data_Can_Build_Crucific_Tutorial;

    public override void Open_UI(Base_Turret base_Turret, Type_Player type_Player)
    {
        m_Is_Ready_Clickable = false;
        m_Base_Turret = base_Turret;
        m_Type_Player = type_Player;
        base.Open_UI();
    }

    public void _Btn_Packback_On_Click()
    {
        SoundController.Play_Sound_Clicks();
        Canvas_In_Game.Instance.Get_UI_Packback().Open_UI(m_Base_Turret, m_Type_Player);
        Close_UI();
    }

    private void Set_Is_Ready_Clickable()
    {
        m_Is_Ready_Clickable = true;
    }

    public bool Get_Is_Ready_Clickable()
    {
        return m_Is_Ready_Clickable;
    }

    public Type_Player Get_Type_Player()
    {
        return m_Type_Player;
    }

    public override void OnReadyOpenUI()
    {
        // if (My_Utils.Check_Tut_Mission_7(m_Type_Player))
        // {
        //     m_Tab_Selected = Type_Tab_Buy_Turret.Tab_High_Tech;
        // }
        // else
        // {
        //
        // }
        m_Tab_Selected = Type_Tab_Buy_Turret.Tab_Basic;

        Update_UI_Tab();

        CancelInvoke(nameof(Set_Is_Ready_Clickable));
        Invoke(nameof(Set_Is_Ready_Clickable), 0.25f);

     

        m_Pos_Tut_Hand.Destroy_All_Children();
        if (!DataSaved.Get_Complete_Tut_Use_Packback_Item() && 
            DataSaved.Get_Sum_Item_Shop_Turret(Type_Turret.Repair_Station) > 0 &&
            m_Tmp_Data_Player.Get_Sum_Repair_Station_Builded() < My_Utils.Get_Max_Number_Can_Builded(Type_Turret.Repair_Station, 1)&&
            m_Tmp_Data_Player.Get_Sum_Turret_Penetation_Builded() < My_Utils.Get_Max_Number_Can_Builded(Type_Turret.Turret_Pierce, 1))
        {
            var obj_Hand = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Hand_UI_Tut(), m_Pos_Tut_Hand);
            obj_Hand.transform.localPosition = Vector3.zero;

            m_Anim_Btn_Backpack.enabled = true;
        }
        else
        {
            m_Anim_Btn_Backpack.enabled = false;
        }
    }


    public void Btn_Tab_OnClick(Type_Tab_Buy_Turret m_Type_Tab)
    {
        m_Tab_Selected = m_Type_Tab;
        Update_UI_Tab();
    }

    private void Update_UI_Tab()
    {
        for (int i = 0; i < m_All_Tab.Count; i++)
        {
            if (m_All_Tab[i].Get_Type_Tab() == m_Tab_Selected)
            {
                m_All_Tab[i].Update_Status(Status_Item.Active);
            }
            else
            {
                m_All_Tab[i].Update_Status(Status_Item.In_Active);
            }
        }

        Update_Data_Tab();
    }

    private void Update_Data_Tab()
    {
        for (int i = 0; i < m_All_Item_Builds.Count; i++)
        {
            if (m_All_Item_Builds[i])
            {
                m_All_Item_Builds[i].gameObject.Set_Active(false);
            }
        }

        m_Tmp_Data_Player = Player_Manager.Instance.Get_Data_Player(m_Type_Player);
        m_Tmp_Data_Tab_Buy_Turret = m_Data_Tab_Manager.Get_Data_Tab(m_Tab_Selected);

        for (int i = 0; i < m_Tmp_Data_Tab_Buy_Turret.Get_Count_Data(); i++)
        {
            m_All_Item_Builds[i].gameObject.Set_Active(true);

            m_Tmp_Model_Tab_Buy = m_Tmp_Data_Tab_Buy_Turret.Get_Model_Tab_Buy_Turret(i);
            m_Tmp_Sum_Turret_Builed = 0;
            if (m_Tmp_Model_Tab_Buy.type_Turret == Type_Turret.Turret)
            {
                m_Tmp_Sum_Turret_Builed = m_Tmp_Data_Player.Get_Sum_Turret_Builded();
            }
            else if (m_Tmp_Model_Tab_Buy.type_Turret == Type_Turret.Repair_Station)
            {
                m_Tmp_Sum_Turret_Builed = m_Tmp_Data_Player.Get_Sum_Repair_Station_Builded();
            }
            else if (m_Tmp_Model_Tab_Buy.type_Turret == Type_Turret.Turret_Pierce)
            {
                m_Tmp_Sum_Turret_Builed = m_Tmp_Data_Player.Get_Sum_Turret_Penetation_Builded();
            }

            m_All_Item_Builds[i].Set_Data(m_Type_Player, 
                m_Base_Turret.m_Type_Character, this,
                My_Utils.Get_Data_Info_Turret(m_Tmp_Model_Tab_Buy.data_Info_Turret, 0),
                m_Tmp_Model_Tab_Buy.type_Buy_Turret, m_Tmp_Sum_Turret_Builed,
                m_Tmp_Model_Tab_Buy.number_Limited, true
                );
        }


    }



    public void On_Buy_Turret_Success(Type_Turret type_Turret)
    {
        SoundController.Play_Sounds(Type_Sound.Buy_Turret);
        if (m_Base_Turret)
        {
            Debug.LogError("Xekotoby"+type_Turret );
            m_Base_Turret.Start_Build_New_Turret(type_Turret);
        }

        Close_UI();
    }

    public override void _Btn_Close_OnClick()
    {
        //if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && DataSaved.Get_Current_Loading_Level() == 0)
        //{
        //    if (DataSaved.Get_Index_Claimed_Mission_Tutorial() == 3 || DataSaved.Get_Index_Claimed_Mission_Tutorial() == 5 ||
        //        Utils.Check_Tut_Mission_7(m_Type_Player))
        //    {
        //        return;
        //    }
        //}

        Close_UI();
    }

    public void _Btn_Close_Inter_OnClick()
    {
        _Btn_Close_OnClick();
       
    }
}
