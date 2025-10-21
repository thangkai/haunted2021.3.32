using System;
using UnityEngine;

public class Collider_Boss_Detect_Turret : MonoBehaviour
{
    bool m_Is_Start;
    bool m_Is_Updated_Data;
    bool m_Is_Ready_Detect_Turret;
    [SerializeField] bool m_Is_Lock_Target;
    [SerializeField] Boss_Movement m_Boss_Movement;
    [SerializeField] Base_Turret m_Turret_Attacking;
    [SerializeField] CircleCollider2D m_Collider;

    private void Start()
    {
        m_Is_Start = true;
        On_Ready_Update_Data();
    }

    public void Set_Detect_Turret(bool is_Detect_Turret)
    {
        m_Is_Ready_Detect_Turret = is_Detect_Turret;
        m_Is_Updated_Data = false;
        if (m_Is_Start)
        {
            On_Ready_Update_Data();
        }
    }

    private void OnDisable()
    {
        CancelInvoke(nameof(Loop_Check_Null_Turret_Attacking));
        CancelInvoke(nameof(Loop_Check_Stun));
        CancelInvoke(nameof(Continue_Move));
    }

    private void On_Ready_Update_Data()
    {
        if (m_Is_Updated_Data) return;
        m_Is_Updated_Data = true;

        if (m_Is_Ready_Detect_Turret)
        {
            if (m_Collider)
            {
                m_Collider.enabled = true;
            }
            m_Is_Lock_Target = false;
        }
        else
        {
            if (m_Collider)
            {
                m_Collider.enabled = false;
            }
            m_Is_Lock_Target = false;
            CancelInvoke(nameof(Continue_Move));
        }
    }

    Vector3 m_Pos_Attack;
    private void Loop_Check_Null_Turret_Attacking()
    {
        if (m_Turret_Attacking == null && !m_Boss_Movement.Get_Base_Boss().Get_Is_Stunning())
        {
            //Debug.Log(transform.GetInstanceID() + "====> Collider_Boss_Detect_Turret : Loop_Check_Null_Turret_Attacking");
            CancelInvoke(nameof(Continue_Move));
            Continue_Move();
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (!m_Is_Lock_Target)
        {
            m_Turret_Attacking = collision.GetComponent<Base_Turret>();
            if (m_Turret_Attacking != null && m_Turret_Attacking.Get_Type_Turret() != Type_Turret.Ground)
            {
                if (m_Turret_Attacking.Get_Type_Turret() == Type_Turret.Door && m_Boss_Movement.Get_Is_Moving_Attack_Character())
                {
                    return;
                }

                m_Is_Lock_Target = true;
                m_Collider.enabled = false;
                m_Boss_Movement.Stop_Move();
                m_Boss_Movement.Play_Animation(Type_Animation.Idle);


                if (m_Turret_Attacking.Get_Type_Turret() == Type_Turret.Bed)
                {
                    m_Pos_Attack = m_Turret_Attacking.GetComponent<Bed_Controller>().Get_Pos_Character();
                }
                else
                {
                    m_Pos_Attack = m_Turret_Attacking.transform.position;
                }

                CancelInvoke(nameof(Loop_Check_Stun));
                InvokeRepeating(nameof(Loop_Check_Stun), 0, 0.125f);
            }
        }
    }

    private void Loop_Check_Stun()
    {
        if (m_Boss_Movement.Get_Base_Boss().Get_Is_Stunning())
        {
            m_Boss_Movement.Stop_Move();
            CancelInvoke(nameof(Continue_Move));
            m_Boss_Movement.Play_Animation(Type_Animation.Idle);
        }
        else
        {
            On_Ready_Kill();
        }
    }

    private void On_Ready_Kill()
    {
        if (m_Boss_Movement.Get_Base_Boss().Get_Is_Stunning()) return;
        CancelInvoke(nameof(Loop_Check_Stun));

        //Debug.Log(transform.GetInstanceID() + "====> Collider_Boss_Detect_Turret : On_Ready_Kill");
        m_Boss_Movement.Stop_Move();
        m_Boss_Movement.Play_Animation(Type_Animation.Idle);

        if (m_Turret_Attacking && m_Turret_Attacking.type_Turret != Type_Turret.Temp_Door)
        {
            m_Boss_Movement.Play_Animation(Type_Animation.Attack, m_Pos_Attack, true);
        }

        if (m_Turret_Attacking.Get_Type_Turret() == Type_Turret.Bed)
        {
            m_Turret_Attacking.Play_Sound_Character_Die();
        }

        CancelInvoke(nameof(Continue_Move));
        Invoke(nameof(Continue_Move), 1f);

        CancelInvoke(nameof(Loop_Check_Null_Turret_Attacking));
        InvokeRepeating(nameof(Loop_Check_Null_Turret_Attacking), 1f, 0.125f);
    }

    private void Continue_Move()
    {
        CancelInvoke(nameof(Loop_Check_Stun));
        if (m_Boss_Movement.Get_Base_Boss().Get_Is_Stunning())
        {
            InvokeRepeating(nameof(Loop_Check_Stun), 0, 0.125f);
            return;
        }
        //Debug.Log(transform.GetInstanceID() + "====> Collider_Boss_Detect_Turret : Continue_Move");

       
        
        if (m_Boss_Movement)
        {
            m_Boss_Movement.Reset_Force_Look_At();
            m_Boss_Movement.Play_Animation(Type_Animation.Run);
            m_Boss_Movement.Continue_Move();
        }
        m_Is_Lock_Target = false;
        m_Collider.enabled = true;
        if (m_Turret_Attacking &&
            m_Turret_Attacking.type_Turret != Type_Turret.Door &&
            m_Turret_Attacking.type_Turret != Type_Turret.Temp_Door
            )
        {




            m_Turret_Attacking.On_Died();
        }

    }
}
