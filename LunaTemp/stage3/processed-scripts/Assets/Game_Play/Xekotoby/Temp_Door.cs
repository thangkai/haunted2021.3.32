using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using DG.Tweening;

public class Temp_Door : Base_Turret
{
    [SerializeField] Health_Bar m_Health_Bar;

   
    [SerializeField] public bool m_Is_Live_Temp_Door = true;


    [SerializeField]
    private int m_Count_Save_Door_By_Ads_Fake;
    [SerializeField]
    private int level_Door_Before_Destroy;


    [SerializeField] Transform m_Model_Shake;
    public override void Start()
    {
        if (m_Room_Controller == null)
        {
            Set_Room_Controller(transform.parent.GetComponent<Room_Controller>());
        }

        //Set_Can_Click(false);
        m_Health_Bar.Set_Force_Show_Progress(false);
        m_Count_Save_Door_By_Ads_Fake = 2;
        m_Model_Shake.localPosition = Vector3.zero;
        //this.Set_Can_Click(false);

    }
    public override bool Check_Can_Click()
    {
        if (m_Type_Character == Type_Character.Safeguard)
        {
            return m_Is_Can_Click;
        }
        return base.Check_Can_Click();
    }

    public void Set_Data(Room_Controller room_Controller, List<Vector2> data_Move_Default)
    {
        m_Is_Live_Temp_Door = true;
        m_Room_Controller = room_Controller;


    }




    public override void Set_Data_Health(float health)
    {
        m_Health_Bar.Increae_Max_Health(health);
    }

    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Set_Temp_Door_In_Room(this);
    }



    public float Get_Curr_Percent_HP()
    {
        return m_Health_Bar.Get_Percent_Curr_Health();
    }
    public bool Check_Is_Full_Health()
    {
        return m_Health_Bar.Check_Is_Full_Health();
    }

    public void Apply_Damage(float damage)
    {
        // if (!m_Is_Live) return;
        this.m_Health_Bar.Take_Damage(damage, () =>
        {
            SpawnDamagePopups.Instance.DameDone((int)damage, transform.localPosition, false);
            Debug.Log(damage + "damage");
            On_Died();
        }, () =>
        {

        });
    }
    public void Take_Damage_To_Temp_Door(float damage)
    {
        // if (m_Is_Live==true)
        // {
        this.Apply_Damage(damage);
        if (m_Model_Shake)
        {
            m_Model_Shake.localPosition = Vector3.zero;
            m_Model_Shake.DOKill(false);

            // giam do rung
            m_Model_Shake.DOShakePosition(0.5f, 0.08f, 30, 360f, false, true).OnUpdate(() =>
            {
                m_Model_Shake.localPosition = new Vector3(m_Model_Shake.localPosition.x, m_Model_Shake.localPosition.y, 0f);
            });
        }
        // }
    }
    Tween m_Tween_Destroy;
    public void OnDied()
    {
        if (!m_Is_Live_Temp_Door) return;

        Debug.Log("============> Temp_door");
        m_Is_Live_Temp_Door = false;





        m_Tween_Destroy = DOVirtual.DelayedCall(3f, () =>
        {
            Destroy(gameObject);
        }, false);


    }

    public void Set_Level_Door_Destroy(int level_Door)
    {
        level_Door_Before_Destroy = level_Door;
    }

    // temp_door_ se co so 
    public override void On_Died()
    {
        if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            if (type_Player == Game_Controller.Instance.Get_Player_Curr())
            {
                if (m_Count_Save_Door_By_Ads_Fake > 0)
                {

                    Time.timeScale = 0;

                    var tmp_Real_Door = m_Room_Controller.Check_And_Build_Skill_2_Safeguard_Real_Door(this);


                    m_Count_Save_Door_By_Ads_Fake -= 1;
                    if (m_Count_Save_Door_By_Ads_Fake == 0)

                    {


                        Door_Controller Door_Real = tmp_Real_Door.GetComponent<Door_Controller>();
                        Door_Real.Public_Kill_Door_Succes();
                        Canvas_In_Game.Instance.Get_UI_GamePlay().Hide_Layout_Item_Support();
                    }
                }
                else
                {
                    Kill_Temp_Door_Success();
                }
            }
            else
            {
                Kill_Temp_Door_Success();
            }
        }
        else
        {
            Kill_Temp_Door_Success();
        }

    }

    private void Kill_Temp_Door_Success()
    {
        base.On_Died();
        Debug.Log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");

        m_Room_Controller.On_Kill_Door_Success();

        if (Game_Controller.Instance.Get_Curr_Character_Controller())
        {
            if (m_Room_Controller.Check_Inside_In_Room(Game_Controller.Instance.Get_Curr_Character_Controller().transform.position))
            {
                Game_Controller.Instance.Change_Tag_Character_Player(Tags.Character, m_Room_Controller);
            }
        }

        if (m_Base_Boss)
        {
            m_Base_Boss.Destroy_Door_Complete(this);
        }

        if (type_Player == Game_Controller.Instance.Get_Player_Curr())
        {
            if (m_Type_Character == Type_Character.Safeguard)
            {
                if (true)
                {
                    Canvas_In_Game.Instance.Get_UI_GamePlay().Hide_Layout_Item_Support();
                }
            }
            else
            {
                Canvas_In_Game.Instance.Get_UI_GamePlay().Hide_Layout_Item_Support();
            }

        }
    }
    private void OnDisable()
    {

        m_Tween_Destroy.Do_Kill();
        if (m_Live_Data_Active_Skill_2)
        {
            m_Live_Data_Active_Skill_2.OnValueChanged.RemoveListener(On_Active_Skill_2);
        }
    }


    public override void Add_Listener()
    {
        base.Add_Listener();
        if (m_Is_Add_Listener)
        {
            return;
        }
        m_Is_Add_Listener = true;

        if (!data_Player.Get_Is_AI())
        {


            m_Live_Data_Active_Skill_2 = data_Player.Get_Live_Data_Active_Skill_2();
            if (m_Live_Data_Active_Skill_2)
            {
                m_Live_Data_Active_Skill_2.OnValueChanged.AddListener(On_Active_Skill_2);
            }
        }
        if (data_Player && m_Type_Character == Type_Character.Safeguard)
        {
            // tao ra man mau ao
            Init_Anim_Shield_Safeguard();

        }

    }
   [SerializeField] Bool_Global_Variable m_Live_Data_Active_Skill_2;

    [SerializeField] Transform m_Pos_Shield_Safeguard;
    Anim_Shied_Safeguard m_Anim_Skill_Safeguard;
    Tween m_Tween_Stop_Skill_2_Safeguard;
    private bool m_Is_Add_Listener;

    private void On_Active_Skill_2()
    {



        Start_Skill_1_Safeguard();

    }
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
            if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player && type_Player == Game_Controller.Instance.Get_Player_Curr())
            {
                //Check_Show_Alert();
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


    public void Init_Anim_Shield_Safeguard()
    {
        m_Pos_Shield_Safeguard.Destroy_All_Children();
        var obj_Anim_Shield_Safeguard = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Anim_Safeguard(), m_Pos_Shield_Safeguard);
        obj_Anim_Shield_Safeguard.transform.localPosition = Vector3.zero;
        m_Anim_Skill_Safeguard = obj_Anim_Shield_Safeguard.GetComponent<Anim_Shied_Safeguard>();
        m_Anim_Skill_Safeguard.gameObject.Set_Active(false);
    }








}

