using System;
using UnityEngine;
using Unity.Collections;
using TMPro;

using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using Random = UnityEngine.Random;

public class Bed_Controller : Base_Turret_Can_Upgrade
{
    
    [SerializeField] int m_Coin_Increase;
    [SerializeField] TextMeshPro m_Txt_Coin;
    [SerializeField] Transform m_Anim_Collect_Coin;
    [SerializeField] GameObject m_Anchor;
    [SerializeField] Transform m_Pos_Effect_Coin;
    [SerializeField] Transform m_Anim_Collect_Energy;
    [SerializeField] int m_Energy_Increase;
    [SerializeField] List<int> m_Data_Energy = new List<int>();
    [SerializeField] TextMeshPro m_Txt_Energy;

    [SerializeField] SpriteRenderer m_Sprite_Bed;
    [SerializeField] SpriteRenderer m_Sprite_Character_Sleep;
    [SerializeField] SpriteRenderer m_Sprite_Blanket;

    [SerializeField] ParticleSystem m_Effect_Upgrade;
   [SerializeField] Bool_Global_Variable m_Live_Data_Active_Skill_2;
    [SerializeField] Bool_Global_Variable m_Live_Data_Using_Item_SP_Money_X2;
    bool m_Is_Using_Item_SP_Money_X2;

    [SerializeField] Transform m_Pos_Tut;
    [SerializeField] Bool_Global_Variable m_Live_Data_Index_Claimed_Mission_Tutorial;
    Tween m_Tween_Play_Sound_Character_Die;
    Tween m_Tween_Start_Active_Skill_2;
    Tween m_Tween_Check_Data_Perk_Skill_2_Student;
    Tween m_Tween_On_Active_Skill_2;

    bool m_Is_Golem_Spawned;
    bool m_Is_Updated_Pos_Attack_Done;
    bool m_Is_Playing_Anim_Energy;

    //updateofjura
    [SerializeField] private GameObject m_Pos_Shield;
    public override void Start()
    {
        base.Start();

        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            m_CD_Skill_2_Student = 75f;
        }
        else
        {
            m_CD_Skill_2_Student = 150f;
        }

        if (DataSaved.Get_Current_Loading_Level() == 0 && transform.parent.name.Equals("Room_4"))
        {
            Level_Controller.Instance.Set_Bed_Empty(transform);
        }

