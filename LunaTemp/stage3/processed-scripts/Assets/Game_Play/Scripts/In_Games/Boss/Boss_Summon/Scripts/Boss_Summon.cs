using DG.Tweening;
using UnityEngine;


public class Boss_Summon : Base_Boss
{
    // Start is called before the first frame update

    [SerializeField] private Base_Boss summoned_Boss;
    [SerializeField] private Transform bossFollow;
    [SerializeField] public int index;


    public void SetSummonBossDad(Base_Boss boss)
    {
        summoned_Boss = boss;
    }
    public void SetBossFollow(Transform boss)
    {
        bossFollow = boss;
    }
    


    public Base_Boss GetSummonBossDad()
    {
        return summoned_Boss;
    }

    private float speedFollow = 0.3f;
    private Vector3 velocity = Vector3.zero; // khai báo ở đầu class
    public void SetFollowBossParent()
    {


        if (this.m_Is_Live)
        {
            if (!summoned_Boss.m_Is_Spam_Attack && summoned_Boss.Get_Curr_Animation() == Type_Animation.Run)
            {
               
                //     Debug.LogError("Di chuyen theo cha nao");
                transform.position =transform.position = Vector3.SmoothDamp(transform.position, bossFollow.position, ref velocity,
                        speedFollow * Time.deltaTime);


                m_Boss_Movement.Set_Is_Force_Look_At(summoned_Boss.m_Boss_Movement.m_Curr_Direction, true);
            }
        }
         
      


    }


    public override void On_Ready_Attack_Door(bool is_After_Kill_Golem)
    {
        Set_Active_Anim_Door_Attack(true);
        is_Attacking_Player = true;
        Debug.LogError("On_Ready_Attack_Door ...... ver summon boss" +m_Is_Spam_Attack );

        if (!m_Is_Spam_Attack)
        {
            m_Is_Spam_Attack = true;
            m_Room_Attacking.Set_Status_Attacking(this, false);
            Start_Attack();
            Debug.LogError("On_Ready_Attack_Door ......ver summon boss");
            Cancle_Start_Move_To_Door();

            CancelInvoke(nameof(Reset_Spam_Attack));
            Invoke(nameof(Reset_Spam_Attack), 1f);
        }
        else
        {
            Debug.LogError("On_Ready_Attack_Door ......2 - ver  summon boss 20 s");
            // Cancle_Start_Move_To_Door();
            // if (is_After_Kill_Golem)
            // {
            //     Delay_Start_Move_To_Door(m_Time_Attack_Door - (Time.time - m_Time_Start_Attack_Golem));
            // }
            // else
            // {
            //     Delay_Start_Move_To_Door(m_Time_Attack_Door);
            // }
        }
        
        
        
        
    }

    public override Room_Controller Get_Random_Room_Has_Player()
    {
        return summoned_Boss.m_Room_Attacking;
    }

    public override void Check_Health_To_Move_To_Health_Point()
    {
           if (Game_Controller.Get_Is_End_Level() ) return;
      


        if (!m_Is_Live)
        {
            return;
        }



            //   m_Boss_Attack_Golem.Stop_Attack_Golem(false);
            

          
            //  Debug.LogError("Ve hoi mau di 1");

            Remove_All_Effect_Stun_By_Trap();
            Remove_All_Effect_Stun();

         

            //   Debug.LogError("Ve hoi mau di 2");
            if (m_Room_Attacking && m_Is_Take_Damaged_To_Room && m_Room_Attacking.Get_Bed_Controller())
            {
                Check_Stun_By_Trap();
            }

            Set_Stop_Attacking_Player();
            
            
            
     
          
            Cancle_Start_Move_To_Door();
            // Debug.LogError("Ve hoi mau di 4");
            Set_Active_Collider_Detect_Target(false);

            Play_Animation(Type_Animation.Run);
       

         
        }


    
    public override void Boss_Died(bool m_Need_Spawn_Boss = true)
    {
        CancelInvoke(nameof(Loop_Check_Can_Attack_Door));
      
        if (!m_Is_Live) return;
        m_Is_Live = false;

        m_Boss_Movement.Set_Active_Ammor_Follow(false);
        
       // RemoveSummonedBoss();

        Set_Inactive_Skill_L();
        Remove_All_Effect_Stun_By_Trap();
        Remove_All_Effect_Stun();
        Remove_All_Effect_Stun_By_Item_SP();

        //updateofjura
        Remove_All_Effect_Stun_By_Safeguard();

        m_Pos_Burn_Health.Destroy_All_Children();
        m_Pos_Burn_Health_By_Calida.Destroy_All_Children();
        m_Pos_Stun_By_Skill_2_Eilif.Destroy_All_Children();
        //updateofjura
        m_Pos_Stun_By_Skill_2_Safeguard.Destroy_All_Children();


        Play_Anim_Reward_Boss_Die(!m_Need_Spawn_Boss);
        
        
        RemoveBossSummonThis(this);
        
     
    

        SoundController.Play_Sounds(Type_Sound.Boss_Die);

        if (m_Live_Data_Boss_Die)
        {
            m_Live_Data_Boss_Die.Value = true;
        }

  

        m_Boss_Movement.Set_State_Die();
        Boss_Manager.Instance.Remove_Boss(this);
        Debug.Log("bossDied boss_summon 1");
        Play_Animation(Type_Animation.Die);
        Debug.Log("bossDied boss_summon 2 ");
        Remove_Tween_DelayedCall(m_Tween_Boss_Died);
        Debug.Log("bossDied boss_summon 3 ");
        m_Tween_Boss_Died = DOVirtual.DelayedCall(3f, () =>
        {
            Delay_Destroy();
            Debug.Log("bossDied boss_summon 4 ");
        }, false);

        m_Health_Bar_UI.Update_State_Die(!m_Need_Spawn_Boss);
        Debug.Log("bossDied boss_summon 5 ");
        // DataHomeGame.Instance.SetKillBossIcon(m_Type_Boss);
        // Database.instance.IncreaseKillBossKill();
        // Database.instance.SetBossTypeUnlock(m_Type_Boss);

        Debug.Log("bossDied boss_summon 6 ");
        TypeMissionBoss();
        Debug.Log("bossDied boss_summon 7 ");
        if (m_Health_Bar_UI)
        {
            Debug.Log("bossDied boss_summon 8 ");
            Destroy(m_Health_Bar_UI.gameObject);
        }

        if (m_Txt_Level)
        {
            Debug.Log("bossDied boss_summon 9 "); 
            Destroy(m_Txt_Level.gameObject);
        }
    }

