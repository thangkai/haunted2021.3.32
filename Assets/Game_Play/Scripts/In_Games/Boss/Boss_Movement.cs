using DG.Tweening;
using System;
using System.Collections;
using UnityEngine;
using UnityEngine.AI;

using Spine.Unity;
using Haunted;

public class Boss_Movement : MonoBehaviour
{
    [SerializeField] private Rigidbody2D m_RB;
    [SerializeField] Type_Player m_Type_Boss;
    [SerializeField] Base_Boss m_Base_Boss;
    [SerializeField] private Ammor_Follow m_Ammor_Follow;
    [SerializeField] Transform m_Target_Move;
    [SerializeField] bool m_Is_Start_Move_To_Target;
    [SerializeField] Type_Direction m_Type_Direction_Start;
  [SerializeField] internal Type_Direction m_Curr_Direction;
   // [SerializeField] NavMeshAgent m_Agent;
    [SerializeField] Transform m_Obj_Look_At;
    [SerializeField] Boss_Animation m_Boss_Animation;
  //  [SerializeField] Boss_Attack_Golem m_Boss_Attack_Golem;
    [SerializeField] SkeletonAnimation m_Anim_Boss;
    [SerializeField] int m_Order_Layer_Default;
   [SerializeField] MeshRenderer m_Mesh_Renderer;

    Action m_Action_Move_Done;
    [SerializeField] bool m_Is_Moving;
    [SerializeField] bool m_Is_Moving_To_Point;
    [SerializeField] bool m_Is_Moving_Attack_Character;
    Transform m_Pos_Character;
    Character_Controller m_Character_Controller;
    Vector2 m_Pos_Target;
    Vector3 m_Tmp_Pos;
    float m_Tmp_Distance_To_Target;

    Vector2 m_Pos_Look_At;
    Vector2 NONE = new Vector2(-99999f, -99999f);
    int m_Real_Id_Boss;

    private void Awake()
    {
        // if (m_Agent)
        // {
        //     m_Agent.enabled = false;
        // }
      
        if (m_RB == null)
        {
            m_RB = GetComponent<Rigidbody2D>();
        }

        // if (m_RB)
        // {
        //     Debug.LogError("xekotoby 3 simulated  Awake"+ this.gameObject.name); 
        //    m_RB.simulated = false;
        // }
    }
    public void Set_Mesh(MeshRenderer mesh)
    {
        m_Mesh_Renderer = mesh;

    }
    public void Set_Anim(SkeletonAnimation m_Anim)
    {
        m_Anim_Boss = m_Anim;
    }

    private void Start()
    {
        if (m_RB == null)
        {
            m_RB = GetComponent<Rigidbody2D>();
        }
            
       // m_Mesh_Renderer = m_Anim_Boss.GetComponent<MeshRenderer>();
        Set_Order_Layer_Default(Boss_Manager.Instance.Get_Layer_Health_Bar_Boss());
        m_Real_Id_Boss = My_Utils.Get_Id_Boss(m_Type_Boss);
    }

    public bool Get_Is_Moving_Attack_Character()
    {
        return m_Is_Moving_Attack_Character;
    }

    public Type_Direction Get_Curr_Direction()
    {
        return m_Curr_Direction;
    }

    public Ammor_Follow Get_Ammor_Follow()
    {
        return m_Ammor_Follow;
    }

    public void Set_Active_Ammor_Follow(bool is_Active)
    {
        if (m_Ammor_Follow )
        {
            if (is_Active != m_Ammor_Follow.gameObject.activeSelf)
            {
                m_Ammor_Follow.gameObject.Set_Active(is_Active);
            }
           
        }
    }

    public Base_Boss Get_Base_Boss()
    {
        return m_Base_Boss;
    }

    public void Set_Order_Layer_Default(int m_Order)
    {
        m_Order_Layer_Default = m_Order;
    }

    public void Set_Start_Move_To_Target(Transform pos_Target, Action action_Move_Done)
    {
        m_Is_Force_Look_At = false;
        Debug.Log(transform.GetInstanceID() + "=======> Boss_Movement | Set_Start_Move_To_Target : m_Is_Force_Look_At = " + m_Is_Force_Look_At);
        m_Pos_Look_At = NONE;
        m_Action_Move_Done = action_Move_Done;
        m_Target_Move = pos_Target;

        m_Is_Moving_To_Point = false;
        m_Is_Moving = true;

        if (m_RB)
        {
            m_RB.simulated = true;
        }
        // if(m_Agent)
        // m_Agent.enabled = true;

        if (Check_Target_Move())
        {
            // if(m_Agent)
            // m_Agent.SetDestination(pos_Target.position);
            
            m_MoveDirection = ((Vector2)m_Target_Move.position - (Vector2)transform.position).normalized;
        }
        else
        {
            m_Is_Moving = false;
            m_Action_Move_Done.Invoke();
           // m_Action_Move_Done = null;

        }
    }

