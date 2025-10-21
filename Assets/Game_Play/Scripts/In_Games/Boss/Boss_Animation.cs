using Spine.Unity;
using UnityEngine;


public class Boss_Animation : MonoBehaviour
{
    [SerializeField] Base_Boss m_Base_Boss;
    [SerializeField] Type_Animation m_Current_Anim = Type_Animation.None;
    [SerializeField] float m_Speed_Attack = 0f;
    [SerializeField] public SkeletonAnimation m_Anim;
  //  [SerializeField] SkeletonAnimation m_Anim_Attack;
    [SerializeField] private GameObject animAttack;
    bool m_Is_Force_Attack;
    Boss_Movement m_Boss_Movement;


    public Type_Animation Get_Curr_Animation()
    {
        return m_Current_Anim;
    }

    private void Start()
    {
        m_Boss_Movement = GetComponent<Boss_Movement>();

        //Init_Layer_Health_Bar();
    }

    public void Set_Anim(SkeletonAnimation m_Anim_Skele)
    {
        m_Anim = m_Anim_Skele;
    }


    public void Play_Animation(Type_Animation type_Animation, float speed_Attack, bool is_For_Attack = false)
    {
        m_Is_Force_Attack = is_For_Attack;

        Debug.Log("===> Play_Animation : m_Is_Force_Attack = " + m_Is_Force_Attack);

        if (m_Current_Anim != type_Animation)
        {
            m_Current_Anim = type_Animation;
            m_Speed_Attack = speed_Attack;
            On_Ready_Play_Anim();
        }
        else if (m_Speed_Attack != speed_Attack)
        {
            m_Speed_Attack = speed_Attack;
            On_Ready_Play_Anim();
        }

        if (m_Current_Anim == Type_Animation.Attack
            || m_Current_Anim == Type_Animation.Attack2
            || m_Current_Anim == Type_Animation.Attack_SKill_C 
            //xekotoby
            || m_Current_Anim == Type_Animation.Attack_Skill_P
            )
        {
            // Register_Attack_Anim();
            
            
            Debug.Log("m_Current_Anim: "+ m_Current_Anim);
            Set_Active_Anim_Door_Attack(true);
        }
        else
        {
            Set_Active_Anim_Door_Attack(false);
        }
    }

    string m_Name_Anim;

    public void On_Ready_Play_Anim()
    {
        if (m_Anim && m_Anim.skeletonDataAsset != null)
        {
            m_Name_Anim = Animations.Get_Name_Animation(m_Current_Anim, m_Base_Boss.m_Type_Boss);
            m_Anim.AnimationName = m_Name_Anim;
            m_Anim.AnimationState.SetAnimation(0, m_Name_Anim, m_Current_Anim != Type_Animation.Die);

            if (m_Current_Anim == Type_Animation.Attack
                || m_Current_Anim == Type_Animation.Attack2
                || m_Current_Anim == Type_Animation.Attack_SKill_C
                || m_Current_Anim == Type_Animation.Run
                || m_Current_Anim == Type_Animation.Move
                //xekotoby
                || m_Current_Anim== Type_Animation.Attack_Skill_P 
                )
            {
                Debug.LogError("m_Current_Anim: "+ m_Current_Anim);

                
                
                m_Anim.timeScale = My_Utils.Get_Time_Scale_Anim(m_Anim, m_Name_Anim, m_Speed_Attack);
            }
        }
    }

    public void Set_Active_Anim_Door_Attack(bool is_Active)
    {
        if (is_Active)
        {
            if (m_Boss_Movement)
            {
                m_Boss_Movement.Set_Is_Force_Look_At(true);
                m_Boss_Movement.Set_Is_Force_Look_At(My_Utils.Get_Direction_Left_Right(
                    transform.position, m_Base_Boss.Get_Pos_Attack()), true);
            }


            if (!m_Base_Boss.Get_Boss_ADC())
            {
                animAttack.transform.position = m_Base_Boss.Get_Pos_Attack();
                animAttack.gameObject.SetActive(true);
                // m_Anim_Attack.transform.position = m_Base_Boss.Get_Pos_Attack();
                // m_Anim_Attack.gameObject.SetActive(true);
                // m_Anim_Attack.timeScale = My_Utils.Get_Time_Scale_Anim(0.433f, m_Speed_Attack);
                //
                // m_Anim_Attack.Initialize(true);
            }
           
        }
        else
        {
            // if (m_Boss_Movement && m_Base_Boss.Get_Curr_Golem_Attack() == null)
            // {
            //     m_Boss_Movement.Set_Is_Force_Look_At(false);
            //     m_Boss_Movement.Update_Look_At(m_Base_Boss.Get_Pos_Attack().x);
            //     
            //     
            // }
            animAttack.gameObject.SetActive(false);
           // m_Anim_Attack.gameObject.SetActive(false);
        }
    }

    public float Get_Duration_Anim(Type_Animation type_Animation)
    {
        return My_Utils.Get_Duration_Anim(m_Anim,
            Animations.Get_Name_Animation(type_Animation, m_Base_Boss.m_Type_Boss));
    }

    #region ============ Register Attack By Spine ===============

    [SerializeField] bool is_Resgistered;

    public void Register_Attack_Anim()
    {
        m_Anim.state.Event -= OnUserDefinedEvent;
        m_Anim.state.Event += OnUserDefinedEvent;
    }

  
    public void TestBoss()
    {
        Play_Animation(Type_Animation.Attack,1f);
    }

    Vector3 m_Pos_Spawn_Boss; // vi tri boss hoi sinh
    public void OnUserDefinedEvent(Spine.TrackEntry trackEntry, Spine.Event e)
    {
       // Debug.LogError("OnUserDefinedEvent " + e.Data.Name);
        if (e.Data.Name == "attack" && m_Base_Boss && !m_Is_Force_Attack)
        {
            // if (m_Base_Boss.Get_Is_Attacking_Golem())
            // {
            //     if (m_Base_Boss.Get_Boss_ADC())
            //     {
            //         m_Base_Boss.Update_Spawn_Bullet_ADC();
            //     }
            //     else
            //     {
            //         m_Base_Boss.Take_Damage_To_Golem(); 
            //     }
            //    
            // }
            // //updateofjura
            // else
            // {
                if (m_Base_Boss.Get_Boss_ADC())
                {
                    m_Base_Boss.Update_Spawn_Bullet_ADC();
                }
                else
                {
                    m_Base_Boss.Take_Damage_To_Door();
                }
              
           
         //   }
            
        }



     
    }

    #endregion
    
    
    
    
    
  
    
    
    
    
    
    

    #region ============ Update Order Layer Health Bar ===============

    //[Separator("Update Order Layer Health Bar")]
    //[SerializeField] SpriteRenderer m_BG_Health_Bar;
    //[SerializeField] SpriteRenderer m_Progress_Health_Bar;
    Vector3 m_Tmp_Pos;

    //private void Init_Layer_Health_Bar()
    //{
    //    m_BG_Health_Bar.sortingOrder = Boss_Manager.Instance.Get_Layer_Health_Bar_Boss();
    //    m_Progress_Health_Bar.sortingOrder = Boss_Manager.Instance.Get_Layer_Health_Bar_Boss();
    //}

    #endregion

    public void Loop_Update()
    {
        m_Tmp_Pos = m_Anim.transform.localPosition;
        m_Tmp_Pos.z = transform.position.y / 10f;
        m_Anim.transform.localPosition = m_Tmp_Pos;
    }
}