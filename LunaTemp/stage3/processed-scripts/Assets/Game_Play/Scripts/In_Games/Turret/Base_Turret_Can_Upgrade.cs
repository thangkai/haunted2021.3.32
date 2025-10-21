using UnityEngine;


public class Base_Turret_Can_Upgrade : Base_Turret
{
    [SerializeField] Bool_Global_Variable m_Live_Data_Coin_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Energy_Change;
    //[SerializeField] TextMeshPro m_Txt_Level;
    //updateofjura
    public override bool Check_Can_Remove()
    {
        if (m_Type_Character == Type_Character.Onslaught)
        {
            return m_Is_Remove;
        }
        return base.Check_Can_Remove();
    }
    public override void Add_Listener()
    {
        base.Add_Listener();
        data_Player = Player_Manager.Instance.Get_Data_Player(type_Player);
        if (data_Player == null)
        {
            return;
        }

        m_Live_Data_Coin_Change = data_Player.Get_Live_Data_Coin_Change();
        m_Live_Data_Energy_Change = data_Player.Get_Live_Data_Energy_Change();

        //if (m_Live_Data_Coin_Change)
        //{
        //    m_Live_Data_Coin_Change.OnValueChanged.AddListener(() => {
        //        Data_Coin_Energy_Change();
        //    });
        //}

        //if (m_Live_Data_Energy_Change)
        //{
        //    m_Live_Data_Energy_Change.OnValueChanged.AddListener(() => {
        //        Data_Coin_Energy_Change();
        //    });
        //}
    }

    public virtual void OnDestroy()
    {
        if (m_Live_Data_Coin_Change)
        {
            m_Live_Data_Coin_Change.OnValueChanged.RemoveListener(Data_Coin_Energy_Change);
        }

        if (m_Live_Data_Energy_Change)
        {
            m_Live_Data_Energy_Change.OnValueChanged.RemoveListener(Data_Coin_Energy_Change);
        }
    }

    public void Register_Data_Coin_Energy_Change()
    {
        if (m_Live_Data_Coin_Change)
        {
            m_Live_Data_Coin_Change.OnValueChanged.AddListener(Data_Coin_Energy_Change);
        }

        if (m_Live_Data_Energy_Change)
        {
            m_Live_Data_Energy_Change.OnValueChanged.AddListener(Data_Coin_Energy_Change);
        }
    }

    public virtual void Data_Coin_Energy_Change()
    {
        if (Is_Owner())
        {
            m_Obj_Upgrade.Set_Active(Check_Can_Upgrade());
        }
    }

    public override void Update_Model_Price()
    {
        base.Update_Model_Price();
    }

    int level_Turret_Connect;
    public bool Check_Can_Upgrade()
    {
        Check_Data_Player();
        if (requirement_Upgrade != null && requirement_Upgrade.type_Turret != Type_Turret.None)
        {
            level_Turret_Connect = data_Player.Get_Level_Turret(requirement_Upgrade.type_Turret);
            if (level_Turret_Connect + 1 < requirement_Upgrade.level)
            {
                return false;
            }
        }

        if (data_Player.Get_Sum_Coin() < price_Upgrade.price_Coin)
        {
            return false;
        }

        if (data_Player.Get_Sum_Energy() < price_Upgrade.price_Energy)
        {
            return false;
        }

        return true;
    }
}
