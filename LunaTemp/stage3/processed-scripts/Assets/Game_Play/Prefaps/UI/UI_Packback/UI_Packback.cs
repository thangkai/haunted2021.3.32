using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class UI_Packback : Base_UI
{
    [SerializeField] List<Type_Turret> m_All_Turret = new List<Type_Turret>();
    [SerializeField] GameObject m_Pref_Item_Packback;
    [SerializeField] Type_Player m_Type_Player;

   
    [SerializeField] Transform m_Parent_Item;
    [SerializeField] GameObject m_Obj_Nothings;
    [SerializeField] Base_Turret m_Base_Turret;
    int m_Tmp_Count;
    GameObject m_Tmp_Obj;
    Item_Packback m_Tmp_Item_Packback;
    Data_Info_Turret_Manager m_Tmp_Data_Info_Turret_Manager;
    Data_Tab_Buy_Turret_Manager m_Data_Tab_Buy_Turret_Manager;
    Data_Player m_Tmp_Data_Player;
    int m_Tmp_Sum_Turret_Builed;

    public void _Btn_Building_On_Click()
    {
        SoundController.Play_Sound_Clicks();
        Canvas_In_Game.Instance.Get_UI_Build().Open_UI(m_Base_Turret, m_Type_Player);
        Close_UI();
    }

    public override void Open_UI(Base_Turret base_Turret, Type_Player type_Player)
    {
        m_Base_Turret = base_Turret;
        m_Type_Player = type_Player;
        base.Open_UI();
    }

    public override void OnReadyOpenUI()
    {
        m_Parent_Item.Destroy_All_Children();

        int sum_Item = 0;

        m_Tmp_Data_Player = Player_Manager.Instance.Get_Data_Player(m_Type_Player);
        m_Tmp_Data_Info_Turret_Manager = Data_In_Game.Instance.Get_Data_Info_Turret_Manager();
        m_Data_Tab_Buy_Turret_Manager = Data_In_Game.Instance.Get_Data_Tab_Buy_Turret_Manager();

        for (int i = 0; i < m_All_Turret.Count; i++)
        {
            m_Tmp_Count = DataSaved.Get_Sum_Item_Shop_Turret(m_All_Turret[i]);
            if (m_Tmp_Count > 0)
            {
                m_Tmp_Obj = Instantiate(m_Pref_Item_Packback, m_Parent_Item);
                m_Tmp_Item_Packback = m_Tmp_Obj.GetComponent<Item_Packback>();
                if (m_Tmp_Item_Packback)
                {
                    sum_Item += 1;

                    m_Tmp_Sum_Turret_Builed = 0;
                    if (m_All_Turret[i] == Type_Turret.Turret)
                    {
                        m_Tmp_Sum_Turret_Builed = m_Tmp_Data_Player.Get_Sum_Turret_Builded();
                    }
                    else if (m_All_Turret[i] == Type_Turret.Repair_Station)
                    {
                        m_Tmp_Sum_Turret_Builed = m_Tmp_Data_Player.Get_Sum_Repair_Station_Builded();
                    }
                    else if (m_All_Turret[i] == Type_Turret.Turret_Pierce)
                    {
                        m_Tmp_Sum_Turret_Builed = m_Tmp_Data_Player.Get_Sum_Turret_Penetation_Builded();
                    }


                    m_Tmp_Item_Packback.Set_Data(m_Type_Player, this,
                        m_Tmp_Data_Info_Turret_Manager.Get_Data_Info_Turret(m_All_Turret[i], 0),
                        m_Data_Tab_Buy_Turret_Manager.Get_Type_Buy_Turret(m_All_Turret[i]), m_Tmp_Sum_Turret_Builed,
                        m_Data_Tab_Buy_Turret_Manager.Get_Number_Limit(m_All_Turret[i]));
                }
            }
        }

        m_Obj_Nothings.Set_Active(sum_Item <= 0);
    }

    public void On_Buy_Turret_Success(Type_Turret type_Turret)
    {
        SoundController.Play_Sounds(Type_Sound.Buy_Turret);
        if (m_Base_Turret)
        {
            m_Base_Turret.Start_Build_New_Turret(type_Turret);
        }
       

        Close_UI();
    }

    public void _Btn_Close_Inter_OnClick()
    {
        _Btn_Close_OnClick();
      
    }
}
