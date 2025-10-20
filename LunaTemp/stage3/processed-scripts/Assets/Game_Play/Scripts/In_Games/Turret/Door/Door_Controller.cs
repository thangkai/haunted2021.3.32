using DG.Tweening;
using UnityEngine;

using System.Collections.Generic;
using System;
using TMPro;


public class Door_Controller : Base_Turret_Can_Upgrade
{
    [Header("_______________ Door_Controller _______________")]
    [SerializeField]
    Type_Direction m_Type_Direction_Close;

    [SerializeField] Type_Direction m_Type_Direction_Door; // Using Rotation Door
    bool m_Is_Closed;
    bool m_Is_Add_Listener;
    [SerializeField] Health_Bar m_Health_Bar;
    [SerializeField] GameObject m_Anim_Repair;
    private float m_Percent_Prapare;
    [SerializeField] GameObject m_Obj_Collider_Detect_Pos_Boss;

    [SerializeField] GameObject m_Collider_Lock_Player_Move;

    //[SerializeField] Animator m_Anim_Attacked;
    [SerializeField] Transform m_Model_Door;
    [SerializeField] Transform m_Model_Shake;
    [SerializeField] SpriteRenderer m_Sprite_Door;
    [SerializeField] ParticleSystem m_Effect_Upgrade;
    [SerializeField] Transform m_Pos_Effect_Cross;
    [SerializeField] Transform m_Pos_Effect_Shield;
    [SerializeField] Transform m_Pos_Effect_Air_Condition;
    [SerializeField] Transform m_Pos_Effect_Calida;
    [SerializeField] Transform m_Pos_Effect_Heal_Calida;
    [SerializeField] Transform m_Pos_Effect_Pet_Health;
    [SerializeField] GameObject m_Anim_Garlic;

    [Header("_______________ Ready Only _______________")]
    [SerializeField]
    bool m_Has_Repair_Station;

    [SerializeField] bool m_Is_Immortal;
    [SerializeField] Bool_Global_Variable m_Live_Data_Start_Burn_Door;
   [SerializeField] Bool_Global_Variable m_Live_Data_Repair_Station_Change;
   [SerializeField] Bool_Global_Variable m_Live_Data_Immortal_Change;
   [SerializeField] Bool_Global_Variable m_Live_Data_Active_Skill_1;
   [SerializeField] Bool_Global_Variable m_Live_Data_Active_Skill_2;
   [SerializeField] Bool_Global_Variable m_Live_Data_Loop_Time;
   [SerializeField] Bool_Global_Variable m_Live_Data_Air_Conditioner_Change;
   [SerializeField] Bool_Global_Variable m_Live_Data_Garlic_Change;
   [SerializeField] Bool_Global_Variable m_Live_Data_Item_SP_Door_Protect;
   [SerializeField] Bool_Global_Variable m_Live_Data_Item_SP_Meteorite;
   [SerializeField] Bool_Global_Variable m_Live_Data_Heal_Hp_Door;



    //updateofjura
    [SerializeField] Bool_Global_Variable m_Live_Data_Skill_2_Safeguard;
    Tween m_Tween_Delay_Off_Skill_2_Safeguard;

    bool m_Is_Using_Item_SP_Door_Protect;
    bool m_Is_Using_Heal_HP_Door;


    //updateofjura
   [SerializeField] Bool_Global_Variable m_Live_Data_Safeguard_Door_Shield;
    bool m_Is_Live_Data_Safeguard_Door_Shield;


    [SerializeField] Vector3 m_Pos_Global;

    Vector3 m_Pos_Boss_Attack;

    [SerializeField] Boss_Movement m_Boss_Follow_Character;

    [SerializeField] int m_Max_Ads_Save_Door;
    [SerializeField] int m_Count_Save_Door_By_Ads;
    [SerializeField] int m_Count_Skill_2_Temp_Door;

  
    [SerializeField]
    Transform m_Pos_Tut;

    [SerializeField] Bool_Global_Variable m_Live_Data_Index_Claimed_Mission_Tutorial;
   [SerializeField] bool m_Is_Tutorials;
    bool m_Is_Unlock_Skill_2_Repairer;
    bool m_Is_Using_Skin_Calidar;
    bool m_Is_Using_Skin_Eilif;

    [SerializeField] private Collider_Lock_Player_Move colliderTop;
    [SerializeField] private Collider_Lock_Player_Move colliderBottom;



    [SerializeField] private Collider_Lock_Player_Move colliderLeft;
    [SerializeField] private Collider_Lock_Player_Move colliderRight;
    public override void Start()
    {
        base.Start();

        mTimeImmortalReName = 3;
        m_CD_Immortal = 30;
        m_Time_Exist_Skill_1 = 5f;
        m_CD_SKill_1 = 30f;
        m_Time_CD_Alert = 10f;
        m_Max_Ads_Save_Door = 4;//khac
        m_Percent_Prapare = 0.02f;
        m_Tut_Data_Health_Boss_Move = new List<float>();
        Config_Door();

        if (m_Type_Direction_Door != Type_Direction.None)
        {
            m_Model_Door.rotation = Quaternion.Euler(0, 0, My_Utils.Get_Rotation_By_Direction(m_Type_Direction_Door));
        }

        m_Health_Bar.Set_Force_Show_Progress(false);

        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            m_CD_SKill_1 = 15;
        }
        else
        {
            m_CD_SKill_1 = 30;
        }

        if (DataSaved.Get_Current_Loading_Level() == 0 && transform.parent.name.Equals("Room_4"))
        {
            Level_Controller.Instance.Set_Door_Empty(transform,
                My_Utils.Get_New_Pos_By_Direction(transform.position, m_Type_Direction_Close));
        }

        m_Room_Controller.Set_Pos_Door_Initial(transform.localPosition);
        m_Room_Controller.Set_Direction_Door_Initial(m_Type_Direction_Close);

