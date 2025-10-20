using System.Collections;
using TMPro;
using UnityEngine;
using DG.Tweening;

public class Mine_Controller : Base_Turret
{
    [Header(".......... Mine_Controller ..........")]
    [SerializeField] int m_Coin_Increase;
    [SerializeField] TextMeshPro m_Txt_Coin;
    [SerializeField] Transform m_Anim_Collect;
    [SerializeField] Bed_Controller m_Bed_Controller;

    public override void Init_Data()
    {
        base.Init_Data();

        Update_UI();
    }

    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        m_Bed_Controller = room_Controller.Get_Bed_Controller();
    
    }

    public override void Add_Listener()
    {
        base.Add_Listener();

        Play_Anim_Collect();
    }

    private void OnDisable()
    {
        m_Anim_Collect.DOKill(false);
    }

    private void Play_Anim_Collect()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;

        m_Anim_Collect.DOKill(false);
        m_Anim_Collect.Play_Anim_Collect_Dotween(() =>
        {
            if(type_Player != Type_Player.None)
            {
                Check_Data_Player();
                if (data_Player)
                {
                    Increase_Coin_In_Background();
                    Play_Anim_Collect();
                }
            }
        });
    }

    private void Increase_Coin_In_Background()
    {
        if (data_Player && type_Player != Type_Player.None)
        {
            if (m_Bed_Controller == null)
            {
                m_Bed_Controller = m_Room_Controller.Get_Bed_Controller();
            }
            if (m_Bed_Controller)
            {
                m_Bed_Controller.Increase_Coin_From_Other(m_Coin_Increase);
            }
        }
    }

    public override void Update_Model_Price()
    {
        base.Update_Model_Price();

        m_Coin_Increase = model_Info_Turret_Curr.model_Skills.coin;

        if (m_Type_Character == Type_Character.Miner)
        {
            m_Coin_Increase = (int)(m_Coin_Increase * 1.5f);
        }
    }
    
    
    

    private void Update_UI()
    {
        if (m_Txt_Coin)
        {
            m_Txt_Coin.text = "+" + m_Coin_Increase;
        }
    }
}
