using Spine.Unity;
using UnityEngine;
using UnityEngine.AI;
using DG.Tweening;

using System;
using System.Collections.Generic;
using Haunted;
using UnityEngine.Serialization;

using System.Linq;
using Random = UnityEngine.Random;

public class Character_Controller : Base_Update
{
    [SerializeField] Model_Player_Join_Game m_Model_Player_Join_Game;
 //   [SerializeField] NavMeshAgent m_Agent;
    [SerializeField] internal bool m_Is_Moving;
   [SerializeField] Bed_Controller m_Target_Move;
    //[SerializeField] float speed_Move_Joystick = 10f;
    [SerializeField] GameObject m_Obj_Player_Collider;
    [SerializeField] GameObject m_Obj_Collider_Door;
    [SerializeField] SkeletonAnimation m_Anim;
    [SerializeField] Transform m_Obj_Look_At;
    [SerializeField] GameObject m_Pointer;

 
   [SerializeField] Boss_Movement m_Boss_Follow_Character;
    BoxCollider2D boxCollider;

    Vector3 m_Tmp_Pos;
    float m_Tmp_Distance_To_Target;
    Room_Controller m_Room_Finding;
    bool m_Is_Auto_Sleep;

    Tween m_Tween_Loop_Check_Inside_Room;
    //updateofjura
    [SerializeField] Transform m_Model;
    Model_Anim_Character m_Model_Anim_Character;




    //test


    private void OnDisable()
    {
        SoundController.Stop_Sounds(Type_Sound.Character_Run);
    }

    public void Change_New_Tag(string new_tag)
    {
        transform.tag = new_tag;

        boxCollider = GetComponent<BoxCollider2D>();
        if (boxCollider)
        {
            boxCollider.enabled = false;
            boxCollider.enabled = true;
        }
    }



    private GameObject obj_Character = null;
    public void Set_Boss_Follow(Boss_Movement boss_Movement)
    {
        m_Boss_Follow_Character = boss_Movement;
    }

    public void Play_Anim(Type_Animation type_Animation, bool isLoop = true)
    {
        if (m_Anim && m_Anim.skeletonDataAsset != null)
        {
            if (type_Animation == Type_Animation.Idle && m_Model_Player_Join_Game.Get_Type_Character() == Type_Character.Raven)
            {
                m_Anim.AnimationName = "Idle";
            }
            else
            {
                m_Anim.AnimationName = Animations.Get_Name_Animation(type_Animation, Type_Player.None);
            }

            m_Anim.loop = isLoop;

            m_Anim.Initialize(true);
        }
    }

    public Type_Player Get_Type_Player()
    {
        return m_Model_Player_Join_Game.type_Player;
    }

    public void Set_Model_Player_Join_Game(bool isUsingSkin2, Model_Player_Join_Game model_Player_Join_Game)
    {
        m_Model_Player_Join_Game = model_Player_Join_Game;
        m_Is_Moving = false;

        var obj_Anim = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Spine_Character(), m_Model);
        obj_Anim.transform.localPosition = Vector3.zero;