        checkTypeDirection();
    }

    public void Set_Boss_Follow(Boss_Movement boss_Movement)
    {
        m_Boss_Follow_Character = boss_Movement;
    }

    public float Get_Curr_Percent_HP()
    {
        return m_Health_Bar.Get_Percent_Curr_Health();
    }


    public void checkTypeDirection()
    {

        if (m_Type_Direction_Door == Type_Direction.Bottom || m_Type_Direction_Door == Type_Direction.Top)
        {
            colliderTop.gameObject.SetActive(true);
            colliderBottom.gameObject.SetActive(true);
        }
        else
        {
            colliderLeft.gameObject.SetActive(true);
            colliderRight.gameObject.SetActive(true);
        }
    }
    public bool Check_Is_Full_Health()
    {
        return m_Health_Bar.Check_Is_Full_Health();
    }

    Vector3 m_Tmp_Pos_Lock_Move;

    public Vector3 Get_Pos_Lock_Move()
    {
        m_Tmp_Pos_Lock_Move = transform.position;


        switch (m_Type_Direction_Door)
        {
            case Type_Direction.Right:
                m_Tmp_Pos_Lock_Move.x = m_Tmp_Pos_Lock_Move.x + 0.6f;
                break;
            case Type_Direction.Left:
                m_Tmp_Pos_Lock_Move.x = m_Tmp_Pos_Lock_Move.x - 0.6f;
                break;
            case Type_Direction.Top:
                m_Tmp_Pos_Lock_Move.y = m_Tmp_Pos_Lock_Move.y + 0.6f;
                break;
            case Type_Direction.Bottom:
                m_Tmp_Pos_Lock_Move.y = m_Tmp_Pos_Lock_Move.y - 0.6f;
                break;
        }





        return m_Tmp_Pos_Lock_Move;
    }


    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Assign_Door(this);
    }

    public override Vector3 Get_Position_Door()
    {
        return m_Pos_Boss_Attack;
    }

    public Vector2 Get_Position_Door_Vec2()
    {
        Vector2 pos = this.transform.localPosition;
        switch (m_Type_Direction_Close)
        {
            case Type_Direction.Top:
                pos.y += 1f;
                break;
            case Type_Direction.Left:
                pos.x -= 1f;
                break;
            case Type_Direction.Right:
                pos.x += 1f;
                break;
            case Type_Direction.Bottom:
                pos.y -= 1f;
                break;
        }


        ///region cua gizmos

        /// 


        return pos;
    }


    public Vector3 Get_Position_Door_Attack(Type_Player type_Boss)
    {
        Vector3 output = Vector3.zero;
        output.x = m_Pos_Boss_Attack.x;
        output.y = m_Pos_Boss_Attack.y;
        output.z = m_Pos_Boss_Attack.z;

        if (m_Type_Direction_Door == Type_Direction.Top || m_Type_Direction_Door == Type_Direction.Bottom)
        {
            //if (m_Type_Direction_Door == Type_Direction.Top)
            //{
            //    output.y += UnityEngine.Random.Range(0, 4) * 0.1f;
            //}
            //else
            //{
            //    output.y -= UnityEngine.Random.Range(0, 4) * 0.1f;
            //}

            if (type_Boss == Type_Player.Boss_Minotaurus)
            {
                output.x += (UnityEngine.Random.Range(0, 99) % 2 == 0 ? 1 : -1) *
                            UnityEngine.Random.Range(0.4f, 0.6f);
            }
            else
            {
                output.x += UnityEngine.Random.Range(-4, 4) * 0.1f;
            }

            return output;
        }

        if (m_Type_Direction_Door == Type_Direction.Left)
        {
            output.y += UnityEngine.Random.Range(-1f, 1f) * 0.2f;
        }
        else
        {
            output.y += UnityEngine.Random.Range(-1f, 1f) * 0.2f;
        }

        //output.y += UnityEngine.Random.Range(-2, 2) * 0.1f;
        return output;
    }


    public void Set_Pos_Boss_Attack(Type_Direction type_Direction)
    {
        m_Pos_Boss_Attack = My_Utils.Get_Pos_Boss_Attack(transform.position, type_Direction);

        if (m_Boss_Follow_Character)
        {
            m_Boss_Follow_Character.Change_Target_Attack_Door(m_Room_Controller.Get_Bed_Controller());
        }

        m_Room_Controller.Update_Pos_Boss_Attack_Done();
    }

    public override void Update_Model_By_Level()
    {
        m_Sprite_Door.sprite = Data_In_Game.Instance.Get_Data_Sprite_In_Game().Get_Sprite_Door_By_Level(level_Curr);

        if (level_Curr > 0)
        {
            m_Effect_Upgrade.PLay_Effect(true);

        }
    }

    int m_Sum_Garlic_Builed;
    float percent_Phan_Damage;
    [SerializeField] private Transform targetDame;

    public override void Take_Damage(float damage, Base_Boss base_Boss)
    {
        base.Take_Damage(damage, base_Boss);
        if (!base_Boss.Get_Boss_ADC())
        {
            SpawnDamagePopups.Instance.DameDone((int)damage, transform.localPosition, false);
        }


        // Check Phan Damage khi co build Garlic
        Check_Data_Player();
        if (data_Player == null) return;

        m_Sum_Garlic_Builed = data_Player.Get_Sum_Garlic_Builded();
        if (m_Sum_Garlic_Builed > 0)
        {
            percent_Phan_Damage = Check_Data_Perk_Garlic(m_Sum_Garlic_Builed);

            // TODO: Take Damge nguoc lai Boss
            if (base_Boss)
            {
                base_Boss.Take_Damage_Percent(percent_Phan_Damage);
            }
        }

        if (m_Is_Using_Item_SP_Door_Protect) return;

        // Neu dang bat tu, thi ko gay damage vao cua
        if (m_Is_Immortal && m_Is_Timing_Immortal)
        {
            return;
        }

        if (m_Model_Shake)
        {
            m_Model_Shake.localPosition = Vector3.zero;
            m_Model_Shake.DOKill(false);

            m_Model_Shake.DOShakePosition(0.5f, 0.08f, 50, 360f, false, true).OnUpdate(() =>
            {
                m_Model_Shake.localPosition =
                    new Vector3(m_Model_Shake.localPosition.x, m_Model_Shake.localPosition.y, 0f);
            });
        }

        // Check bat tu
        if (!m_Is_Timing_Immortal &&
            data_Player.Check_Has_Turret(Type_Turret.Cross) &&
            m_Health_Bar.Get_Percent_Health_Feature(damage) <= 0.3f)
        {
            data_Player.Set_Immortal(true);
            m_Health_Bar.Set_Immortal();
            m_Is_Timing_Immortal = true;

            Clear_All_Effect_Cross();
            My_Utils.Play_Pref_Effect_No_Destroy(
                Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Cross(), m_Pos_Effect_Cross);

            mTimeImmortalReName = Check_Data_Perk_Skill_27();


            if (data_Player.Check_Has_Turret(Type_Turret.Cross))
            {
                if (m_Room_Controller.GetCrossController() != null)
                {
                    List<Cross_Controller> crossControllers = new List<Cross_Controller>();
                    crossControllers.AddRange(m_Room_Controller.GetCrossController());

                    foreach (var cross in crossControllers)
                    {
                        cross.AnimCrossStart();
                    }
                }

            }


            CancelInvoke(nameof(Start_CD_Immortal));
            Invoke(nameof(Start_CD_Immortal), mTimeImmortalReName);
        }
        else
        {
            if (base_Boss) m_Room_Controller.Update_Target_To_Turret(base_Boss);
            if (base_Boss) m_Room_Controller.Update_Target_To_Turret_Penetration(base_Boss);
            m_Health_Bar.Take_Damage(damage, () => { On_Died(); }, () =>
            {
                if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player &&
                    type_Player == Game_Controller.Instance.Get_Player_Curr())
                {
                    Check_Show_Alert();
                }
            });
        }


    }

    //xekotoby
    public void Take_Damage_Percent(float percent)
    {
        //if (!m_Is_Live) return;
        if (Game_Controller.Get_Is_End_Level()) return;


        Check_Data_Player();
        if (data_Player == null) return;

        m_Sum_Garlic_Builed = data_Player.Get_Sum_Garlic_Builded();
        if (m_Sum_Garlic_Builed > 0)
        {
            percent_Phan_Damage = Check_Data_Perk_Garlic(m_Sum_Garlic_Builed);

            // TODO: Take Damge nguoc lai Boss
            if (m_Base_Boss)
            {
                m_Base_Boss.Take_Damage_Percent(percent_Phan_Damage);
            }
        }

        if (m_Is_Using_Item_SP_Door_Protect) return;


        if (m_Is_Immortal && m_Is_Timing_Immortal)
        {
            return;
        }

        if (m_Model_Shake)
        {
            m_Model_Shake.localPosition = Vector3.zero;
            m_Model_Shake.DOKill(false);

            m_Model_Shake.DOShakePosition(0.5f, 0.08f, 50, 360f, false, true).OnUpdate(() =>
            {
                m_Model_Shake.localPosition =
                    new Vector3(m_Model_Shake.localPosition.x, m_Model_Shake.localPosition.y, 0f);
            });
        }


        // Check bat tu


        if (!m_Is_Timing_Immortal &&
            data_Player.Check_Has_Turret(Type_Turret.Cross) &&
            m_Health_Bar.Get_Percent_Health_Feature(max_Health * percent) <= 0.3f)
        {
            data_Player.Set_Immortal(true);
            m_Health_Bar.Set_Immortal();
            m_Is_Timing_Immortal = true;

            Clear_All_Effect_Cross();
            My_Utils.Play_Pref_Effect_No_Destroy(
                Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Cross(), m_Pos_Effect_Cross);

            mTimeImmortalReName = Check_Data_Perk_Skill_27();
            CancelInvoke(nameof(Start_CD_Immortal));
            Invoke(nameof(Start_CD_Immortal), mTimeImmortalReName);
        }
        else
        {
            if (m_Base_Boss) m_Room_Controller.Update_Target_To_Turret(m_Base_Boss);
            if (m_Base_Boss) m_Room_Controller.Update_Target_To_Turret_Penetration(m_Base_Boss);


            if (m_Health_Bar)
            {
                m_Health_Bar.Take_Damage(max_Health * percent, () => { On_Died(); });

                if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player &&
                    type_Player == Game_Controller.Instance.Get_Player_Curr())
                {
                    Check_Show_Alert();
                }
            }
        }




    }


    private bool Check_Tut_Fix_Door()
    {
        return
            DataSaved.Get_Current_Loading_Level() == 0 &&
            !DataSaved.Get_Is_Complete_Tut_Fix_Door() && data_Player && !data_Player.Get_Is_AI() &&
            m_Health_Bar.Get_Percent_Curr_Health() < 0.4f;
    }

    private bool Check_Tut_Use_Item()
    {
        return
            !DataSaved.Get_Complete_Tut_Use_Item() &&
            data_Player && !data_Player.Get_Is_AI() && m_Health_Bar.Get_Percent_Curr_Health() <= 0.4f;
    }

    public override void On_Died()
    {
        //updateofjura
        if (m_Room_Controller.Check_Is_Active_Skill_2_Safeguard() == true &&
            DataSaved.Get_Is_Unlock_Skill_2(m_Type_Character) == true)
        {
            Kill_Door_Success();
            //updateofjura
            //dang test update 1s;
            m_Live_Data_Skill_2_Safeguard.Value = true;
            m_Tween_Delay_Off_Skill_2_Safeguard =
                DOVirtual.DelayedCall(3f, () => { m_Live_Data_Skill_2_Safeguard.Value = false; }, false);
            m_Room_Controller.Save_Door_Index();
        }
        else
        {
            if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
            {
                if (type_Player == Game_Controller.Instance.Get_Player_Curr())
                {
                    //  if (m_Count_Save_Door_By_Ads > 0
                    if (m_Room_Controller.Save_Door() > 0)
                    {
                        Time.timeScale = 0;

                        if (data_Player.Check_Has_Turret(Type_Turret.Cross))
                        {
                            if (m_Room_Controller.GetCrossController() != null)
                            {
                                List<Cross_Controller> crossControllers = new List<Cross_Controller>();
                                crossControllers.AddRange(m_Room_Controller.GetCrossController());

                                foreach (var cross in crossControllers)
                                {
                                    cross.ResetCrossDoorBuild();
                                }
                            }

                        }

                        Kill_Door_Success();
                    }
                    else
                    {
                        m_Room_Controller.Hide_Layout_False();


                        Kill_Door_Success();
                    }
                }
                else
                {
                    Kill_Door_Success();
                }
            }
            else
            {
                Kill_Door_Success();
            }
        }
    }

    private void Kill_Door_Success()
    {
        base.On_Died();

        m_Room_Controller.On_Kill_Door_Success();

        if (Game_Controller.Instance.Get_Curr_Character_Controller())
        {
            if (m_Room_Controller.Check_Inside_In_Room(Game_Controller.Instance.Get_Curr_Character_Controller()
                    .transform.position))
            {
                Game_Controller.Instance.Change_Tag_Character_Player(Tags.Character, m_Room_Controller);
            }
        }


        if (m_Base_Boss)
        {
            m_Base_Boss.Destroy_Door_Complete(this);
        }

        //if(m_Type_Character == Type_Character.Safeguard)
        //{
        //    //m_Room_Controller.Build_Temp_Door(level_Curr,true);

        //    Build_Temp_Door();
        //    Debug.Log(m_Health_Bar.Get_Max_Health());
        //}


        if (type_Player == Game_Controller.Instance.Get_Player_Curr())
        {
            if (m_Type_Character == Type_Character.Safeguard)
            {
                if (m_Room_Controller.Hide_layout() == false)
                {
                    Debug.Log("annnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
                    Canvas_In_Game.Instance.Get_UI_GamePlay().Hide_Layout_Item_Support();
                }
            }
            else
            {
                Canvas_In_Game.Instance.Get_UI_GamePlay().Hide_Layout_Item_Support();
            }
        }
    }

    public void Public_Kill_Door_Succes()
    {
        Kill_Door_Success();
    }

    public override void Create_New_Turret_Success(Base_Turret base_Turret)
    {
        if (base_Turret)
        {
            base_Turret.Set_Data_Health(max_Health * 1.5f);
        }
    }

    public void Set_Direction_Door(Type_Direction type_Direction)
    {
        m_Type_Direction_Door = type_Direction;
    }


    public Type_Direction GetDirectionDoor()
    {
        return m_Type_Direction_Door;
    }

    public void Set_Type_Direction_Move(Type_Direction type_Direction_Close)
    {
        m_Type_Direction_Close = type_Direction_Close;
    }

    private void OnDisable()
    {
        CancelInvoke(nameof(Start_CD_Immortal));
        CancelInvoke(nameof(End_CD_Immortal));
        m_Tween_Stop_Skill_2_Eilif.Do_Kill();

        //updateofjura
        m_Tween_Stop_Skill_2_Safeguard.Do_Kill();
        m_Tween_Restore_Health_By_Skill_2_Eilif.Do_Kill();

        if (m_Live_Data_Start_Burn_Door != null)
        {
            m_Live_Data_Start_Burn_Door.OnValueChanged.RemoveListener(Update_Status_Burn_Door);
        }

        if (m_Live_Data_Repair_Station_Change)
        {
            m_Live_Data_Repair_Station_Change.OnValueChanged.RemoveListener(On_Data_Repair_Station_Change);
        }

        if (m_Live_Data_Immortal_Change)
        {
            m_Live_Data_Immortal_Change.OnValueChanged.RemoveListener(On_Data_Immortal_Change);
        }

        if (m_Live_Data_Active_Skill_1)
        {
            m_Live_Data_Active_Skill_1.OnValueChanged.RemoveListener(Listener_Live_Data_Active_Skill_1);
        }

        if (m_Live_Data_Active_Skill_2)
        {
            m_Live_Data_Active_Skill_2.OnValueChanged.RemoveListener(On_Active_Skill_2);
        }

        if (m_Live_Data_Loop_Time)
        {
            m_Live_Data_Loop_Time.OnValueChanged.RemoveListener(Listener_Live_Data_Loop_Time);
        }

        if (m_Live_Data_Air_Conditioner_Change)
        {
            m_Live_Data_Air_Conditioner_Change.OnValueChanged.RemoveListener(On_Data_Air_Conditioner_Change);
        }

        if (m_Live_Data_Garlic_Change)
        {
            m_Live_Data_Garlic_Change.OnValueChanged.RemoveListener(On_Data_Garlic_Change);
        }

        if (m_Live_Data_Item_SP_Door_Protect)
        {
            m_Live_Data_Item_SP_Door_Protect.OnValueChanged.RemoveListener(Listener_Live_Data_Item_SP_Door_Protect);
        }

        if (m_Live_Data_Item_SP_Meteorite)
        {
            m_Live_Data_Item_SP_Meteorite.OnValueChanged.RemoveListener(Listener_Live_Data_Item_SP_Meteorite);
        }






        if (m_Live_Data_Index_Claimed_Mission_Tutorial)
        {
            m_Live_Data_Index_Claimed_Mission_Tutorial.OnValueChanged.AddListener(
                Listener_Live_Data_Index_Claimed_Mission_Tutorial);
        }

        //updateofjura

        if (m_Live_Data_Safeguard_Door_Shield)
        {
            m_Live_Data_Safeguard_Door_Shield.OnValueChanged.RemoveListener(Listener_Live_Data_Safeguard_Door_Shield);
        }
    }

    public bool Get_Is_Door_Closed()
    {
        return m_Is_Closed;
    }

    public override void Add_Listener()
    {
        base.Add_Listener();

        if (m_Is_Add_Listener)
        {
            return;
        }

        m_Is_Unlock_Skill_2_Repairer = false;
        m_Is_Add_Listener = true;
        //updateofjura

        m_Count_Save_Door_By_Ads = m_Max_Ads_Save_Door;


        //updateofjura
        m_Count_Skill_2_Temp_Door = m_Max_Ads_Save_Door - 1;

        Register_Data_Coin_Energy_Change();

        Vector3 pos = My_Utils.Get_New_Pos_By_Direction(transform.position, m_Type_Direction_Close);
        //m_Model_Door.gameObject.Set_Active(true);
        transform
            .DOMove(pos, 1f)
            .OnComplete(() =>
            {
                m_Pos_Global = transform.position;
                m_Obj_Collider_Detect_Pos_Boss.SetActive(true);

                Destroy(m_Obj_Collider_Detect_Pos_Boss, 3f);

                // Check has character in room
                if (Game_Controller.Instance.Get_Curr_Character_Controller())
                {
                    if (m_Room_Controller.Check_Inside_In_Room(Game_Controller.Instance.Get_Curr_Character_Controller()
                            .transform.position))
                    {
                        Game_Controller.Instance.Change_Tag_Character_Player(Tags.Untagged, m_Room_Controller);
                    }
                }

                if (m_Boss_Follow_Character)
                {
                    if (!m_Boss_Follow_Character.Check_Target_Attack_Bed(m_Room_Controller.Get_Bed_Controller()))
                    {
                        //bed_Controller.m_Room_Controller.Get_Door_Of_Room().Set_Boss_Follow(m_Boss_Follow_Character);
                    }
                }


                //m_Default_Pos = m_Model_Shake.position;
                m_Is_Closed = true;
            });

        if (m_Health_Bar)
        {
            Init_Type_Rank_Character();


            m_Health_Bar.Increae_Max_Health(max_Health);
            Debug.Log(m_Health_Bar.Get_Max_Health() + "--------------------");
            m_HP_Lower_50_Percent = false;
            m_HP_Lower_30_Percent = false;
        }

        m_Live_Data_Repair_Station_Change = data_Player.Get_Live_Data_Repair_Station_Change();
        if (m_Live_Data_Repair_Station_Change)
        {
            m_Live_Data_Repair_Station_Change.OnValueChanged.AddListener(On_Data_Repair_Station_Change);
        }

        m_Live_Data_Immortal_Change = data_Player.Get_Live_Data_Immortal_Change();
        if (m_Live_Data_Immortal_Change)
        {
            m_Live_Data_Immortal_Change.OnValueChanged.AddListener(On_Data_Immortal_Change);
        }

        if (!data_Player.Get_Is_AI())
        {
            m_Live_Data_Active_Skill_1 = data_Player.Get_Live_Data_Active_Skill_1();
            if (m_Live_Data_Active_Skill_1)
            {
                m_Live_Data_Active_Skill_1.OnValueChanged.AddListener(Listener_Live_Data_Active_Skill_1);
            }

            if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_23_Skill_2_Repairer) ||
                m_Type_Character == Type_Character.Eilif || m_Type_Character == Type_Character.Safeguard)
            {
                m_Live_Data_Active_Skill_2 = data_Player.Get_Live_Data_Active_Skill_2();
                if (m_Live_Data_Active_Skill_2)
                {
                    m_Live_Data_Active_Skill_2.OnValueChanged.AddListener(On_Active_Skill_2);
                }
            }

            m_Live_Data_Item_SP_Door_Protect = data_Player.Get_Live_Data_Live_Data_Item_Support_Door_Protect();
            if (m_Live_Data_Item_SP_Door_Protect)
            {
                m_Live_Data_Item_SP_Door_Protect.OnValueChanged.AddListener(Listener_Live_Data_Item_SP_Door_Protect);
            }








            m_Live_Data_Item_SP_Meteorite = data_Player.Get_Live_Data_Item_Support_Meteorite();
            if (m_Live_Data_Item_SP_Meteorite)
            {
                m_Live_Data_Item_SP_Meteorite.OnValueChanged.AddListener(Listener_Live_Data_Item_SP_Meteorite);
            }

            //updateofjura
            m_Live_Data_Safeguard_Door_Shield = data_Player.Get_Live_Data_Live_Data_Safeguatd_Door_Shield();
            if (m_Live_Data_Safeguard_Door_Shield)
            {
                m_Live_Data_Safeguard_Door_Shield.OnValueChanged.AddListener(Listener_Live_Data_Safeguard_Door_Shield);
            }

            //updateofjura



            if (data_Player && m_Type_Character == Type_Character.Eilif)
            {
                Init_Anim_Cay_Leo();
            }

            //updateofjura
            if (data_Player && m_Type_Character == Type_Character.Safeguard)
            {
                // tao ra man mau ao
                Init_Anim_Shield_Safeguard();
            }
        }

        m_Live_Data_Loop_Time = Game_Controller.Instance.Get_Live_Data_Loop_Time();
        if (m_Live_Data_Loop_Time)
        {
            m_Live_Data_Loop_Time.OnValueChanged.AddListener(Listener_Live_Data_Loop_Time);
        }

        m_Live_Data_Air_Conditioner_Change = data_Player.Get_Live_Data_Air_Conditioner_Change();
        if (m_Live_Data_Air_Conditioner_Change)
        {
            m_Live_Data_Air_Conditioner_Change.OnValueChanged.AddListener(On_Data_Air_Conditioner_Change);
        }

        m_Live_Data_Garlic_Change = data_Player.Get_Live_Data_Garlic_Change();
        if (m_Live_Data_Garlic_Change)
        {
            m_Live_Data_Garlic_Change.OnValueChanged.AddListener(On_Data_Garlic_Change);
        }

        m_Pos_Global = transform.position;
        m_Effect_Upgrade.PLay_Effect(false);

        if (!data_Player.Get_Is_AI() && m_Live_Data_Index_Claimed_Mission_Tutorial &&
            DataSaved.Get_Current_Loading_Level() == 0 && !DataSaved.Get_Is_Complete_Tutorial() &&
            DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        {
            m_Live_Data_Index_Claimed_Mission_Tutorial.OnValueChanged.AddListener(
                Listener_Live_Data_Index_Claimed_Mission_Tutorial);
        }

        m_Is_Unlock_Skill_2_Repairer = m_Type_Character == Type_Character.Repairer &&
                                       DataSaved.Get_Is_Unlock_Skill_2(m_Type_Character);

        m_Is_Tutorials = Check_Is_Tutorials();


        if (!data_Player.Get_Is_AI() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge)
        {
            m_Live_Data_Start_Burn_Door = Game_Controller.Instance.Get_Live_Data_Start_Burn_Door();
            m_Live_Data_Start_Burn_Door.OnValueChanged.AddListener(Update_Status_Burn_Door);
        }

        m_Is_Using_Skin_Calidar = m_Type_Character == Type_Character.Calida;
        if (data_Player && m_Is_Using_Skin_Calidar)
        {
            My_Utils.Play_Pref_Effect_No_Destroy(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Calida(),
                m_Pos_Effect_Calida);

            My_Utils.Play_Pref_Effect_No_Destroy(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Heal_Calida(),
                m_Pos_Effect_Heal_Calida);
        }

        m_Is_Using_Skin_Eilif = m_Type_Character == Type_Character.Eilif;
        if (data_Player && m_Is_Using_Skin_Eilif)
        {
            My_Utils.Play_Pref_Effect_No_Destroy(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Eilif(),
                m_Pos_Effect_Calida);

            My_Utils.Play_Pref_Effect_No_Destroy(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Heal_Eilif(),
                m_Pos_Effect_Heal_Calida);
        }
    }





    #region ============ Config Listener ==============

    private void Listener_Live_Data_Active_Skill_1()
    {
        m_Is_Lock_Skill_1 = false;
        On_Active_Skill_1();
    }

    public void LoopCheckGolem()
    {

    }
    private void Listener_Live_Data_Loop_Time()
    {
        try
        {

            Update_Loop_Check_Skill_1();
            Loop_Check_Repair_Station();
            Loop_Check_Skill_1_Calida();


            Loop_Check_Burn_Health_By_Golbin_Widzard();
        }
        catch (Exception e)
        {
            Debug.LogError("Error Loop_Time : " + e.Message);
        }
    }

    private void Listener_Live_Data_Item_SP_Door_Protect()
    {
        m_Is_Using_Item_SP_Door_Protect = m_Live_Data_Item_SP_Door_Protect.Value;
        Clear_All_Effect_Shield();

        if (m_Is_Using_Item_SP_Door_Protect)
        {
            My_Utils.Play_Pref_Effect_No_Destroy(
                Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Shield(), m_Pos_Effect_Shield);
        }
    }






    //updateofjura
    private void Listener_Live_Data_Safeguard_Door_Shield()
    {
        m_Is_Live_Data_Safeguard_Door_Shield = m_Live_Data_Safeguard_Door_Shield.Value;

        Clear_All_Effect_Shield();

        if (m_Is_Live_Data_Safeguard_Door_Shield)
        {
            My_Utils.Play_Pref_Effect_No_Destroy(
                Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Shield(), m_Pos_Effect_Shield);
        }
    }


    private void Listener_Live_Data_Item_SP_Meteorite()
    {
        if (m_Live_Data_Item_SP_Meteorite.Value)
        {
            var obj_Thien_Thach = Instantiate(Data_In_Game.Instance.Get_Data_Effect().Get_Pref_Thien_Thach(),
                Recycle_Bin.Instance.transform);
            Vector3 pos_Start = Get_Position_Door();

            Type_Direction type_Direction = transform.position.Get_Type_Direction(pos_Start);
            if (type_Direction == Type_Direction.Right)
            {
                pos_Start.x -= 10f;
            }
            else
            {
                pos_Start.x += 10f;
            }

            pos_Start.y += 30f;
            obj_Thien_Thach.transform.position = pos_Start;


            obj_Thien_Thach.transform.DOMove(Get_Position_Door(), 1f).SetEase(Ease.Linear).OnComplete(() =>
            {
                My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Explosion_Thien_Thach(),
                    obj_Thien_Thach.transform);

                colliders = Physics2D.OverlapCircleAll(Get_Position_Door(), 2f, m_Layer_Boss);
                if (colliders != null && colliders.Length > 0)
                {
                    for (int i = 0; i < colliders.Length; i++)
                    {
                        m_Tmp_Boss = colliders[i].GetComponent<Base_Boss>();
                        if (m_Tmp_Boss)
                        {
                            m_Tmp_Boss.Take_Damage_Percent(0.15f);
                            m_Tmp_Boss.Play_Effect_Take_Damage_By_Thien_Thach();
                        }
                    }
                }

                SoundController.Play_Sounds(Type_Sound.Meteor_Explosion);

                Destroy(obj_Thien_Thach.gameObject);
            });
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

            // Show Tut 3: Upgrade Door
            if (Check_Show_Tut_3())
            {
                var obj_Tut = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Hand_Tut(), m_Pos_Tut);
                obj_Tut.transform.localPosition = Vector3.zero;

                Data_Coin_Energy_Change();
            }
        }
    }

    #endregion

    private bool Check_Show_Tut_3()
    {
        return DataSaved.Get_Current_Loading_Level() == 0 &&
               DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story &&
               !DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 2;
    }

    public override void Data_Coin_Energy_Change()
    {
        if (Is_Owner())
        {
            Check_Data_Player();
            if (data_Player)
            {
                if (!data_Player.Get_Is_AI() && Check_Show_Tut_3())
                {
                    m_Obj_Upgrade.Set_Active(true);
                }
                else
                {
                    m_Obj_Upgrade.Set_Active(Check_Can_Upgrade());
                }
            }
        }
    }

    public void Init_Type_Rank_Character()
    {
        if (data_Player.Get_Is_AI() == false)
        {
            float m_hp_Bonus = 0;
            Debug.LogError("Xekotoby door player");
            _rankCharacter = Data_In_Game.Instance.Get_Data_Type_Rank_Character().Get_Data_Info_Character(
                Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character)
                    .m_Rank_Character);
            float m_Hp_EachLevel = 0f;
            float m_Hp_Star = 0f;

            if (DataSaved.Get_Key_Is_Try_Skin() == true)
            {
                m_Hp_EachLevel = _rankCharacter
                    .m_Info_Type_Rank[0]
                    .m_Health_Increase_With_Each_Level_Star;
                m_Hp_Star = _rankCharacter
                    .m_Info_Type_Rank[0]
                    .m_Health_Increase_With_Each_Star;

                m_hp_Bonus =
                    (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character)) * m_Hp_EachLevel +
                    m_Hp_Star;
            }
            else
            {
                m_Hp_EachLevel = _rankCharacter
                    .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
                    .m_Health_Increase_With_Each_Level_Star;
                m_Hp_Star = _rankCharacter
                    .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
                    .m_Health_Increase_With_Each_Star;

                m_hp_Bonus =
                    (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character)) * m_Hp_EachLevel +
                    m_Hp_Star + m_Hp_Total;
            }

            m_hp_Bonus +=
                Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character).m_Hp;
            m_hp_Bonus *= (float)Math.Pow(2, ((level_Curr + 1) - 1));

            m_hp_Bonus = (float)Math.Round(m_hp_Bonus, 2);
            m_hp_Bonus += max_Health;

            max_Health = m_hp_Bonus;
        }
        else
        {
            // luong ai+ mau
            float m_hp_Bonus = 0;
            // Debug.LogError("Xekotoby door player");
            _rankCharacter = Data_In_Game.Instance.Get_Data_Type_Rank_Character().Get_Data_Info_Character(
                Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(data_Player.Get_Type_Character())
                    .m_Rank_Character);
            float m_Hp_EachLevel = 0f;
            float m_Hp_Star = 0f;


            m_Hp_EachLevel = _rankCharacter
                .m_Info_Type_Rank[0]
                .m_Health_Increase_With_Each_Level_Star;
            m_Hp_Star = _rankCharacter
                .m_Info_Type_Rank[0]
                .m_Health_Increase_With_Each_Star;
            m_hp_Bonus =
                (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character)) * m_Hp_EachLevel +
                (DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character)) * m_Hp_Star + m_Hp_Total;

            m_hp_Bonus += Data_In_Game.Instance.Get_All_Data_Character()
                .Get_Data_Info_Character(data_Player.Get_Type_Character())
                .m_Hp;
            m_hp_Bonus *= (float)Math.Pow(2, ((level_Curr + 1) - 1));

            m_hp_Bonus = (float)Math.Round(m_hp_Bonus, 2);
            m_hp_Bonus += max_Health;

            max_Health = m_hp_Bonus;
        }
    }

    private float m_Hp_Total;
    //private int starActive = 0;

    public void Config_Dame_Bonus_Total()
    {
        // starActive = DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character);
        //
        //
        // m_Hp_Total = 0;
        // // mau tong = mau nhan vat + mau star hien tai + (mau moi lv *lv)+?? dang thieu mau vu
        // if (starActive == 2)
        // {
        //     m_Hp_Total = _rankCharacter
        //         .m_Info_Type_Rank[0]
        //         .m_Health_Increase_With_Each_Level_Star * (5);
        // }
        //
        // if (starActive == 3)
        // {
        //     m_Hp_Total += _rankCharacter
        //         .m_Info_Type_Rank[0]
        //         .m_Health_Increase_With_Each_Level_Star * (5);
        //     m_Hp_Total += _rankCharacter
        //                       .m_Info_Type_Rank[1]
        //                       .m_Health_Increase_With_Each_Level_Star * (10) +
        //                   _rankCharacter
        //                       .m_Info_Type_Rank[1]
        //                       .m_Health_Increase_With_Each_Star;
        // }
    }

    public override void InCrease_Level()
    {
        base.InCrease_Level();
        Init_Type_Rank_Character();

        if (m_Type_Character == Type_Character.Repairer)
        {
            if (data_Player.Get_Is_AI() &&
                DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_23_Skill_2_Repairer))
            {
                max_Health *= 1.3f;
            }
            else
            {
                max_Health *= 1.1f;
            }
        }

        Check_Data_Perk_Increase_HP();

        if (m_Health_Bar)
        {
            m_Health_Bar.Increae_Max_Health(max_Health);
            Debug.Log(m_Health_Bar.Get_Max_Health() + "+++++++++");
            m_Health_Bar.Set_Show_Progress(false);
            //safeguard
            //if (m_Tween_Stop_Skill_2_Safeguard != null)
            //{
            //    m_Health_Bar.Set_Percent_Curr_Health(2);
            //    m_Delta_Health_Restore = m_Health_Bar.Get_Max_Health() * 2;
            //    // neu nang cap fai luon dame bao current tang theo mau 
            //}
            m_HP_Lower_50_Percent = false;
            m_HP_Lower_30_Percent = false;
        }

        if (data_Player.Check_Has_Turret(Type_Turret.Cross))
        {
            m_Is_Timing_Immortal = false;
            data_Player.Set_Immortal(false);

            CancelInvoke(nameof(Start_CD_Immortal));
            CancelInvoke(nameof(End_CD_Immortal));
        }

        m_Model_Shake.localPosition = Vector3.zero;
        //transform.localPosition = m_Default_Pos;

        if (Game_Controller.Instance && DataSaved.Get_Current_Loading_Level() == 0 && !data_Player.Get_Is_AI()
            && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story
            && DataSaved.Get_Index_Claimed_Mission_Tutorial() == 2)
        {
            Game_Controller.Instance.Set_Complete_Mission_Tutorial(Type_Mission_Tut.Mission_3, type_Player);
        }

        Check_Data_Player();


        if (data_Player && !data_Player.Get_Is_AI() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {

            TypeDoorMission();
        }
    }

    #region ============== Config Repair_Station ==============

    private void Loop_Check_Repair_Station()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (m_Has_Repair_Station || m_Is_Unlock_Skill_2_Repairer)
        {
            Active_Repair_Door();

        }

        //else
        //{
        //    if (m_Anim_Repair.gameObject.activeSelf)
        //    {
        //        m_Anim_Repair.Set_Active(false);
        //    }
        //}
    }

    private void On_Data_Repair_Station_Change()
    {
        Check_Data_Player();
        if (data_Player == null) return;
        m_Has_Repair_Station = data_Player.Get_Sum_Repair_Station_Builded() > 0;

        if (!m_Has_Repair_Station)
        {
            m_Anim_Repair.Set_Active(false);
        }

        //if (m_Has_Repair_Station)
        //{
        //    CancelInvoke(nameof(Active_Repair_Door));
        //    InvokeRepeating(nameof(Active_Repair_Door), 0, 1f);
        //}
        //else
        //{
        //    m_Anim_Repair.Set_Active(false);
        //    CancelInvoke(nameof(Active_Repair_Door));
        //}
    }

    int m_Sum_Repair_Station_Builded;

    private void Active_Repair_Door()
    {
        if (m_Health_Bar)
        {



            if (m_Health_Bar.Check_Is_Full_Health())
            {
                m_Anim_Repair.Set_Active(false);
                m_Health_Bar.Set_Show_Progress(false);

                if (m_Has_Repair_Station)
                {

                    List<Repair_Station_Controller> repairControllers = new List<Repair_Station_Controller>();
                    if (m_Room_Controller.GetRepairController() != null)
                    {
                        repairControllers.AddRange(m_Room_Controller.GetRepairController());

                        foreach (var repair in repairControllers)
                        {
                            repair.RepairDoNotWork();

                        }
                    }


                }
            }
            else
            {
                if (m_Has_Repair_Station)
                {
                    List<Repair_Station_Controller> repairControllers = new List<Repair_Station_Controller>();
                    if (m_Room_Controller.GetRepairController() != null)
                    {
                        repairControllers.AddRange(m_Room_Controller.GetRepairController());

                        foreach (var repair in repairControllers)
                        {
                            repair.RepairWork();
                        }
                    }
                }

                m_Anim_Repair.Set_Active(true);
                m_Health_Bar.Set_Show_Progress(true);



                m_Sum_Repair_Station_Builded = data_Player.Get_Sum_Repair_Station_Builded();
                if (m_Sum_Repair_Station_Builded < 0) m_Sum_Repair_Station_Builded = 0;

                if (m_Is_Unlock_Skill_2_Repairer)
                {
                    m_Sum_Repair_Station_Builded += 1;
                }

                m_Health_Bar.Increase_Curr_Health(m_Percent_Prapare * m_Sum_Repair_Station_Builded,
                    () => { ChecK_Reset_Alert(); }, () =>
                    {
                        m_Anim_Repair.Set_Active(false);
                        m_Health_Bar.Set_Show_Progress(false);
                    });
            }
        }
    }

    #endregion


    //updateofjura
    // 2 nhiem vu 
    // time khien chan trong 20s
    // máu xám
    float m_Time_Shield_Health_By_Skill_1_Safeguard;

    public void Shild_Health_By_Skill_1_Safeguard()
    {
        m_Time_Shield_Health_By_Skill_1_Safeguard = 20f;
    }

    private void Remove_Effect_Shield_Health()
    {
        // loai bo moi hieu ung
    }

    private void Start_Active_Skill_1_SafeGuard()
    {
        // tao 1 sprite ton tai trong 20s
    }


    #region ============== Config Immortal ==============

    float mTimeImmortalReName;

    [SerializeField] private float m_CD_Immortal;
    [SerializeField] bool m_Is_Timing_Immortal;

    private void On_Data_Immortal_Change()
    {
        Check_Data_Player();
        if (data_Player == null) return;
        if (m_Live_Data_Repair_Station_Change)
        {
            m_Is_Immortal = data_Player.Get_Is_Immortal();
            if (!m_Is_Immortal)
            {
                Clear_All_Effect_Cross();
            }

            if (!data_Player.Check_Has_Turret(Type_Turret.Cross))
            {
                //m_Is_Timing_Immortal = false;
                CancelInvoke(nameof(Start_CD_Immortal));
                //CancelInvoke(nameof(End_CD_Immortal));
            }
        }
    }

    private void Start_CD_Immortal()
    {
        Clear_All_Effect_Cross();
        if (data_Player == null) return;
        data_Player.Set_Immortal(false);

        CancelInvoke(nameof(End_CD_Immortal));
        Invoke(nameof(End_CD_Immortal), m_CD_Immortal);
        if (data_Player.Check_Has_Turret(Type_Turret.Cross))
        {
            if (m_Room_Controller.GetCrossController() != null)
            {
                List<Cross_Controller> crossControllers = new List<Cross_Controller>();
                crossControllers.AddRange(m_Room_Controller.GetCrossController());

                foreach (var cross in crossControllers)
                {
                    cross.CountDownTimeUse(m_CD_Immortal, true);
                }
            }

        }

    }

    private void End_CD_Immortal()
    {
        m_Is_Timing_Immortal = false;
    }

    #endregion

    public void Set_Active_Collider_Lock_Player_Move(bool is_Active)
    {
        m_Collider_Lock_Player_Move.Set_Active(is_Active);
    }

    #region ============== Skill 1 ==============

   
    [SerializeField]
    bool m_Is_Lock_Skill_1;

    [SerializeField] private float m_Time_Exist_Skill_1;
    [SerializeField] private float m_CD_SKill_1;

    private void Update_Loop_Check_Skill_1()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (data_Player.Get_Is_AI())
        {
            // Neu duoi 50% mau thi Active Skill 1
            if (!m_Is_Lock_Skill_1 && m_Health_Bar != null && m_Health_Bar.Get_Percent_Curr_Health() <= 0.5f)
            {
                On_Active_Skill_1();
            }
        }
    }

    private void On_Active_Skill_1()
    {
        if (m_Is_Lock_Skill_1) return;
        m_Is_Lock_Skill_1 = true;
        m_Anim_Repair.Set_Active(true);
        m_Anim_Repair.transform.localScale = new Vector3(1.2f, 1.2f, 1.2f);

        CancelInvoke(nameof(Start_CD_Skill_1));
        Invoke(nameof(Start_CD_Skill_1), m_Time_Exist_Skill_1);

        CancelInvoke(nameof(Update_Health_By_Skill_1));
        InvokeRepeating(nameof(Update_Health_By_Skill_1), 1f, 1f);


        CancelInvoke(nameof(On_Ready_For_Next_Skill_1));
        Invoke(nameof(On_Ready_For_Next_Skill_1), m_CD_SKill_1);
    }

    private void Start_CD_Skill_1()
    {
        m_Anim_Repair.transform.localScale = new Vector3(1f, 1f, 1f);
        m_Anim_Repair.Set_Active(false);
        CancelInvoke(nameof(Update_Health_By_Skill_1));
    }

    private void On_Ready_For_Next_Skill_1()
    {
        m_Is_Lock_Skill_1 = false;
    }

    private void Update_Health_By_Skill_1()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (m_Health_Bar)
        {
            if (m_Health_Bar.Check_Is_Full_Health())
            {
                m_Anim_Repair.Set_Active(false);
                m_Health_Bar.Set_Show_Progress(false);
            }
            else
            {
                m_Anim_Repair.Set_Active(true);
                m_Health_Bar.Set_Show_Progress(true);

                m_Health_Bar.Increase_Curr_Health(0.1f, () => { ChecK_Reset_Alert(); },
                    () => { DOVirtual.DelayedCall(1f, () => { Delay_Check_Skill_1(); }, false); });
            }
        }
    }

    private void Delay_Check_Skill_1()
    {
        if (m_Health_Bar.Check_Is_Full_Health())
        {
            m_Anim_Repair.Set_Active(false);
            m_Health_Bar.Set_Show_Progress(false);
        }
    }

    #endregion

    #region ========================= Alert ==========================

    
    [SerializeField]
    private float m_Time_CD_Alert;

    bool m_HP_Lower_50_Percent;
    bool m_HP_Lower_30_Percent;
    bool m_Is_Show_Alert_50_Percent;
    bool m_Is_Show_Alert_30_Percent;

    private void ChecK_Reset_Alert()
    {
        if (m_Health_Bar.Get_Percent_Curr_Health() >= 0.5f)
        {
            m_HP_Lower_50_Percent = false;
        }

        if (m_Health_Bar.Get_Percent_Curr_Health() >= 0.3f)
        {
            m_HP_Lower_30_Percent = false;
        }
    }

    private void Check_Show_Alert()
    {
        if (!m_HP_Lower_50_Percent && m_Health_Bar.Get_Percent_Curr_Health() < 0.5f)
        {
            m_HP_Lower_50_Percent = true;
            if (!m_Is_Show_Alert_50_Percent)
            {
                m_Is_Show_Alert_50_Percent = true;

                DOVirtual.DelayedCall(m_Time_CD_Alert, () => { Reset_Show_Alert_50_Percent(); }, false);

                UI_Alert.Show_Alerts("", Type_Alert.Door_HP_Lower_50);
            }
        }
        else if (!m_HP_Lower_30_Percent && m_Health_Bar.Get_Percent_Curr_Health() < 0.3f)
        {
            m_HP_Lower_30_Percent = true;

            if (!m_Is_Show_Alert_30_Percent)
            {
                m_Is_Show_Alert_30_Percent = true;

                DOVirtual.DelayedCall(m_Time_CD_Alert, () => { Reset_Show_Alert_30_Percent(); }, false);

                UI_Alert.Show_Alerts("", Type_Alert.Door_HP_Lower_30);
            }
        }
    }

    private void Reset_Show_Alert_50_Percent()
    {
        m_Is_Show_Alert_50_Percent = false;
    }

    private void Reset_Show_Alert_30_Percent()
    {
        m_Is_Show_Alert_30_Percent = false;
    }

    #endregion

    private void Clear_All_Effect_Cross()
    {
        for (int i = m_Pos_Effect_Cross.childCount - 1; i >= 0; i--)
        {
            Destroy(m_Pos_Effect_Cross.GetChild(i).gameObject);
        }
    }

    private void Clear_All_Effect_Shield()
    {
        for (int i = m_Pos_Effect_Shield.childCount - 1; i >= 0; i--)
        {
            Destroy(m_Pos_Effect_Shield.GetChild(i).gameObject);
        }
    }

    private void Clear_All_Effect_Air_Conditioner()
    {
        for (int i = m_Pos_Effect_Air_Condition.childCount - 1; i >= 0; i--)
        {
            Destroy(m_Pos_Effect_Air_Condition.GetChild(i).gameObject);
        }
    }

    private void On_Data_Air_Conditioner_Change()
    {
        Check_Data_Player();
        if (data_Player && type_Player != Type_Player.None)
        {
            Clear_All_Effect_Air_Conditioner();

            if (data_Player.Get_Sum_Air_Conditioner_Builded() > 0)
            {
                My_Utils.Play_Pref_Effect_No_Destroy(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Air_Condition(),
                    m_Pos_Effect_Air_Condition);
            }
        }
        else
        {
            Clear_All_Effect_Air_Conditioner();
        }
    }

    private void On_Data_Garlic_Change()
    {
        Check_Data_Player();
        if (data_Player && type_Player != Type_Player.None)
        {
            m_Anim_Garlic.Set_Active(data_Player.Get_Sum_Garlic_Builded() > 0);
        }
        else
        {
            m_Anim_Garlic.Set_Active(false);
        }
    }

    #region ============== PERK ==============

    private void Check_Data_Perk_Increase_HP()
    {
        if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_31_Hp_Door_40_Per))
        {
            max_Health *= 1.4f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_26_Hp_Door_25_Per))
        {
            max_Health *= 1.25f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_12_Hp_Door_20_Per))
        {
            max_Health *= 1.2f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_8_Hp_Door_15_Per))
        {
            max_Health *= 1.15f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_1_Hp_Door_10_Per))
        {
            max_Health *= 1.1f;
        }
    }

    private float Check_Data_Perk_Garlic(int sum_Garlic_Builed)
    {
        if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_17_Garlic_Skill_1_Per))
        {
            return sum_Garlic_Builed * 0.02f;
        }

        return sum_Garlic_Builed * 0.01f;
    }

    private float Check_Data_Perk_Skill_27()
    {
        if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_28_Cross_Add_3s))
        {
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                return 5f;
            }

            return 6f;
        }

        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            return 2f;
        }

        return 3f;
    }

    //TODO CHECK SKILL TANG TIME 
    private void On_Active_Skill_2()
    {
        //if (m_Type_Character == Type_Character.Repairer && DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_23_Skill_2_Repairer))
        //{
        //    data_Player.Set_Immortal(true);
        //    m_Is_Timing_Immortal = true;

        //    Clear_All_Effect_Cross();
        //    Utils.Play_Pref_Effect_No_Destroy(
        //        Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Cross(), m_Pos_Effect_Cross);

        //    DOVirtual.DelayedCall(5f, () =>
        //    {
        //        Clear_All_Effect_Cross();
        //        data_Player.Set_Immortal(false);
        //        m_Is_Timing_Immortal = false;
        //    });
        //}

        if (m_Type_Character == Type_Character.Eilif)
        {
            Start_Skill_2_Eilif();
        }

        //updateofjura
        if (m_Type_Character == Type_Character.Safeguard)
        {
            Start_Skill_1_Safeguard();
        }
    }

    #endregion

   [SerializeField] bool m_Is_Init_Data_Health_Boss_Move;
   [SerializeField] private List<float> m_Tut_Data_Health_Boss_Move;

    public bool Check_Tut_Move_Other_Door()
    {
        Check_Data_Player();
        if (m_Is_Tutorials)
        {
            if (!m_Is_Init_Data_Health_Boss_Move)
            {
                m_Is_Init_Data_Health_Boss_Move = true;
                Init_Data_Health_Boss_Move();
            }

            if (m_Tut_Data_Health_Boss_Move.Count > 0)
            {
                if (m_Health_Bar.Get_Percent_Curr_Health() < m_Tut_Data_Health_Boss_Move[0])
                {
                    m_Tut_Data_Health_Boss_Move.RemoveAt(0);
                    return true;
                }
            }

            return false;
        }

        return false;
    }

    private void Init_Data_Health_Boss_Move()
    {
        m_Tut_Data_Health_Boss_Move.Clear();
        m_Tut_Data_Health_Boss_Move.Add(0.8f);
        m_Tut_Data_Health_Boss_Move.Add(0.7f);
        m_Tut_Data_Health_Boss_Move.Add(0.5f);
        m_Tut_Data_Health_Boss_Move.Add(0.3f);
        m_Tut_Data_Health_Boss_Move.Add(0.3f);
        m_Tut_Data_Health_Boss_Move.Add(0.2f);
    }

    private bool Check_Is_Tutorials()
    {
        return data_Player && !data_Player.Get_Is_AI() && !DataSaved.Get_Is_Complete_Tutorial() &&
               DataSaved.Get_Current_Loading_Level() == 0 &&
               DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story;
    }

    float m_Tmp_Height_Poison;
    [SerializeField] LayerMask m_Layer_Boss;
    Collider2D[] colliders;
    Base_Boss m_Tmp_Boss;
    Vector3 m_Tmp_Rotate_Poison_Jug;
    float m_Tmp_Value_Rotate_Poison_Jug;


    public void Active_Skill_2_Witch()
    {
        var obj_Poison_Jug = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Poison_Jug(),
            Recycle_Bin.Instance.transform);
        Debug.LogError(obj_Poison_Jug + "aaaaaaaaaaaa");
        Debug.LogError(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Poison_Jug().GetComponent<SpriteRenderer>()
            .sprite.name + "aaaaaaaaa");
        obj_Poison_Jug.transform.position = transform.position;
        Debug.LogError(transform.position + " aaaaaaaaaaaa");

        obj_Poison_Jug.transform.DOMoveX(m_Pos_Boss_Attack.x, 1f).OnComplete(() =>
        {
            My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Explosion_Poison(),
                obj_Poison_Jug.transform);
            // End Anim
            colliders = Physics2D.OverlapCircleAll(obj_Poison_Jug.transform.position, 2f, m_Layer_Boss);
            if (colliders != null && colliders.Length > 0)
            {
                for (int i = 0; i < colliders.Length; i++)
                {
                    m_Tmp_Boss = colliders[i].GetComponent<Base_Boss>();
                    if (m_Tmp_Boss)
                    {
                        m_Tmp_Boss.Burn_Health_By_Skill_2_Witch();
                    }
                }
            }

            Destroy(obj_Poison_Jug.gameObject);
        }).SetEase(Ease.Linear);

        obj_Poison_Jug.transform.DOMoveY(obj_Poison_Jug.transform.position.y + 3f, 0.5f).OnComplete(() =>
        {
            obj_Poison_Jug.transform.DOMoveY(m_Pos_Boss_Attack.y, 0.5f).SetEase(Ease.Linear);
        }).SetEase(Ease.Linear);

        obj_Poison_Jug.transform.DOLocalRotate(new Vector3(0, 0, 360 * 5), 1f).SetEase(Ease.Linear);

        m_Tmp_Rotate_Poison_Jug = Vector3.zero;
        m_Tmp_Value_Rotate_Poison_Jug = 0;

        DOTween.To(() => m_Tmp_Value_Rotate_Poison_Jug, x => m_Tmp_Value_Rotate_Poison_Jug = x, 360 * 10, 1f).OnUpdate(
            () =>
            {
                m_Tmp_Rotate_Poison_Jug.z = m_Tmp_Value_Rotate_Poison_Jug;
                obj_Poison_Jug.transform.localEulerAngles = m_Tmp_Rotate_Poison_Jug;
            });
    }

    //updateofjura
    public void Active_Skill_1_Onslaught()
    {
        var obj_Poison_Jug = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Rock_Ket(),
            Recycle_Bin.Instance.transform);
        obj_Poison_Jug.transform.position = transform.position;

        obj_Poison_Jug.transform.DOMoveX(m_Pos_Boss_Attack.x, 1f).OnComplete(() =>
        {
            My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Explosion_Poison(),
                obj_Poison_Jug.transform);
            // End Anim
            colliders = Physics2D.OverlapCircleAll(obj_Poison_Jug.transform.position, 2f, m_Layer_Boss);
            if (colliders != null && colliders.Length > 0)
            {
                for (int i = 0; i < colliders.Length; i++)
                {
                    m_Tmp_Boss = colliders[i].GetComponent<Base_Boss>();
                    if (m_Tmp_Boss)
                    {
                        m_Tmp_Boss.Burn_Health_By_Skill_2_Witch();
                    }
                }
            }

            Destroy(obj_Poison_Jug.gameObject);
        }).SetEase(Ease.Linear);

        obj_Poison_Jug.transform.DOMoveY(obj_Poison_Jug.transform.position.y + 3f, 0.5f).OnComplete(() =>
        {
            obj_Poison_Jug.transform.DOMoveY(m_Pos_Boss_Attack.y, 0.5f).SetEase(Ease.Linear);
        }).SetEase(Ease.Linear);

        m_Tmp_Rotate_Poison_Jug = Vector3.zero;
        m_Tmp_Value_Rotate_Poison_Jug = 0;

        float initialRotation = obj_Poison_Jug.transform.localEulerAngles.z;
        float targetRotation = initialRotation; // Góc cần để lên đỉnh
        float reverseRotation = 180; // Góc ngược hướng

        obj_Poison_Jug.transform.DOLocalRotate(new Vector3(0, 0, targetRotation), 0.5f).SetEase(Ease.Linear).OnComplete(
            () =>
            {
                // Xoay ngược hướng sau khi lên đỉnh
                obj_Poison_Jug.transform.DOLocalRotate(new Vector3(0, 0, -reverseRotation), 0.1f).SetEase(Ease.Linear);
            });
    }

    #region ============= Burn Door =============

   
    [SerializeField]
    Transform m_Pos_Burn_Door;

    private void Update_Status_Burn_Door()
    {
        var obj_Effect_Burn_Door =
            Instantiate(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Burn_Door(), m_Pos_Burn_Door);
        obj_Effect_Burn_Door.transform.localPosition = Vector3.zero;
        Loop_Burn_Door();
    }

    private void Loop_Burn_Door()
    {
        Check_Data_Player();
        if (data_Player)
        {
            Take_Damage(
                m_Health_Bar.Get_Max_Health() * (10f + 2f * data_Player.Get_Sum_Repair_Station_Builded()) / 100f, null);
            Invoke(nameof(Loop_Burn_Door), 1f);
        }
    }

    #endregion

    #region ============== Skill 1 - Calida ===============

    private void Loop_Check_Skill_1_Calida()
    {
        if (m_Is_Using_Skin_Calidar || m_Is_Using_Skin_Eilif)
        {
            if (m_Pos_Effect_Heal_Calida == null || m_Health_Bar == null) return;

            if (m_Health_Bar.Check_Is_Full_Health())
            {
                m_Pos_Effect_Heal_Calida.gameObject.SetActive(false);
            }
            else
            {
                m_Pos_Effect_Heal_Calida.gameObject.SetActive(true);
                m_Health_Bar.Increase_Curr_Health(0.02f, () =>
                {
                    ChecK_Reset_Alert();
                }, () =>
                {
                    if (m_Anim_Repair != null) m_Anim_Repair.SetActive(false);
                    m_Health_Bar.Set_Show_Progress(false);
                });
            }
        }
    }


    #endregion

    #region ============== Skill 2 - Eilif ===========

  
    [SerializeField]
    Transform m_Pos_Cay_Leo;

    Anim_Day_Leo m_Anim_Day_Leo;
    Tween m_Tween_Stop_Skill_2_Eilif;

    Tween m_Tween_Restore_Health_By_Skill_2_Eilif;

    float m_Delta_Health_Restore;

    //updateofjura
    Tween m_Tween_Stop_Skill_2_Safeguard;


    [SerializeField] Transform m_Pos_Shield_Safeguard;
    Anim_Shied_Safeguard m_Anim_Skill_Safeguard;

    public void Init_Anim_Cay_Leo()
    {
        m_Pos_Cay_Leo.Destroy_All_Children();
        var obj_Anim_Cay_Leo =
            Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Day_Leo_Cua(), m_Pos_Cay_Leo);
        obj_Anim_Cay_Leo.transform.localPosition = Vector3.zero;
        m_Anim_Day_Leo = obj_Anim_Cay_Leo.GetComponent<Anim_Day_Leo>();
        obj_Anim_Cay_Leo.gameObject.Set_Active(false);
    }

    //updateofjura
    public void Init_Anim_Shield_Safeguard()
    {
        m_Pos_Shield_Safeguard.Destroy_All_Children();
        var obj_Anim_Shield_Safeguard = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Anim_Safeguard(),
            m_Pos_Shield_Safeguard);
        obj_Anim_Shield_Safeguard.transform.localPosition = Vector3.zero;
        m_Anim_Skill_Safeguard = obj_Anim_Shield_Safeguard.GetComponent<Anim_Shied_Safeguard>();
        m_Anim_Skill_Safeguard.gameObject.Set_Active(false);
    }


    //updateofjura
    public void Start_Skill_1_Safeguard()
    {
        if (m_Anim_Skill_Safeguard)
        {
            m_Anim_Skill_Safeguard.gameObject.Set_Active(true);
            m_Anim_Skill_Safeguard.Play_Anim();
        }

        m_Health_Bar.Set_Show_Progress_Fake(true);
        m_Health_Bar.Set_Is_Full_Health_Skill_Safeguard();

        m_Tween_Stop_Skill_2_Safeguard = DOVirtual.DelayedCall(20f, () =>
            {
                Stop_Skill_1_Safeguard();
                m_Health_Bar.Set_Show_Progress_Fake(false);
                m_Health_Bar.Set_Is_Health_After_Time_Skill_Safeguard();
                if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player &&
                    type_Player == Game_Controller.Instance.Get_Player_Curr())
                {
                    Check_Show_Alert();
                }

                m_Tween_Stop_Skill_2_Safeguard = null;
            },
            false);
    }

    private void Stop_Skill_1_Safeguard()
    {
        if (m_Anim_Skill_Safeguard)
        {
            m_Anim_Skill_Safeguard.gameObject.Set_Active(false);
        }
    }

    public void Start_Skill_2_Eilif()
    {
        if (m_Anim_Day_Leo)
        {
            m_Anim_Day_Leo.gameObject.Set_Active(true);
            m_Anim_Day_Leo.Play_Anim();
        }

        m_Delta_Health_Restore = m_Health_Bar.Get_Max_Health() * 0.3f / 30f;

        m_Tween_Restore_Health_By_Skill_2_Eilif = DOVirtual.DelayedCall(0.1f,
            () =>
            {
                m_Health_Bar.Increase_Curr_Health_By_Number(
                m_Delta_Health_Restore);
            },
            false).SetLoops(30);

        m_Tween_Stop_Skill_2_Eilif = DOVirtual.DelayedCall(5f, () => { Stop_Skill_2_Eilif(); },
            false);
    }

    private void Stop_Skill_2_Eilif()
    {
        if (m_Anim_Day_Leo)
        {
            m_Anim_Day_Leo.gameObject.Set_Active(false);
        }
    }

    #endregion


    #region Burn_Health_Door

    [SerializeField] Transform m_Pos_Burn_Health_By_Golbin_Wizard;

    //  Dictionary<int, Model_Burn_Health> m_All_Turret_Burn_Health_By_Golbin_Widzard = new Dictionary<int, Model_Burn_Health>();
    float m_Time_Burn_Health_By_Skill_Widzrd;

    private void Loop_Check_Burn_Health_By_Golbin_Widzard()
    {
        if ((m_Base_Boss == null || !m_Base_Boss.Get_Skill_O_Is_Ready() && m_Base_Boss.Get_Type_Boss() != Type_Player.Goblin_wizard_Normal_Boss))
        {
            m_Time_Burn_Health_By_Skill_Widzrd = 5;
            return;
        }


        //  Debug.LogError(" skill o thuc thi roi nhe " +m_Time_Burn_Health_By_Skill_Widzrd );
        if (m_Time_Burn_Health_By_Skill_Widzrd > 0)
        {
            // Turn on effect burn
            if (m_Pos_Burn_Health_By_Golbin_Wizard.childCount <= 0)
            {

                My_Utils.Play_Pref_Effect_Layer(
                    Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Burn_Door_Wid(),
                    m_Pos_Burn_Health_By_Golbin_Wizard, m_Sprite_Door.sortingLayerID + 1, "Default");
            }

            m_Time_Burn_Health_By_Skill_Widzrd -= 1;
            Take_Damage_Percent(0.02f);
        }
        else
        {
            // Turn off effect burn
            m_Base_Boss.Set_Skill_O_Active(false);
            Remove_Effect_Burn_Health_By_Golbin_Widzard();
        }
    }

    private void Remove_Effect_Burn_Health_By_Golbin_Widzard()
    {
        m_Pos_Burn_Health_By_Golbin_Wizard.Destroy_All_Children();
    }

    #endregion


    #region draw gizmos region

    public Vector2 doorPosition; // Vị trí của cửa
    public float attackRange = 5f; // Khoảng cách tấn công

    // Các điểm của tam giác
    private Vector2 pointA; // Đỉnh cửa
    private Vector2 pointB; // Điểm bên trái
    private Vector2 pointC; // Điểm bên phải
    void Config_Door()
    {
        doorPosition = transform.position;

        // Xác định vị trí cửa sau khi "đóng"
        Vector2 pos = doorPosition;
        switch (m_Type_Direction_Close)
        {
            case Type_Direction.Top:
                pos.y += 1f;
                break;
            case Type_Direction.Left:
                pos.x -= 1f;
                break;
            case Type_Direction.Right:
                pos.x += 1f;
                break;
            case Type_Direction.Bottom:
                pos.y -= 1f;
                break;
        }
        doorPosition = pos;

        // Đặt đỉnh tam giác
        pointA = doorPosition;

        // Xác định điểm B và C dựa trên hướng cửa
        switch (m_Type_Direction_Door)
        {
            case Type_Direction.Left:
                pointB = doorPosition + new Vector2(-3f, -4f);
                pointC = doorPosition + new Vector2(-3f, 4f);
                break;
            case Type_Direction.Right:
                pointB = doorPosition + new Vector2(3f, 4f);
                pointC = doorPosition + new Vector2(3f, -4f);
                break;
            case Type_Direction.Top:
                pointB = doorPosition + new Vector2(-4f, 3f);
                pointC = doorPosition + new Vector2(4f, 3f);
                break;
            case Type_Direction.Bottom:
                pointB = doorPosition + new Vector2(4f, -3f);
                pointC = doorPosition + new Vector2(-4f, -3f);
                break;
        }
    }

    private void OnDrawGizmos()
    {
        // Vẽ Gizmos cho tam giác

        Gizmos.color = Color.green; // Màu của tam giác
        Gizmos.DrawLine(pointA, pointB);
        Gizmos.DrawLine(pointB, pointC);
        Gizmos.DrawLine(pointC, pointA);


        // Vẽ Gizmos cho vị trí của cửa
        Gizmos.color = Color.blue; // Màu của cửa
        Gizmos.DrawSphere(doorPosition, 0.2f); // Vẽ một hình cầu nhỏ tại vị trí của cửa
    }


    private bool IsBossInTriangle([Bridge.Ref] Vector2 bossPosition, [Bridge.Ref] Vector2 a, [Bridge.Ref] Vector2 b, [Bridge.Ref] Vector2 c)
    {

        float area = 0.5f * Mathf.Abs((a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y)));
        float area1 = 0.5f * Mathf.Abs((bossPosition.x * (b.y - c.y) + b.x * (c.y - bossPosition.y) +
                                        c.x * (bossPosition.y - b.y)));
        float area2 = 0.5f * Mathf.Abs((a.x * (bossPosition.y - c.y) + bossPosition.x * (c.y - a.y) +
                                        c.x * (a.y - bossPosition.y)));
        float area3 = 0.5f * Mathf.Abs((a.x * (b.y - bossPosition.y) + b.x * (bossPosition.y - a.y) +
                                        bossPosition.x * (a.y - b.y)));
        // boss 
        return Mathf.Approximately(area, area1 + area2 + area3);
    }

    public bool IsBossInAttackRange([Bridge.Ref] Vector2 bossPosition)
    {
        return IsBossInTriangle(bossPosition, pointA, pointB, pointC);
    }

    #endregion


    #region Door Mission



    public Vector2Int ConfigMission()
    {



        Vector2Int valueindex = new Vector2Int();
        bool isCheck = false;
        for (int i = 0; i < listMission.Count && !isCheck; i++)
        {
            switch (listMission[i])
            {
                case 2:
                    valueindex = new Vector2Int(listMission[i], 2);

                    isCheck = true;
                    break;
                case 4:
                    valueindex = new Vector2Int(listMission[i], 5);
                    isCheck = true;
                    break;
                case 6:
                    valueindex = new Vector2Int(listMission[i], 9);
                    isCheck = true;
                    break;
                case 14:
                    valueindex = new Vector2Int(listMission[i], 10);
                    isCheck = true;
                    break;
            }


        }



        return valueindex;
    }
    public void TypeDoorMission()
    {
        if (!GetIsUseDoor()) return; // neu co nhiem vu lien quan den door

        int levelStoryCur = Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()); // lay level hien tai cua story
        int level = ConfigMission().y;// xem no co bang level hay khong da duoc bien dich // level hien tai

        if (level_Curr >= level)
        {
            //     Debug.LogError("load co bi lap khong select  Door controller");
            int a = Database.instance.CheckIndexMissionPass(levelStoryCur, ConfigMission().x, Database.instance.GetHardLevel());
            //     Debug.LogError("load co bi lap khong select  Door controller" +a+ " - 0- "+ ConfigMission().x+ " --- " + levelStoryCur) ;
            Database.instance.Select_Mission_Complete(levelStoryCur, a, Database.instance.GetHardLevel());
        }
    }
    #endregion


    #region textPetBuff

    [SerializeField] internal Transform hpBuffByPet;
    [SerializeField] internal TextMeshPro textHpBuffByPet;

    void Update_Anim_HP(int hp)
    {

        hpBuffByPet.gameObject.SetActive(true);
        if (textHpBuffByPet)
        {
            textHpBuffByPet.text = "+" + hp;
        }

        hpBuffByPet.DOKill(false);
        hpBuffByPet.Play_Anim_Collect_Dotween(() =>
        {
            // actionDone == true nghĩa là anim xong (tùy bạn định nghĩa)
            hpBuffByPet.gameObject.SetActive(false);
        });


    }

    #endregion
}