using UnityEngine;


public class Boss_ADC : MonoBehaviour
{
    public Room_Controller m_Room_Controller;
    public Type_Player type_Boss;

    [Header("_____ Boss_ADC _____")] [SerializeField]
    float m_Range = 5f; // init data


    protected float m_Speed_Move = 15f;
    [SerializeField] float m_CD = 1f;

    [SerializeField] protected Color m_Color_Gizmos;

    [SerializeField] SpriteRenderer m_Model_Turret;

    [SerializeField] Bool_Global_Variable m_Live_Data_Turret_Detect_Target;

    [SerializeField] Transform m_Pos_Effect_Fire;

    Transform m_Effect_Fire;

    [Header("_______________ Ready Only _______________")]  [SerializeField]
    protected bool m_Is_Stun;

   [SerializeField] protected bool m_Is_Scare;
    [SerializeField] protected bool m_Is_Charm;
    bool m_Is_Start;
    private Base_Boss base_Boss;


    public void Start()
    {
        // m_Is_Tutorials = DataSaved.Get_Current_Loading_Level() == 0 && !DataSaved.Get_Is_Complete_Tutorial() &&
        //                  DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story;
        m_Order_Default_Look_At_Target = m_Model_Turret.sortingOrder;
        base_Boss = gameObject.GetComponent<Base_Boss>();
        m_Is_Start = true;
    }

    private void OnEnable()
    {
        Add_Listener();
    }

    private void OnDisable()
    {
        CancelInvoke(nameof(Fight_Bullet));
        CancelInvoke(nameof(Update_Detect_Target));


        if (m_Live_Data_Turret_Detect_Target)
        {
            m_Live_Data_Turret_Detect_Target.OnValueChanged.RemoveListener(Update_Detect_Target);
        }
    }

    private void Add_Listener()
    {
        if (m_Live_Data_Turret_Detect_Target)
        {
            m_Live_Data_Turret_Detect_Target.OnValueChanged.AddListener(Update_Detect_Target);
        }
        //Update_Model_Fire();
    }
    
    private  void Set_Room_Controller()
    {
        m_Room_Controller = base_Boss.Get_Room_Attacking();
    }
  



    private void OnDrawGizmos()
    {
        Gizmos.color = m_Color_Gizmos;
        Gizmos.DrawWireSphere(transform.position, m_Range);
    }

    #region ================== Detect Target =================

    [Header("______ Detect Target _______")]
    public Transform m_Target;

    public Look_At_Target m_Look_At_Target;

    // cap nhat phat hien target
    public virtual void Update_Detect_Target()
    {
        
        Debug.LogError("Update_Detect_Target");
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;
        Set_Room_Controller();
        if (m_Target == null)
        {
            var all_Target = m_Room_Controller.Get_Pos_Door_Of_Room();// vi tri cua cai cua hien tai
            float m_Min_Range = int.MaxValue;


            
            
            Debug.LogError("m_Min_Range " + m_Min_Range);
            float distance = Vector2.Distance(transform.position, all_Target);
            if (distance < m_Range && distance < m_Min_Range)
            {
                m_Min_Range = distance;
                
                // vi tri cua
                m_Target = m_Room_Controller.Get_Door_Of_Room().transform;
            }


            if (m_Target)
            {
                m_Look_At_Target.Set_Target(m_Target.GetComponent<Room_Controller>().Get_Door_Of_Room().transform);
                // huong dan
                Fight_Bullet();
            }
            else
            {
                if (m_Room_Controller.Get_Bed_Controller() != null)
                {
                    m_Target = m_Room_Controller.Get_Bed_Controller().transform;
                    m_Look_At_Target.Set_Target(m_Target.GetComponent<Room_Controller>().Get_Door_Of_Room().transform);
                    Fight_Bullet();
                }
            }
        }
        else
        {
            float distance = Vector2.Distance(transform.position, m_Target.position);
            if (distance > m_Range)
            {
                
                
                Debug.LogError(distance+  " a" +m_Range+" " +" distance "+ " khoang cach qua xa");
                m_Target = null;
                m_Look_At_Target.Set_Target(null);
                CancelInvoke(nameof(Fight_Bullet));
            }
        }
    }

