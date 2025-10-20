
using UnityEngine;


public class Ground_Controller : Base_Turret_Can_Upgrade
{
    [SerializeField] Transform m_Pos_Tut;
    [SerializeField] Transform m_Pos_BG_Upgrade;
    [SerializeField] Bool_Global_Variable m_Live_Data_Index_Claimed_Mission_Tutorial;

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

        if (m_Live_Data_Index_Claimed_Mission_Tutorial)
        {
            m_Live_Data_Index_Claimed_Mission_Tutorial.OnValueChanged.RemoveListener(Remove_Tut);
        }
    }

    public override void Add_Listener()
    {
        base.Add_Listener();

        Check_Data_Player();
        if (data_Player && !data_Player.Get_Is_AI() && DataSaved.Get_Current_Loading_Level() == 0 && !DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        {
            m_Live_Data_Index_Claimed_Mission_Tutorial = Data_In_Game.Instance.Get_Live_Data_Index_Claimed_Mission_Tutorial();
            if (m_Live_Data_Index_Claimed_Mission_Tutorial)
            {
                m_Live_Data_Index_Claimed_Mission_Tutorial.OnValueChanged.AddListener(Remove_Tut);
            }
        }

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

    public void Show_Tut_4()
    {
        Remove_Tut();

        var obj_Tut = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Hand_Tut(), m_Pos_Tut);
        obj_Tut.transform.localPosition = Vector3.zero;

        var obj_Upgrade = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_BG_Upgrade(), m_Pos_BG_Upgrade);
        obj_Upgrade.transform.localPosition = Vector3.zero;
    }

    public void Remove_Tut()
    {
        foreach (Transform item in m_Pos_Tut)
        {
            Destroy(item.gameObject);
        }

        foreach (Transform item in m_Pos_BG_Upgrade)
        {
            Destroy(item.gameObject);
        }
    }
}
