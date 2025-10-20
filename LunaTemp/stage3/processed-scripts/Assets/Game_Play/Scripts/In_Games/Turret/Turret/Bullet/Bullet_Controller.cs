using System.Collections;
using UnityEngine;
using DG.Tweening;
using Haunted;

public class Bullet_Controller : Base_Update
{
    [SerializeField] protected Transform m_Boss;
    [SerializeField] protected Transform m_Target;
    [SerializeField] protected float m_Speed = 10f;
    [SerializeField] protected float m_Damage;
    [SerializeField] protected float m_Dame_Penatation;
    [SerializeField] protected float m_Time_Dame_Penetation;
    [SerializeField] protected SpriteRenderer m_Icon;
    [SerializeField] protected Transform m_Pos_Effect_Fire;
    protected int m_Id_Turret;

    protected  bool m_Is_From_Player;
    protected bool is_End;
    protected Type_Bullet_Skill m_Type_Bullet_Skill;

    public virtual void Start()
    {
        m_Icon.sortingOrder = -7;
    }  

    public virtual void Set_Target(int id_Turret, bool is_From_Player,
        Type_Character type_Character, Transform boss,
        Transform target, float speed, float damage, int level, Type_Bullet_Skill type_Bullet_Skill , Type_Turret type_Turret , float m_Penetation=0f, float  time_Dame_Peneration=0f)
    {
        m_Is_From_Player = is_From_Player;
        m_Id_Turret = id_Turret;
        m_Boss = boss;
        m_Target = target;
        m_Speed = speed;
        m_Damage = damage;
        m_Dame_Penatation = m_Penetation;
        m_Time_Dame_Penetation = time_Dame_Peneration;
        is_End = false;
        m_Type_Bullet_Skill = type_Bullet_Skill;
        m_Base_Boss = m_Boss.GetComponent<Base_Boss>();

        Check_Perk_Critical_Damage();

        if (m_Icon)
        {
            
       
                m_Icon.sprite = Data_In_Game.Instance.Get_Data_Sprite_In_Game().Get_Sprite_Bullet_Player(type_Character, level, type_Turret);



            if (level == 6)
            {
                m_Icon.transform.localScale = new Vector3(1.5f, 1.5f, 1.5f);
            }
            else if (level == 7)
            {
                m_Icon.transform.localScale = new Vector3(1.65f, 1.65f, 1.65f);
            }
            else if (level == 8)
            {
                m_Icon.transform.localScale = new Vector3(1.85f, 1.85f, 1.85f);
            }
            else if (level == 9)
            {
                m_Icon.transform.localScale = new Vector3(2f, 2f, 2f);
            }
            else
            {
                m_Icon.transform.localScale = new Vector3(1, 1, 1);
            }
        }

        //m_Icon.sortingLayerID = (int)Type_Sorting_Layer.Default;
        DOVirtual.DelayedCall(0.075f, () =>
        {
            if (m_Icon)
            {
                m_Icon.sortingOrder = 5006;
                //m_Icon.sortingLayerName = Type_Sorting_Layer.Bullet.ToString();
            }

            if (m_Type_Bullet_Skill == Type_Bullet_Skill.Calida)
            {
                int index_Level = level;
                if (index_Level < 0) index_Level = 0;
                if (index_Level >= m_Pos_Effect_Fire.childCount) index_Level = m_Pos_Effect_Fire.childCount - 1;
                var obj_Fire = Instantiate(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Fire(), m_Pos_Effect_Fire.GetChild(index_Level));
                obj_Fire.transform.localPosition = Vector3.zero;
                obj_Fire.transform.localEulerAngles = Vector3.zero;
                obj_Fire.transform.localScale = new Vector3(1, 1, 1);
            }
        }, false);
        
    }