        m_Model_Anim_Character = obj_Anim.GetComponent<Model_Anim_Character>();
        if (m_Model_Anim_Character)
        {
            m_Model_Anim_Character.Set_Data_Character(isUsingSkin2, model_Player_Join_Game.Get_Type_Character());
            m_Anim = m_Model_Anim_Character.Get_SkeletonAnimation();
        }




    }

    public void Set_Target_Move(Bed_Controller bed_Controller)
    {
        m_Target_Move = bed_Controller;
        m_Is_Moving_By_Joystick = false;
        m_Is_Moving = true;



        Play_Anim(Type_Animation.Run);




        Move_To_Target();
    }

    public void Auto_Find_Room_Nearest_And_Move()
    {
        
        m_Is_Auto_Sleep = m_Model_Player_Join_Game.type_Player == Game_Controller.Instance.Get_Player_Curr();

        // Find Other Room
        m_Room_Finding = Level_Controller.Instance.Get_Room_Empty(transform, true);
        if (m_Room_Finding)
        {

            Set_Target_Move(m_Room_Finding.Get_Bed_Controller());
        }
    }

    public float speedMove;

    private void Start()
    {
        if (m_Model_Player_Join_Game.type_Player == Game_Controller.Instance.Get_Player_Curr())
        {
            m_Obj_Player_Collider.Set_Active(true);
            Play_Anim(Type_Animation.Idle);



            speedMove = 2.5f * 1.2f;
            m_Pointer.Set_Active(true);
            m_Obj_Collider_Door.Set_Active(true);
        }
        else
        {
            m_Obj_Player_Collider.Set_Active(false);
            Play_Anim(Type_Animation.Run);




            speedMove = 2f * 1.2f;
            m_Pointer.Set_Active(false);

            m_Obj_Collider_Door.Set_Active(false);
        }

        Loop_Check_Inside_Room();
    }

    // After Boss attack player when not go to bed
    public void On_Died()
    {
        m_Is_Moving = false;
        m_Is_Moving_By_Joystick = false;
        m_Is_Lock_Move = true;

        Canvas_In_Game.Instance.Set_Active_Btn_Join_Stick(false);
        Player_Manager.Instance.Get_Data_Player(Get_Type_Player()).Notify_Die(true);

        // Find Camera In Character
        for (int i = 0; i < transform.childCount; i++)
        {
            if (transform.GetChild(i).CompareTag(Tags.MainCamera))
            {
                transform.GetChild(i).SetParent(null);
                break;
            }
        }

        if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            if (Get_Type_Player() == Game_Controller.Instance.Get_Player_Curr())
            {
                Game_Controller.Instance.Set_Is_End_Level();
                Time.timeScale = 0;
                //Ads_Controller.Show_Intertital(true, false, () =>
                //{
                //    Canvas_In_Game.Instance.Get_UI_Win_Lose().Open_UI(Status_Win_Lose.Player_Mode_Lose);
                //});

                //Canvas_In_Game.Instance.Get_UI_Win_Lose().Open_UI(Status_Win_Lose.Player_Mode_Lose);
            }
        }

        Game_Controller.Instance.Decrease_Player_In_Map();

        My_Utils.Kill_Tween(m_Tween_Loop_Check_Inside_Room);

        Destroy(gameObject);
    }

    public void Stop_Move()
    {
        m_Is_Moving = false;
        m_Is_Moving_By_Joystick = false;
        m_Is_Lock_Move = true;
    }

    private void Move_To_Target()
    {
        // if (m_Target_Move)
        // {
        //     m_Agent.enabled = true;
        //     m_Agent.SetDestination(m_Target_Move.transform.position);
        // }
        // else
        // {
        //     m_Agent.enabled = false;
        // }
        //
      
        
        if (m_Target_Move == null) return;

        Vector3 dir = (m_Target_Move.transform.position - transform.position);
        if (dir.sqrMagnitude > 0.01f)
        {
            transform.position = Vector3.MoveTowards(
                transform.position,
                m_Target_Move.transform.position,
                speedMove * Time.deltaTime
            );

            // Nếu muốn quay mặt theo hướng di chuyển
            transform.forward = Vector3.Lerp(transform.forward, dir.normalized, Time.deltaTime * 10f);
        }
    }

    public override void Loop_Update()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        transform.localEulerAngles = Vector3.zero;
        m_Tmp_Pos = transform.position;
        m_Tmp_Pos.z = m_Tmp_Pos.y / 1000f;
        transform.position = m_Tmp_Pos;

        if (m_Is_Moving)
        {
            if (m_Target_Move && m_Target_Move.type_Player == Type_Player.None && !Game_Controller.Instance.Get_Pause_Dialogue())
            {
               // Update_Look_At(m_Agent.steeringTarget.x);
                    
                // ✅ Tính hướng di chuyển
                Vector3 targetPos = m_Target_Move.transform.position;
                Vector3 dir = (targetPos - transform.position);
                dir.y = 0; // bỏ trục y nếu là game 2D hoặc topdown
                
                Update_Look_At(targetPos.x);
                
                m_Tmp_Distance_To_Target = Vector2.Distance(transform.position, m_Target_Move.transform.position);
                if (m_Tmp_Distance_To_Target < 0.1f)
                {
                    m_Is_Moving = false;
                //    m_Agent.enabled = false;

                    
                    End_Move_To_Bed();
                }
            }
            else
            {
                // Find Other Room
                m_Room_Finding = Level_Controller.Instance.Get_Room_Empty(transform, false);
                if (m_Room_Finding && !Game_Controller.Instance.Get_Pause_Dialogue())
                {
                    Set_Target_Move(m_Room_Finding.Get_Bed_Controller());
                }
            }
        }

        if (m_Is_Moving_By_Joystick)
        {
            if (m_Is_Look_Right)
            {
                m_Obj_Look_At.localEulerAngles = Vector3.zero;
            }
            else
            {
                m_Obj_Look_At.localEulerAngles = new Vector3(0, 180, 0);
            }

        }

        Update_Check_Lock_Player();
    }

    private void Update_Look_At(float pos_X_Target)
    {
        if (m_Obj_Look_At)
        {
            //var pos_X_Target = m_Agent.steeringTarget.x;
            if (pos_X_Target > transform.position.x)
            {
                m_Obj_Look_At.localEulerAngles = Vector3.zero;
                m_Is_Look_Right = true;
            }
            else
            {
                m_Is_Look_Right = false;
                m_Obj_Look_At.localEulerAngles = new Vector3(0, 180, 0);
            }
        }
    }

    public bool m_End_Move_To_Bed;



    public void End_Move_To_Bed()
    {
       
        My_Utils.Kill_Tween(m_Tween_Loop_Check_Inside_Room);
        

        if (m_Is_Auto_Sleep && m_Model_Player_Join_Game.type_Player == Game_Controller.Instance.Get_Player_Curr())
        {
            m_Is_Auto_Sleep = false;
            End_Move_To_Bed(m_Target_Move);
            Canvas_In_Game.Instance.Get_UI_GamePlay().Set_Active_Follow_Me(false);

            DOVirtual.DelayedCall(1.15f, () => { Game_Controller.Instance.Init_Config_Time(); }, false);
        }
        else
        {
            try
            {



                if (m_Target_Move && Canvas_In_Game.Instance && Canvas_In_Game.Instance.Get_UI_GamePlay())
                {

                    Canvas_In_Game.Instance.Get_UI_GamePlay().Register_Postion_Player(Get_Type_Player(), m_Target_Move.transform.position);

                    //  Debug.LogError("End_Move_To_Bed 5 "+m_Model_Player_Join_Game);
                    m_Target_Move.Set_Player_Owner(m_Model_Player_Join_Game.type_Player);

                }


                if (m_Boss_Follow_Character)
                {

                    if (!m_Boss_Follow_Character.Check_Target_Attack_Bed(m_Target_Move))
                    {

                        m_Target_Move.m_Room_Controller.Get_Door_Of_Room().Set_Boss_Follow(m_Boss_Follow_Character);

                    }
                }

                // if (Database.instance.GetPetUse(0).PetId != PetName.None && (Get_Type_Player() == Type_Player.Player_1 || Get_Type_Player() == Type_Player.Player_2))


                m_Target_Move = null;
            }
            catch (Exception e)
            {

                Debug.LogError("End_Move_To_Bed: " + e.Message);
            }



            Destroy(gameObject);
        }
    }




    public void End_Move_To_Bed(Bed_Controller bed_Controller)
    {
    
        if (m_End_Move_To_Bed)
        {
            return;
        }

        m_End_Move_To_Bed = true;

        My_Utils.Kill_Tween(m_Tween_Loop_Check_Inside_Room);
        if (m_Is_Auto_Sleep)
        {
            m_Is_Auto_Sleep = false;
            Canvas_In_Game.Instance.Get_UI_GamePlay().Set_Active_Follow_Me(false);

            DOVirtual.DelayedCall(1.15f, () => { Game_Controller.Instance.Init_Config_Time(); }, false);
        }



        bed_Controller.Set_Player_Owner(m_Model_Player_Join_Game.type_Player);

        Camera.main.transform.SetParent(null);
        Canvas_In_Game.Instance.Get_UI_GamePlay().Set_Active_Joystick(false);

        // Canvas_In_Game.Instance.Get_UI_Fake_Joystick().Hide();
        Canvas_In_Game.Instance.Get_UI_GamePlay().Register_Postion_Player(Get_Type_Player(), bed_Controller.transform.position);


        if (m_Boss_Follow_Character)
        {
            bed_Controller.m_Room_Controller.Get_Door_Of_Room().Set_Boss_Follow(m_Boss_Follow_Character);
            m_Boss_Follow_Character.Check_Target_Attack_Bed(bed_Controller);
        }


        // Check tut 1
      



        ///



        Destroy(gameObject);
    }



    public void Start_Move_By_Joystick()
    {
        SoundController.Play_Sounds(Type_Sound.Character_Run);
        m_Is_Moving_By_Joystick = true;
        Play_Anim(Type_Animation.Run);



    }

    public void End_Move_By_Joystick()
    {
        SoundController.Stop_Sounds(Type_Sound.Character_Run);
        m_Is_Moving_By_Joystick = false;
      //  m_Agent.enabled = false;

        Play_Anim(Type_Animation.Idle);

    }

    [SerializeField] internal bool m_Is_Moving_By_Joystick;
    [SerializeField] internal bool m_Is_Look_Right;
    Vector3 m_Target_Move_By_Joystick;
    //bool m_Is_Can_Move_By_Joy_Stick;
    [SerializeField] Vector2 m_Pos_Door;

    public void On_Move_By_JoyStick(Vector2 direction)
    {
        
        if (direction.sqrMagnitude < 0.01f) return; // không di nếu joystick gần tâm

        m_Is_Look_Right = direction.x > 0;
        Vector3 moveInput = new Vector3(direction.x, direction.y, 0);
        Vector3 targetPos = transform.position + moveInput;

        // ✅ Giữ lại logic Lock Move
        if (m_Is_Lock_Move && m_Door_Controller)
        {
            m_Pos_Door = m_Door_Controller.Get_Pos_Lock_Move();
            switch (m_Direction_Door)
            {
                case Type_Direction.Top:
                    if (targetPos.y >= m_Pos_Door.y)
                        targetPos.y = m_Pos_Door.y;
                    break;
                case Type_Direction.Left:
                    if (targetPos.x <= m_Pos_Door.x)
                        targetPos.x = m_Pos_Door.x;
                    break;
                case Type_Direction.Right:
                    if (targetPos.x >= m_Pos_Door.x)
                        targetPos.x = m_Pos_Door.x;
                    break;
                case Type_Direction.Bottom:
                    if (targetPos.y <= m_Pos_Door.y)
                        targetPos.y = m_Pos_Door.y;
                    break;
            }
        }

        // ✅ Di chuyển nhân vật thủ công (thay NavMeshAgent)
        Vector3 dir = (targetPos - transform.position);
        if (dir.sqrMagnitude > 0.0001f)
        {
            transform.position += dir.normalized * speedMove * Time.deltaTime;

            // Xoay hướng nhìn
            if (m_Obj_Look_At)
            {
                m_Obj_Look_At.localEulerAngles = m_Is_Look_Right ? Vector3.zero : new Vector3(0, 180, 0);
            }
        }
    }

    [Header("_____ Lock Move Player _____")]
    [SerializeField] bool m_Is_Lock_Move;
   [SerializeField] Door_Controller m_Door_Controller;
    [SerializeField] Type_Direction m_Direction_Door;
    [SerializeField] Collider_Check_Inside_Room m_Collider_Check_Inside_Room;
    [SerializeField] float distance_To_Door;
    [SerializeField] bool m_Is_Inside_Room;

    // Call when room has Other Player

    public void Set_Active_Check_Inside_Room()
    {
        m_Collider_Check_Inside_Room.gameObject.Set_Active(false);
        m_Collider_Check_Inside_Room.gameObject.Set_Active(true);
    }

    public bool Check_Is_Inside_Room()
    {
        m_Is_Inside_Room = m_Collider_Check_Inside_Room.is_Inside_Room;

        if (m_Room_Inside)
        {
            m_Is_Inside_Room = m_Room_Inside.Check_Inside_In_Room(Game_Controller.Instance.Get_Curr_Character_Controller().transform.position);
        }

        if (Get_Type_Player() == Game_Controller.Instance.Get_Player_Curr())
        {
            if (m_Is_Inside_Room)
            {
                Game_Controller.Instance.Change_Tag_Character_Player(Tags.Untagged, m_Room_Inside);
            }
            else
            {
                Game_Controller.Instance.Change_Tag_Character_Player(Tags.Character, m_Room_Inside);
            }
        }

        return m_Is_Inside_Room;
    }

    public bool Check_Is_Inside_Room_Tut()
    {
        if (Check_Is_Inside_Room())
        {
            if (m_Room_Inside && m_Room_Inside.name.Equals("Room_4"))
            {
                return true;
            }
            return false;
        }
        return false;
    }

    public void Lock_Move(Door_Controller door_Controller, Type_Direction type_Direction)
    {
        m_Is_Lock_Move = true;
        m_Door_Controller = door_Controller;
        m_Door_Controller.Set_Active_Collider_Lock_Player_Move(false);
        m_Direction_Door = My_Utils.Get_Reflect_Direction(type_Direction);
    }

    public void Reset_Lock_Move()
    {
        m_Is_Lock_Move = false;
        m_Collider_Check_Inside_Room.gameObject.Set_Active(false);
        m_Door_Controller.Set_Active_Collider_Lock_Player_Move(true);
        m_Door_Controller = null;
    }

    private void Update_Check_Lock_Player()
    {
        if (m_Is_Lock_Move && m_Door_Controller)
        {
            distance_To_Door = (transform.position - m_Door_Controller.Get_Pos_Lock_Move()).sqrMagnitude;
            if (distance_To_Door > 0.25f)
            {
                Reset_Lock_Move();
            }
        }
    }

   [SerializeField] Room_Controller m_Room_Inside;
    public void Set_Current_Room_Inside(Room_Controller room_Controller)
    {
        m_Room_Inside = room_Controller;
    }

    private void Loop_Check_Inside_Room()
    {
        if (Get_Type_Player() != Game_Controller.Instance.Get_Player_Curr()) return;
        m_Is_Inside_Room = false;

        if (m_Room_Inside && Game_Controller.Instance.Get_Curr_Character_Controller())
        {
            m_Is_Inside_Room = m_Room_Inside.Check_Inside_In_Room(Game_Controller.Instance.Get_Curr_Character_Controller().transform.position);
        }

        if (Get_Type_Player() == Game_Controller.Instance.Get_Player_Curr())
        {
            if (m_Is_Inside_Room)
            {
                Game_Controller.Instance.Change_Tag_Character_Player(Tags.Untagged, m_Room_Inside);
            }
            else
            {
                Game_Controller.Instance.Change_Tag_Character_Player(Tags.Character, m_Room_Inside);
                m_Room_Inside = null;
            }
        }

        My_Utils.Kill_Tween(m_Tween_Loop_Check_Inside_Room);
        m_Tween_Loop_Check_Inside_Room = DOVirtual.DelayedCall(0.125f, () =>
        {
            if (gameObject.activeSelf)
            {
                Loop_Check_Inside_Room();
            }
            else
            {
                My_Utils.Kill_Tween(m_Tween_Loop_Check_Inside_Room);
            }
        }, false).SetLink(gameObject); ;
    }

    public void Set_Is_Inside_Room()
    {
        m_Is_Inside_Room = true;
    }

    public override void OnDestroy()
    {
        base.OnDestroy();
        My_Utils.Kill_Tween(m_Tween_Loop_Check_Inside_Room);
    }
}
