using System.Collections;
using UnityEngine;
using DG.Tweening;
using Haunted;

public class Bullet_Controller_Boss : Base_Update
{
    protected Type_Bullet_Boss m_Type_Bullet_Boss;

    [SerializeField] protected Transform m_Target;
    [SerializeField] protected float m_Speed = 10f;
    [SerializeField] protected float m_Damage;
    [SerializeField] protected bool is_End;
    [SerializeField] protected SpriteRenderer m_Icon;
    [SerializeField] protected float m_Tmp_Distance;
    private Base_Boss m_Boss;
    private Type_Player m_Type_Boss;
    [SerializeField] protected Transform m_Pos_Effect_Fire;
    public virtual void Start()
    {
        m_Icon.sortingOrder = -7;
       
    }

    public void Set_Target(Type_Player type_Boss, Transform target, float speed, float damage, int level,
        Type_Bullet_Boss type_Bullet_Boss , Base_Boss base_Boss)
    {
        m_Type_Boss = type_Boss;// loai boss j
        m_Type_Bullet_Boss = type_Bullet_Boss;// loai dan cua boss nao
        m_Target = target;// muc tieu nao?
        
        m_Speed = speed; // toc danh bao nhieu
        m_Damage = damage;// dame bao nhieu?
        
        is_End = false; // end bullet

        m_Boss = base_Boss;
        DOVirtual.DelayedCall(0.075f, () =>
        {
            if (m_Icon)
            {
                m_Icon.sortingOrder = 5006;
                //m_Icon.sortingLayerName = Type_Sorting_Layer.Bullet.ToString();
            }
            // Change: thay doi vi tri hieu ung dan
        }, false);
    }


    public override void Loop_Fixed_Update()
    {
        if (is_End) return;

        if (m_Target)
        {
            if (m_Boss && m_Boss.m_Is_Live)
            {
                transform.position =Vector2.MoveTowards(transform.position, m_Target.position, 12.5f*m_Speed * Time.fixedDeltaTime);
                // Debug.LogError("BulletController + ");
                transform.up = m_Target.position - transform.position;

                m_Tmp_Distance = Vector2.Distance(transform.position, m_Target.position);
                if (m_Tmp_Distance < 0.1f)
                {
                    Take_Damage_To_Target();
                    Move_End();
                    m_Target = null;
                }
            }
            else
            {
                if (!is_End)
                {
                    Move_End();
                }
            }
        }
        else
        {
            if (!is_End)
            {
                Move_End();
            }
        }
    }


    private void Take_Damage_To_Target()
    {
        Base_Boss base_Boss = m_Boss.GetComponent<Base_Boss>();
        if (base_Boss && m_Target !=null)
        {

            // if (base_Boss.Is_Bool_Golem())
            // {
            //     
            //         base_Boss.Take_Damage_To_Golem(); 
            //     
            //
            // }
         
            
            if (base_Boss.Get_Room_Attacking().Get_Door_Of_Room() != null)
            {
                base_Boss.Take_Damage_To_Door();
            }
            else if(base_Boss.Get_Room_Attacking().Get_Type_Character()==Type_Character.Onslaught)
            {
                if (base_Boss.Get_Room_Attacking().Get_Temp_Door_Of_Room() != null)
                {
                    base_Boss.Take_Damage_To_Door();
                }
            }
            else  if (base_Boss.Get_Room_Attacking().Get_Bed_Controller() != null)
            {
                base_Boss.Start_Move_Attack_Player();
            }
            else
            {
                
                Debug.LogError("TIm nha ms di");
            }
           

            // dame init vao door
        }
       
    }
    
    private void Move_End()
    {
        Debug.Log("=====> Move_End");
        // text
        SpawnDamagePopups.Instance.DameDone((int)m_Damage, transform.localPosition, false);
        is_End = true;
        Destroy(gameObject);
    }

    
    
    #region pool
   
    private float _displayDuaration;
    private Spawn_Pool_Bullet_Boss_Controller  _poolManager;
    public void Initialize(float displayDuaration, Spawn_Pool_Bullet_Boss_Controller poolManager)
    {
        _poolManager = poolManager;
        _displayDuaration = displayDuaration;
        
    }
    public void Display(  )
    {

        StartCoroutine(ReturnDamageLabelToPool(_displayDuaration));

    }
    private IEnumerator ReturnDamageLabelToPool(float displayLength)
    {
        yield return new WaitForSeconds(displayLength);
        _poolManager.ReturnDamageLabelToPool(this);
    }
    
    #endregion
}