    protected float m_Tmp_Distance;
    protected Base_Boss m_Base_Boss;
    private bool is_Backward = true; // Trạng thái lùi đạn
    private float backwardTime = 0.2f; // Thời gian lùi
    private float backwardSpeed = 2.0f; // Tốc độ lùi
    private float elapsedTime = 0f; // Bộ đếm thời gian
    public override void Loop_Fixed_Update()
    
 //   private void FixedUpdate()
    {
        if (is_End) return;

        if (m_Target == null || m_Target.gameObject == null)
        {
            if (!is_End)
            {
                Move_End();
            }
            return;
        }
       // Debug.LogError("Loop_Fixed_Update " +m_Target  + "-----"+m_Target.position+"--- "+ transform.position );
        if (m_Target &&   m_Target.gameObject != null)
        {
            if (m_Base_Boss && m_Base_Boss.m_Is_Live)
            {
                
              
                    transform.position = Vector2.MoveTowards(transform.position, m_Target.position, m_Speed * Time.fixedDeltaTime);
                    // Debug.LogError("BulletController + ");
                    transform.up = m_Target.position - transform.position;

                    m_Tmp_Distance = Vector2.Distance(transform.position, m_Target.position);
                    if (m_Tmp_Distance < 0.1f)
                    {
                        Take_Damage_To_Boss();
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

    public virtual void Take_Damage_To_Boss()
    {
        Base_Boss base_Boss = m_Boss.GetComponent<Base_Boss>();
     //   Debug.LogError(m_Boss + " take dame to poss");
        if (base_Boss)
        {
            if (m_Type_Bullet_Skill == Type_Bullet_Skill.Zeus)
            {
                base_Boss.Take_Damage_With_Effect(m_Is_From_Player, m_Damage * 2, m_Type_Bullet_Skill);
            }
            else if (m_Type_Bullet_Skill == Type_Bullet_Skill.Witch)
            {
                base_Boss.Take_Damage_With_Effect(m_Is_From_Player, m_Damage, m_Type_Bullet_Skill, m_Id_Turret);
            }
            else if (m_Type_Bullet_Skill == Type_Bullet_Skill.Calida)
            {
                if (Random.Range(0, 100) < 50 && !base_Boss.Get_Is_Moving())
                {
                    Recycle_Bin.Instance.Play_Effext_Exploresion_Fire(transform.position, m_Damage);
                }

                base_Boss.Take_Damage_With_Effect(m_Is_From_Player, m_Damage, m_Type_Bullet_Skill, m_Id_Turret);
            }
            else
            {
                base_Boss.Take_Damage(m_Damage, m_Is_From_Player, true,m_Dame_Penatation);
                //xekotoby//them dame cho dan
            }
        }
    }

    public virtual void Move_End()
    {
        if (SpawnDamagePopups.Instance != null && transform != null)
        {
            SpawnDamagePopups.Instance.DameDone((int)m_Damage, transform.localPosition, false);

        }
        is_End = true;
        if (gameObject != null)
        {
            Destroy(gameObject);
        }
     
    }

    int max_Range;
    public void Check_Perk_Critical_Damage()
    {
        if (m_Icon)
        {
            m_Icon.color = Data_In_Game.Instance.Get_Color_Boss_Normal();
            max_Range = 0;
            if (DataSaved.Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem.Skill_5_Critical_Damage_20_Per))
            {
                max_Range = 20;
            }
            else if (DataSaved.Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem.Skill_2_Critical_Damage_10_Per))
            {
                max_Range = 10;
            }
            if (max_Range > 0)
            {
                if (Random.Range(1, 99) < max_Range)
                {
                    m_Icon.color = Data_In_Game.Instance.Get_Color_Boss_Skill_C();
                    m_Damage *= 2f;
                }
            }
        }
    } 
  
    #region pool
   
    private float _displayDuaration;
    private Spawn_Pool_Bullet_Controller  _poolManager;
    public void Initialize(float displayDuaration, Spawn_Pool_Bullet_Controller poolManager)
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
    //lay 20- 30 
    // 1 -5 
    
    #endregion
}
