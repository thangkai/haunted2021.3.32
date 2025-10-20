
using UnityEngine;
using DG.Tweening;

public class Bullet_Penetation_Controller : Bullet_Controller
{
    public override void Loop_Fixed_Update()
    {
        if (is_End) return;

     

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
    public override void Set_Target(int id_Turret, bool is_From_Player, Type_Character type_Character, Transform boss, Transform target, float speed, float damage, int level, Type_Bullet_Skill type_Bullet_Skill, Type_Turret type_Turret,float m_Penatation,float time_Dame_Penation)
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
        m_Dame_Penatation = m_Penatation;
        m_Time_Dame_Penetation = time_Dame_Penation;
        Check_Perk_Critical_Damage();
        
        
        
        
        
        if (m_Icon)
        {
            
       
            m_Icon.sprite = Data_In_Game.Instance.Get_Data_Sprite_In_Game().Get_Sprite_Bullel_Pierce(type_Character, level, type_Turret);

            





  
        }

        //m_Icon.sortingLayerID = (int)Type_Sorting_Layer.Default;
        DOVirtual.DelayedCall(0.075f, () =>
        {
            if (m_Icon)
            {
                m_Icon.sortingOrder = 5006;
                //m_Icon.sortingLayerName = Type_Sorting_Layer.Bullet.ToString();
            }

        
        }, false);


    
    }

    

    public override void Take_Damage_To_Boss()
    {
        Base_Boss base_Boss = m_Boss.GetComponent<Base_Boss>();
        if (base_Boss)
        {
                base_Boss.Take_Damage(m_Damage, m_Is_From_Player, true,0f);
                //xekotoby//them dame cho dan
                base_Boss.Change_Penetation(m_Dame_Penatation, 5f);
            
        }
    }

}