        Set_Index_Turret_Gold(type_Turret, m_Room_Controller);
    }

    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Set_Bed_In_Room(this);
    }



    public override void Before_Destroy_Game_Object()
    {
        Check_Data_Player();
        if (data_Player)
        {
            data_Player.Notify_Die(true);
        }

        if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            if (data_Player && !data_Player.Get_Is_AI())
            {
                Game_Controller.Instance.Set_Is_End_Level();

                Time.timeScale = 0;



                Canvas_In_Game.Instance.Get_UI_Win_Lose().Open_UI(Status_Win_Lose.Player_Mode_Lose);
            }
            else
            {
                DataSaved.Increase_Count_Other_Player_Die();
            }
        }

        Game_Controller.Instance.Decrease_Player_In_Map();



        m_Room_Controller.Set_Player_Owner(Type_Player.None);

        Level_Controller.Instance.Remove_Data_To_Room_Has_Player(m_Room_Controller);
        m_Tween_Delay_Active_Skill_2_Raven.Do_Kill();
    }

    bool m_Is_Play_Sound_Die;
    public override void Play_Sound_Character_Die()
    {
        if (m_Is_Play_Sound_Die) return;
        m_Is_Play_Sound_Die = true;
        My_Utils.Kill_Tween(m_Tween_Play_Sound_Character_Die);
        m_Tween_Play_Sound_Character_Die = DOVirtual.DelayedCall(0.5f, () =>
        {
            switch (m_Type_Character)
            {
                case Type_Character.Student:
                    SoundController.Play_Sounds(Type_Sound.Female_Die);
                    break;

                default:
                    SoundController.Play_Sounds(Type_Sound.Male_Die);
                    break;
            }
        }, false);
    }

    public override void Init_Data()
    {
        base.Init_Data();

        if (m_Sprite_Character_Sleep)
        {
            m_Sprite_Character_Sleep.gameObject.SetActive(false);
        }
        Update_UI();
    }

    public void Set_Player_Owner(Type_Player type_Player)
    {
        if (m_Room_Controller)
        {
            m_Room_Controller.Set_Player_Owner(type_Player);

            m_Anchor.Set_Active(type_Player == Game_Controller.Instance.Get_Player_Curr());

            if (type_Player == Game_Controller.Instance.Get_Player_Curr())
            {
                m_Room_Controller.Set_Has_Character_In_Room(false);
            }
        }
    }


    // public void CheckBossAttackingDoorGolemReturn(bool mBoss)
    // {
    //     if (mBoss)
    //     {
    //
    //     }
    //     else
    //     {
    //         if (m_Curr_Golem)
    //         {
    //
    //             m_Curr_Golem.End_Attack_Boss();
    //             Debug.LogError("End attack boss CheckBossAttackingDoorGolemReturn ");
    //         }
    //
    //     }
    // }

   

    public override void Add_Listener()
    {
        base.Add_Listener();

        m_Anim_Collect_Coin.gameObject.Set_Active(true);
        if (data_Player)
        {
            m_Anim_Collect_Energy.gameObject.Set_Active(false);
            if (data_Player.Get_Type_Character() == Type_Character.Sami//)
                && DataSaved.Get_Is_Unlock_Skill_2(Type_Character.Sami))
            {
                m_Is_Playing_Anim_Energy = true;
            }
            else
            {
                m_Is_Playing_Anim_Energy = false;
            }
        }
        Play_Anim_Collect_Dotween();
        Init_Stat_Golem();

        if (m_Sprite_Character_Sleep && data_Player)
        {
            m_Sprite_Character_Sleep.sprite = Data_In_Game.Instance.Get_Data_Sprite_In_Game().Get_Sprite_Character_Sleep(m_Type_Character, data_Player.Get_Is_Use_Skin_2());
            m_Sprite_Character_Sleep.gameObject.SetActive(true);
            //thieu dk active skill2 Updateofjura
            //TODO
            if (m_Type_Character == Type_Character.Safeguard && DataSaved.Get_Is_Unlock_Skill_2(Type_Character.Safeguard) == true)
            {
                m_Pos_Shield.gameObject.SetActive(true);

            }




            Change_Coin_Index_Turret_Gold(Type_Turret.Bed, m_Room_Controller, Get_Coin_In_Bed());


        }

        m_Effect_Upgrade.PLay_Effect(false);

        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            Start_Active_Skill_2();
        }
        else
        {
            My_Utils.Kill_Tween(m_Tween_Start_Active_Skill_2);
            m_Tween_Start_Active_Skill_2 = DOVirtual.DelayedCall(Random.Range(4, 6) * 60, () =>
            {
                Start_Active_Skill_2();
            }, false);
        }

        if (data_Player && !data_Player.Get_Is_AI())
        {
            m_Live_Data_Active_Skill_2 = data_Player.Get_Live_Data_Active_Skill_2();
            if (m_Live_Data_Active_Skill_2)
            {
                m_Live_Data_Active_Skill_2.OnValueChanged.AddListener(On_Active_Skill_2);
            }

            if (m_Live_Data_Index_Claimed_Mission_Tutorial && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && DataSaved.Get_Current_Loading_Level() == 0 && !DataSaved.Get_Is_Complete_Tutorial())
            {
                m_Live_Data_Index_Claimed_Mission_Tutorial.OnValueChanged.AddListener(Listener_Live_Data_Index_Claimed_Mission_Tutorial);
            }

            m_Live_Data_Using_Item_SP_Money_X2 = data_Player.Get_Live_Data_Item_Support_Money_X2();
            if (m_Live_Data_Using_Item_SP_Money_X2)
            {
                m_Live_Data_Using_Item_SP_Money_X2.OnValueChanged.AddListener(Listener_Live_Data_Using_Item_SP_Money_X2);
            }

            DataSaved.Set_Is_Same_Character_Quest_Daily(DataSaved.Get_Type_Character_Mission_Daily() == m_Type_Character);

            Canvas_In_Game.Instance.Get_UI_GamePlay().Init_Data_Btn_Golem();
        }

   

        // if (!m_Is_Golem_Spawned &&
        //     (m_Type_Character == Type_Character.Calida || m_Type_Character == Type_Character.Eilif)
        //     && DataSaved.Get_Is_Unlock_Skill_3(m_Type_Character))
        // {
        //     m_Is_Golem_Spawned = true;
        //     // Trieu hoi Golem
        //    
        //
        //     Loop_In_Crease_Exp_Golem();
        // }

        if (data_Player && data_Player.Get_Is_AI())
        {
            if (data_Player.Get_Type_Character() == Type_Character.Raven &&
                DataSaved.Get_Is_Unlock_Skill_2(Type_Character.Raven))
            {
                Start_Active_Skill_2_Raven_AI();
            }
        }

        if (data_Player && data_Player.Get_Type_Character() == Type_Character.Sami//)
            && DataSaved.Get_Is_Unlock_Skill_2(Type_Character.Sami))
        {
            Loop_Check_Spawn_Energy_From_Sami();
        }
    }

    private bool m_Is_Energy_Spawn_By_Sami;
    private Tween m_Tween_Loop_Check_Spawn_Energy_From_Sami;
    private void Loop_Check_Spawn_Energy_From_Sami()
    {
        m_Tween_Loop_Check_Spawn_Energy_From_Sami.Do_Kill();
        m_Tween_Loop_Check_Spawn_Energy_From_Sami = DOVirtual.DelayedCall(3f, () =>
        {
            m_Is_Energy_Spawn_By_Sami = true;
            Loop_Check_Spawn_Energy_From_Sami();
        });
    }

    Tween m_Tween_Start_Count_Down_Spawn_Golem;


    //updateofjura
    public void State_Shield_Bed()
    {
        m_Pos_Shield.SetActive(false);
    }





    public void Update_Pos_Boss_Attack_Done()
    {
        m_Is_Updated_Pos_Attack_Done = true;
        // if (m_Curr_Golem)
        // {
        //     m_Curr_Golem.Set_Pos_Door_Of_Room();
        // }
    }

    public override void OnDestroy()
    {
        base.OnDestroy();
        if (m_Live_Data_Active_Skill_2)
        {
            m_Live_Data_Active_Skill_2.OnValueChanged.RemoveListener(On_Active_Skill_2);
        }

        if (m_Live_Data_Using_Item_SP_Money_X2)
        {
            m_Live_Data_Using_Item_SP_Money_X2.OnValueChanged.RemoveListener(Listener_Live_Data_Using_Item_SP_Money_X2);
        }

        if (m_Live_Data_Index_Claimed_Mission_Tutorial)
        {
            m_Live_Data_Index_Claimed_Mission_Tutorial.OnValueChanged.RemoveListener(Listener_Live_Data_Index_Claimed_Mission_Tutorial);
        }

        m_Tween_Start_Count_Down_Spawn_Golem.Do_Kill();
        m_Tween_Loop_Check_Spawn_Energy_From_Sami.Do_Kill();
    }

 

    private void Listener_Live_Data_Using_Item_SP_Money_X2()
    {
        m_Is_Using_Item_SP_Money_X2 = m_Live_Data_Using_Item_SP_Money_X2.Value;
        Remove_All_Effect_Coin();
        if (m_Is_Using_Item_SP_Money_X2)
        {
            My_Utils.Play_Pref_Effect_No_Destroy(
                    Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Coin(),
                    m_Pos_Effect_Coin);
        }
    }

    private void Listener_Live_Data_Index_Claimed_Mission_Tutorial()
    {
        if (!data_Player.Get_Is_AI())
        {
            foreach (Transform item in m_Pos_Tut)
            {
                Destroy(item.gameObject);
            }

            // Show Tut 2: Upgrade Bed
            if (Check_Show_Tut_2())
            {
                var obj_Tut = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Hand_Tut(), m_Pos_Tut);
                obj_Tut.transform.localPosition = Vector3.zero;
            }
        }
    }

    private void Remove_All_Effect_Coin()
    {
        foreach (Transform item in m_Pos_Effect_Coin)
        {
            Destroy(item.gameObject);
        }
    }

    private bool Check_Show_Tut_2()
    {
        return !DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 1 && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story;
    }

    public Vector3 Get_Pos_Character()
    {
        return transform.position;
    }

    // public Golem_Controller Get_Golem()
    // {
    //     return m_Curr_Golem;
    // }

    public override void Data_Coin_Energy_Change()
    {
        if (Is_Owner())
        {
            Check_Data_Player();
            if (data_Player)
            {
                if (!data_Player.Get_Is_AI() && Check_Show_Tut_2())
                {
                    m_Obj_Upgrade.Set_Active(true);
                }
                else
                {
                    m_Obj_Upgrade.Set_Active(Check_Can_Upgrade());
                }

                if (!data_Player.Get_Is_AI())
                {
                    if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Instance && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 6 && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
                    {
                        DataSaved.Instance.Notify_Data_Can_Build_Crucific_Tutorial_Change(data_Player.Get_Sum_Energy() >= 64);
                    }
                }
            }
        }
    }

    private Tween m_Tween_Engrgy;
    public override void Update_Model_Price()
    {
        base.Update_Model_Price();

        m_Coin_Increase = model_Info_Turret_Curr.model_Skills.coin;

        m_Energy_Increase = Get_Energy_Increase();




        if (m_Type_Character == Type_Character.Student)
        {
            m_Coin_Increase += 1;
            Change_Coin_Index_Turret_Gold(Type_Turret.Bed, m_Room_Controller, m_Coin_Increase);
        }

        Update_UI();
    }

    private int Get_Energy_Increase()
    {
        if (m_Type_Character == Type_Character.Sami//)

            && DataSaved.Get_Is_Unlock_Skill_2(Type_Character.Sami))
        {
            if (m_Is_Energy_Spawn_By_Sami)
            {
                m_Is_Energy_Spawn_By_Sami = false;
                int lv = level_Curr;

                if (lv < 0)
                {
                    lv = 0;
                }
                if (lv >= m_Data_Energy.Count)
                {
                    lv = m_Data_Energy.Count - 1;
                }

                return m_Data_Energy[lv % m_Data_Energy.Count];
            }
        }
        return 0;
    }

    public override void InCrease_Level()
    {
        base.InCrease_Level();

        Check_Data_Player();
        if (Game_Controller.Instance && data_Player && !data_Player.Get_Is_AI()
            && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story
            && DataSaved.Get_Current_Loading_Level() == 0 && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 1)
        {
            Game_Controller.Instance.Set_Complete_Mission_Tutorial(Type_Mission_Tut.Mission_2, type_Player);
        }

      

        if (data_Player && !data_Player.Get_Is_AI() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {

            TypeBedMission();
        }



    }







    Model_Sprite_Bed model_Sprite_Bed;
    public override void Update_Model_By_Level()
    {
        model_Sprite_Bed = Data_In_Game.Instance.Get_Data_Sprite_In_Game().Get_Sprite_Bed_By_Level(level_Curr);
        if (m_Sprite_Bed)
        {
            m_Sprite_Bed.sprite = model_Sprite_Bed.sprite_Bed;
        }

        if (m_Sprite_Blanket)
        {
            m_Sprite_Blanket.sprite = model_Sprite_Bed.sprite_Blanket;
        }

        if (level_Curr > 0)
        {
            m_Effect_Upgrade.PLay_Effect(true);
        }
    }

    private void Update_UI()
    {
        if (m_Txt_Coin)
        {
            m_Txt_Coin.text = "+" + (m_Is_Playing_Skill_2_Student ? (Get_Real_Coin() * 2) : Get_Real_Coin());
        }

        m_Txt_Energy.Set_Text("+" + m_Energy_Increase);
    }

    private int Get_Real_Coin()
    {
        if (m_Is_Using_Item_SP_Money_X2)
        {
            return m_Coin_Increase * 2;
        }
        return m_Coin_Increase;
    }

    public int Get_Coin_In_Bed()
    {
        return m_Coin_Increase;
    }

    private void OnDisable()
    {
        if (m_Anim_Collect_Coin) m_Anim_Collect_Coin.DOKill(false);
        if (m_Anim_Collect_Energy) m_Anim_Collect_Energy.DOKill(false);
        My_Utils.Kill_Tween(m_Tween_Play_Sound_Character_Die);
        My_Utils.Kill_Tween(m_Tween_Start_Active_Skill_2);
        My_Utils.Kill_Tween(m_Tween_Check_Data_Perk_Skill_2_Student);
        My_Utils.Kill_Tween(m_Tween_On_Active_Skill_2);
        m_Tween_Start_Count_Down_Spawn_Golem.Do_Kill();
       
    }

    private void Play_Anim_Collect_Dotween()
    {
        if (!gameObject.activeSelf || Game_Controller.Get_Is_End_Level()) return;

        m_Total_Energy_Inscrease = 0;
        m_Total_Coin_Inscrease_Other = 0;
        m_Anim_Collect_Coin.DOKill(false);
        m_Anim_Collect_Coin.Play_Anim_Collect_Dotween(() =>
        {
            if (gameObject.activeSelf)
            {
                Check_Data_Player();
                if (data_Player && type_Player != Type_Player.None)
                {
                    data_Player.Increase_Coin((m_Is_Playing_Skill_2_Student ? (Get_Real_Coin() * 2) : Get_Real_Coin()) + m_Total_Coin_Inscrease_Other);
                    data_Player.Increase_Energy(m_Energy_Increase + m_Total_Energy_Inscrease);// giuong+ tong nang luong 
                }

                Update_UI();

                Data_Coin_Energy_Change();

                Play_Anim_Collect_Dotween();
            }
        });

        if (m_Is_Playing_Anim_Energy)
        {
            m_Anim_Collect_Energy.gameObject.Set_Active(true);
            m_Anim_Collect_Energy.DOKill(false);
            m_Anim_Collect_Energy.Play_Anim_Collect_Dotween(null);
        }
    }

    int m_Total_Energy_Inscrease;
    public void Increase_Energy_From_Other(int number)
    {
        m_Total_Energy_Inscrease += number;
    }

    int m_Total_Coin_Inscrease_Other;
    public void Increase_Coin_From_Other(int number)
    {
        m_Total_Coin_Inscrease_Other += number;
    }

    #region =================== PERK ===================

    bool m_Is_Playing_Skill_2_Student;
    float m_Time_Active_Skill_2_Student = 5f;
    float m_CD_Skill_2_Student = 150f;

    public void Start_Active_Skill_2()
    {
        Check_Data_Player();
        if (data_Player && type_Player != Type_Player.None)
        {
            if (m_Type_Character == Type_Character.Student && data_Player.Get_Is_AI())
            {
                Check_Data_Perk_Skill_2_Student();
            }
        }
    }

    private void Check_Data_Perk_Skill_2_Student()
    {
        if (gameObject.activeSelf && DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_15_Skill_2_Student))
        {
            m_Is_Playing_Skill_2_Student = true;

            My_Utils.Kill_Tween(m_Tween_Check_Data_Perk_Skill_2_Student);
            m_Tween_Check_Data_Perk_Skill_2_Student = DOVirtual.DelayedCall(m_Time_Active_Skill_2_Student, () =>
            {
                m_Is_Playing_Skill_2_Student = false;
                My_Utils.Kill_Tween(m_Tween_Check_Data_Perk_Skill_2_Student);
                m_Tween_Check_Data_Perk_Skill_2_Student = DOVirtual.DelayedCall(m_CD_Skill_2_Student, () =>
                 {
                     Check_Data_Perk_Skill_2_Student();
                 }, false);
            }, false);
        }
    }
    #endregion

    #region =============== Btn SKill 2 ================

    private void On_Active_Skill_2()
    {
        if (!gameObject.activeSelf || m_Is_Playing_Skill_2_Student) return;

        if (m_Type_Character == Type_Character.Student && DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_15_Skill_2_Student))
        {
            m_Is_Playing_Skill_2_Student = true;

            My_Utils.Kill_Tween(m_Tween_On_Active_Skill_2);
            m_Tween_On_Active_Skill_2 = DOVirtual.DelayedCall(m_Time_Active_Skill_2_Student, () =>
            {
                m_Is_Playing_Skill_2_Student = false;
            }, false);
        }
    }

    #endregion

   
 //  [SerializeField] Golem_Controller m_Curr_Golem;
   // [SerializeField] int m_Curr_Level_Golem;
   // [SerializeField] int m_Curr_Exp_Golem;
   // [SerializeField] int m_Max_Exp_Golem;
   //
   //  Tween m_Tween_Loop_In_Crease_Exp_Golem;
    private Tween m_Tween_Delay_Active_Skill_2_Raven;

    private void Init_Stat_Golem()
    {
     //   m_Max_Exp_Golem = 20;

        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
        //    m_Max_Exp_Golem = 10;
        }

        // if (m_Curr_Golem)
        // {
        //     m_Curr_Golem.Set_Exp(m_Curr_Exp_Golem, m_Max_Exp_Golem);
        // }
    }

    // private void Loop_In_Crease_Exp_Golem()
    // {
    //     // m_Tween_Loop_In_Crease_Exp_Golem.Do_Kill();
    //     // m_Tween_Loop_In_Crease_Exp_Golem = DOVirtual.DelayedCall(60f, () =>
    //     // {
    //     //     Increase_XP_Golem(40);
    //     //     Loop_In_Crease_Exp_Golem();
    //     // },
    //     //     false);
    // }

    // public void Increase_XP_Golem(int delta = 1)
    // {
    //     m_Curr_Exp_Golem += delta;
    //
    //     while (m_Curr_Exp_Golem >= m_Max_Exp_Golem)
    //     {
    //         if (m_Curr_Exp_Golem >= m_Max_Exp_Golem)
    //         {
    //             // Increase Level
    //             m_Curr_Exp_Golem = m_Curr_Exp_Golem - m_Max_Exp_Golem;
    //             InCrease_Level_Golem();
    //         }
    //     }
    //
    //     if (m_Curr_Golem)
    //     {
    //         m_Curr_Golem.Set_Exp(m_Curr_Exp_Golem, m_Max_Exp_Golem);
    //     }
    // }

    // private void InCrease_Level_Golem()
    // {
    //     m_Curr_Level_Golem += 1;
    //
    //     if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
    //     {
    //         if (level_Curr > 4)
    //         {
    //             m_Max_Exp_Golem += 5;
    //         }
    //     }
    //     else
    //     {
    //         m_Max_Exp_Golem += 15;
    //     }
    //
    //     if (m_Curr_Golem)
    //     {
    //         m_Curr_Golem.Set_Level(m_Curr_Level_Golem);
    //     }
    //
    //     if (m_Curr_Golem)
    //     {
    //         m_Curr_Golem.Set_Exp(m_Curr_Exp_Golem, m_Max_Exp_Golem);
    //     }
    // }

    private void Start_Active_Skill_2_Raven_AI()
    {
        Increase_Coin_From_Other(1000);

        m_Tween_Delay_Active_Skill_2_Raven.Do_Kill();
        m_Tween_Delay_Active_Skill_2_Raven = DOVirtual.DelayedCall(60, () =>
        {
            Start_Active_Skill_2_Raven_AI();
        }, false);
    }


    #region Bed Mission



    public Vector2Int ConfigMission()
    {

        Vector2Int valueindex = new Vector2Int();
        bool isCheck = false;
        for (int i = 0; i < listMission.Count && !isCheck; i++)
        {
            switch (listMission[i])
            {
                case 7:
                    valueindex = new Vector2Int(listMission[i], 7);
                    isCheck = true;
                    break;
                case 15:
                    valueindex = new Vector2Int(listMission[i], 19);
                    isCheck = true;
                    break;
            }
        }

        return valueindex;
    }
    public void TypeBedMission()
    {
        if (!GetIsUseBed()) return; // neu co nhiem vu lien quan guong
        int levelStoryCur = Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()); // lay level hien tai cua story
        int level = ConfigMission().y;// xem no co bang level hay khong da duoc bien dich // level hien tai



        if (level_Curr >= level)
        {
            int a = Database.instance.CheckIndexMissionPass(levelStoryCur, ConfigMission().x, Database.instance.GetHardLevel());

            Database.instance.Select_Mission_Complete(levelStoryCur, a, Database.instance.GetHardLevel());


            Debug.LogError("load co bi lap khong select  TypeBedMission");

        }


    }



    #endregion


}