    public void Set_Is_Force_Look_At(bool is_Force)
    {
        m_Is_Force_Look_At = is_Force;
    }

   
    public void Move_To_Health_Point(Action action_Move_Done)
    {

        m_Pos_Look_At = NONE;
        transform.DOKill(false);

        // Find Nearest Point
        Vector2 pos_Point_Health_Nearest = Level_Controller.Instance.Get_Nearest_Point_Health(transform.position);
        Set_Start_Move_To_Point(pos_Point_Health_Nearest, action_Move_Done);
        m_Base_Boss.Set_Room_Attacking(null);
    }

    public void Set_Start_Move_To_Point(Vector2 pos, Action action_Move_Done)
    {
        m_Is_Force_Look_At = false;
        //Debug.Log(transform.GetInstanceID() + "=======> Boss_Movement | Set_Start_Move_To_Point : pos = " + pos);
        m_Pos_Look_At = NONE;
        if (m_Action_Move_Done != null)
        {
            m_Action_Move_Done = null;
        }
        m_Action_Move_Done = action_Move_Done;

        m_Is_Moving = false;
        m_Is_Moving_To_Point = true;
        m_Pos_Target = pos;

        if (m_RB)
        {
            m_RB.simulated = true;
        }

        // if (m_Agent)
        // {
        //     m_Agent.enabled = true;
        //     m_Agent.SetDestination(m_Pos_Target);
        // }
        //
        m_MoveDirection = (m_Pos_Target - (Vector2)transform.position).normalized;
    }

    public void Set_Moving_To_Point(bool is_Moving)
    {
        m_Is_Moving_To_Point = is_Moving;
    }

    public void Set_Is_Force_Look_At(Type_Direction type_Direction, bool is_Force)
    {
        m_Is_Force_Look_At = is_Force;
        m_Curr_Direction = type_Direction;
        //Debug.Log("=======> Set_Is_Force_Look_At : m_Is_Force_Look_At = " + m_Is_Force_Look_At + " | m_Curr_Direction = "  + m_Curr_Direction);
        Update_Look_At(m_Curr_Direction);
    }

    public void Set_Start_Move_To_Point(Vector2 pos, Vector2 pos_Look_At, Action action_Move_Done)
    {
        //m_Pos_Look_At = pos_Look_At;
        //m_Action_Move_Done = action_Move_Done;

        //m_Is_Moving = false;
        //m_Is_Moving_To_Point = true;
        //m_Pos_Target = pos;

        //m_Agent.enabled = true;
        //m_Agent.SetDestination(m_Pos_Target);
    }

    public void Stop_Move()
    {
       // try
        //{
            // if (m_Is_Moving || m_Is_Moving_To_Point)
            // {
            //     if (m_Agent)
            //     {
            //         if (m_Agent.isActiveAndEnabled)
            //         {
            //             m_Agent.SetDestination(transform.position);
            //         }
            //     
            //         // if (m_RB)
            //         // { 
            //         //     Debug.LogError("xekotoby 3 simulated  Stop_Move " + this.gameObject.name);
            //         //     m_RB.simulated = false;
            //         // }
            //     
            //         m_Agent.enabled = false;
            //     }
            //  
            // }
            //
            
            m_Is_Moving = false;
            m_Is_Moving_To_Point = false;
            m_MoveDirection = Vector2.zero;
       // }
       // catch (Exception) { }
    }

    public bool Get_Is_Moving()
    {
        return m_Is_Moving || m_Is_Moving_To_Point;
    }

    public void Set_State_Die()
    {
        //m_Agent.SetDestination(transform.position);
        if (m_RB)
        {
            Debug.LogError("xekotoby 3 simulated Set_State_Die "+ this.gameObject.name);
            m_RB.simulated = false;
        }

        // if (m_Agent)
        // {
        //     m_Agent.enabled = false;
        // }
      
    }

    public Type_Direction Get_Direction_Look_At()
    {
        return m_Obj_Look_At.localEulerAngles.y != 0 ? Type_Direction.Left : Type_Direction.Right;
    }

