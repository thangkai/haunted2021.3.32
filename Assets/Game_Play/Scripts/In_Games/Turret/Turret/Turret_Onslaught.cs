using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class Turret_Onslaught : Turret_Controller
{
    [SerializeField] bool m_Is_Updated_Star_3;

    [SerializeField] float m_CD_Rocket = 5f;

    public override void Start()
    {
        base.Start();
    }

    public override void InCrease_Level()
    {
        base.InCrease_Level();

        //lv>10
        // active rocket
        // sung cap do 3
        if (!m_Is_Updated_Star_3 && model_Info_Turret_Curr.level >= 6)
        {
            //m_Is_Updated_Star_3 = true;
            Start_Active_Rocket();
        }
    }
    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Set_Turret_Bed_In_Room(this);
    }

    // sung lon hon lv 5 tao ra dan
    public override void Spawn_Bullet()
    {
        Base_Boss base_Boss = m_Target.GetComponent<Base_Boss>();
        GameObject obj_Bullet = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Bullet_Player(), transform);
        obj_Bullet.transform.localPosition = Vector3.zero;
        obj_Bullet.transform.localEulerAngles = m_Look_At_Target.transform.localEulerAngles;
        Debug.LogError("sinh ra dan" + Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Bullet_Player());
        GameObject obj_Bullet2 = null;

        if (model_Info_Turret_Curr.level >= 5)
        {
            obj_Bullet.transform.localPosition = new Vector3(obj_Bullet.transform.localPosition.x + 0.2f,
                 obj_Bullet.transform.localPosition.y,
                  obj_Bullet.transform.localPosition.z
                );

            obj_Bullet2 = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Bullet_Player(), transform);
            obj_Bullet2.transform.localPosition = Vector3.zero;
            obj_Bullet2.transform.localPosition = new Vector3(obj_Bullet2.transform.localPosition.x - 0.2f,
                 obj_Bullet2.transform.localPosition.y,
                  obj_Bullet2.transform.localPosition.z
                );
            obj_Bullet2.transform.localEulerAngles = m_Look_At_Target.transform.localEulerAngles;
        }

        if (data_Player && type_Player != Type_Player.None)
        {
            Bullet_Controller bullet_Controller = obj_Bullet.GetComponent<Bullet_Controller>();
            Bullet_Controller bullet_Controller2 = null;
            if (obj_Bullet2 != null)
            {
                bullet_Controller2 = obj_Bullet2.GetComponent<Bullet_Controller>();
                Debug.LogError("sinh ra dan");
            }
            if (bullet_Controller || bullet_Controller2)
            {
                //int level = data_Player.Get_Level_Turret(transform.GetInstanceID());
                obj_Bullet.transform.SetParent(Recycle_Bin.Instance.transform);
                if (bullet_Controller2 != null)
                {
                    obj_Bullet2.transform.SetParent(Recycle_Bin.Instance.transform);
                }
                damage = Check_Data_Perk_Skill_28();

                m_Type_Bullet_Skill = Type_Bullet_Skill.None;
                Debug.LogError(transform.GetInstanceID() + "aaaaâ");
                bullet_Controller.Set_Target(transform.GetInstanceID(),
                    !data_Player.Get_Is_AI(),
                    m_Type_Character, m_Target, base_Boss.Get_Pos_Take_Damage(), m_Speed_Move, damage, level_Curr, m_Type_Bullet_Skill, Type_Turret.Turret_Bed);

                //updateofjura
                if (bullet_Controller2 != null)
                {
                    bullet_Controller2.Set_Target(transform.GetInstanceID(),
                     !data_Player.Get_Is_AI(),
                     m_Type_Character, m_Target, base_Boss.Get_Pos_Take_Damage(), m_Speed_Move, damage, level_Curr, m_Type_Bullet_Skill, Type_Turret.Turret_Bed);
                }
                //Debug.LogError(bullet_Controller.name);
                //Debug.LogError(bullet_Controller2.name);
                Play_Sound_Shoot();
                StartCoroutine(Thread_Check_Add_Coin_To_ATM(level_Curr));

            }

            else
            {
                Destroy(bullet_Controller.gameObject);
                if (bullet_Controller2 != null)
                {
                    Destroy(bullet_Controller2.gameObject);
                }
            }
        }
    }

  
    public void Start_Active_Rocket()
    {
        DOVirtual.DelayedCall(m_CD_Rocket, () =>
        {

            if (data_Player && m_Target != null && m_Target.GetComponent<Base_Boss>().m_Is_Live)
            {
                Debug.LogError("sinh ra ten lua 3");

                Start_Spawn_Rocket();
                Debug.LogError("sinh ra ten lua 4");


            }
            Start_Active_Rocket();
        }, false);
    }
    //[SerializeField] public Rocket_Controller m_Rocket_Bullet;

    Rocket_Controller m_Rocket_Bullet;
    [SerializeField] Collider2D[] colliders;
    [SerializeField] LayerMask m_Layer_Boss;

    Base_Boss m_Tmp_Boss;
    Tween move_Rocket;
    private void Start_Spawn_Rocket()
    {

        Base_Boss base_Boss = m_Target.GetComponent<Base_Boss>();
        var obj_Poison_Jug = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Rock_Ket(), Recycle_Bin.Instance.transform);
        obj_Poison_Jug.transform.position = transform.position;

        m_Rocket_Bullet = obj_Poison_Jug.GetComponent<Rocket_Controller>();

        if (m_Rocket_Bullet)
        {
            m_Rocket_Bullet.Set_Target(transform.GetInstanceID(),
             !data_Player.Get_Is_AI(),
             m_Type_Character, m_Target, base_Boss.Get_Pos_Take_Damage(), m_Speed_Move, damage, level_Curr, m_Type_Bullet_Skill, Type_Turret.Turret_Bed);

            obj_Poison_Jug.transform.localEulerAngles = m_Look_At_Target.transform.localEulerAngles;
            m_Rocket_Bullet.Set_Is_Allow_Follow_Target(true);





        }
    }
}
// TODO ban  tu sung nhu bth 