    // // Dang ban giup hang xom, ma co con Vampire khac tan cong nha minh, thi chuyen huong ban nha minh
    // public virtual void Update_Target_To_Turret(Base_Boss base_Boss)
    // {
    //     if (Game_Controller.Get_Is_End_Level()) return;
    //     if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;
    //
    //     if (m_Target == null)
    //     {
    //         //TODO SUA TARGET
    //         Update_New_Target(m_Target);
    //     }
    //     else
    //     {
    //         Base_Boss boss_Curr = m_Target.GetComponent<Base_Boss>();
    //         if (base_Boss.m_Is_Live)
    //         {
    //             if (boss_Curr.Get_Room_Attacking() &&
    //                 boss_Curr.Get_Room_Attacking().transform.GetInstanceID() !=
    //                 base_Boss.Get_Room_Attacking().transform.GetInstanceID())
    //             {
    //                 Update_New_Target(m_Target);
    //             }
    //         }
    //         else
    //         {
    //             Update_New_Target(m_Target);
    //         }
    //     }
    //}

    // tim  nha  moi
    public virtual void Update_New_Target(Transform target)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;
        // khoang cach den muc tieu
        float distance_To_Target = Vector2.Distance(transform.position, target.position);
        if (distance_To_Target <= m_Range)
        {
            m_Target = target;
            m_Look_At_Target.Set_Target(m_Target);


            CancelInvoke(nameof(Fight_Bullet));
            Fight_Bullet();
        }
    }


    protected float damage;
    protected Type_Bullet_Skill m_Type_Bullet_Skill;

    // ban sung


    public virtual void Fight_Bullet()
    {
        
        
        
        if (Game_Controller.Get_Is_End_Level()) return;
        Set_Room_Controller();
        if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;
       
      
            if (m_Room_Controller.Get_Door_Of_Room() != null)
            {
                m_Target = m_Room_Controller.Get_Door_Of_Room().transform;
            }
            else //if(m_Room_Controller.Get_Bed_Controller()!=null)
            {
                m_Target = m_Room_Controller.Get_Bed_Controller().transform;
            }
          
     
        
        
        if (!m_Is_Stun && !m_Is_Scare && !m_Is_Charm)//
        {
            if (m_Target != null)
            {
               // Debug.LogError("Spawn_Bullet");
                Spawn_Bullet();
            }
        }

      
       
       

        CancelInvoke(nameof(Fight_Bullet));
        if (m_Target)
        {
            float distance_To_Boss = Vector2.Distance(transform.position, m_Target.position);
           // Debug.LogError(distance_To_Boss+"distance_To_Boss ");
            if (distance_To_Boss < 2f)
            {
                distance_To_Boss = 2f;
            }
        }
   
    }

    protected virtual void Spawn_Bullet()
    {
        
        
      
        Spawn_Pool_Bullet_Boss_Controller.Instance.Create_Bullet(transform);
        Bullet_Controller_Boss obj_Bullet = Spawn_Pool_Bullet_Boss_Controller.Instance.SpawnDamagePopup();
       // Debug.LogError(base_Boss.GetPosBulletAdc() + " vi tri dan");
        obj_Bullet.transform.position = base_Boss.GetPosBulletAdc();
        obj_Bullet.transform.localEulerAngles = m_Look_At_Target.transform.localEulerAngles;


        if (type_Boss != Type_Player.None)
        {
            Bullet_Controller_Boss bullet_Controller = obj_Bullet;

            if (bullet_Controller)
            {
                obj_Bullet.transform.SetParent(Recycle_Bin.Instance.transform);
                m_Type_Bullet_Skill = Type_Bullet_Skill.None;
                // if (m_Type_Character == Type_Character.Zues && UnityEngine.Random.Range(0, 9999) % 2 == 0)
                // {
                //  Change :co the thay doi dan cho boss
                //     m_Type_Bullet_Skill = Type_Bullet_Skill.Zeus;
                // }
                bullet_Controller.Set_Target(type_Boss, m_Target, base_Boss.attack_Speed, base_Boss.damage, base_Boss.level_Curr,
                    base_Boss.type_Bullet_Boss, base_Boss);
                Play_Sound_Shoot();
            }
            else
            {
                Spawn_Pool_Bullet_Boss_Controller.Instance.ReturnDamageLabelToPool(bullet_Controller);
            }
        }
    }

    //sound
    protected void Play_Sound_Shoot()
    {
        //Change: thay doi dan:
        SoundController.Play_Sounds(Type_Sound.Turret_1);
    }

    #endregion

    bool m_Is_Can_Upgrade;
    int m_Order_Default_Look_At_Target;
}