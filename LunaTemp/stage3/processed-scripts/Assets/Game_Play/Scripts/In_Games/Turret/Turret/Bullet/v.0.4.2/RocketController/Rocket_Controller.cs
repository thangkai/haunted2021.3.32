using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class Rocket_Controller : Bullet_Controller
{
    // luong bay len troi

    Vector3 m_Pos_Boss_Attack;



    private Collider2D[] colliders;
    [SerializeField] LayerMask m_Layer_Boss;
    private Base_Boss m_Tmp_Boss;
    private Vector3 m_Tmp_Rotate_Poison_Jug;
    private int m_Tmp_Value_Rotate_Poison_Jug;
    bool m_Is_Allow_Follow_Target;

    public void Set_Is_Allow_Follow_Target(bool is_Allow_Follow_Target)
    {
        m_Is_Allow_Follow_Target = is_Allow_Follow_Target;
    }
    Tween Info_Speed;

    public override void Start()
    {
        base.Start();

        Info_Speed.Kill();
        Info_Speed=   DOVirtual.Float(0, 15, 10, x => {
            m_Speed += x;
        });
    }


    public override void Loop_Fixed_Update()
    {
        if (is_End) return;

        if (!m_Is_Allow_Follow_Target) return;

        if (m_Target)
        {
            if (m_Base_Boss && m_Base_Boss.m_Is_Live)
            {
                transform.position = Vector2.MoveTowards(transform.position, m_Target.position, m_Speed * Time.fixedDeltaTime*0.5f);
               
                
                //transform.DOMove(m_Target.position, 0.04f).SetEase(Ease.InSine);
    

                transform.up = m_Target.position - transform.position;

                m_Tmp_Distance = Vector2.Distance(transform.position, m_Target.position);

                if (m_Tmp_Distance < 0.1f)
                {
                    Take_Damage_Rocket(this.transform);
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

    public void Take_Damage_Rocket(Transform pos)
    {
        colliders = Physics2D.OverlapBoxAll(pos.transform.position, new Vector2(1, 1), 0f, m_Layer_Boss);
        if (colliders != null && colliders.Length > 0)
        {
            for (int i = 0; i < colliders.Length; i++)
            {
                Debug.LogError(colliders.Length);
                m_Tmp_Boss = colliders[i].GetComponent<Base_Boss>();

                if (m_Tmp_Boss)
                {
                    Debug.LogError(i + "aaaaaaaa");
                    // m_Tmp_Boss.Take_Damage_Percent(0.15f);
                    m_Tmp_Boss.Take_Damage(m_Damage, m_Is_From_Player);
                    m_Tmp_Boss.Play_Effect_Take_Damage_By_Rocket(m_Tmp_Boss.transform);
                    Debug.LogError("da co efffect");
                }
            }

        }
    }
    
    public override void Set_Target(int id_Turret, bool is_From_Player, Type_Character type_Character, Transform boss, Transform target, float speed, float damage, int level, Type_Bullet_Skill type_Bullet_Skill, Type_Turret type_Turret,float m_Penatation=0f, float m_Tine_Pene=0f)
    {
        m_Is_From_Player = is_From_Player;
        m_Id_Turret = id_Turret;
        m_Boss = boss;
        m_Target = target;
        m_Speed = speed;
        m_Damage = damage;
        is_End = false;
        m_Type_Bullet_Skill = type_Bullet_Skill;
        m_Base_Boss = m_Boss.GetComponent<Base_Boss>();

        Check_Perk_Critical_Damage();


    
    }
}