    public override void Set_Stun_Boss()
    {
        if (Game_Controller.Get_Is_End_Level() ) return;
        
        if (!m_Is_Live) return;
        
        
        
        m_Is_Stun = true;
        m_Boss_Movement.Stop_Move();
        Play_Animation(Type_Animation.Idle);

        if (m_Is_Stun_By_Item_SP)
        {
            Remove_All_Effect_Stun_By_Item_SP();

            m_Tmp_Pos_Stun = m_Pos_Stun_By_Item_SP.localPosition;
            m_Tmp_Pos_Stun.x = Mathf.Abs(m_Tmp_Pos_Stun.x) *
                               ((m_Boss_Movement.Get_Direction_Look_At() == Type_Direction.Right) ? 1 : -1);
            m_Pos_Stun_By_Item_SP.localPosition = m_Tmp_Pos_Stun;

            My_Utils.Play_Pref_Effect_No_Destroy(
                Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Stun_By_Item_SP(),
                m_Pos_Stun_By_Item_SP);

            //CancelInvoke(nameof(Reset_Status_Effect_Stun_By_Item_SP));
            //Invoke(nameof(Reset_Status_Effect_Stun_By_Item_SP), m_Time_Stun);
        }

        if (m_Is_Stun_By_Eilif)
        {
            m_Pos_Stun_By_Skill_2_Eilif.Destroy_All_Children();

            var obj_Anim_Cay_Leo = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Day_Leo_Boss(),
                m_Pos_Stun_By_Skill_2_Eilif);
            obj_Anim_Cay_Leo.transform.localPosition = Vector3.zero;
            var anim_Day_Leo = obj_Anim_Cay_Leo.GetComponent<Anim_Day_Leo>();
            if (anim_Day_Leo)
            {
                anim_Day_Leo.Play_Anim();
            }
        }

        //  updateofjura


        if (m_Is_Stun_By_Trap)
        {
            Remove_All_Effect_Stun_By_Trap();

            CancelInvoke(nameof(Reset_Status_Effect_Stun_By_Trap));
            Invoke(nameof(Reset_Status_Effect_Stun_By_Trap), m_Time_Stun);
        }
        else if (m_Is_Stun_By_Safeguard)
        {
            Remove_All_Effect_Stun_By_Safeguard();

            m_Tmp_Pos_Stun = m_Pos_Stun_By_Skill_2_Safeguard.localPosition;
            m_Tmp_Pos_Stun.x = Mathf.Abs(m_Tmp_Pos_Stun.x) *
                               ((m_Boss_Movement.Get_Direction_Look_At() == Type_Direction.Right) ? 1 : -1);
            m_Pos_Stun_By_Skill_2_Safeguard.localPosition = m_Tmp_Pos_Stun;

            My_Utils.Play_Pref_Effect_No_Destroy(
                Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Stun_By_Safeguard(),
                m_Pos_Stun_By_Skill_2_Safeguard);
        }
        else
        {
            Remove_All_Effect_Stun();

            m_Tmp_Pos_Stun = m_Pos_Stun.localPosition;
            m_Tmp_Pos_Stun.x = Mathf.Abs(m_Tmp_Pos_Stun.x) *
                               ((m_Boss_Movement.Get_Direction_Look_At() == Type_Direction.Right) ? 1 : -1);
            m_Pos_Stun.localPosition = m_Tmp_Pos_Stun;

            My_Utils.Play_Pref_Effect_No_Destroy(
                Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Stun(),
                m_Pos_Stun);

            CancelInvoke(nameof(Reset_Status_All_Effect_Stun));
            Invoke(nameof(Reset_Status_All_Effect_Stun), m_Time_Stun);
        }

        Play_Animation(Type_Animation.Idle);
        
        
        
        
    }
    
}