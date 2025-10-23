
using System;
using UnityEngine;


public class Ground_Controller : Base_Turret_Can_Upgrade
{
    [SerializeField] Transform m_Pos_Tut;
    [SerializeField] Transform m_Pos_BG_Upgrade;
    
    public override void Start()
    {
        base.Start();
        Data_Coin_Energy_Change();
    }

 

    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Add_Ground_In_Room(this);
    }

    public override void OnDestroy()
    {
        base.OnDestroy();

      
    }

    public override void Add_Listener()
    {
        base.Add_Listener();

        Check_Data_Player();


        Data_Coin_Energy_Change();
    }

    public override void Remove_Ground_In_Room()
    {
        m_Room_Controller.Remove_Ground_In_Room(this);
    }

    public override void On_Turret_Click()
    {
        Canvas_In_Game.Instance.Get_UI_Build().Open_UI(this, type_Player);
    }


    public override void Data_Coin_Energy_Change()
    {
        if (Is_Owner())
        {
            m_Obj_Upgrade.Set_Active(true);
        }
        else
        {
            m_Obj_Upgrade.Set_Active(false);
        }
    }




}