    public void Continue_Move()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        // Boss Summon – chỉ callback xong là xong
        if (this.GetComponent<Boss_Summon>())
        {
            if (m_Action_Move_Done != null)
            {
                m_Action_Move_Done.Invoke();
                Debug.LogError("Continue move------ Boss_Summon" + m_Base_Boss.Get_Is_Stunning());
            }
            return;
        }

        Debug.LogError("Continue move");

        // Nếu boss đang di chuyển tới một mục tiêu cụ thể
        if (m_Is_Moving)
        {
            Debug.LogError("=======> Boss_Movement | Continue_Move :m_Is_Moving");
            if (m_RB) m_RB.simulated = true;

            if (m_Base_Boss)
            {
                m_Base_Boss.Set_Active_Anim_Door_Attack(false);
                m_Base_Boss.Play_Animation(Type_Animation.Run);
            }

            if (Check_Target_Move())
            {
                // Bắt đầu di chuyển thủ công
                StopAllCoroutines();
                StartCoroutine(Move_To_Target_Update());
            }
            else
            {
                m_Action_Move_Done?.Invoke();
            }
        }
        // Nếu boss đang di chuyển tới 1 điểm (vector)
        else if (m_Is_Moving_To_Point)
        {
            Debug.LogError("=======> Boss_Movement | Continue_Move : Moving to point");
            if (m_RB) m_RB.simulated = true;

            if (m_Base_Boss)
            {
                m_Base_Boss.Set_Active_Anim_Door_Attack(false);
                m_Base_Boss.Play_Animation(Type_Animation.Run);
            }

            StopAllCoroutines();
            StartCoroutine(Move_To_Point_Update());
        }
        else
        {
            if (m_Base_Boss.Get_Room_Attacking().Get_Door_Of_Room() == null)
            {
                Set_Start_Move_To_Target(m_Base_Boss.Get_Room_Attacking() .Get_Bed_Controller().transform,
                    () => { m_Base_Boss.Kill_Player_Done(); });
            }
        }

      
    }


    private bool Check_Target_Move()
    {
        return m_Target_Move != null;
    }

    float distance = 5.0f;
    // public override void Loop_Update()
    
    
    private IEnumerator Move_To_Point_Update()
    {
        m_Is_Moving_To_Point = true;

        while (m_Is_Moving_To_Point)
        {
            Vector3 dir = ((Vector3)m_Pos_Target - transform.position);
            float dist = dir.magnitude;
            if (dist < 0.1f) break;

            dir.Normalize();
            transform.position += dir * 3f * Time.deltaTime;

            Update_Look_At(m_Pos_Target.x);
            yield return null;
        }

        //Move_To_Target_Done();
    }

    private IEnumerator Move_To_Target_Update()
    {
        m_Is_Moving = true;

        while (m_Is_Moving && m_Target_Move != null)
        {
            Vector3 dir = (m_Target_Move.position - transform.position);
            float dist = dir.magnitude;
            if (dist < 0.1f) break;

            dir.Normalize();
            transform.position += dir * 3f * Time.deltaTime; // 3f = speed

            Update_Look_At(m_Target_Move.position.x);
            yield return null;
        }

        Move_To_Target_Done();
    }


    // public  void Update()
    // {
    //     transform.localEulerAngles = Vector3.zero;
    //     if (m_Base_Boss.Get_Is_Live())
    //     {
    //         m_Base_Boss.Update_Pos_Health_Bar();
    //     }
    //  
    //     if (Game_Controller.Get_Is_End_Level()) return;
    //     if (m_Base_Boss && m_Base_Boss.Get_Is_Stunning()) return;
    //   
    //     Adjust_Sorting_Order();
    //     
    //     if (m_Ammor_Follow)
    //     {
    //         m_Ammor_Follow.Loop_Update(m_Order_In_Layer);
    //     }
    //
    //     if (m_Boss_Animation && m_Boss_Animation.m_Anim!=null)
    //     {
    //         m_Boss_Animation.Loop_Update();
    //     }
    //    
    //
    //
    //     if (m_Is_Moving || m_Is_Moving_Attack_Character || m_Is_Moving_To_Point)
    //     {
    //         if (!m_Is_Force_Look_At)
    //         {
    //             if (m_Agent)
    //             Update_Look_At(m_Agent.steeringTarget.x);
    //         }
    //      
    //         m_Base_Boss.SetFollowSummonBoss();
    //         if (m_Is_Moving || (m_Is_Moving_Attack_Character && m_Base_Boss.Get_Target_Character() == null))
    //         {
    //             if (Check_Target_Move())
    //             {
    //                 m_Tmp_Distance_To_Target = Vector2.Distance(transform.position, m_Target_Move.position);
    //               
    //                 // if (m_Tmp_Distance_To_Target < 0.1f)
    //                 // {
    //                 //     Move_To_Target_Done();
    //                 // }
    //                // Debug.LogError("m_Tmp_Distance_To_Target " + m_Tmp_Distance_To_Target);
    //
    //                 if (m_Base_Boss.Get_Boss_ADC() && !m_Base_Boss.Is_Go_Health())
    //                 {
    //                     if (m_Tmp_Distance_To_Target < 0.1f)// +m_Base_Boss.Get_Distance_Adc())// && m_Base_Boss.Get_Room_Attacking().Get_Door_Of_Room().IsBossInAttackRange(transform.position))
    //                     {
    //                         Move_To_Target_Done();
    //                     }
    //                 }
    //                 else
    //                 {
    //                     if (m_Tmp_Distance_To_Target < 0.1f)
    //                     {
    //                         Move_To_Target_Done();
    //                     }
    //                 }
    //                 
    //                 
    //                 
    //             }
    //             else
    //             {
    //                 Move_To_Target_Done();
    //             }
    //         }
    //         else if (m_Is_Moving_To_Point)
    //         {
    //             m_Tmp_Distance_To_Target = Vector2.Distance(transform.position, m_Pos_Target);
    //
    //
    //             if (m_Base_Boss.Get_Boss_ADC() && !m_Base_Boss.Is_Go_Health())
    //             {
    //                 if (m_Tmp_Distance_To_Target < 0.1f) // +m_Base_Boss.Get_Distance_Adc() && m_Base_Boss.Get_Room_Attacking().Get_Door_Of_Room().IsBossInAttackRange(transform.position) )
    //                 {
    //                     Move_To_Target_Done();
    //                 }
    //             }
    //             else
    //             {
    //                 if (m_Tmp_Distance_To_Target < 0.1f)
    //                 {
    //                     Move_To_Target_Done();
    //                 }
    //             }
    //             // if (m_Tmp_Distance_To_Target < 0.1f)
    //             // {
    //             //     Move_To_Target_Done();
    //             // }
    //             
    //         }
    //     }
    // }
    public void Update()
    {
        transform.localEulerAngles = Vector3.zero;

        if (m_Base_Boss.Get_Is_Live())
            m_Base_Boss.Update_Pos_Health_Bar();

        if (Game_Controller.Get_Is_End_Level() || (m_Base_Boss && m_Base_Boss.Get_Is_Stunning()))
            return;

        Adjust_Sorting_Order();

        if (m_Ammor_Follow)
            m_Ammor_Follow.Loop_Update(m_Order_In_Layer);

        if (m_Boss_Animation && m_Boss_Animation.m_Anim != null)
            m_Boss_Animation.Loop_Update();

        // ======================
        // === PHẦN DI CHUYỂN ===
        // ======================

        if (m_Is_Moving || m_Is_Moving_Attack_Character || m_Is_Moving_To_Point)
        {
            // Xác định vị trí target cần di chuyển tới
            if (m_Is_Moving_To_Point)
                m_CurrentTargetPos = m_Pos_Target;
            else if (Check_Target_Move())
                m_CurrentTargetPos = m_Target_Move.position;
            else
            {
                Move_To_Target_Done();
                return;
            }

            // Tính hướng di chuyển
            Vector3 dir = (m_CurrentTargetPos - transform.position).normalized;

            // Quay mặt theo hướng di chuyển
            if (!m_Is_Force_Look_At)
                Update_Look_At(m_CurrentTargetPos.x);

            // Di chuyển
            if (m_RB)
                m_RB.MovePosition(transform.position + dir * m_MoveSpeed * Time.deltaTime);
            else
                transform.position += dir * m_MoveSpeed * Time.deltaTime;

            // Cập nhật animation nếu có
            m_Base_Boss.SetFollowSummonBoss();
            if (m_Base_Boss)
            {
                m_Base_Boss.Set_Active_Anim_Door_Attack(false);
                m_Base_Boss.Play_Animation(Type_Animation.Run);
            }

            // Kiểm tra khi gần tới đích
            float dist = Vector2.Distance(transform.position, m_CurrentTargetPos);
            if (dist < 0.1f)
            {
                Move_To_Target_Done();
            }
        }
    }
    [SerializeField] int m_Order_In_Layer;
    private void Adjust_Sorting_Order()
    {
        //m_Tmp_Pos = transform.position;
        //m_Tmp_Pos.z = m_Tmp_Pos.y / 1000f;
        //transform.position = m_Tmp_Pos;

        //m_Mesh_Renderer.sortingOrder = (int)((int)(transform.position.y * (-100)) + 1000) / 10;

        m_Order_In_Layer = (int)((int)(transform.position.y * (-10)) + 500 + Get_Order_Layer_Default()); //200 + Get_Order_Layer_Default() + 20 * m_Real_Id_Boss);
        if(m_Mesh_Renderer) m_Mesh_Renderer.sortingOrder = m_Order_In_Layer;
        //m_Label_Level.sortingOrder = m_Order_In_Layer + 2000 - 20;
        //m_Bg_Health_Bar.sortingOrder = m_Order_In_Layer + 3000 - 19;
        //m_Progress_Health_Bar.sortingOrder = m_Order_In_Layer + 3000 - 18;
        //m_Bg_Exp.sortingOrder = m_Order_In_Layer + 3000 - 19;
        //m_Progress_Exp.sortingOrder = m_Order_In_Layer + 3000 - 18;
        if (m_Base_Boss)
        {
            m_Base_Boss.Update_Sorting_Order(m_Order_In_Layer);
        }
    }
    [SerializeField] float m_MoveSpeed = 2.5f;
    private Vector2 m_MoveDirection;
    private Vector3 m_CurrentTargetPos;
    private float Get_Order_Layer_Default()
    {
        if(m_Base_Boss && m_Base_Boss.Get_Is_Live() && m_Base_Boss.Get_Is_Take_Damaging() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge)
        {
            return m_Order_Layer_Default + 1000;
        }
        return 0;
    }

    private void Move_To_Target_Done()
    {
        m_Is_Moving = false;
        m_Is_Moving_To_Point = false;
        // if (m_Agent)
        // m_Agent.enabled = false;

        if (m_Pos_Look_At != NONE)
        {
            Update_Look_At(m_Pos_Look_At.x);
        }
     
        //transform.localEulerAngles = Vector3.zero;
        Debug.Log(transform.GetInstanceID() + "=======> Boss_Movement | Move_To_Target_Done : Move_To_Target_Done = " );

        if (m_Action_Move_Done != null)
        {
            m_Action_Move_Done.Invoke();

        }
      
    }

    public void Simulated_Physic_Off()
    {
        // if (m_RB )
        // {
        //     if (m_RB.simulated)
        //     {
        //         Debug.LogError("xekotoby 3 simulated Simulated_Physic_Off  "+ this.gameObject.name);
        //         m_RB.simulated = false;
        //     }
        //    
        // } 
    }


    public void Update_Look_At(float pos_X_Target)
    {
        if (!m_Is_Force_Look_At)
        {
            if (m_Obj_Look_At)
            {
                if (pos_X_Target > transform.position.x)
                {
                    m_Curr_Direction = Type_Direction.Right;
                    m_Obj_Look_At.localEulerAngles = Vector3.zero;
                }
                else
                {
                    m_Curr_Direction = Type_Direction.Left;
                    m_Obj_Look_At.localEulerAngles = new Vector3(0, 180, 0);
                }

                //Debug.Log("------->>>> m_Is_Force_Look_At = " + m_Is_Force_Look_At + " | Update_Look_At = " + pos_X_Target + " | direction = " + m_Curr_Direction);
            }
        }
    }

    public void Update_Look_At(Type_Direction type_Direction)
    {
        if (type_Direction == Type_Direction.Right)
        {
            m_Curr_Direction = Type_Direction.Right;
            m_Obj_Look_At.localEulerAngles = Vector3.zero;
        }
        else
        {
            m_Curr_Direction = Type_Direction.Left;
            m_Obj_Look_At.localEulerAngles = new Vector3(0, 180, 0);
        }
    }

    bool m_Is_Force_Look_At;

    public void Play_Animation(Type_Animation type_Animation, Vector3 pos, bool is_Force_Attack = false)
    {
        if (m_Base_Boss)
        {
            m_Is_Force_Look_At = true;
            Update_Look_At(pos.x > transform.position.x ? Type_Direction.Right : Type_Direction.Left);

            m_Base_Boss.Set_Pos_Attack(pos);
            if (is_Force_Attack)
            {
                m_Base_Boss.Play_Animation_Force_Attack();
            }
            else
            {
                m_Base_Boss.Play_Animation(type_Animation);
            }
        }
    }

    public void Reset_Force_Look_At()
    {
        m_Is_Force_Look_At = false;
        //Debug.Log("=======> Reset_Force_Look_At : m_Is_Force_Look_At = " + m_Is_Force_Look_At);
    }

    public void Play_Animation(Type_Animation type_Animation)
    {
        if (m_Base_Boss)
        {
            m_Base_Boss.Play_Animation(type_Animation);
        }
    }

    #region ============== Move to Character and Kill ======

    public void Move_To_Character()
    {
        m_Is_Moving_Attack_Character = true;

        CancelInvoke(nameof(Update_Pos_Character));
        InvokeRepeating(nameof(Update_Pos_Character), 0f, 0.125f);
    }

    public void Change_Target_Attack_Door(Bed_Controller bed_Controller)
    {
        CancelInvoke(nameof(End_Anim_Attack_Character));

        // Check position boss in room
        if (!bed_Controller.m_Room_Controller.Check_Inside_In_Room(transform.position))
        {
            m_Base_Boss.Set_Room_Attacking(bed_Controller.m_Room_Controller);
            m_Is_Moving_Attack_Character = false;
            // Attack Door
            Debug.LogError("jura");
            m_Base_Boss.Start_Move_And_Attack_Door(false);
        }
    }

    public bool Check_Target_Attack_Bed(Bed_Controller bed_Controller)
    {
        CancelInvoke(nameof(End_Anim_Attack_Character));

        // Check position boss in room
        if (bed_Controller && bed_Controller.m_Room_Controller.Check_Inside_In_Room(transform.position))
        {
            m_Base_Boss.Set_Room_Attacking(bed_Controller.m_Room_Controller);
            // Attack Bed
            m_Base_Boss.Start_Move_Attack_Player();

            return true;
        }
        return false;
    }

    private void Update_Pos_Character()
    {
        if (Game_Controller.Get_Is_End_Level())
        {
            CancelInvoke(nameof(Update_Pos_Character));
            return;
        }

        if (!m_Base_Boss.m_Is_Live)
        {
            CancelInvoke(nameof(Update_Pos_Character));
            return;
        }

        m_Pos_Character = m_Base_Boss.Get_Target_Character();
        if (m_Pos_Character)
        {
            if (m_Is_Moving_Attack_Character)// tan cong character
            {
                m_Character_Controller = m_Pos_Character.GetComponent<Character_Controller>();
                if (m_Character_Controller)
                {
                    m_Character_Controller.Set_Boss_Follow(this);
                }
                if (m_RB)
                {
                    m_RB.simulated = true;
                }

                // if (m_Agent)
                // {
                //     m_Agent.enabled = true;
                //     m_Agent.SetDestination(m_Pos_Character.position);
                // }
                //
                
                Vector2 dir = ((Vector2)m_Pos_Character.position - (Vector2)transform.position).normalized;
                m_RB.MovePosition((Vector2)transform.position + dir * m_MoveSpeed * Time.fixedDeltaTime);
                //float distance = Vector2.Distance(m_Pos_Character.position, transform.position);
                //if (distance < 2f)
                
                // vi tri boss -  vi tri hien tai cua boss  < 4=> dung di chuyen => anim tan cong 
                if ((m_Pos_Character.position - transform.position).sqrMagnitude < 4f)
                {
                    if (!m_Base_Boss.m_Is_Live)
                    {
                        CancelInvoke(nameof(Update_Pos_Character));
                        return;
                    }

                    Stop_Move();
                    // Kill Character
                    Play_Animation(Type_Animation.Attack, m_Pos_Character.position);

                    if (m_Character_Controller)
                    {
                        m_Character_Controller.Stop_Move();
                    }

                    m_Is_Moving_Attack_Character = false;
                    CancelInvoke(nameof(End_Anim_Attack_Character));
                    Invoke(nameof(End_Anim_Attack_Character), 1f);
                }
            }
        }
        else
        {
            // Find Door Room Character 
            if (!m_Is_Moving_Attack_Character)
            {
                Continue_Move();
            }
        }
    }

    private void End_Anim_Attack_Character()
    {
        m_Is_Moving_Attack_Character = false;
        Reset_Force_Look_At();

        Character_Controller character_Controller = m_Base_Boss.Get_Target_Character_Controller();
        if (character_Controller)
        {
            character_Controller.On_Died();
        }

        m_Base_Boss.Reset_Detect_Character();

        Continue_Move();
    }

    #endregion
}
