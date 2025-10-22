using System.Collections.Generic;
using UnityEngine;
using TMPro;

using DG.Tweening;
using System;
using System.Linq;

using Spine.Unity;

public class Base_Boss : MonoBehaviour
{
    [SerializeField] public Type_Bullet_Boss type_Bullet_Boss;
    [SerializeField] private bool m_Is_Boss_ADC;
    [SerializeField] private float m_Distance_ADC_Start_Attack = 5f;
    [SerializeField] public Model_Anim_Boss_Character m_model_Anim_Boss_Character;
    [SerializeField] Bool_Global_Variable m_Live_Data_Loop_Time;
    [SerializeField] Bool_Global_Variable m_Live_Data_Item_SP_Stun;

    [SerializeField] Bool_Global_Variable m_Live_Data_Skill_2_Eilif;

    //updateofjura
    [SerializeField] Bool_Global_Variable m_Live_Data_Skill_2_Safeguard;
    [SerializeField] Bool_Global_Variable m_Live_TakeDame_Penetation;

    [SerializeField] bool m_Is_Tutorials;
    bool m_Is_Stun_By_Item_SP_Stun;
    bool m_Is_Stun_By_Skill_2_Eilif;

    [SerializeField] public Transform m_Model;

    //updateofjura
    bool m_Is_Stun_By_Skill_2_Safeguard;

    bool m_Is_Penetation;


    public Type_Player m_Type_Boss;
    public Type_Level m_Type_Level;
    [SerializeField] GameObject m_Obj_Owner;
    public bool m_Is_Live;
    public int level_Curr;
    public int curr_Exp;
    [SerializeField] Boss_Animation m_Boss_Animation;
    [SerializeField] internal TextMeshProUGUI m_Txt_Level;
    [SerializeField] internal Health_Bar_UI m_Health_Bar_UI;
    [SerializeField] Transform m_Pos_Health_Bar;
    [SerializeField] Transform m_Pos_Txt_Level;
    [SerializeField] internal Exp_Bar_UI m_Exp_Bar_UI;
    [SerializeField] internal Boss_Movement m_Boss_Movement;
    [SerializeField] Collider_Boss_Detect_Turret m_Collider_Detect_Target;
    [SerializeField] Transform m_Pos_Reward_Anim_When_Die;
    [SerializeField] Skill_Boss_Controller m_Skill_Boss_Controller;


    [SerializeField]
    Transform m_Pos_Effect_Skill_A;

    [SerializeField] Transform m_Pos_Effect_Skill_N;

    [SerializeField] MeshRenderer m_Mesh_Anim;

    //private Material m_Mat_Boss;
    [SerializeField] ParticleSystem m_Effect_Skill_I;
    [SerializeField] ParticleSystem m_Effect_Skill_M;
    [SerializeField] internal Transform m_Pos_Stun;
    [SerializeField] Transform m_Pos_Holy_Water;
    [SerializeField] Transform m_Pos_Trap;
    [SerializeField] Transform m_Pos_Take_Damage;
    [SerializeField] Transform m_Pos_Take_Damage_Look_At;
    [SerializeField] internal Transform m_Pos_Burn_Health;
    [SerializeField] internal Transform m_Pos_Burn_Health_By_Calida;
    [SerializeField] internal Transform m_Pos_Stun_By_Item_SP;
    [SerializeField] internal Transform m_Pos_Stun_By_Skill_2_Eilif;

    [SerializeField] ParticleSystem m_Effect_Take_Damage;

    //updateofjura
    [SerializeField] internal Transform m_Pos_Stun_By_Skill_2_Safeguard;

    [SerializeField] private Transform m_Target_Pos;


    //Type_Skill_Boss m_Skill_Test = Type_Skill_Boss.Skill_K;


    [SerializeField]
    internal bool is_Attacking_Player;

    [SerializeField] bool m_Is_Moving_To_Health_Point;
    [SerializeField] float m_Real_Damage_Test;
    public float max_Health;
    public float attack_Speed;
    public float damage;
    public float max_Exp;
    public float curr_attack_Speed;

    float m_Time_Attack_Door;

    //public Data_Boss data_Boss;
    [SerializeField] internal Bool_Global_Variable m_Live_Data_Boss_Die;
    public Model_Info_Boss model_Info_Boss_Curr;
    [SerializeField] List<Type_Skill_Boss> m_Pool_Random_Skill = new List<Type_Skill_Boss>();
    [SerializeField] internal bool m_Is_Attacking_Player;
    [SerializeField] internal bool m_Is_Force_Attack_Player;

    float m_Tmp_Time_Stun_by_Trap;
    [SerializeField] float m_Tmp_distance_To_Room;
    bool m_Tmp_Is_Killed_Play;

    Door_Controller m_Door_Controller;
    Temp_Door m_Temp_Door;

    /// <summary>
    /// ////////////////////////new
    /// </summary>
    [SerializeField] protected int m_Amor; // giap cua boss

    [SerializeField] protected Boss_ADC boss_ADC;
    [SerializeField] private Transform m_Target_PosADC;






    private void Start()
    {
        m_Index_Check_Turn_Force_AI_ATK = 1;
        m_Count_Room_Has_Player = 0;
        m_Is_Tutorials = Check_Condition_Tut();
        Init_Turn_Force_Has_Player(Level_Controller.Instance.Get_Count_All_Room_Has_Player());
        Debug.LogError("ConfigMissionUpgrade");
        //m_Mat_Boss = m_Mesh_Anim.material;

        //m_Mat_Boss.Update_Color_Materal(m_Mesh_Anim, Color.white);

        Init_Data(level_Curr < m_Target_Level);
        Debug.LogError("ConfigMissionUpgrade 16");
        if (level_Curr < m_Target_Level)
        {
            m_Is_Increasing_Level_Auto = true;
            Increase_Level_Auto();
        }
        Debug.LogError("ConfigMissionUpgrade 1");
        m_Effect_Skill_I.PLay_Effect(false);

        SoundController.Play_Sounds(Type_Sound.Boss_Appear);
        Debug.LogError("ConfigMissionUpgrade 2 ");
        m_Boss_Movement.Set_Active_Ammor_Follow(false);

        Debug.LogError("ConfigMissionUpgrade 3");
        m_Live_Data_Boss_Die = Boss_Manager.Instance.Get_Data_Boss(m_Type_Boss).Get_Live_Data_Boss_Die();

        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            m_Time_Attack_Door = 12;
        }
        else
        {
            m_Time_Attack_Door = 20;
        }
        Debug.LogError("ConfigMissionUpgrade 4 ");

        m_Live_Data_Loop_Time = Data_In_Game.Instance.Get_Live_Data_Loop_Time();
        if (m_Live_Data_Loop_Time)
        {
            m_Live_Data_Loop_Time.OnValueChanged.AddListener(Loop_Time);
        }
        //
        // m_Live_Data_Item_SP_Stun = Data_In_Game.Instance.Get_Live_Data_Item_SP_Stun();
        // if (m_Live_Data_Item_SP_Stun)
        // {
        //     m_Is_Stun_By_Item_SP_Stun = m_Live_Data_Item_SP_Stun.Value;
        //     m_Live_Data_Item_SP_Stun.OnValueChanged.AddListener(Listener_Live_Data_Item_SP_Stun);
        //
        //     Check_Active_Stun_By_Item_SP();
        // }
        //
        // m_Live_Data_Skill_2_Eilif = Data_In_Game.Instance.Get_Live_Data_Skill_2_Eilif();
        // if (m_Live_Data_Skill_2_Eilif)
        // {
        //     m_Is_Stun_By_Skill_2_Eilif = m_Live_Data_Skill_2_Eilif.Value;
        //     m_Live_Data_Skill_2_Eilif.OnValueChanged.AddListener(Listener_Live_Data_Skill_2_Eilif);
        //
        //     Check_Active_Stun_By_Item_SP();
        // }
        //
        // //updateofjura
        // m_Live_Data_Skill_2_Safeguard = Data_In_Game.Instance.Get_Live_Data_Skill_2_Safeguard();
        // if (m_Live_Data_Skill_2_Safeguard)
        // {
        //     m_Is_Stun_By_Skill_2_Safeguard = m_Live_Data_Skill_2_Safeguard.Value;
        //     m_Live_Data_Skill_2_Safeguard.OnValueChanged.AddListener(Listener_Live_Data_Skill_2_Safeguard);
        //     Check_Active_Stun_By_Item_SP();
        // }


        m_Is_Penetation = false;
        //xekotoby
        //To
        //updateofjura
        // m_Live_TakeDame_Penetation = Data_In_Game.Instance.Get_Live_Data_Damagetation();
        // if (m_Live_TakeDame_Penetation)
        // {
        //     m_Is_Penetation = m_Live_TakeDame_Penetation.Value;
        //     m_Live_TakeDame_Penetation.OnValueChanged.AddListener(Listener_Live_Data_Dame_Penetation);
        //     Check_Active_Penetation_By_Bullet();
        // }
        //


        Check_Init_Health_Bar_UI();


        ConfigMissionUpgrade();

        //var obj_Anim = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Spine_Character(), m_Model);


        //set anim
        Debug.LogError("ConfigMissionUpgrade" + m_Type_Boss);
        m_model_Anim_Boss_Character.Set_Data_Boss(m_Type_Boss, () =>
        {
            m_Boss_Animation.Register_Attack_Anim();
            if (m_Boss_Animation)
            {
                m_Boss_Animation.On_Ready_Play_Anim();
            }
        });
    }



    public Transform Get_Model_Boss()
    {
        return m_Model;
    }

    public Vector3 Get_Pos_Golem_ADC()
    {
        return m_Target_PosADC.position;
    }

    public Transform Get_Pos_Golem_ADC_Transform()
    {
        return m_Target_PosADC;
    }


    public Boss_Movement Get_Boss_Movement()
    {
        if (m_Boss_Movement != null)
        {
            return m_Boss_Movement;
        }

        return null;
    }

    [SerializeField] private Transform mPosBulletAdc;

    public Vector3 GetPosBulletAdc()
    {
        return mPosBulletAdc.position;
    }

    public void Set_Data_Anim(SkeletonAnimation skeletonAnimation, MeshRenderer meshRenderer, Transform take_Dame,
        ParticleSystem m_Fx, Transform posBulletAdc)
    {
        m_Mesh_Anim = meshRenderer;
        m_Boss_Movement.Set_Anim(skeletonAnimation);
        m_Boss_Movement.Set_Mesh(meshRenderer);
        m_Boss_Animation.Set_Anim(skeletonAnimation);
        if (take_Dame) m_Pos_Take_Damage = take_Dame;
        if (m_Fx) m_Effect_Take_Damage = m_Fx;
        if (Get_Boss_ADC()) mPosBulletAdc = posBulletAdc;
        else
        {
            mPosBulletAdc = null;
        }
    }

    public virtual void Set_Data_Anim(SkeletonAnimation skeletonAnimation, MeshRenderer meshRenderer,
        Transform take_Dame, ParticleSystem m_Fx
        , List<ParticleSystem> m_All_Effect_Mui_Mau, List<ParticleSystemRenderer> m_All_Effect_Mui_Mau_2,
        Transform posBulletAdc)
    {
        Set_Data_Anim(skeletonAnimation, meshRenderer, take_Dame, m_Fx, posBulletAdc);
    }

    internal void Check_Init_Health_Bar_UI()
    {
        if (m_Is_Live && m_Health_Bar_UI == null)
        {
            var obj_Health_Bar = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Health_Bar_UI(),
                Health_Bar_Canvas.Instance.Get_Parent_Progress_Bar());
            obj_Health_Bar.transform.position = m_Pos_Health_Bar.position;
            m_Health_Bar_UI = obj_Health_Bar.GetComponent<Health_Bar_UI>();
            m_Exp_Bar_UI = obj_Health_Bar.GetComponent<Exp_Bar_UI>();

            var obj_Txt_Level = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Txt_Level(),
                Health_Bar_Canvas.Instance.Get_Parent_Txt_Level());
            obj_Txt_Level.transform.position = m_Pos_Txt_Level.position;
            m_Health_Bar_UI.Set_Obj_Level(obj_Txt_Level);
            m_Txt_Level = obj_Txt_Level.GetComponent<TextMeshProUGUI>();
        }
    }

    public bool Get_Is_Moving()
    {
        return m_Boss_Movement.Get_Is_Moving();
    }

    public Type_Player Get_Type_Boss()
    {
        return m_Type_Boss;
    }

    public void Update_Pos_Health_Bar()
    {
        Check_Init_Health_Bar_UI();
        if (m_Health_Bar_UI)
        {
            m_Health_Bar_UI.transform.position = m_Pos_Health_Bar.position;
        }

        if (m_Txt_Level)
        {
            m_Txt_Level.transform.position = m_Pos_Txt_Level.position;
        }
    }

    private void Listener_Live_Data_Item_SP_Stun()
    {
        m_Is_Stun_By_Item_SP_Stun = m_Live_Data_Item_SP_Stun.Value;

        Check_Active_Stun_By_Item_SP();
    }

    private void Listener_Live_Data_Skill_2_Eilif()
    {
        m_Is_Stun_By_Skill_2_Eilif = m_Live_Data_Skill_2_Eilif.Value;

        if (m_Is_Stun_By_Skill_2_Eilif)
        {
            My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Holy_Water(),
                m_Pos_Holy_Water);
            Take_Damage_Percent(0.1f);
        }

        Check_Active_Stun_By_Skill_2_Eilif();
    }

    //updateofjura
    private void Listener_Live_Data_Skill_2_Safeguard()
    {
        m_Is_Stun_By_Skill_2_Safeguard = m_Live_Data_Skill_2_Safeguard.Value;


        Check_Active_Stun_By_Skill_2_Safeguard();
    }

    private void Listener_Live_Data_Dame_Penetation()
    {
        m_Is_Penetation = m_Live_TakeDame_Penetation.Value;

        Check_Active_Penetation_By_Bullet();
    }


    private void OnDestroy()
    {
        if (m_Live_Data_Loop_Time)
        {
            m_Live_Data_Loop_Time.OnValueChanged.RemoveListener(Loop_Time);
        }

        if (m_Live_Data_Item_SP_Stun)
        {
            m_Live_Data_Item_SP_Stun.OnValueChanged.RemoveListener(Listener_Live_Data_Item_SP_Stun);
        }

        if (m_Live_Data_Skill_2_Eilif)
        {
            m_Live_Data_Skill_2_Eilif.OnValueChanged.RemoveListener(Listener_Live_Data_Skill_2_Eilif);
        }

        if (m_Live_Data_Skill_2_Safeguard)
        {
            m_Live_Data_Skill_2_Safeguard.OnValueChanged.RemoveListener(Listener_Live_Data_Skill_2_Safeguard);
        }


        // if (m_Live_TakeDame_Penetation)
        // {
        //     m_Live_TakeDame_Penetation.OnValueChanged.RemoveListener(Listener_Live_Data_Dame_Penetation);
        // }
    }

    bool m_Lock_Use_Skill;

    private void Lock_Use_Skill()
    {
        m_Lock_Use_Skill = true;
        CancelInvoke(nameof(Reset_Lock_Use_Skill));
        Invoke(nameof(Reset_Lock_Use_Skill), 3f);
    }

    private void Reset_Lock_Use_Skill()
    {
        m_Lock_Use_Skill = false;
    }

    private void Loop_Time()
    {
        try
        {

            try
            {

                Loop_Check_Update_Skill_J();

            }
            catch (Exception e)
            {
                Debug.LogError("Error Loop_Time  Loop_Check_Update_Skill_J : " + e.Message);
            }


            try
            {

                Loop_Check_Burn_Health();

            }
            catch (Exception e)
            {
                Debug.LogError("Error Loop_Time  Loop_Check_Burn_Health : " + e.Message);
            }


            try
            {

                Loop_Check_Burn_Health_By_Calida();

            }
            catch (Exception e)
            {
                Debug.LogError("Error Loop_Time   Loop_Check_Burn_Health_By_Calida : " + e.Message);
            }



            if (m_Room_Attacking && m_Room_Attacking.Get_Bed_Controller() == null)
            {
                m_Room_Attacking = null;
                Cancle_Start_Move_To_Door();
                Start_Move_To_Door();
            }
        }
        catch (Exception e)
        {
            Debug.LogError("Error Loop_Time : " + e.Message);
        }
    }

    public virtual void Update_Sorting_Order(int order_Boss)
    {
    }

    public Type_Direction Get_Curr_Direction()
    {
        return m_Boss_Movement.Get_Curr_Direction();
    }

    public bool Check_Tut_Use_Item()
    {
        return m_Health_Bar_UI.Get_Percent_Curr_Health() > 0.3f;
    }

    public bool Get_Is_Stunning()
    {
        return m_Is_Stun;
    }

    public bool Get_Is_Live()
    {
        return m_Is_Live;
    }

    #region ===================== Animation =====================

    public Type_Animation Get_Curr_Animation()
    {
        return m_Boss_Animation.Get_Curr_Animation();
    }

    public void Play_Animation_Force_Attack(float speed_Anim = 1f)
    {
        if (m_Is_Active_Skill_C && !m_Is_CD_Skill_C)
        {
            m_Boss_Animation.Play_Animation(Type_Animation.Attack_SKill_C, speed_Anim, true);
        }
        else if (m_Is_Active_Skill_P && !m_Is_CD_Skill_P)
        {
            m_Boss_Animation.Play_Animation(Type_Animation.Attack_Skill_P, speed_Anim * 2f, true);
        }
        else
        {
            m_Boss_Animation.Play_Animation(Type_Animation.Attack, speed_Anim, true);
        }
    }


    public void Play_Animation(Type_Animation type_Animation, float speed_Anim = 1f)
    {
        if (type_Animation != Type_Animation.Attack && type_Animation != Type_Animation.Attack2)
        {
            CancelInvoke(nameof(Start_Attack));



            m_Is_Lock_Anim_Attack = true;

            DOVirtual.DelayedCall(0.01f, () => { Reset_Status_Ready_Anim_Attack(); }, false);
        }
        else if (m_Is_Lock_Anim_Attack)
        {
            return;
        }

        if (m_Boss_Animation)
        {
            if (type_Animation == Type_Animation.Die)
            {
                m_Boss_Animation.Play_Animation(type_Animation, speed_Anim);
            }
            else if (m_Is_Live)
            {
                if (type_Animation == Type_Animation.Run)
                {
                    speed_Anim /= 2;
                    if (m_Type_Boss == Type_Player.Bat_Summoned_Boss_Of_Dracula ||
                        m_Type_Boss == Type_Player.Amored_Goblin_Mini_Boss ||
                        m_Type_Boss == Type_Player.Crazy_Bugbear_Mini_Boss ||
                        m_Type_Boss == Type_Player.Bugbear_Butler_Mini_Boss)
                    {
                        type_Animation = Type_Animation.Move;
                    }
                    //if (!RootManager.Check_Is_AB_SKin() && m_Type_Boss == Type_Player.Boss_Baital_Vampire)
                    //{
                    //    type_Animation = Type_Animation.Move;
                    //}
                }

                if (type_Animation == Type_Animation.Attack && m_Is_Active_Skill_C && !m_Is_CD_Skill_C)
                {
                    type_Animation = Type_Animation.Attack_SKill_C;
                }

                if (type_Animation == Type_Animation.Attack && m_Is_Active_Skill_P && !m_Is_CD_Skill_P)
                {
                    type_Animation = Type_Animation.Attack_Skill_P;
                }

                m_Boss_Animation.Play_Animation(type_Animation, speed_Anim);
            }
        }
    }

    bool m_Is_Lock_Anim_Attack;

    private void Reset_Status_Ready_Anim_Attack()
    {
        m_Is_Lock_Anim_Attack = false;
    }

    public void Set_Active_Anim_Door_Attack(bool is_Active)
    {
        if (m_Boss_Animation)
        {
            m_Boss_Animation.Set_Active_Anim_Door_Attack(is_Active);
        }
    }

    #region =============== Play_Anim_Reward_Boss_Die ===============

    bool m_Is_Last_Boss;
    GameObject m_Pref_Rewards;

    public void Play_Anim_Reward_Boss_Die(bool is_Force_Die)
    {
        if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player &&
            DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        {
            m_Is_Last_Boss = Game_Controller.Instance.Get_Sum_Boss_In_Map() <= 1;
            m_Pref_Rewards = Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Layout_Anim_Boss_Die();

            if (m_Is_Last_Boss)
            {
                if (!is_Force_Die)
                {
                    Create_Reward_When_Die(m_Pref_Rewards, Vector3.zero, Type_Money.Money, 20);
                }
            }
            else
            {
                if (!is_Force_Die)
                {
                    Create_Reward_When_Die(m_Pref_Rewards, Vector3.zero, Type_Money.Money, 20);
                }
            }
        }
    }

    private void Create_Reward_When_Die(GameObject pref, [Bridge.Ref] Vector3 pos, Type_Money type_Money, int amount)
    {
        var obj_Blood = Instantiate(pref, m_Pos_Reward_Anim_When_Die);
        obj_Blood.transform.localPosition = pos;
        obj_Blood.transform.SetParent(Recycle_Bin.Instance.transform);

        Layout_Anim_Boss_Die layout_Anim_Boss_Die = obj_Blood.GetComponent<Layout_Anim_Boss_Die>();
        if (layout_Anim_Boss_Die)
        {
            layout_Anim_Boss_Die.Set_Data(type_Money, amount);
        }

        if (type_Money == Type_Money.Coin)
        {
            DataSaved.Increase_Coin(amount, false);
        }
        else if (type_Money == Type_Money.Money)
        {
            DataSaved.Increase_Money(amount, false);
        }
    }

    #endregion

    #endregion

    public Transform Get_Pos_Take_Damage()
    {
        return m_Pos_Take_Damage;
    }

    public Transform Get_Pos_Take_Damage_Look_At()
    {
        return m_Pos_Take_Damage_Look_At;
    }

    int m_Target_Level;

    public void Set_Level(int level)
    {
        m_Target_Level = level;
    }

    bool m_Is_Increasing_Level_Auto;

    private void Increase_Level_Auto()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (level_Curr < m_Target_Level)
        {
            m_Is_Increasing_Level_Auto = true;
            InCrease_Level(true);

            DOVirtual.DelayedCall(0.2f, () => { Increase_Level_Auto(); }, false);
        }
        else
        {
            m_Is_Increasing_Level_Auto = false;

            Boss_Manager.Instance.Show_Alerts_Vampire_Level_Up(model_Info_Boss_Curr.name_Boss, level_Curr);

            DOVirtual.DelayedCall(UnityEngine.Random.Range(0.1f, 0.3f), () => { Start_Move_To_Door(); }, false);
        }
    }

    public int Get_Count_Room_Has_Player()
    {
        return m_Count_Room_Has_Player;
    }

    public void Increase_Count_Room_Has_Player()
    {
        m_Count_Room_Has_Player += 1;
    }

    public void Reset_Count_Room_Has_Player()
    {
        m_Count_Room_Has_Player = 0;
    }

    private void OnDisable()
    {
        Set_Stop_Attacking_Player();
        Stop_Using_Skill_A();
        Stop_Using_Skill_K();

        CancelInvoke(nameof(Set_Stun_Boss));
        CancelInvoke(nameof(Reset_Status_Stun));
        CancelInvoke(nameof(Kill_Player_Done));
        CancelInvoke(nameof(Loop_Check_Can_Attack_Door));

        Remove_Tween_DelayedCall(m_Tween_CD_SKill_M);
        Remove_Tween_DelayedCall(m_Tween_Boss_Died);
        Remove_Tween_DelayedCall(m_Tween_Start_Move_To_Door);
        Remove_Tween_DelayedCall(m_Tween_Start_Restore_Health);
        Remove_Tween_DelayedCall(m_Tween_Start_CD_Skill_A);
        Remove_Tween_DelayedCall(m_Tween_Set_Skill_A_Is_Ready);
        Remove_Tween_DelayedCall(m_Tween_Set_Skill_B_Is_Ready);
        Remove_Tween_DelayedCall(m_Tween_Set_Skill_C_Is_Ready);
        Remove_Tween_DelayedCall(m_Tween_Increase_Health_Skill_D);
        Remove_Tween_DelayedCall(m_Tween_Set_Skill_J_Is_Ready);
        Remove_Tween_DelayedCall(m_Tween_Start_CD_Skill_K);
        Remove_Tween_DelayedCall(m_Tween_Set_Skill_K_Is_Ready);
        Remove_Tween_DelayedCall(m_Tween_CD_SKill_M);
        Remove_Tween_DelayedCall(m_Tween_Restore_Health_By_Skill_M);
    }

    public void Force_Boss_Die()
    {
        Boss_Died(false);
    }

    public void Force_Attack_PLayer()
    {
        m_Is_Force_Attack_Player = true;
        Cancle_Start_Move_To_Door();
        Start_Move_To_Door();
    }

    public void Force_Stop_Move()
    {
        if (m_Is_Live)
        {
            m_Boss_Movement.Set_State_Die();
            Play_Animation(Type_Animation.Idle);
        }
    }

    internal Tween m_Tween_Boss_Died;


    #region Process Summon

    public List<Boss_Summon> listBossSummon = new List<Boss_Summon>();
    public List<int> listBossSummonIndex = new List<int>();
    public List<int> listBossSummonIndexHave = new List<int> { 0, 1, 2 };
    public void AddBossSummon(Boss_Summon bossSummon, int index)
    {
        listBossSummon.Add(bossSummon);
        bossSummon.index = index;

        listBossSummonIndex.Add(index);
        listBossSummonIndexHave.Remove(index);
    }

    public void RemoveAllBossSummon()
    {
        foreach (Boss_Summon summon in listBossSummon)
        {

            summon.Boss_Died();
            // listBossSummon.Remove(summon);
            // listBossSummonIndex.Remove(summon.index);
            // listBossSummonIndexHave.Add(summon.index);




        }




    }


    public void RemoveBossSummonThis(Boss_Summon bossSummon)
    {
        if (bossSummon == null)
        {
            return;
        }

        for (int i = listBossSummon.Count - 1; i >= 0; i--)
        {
            if (listBossSummon[i] && bossSummon.transform.GetInstanceID() == listBossSummon[i].transform.GetInstanceID())
            {
                listBossSummon.RemoveAt(i);
                listBossSummonIndex.Remove(bossSummon.index);
                listBossSummonIndexHave.Add(bossSummon.index);
            }
        }
        //summon.Boss_Died();
    }


    public void RemoveSummonedBoss()
    {
        if (listBossSummon.Count > 0)
        {
            RemoveAllBossSummon();
        }
    }

    #endregion

    public virtual void Boss_Died(bool m_Need_Spawn_Boss = true)
    {
        CancelInvoke(nameof(Loop_Check_Can_Attack_Door));

        if (!m_Is_Live) return;
        m_Is_Live = false;
        Debug.Log("bossDied boss base 1");

        m_Boss_Movement.Set_Active_Ammor_Follow(false);
        RemoveSummonedBoss();//remove all boss hoi sinh

        Debug.Log("bossDied boss base 2 ");
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
        Boss_Manager.Instance.Remove_Boss(this);
        Debug.Log("bossDied boss base 3 ");
        if (m_Need_Spawn_Boss)
        {
            DataSaved.Increase_Sum_Vampire_Died();


            // tru boss chinh khoi map
            Game_Controller.Instance.Decrease_Boss_In_Map();


            // boss adc nao

            Debug.Log("bossDied boss base 5");


        }

        SoundController.Play_Sounds(Type_Sound.Boss_Die);
        Debug.Log("bossDied boss base 6");
        if (m_Live_Data_Boss_Die)
        {
            m_Live_Data_Boss_Die.Value = true;
        }

        Debug.Log("bossDied boss base 7");
        if (m_Need_Spawn_Boss)
        {
            if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story ||
                DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
            {
                Game_Controller.Instance.Spawn_Boss_Now();
            }
            else
            {
            }
        }

        Debug.Log("bossDied boss base 8");
        m_Boss_Movement.Set_State_Die();
        Play_Animation(Type_Animation.Die);

        Debug.Log("bossDied boss base 9 ");
        Remove_Tween_DelayedCall(m_Tween_Boss_Died);
        m_Tween_Boss_Died = DOVirtual.DelayedCall(3f, () => { Delay_Destroy(); }, false);


        Debug.Log("bossDied boss base 10");
        m_Health_Bar_UI.Update_State_Die(!m_Need_Spawn_Boss);
        DataHomeGame.Instance.SetKillBossIcon(m_Type_Boss);
        Database.instance.IncreaseKillBossKill();
        Database.instance.SetBossTypeUnlock(m_Type_Boss);


        TypeMissionBoss();
        if (m_Health_Bar_UI)
        {
            Destroy(m_Health_Bar_UI.gameObject);
        }

        if (m_Txt_Level)
        {
            Destroy(m_Txt_Level.gameObject);
        }
    }

    internal void Delay_Destroy()
    {
        Destroy(gameObject);
    }


    public virtual void Init_Data(bool Is_Increasing_Level_Auto)
    {
        m_Is_Live = true;
        level_Curr = 0;
        curr_Exp = 0;
        m_Is_Moving_To_Health_Point = false;
        m_Is_Spam_Attack = false;
        m_Is_Force_Attack_Player = Game_Controller.Instance.Get_Is_Timing_AB_Vampire_Attack();

        Debug.LogError("ConfigMissionUpgrade 12");
        Update_Data_Boss(false);
        Debug.LogError("ConfigMissionUpgrade 13");
        if (!Is_Increasing_Level_Auto)
        {
            Start_Move_To_Door();
        }
        Debug.LogError("ConfigMissionUpgrade 16");
        if (m_Health_Bar_UI)
        {
            m_Health_Bar_UI.gameObject.SetActive(true);
            m_Health_Bar_UI.Increae_Max_Health(max_Health);
        }

        // Init Pool Skill
        m_Pool_Random_Skill.Clear();
        m_Pool_Random_Skill.AddRange(model_Info_Boss_Curr.m_Pool_Skill);

    }

    bool m_Is_Init_Skill_Hard_4_Minutes;
    float m_Curr_Percent_Health;

    public virtual void InCrease_Level(bool from_Auto = false)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        level_Curr += 1;

        Game_Controller.Instance.Set_Max_Level_Boss(level_Curr);

        Update_Data_Boss(true);

        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            if (level_Curr > 4)
            {
                Increase_Skill();
            }
            else
            {
                if (!m_Is_Init_Skill_Hard_4_Minutes)
                {
                    m_Is_Init_Skill_Hard_4_Minutes = true;
                    Increase_Skill();
                }
            }
        }
        else
        {
            Increase_Skill();
        }


        if (m_Health_Bar_UI)
        {
            m_Curr_Percent_Health = m_Health_Bar_UI.Get_Percent_Curr_Health();
            m_Health_Bar_UI.Increae_Max_Health(max_Health, false);
            m_Health_Bar_UI.Set_Percent_Curr_Health(m_Curr_Percent_Health);
            //m_Health_Bar.Increase_Curr_Health(Get_Percent_Health_By_Do_Kho(m_Type_Level));
        }

        Boss_Manager.Instance.Set_Max_Level_Boss(model_Info_Boss_Curr.name_Boss, level_Curr, from_Auto);
    }

    private float Get_Percent_Health_By_Do_Kho(Type_Level type_Level)
    {
        switch (type_Level)
        {
            case Type_Level.Easy: return 0.25f;

            case Type_Level.Normal: return 0.5f;

            case Type_Level.Hard: return 0.5f;
        }

        return 0;
    }

    internal Data_Info_Boss_Manager m_Data_Info_Boss_Manager;

    protected virtual void Update_Data_Boss(bool is_Increase_Level)
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (is_Increase_Level)
        {
            damage *= 2f;
            max_Health *= 1.9f;

            Debug.LogError(("Update_Data_Boss"));
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                if (level_Curr > 4)
                {
                    max_Exp += 5;
                }
            }
            else
            {
                max_Exp += 15;
            }
        }
        else
        {
            Debug.LogError(("Update_Data_Boss 1 3 "));
            m_Data_Info_Boss_Manager = Data_In_Game.Instance.Get_Data_Info_Boss_Manager();
            model_Info_Boss_Curr = m_Data_Info_Boss_Manager.Get_Data_Info_Boss(m_Type_Boss, m_Type_Level);

            attack_Speed = model_Info_Boss_Curr.speed_Attack;

            max_Health = model_Info_Boss_Curr.stat_Boss.HP;
            damage = model_Info_Boss_Curr.stat_Boss.damage;




            max_Exp = model_Info_Boss_Curr.XP;
            m_Amor = model_Info_Boss_Curr.stat_Boss.Amor; //xekotoby

            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                max_Exp = 10;
            }
            Debug.LogError(("Update_Data_Boss 1 2"));

            //damage = 100f;
            //max_Health = 25f;
            //max_Exp = 2f;
        }

        Check_Init_Health_Bar_UI();
        if (m_Txt_Level)
        {
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                m_Txt_Level.Set_Text("Lv " + (level_Curr - 3));
            }
            else
            {
                m_Txt_Level.Set_Text("Lv " + (level_Curr + 1));
            }
        }

        if (m_Exp_Bar_UI == null)
        {
            Debug.LogError("null exp Ui");
        }
        else
        {
            m_Exp_Bar_UI.Set_New_Level(max_Exp);
            m_Exp_Bar_UI.Set_Exp(curr_Exp);
        }

    }

    public void Increase_Exp()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story ||
            DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {
            curr_Exp += 1;
        }

        if (curr_Exp >= max_Exp)
        {
            // Increase Level
            curr_Exp = 0;
            InCrease_Level();
            if (m_Exp_Bar_UI != null)
            {
                m_Exp_Bar_UI.Set_New_Level(max_Exp);
            }

        }

        if (m_Exp_Bar_UI != null)
        {
            m_Exp_Bar_UI.Set_Exp(curr_Exp);
        }


    }

    #region =============== Attack ===============

    bool m_Is_Take_Damaging;

    public bool Get_Is_Take_Damaging()
    {
        return m_Is_Take_Damaging;
    }

    private Tween m_Penetation_Tween;
    public float m_Dame_Penetation;

    public void Change_Penetation(float a, float b)
    {
        m_Penetation_Tween.Do_Kill();
        m_Is_Penetation = true;
        m_Dame_Penetation = a;

        m_Penetation_Tween = DOVirtual.DelayedCall(b, () =>
        {
            m_Dame_Penetation = 0f;
            m_Is_Penetation = false;

            m_Penetation_Tween.Kill();
        });
    }

    private void Reset_Take_Damaging()
    {
        m_Is_Take_Damaging = false;
    }

    public void Take_Damage(float damage, bool is_From_Player, bool is_Play_Sound = true, float penetation = 0f, bool isFromPet = false, int rank = 1)
    {
        if (!m_Is_Live) return;
        if (Game_Controller.Get_Is_End_Level() || m_Is_Increasing_Level_Auto)
        {
            m_Is_Take_Damaging = false;
            return;
        }

        if (m_Health_Bar_UI)
        {
            if (is_Play_Sound)
            {
                m_Effect_Take_Damage.Play_Effect();
                SoundController.Play_Sounds(Type_Sound.Boss_Receive_Damage);
            }


            float damageDuce;

            if (m_Is_Penetation == true)
            {
                damageDuce = CaculatorDameHasPenetation(damage, m_Dame_Penetation, m_Amor);
                m_Boss_Movement.Set_Active_Ammor_Follow(true);
            }
            else
            {
                m_Boss_Movement.Set_Active_Ammor_Follow(false);
                damageDuce = CaculatorDameHasPenetation(damage, 0f, m_Amor);
            }

            ////////new/////////////////
            m_Health_Bar_UI.Take_Damage(damageDuce, () =>
            {
                Boss_Died();

                m_Is_Take_Damaging = true;

                CancelInvoke(nameof(Reset_Take_Damaging));
                Invoke(nameof(Reset_Take_Damaging), 3f);
            });

            if (m_Is_Live)
            {
                if (!this.GetComponent<Boss_Summon>())
                {
                    Check_Health_To_Move_To_Health_Point();
                }

                Check_Skill_M();

                m_Is_Take_Damaging = true;

                CancelInvoke(nameof(Reset_Take_Damaging));
                Invoke(nameof(Reset_Take_Damaging), 2f);
            }
        }
    }


    public float
        CaculatorDameHasPenetation(float dame, float percent_Penetation, float amorBoss) //dame basic+  % xuyen giap
    {
        float dameReduce = amorBoss * (1f - percent_Penetation) * 0.01f /
                           (1f + (amorBoss * (1f - percent_Penetation) * 0.01f));

        float DameTaken = 1f - (float)Math.Round(dameReduce, 4);

        return dame * DameTaken;
        //    float duceRounded = (float)Math.Round(duce, 4); //lam tron 4 chu so
    }

    public void Take_Damage_With_Effect(bool is_From_Player, float damage, Type_Bullet_Skill type_Bullet_Skill,
        int id_Turret = 0)
    {
        if (!m_Is_Live) return;
        if (Game_Controller.Get_Is_End_Level() || m_Is_Increasing_Level_Auto) return;

        if (m_Health_Bar_UI)
        {
            // Todo: Apply effect here
            if (type_Bullet_Skill == Type_Bullet_Skill.Zeus)
            {
                if (UnityEngine.Random.Range(0, 999) % 2 == 0)
                {
                    My_Utils.Play_Pref_Effect_In_Parent(
                        Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Lightning(),
                        transform);
                }
            }
            else if (type_Bullet_Skill == Type_Bullet_Skill.Witch)
            {
                if (m_All_Turret_Burn_Health.ContainsKey(id_Turret))
                {
                    m_All_Turret_Burn_Health[id_Turret].m_Time_Burn = 5;
                    m_All_Turret_Burn_Health[id_Turret].m_Damage = damage * 0.1f;
                }
                else
                {
                    Model_Burn_Health model_Burn_Health = new Model_Burn_Health();
                    model_Burn_Health.m_Time_Burn = 5;
                    model_Burn_Health.m_Damage = damage * 0.1f;

                    m_All_Turret_Burn_Health.Add(id_Turret, model_Burn_Health);
                }
            }
            else if (type_Bullet_Skill == Type_Bullet_Skill.Calida)
            {
                if (m_All_Turret_Burn_Health_By_Calida.ContainsKey(id_Turret))
                {
                    m_All_Turret_Burn_Health_By_Calida[id_Turret].m_Time_Burn = 5;
                    m_All_Turret_Burn_Health_By_Calida[id_Turret].m_Damage = m_Health_Bar_UI.Get_Max_Health() * 0.01f;
                }
                else
                {
                    Model_Burn_Health model_Burn_Health = new Model_Burn_Health();
                    model_Burn_Health.m_Time_Burn = 5;
                    model_Burn_Health.m_Damage = damage * 0.1f;

                    m_All_Turret_Burn_Health_By_Calida.Add(id_Turret, model_Burn_Health);
                }
            }

            Take_Damage(damage, is_From_Player);
        }
    }

    #region ======== Burn health ============

    Dictionary<int, Model_Burn_Health> m_All_Turret_Burn_Health = new Dictionary<int, Model_Burn_Health>();

    private void Loop_Check_Burn_Health()
    {
        if (m_All_Turret_Burn_Health.Count > 0)
        {
            // Turn on effect burn
            if (m_Pos_Burn_Health.childCount <= 0)
            {
                My_Utils.Play_Pref_Effect_No_Destroy(
                    Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Burn_Health(),
                    m_Pos_Burn_Health);
            }

            List<int> keysToRemove = new List<int>(); // dùng để lưu các key cần xoá

            foreach (var item in m_All_Turret_Burn_Health.Keys.ToList()) // dùng .ToList() để tránh lỗi
            {
                try
                {
                    if (m_All_Turret_Burn_Health.TryGetValue(item, out var tmp_Model_Burn_Health))
                    {
                        if (tmp_Model_Burn_Health != null)
                        {
                            if (tmp_Model_Burn_Health.m_Time_Burn >= 0)
                            {
                                tmp_Model_Burn_Health.m_Time_Burn -= 1;
                                Take_Damage(tmp_Model_Burn_Health.m_Damage, true, false);
                            }
                            else
                            {
                                keysToRemove.Add(item); // đánh dấu để xoá sau
                            }
                        }
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("Error Loop_Check_Burn_Health : " + e.Message);
                }
            }

            // Thực hiện xoá sau vòng lặp
            foreach (var key in keysToRemove)
            {
                m_All_Turret_Burn_Health.Remove(key);
            }
        }
        else
        {
            // Turn off effect burn
            if (m_Time_Burn_Health_By_Skill_2_Witch <= 0)
            {
                Remove_Effect_Burn_Health();
            }
        }

        // Clamp time
        if (m_Time_Burn_Health_By_Skill_2_Witch < 0)
        {
            m_Time_Burn_Health_By_Skill_2_Witch = 0;
        }

        if (m_Time_Burn_Health_By_Skill_2_Witch > 0)
        {
            // Turn on effect burn
            if (m_Pos_Burn_Health.childCount <= 0)
            {
                My_Utils.Play_Pref_Effect_No_Destroy(
                    Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Burn_Health(),
                    m_Pos_Burn_Health);
            }

            m_Time_Burn_Health_By_Skill_2_Witch -= 1;
            Take_Damage_Percent(0.02f);
        }
        else
        {
            // Turn off if everything is done
            if (m_All_Turret_Burn_Health.Count <= 0)
            {
                Remove_Effect_Burn_Health();
            }
        }
    }


    private void Remove_Effect_Burn_Health()
    {
        m_Pos_Burn_Health.Destroy_All_Children();
    }

    float m_Time_Burn_Health_By_Skill_2_Witch;

    public void Burn_Health_By_Skill_2_Witch()
    {
        m_Time_Burn_Health_By_Skill_2_Witch = 5;
    }

    #endregion

    #region ======== Burn health By Calida ============

    Dictionary<int, Model_Burn_Health> m_All_Turret_Burn_Health_By_Calida = new Dictionary<int, Model_Burn_Health>();
    float m_Time_Burn_Health_By_Skill_2_Calida;

    public void Start_Burn_Health_By_Skill_2_Calida()
    {
        m_Time_Burn_Health_By_Skill_2_Calida = 5;
    }

    private void Loop_Check_Burn_Health_By_Calida()
    {
        if (m_All_Turret_Burn_Health_By_Calida.Count > 0)
        {
            // Turn on effect burn
            if (m_Pos_Burn_Health_By_Calida.childCount <= 0)
            {
                My_Utils.Play_Pref_Effect_No_Destroy(
                    Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Burn_Door(),
                    m_Pos_Burn_Health_By_Calida);
            }

            List<int> keysToRemove = new List<int>();
            foreach (var item in m_All_Turret_Burn_Health_By_Calida.Keys.ToList()) // tránh lỗi sửa collection khi lặp
            {
                try
                {
                    if (m_All_Turret_Burn_Health_By_Calida.TryGetValue(item, out var tmp_Model_Burn_Health_Calida))
                    {
                        if (tmp_Model_Burn_Health_Calida != null)
                        {
                            if (tmp_Model_Burn_Health_Calida.m_Time_Burn >= 0)
                            {
                                tmp_Model_Burn_Health_Calida.m_Time_Burn -= 1;
                                Take_Damage(tmp_Model_Burn_Health_Calida.m_Damage, true, false);
                            }
                            else
                            {
                                keysToRemove.Add(item); // đánh dấu xoá sau
                            }
                        }
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("Error Loop_Check_Burn_Health_By_Calida : " + e.Message);
                }
            }

            // Xoá sau khi duyệt
            foreach (var key in keysToRemove)
            {
                m_All_Turret_Burn_Health_By_Calida.Remove(key);
            }
        }
        else
        {
            // Turn off effect burn
            if (m_Time_Burn_Health_By_Skill_2_Calida <= 0)
            {
                Remove_Effect_Burn_Health_By_Calida();
            }
        }

        if (m_Time_Burn_Health_By_Skill_2_Calida < 0)
        {
            m_Time_Burn_Health_By_Skill_2_Calida = 0;
        }

        if (m_Time_Burn_Health_By_Skill_2_Calida > 0)
        {
            // Turn on effect burn
            if (m_Pos_Burn_Health_By_Calida.childCount <= 0)
            {
                My_Utils.Play_Pref_Effect_No_Destroy(
                    Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Burn_Door(),
                    m_Pos_Burn_Health_By_Calida);
            }

            m_Time_Burn_Health_By_Skill_2_Calida -= 1;
            Take_Damage_Percent(0.02f);
        }
        else
        {
            if (m_All_Turret_Burn_Health_By_Calida.Count <= 0)
            {
                Remove_Effect_Burn_Health_By_Calida();
            }
        }
    }


    private void Remove_Effect_Burn_Health_By_Calida()
    {
        m_Pos_Burn_Health_By_Calida.Destroy_All_Children();
    }

    #endregion

    public void Play_Effect_Take_Damage_By_Thien_Thach()
    {
        My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Holy_Water(), m_Pos_Holy_Water);
    }

    public void Play_Effect_Take_Damage_By_Rocket(Transform pos)
    {
        My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Rocket(), m_Pos_Holy_Water);
    }

    public void Take_Damage_Percent(float percent)
    {
        if (!m_Is_Live) return;
        if (Game_Controller.Get_Is_End_Level()) return;

        if (m_Health_Bar_UI)
        {
            m_Health_Bar_UI.Take_Damage(max_Health * percent, () => { Boss_Died(); });

            if (m_Is_Live)
            {
                Check_Health_To_Move_To_Health_Point();
                Check_Skill_M();
            }
        }
    }

    bool m_Is_Receive_Damage_By_Holy_Water;

    private void Check_Player_Has_Holy_Water()
    {
        if (m_Room_Attacking != null && m_Room_Attacking.Check_Has_Holy_Water_Conditioner() &&
            !m_Is_Receive_Damage_By_Holy_Water)
        {
            // Gây sát thương tương đương 10% Hp tối đa của vampire khi nó còn dưới 25%
            if (m_Health_Bar_UI.Get_Percent_Curr_Health() < 0.25f)
            {
                m_Is_Receive_Damage_By_Holy_Water = true;
                float m_Damage_Holy_Water = 0.1f;
                if (DataSaved.Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem.Skill_3_Holy_Water_15_Per))
                {
                    m_Damage_Holy_Water = 0.15f;
                }

                if (m_Room_Attacking && m_Room_Attacking.Get_Type_Character() == Type_Character.Priest &&
                    DataSaved.Get_Is_Unlock_Skill_2(m_Room_Attacking.Get_Type_Character()))
                {
                    m_Damage_Holy_Water += 0.05f;
                }

                Take_Damage_Percent(m_Damage_Holy_Water);
                My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Holy_Water(),
                    m_Pos_Holy_Water);
            }
        }
    }

    internal bool m_Is_Spam_Attack;

    internal void Reset_Spam_Attack()
    {
        m_Is_Spam_Attack = false;
    }

    private bool Check_Condition_Tut()
    {
        return !DataSaved.Get_Is_Complete_Tutorial() &&
               DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story &&
               DataSaved.Get_Current_Loading_Level() == 0;
    }

    [SerializeField] bool m_Is_Play_Anim_Skill;

    public void Start_Attack()
    {
        // Debug.LogError("---------------------------------------------------------");
        Debug.Log("Start_Attack ......1 " + m_Is_Lock_Anim_Attack + " ====" + this.gameObject.name);
        if (Game_Controller.Get_Is_End_Level())
        {
            CancelInvoke(nameof(Start_Attack));

            return;
        }

        // Debug.Log("Start_Attack ......2" + m_Is_Lock_Anim_Attack);
        if (m_Is_Lock_Anim_Attack || m_Is_Stun)
        {
            //  Debug.Log("Start_Attack ......3");
            return;
        }





        Debug.Log("Start_Attack ......4" + m_Room_Attacking);
        //Debug.Log("....... Play_Animation = Start_Attack ------ " + Time.time);
        if (m_Room_Attacking)
        {
            Debug.Log("Room attacking......");
            if (m_Room_Attacking.Get_Bed_Controller() == null)
            {
                Debug.Log("Room attacking......1");
                Start_Move_To_Door();
                return;
            }



            if (listBossSummon.Count > 0)
            {
                foreach (var bossChild in listBossSummon)
                {
                    if (bossChild.m_Is_Live)
                    {
                        bossChild.Start_Attack();
                    }

                }
            }

            // Check has Door
            if (m_Room_Attacking.Get_Door_Of_Room() || m_Room_Attacking.Get_Temp_Door_Of_Room())
            {
                if (m_Is_Tutorials &&
                    m_Room_Attacking.Get_Door_Of_Room().Check_Tut_Move_Other_Door())
                {
                    Cancle_Start_Move_To_Door();
                    CancelInvoke(nameof(Start_Attack));

                    // CancelInvoke(nameof(boss_ADC.Fight_Bullet));// ngung san xuat dan

                    Start_Move_To_Door();
                    Debug.LogError("Room attacking......2");
                    return;
                }

                //skilllllllll
                Debug.Log("Room attacking......3");
                m_Is_Play_Anim_Skill = false;
                // Check Has Skill I, se co hoi mau
                if (m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_I))
                {
                    Set_Active_Skill_I();
                }

                if (!m_Is_Stun && m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_A) && !m_Lock_Use_Skill)
                {
                    Lock_Use_Skill();
                    Set_Active_Skill_A();
                }

                if (!m_Is_Stun &&
                    m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_K) && !m_Lock_Use_Skill)
                {
                    Lock_Use_Skill();
                    Set_Active_Skill_K();
                }

                if (!m_Is_Stun && m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_N) && !m_Lock_Use_Skill)
                {
                    Lock_Use_Skill();
                    Set_Active_Skill_N();
                }


                //skill O------------------------------------------------------  
                if (!m_Is_Stun && m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_O) && !m_Lock_Use_Skill)
                {
                    Lock_Use_Skill();
                    Set_Active_Skill_O();
                }


                //skill P------------------------------------------------------
                if (!m_Is_Stun && m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_P) && !m_Lock_Use_Skill)
                {
                    Lock_Use_Skill();
                    Set_Active_Skill_P();
                }


                curr_attack_Speed = Get_Speed_Attack();

                // if (m_Is_Attacking_Golem &&
                //     m_Boss_Movement && m_Boss_Attack_Golem && m_Boss_Attack_Golem.Get_Curr_Golem() &&
                //     m_Boss_Attack_Golem.Get_Curr_Golem().Get_Is_Live())
                // {
                //     m_Boss_Movement.Update_Look_At(m_Boss_Attack_Golem.Get_Curr_Golem().transform.position.x);
                //     m_Pos_Attack = m_Boss_Attack_Golem.Get_Curr_Golem().Get_Pos_Apply_Damage();
                // }
                // else
                // {
                //   Debug.LogError("Room attacking......4");
                if (m_Boss_Movement)
                {
                    if (m_Room_Attacking.Get_Door_Of_Room() != null)
                    {
                        m_Boss_Movement.Update_Look_At(m_Room_Attacking.Get_Door_Of_Room().transform.position.x);
                    }
                    else
                    {
                        m_Boss_Movement.Update_Look_At(
                            m_Room_Attacking.Get_Temp_Door_Of_Room().transform.position.x);
                    }
                }

                if (m_Room_Attacking.Get_Door_Of_Room() != null)
                {
                    m_Pos_Attack = m_Room_Attacking.Get_Door_Of_Room().transform.position;
                }
                else
                {
                    m_Pos_Attack = m_Room_Attacking.Get_Temp_Door_Of_Room().transform.position;
                }
                //  }

                m_Is_Take_Damaged_To_Room = true;

                SoundController.Play_Sounds(Type_Sound.Boss_Attack);
                Debug.Log("Room attacking......5");
                if (m_Is_Play_Anim_Skill)
                {
                    Play_Animation(Type_Animation.Attack2, curr_attack_Speed);
                }
                else
                {
                    Play_Animation(Type_Animation.Attack, curr_attack_Speed);
                }

                CancelInvoke(nameof(Start_Attack));
                Invoke(nameof(Start_Attack), curr_attack_Speed);
                Debug.Log("Room attacking......6");
                // Increase EXP
                Increase_Exp();

                if (m_Health_Bar_UI && m_Is_Live &&
                    DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge)
                {
                    m_Health_Bar_UI.Set_Force_Show_Progress(m_Is_Take_Damaging);
                }
            }
            else
            {
                // TODO: Move va Tan cong cac cong trinh khac va giet Player
                Start_Move_Attack_Player();

                Debug.Log("===> move va tan cong cac cong trinh khac va giet player");
            }

            Debug.Log("Room attacking......8");

            if (m_Boss_Movement != null)
            {
                m_Boss_Movement.Simulated_Physic_Off();
            }
        }
    }

    public void Take_Damage_To_Door()
    {
        if (m_Is_Play_Anim_Skill)
        {
            m_Is_Play_Anim_Skill = false;
            On_Ready_Play_Skill_N();
        }

        // Tan cong Door
        if (m_Room_Attacking)
        {
            m_Door_Controller = m_Room_Attacking.Get_Door_Of_Room();
            if (m_Door_Controller)
            {
                m_Door_Controller.Take_Damage(Get_Damage_Attack(), this);
            }
        }

        if (m_Room_Attacking)
        {
            m_Temp_Door = m_Room_Attacking.Get_Temp_Door_Of_Room();
            if (m_Temp_Door)
            {
                m_Temp_Door.Take_Damage_To_Temp_Door(Get_Damage_Attack());
            }
        }
    }


    float _Damage;


    private float Get_Damage_Attack()
    {
        _Damage = damage;


        if (!m_Is_Stun && !m_Is_CD_Skill_C && m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_C) &&
            !m_Lock_Use_Skill)
        {
            if (!m_Is_Active_Skill_C)
            {
                m_Is_Active_Skill_C = true;
                m_Is_CD_Skill_C = false;

                Lock_Use_Skill();
                Show_Alert(Type_Alert.Vampire_Use_Skill_C);

                if (m_Time_Active_Skill_C <= 0)
                {
                    if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
                    {
                        m_Time_Active_Skill_C = m_Model_Info_Skill_C.time_Exist / 2f;
                    }
                    else
                    {
                        m_Time_Active_Skill_C = m_Model_Info_Skill_C.time_Exist;
                    }
                }

                CancelInvoke(nameof(Start_CD_Skill_C));
                Invoke(nameof(Start_CD_Skill_C), m_Time_Active_Skill_C);

                Check_Can_Active_Skill();
            }

            _Damage *= 2;
        }

        m_Real_Damage_Test = _Damage;
        return _Damage;
    }

    private void Show_Alert(Type_Alert type_Alert)
    {
        UI_Alert.Show_Alerts(model_Info_Boss_Curr.name_Boss, type_Alert);

        if (type_Alert == Type_Alert.Vampire_Use_Skill_A && m_Pos_Effect_Skill_A)
        {
            Remove_All_Child(m_Pos_Effect_Skill_A);

            My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Toa_Sang(),
                m_Pos_Effect_Skill_A);
        }
        else if (type_Alert == Type_Alert.Vampire_Use_Skill_C)
        {
            //m_Mat_Boss.Update_Color_Materal(m_Mesh_Anim, Data_In_Game.Instance.Get_Color_Boss_Skill_C());
        }
        else if (type_Alert == Type_Alert.Vampire_Use_Skill_N && m_Pos_Effect_Skill_N)
        {
            Remove_All_Child(m_Pos_Effect_Skill_N);

            My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Toa_Sang(),
                m_Pos_Effect_Skill_N);
        }

        if (type_Alert == Type_Alert.Vampire_Use_Skill_A)
        {
            SoundController.Play_Sounds(Type_Sound.Vampire_Use_Skill_A);
        }

        if (type_Alert == Type_Alert.Vampire_Use_Skill_P)
        {
            // Remove_All_Child(m_Pos_Effect_Skill_N);
            // My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Toa_Sang(),
            //     m_Pos_Effect_Skill_N);
        }
    }

    public void Remove_All_Child(Transform obj)
    {
        if (obj)
        {
            for (int i = 0; i < obj.childCount; i++)
            {
                Destroy(obj.GetChild(i).gameObject);
            }
        }
    }

    float _attack_Speed;
    int level_Upgraded;
    float percent_Health_In_Speed_Attack;
    float speed_Increase_In_Speed_Attack;

    private float Get_Speed_Attack()
    {
        _attack_Speed = attack_Speed;
        if (!m_Is_Stun && !m_Is_CD_Skill_B && m_Is_Active_Skill_B &&
            m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_B))
        {
            if (!m_Is_Active_Skill_B && !m_Lock_Use_Skill)
            {
                m_Is_Active_Skill_B = true;

                Lock_Use_Skill();
                Show_Alert(Type_Alert.Vampire_Use_Skill_B);

                if (m_Time_Active_Skill_B <= 0f)
                {
                    if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
                    {
                        m_Time_Active_Skill_B = m_Model_Info_Skill_B.time_Exist / 2f;
                    }
                    else
                    {
                        m_Time_Active_Skill_B = m_Model_Info_Skill_B.time_Exist;
                    }
                }

                CancelInvoke(nameof(Start_CD_Skill_B));
                Invoke(nameof(Start_CD_Skill_B), m_Time_Active_Skill_B);

                Check_Can_Active_Skill();
            }

            // Tang gap 2 toc danh
            _attack_Speed *= 0.5f;
        }

        // "Càng ít máu đánh càng nhanh mất 10 % máu tăng 10% tốc độ", LV 2: 5% mau + 10% mau
        if (m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_L))
        {
            level_Upgraded = m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_H);
            if (level_Upgraded > 2)
            {
                level_Upgraded = 2;
            }

            if (level_Upgraded > 0)
            {
                percent_Health_In_Speed_Attack = (1f - m_Health_Bar_UI.Get_Percent_Curr_Health()) * 100f;
                speed_Increase_In_Speed_Attack =
                    1f + (float)(percent_Health_In_Speed_Attack / (float)(10 / level_Upgraded)) * 0.1f;

                _attack_Speed *= (1f / speed_Increase_In_Speed_Attack);
            }
        }

        if (m_Room_Attacking != null && m_Room_Attacking.Check_Has_Air_Conditioner())
        {
            if (m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_H))
            {
                // Kich hoat khang lanh, giam hieu qua cua dieu hoa 10% moi cap
                level_Upgraded = m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_H);
                if (level_Upgraded > 2)
                {
                    level_Upgraded = 2;
                }

                _attack_Speed *= Get_Speed_By_Air_Conditioner() - 0.1f * level_Upgraded;
            }
            else
            {
                // Lam cham 30% toc danh
                _attack_Speed *= Get_Speed_By_Air_Conditioner();
            }
        }

        return _attack_Speed;
    }

    private float Get_Speed_By_Air_Conditioner()
    {
        if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_27_Air_Conditioner_20_Per))
        {
            return 1.5f;
        }

        return 1.3f;
    }

    #endregion

    #region =============== Control Movement ===============

    [SerializeField] internal Room_Controller m_Room_Attacking;
    [SerializeField] internal bool m_Is_Take_Damaged_To_Room;

    public bool Get_Is_Take_Damaged_To_Room()
    {
        return m_Is_Take_Damaged_To_Room;
    }

    public void Set_Room_Attacking(Room_Controller room_Controller)
    {
        m_Room_Attacking = room_Controller;
    }


    public Room_Controller Get_Room_Attacking()
    {
        return m_Room_Attacking;
    }

    Vector3 m_Pos_Attack;

    public Vector3 Get_Pos_Attack()
    {
        if (m_Room_Attacking && m_Room_Attacking.Get_Door_Of_Room() && !m_Is_Attacking_Player)
        {
            return m_Room_Attacking.Get_Door_Of_Room().transform.position;
        }

        return m_Pos_Attack;
    }

    public void Set_Pos_Attack([Bridge.Ref] Vector3 pos)
    {
        m_Pos_Attack = pos;
    }

    // Using notify icon Player attacking
    public void Set_Stop_Attacking_Player()
    {
        if (m_Room_Attacking && is_Attacking_Player)
        {
            is_Attacking_Player = false;
            m_Room_Attacking.Stop_Status_Attacking(this);
        }
    }

    #region __________ Move_To_Door __________

    List<Transform> posBossADCFighting = new List<Transform>();

    public Transform CaculatorPosAdcNear()
    {
        List<Transform> posBossADCFighting = new List<Transform>();

        posBossADCFighting.AddRange(m_Room_Attacking.Get_Pos_ADC_Of_Room());


        Transform nearest = null;
        float shortestDistance = Mathf.Infinity;
        Vector3 currentPos = transform.position;

        foreach (Transform targetPos in posBossADCFighting)
        {
            float dist = Vector3.Distance(currentPos, targetPos.position);
            if (dist < shortestDistance)
            {
                shortestDistance = dist;
                nearest = targetPos;
            }
        }

        if (nearest != null)
        {
            Debug.Log("Gần nhất là: " + nearest.name);
            // Ví dụ: di chuyển đến
            // agent.SetDestination(nearest.position);
        }

        return nearest;
    }


    public void Start_Move_And_Attack_Door(bool is_After_Kill_Golem)
    {
        Debug.Log(transform.GetInstanceID() + " =====> Start_Move_And_Attack_Door");
        if (Game_Controller.Get_Is_End_Level())
        {
            Cancle_Start_Move_To_Door();
            return;
        }

        // Stop Attack
        CancelInvoke(nameof(Start_Attack));

        // Check has Door
        if (m_Room_Attacking != null && m_Room_Attacking.Get_Door_Of_Room() != null)
        {
            Play_Animation(Type_Animation.Run);


            if (Get_Boss_ADC())
            {
                m_Boss_Movement.Set_Start_Move_To_Point(CaculatorPosAdcNear().position, () =>
                {
                    is_Attacking_Player = true;
                    // Start Attack
                    if (!m_Is_Spam_Attack)
                    {
                        m_Room_Attacking.Set_Status_Attacking(this, false);
                        m_Is_Spam_Attack = true;
                        Start_Attack();

                        CancelInvoke(nameof(Reset_Spam_Attack));
                        Invoke(nameof(Reset_Spam_Attack), 1f);
                    }

                    // Sau 20 giay, se tim phong khac de tan cong
                    if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story ||
                        DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
                    {
                        Cancle_Start_Move_To_Door();
                        if (is_After_Kill_Golem)
                        {
                            Delay_Start_Move_To_Door(m_Time_Attack_Door - (Time.time));
                        }
                        else
                        {
                            Delay_Start_Move_To_Door(m_Time_Attack_Door);
                        }
                    }
                });
            }
            else
            {
                m_Boss_Movement.Set_Start_Move_To_Point(m_Room_Attacking.Get_Position_Door_Attack(m_Type_Boss), () =>
                {
                    is_Attacking_Player = true;
                    // Start Attack
                    if (!m_Is_Spam_Attack)
                    {
                        m_Room_Attacking.Set_Status_Attacking(this, false);
                        m_Is_Spam_Attack = true;
                        Start_Attack();

                        CancelInvoke(nameof(Reset_Spam_Attack));
                        Invoke(nameof(Reset_Spam_Attack), 1f);
                    }

                    // Sau 20 giay, se tim phong khac de tan cong
                    if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story ||
                        DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
                    {
                        Cancle_Start_Move_To_Door();
                        if (is_After_Kill_Golem)
                        {
                            Delay_Start_Move_To_Door(m_Time_Attack_Door - (Time.time));
                        }
                        else
                        {
                            Delay_Start_Move_To_Door(m_Time_Attack_Door);
                        }
                    }
                });
            }
        }
        else
        {
            // Room da bi pha cua, ko di chuyen nua ma vao giet Player
            Start_Move_Attack_Player();

            Debug.Log("===startmoveand attack door");
        }
    }

    internal bool Check_Stun_By_Trap()
    {
        if (!m_Is_Live)
        {
            return false;
        }

        if (m_Room_Attacking)
        {
            m_Tmp_Time_Stun_by_Trap = m_Room_Attacking.Check_Is_Stun_By_Trap();
            if (m_Tmp_Time_Stun_by_Trap > 0)
            {
                m_Time_Stun = m_Tmp_Time_Stun_by_Trap;
                m_Is_Stun_By_Trap = true;
                CancelInvoke(nameof(Set_Stun_Boss));
                Invoke(nameof(Set_Stun_Boss), 0.0125f);
                return true;
            }
        }

        return false;
    }

    public void Set_Stun_By_Skill_2_Vampire_Hunter()
    {
        if (!m_Is_Live) return;

        m_Time_Stun = 5;
        m_Is_Stun_By_Mirror = true;
        Set_Stun_Boss();
    }

    int m_Count_Check_Null_Room;
    bool m_Is_Founded_Room;

    private void Recheck_Finded_Room()
    {
        Debug.LogError("Set_Data_Boss 20");
        if (!m_Is_Founded_Room)
        {
            m_Count_Check_Null_Room += 1;
            UI_Log.Add_Logs("Recheck_Finded_Room | Retry = " + m_Count_Check_Null_Room, false);
            Debug.LogError("Set_Data_Boss 21");
            if (Level_Controller.Instance.Get_Count_All_Room_Has_Player() > 0 && m_Count_Check_Null_Room < 5)
            {
                Debug.LogError("Set_Data_Boss 22");
                Start_Move_To_Door();
            }
            else
            {
                UI_Log.Add_Logs("Recheck_Finded_Room | All_Room_Has_Player = 0 | Retry = " + m_Count_Check_Null_Room,
                    false);
            }
        }
    }

    Tween m_Tween_Start_Move_To_Door;

    bool m_Tmp_Moving_From_Health_Point;


    public void SetFollowSummonBoss()
    {
        //Debug.LogError("SetFollowSummonBoss");

        // Loại bỏ boss đã bị destroy


        listBossSummon.RemoveAll(boss => boss == null);

        for (int i = 0; i < listBossSummon.Count; i++)
        {
            listBossSummon[i].SetFollowBossParent();
        }
    }


    public void Start_Move_To_Door()
    {

        if (isMovingToDoor)
        {
            Debug.LogWarning("Prevented infinite loop in Start_Move_To_Door");
            return;
        }

        isMovingToDoor = true;
        try
        {

            Debug.LogError(transform.GetInstanceID() + "=======> Boss_Movement | Start_Move_To_Door");
            m_Is_In_Pos_Line_Up = false;
            m_Is_Attacking_Player = false;


            CancelInvoke(nameof(boss_ADC.Fight_Bullet));


            Debug.LogError("Set_Data_Boss 12");

            m_Tmp_Moving_From_Health_Point = m_Moving_From_Health_Point;
            UI_Log.Print_Logs("Start_Move_To_Door : Live = " + m_Is_Live
                                                             + " | Is Attacking Player = " + m_Is_Attacking_Player +
                                                             " | End Level = " + Game_Controller.Get_Is_End_Level(), false);
            if (Game_Controller.Get_Is_End_Level())
            {
                Cancle_Start_Move_To_Door();
                return;
            }
            Debug.LogError("Set_Data_Boss 13");


            if (!m_Is_Live)
            {
                return;
            }
            Debug.LogError("Set_Data_Boss 14");


            Set_Active_Anim_Door_Attack(false);
            Set_Active_Collider_Detect_Target(false);

            if (!m_Moving_From_Health_Point && Game_Controller.Instance.Get_Sum_Player_In_Map() > 1 &&
                m_Is_Take_Damaged_To_Room)
            {
                Check_Stun_By_Trap();
            }
            else
            {
                m_Moving_From_Health_Point = false;
            }
            Debug.LogError("Set_Data_Boss 15");

            Set_Stop_Attacking_Player();
            listBossSummon.RemoveAll(boss => boss == null);
            if (listBossSummon.Count >= 0)
            {
                foreach (var bossChill in listBossSummon)
                {

                    Debug.LogError("Set stop player");
                    bossChill.Set_Stop_Attacking_Player();
                    bossChill.Cancle_Start_Move_To_Door();

                }
            }

            Debug.LogError("Set_Data_Boss 16");


            UI_Log.Add_Logs("Finding Room ...", false);

            m_Is_Founded_Room = false;

            Debug.LogError("Set_Data_Boss 19");
            // Invoke(nameof(Recheck_Finded_Room), 1f);
            Debug.LogError("Set_Data_Boss 18");

            //m_Room_Attacking = Get_Random_Room_Has_Player();



            m_Room_Attacking =   Level_Controller.Instance.m_All_Room_Has_Player[0];
            Debug.LogError("Set_Data_Boss 17");

            ///Debug.LogError(m_Room_Attacking.transform.GetInstanceID());

            m_Is_Take_Damaged_To_Room = false;
            m_Is_Founded_Room = true;
            //  CancelInvoke(nameof(Recheck_Finded_Room));

            // Stop Attack
            CancelInvoke(nameof(Start_Attack));

            if (m_Health_Bar_UI && m_Is_Live)
            {
                m_Health_Bar_UI.Set_Force_Show_Progress(true);
            }


            // Check has Door
            if (m_Room_Attacking)
            {
                Debug.LogError("Set_Data_Boss 21");
                Debug.LogError(m_Room_Attacking.name);


                if (listBossSummon.Count >= 0)
                {
                    foreach (var bossChill in listBossSummon)
                    {
                        bossChill.Start_Move_To_Door();
                    }
                }

                m_Count_Check_Null_Room = 0;
                Debug.LogError("start move to door-1" + this.gameObject.name);
                if (m_Room_Attacking.Check_Bed_Not_Kill())
                {
                    // Room da bi pha cua, ko di chuyen nua ma vao giet Player
                    Start_Move_Attack_Player();

                    Debug.Log("start move to door-1");
                }
                else
                {
                    if (m_Room_Attacking.Get_Door_Of_Room() != null)
                    {
                        Debug.LogError("start Get_Door_Of_Room to door-1");
                        Move_And_Attack_Door();
                    }
                    else if (m_Room_Attacking.Get_Temp_Door_Of_Room() != null)
                    {
                        Debug.LogError("start Get_Temp_Door_Of_Room to door-1");
                        Move_And_Attack_Temp_Door();
                    }
                    else
                    {
                        // Room da bi pha cua, ko di chuyen nua ma vao giet Player

                        Start_Move_Attack_Player();
                    }
                }
            }
            else
            {
                Debug.LogError("Set_Data_Boss 20");
                m_Count_Check_Null_Room += 1;
                if (Level_Controller.Instance.Get_Count_All_Room_Has_Player() > 0 && m_Count_Check_Null_Room < 5)
                {
                    Play_Animation(Type_Animation.Idle);

                    UI_Log.Add_Logs("Room Null retry = " + m_Count_Check_Null_Room, false);

                    Level_Controller.Instance.Recheck_Room_Has_Player();
                    m_List_Room_Will_Attacking.Clear();
                    // Loop 3 lần check null
                    Debug.LogError("Set_Data_Boss 18");
                    Remove_Tween_DelayedCall(m_Tween_Start_Move_To_Door);
                    m_Tween_Start_Move_To_Door = DOVirtual.DelayedCall(1f, () => { Start_Move_To_Door(); }, false);
                }
                else
                {
                    UI_Log.Add_Logs("All_Room_Has_Player = 0 | Retry = " + m_Count_Check_Null_Room, false);
                }
            }


        }
        finally
        {
            isMovingToDoor = false;
        }
    }

    Vector3 m_Pos_Line_Up;
    bool m_Is_In_Pos_Line_Up;

    public bool Get_Is_Ready_In_Pos_Line_Up()
    {
        return m_Is_In_Pos_Line_Up;
    }

    private void Move_To_Line_Up()
    {
        Cancle_Start_Move_To_Door();
        m_Is_In_Pos_Line_Up = false;
        m_Room_Attacking.Add_Boss_Line_Up(this);
        m_Pos_Line_Up = m_Room_Attacking.Get_Position_Line_Up();
        m_Tmp_distance_To_Room = (m_Pos_Line_Up - transform.position).sqrMagnitude;
        if (m_Tmp_distance_To_Room < 1f)
        {
            m_Is_In_Pos_Line_Up = true;
            Play_Animation(Type_Animation.Idle);
            Update_Look_At_In_Line_Up();
        }
        else
        {
            Play_Animation(Type_Animation.Run);
            m_Boss_Movement.Set_Start_Move_To_Point(m_Pos_Line_Up, () =>
            {
                m_Is_In_Pos_Line_Up = true;
                Play_Animation(Type_Animation.Idle);
                Update_Look_At_In_Line_Up();
            });
        }
    }

    private void Update_Look_At_In_Line_Up()
    {
        if (m_Room_Attacking)
        {
            m_Boss_Movement.Update_Look_At(m_Room_Attacking.Get_Pos_Look_At(this));
        }
    }

    public void Loop_Check_Can_Attack_Door()
    {
        CancelInvoke(nameof(Loop_Check_Can_Attack_Door));
        Move_And_Attack_Door();
    }


    internal virtual void Move_And_Attack_Door(bool is_After_Attack_Golem = false)
    {
        if (m_Room_Attacking && m_Room_Attacking.Get_Door_Of_Room() &&
            !m_Room_Attacking.Get_Door_Of_Room().Get_Is_Door_Closed())
        {
            Invoke(nameof(Loop_Check_Can_Attack_Door), 0.125f);
            return;
        }


        m_Tmp_distance_To_Room =
            (m_Room_Attacking.Get_Position_Door_Attack(m_Type_Boss) - transform.position).sqrMagnitude;
        Debug.Log(transform.GetInstanceID() + " =====> Move_And_Attack_Door : m_Tmp_distance_To_Room = " +
                  m_Tmp_distance_To_Room);
        if (m_Tmp_distance_To_Room < 0.12f)
        {
            Debug.LogError("TAN CONG");
            On_Ready_Attack_Door(is_After_Attack_Golem);


            if (listBossSummon.Count > 0)
            {
                foreach (var bossChild in listBossSummon)
                {
                    bossChild.On_Ready_Attack_Door(is_After_Attack_Golem);
                }
            }
        }
        else
        {
            // Play_Animation(Type_Animation.Run);
            Debug.LogError(m_Room_Attacking + " m_Room_Attacking");
            if (!Get_Boss_ADC())
            {
                Play_Animation(Type_Animation.Run);
                Debug.LogError("TH: K FAI ADC? GOLEM  TON TAI " + this.gameObject.name + "--" +
                               m_Room_Attacking.Get_Pos_Boss_Fighting() + " " +
                               m_Room_Attacking.Get_Position_Door_Attack(m_Type_Boss));


                m_Boss_Movement.Set_Start_Move_To_Point(m_Room_Attacking.Get_Pos_Boss_Fighting(), () =>
                {

                    Debug.LogError("TH: K FAI ADC? K CO GOLEM " + this.gameObject.name);


                    m_Boss_Movement.Set_Start_Move_To_Point(m_Room_Attacking.Get_Position_Door_Attack(m_Type_Boss),
                        () =>
                        {
                            Debug.LogError("Di chuyen thanh cong");
                            m_Is_Lock_Anim_Attack = false;
                            Play_Animation(Type_Animation.Attack);
                            On_Ready_Attack_Door(is_After_Attack_Golem);


                            if (listBossSummon.Count > 0)
                            {
                                foreach (var bossChild in listBossSummon)
                                {
                                    bossChild.On_Ready_Attack_Door(is_After_Attack_Golem);
                                }
                            }
                        });
                    //   }
                });
            }
            else
            {
                Play_Animation(Type_Animation.Run);
                Debug.LogError("TH:  ADC  danh golem - khoing co golem same as");

                // if (m_Room_Attacking.Get_Bed_Controller().Get_Golem())
                // {
                //     m_Boss_Movement.Set_Start_Move_To_Point(CaculatorPosAdcNear().position,
                //         () =>
                //         {
                //             m_Is_Lock_Anim_Attack = false;
                //             On_Ready_Attack_Door(is_After_Attack_Golem);
                //
                //
                //
                //             if (listBossSummon.Count > 0)
                //             {
                //                 foreach (var bossChild in listBossSummon)
                //                 {
                //                     bossChild.On_Ready_Attack_Door(is_After_Attack_Golem);
                //                 }
                //             }
                //         });
                // }
                //
                // else
                // {
                m_Boss_Movement.Set_Start_Move_To_Point(CaculatorPosAdcNear().position,
                    () =>
                    {
                        m_Is_Lock_Anim_Attack = false;
                        On_Ready_Attack_Door(is_After_Attack_Golem);


                        if (listBossSummon.Count > 0)
                        {
                            foreach (var bossChild in listBossSummon)
                            {
                                bossChild.On_Ready_Attack_Door(is_After_Attack_Golem);
                            }
                        }
                    });
                //  }


                // if (m_Room_Attacking.Get_Bed_Controller().Get_Golem() &&
                //     m_Room_Attacking.Get_Bed_Controller().Get_Golem().Get_Is_Live())
                // {
                //     m_Boss_Movement.Set_Start_Move_To_Point(CaculatorPosAdcNear().position,
                //         () =>
                //         {
                //         
                //             m_Is_Lock_Anim_Attack = false;
                //             On_Ready_Attack_Door(is_After_Attack_Golem);
                //         });
                // }
                // else
                // {
                //     m_Boss_Movement.Set_Start_Move_To_Point(m_Room_Attacking.Get_Position_Door_Attack(m_Type_Boss),
                //         () =>
                //         {
                //         
                //             m_Is_Lock_Anim_Attack = false;
                //             On_Ready_Attack_Door(is_After_Attack_Golem);
                //         });
                // }
                //

                // m_Boss_Movement.Set_Start_Move_To_Point(m_Room_Attacking.Get_Position_Door_Attack(m_Type_Boss),
                //     () =>
                //     {
                //         m_Is_Lock_Anim_Attack = false;
                //         On_Ready_Attack_Door(is_After_Attack_Golem);
                //     });
            }


            if (m_Is_Stun)
            {
                Debug.LogError("dung di chuyen ");
                m_Boss_Movement.Stop_Move();
                Play_Animation(Type_Animation.Idle);
            }
        }
    }


    public void Set_Boss_ADC(bool isAdc)
    {
        m_Is_Boss_ADC = isAdc;
    }

    public bool Get_Boss_ADC()
    {
        return m_Is_Boss_ADC;
    }

    public void Set_Distance_Adc(float distance)
    {
        m_Distance_ADC_Start_Attack = distance;
    }

    public float Get_Distance_Adc()
    {
        return m_Distance_ADC_Start_Attack;
    }

    public void Update_Spawn_Bullet_ADC()
    {
        // update dan

        if (m_Is_Boss_ADC)
        {
            if (boss_ADC != null)
            {
                boss_ADC.Fight_Bullet();
            }
        }
    }

    public virtual void On_Ready_Attack_Door(bool is_After_Kill_Golem)
    {

        Set_Active_Anim_Door_Attack(true);
        is_Attacking_Player = true;
        Debug.LogError("On_Ready_Attack_Door ......" + m_Is_Spam_Attack);
        // Start Attack
        if (!m_Is_Spam_Attack)
        {
            m_Is_Spam_Attack = true;
            m_Room_Attacking.Set_Status_Attacking(this, false);
            Start_Attack();
            Debug.LogError("On_Ready_Attack_Door ......1");
            Cancle_Start_Move_To_Door();
            Debug.LogError("On_Ready_Attack_Door ......2");

            CancelInvoke(nameof(Reset_Spam_Attack));
            Invoke(nameof(Reset_Spam_Attack), 1f);

        }

        // // Sau 20 giay, se tim phong khac de tan cong
        // if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story ||
        //     DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        // {
        //     Debug.LogError("On_Ready_Attack_Door ......2 - sau 20 s");
        //     Cancle_Start_Move_To_Door();
        //
        //     if (is_After_Kill_Golem)
        //     {
        //         Delay_Start_Move_To_Door(m_Time_Attack_Door - (Time.time));
        //     }
        //     else
        //     {
        //         Delay_Start_Move_To_Door(m_Time_Attack_Door);
        //     }
        // }
    }

    public void Destroy_Door_Complete(Base_Turret base_Turret = null)
    {
        // Room da bi pha cua, ko di chuyen nua ma vao giet Player
        Start_Move_Attack_Player(base_Turret);
        Debug.Log("destroydoorcomplete");
    }


    private void Move_And_Attack_Temp_Door(bool is_After_Attack_Golem = false)
    {
        if (m_Room_Attacking && m_Room_Attacking.Get_Temp_Door_Of_Room())
        {
            Invoke(nameof(Loop_Check_Can_Attack_Door), 0.125f);
            return;
        }

        //float distance_To_Room = Vector2.Distance(m_Room_Attacking.Get_Position_Door(), transform.position);
        m_Tmp_distance_To_Room =
            (m_Room_Attacking.Get_Position_Door_Attack(m_Type_Boss) - transform.position).sqrMagnitude;
        Debug.Log(transform.GetInstanceID() + " =====> Move_And_Attack_Door : m_Tmp_distance_To_Room = " +
                  m_Tmp_distance_To_Room);
        if (m_Tmp_distance_To_Room < 0.12f)
        {
            On_Ready_Attack_Temp_Door();
        }
        else
        {
            Play_Animation(Type_Animation.Run);


            m_Boss_Movement.Set_Start_Move_To_Point(m_Room_Attacking.Get_Position_Door_Attack(m_Type_Boss),
                () => { On_Ready_Attack_Temp_Door(); });



            if (m_Is_Stun)
            {
                m_Boss_Movement.Stop_Move();
                Play_Animation(Type_Animation.Idle);
            }
        }
    }


    private void On_Ready_Attack_Temp_Door()
    {
        Set_Active_Anim_Door_Attack(true);
        is_Attacking_Player = true;

        // Start Attack
        if (!m_Is_Spam_Attack)
        {
            m_Is_Spam_Attack = true;
            m_Room_Attacking.Set_Status_Attacking(this, false);
            Start_Attack();

            Cancle_Start_Move_To_Door();
            Invoke(nameof(Reset_Spam_Attack), 1f);
        }

        // Sau 20 giay, se tim phong khac de tan cong
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story ||
            DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {
            Cancle_Start_Move_To_Door();


            Delay_Start_Move_To_Door(m_Time_Attack_Door);
        }
    }

    #endregion

    #region __________ Start_Move_Attack_Player __________

    public void Start_Move_Attack_Player(Base_Turret base_Turret = null)
    {

        if (isAttackingPlayer)
        {
            Debug.LogWarning("Prevented infinite loop in Start_Move_Attack_Player");
            return;
        }

        isAttackingPlayer = true;
        try
        {


            if (Game_Controller.Get_Is_End_Level()) return;
            if (!m_Is_Live)
            {
                return;
            }


            Debug.LogError("=====> Start_Move_Attack_Player");
            // Check Room has character Safeguard And active Skill 2
            if (m_Room_Attacking && base_Turret && m_Room_Attacking.Get_Type_Character() == Type_Character.Safeguard &&
                DataSaved.Get_Is_Unlock_Skill_2(Type_Character.Safeguard) == true)
            {
                var tmp_Door = m_Room_Attacking.Check_And_Build_Skill_2_Safeguard(base_Turret);
                if (tmp_Door)
                {
                    // TODO: Danh cai Temp door
                    Debug.Log("=====> Create Tmp Door Success");
                }
                else
                {
                    On_Ready_Move_Attack_Player();
                }
            }
            else
            {


                On_Ready_Move_Attack_Player();
            }


        }
        finally
        {
            isAttackingPlayer = false;
        }
    }

    internal void Cancle_Start_Move_To_Door()
    {
        Debug.Log("====> Cancle_Start_Move_To_Door");
        CancelInvoke(nameof(Start_Move_To_Door));
    }

    public void Delay_Start_Move_To_Door(float time)
    {
        Debug.Log("====> Delay_Start_Move_To_Door");
        Invoke(nameof(Start_Move_To_Door), time);
    }

    private void On_Ready_Move_Attack_Player()
    {
        if (m_Health_Bar_UI && m_Is_Live)
        {
            m_Health_Bar_UI.Set_Force_Show_Progress(true);
        }

        m_Is_Attacking_Player = true;
        Debug.LogError("======> Start_Move_Attack_Player");

        Cancle_Start_Move_To_Door();

        Set_Active_Anim_Door_Attack(false);
        Set_Active_Collider_Detect_Target(true);

        Debug.LogError("======> saitamar");
        if (m_Room_Attacking)
        {
            m_Tmp_Is_Killed_Play = false;
            var pos_Bed = m_Room_Attacking.Get_Position_Bed(() => { m_Tmp_Is_Killed_Play = true; });

            m_Pos_Attack = pos_Bed;

            if (!m_Tmp_Is_Killed_Play)
            {
                Play_Animation(Type_Animation.Run);
                m_Boss_Movement.Set_Start_Move_To_Target(m_Room_Attacking.Get_Bed_Controller().transform,
                    () => { Kill_Player_Done(); });
            }
            else
            {
                Kill_Player_Done();
            }
        }
        else
        {
            Cancle_Start_Move_To_Door();
            Start_Move_To_Door();
        }
    }

    public void Kill_Player_Done()
    {
        if (m_Room_Attacking && m_Room_Attacking.Get_Bed_Controller())
        {
            m_Boss_Movement.Stop_Move();

            Set_Pos_Attack(m_Room_Attacking.Get_Bed_Controller().transform.position);
            m_Boss_Animation.Play_Animation(Type_Animation.Attack, 1f);

            m_Room_Attacking.Get_Bed_Controller().Play_Sound_Character_Die();


            if (Get_Boss_ADC())
            {
                CancelInvoke(nameof(On_Ready_Kill_Player_Done));
                Invoke(nameof(On_Ready_Kill_Player_Done), 0.75f);
            }
            else
            {
                CancelInvoke(nameof(On_Ready_Kill_Player_Done));
                Invoke(nameof(On_Ready_Kill_Player_Done), 1f);
            }
        }
        else
        {
            CancelInvoke(nameof(On_Ready_Kill_Player_Done));
            On_Ready_Kill_Player_Done();
        }
    }


    private bool isProcessingKillPlayerDone = false;
    private bool isMovingToDoor = false;
    private bool isAttackingPlayer = false;
    private void On_Ready_Kill_Player_Done()
    {


        if (isProcessingKillPlayerDone)
        {
            Debug.LogWarning("Prevented infinite loop in On_Ready_Kill_Player_Done");
            return;
        }

        isProcessingKillPlayerDone = true;
        try
        {
            if (m_Room_Attacking && m_Room_Attacking.Get_Bed_Controller())
            {
                m_Room_Attacking.Get_Bed_Controller().On_Died();
            }


            m_Boss_Movement.Reset_Force_Look_At();

            m_Is_Attacking_Player = false;
            CancelInvoke(nameof(Kill_Player_Done));
            Cancle_Start_Move_To_Door();

            m_Room_Attacking = null;
            Start_Move_To_Door();

            Set_Active_Collider_Detect_Target(false);






        }
        finally
        {
            isProcessingKillPlayerDone = false;
        }
    }

    internal void Set_Active_Collider_Detect_Target(bool is_Active)
    {
        if (m_Collider_Detect_Target)
        {
            if (!is_Active)
            {
                m_Collider_Detect_Target.Set_Detect_Turret(false);
            }

            m_Collider_Detect_Target.gameObject.SetActive(is_Active);
            if (is_Active)
            {
                m_Collider_Detect_Target.Set_Detect_Turret(true);
            }
        }
    }

    #endregion

    #region __________ Move_Health_Point __________

    public virtual void Check_Health_To_Move_To_Health_Point()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        // boss k hoi mau
        // if (!m_Is_Attacking_Golem)
        // {
        //  
        // }
        Check_Player_Has_Holy_Water();

        if (!m_Is_Live)
        {
            return;
        }


        //Debug.LogError("Ve hoi mau di");
        // Mau < 20%, se di chuyen den poin hoi mau
        if (!m_Is_Moving_To_Health_Point && m_Health_Bar_UI != null && !m_Is_Stun
            && m_Health_Bar_UI.Get_Percent_Curr_Health() < 0.2f &&
            (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story
             || DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level))
        {
            // if (m_Boss_Attack_Golem)
            // {
            //     if (this.listBossSummon.Count > 0)
            //     {
            //         foreach (var var in listBossSummon)
            //         {
            //             var.Check_Health_To_Move_To_Health_Point();
            //
            //         }
            //     }
            //
            //     m_Boss_Attack_Golem.Stop_Attack_Golem(false);
            // }

            //  Debug.LogError("Ve hoi mau di 1");

            Remove_All_Effect_Stun_By_Trap();
            Remove_All_Effect_Stun();

            if (m_Health_Bar_UI && m_Is_Live)
            {
                m_Health_Bar_UI.Set_Force_Show_Progress(true);
            }

            //   Debug.LogError("Ve hoi mau di 2");
            if (m_Room_Attacking && m_Is_Take_Damaged_To_Room && m_Room_Attacking.Get_Bed_Controller())
            {
                Check_Stun_By_Trap();
            }

            Set_Stop_Attacking_Player();



            // if (this.listBossSummon.Count > 0)
            // {
            //     foreach (var var in listBossSummon)
            //     {
            //         var.Set_Stop_Attacking_Player();
            //             
            //     }
            // }
            //

            //   Debug.LogError("Ve hoi mau di 3");
            m_Is_Moving_To_Health_Point = true;
            Cancle_Start_Move_To_Door();
            // Debug.LogError("Ve hoi mau di 4");
            Set_Active_Collider_Detect_Target(false);

            Play_Animation(Type_Animation.Run);
            m_Boss_Movement.Move_To_Health_Point(() =>
            {
                Play_Animation(Type_Animation.Idle);
                Start_Restore_Health();


                if (this.listBossSummon.Count > 0)
                {
                    foreach (var var in listBossSummon)
                    {
                        var.Play_Animation(Type_Animation.Idle);

                    }
                }

            });

            if (m_Is_Stun)
            {
                m_Boss_Movement.Stop_Move();
                Play_Animation(Type_Animation.Idle);


                if (this.listBossSummon.Count > 0)
                {
                    foreach (var var in listBossSummon)
                    {
                        var.Play_Animation(Type_Animation.Idle);

                    }
                }

            }
        }
    }

    bool m_Moving_From_Health_Point;
    Tween m_Tween_Start_Restore_Health;

    private void Start_Restore_Health()
    {
        UI_Log.Print_Logs("Restore_Health = " + m_Health_Bar_UI.Get_Percent_Curr_Health(), false);

        m_Is_Take_Damaged_To_Room = false;
        m_Is_Receive_Damage_By_Holy_Water = false;
        // Bat Dau Hoi mau
        m_Health_Bar_UI.Increase_Curr_Health(0.25f, this);

        if (m_Is_Moving_To_Health_Point)
        {
            // Khi hoi day mau, tan cong tiep
            Remove_Tween_DelayedCall(m_Tween_Start_Restore_Health);
            m_Tween_Start_Restore_Health = DOVirtual.DelayedCall(1f, () => { Start_Restore_Health(); }, false);
        }
    }

    public void Restore_Full_Health()
    {
        UI_Log.Print_Logs("Restore_Health = " + m_Health_Bar_UI.Get_Percent_Curr_Health(), false);

        m_Is_Attacking_Player = false;

        m_Is_Moving_To_Health_Point = false;
        m_Moving_From_Health_Point = true;
        Start_Move_To_Door();
        //m_Boss_Attack_Golem.Reset_Lock_Golem();
    }


    public bool Is_Go_Health()
    {
        return m_Is_Moving_To_Health_Point;
    }

    #endregion

    #region =============== Stun Boss ===============


    [SerializeField]
    internal float m_Time_Stun;

    [SerializeField] internal bool m_Is_Stun;
    [SerializeField] internal bool m_Is_Stun_By_Trap;
    [SerializeField] internal bool m_Is_Stun_By_Mirror;
    [SerializeField] internal bool m_Is_Stun_By_Item_SP;

    [SerializeField] internal bool m_Is_Stun_By_Eilif;

    //updateofjura
    [SerializeField] internal bool m_Is_Stun_By_Safeguard;

    internal Vector3 m_Tmp_Pos_Stun;

    public virtual void Set_Stun_Boss()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

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

            My_Utils.Play_Pref_Effect_No_Destroy(
                Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Trap(),
                m_Pos_Trap);

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

    void Reset_Status_Stun()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Is_Live)
        {
            Remove_All_Effect_Stun_By_Trap();
            Remove_All_Effect_Stun();
            Remove_All_Effect_Stun_By_Item_SP();
            //updateofjura
            Remove_All_Effect_Stun_By_Safeguard();

            m_Pos_Stun_By_Skill_2_Eilif.Destroy_All_Children();


            m_Boss_Movement.Continue_Move();
            m_Is_Stun = false;

            if (is_Attacking_Player)
            {
                m_Is_Lock_Anim_Attack = false;
                Start_Attack();
            }
        }
    }

    internal void Remove_All_Effect_Stun()
    {
        m_Pos_Stun.Destroy_All_Children();
    }

    internal void Reset_Status_All_Effect_Stun()
    {
        m_Is_Stun_By_Mirror = false;
        Remove_All_Effect_Stun();

        if (Check_Is_Not_Stunning())
        {
            Reset_Status_Stun();
        }
    }

    internal void Remove_All_Effect_Stun_By_Trap()
    {
        m_Pos_Trap.Destroy_All_Children();
    }

    internal void Reset_Status_Effect_Stun_By_Trap()
    {
        m_Is_Stun_By_Trap = false;
        Remove_All_Effect_Stun_By_Trap();

        if (Check_Is_Not_Stunning())
        {
            Reset_Status_Stun();
        }
    }

    private void Reset_Status_Effect_Stun_By_Item_SP()
    {
        m_Is_Stun_By_Item_SP = false;
        Remove_All_Effect_Stun_By_Item_SP();

        if (Check_Is_Not_Stunning())
        {
            Reset_Status_Stun();
        }
    }

    private void Reset_Status_Effect_Stun_By_Skill_2_Eilif()
    {
        m_Is_Stun_By_Eilif = false;
        m_Pos_Stun_By_Skill_2_Eilif.Destroy_All_Children();

        if (Check_Is_Not_Stunning())
        {
            Reset_Status_Stun();
        }
    }

    //updateofjura
    private void Reset_Status_Effect_Stun_By_Skill_2_Safeguard()
    {
        m_Is_Stun_By_Safeguard = false;
        Remove_All_Effect_Stun_By_Safeguard();

        if (Check_Is_Not_Stunning())
        {
            Reset_Status_Stun();
        }
    }


    private bool Check_Is_Not_Stunning()
    {
        return !m_Is_Stun_By_Trap && !m_Is_Stun_By_Mirror && !m_Is_Stun_By_Item_SP && !m_Is_Stun_By_Eilif;
    }

    public void Remove_All_Effect_Stun_By_Item_SP()
    {
        m_Pos_Stun_By_Item_SP.Destroy_All_Children();
    }

    public void Remove_All_Effect_Stun_By_Safeguard()
    {
        m_Pos_Stun_By_Skill_2_Safeguard.Destroy_All_Children();
    }

    #endregion

    #endregion

    #region ==========Set_amor==============

    private void Set_Amor()
    {
    }

    #endregion

    #region =============== Sub Method ===============

    //public bool Is_Owner()
    //{
    //    bool is_Owner = Game_Controller.Instance.Get_Player_Curr() == m_Type_Boss;
    //    Set_Active_Owner(is_Owner);
    //    return is_Owner;
    //}

    //private void Set_Active_Owner(bool isActive)
    //{
    //    if (m_Obj_Owner)
    //    {
    //        m_Obj_Owner.SetActive(isActive);
    //    }
    //}

    #endregion

    #region ============ Skill Manager ============

    [Header("....... Skill A .....")]
    [SerializeField]
    Model_Info_Skill m_Model_Info_Skill_A;

    [SerializeField] bool m_Is_Active_Skill_A;
    [SerializeField] bool m_Is_CD_Skill_A;
    [SerializeField] float m_CD_SKill_A = -1f;

    [Header("....... Skill B .....")]
    [SerializeField]
    Model_Info_Skill m_Model_Info_Skill_B;

    [SerializeField] bool m_Is_Active_Skill_B;
    [SerializeField] bool m_Is_CD_Skill_B;
    [SerializeField] float m_CD_Skill_B = -1f;
    [SerializeField] float m_Time_Active_Skill_B = -1f;

    [Header("....... Skill C .....")]
    [SerializeField]
    Model_Info_Skill m_Model_Info_Skill_C;

    [SerializeField] bool m_Is_Active_Skill_C;
    [SerializeField] bool m_Is_CD_Skill_C;
    [SerializeField] float m_CD_Skill_C = -1f;
    [SerializeField] float m_Time_Active_Skill_C = -1f;

    [Header("....... Skill D .....")]
    [SerializeField]
    float m_CD_Skill_D;

    [Header("....... Skill J .....")]
    [SerializeField]
    float m_CD_Skill_J;

    [SerializeField] bool m_Is_Active_Skill_J;

    [Header("....... Skill K .....")]
    [SerializeField]
    Model_Info_Skill m_Model_Info_Skill_K;

    [SerializeField] bool m_Is_Active_Skill_K;
    [SerializeField] bool m_Is_CD_Skill_K;

    [SerializeField] float m_CD_Skill_K = -1f;
    [SerializeField] float m_Time_Active_Skill_K = -1f;

    [Header("....... Skill M .....")]
    [SerializeField]
    Model_Info_Skill m_Model_Info_Skill_M;

    [SerializeField] bool m_Is_Active_Skill_M;
    [SerializeField] float m_CD_Skill_M = -1f;
    [SerializeField] float m_Time_Active_Skill_M = -1f;

    [Header("....... Skill N .....")]
    [SerializeField]
    Model_Info_Skill m_Model_Info_Skill_N;

    [SerializeField] bool m_Is_Active_Skill_N;
    [SerializeField] bool m_Is_CD_Skill_N;
    [SerializeField] Transform m_Pos_Start_Skill_N;
    [SerializeField] float m_CD_Skill_N = -1f;
    [SerializeField] float m_Time_Active_Skill_N = -1f;


    [Header("....... Skill O .....")]
    [SerializeField]
    Model_Info_Skill m_Model_Info_Skill_O;

    [SerializeField] bool m_Is_Active_Skill_O;
    [SerializeField] bool m_Is_CD_Skill_O;
    [SerializeField] Transform m_Pos_Start_Skill_O;
    [SerializeField] float m_CD_Skill_O = -1f;
    [SerializeField] float m_Time_Active_Skill_O = -1f;


    [Header("....... Skill P .....")]
    [SerializeField]
    Model_Info_Skill m_Model_Info_Skill_P;

    [SerializeField] bool m_Is_Active_Skill_P;
    [SerializeField] bool m_Is_CD_Skill_P;
    [SerializeField] Transform m_Pos_Start_Skill_P;
    [SerializeField] float m_CD_Skill_P = -1f;
    [SerializeField] float m_Time_Active_Skill_P = -1f;


    // All skill has CD, when set active will call this mothod
    private bool Check_Can_Active_Skill()
    {
        if (Game_Controller.Get_Is_End_Level()) return false;
        if (!m_Is_Live) return false;

        if (m_Room_Attacking != null)
        {
            m_Time_Stun = m_Room_Attacking.Check_Stun_By_Mirror();
            if (m_Time_Stun > 0)
            {
                //m_Is_Stun_By_Trap = false;
                m_Is_Stun_By_Mirror = true;
                CancelInvoke(nameof(Set_Stun_Boss));
                Set_Stun_Boss();
                return false;
            }

            return true;
        }

        return true;
    }

    List<Type_Skill_Boss> real_Pool = new List<Type_Skill_Boss>();
    Type_Skill_Boss type_Skill_Boss;
    Type_Skill_Boss type_Skill_Boss_Random;
    Data_Skill_Boss data_Info_Skill;
    int total_Upgraded_Skill;
    int min_LV_Boss;
    [SerializeField] protected bool isTestADC;
    bool hasSkillPStoryMode = false;
    public void Increase_Skill()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        real_Pool.Clear();

        for (int i = 0; i < m_Pool_Random_Skill.Count; i++)
        {
            type_Skill_Boss = m_Pool_Random_Skill[i];
            data_Info_Skill = Data_In_Game.Instance.Get_Data_Skill_Boss_Manager().Get_Data_Skill_Boss(type_Skill_Boss);
            if (data_Info_Skill)
            {
                total_Upgraded_Skill = m_Skill_Boss_Controller.Get_Total_Upgrade_Skill(type_Skill_Boss);
                min_LV_Boss = data_Info_Skill.min_Level_Boss;

                if (level_Curr >= min_LV_Boss)
                {
                    if (data_Info_Skill.max_Number_Upgrade > 0)
                    {
                        if (total_Upgraded_Skill < data_Info_Skill.max_Number_Upgrade)
                        {
                            real_Pool.Add(type_Skill_Boss);
                        }
                    }
                    else
                    {
                        real_Pool.Add(type_Skill_Boss);
                    }
                }
            }
        }

        if (!isTestADC)
        {
            if (real_Pool.Count > 0)
            {
                real_Pool.Shuffle();

                type_Skill_Boss_Random = real_Pool[0];

                // Loại bỏ Skill_P nếu không ở chế độ Challenge


                if (Get_Type_Boss() == Type_Player.Boss_Dracula && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level && !hasSkillPStoryMode)
                {
                    // Trong Story Mode, ưu tiên chọn Skill_P nếu nó có trong real_Pool

                    for (int i = 0; i < real_Pool.Count; i++)
                    {
                        if (real_Pool[i] == Type_Skill_Boss.Skill_P)
                        {
                            type_Skill_Boss_Random = Type_Skill_Boss.Skill_P;
                            hasSkillPStoryMode = true;
                            break;
                        }
                    }
                    // Nếu không có Skill_P trong real_Pool, giữ nguyên real_Pool[0] hoặc chọn ngẫu nhiên
                    if (!hasSkillPStoryMode)
                    {
                        Debug.LogWarning("da dung skill P");
                    }
                }

                else if (type_Skill_Boss_Random == Type_Skill_Boss.Skill_P && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge)
                {
                    // Chọn một kỹ năng khác từ real_Pool (nếu có)
                    if (real_Pool.Count > 1)
                    {
                        // Tìm một kỹ năng không phải Skill_P
                        for (int i = 0; i < real_Pool.Count; i++)
                        {
                            if (real_Pool[i] != Type_Skill_Boss.Skill_P)
                            {
                                type_Skill_Boss_Random = real_Pool[i];
                                break;
                            }
                        }
                    }
                    else
                    {
                        // Nếu real_Pool chỉ có Skill_P, đặt mặc định thành kỹ năng khác (nếu có)
                        type_Skill_Boss_Random = Type_Skill_Boss.Skill_A; // Thay Skill_Default bằng kỹ năng khác hợp lệ
                                                                          //  Debug.LogWarning("real_Pool chỉ chứa Skill_P, chọn kỹ năng mặc định thay thế.");
                    }
                }

                //  random_Skill = m_Skill_Test;

                m_Skill_Boss_Controller.Increase_Skill(type_Skill_Boss_Random);

                data_Info_Skill = Data_In_Game.Instance.Get_Data_Skill_Boss_Manager()
                    .Get_Data_Skill_Boss(type_Skill_Boss_Random);

                switch (type_Skill_Boss_Random)
                {
                    case Type_Skill_Boss.Skill_A:
                        m_Model_Info_Skill_A = new Model_Info_Skill(data_Info_Skill);
                        break;

                    case Type_Skill_Boss.Skill_B:
                        m_Model_Info_Skill_B = new Model_Info_Skill(data_Info_Skill);
                        break;

                    case Type_Skill_Boss.Skill_C:
                        m_Model_Info_Skill_C = new Model_Info_Skill(data_Info_Skill);
                        break;

                    case Type_Skill_Boss.Skill_D:
                        m_CD_Skill_D = data_Info_Skill.time_CD;
                        Set_Active_Skill_D();
                        break;

                    case Type_Skill_Boss.Skill_E:
                        damage *= 1.1f;
                        break;

                    case Type_Skill_Boss.Skill_F:
                        attack_Speed = 0.9f;
                        if (attack_Speed < 0.5f)
                        {
                            attack_Speed = 0.5f;
                        }

                        break;

                    case Type_Skill_Boss.Skill_G:
                        max_Exp *= 1.1f;
                        break;

                    case Type_Skill_Boss.Skill_J:
                        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
                        {
                            m_CD_Skill_J = data_Info_Skill.time_CD / 2f;
                        }
                        else
                        {
                            m_CD_Skill_J = data_Info_Skill.time_CD;
                        }

                        if (m_CD_Skill_J <= 0)
                        {
                            m_CD_Skill_J = 120f;
                        }

                        if (m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_J) <= 1)
                        {
                            Set_Active_Skill_J();
                        }

                        break;

                    case Type_Skill_Boss.Skill_K:
                        m_Model_Info_Skill_K = new Model_Info_Skill(data_Info_Skill);
                        break;

                    case Type_Skill_Boss.Skill_L:
                        Set_Active_Skill_L();
                        break;

                    case Type_Skill_Boss.Skill_M:
                        m_Model_Info_Skill_M = new Model_Info_Skill(data_Info_Skill);
                        break;

                    case Type_Skill_Boss.Skill_N:
                        m_Model_Info_Skill_N = new Model_Info_Skill(data_Info_Skill);
                        break;
                    // SKILL O cua boss normal -- chua xong dau nho lam lai nhhe
                    case Type_Skill_Boss.Skill_O:
                        m_Model_Info_Skill_O = new Model_Info_Skill(data_Info_Skill);
                        break;

                    // trieu hoi quat vat : cua dracula tuong lai cac con khac =>>>>> co the co
                    case Type_Skill_Boss.Skill_P:
                        m_Model_Info_Skill_P = new Model_Info_Skill(data_Info_Skill);
                        break;
                }
            }
        }
    }

    public virtual void Set_Active_Skill_L()
    {
    }

    public virtual void Set_Inactive_Skill_L()
    {
    }

    // Làm choáng mọi kẻ địch trong 1s ở phạm vi 10 | CD: 25s

    #region ------------------ Skill A ---------------------

    Tween m_Tween_Start_CD_Skill_A;

    private void Set_Active_Skill_A()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (!m_Is_CD_Skill_A)
        {
            if (!m_Is_Active_Skill_A)
            {
                m_Is_Active_Skill_A = true;
                Start_Using_Skill_A();

                Remove_Tween_DelayedCall(m_Tween_Start_CD_Skill_A);
                m_Tween_Start_CD_Skill_A = DOVirtual.DelayedCall(m_Model_Info_Skill_A.time_Exist,
                    () => { Start_CD_Skill_A(); }, false);

                Check_Can_Active_Skill();
            }
        }
    }

    List<Turret_Controller> m_All_Turret_Effect_By_Skill_A = new List<Turret_Controller>();
    // List<Golem_Controller> m_All_Golem_Effect_By_Skill_A = new List<Golem_Controller>();

    private List<Turret_Penetration> m_All_Turret_Penetation = new List<Turret_Penetration>();


    [SerializeField] LayerMask m_Stun_Layer;
    Collider2D[] colliders;
    Turret_Controller turret_Controller;
    // Golem_Controller m_Tmp_Golem_Controller;

    Turret_Penetration TurretPenetration;




    //TODO: HỎI A LỘC XEM CÓ SKILL khac CÓ BỊ DÍNH VÀO TurretPenetration
    //xekotoby-----------------------
    private void Start_Using_Skill_A()
    {
        Show_Alert(Type_Alert.Vampire_Use_Skill_A);

        m_All_Turret_Effect_By_Skill_A.Clear();
        //     m_All_Golem_Effect_By_Skill_A.Clear();
        // Tìm tất cả turret trong phạm vi 5
        // 7 : Is Layer Boss
        colliders = Physics2D.OverlapCircleAll(transform.position, 5f, m_Stun_Layer);
        if (colliders != null && colliders.Length > 0)
        {
            for (int i = 0; i < colliders.Length; i++)
            {
                turret_Controller = colliders[i].GetComponent<Turret_Controller>();
                if (turret_Controller != null && turret_Controller.Get_Type_Turret() == Type_Turret.Turret)
                {
                    m_All_Turret_Effect_By_Skill_A.Add(turret_Controller);
                }
                else
                {
                    // m_Tmp_Golem_Controller = colliders[i].GetComponent<Golem_Controller>();
                    // if (m_Tmp_Golem_Controller && m_Tmp_Golem_Controller.Get_Is_Live())
                    // {
                    //     m_All_Golem_Effect_By_Skill_A.Add(m_Tmp_Golem_Controller);
                    // }
                }
            }
        }

        for (int i = 0; i < m_All_Turret_Effect_By_Skill_A.Count; i++)
        {
            if (m_All_Turret_Effect_By_Skill_A[i])
            {
                m_All_Turret_Effect_By_Skill_A[i].Set_Stun(true);
            }
        }

        // for (int i = 0; i < m_All_Golem_Effect_By_Skill_A.Count; i++)
        // {
        //     if (m_All_Golem_Effect_By_Skill_A[i] && m_All_Golem_Effect_By_Skill_A[i].Get_Is_Live())
        //     {
        //         m_All_Golem_Effect_By_Skill_A[i].Set_Stun_By_Skill_A(m_Model_Info_Skill_A.time_Exist, true);
        //     }
        // }
    }

    private void Stop_Using_Skill_A()
    {
        for (int i = 0; i < m_All_Turret_Effect_By_Skill_A.Count; i++)
        {
            if (m_All_Turret_Effect_By_Skill_A[i])
            {
                m_All_Turret_Effect_By_Skill_A[i].Set_Stun(false);
            }
        }

        m_All_Turret_Effect_By_Skill_A.Clear();
    }

    Tween m_Tween_Set_Skill_A_Is_Ready;

    private void Start_CD_Skill_A()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        m_Is_CD_Skill_A = true;
        Stop_Using_Skill_A();

        if (m_CD_SKill_A < 0)
        {
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                m_CD_SKill_A = m_Model_Info_Skill_A.time_CD / 2f;
            }
            else
            {
                m_CD_SKill_A = m_Model_Info_Skill_A.time_CD;
            }
        }

        Remove_Tween_DelayedCall(m_Tween_Set_Skill_A_Is_Ready);
        m_Tween_Set_Skill_A_Is_Ready = DOVirtual.DelayedCall(m_CD_SKill_A, () => { Set_Skill_A_Is_Ready(); }, false);
    }

    private void Set_Skill_A_Is_Ready()
    {
        m_Is_Active_Skill_A = false;
        m_Is_CD_Skill_A = false;
    }

    #endregion

    //"Tăng gấp đôi tốc đánh trong 5s | CD: 60s"	

    #region ------------------ Skill B ---------------------

    Tween m_Tween_Set_Skill_B_Is_Ready;

    private void Start_CD_Skill_B()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        m_Is_Active_Skill_B = false;
        m_Is_CD_Skill_B = true;

        if (m_CD_Skill_B <= 0)
        {
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                m_CD_Skill_B = m_Model_Info_Skill_B.time_CD / 2f;
            }
            else
            {
                m_CD_Skill_B = m_Model_Info_Skill_B.time_CD;
            }
        }

        Remove_Tween_DelayedCall(m_Tween_Set_Skill_B_Is_Ready);
        m_Tween_Set_Skill_B_Is_Ready = DOVirtual.DelayedCall(m_CD_Skill_B, () => { Set_Skill_B_Is_Ready(); }, false);
    }

    private void Set_Skill_B_Is_Ready()
    {
        m_Is_Active_Skill_B = false;
        m_Is_CD_Skill_B = false;
    }

    #endregion

    //"Tăng gấp đôi dame trong 5s | CD: 60s"	

    #region ------------------ Skill C ---------------------

    Tween m_Tween_Set_Skill_C_Is_Ready;

    private void Start_CD_Skill_C()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        m_Is_CD_Skill_C = true;

        //m_Mat_Boss.Update_Color_Materal(m_Mesh_Anim, Data_In_Game.Instance.Get_Color_Boss_Normal());

        if (m_CD_Skill_C <= 0)
        {
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                m_CD_Skill_C = m_Model_Info_Skill_C.time_CD / 2f;
            }
            else
            {
                m_CD_Skill_C = m_Model_Info_Skill_C.time_CD;
            }
        }

        Remove_Tween_DelayedCall(m_Tween_Set_Skill_C_Is_Ready);
        m_Tween_Set_Skill_C_Is_Ready = DOVirtual.DelayedCall(m_CD_Skill_C, () => { Set_Skill_C_Is_Ready(); }, false);
    }

    private void Set_Skill_C_Is_Ready()
    {
        m_Is_Active_Skill_C = false;
        m_Is_CD_Skill_C = false;
    }

    #endregion

    //	Hồi phục 1% hp 1 giây

    #region ------------------ Skill D ---------------------

    Tween m_Tween_Increase_Health_Skill_D;

    private void Set_Active_Skill_D()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        Increase_Health_Skill_D();
    }

    private void Increase_Health_Skill_D()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (m_Health_Bar_UI != null && !m_Health_Bar_UI.Check_Is_Full_Health())
        {
            m_Health_Bar_UI.Increase_Curr_Health(0.01f, () => { });
        }

        Remove_Tween_DelayedCall(m_Tween_Increase_Health_Skill_D);
        m_Tween_Increase_Health_Skill_D =
            DOVirtual.DelayedCall(m_CD_Skill_D, () => { Increase_Health_Skill_D(); }, false);
    }

    #endregion

    //	Mỗi đòn đánh sẽ có 10% hút máu theo damage

    #region ------------------ Skill I ---------------------

    int m_Level_Skill_I;

    private void Set_Active_Skill_I()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        m_Effect_Skill_I.PLay_Effect(true, false);
        m_Level_Skill_I = m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_I);
        if (m_Level_Skill_I > 2)
        {
            m_Level_Skill_I = 2;
        }

        m_Health_Bar_UI.Increase_Curr_Health_By_Number((0.1f * m_Level_Skill_I) * damage);
    }

    #endregion

    //	Tiêu diệt 1 tháp phòng ngự ngẫu nhiên | CD: 120s

    #region ------------------ Skill J ---------------------

    int level_Skill_J;
    bool m_Has_Skill_J;
    Tween m_Tween_Set_Skill_J_Is_Ready;

    private void Loop_Check_Update_Skill_J()
    {
        if (m_Has_Skill_J)
        {
            Update_Skil_J();
        }
    }

    private void Set_Active_Skill_J()
    {
        m_Has_Skill_J = true;
        //Update_Skil_J();
    }

    private void Update_Skil_J()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (!m_Is_Live) return;

        if (!m_Is_Stun && m_Room_Attacking && m_Is_Take_Damaged_To_Room)
        {
            if (!m_Is_Active_Skill_J)
            {
                level_Skill_J = m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_J);
                if (level_Skill_J > 2)
                {
                    level_Skill_J = 2;
                }

                if (m_Room_Attacking.Check_Can_Remove_Random_Turret_In_Room() && !m_Lock_Use_Skill)
                {
                    if (!m_Is_Live) return;
                    m_Is_Active_Skill_J = true;
                    m_Room_Attacking.Remove_Random_Turret_In_Room(level_Skill_J);
                    //xekotoby
                    //TODO FAI HOI A LOC
                    // m_Room_Attacking.Remove_Random_Turret_Penetation_In_Room(level_Skill_J);


                    Lock_Use_Skill();
                    Show_Alert(Type_Alert.Vampire_Use_Skill_J);

                    Remove_Tween_DelayedCall(m_Tween_Set_Skill_J_Is_Ready);

                    if (m_CD_Skill_J <= 0)
                    {
                        m_CD_Skill_J = 120f;
                    }

                    m_Tween_Set_Skill_J_Is_Ready =
                        DOVirtual.DelayedCall(m_CD_Skill_J, () => { Set_Skill_J_Is_Ready(); }, false);

                    Check_Can_Active_Skill();
                }
            }
        }

        //DOVirtual.DelayedCall(0.125f, () => { Update_Skil_J(); });
    }

    private void Set_Skill_J_Is_Ready()
    {
        m_Is_Active_Skill_J = false;
    }

    #endregion

    // Vô hiệu hóa 1 tháp phòng ngự trong 5s | CD: 40s

    #region ------------------ Skill K ---------------------

    Tween m_Tween_Start_CD_Skill_K;

    private void Set_Active_Skill_K()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (!m_Is_CD_Skill_K)
        {
            if (!m_Is_Active_Skill_K)
            {
                // if (m_Is_Attacking_Golem)
                // {
                //     Start_Active_Skill_K_To_Golem();
                // }
                // else
                // {
                if (m_Room_Attacking != null && m_Room_Attacking.Get_Sum_Turret_In_Room() > 0)
                {
                    m_Is_Active_Skill_K = true;
                    Start_Using_Skill_K();

                    Show_Alert(Type_Alert.Vampire_Use_Skill_K);

                    if (m_Time_Active_Skill_K <= 0)
                    {
                        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
                        {
                            m_Time_Active_Skill_K = m_Model_Info_Skill_K.time_Exist / 2f;
                        }
                        else
                        {
                            m_Time_Active_Skill_K = m_Model_Info_Skill_K.time_Exist;
                        }
                    }

                    Remove_Tween_DelayedCall(m_Tween_Start_CD_Skill_K);
                    m_Tween_Start_CD_Skill_K =
                        DOVirtual.DelayedCall(m_Time_Active_Skill_K, () => { Start_CD_Skill_K(); }, false);

                    Check_Can_Active_Skill();
                }
                //  }
            }
        }
    }

    // List<Golem_Controller> m_All_Golem_Effect_By_Skill_K = new List<Golem_Controller>();
    // Golem_Controller m_Tmp_Golem_By_Skill_K;

    // private void Start_Active_Skill_K_To_Golem()
    // {
    //     m_All_Golem_Effect_By_Skill_K.Clear();
    //     // Find all Golem around
    //     colliders = Physics2D.OverlapCircleAll(transform.position, 5f, m_Stun_Layer);
    //     if (colliders != null && colliders.Length > 0)
    //     {
    //         for (int i = 0; i < colliders.Length; i++)
    //         {
    //             m_Tmp_Golem_By_Skill_K = colliders[i].GetComponent<Golem_Controller>();
    //             if (m_Tmp_Golem_By_Skill_K && m_Tmp_Golem_By_Skill_K.Get_Is_Live())
    //             {
    //                 m_All_Golem_Effect_By_Skill_K.Add(m_Tmp_Golem_By_Skill_K);
    //             }
    //         }
    //     }
    //
    //     if (m_All_Golem_Effect_By_Skill_K.Count > 0)
    //     {
    //         m_Is_Active_Skill_K = true;
    //         Show_Alert(Type_Alert.Vampire_Use_Skill_K);
    //
    //         if (m_Time_Active_Skill_K <= 0)
    //         {
    //             if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
    //             {
    //                 m_Time_Active_Skill_K = m_Model_Info_Skill_K.time_Exist / 2f;
    //             }
    //             else
    //             {
    //                 m_Time_Active_Skill_K = m_Model_Info_Skill_K.time_Exist;
    //             }
    //         }
    //
    //         // Check Number Golem Effect
    //         level_Skill_K = m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_K);
    //         if (level_Skill_K > 2)
    //         {
    //             level_Skill_K = 2;
    //         }
    //
    //         int max_Golem_Effect = Mathf.Min(level_Skill_K, m_All_Golem_Effect_By_Skill_K.Count);
    //         m_All_Golem_Effect_By_Skill_K.Shuffle();
    //
    //         for (int i = 0; i < max_Golem_Effect; i++)
    //         {
    //             m_All_Golem_Effect_By_Skill_K[i].Set_Scare(m_Time_Active_Skill_K, true);
    //         }
    //
    //         Remove_Tween_DelayedCall(m_Tween_Start_CD_Skill_K);
    //         m_Tween_Start_CD_Skill_K =
    //             DOVirtual.DelayedCall(m_Time_Active_Skill_K, () => { Start_CD_Skill_K(); }, false);
    //
    //         Check_Can_Active_Skill();
    //     }
    // }

    List<Turret_Controller> m_All_Turret_Effect_By_Skill_K = new List<Turret_Controller>();
    int level_Skill_K;

    private void Start_Using_Skill_K()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        m_All_Turret_Effect_By_Skill_K.Clear();

        level_Skill_K = m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_K);
        if (level_Skill_K > 2)
        {
            level_Skill_K = 2;
        }

        m_All_Turret_Effect_By_Skill_K.AddRange(m_Room_Attacking.Get_Random_Turret(level_Skill_K));

        for (int i = 0; i < m_All_Turret_Effect_By_Skill_K.Count; i++)
        {
            if (m_All_Turret_Effect_By_Skill_K[i])
            {
                m_All_Turret_Effect_By_Skill_K[i].Set_Scare(true);
            }
        }
    }

    private void Stop_Using_Skill_K()
    {
        for (int i = 0; i < m_All_Turret_Effect_By_Skill_K.Count; i++)
        {
            if (m_All_Turret_Effect_By_Skill_K[i])
            {
                m_All_Turret_Effect_By_Skill_K[i].Set_Scare(false);
            }
        }

        m_All_Turret_Effect_By_Skill_K.Clear();
    }

    Tween m_Tween_Set_Skill_K_Is_Ready;

    private void Start_CD_Skill_K()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        m_Is_CD_Skill_K = true;
        Stop_Using_Skill_K();

        if (m_CD_Skill_K <= 0)
        {
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                m_CD_Skill_K = m_Model_Info_Skill_K.time_CD / 2f;
            }
            else
            {
                m_CD_Skill_K = m_Model_Info_Skill_K.time_CD;
            }
        }

        Remove_Tween_DelayedCall(m_Tween_Set_Skill_K_Is_Ready);
        m_Tween_Set_Skill_K_Is_Ready =
            DOVirtual.DelayedCall(m_Model_Info_Skill_K.time_CD, () => { Set_Skill_K_Is_Ready(); }, false);
    }

    private void Set_Skill_K_Is_Ready()
    {
        m_Is_Active_Skill_K = false;
        m_Is_CD_Skill_K = false;
    }

    #endregion

    // Tăng khả năng hồi phục. Hồi phục 30% máu trong 3s

    #region ------------------ Skill M ---------------------

    Tween m_Tween_CD_SKill_M;

    private void Check_Skill_M()
    {
        if (m_Health_Bar_UI != null && !m_Is_Stun && m_Health_Bar_UI.Get_Percent_Curr_Health() < 0.4f &&
            !m_Is_Moving_To_Health_Point &&
            m_Skill_Boss_Controller.Check_Has_Skill(Type_Skill_Boss.Skill_M) && !m_Is_Active_Skill_M)
        {
            if (!m_Lock_Use_Skill)
            {
                Lock_Use_Skill();
                Start_CD_Skill_M();
            }
        }
    }

    float m_Delta_Health_Restore;
    Tween m_Tween_Restore_Health_By_Skill_M;

    private void Start_CD_Skill_M()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        m_Is_Active_Skill_M = true;

        if (m_CD_Skill_M <= 0)
        {
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                m_CD_Skill_M = m_Model_Info_Skill_M.time_CD / 2f;
            }
            else
            {
                m_CD_Skill_M = m_Model_Info_Skill_M.time_CD;
            }

            m_Time_Active_Skill_M = m_Model_Info_Skill_M.time_Exist;
        }

        Show_Alert(Type_Alert.Vampire_Use_Skill_M);

        // Start Restore Health
        m_Delta_Health_Restore = Get_Health_Restore_By_Skill_M() / 30f;
        Remove_Tween_DelayedCall(m_Tween_Restore_Health_By_Skill_M);
        m_Tween_Restore_Health_By_Skill_M = DOVirtual
            .DelayedCall(0.1f, () => { m_Health_Bar_UI.Increase_Curr_Health_By_Number(m_Delta_Health_Restore); }, false)
            .SetLoops(30).OnComplete(() =>
            {
                if (m_Effect_Skill_M)
                {
                    m_Effect_Skill_M.Stop();
                    m_Effect_Skill_M.gameObject.SetActive(false);
                }
            });

        Remove_Tween_DelayedCall(m_Tween_CD_SKill_M);
        m_Tween_CD_SKill_M = DOVirtual.DelayedCall(m_CD_Skill_M, () => { Set_Skill_M_Is_Ready(); }, false);

        if (m_Effect_Skill_M)
        {
            m_Effect_Skill_M.gameObject.SetActive(true);
            m_Effect_Skill_M.Play();
        }
    }

    private float Get_Health_Restore_By_Skill_M()
    {
        if (m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_M) >= 2)
        {
            return 0.5f * m_Health_Bar_UI.Get_Max_Health();
        }

        return 0.3f * m_Health_Bar_UI.Get_Max_Health();
    }

    private void Set_Skill_M_Is_Ready()
    {
        m_Is_Active_Skill_M = false;
    }

    public void Remove_Tween_DelayedCall(Tween tween)
    {
        if (tween != null)
        {
            tween.Kill(false);
        }

        tween = null;
    }

    #endregion

    // Vampire use charm: Hôn gió

    #region ------------------ Skill N ---------------------

    Tween m_Tween_Start_CD_Skill_N;

    private void Set_Active_Skill_N()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (!m_Is_CD_Skill_N)
        {
            if (!m_Is_Active_Skill_N)
            {
                if (m_Room_Attacking != null && m_Room_Attacking.Get_Sum_Turret_In_Room() > 0)
                {
                    m_Is_Active_Skill_N = true;
                    m_Is_Play_Anim_Skill = true;
                }
            }
        }
    }

    private void On_Ready_Play_Skill_N()
    {
        Show_Alert(Type_Alert.Vampire_Use_Skill_N);

        m_Time_Active_Skill_N = Get_Time_Exist_Skill_N();
        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            m_Time_Active_Skill_N = m_Time_Active_Skill_N / 2f;
        }

        Start_Using_Skill_N();


        Remove_Tween_DelayedCall(m_Tween_Start_CD_Skill_N);
        m_Tween_Start_CD_Skill_N = DOVirtual.DelayedCall(m_Time_Active_Skill_N, () => { Start_CD_Skill_N(); }, false);

        Check_Can_Active_Skill();
    }

    private float Get_Time_Exist_Skill_N()
    {
        if (m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_N) >= 2)
        {
            return 5f;
        }

        return 3f;
    }

    List<Turret_Controller> m_All_Turret_Effect_By_Skill_N = new List<Turret_Controller>();
    // List<Golem_Controller> m_All_Golem_Effect_By_Skill_N = new List<Golem_Controller>();
    // Golem_Controller m_Tmp_Golem_By_Skill_N;
    int level_Skill_N;

    private void Start_Using_Skill_N()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        m_All_Turret_Effect_By_Skill_N.Clear();
        //    m_All_Golem_Effect_By_Skill_N.Clear();

        level_Skill_N = m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_N);
        if (level_Skill_N > 2)
        {
            level_Skill_N = 2;
        }

        // if (m_Is_Attacking_Golem)
        // {
        //     colliders = Physics2D.OverlapCircleAll(transform.position, 5f, m_Stun_Layer);
        //     if (colliders != null && colliders.Length > 0)
        //     {
        //         for (int i = 0; i < colliders.Length; i++)
        //         {
        //             // m_Tmp_Golem_By_Skill_N = colliders[i].GetComponent<Golem_Controller>();
        //             // if (m_Tmp_Golem_By_Skill_N && m_Tmp_Golem_By_Skill_N.Get_Is_Live())
        //             // {
        //             //     m_All_Golem_Effect_By_Skill_N.Add(m_Tmp_Golem_By_Skill_N);
        //             // }
        //         }
        //     }
        //
        //     // for (int i = 0; i < m_All_Golem_Effect_By_Skill_N.Count; i++)
        //     // {
        //     //     if (m_All_Golem_Effect_By_Skill_N[i] && m_All_Golem_Effect_By_Skill_N[i].Get_Is_Live())
        //     //     {
        //     //         m_All_Golem_Effect_By_Skill_N[i].Set_Charm(m_Time_Active_Skill_N,
        //     //             m_Pos_Start_Skill_N != null ? m_Pos_Start_Skill_N.position : transform.position, true);
        //     //     }
        //     // }
        // }
        // else
        // {
        m_All_Turret_Effect_By_Skill_N.AddRange(m_Room_Attacking.Get_All_Turret_In_Room());

        for (int i = 0; i < m_All_Turret_Effect_By_Skill_N.Count; i++)
        {
            if (m_All_Turret_Effect_By_Skill_N[i])
            {
                m_All_Turret_Effect_By_Skill_N[i]
                    .Set_Charm(m_Pos_Start_Skill_N != null ? m_Pos_Start_Skill_N.position : transform.position,
                        true);
            }
        }
        // }
    }

    private void Stop_Using_Skill_N()
    {
        for (int i = 0; i < m_All_Turret_Effect_By_Skill_N.Count; i++)
        {
            if (m_All_Turret_Effect_By_Skill_N[i])
            {
                m_All_Turret_Effect_By_Skill_N[i].Set_Charm(transform.position, false);
            }
        }

        m_All_Turret_Effect_By_Skill_N.Clear();
    }

    Tween m_Tween_Set_Skill_N_Is_Ready;

    private void Start_CD_Skill_N()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        m_Is_CD_Skill_N = true;
        Stop_Using_Skill_N();

        if (m_CD_Skill_N <= 0)
        {
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                m_CD_Skill_N = m_Model_Info_Skill_N.time_CD / 2f;
            }
            else
            {
                m_CD_Skill_N = m_Model_Info_Skill_N.time_CD;
            }
        }

        Remove_Tween_DelayedCall(m_Tween_Set_Skill_N_Is_Ready);
        m_Tween_Set_Skill_N_Is_Ready = DOVirtual.DelayedCall(m_CD_Skill_N, () => { Set_Skill_N_Is_Ready(); }, false);
    }

    private void Set_Skill_N_Is_Ready()
    {
        m_Is_Active_Skill_N = false;
        m_Is_CD_Skill_N = false;
    }

    #endregion


    // dan nguyen  :  danh cho tuong danh xa

    #region -----------------------Skill_O---------

    Tween m_Tween_Start_CD_Skill_O;

    private void Set_Active_Skill_O()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        //        Debug.LogError(m_Is_CD_Skill_O + " " + "m_Is_Active_Skill_O" + m_Is_Active_Skill_O);
        if (!m_Is_CD_Skill_O)
        {
            if (!m_Is_Active_Skill_O)
            {
                if (m_Room_Attacking != null && m_Room_Attacking.Get_Door_Of_Room() != null)
                {
                    m_Is_Active_Skill_O = true;
                    if (Game_Controller.Get_Is_End_Level()) return;
                    if (m_Time_Active_Skill_O <= 0)
                    {
                        Debug.LogError("Skill o  thuc thi");
                        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
                        {
                            m_Time_Active_Skill_O = m_Model_Info_Skill_O.time_Exist / 2f;
                        }
                        else
                        {
                            m_Time_Active_Skill_O = m_Model_Info_Skill_O.time_Exist;
                        }
                    }

                    Remove_Tween_DelayedCall(m_Tween_Start_CD_Skill_O);
                    m_Tween_Start_CD_Skill_O =
                        DOVirtual.DelayedCall(m_Time_Active_Skill_O, () => { Start_CD_Skill_O(); }, false);

                    Check_Can_Active_Skill();
                }
                //}
            }
        }
    }

    Tween m_Tween_Set_Skill_O_Is_Ready;

    private void Start_CD_Skill_O()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        m_Is_CD_Skill_O = true;
        //  Stop_Using_Skill_O();

        if (m_CD_Skill_O <= 0)
        {
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                m_CD_Skill_O = m_Model_Info_Skill_O.time_CD / 2f;
            }
            else
            {
                m_CD_Skill_O = m_Model_Info_Skill_O.time_CD;
            }
        }

        Remove_Tween_DelayedCall(m_Tween_Set_Skill_O_Is_Ready);
        m_Tween_Set_Skill_O_Is_Ready =
            DOVirtual.DelayedCall(m_Model_Info_Skill_O.time_CD, () => { Set_Skill_O_Is_Ready(); }, false);
    }

    private void Set_Skill_O_Is_Ready()
    {
        m_Is_Active_Skill_O = false;
        m_Is_CD_Skill_O = false;
    }

    internal bool Get_Skill_O_Is_Ready()
    {
        return m_Is_Active_Skill_O;
    }

    internal void Set_Skill_O_Active(bool isActive)
    {
        m_Is_Active_Skill_O = isActive;
    }

    #endregion

    // trieu hoi dan doi

    #region -----------------------Skill_P---------

    Tween m_Tween_Start_CD_Skill_P;

    private void Set_Active_Skill_P()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (!m_Is_CD_Skill_P) // dem thoi gian
        {
            if (!m_Is_Active_Skill_P)
            {
                if (m_Room_Attacking != null && m_Room_Attacking.Get_Sum_Turret_In_Room() > 0)
                {
                    m_Is_Active_Skill_P = true;
                    Start_Using_Skill_P();

                    //      Show_Alert(Type_Alert.Vampire_Use_Skill_P);

                    if (m_Time_Active_Skill_P <= 0)
                    {
                        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
                        {
                            m_Time_Active_Skill_P = m_Model_Info_Skill_P.time_Exist / 2f; // thoi gian su dung skill P
                        }
                        else
                        {
                            m_Time_Active_Skill_P = m_Model_Info_Skill_P.time_Exist;
                        }
                    }

                    Remove_Tween_DelayedCall(m_Tween_Start_CD_Skill_P);
                    m_Tween_Start_CD_Skill_P =
                        DOVirtual.DelayedCall(m_Time_Active_Skill_P, () => { Start_CD_Skill_P(); }, false);

                    Check_Can_Active_Skill();
                }
            }
        }
    }


    List<Turret_Controller> m_All_Turret_Effect_By_Skill_P = new List<Turret_Controller>();
    int level_Skill_P;

    private void Start_Using_Skill_P()
    {
        Debug.LogError(" start using skill P");
        if (Game_Controller.Get_Is_End_Level()) return;

        m_All_Turret_Effect_By_Skill_P.Clear();

        level_Skill_P = m_Skill_Boss_Controller.Get_Level_Skill(Type_Skill_Boss.Skill_P);
        if (level_Skill_P > 2)
        {
            level_Skill_P = 2;
        }

        Show_Alert(Type_Alert.Vampire_Use_Skill_P);

        //TODO  xekototoby trieu hoi 3 con doi


        // for (int i = 0; i < 3; i++)
        // {
        //     if (m_Pos_Summon_Boss.Count > 0)
        //     {
        //         m_Pos_Spawn_Boss = m_Pos_Summon_Boss[i].position;
        //
        //         Spawn_Boss_Summon(m_Pos_Summon_Boss[i]);
        //     }
        //     else
        //     {
        //     }
        // }
    }


    public int FindSingleMissingWithXOR(List<int> numbers, int n)
    {
        // Kiểm tra điều kiện
        if (numbers.Count == 0)
        {
            Debug.LogError("Danh sách phải có đúng n-1 phần tử để tìm 1 số bị thiếu!");
            return 0;
        }

        int xor1 = 0, xor2 = 0;

        // XOR tất cả số từ 1 đến n
        for (int i = 1; i <= n; i++)
        {
            xor1 = xor1 ^ i;
        }

        // XOR tất cả số trong danh sách
        foreach (int num in numbers)
        {
            xor2 = xor2 ^ num;
        }

        // Số bị thiếu
        return xor1 ^ xor2;
    }
    public void Spawn_Boss_Summon(Transform posSpawn, int index)
    {
        Level_Controller level_Controller = Level_Controller.Instance;
        var obj_Boss = Instantiate(
            Data_In_Game.Instance.Get_Data_Prefaps().Get_Prefap_Boss(Type_Player.Bat_Summoned_Boss_Of_Dracula),
            Recycle_Bin.Instance.transform);


        if (level_Controller)
        {
            // vi tri bosssss

            // neu nhu nay thi vi tri bosss laf 3 vi tri cam dau
            //  m_Pos_Spawn_Boss = posSpawn;


            Debug.LogError("Vi tri hoi sinh boss summon");
            obj_Boss.transform.position = posSpawn.position; // SỬA CHỖ NÀY
        }

        if (obj_Boss != null)
        {
            Boss_Summon base_Boss = obj_Boss.GetComponent<Boss_Summon>();

            AddBossSummon(base_Boss, index); // add vao list boss hoi sinh

            if (base_Boss)
            {
                base_Boss.SetSummonBossDad(this);
                base_Boss.SetBossFollow(posSpawn);
                base_Boss.m_Type_Level = this.m_Type_Level; // level== level boss hien tai 
                base_Boss.Set_Level(this.level_Curr); // set level- set bang level boss hien tai 
                base_Boss.m_Room_Attacking = this.m_Room_Attacking;
                Boss_Manager.Instance.Get_All_Obj_Boss().Add(base_Boss); // add vao danh sach boss tong
                Debug.LogError(this.m_Target_Character + " target character" + " m_Room_Attacking " + m_Room_Attacking +
                               "boss " + this);

                //   base_Boss.Start_Attack();
            }
        }
    }
    // private void Stop_Using_Skill_P()
    // {
    //     for (int i = 0; i < m_All_Turret_Effect_By_Skill_P.Count; i++)
    //     {
    //         if (m_All_Turret_Effect_By_Skill_P[i])
    //         {
    //             m_All_Turret_Effect_By_Skill_P[i].Set_Scare(false);
    //         }
    //     }
    //
    //     m_All_Turret_Effect_By_Skill_P.Clear();
    // }

    Tween m_Tween_Set_Skill_P_Is_Ready;

    private void Start_CD_Skill_P()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        m_Is_CD_Skill_P = true;
        //  Stop_Using_Skill_P();

        Debug.LogError("is testing skilll P");

        if (m_CD_Skill_P <= 0)
        {
            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                m_CD_Skill_P = m_Model_Info_Skill_P.time_CD / 2f;
            }
            else
            {
                m_CD_Skill_P = m_Model_Info_Skill_P.time_CD;
            }
        }

        Remove_Tween_DelayedCall(m_Tween_Set_Skill_P_Is_Ready);
        m_Tween_Set_Skill_P_Is_Ready =
            DOVirtual.DelayedCall(m_Model_Info_Skill_P.time_CD, () => { Set_Skill_P_Is_Ready(); }, false);
    }

    private void Set_Skill_P_Is_Ready()
    {
        m_Is_Active_Skill_K = false;
        m_Is_CD_Skill_K = false;
    }

    #endregion


    #region ================ Collider Detect Character : Find and Kill ======================


    [SerializeField]
    Collider_Detect_Character m_Collider_Detect_Character;

    [SerializeField] internal Transform m_Target_Character;

    public Transform Get_Target_Character()
    {
        return m_Target_Character;
    }

    public Character_Controller Get_Target_Character_Controller()
    {
        if (m_Target_Character)
        {
            return m_Target_Character.GetComponent<Character_Controller>();
        }

        return null;
    }

    public virtual void Set_Target_Character(Transform target)
    {
        m_Target_Character = target;
        m_Is_Attacking_Player = true;
        Debug.Log("======> Set_Target_Character");
        if (m_Target_Character)
        {
            m_Boss_Movement.Move_To_Character();
        }
    }

    public void Reset_Detect_Character()
    {
        if (m_Collider_Detect_Character)
        {
            m_Collider_Detect_Character.Reset_Lock_Character();
        }

        m_Target_Character = null;
    }

    #endregion

    #region =============== Get Random Room ================

    [SerializeField] int m_Turn_Force_Has_Player;
    [SerializeField] int m_Count_Room_Has_Player;

    private void Init_Turn_Force_Has_Player(int sum_Player)
    {
        if (sum_Player <= 2)
        {
            m_Turn_Force_Has_Player = 2;
        }
        else
        {
            if (m_Type_Level == Type_Level.Normal || m_Type_Level == Type_Level.Hard)
            {
                m_Turn_Force_Has_Player = 3;
            }
            else
            {
                m_Turn_Force_Has_Player = UnityEngine.Random.Range(3, 4);
            }
        }
    }

    [SerializeField] List<Room_Controller> m_List_Room_Will_Attacking = new List<Room_Controller>();
    List<Room_Controller> m_List_Room_Temp = new List<Room_Controller>();
    internal Room_Controller m_Room_Will_Attacking;

    public void Check_Data_Room_Will_Attacking()
    {
        for (int i = m_List_Room_Will_Attacking.Count - 1; i >= 0; i--)
        {
            m_Room_Will_Attacking = m_List_Room_Will_Attacking[i];
            if (m_Room_Will_Attacking == null || m_Room_Will_Attacking.Get_Type_Player() == Type_Player.None)
            {
                m_List_Room_Will_Attacking.RemoveAt(i);
            }
        }
    }

    public int Get_Count_List_Room_Will_Attacking()
    {
        return m_List_Room_Will_Attacking.Count;
    }


    Room_Controller m_Tmp_room_Has_Character;
    Room_Controller m_Tmp_Room_Target;
    bool m_Has_Bed_Not_Kill;

    public virtual Room_Controller Get_Random_Room_Has_Player()
    {
        try
        {
            Debug.LogError("Set_Data_Boss 23");
            if (m_Is_Force_Attack_Player)
            {
                m_Is_Force_Attack_Player = false;
                return Level_Controller.Instance.Get_Room_Curr_Player();
            }
            Debug.LogError("Set_Data_Boss 27");

            if (RootManager.Check_AB_Boss_Line_Up())
            {
                return Level_Controller.Instance.Find_Room_V2(m_Room_Attacking, this);
            }
            else
            {
                return Find_Room_V1();
            }
        }
        catch (Exception)
        {
            return null;
        }
    }

    int m_Index_Check_Turn_Force_AI_ATK = 1;

    private Room_Controller Find_Room_V1()
    {
        try
        {
            Debug.LogError("Find Room v1");
            if (m_Is_Force_Attack_Player)
            {
                m_Is_Force_Attack_Player = false;
                m_Tmp_Moving_From_Health_Point = false;
                return Level_Controller.Instance.Get_Room_Curr_Player();
            }

            m_Tmp_room_Has_Character = null;
            m_Tmp_Room_Target = null;
            m_Has_Bed_Not_Kill = false;

            m_List_Room_Temp.Clear();
            m_List_Room_Temp.AddRange(Level_Controller.Instance.Get_All_Room_Has_Player());

            for (int i = 0; i < m_List_Room_Temp.Count; i++)
            {
                if (m_List_Room_Temp[i] && m_List_Room_Temp[i].Check_Bed_Not_Kill())
                {
                    m_Has_Bed_Not_Kill = true;
                    m_Tmp_Moving_From_Health_Point = false;
                    return m_List_Room_Temp[i];
                }
            }

            if (Level_Controller.Instance.Get_Count_All_Room_Has_Player() == 2)
            {
                m_Count_Room_Has_Player += 1;
                m_Tmp_Moving_From_Health_Point = false;
                return Level_Controller.Instance.Get_Room_Has_Player_By_Index(m_Count_Room_Has_Player % 2);
            }
            else if (Level_Controller.Instance.Get_Count_All_Room_Has_Player() == 1)
            {
                m_Tmp_Moving_From_Health_Point = false;
                return Level_Controller.Instance.Get_Room_Has_Player_By_Index(0);
            }

            Check_Data_Room_Will_Attacking();

            if (m_List_Room_Will_Attacking.Count <= 0)
            {
                m_List_Room_Will_Attacking.AddRange(Level_Controller.Instance.Get_All_Room_Has_Player());
                m_List_Room_Will_Attacking.Shuffle();
                if (m_Turn_Force_Has_Player > m_List_Room_Will_Attacking.Count)
                {
                    m_Turn_Force_Has_Player = m_List_Room_Will_Attacking.Count;
                }
            }

            if (m_List_Room_Will_Attacking == null || m_List_Room_Will_Attacking.Count <= 0)
            {
                m_Tmp_Moving_From_Health_Point = false;
                return m_Tmp_Room_Target;
            }

            m_Tmp_room_Has_Character = Get_Room_Has_Player_In_List_Room_Will_Attacking();

            if (m_Tmp_room_Has_Character)
            {
                if (m_Has_Bed_Not_Kill)
                {
                    m_Tmp_Moving_From_Health_Point = false;
                    return m_Tmp_room_Has_Character;
                }
                else
                {
                    m_Count_Room_Has_Player += 1;
                    if (m_Count_Room_Has_Player == 1)
                    {
                        m_Tmp_Moving_From_Health_Point = false;
                        return m_Tmp_room_Has_Character;
                    }

                    if (m_Count_Room_Has_Player % 2 == 0)
                    {
                        m_Tmp_Moving_From_Health_Point = false;
                        return m_Tmp_room_Has_Character;
                    }
                }
            }
            else
            {
                m_Tmp_Room_Target = m_List_Room_Will_Attacking[0];
                if (Level_Controller.Instance.Get_Count_All_Room_Has_Player() == 1)
                {
                    m_Tmp_Moving_From_Health_Point = false;
                    return m_Tmp_Room_Target;
                }

                if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
                {
                    if (RootManager.Get_Type_AI_Boss() == Type_AI_Boss.AI_ATK)
                    {
                        m_Index_Check_Turn_Force_AI_ATK += 1;
                        if (m_Tmp_Moving_From_Health_Point)
                        {
                            if (Level_Controller.Instance.Get_Room_Curr_Player().Check_Player_Is_Full_Health()
                                && m_Room_Attacking && m_Room_Attacking.transform.GetInstanceID() !=
                                Level_Controller.Instance.Get_Room_Curr_Player().transform.GetInstanceID())
                            {
                                m_Count_Room_Has_Player = 0;
                                Init_Turn_Force_Has_Player(Level_Controller.Instance.Get_Count_All_Room_Has_Player());
                                return Level_Controller.Instance.Get_Room_Curr_Player();
                            }
                        }
                        else
                        {
                            if (
                                (m_Room_Attacking == null && Level_Controller.Instance.Get_Room_Curr_Player()
                                    .Check_Player_Is_Full_Health()) ||
                                (m_Room_Attacking &&
                                 m_Room_Attacking.transform.GetInstanceID() != Level_Controller.Instance
                                     .Get_Room_Curr_Player().transform.GetInstanceID() &&
                                 Level_Controller.Instance.Get_Room_Curr_Player().Check_Player_Is_Full_Health())
                            ////&& m_Index_Check_Turn_Force_AI_ATK % 2 == 0
                            )
                            {
                                m_Count_Room_Has_Player = 0;
                                Init_Turn_Force_Has_Player(Level_Controller.Instance.Get_Count_All_Room_Has_Player());
                                return Level_Controller.Instance.Get_Room_Curr_Player();
                            }
                        }


                        m_Tmp_Moving_From_Health_Point = false;
                        if (m_Tmp_Room_Target.Get_Player_Owner() == Game_Controller.Instance.Get_Player_Curr())
                        {
                            m_List_Room_Will_Attacking.RemoveAt(0);
                            m_Tmp_Room_Target = m_List_Room_Will_Attacking[0];
                        }

                        m_Count_Room_Has_Player += 1;

                        if (m_Count_Room_Has_Player >= m_Turn_Force_Has_Player)
                        {
                            m_Count_Room_Has_Player = 0;
                            Init_Turn_Force_Has_Player(Level_Controller.Instance.Get_Count_All_Room_Has_Player());
                            m_Tmp_Moving_From_Health_Point = false;
                            return Level_Controller.Instance.Get_Room_Curr_Player();
                        }
                        else
                        {
                            m_List_Room_Will_Attacking.RemoveAt(0);
                        }
                    }
                    else
                    {
                        if (m_Tmp_Room_Target.Get_Player_Owner() == Game_Controller.Instance.Get_Player_Curr())
                        {
                            m_List_Room_Will_Attacking.RemoveAt(0);
                            m_Tmp_Room_Target = m_List_Room_Will_Attacking[0];
                        }

                        m_Count_Room_Has_Player += 1;

                        if (m_Count_Room_Has_Player >= m_Turn_Force_Has_Player)
                        {
                            m_Count_Room_Has_Player = 0;
                            Init_Turn_Force_Has_Player(Level_Controller.Instance.Get_Count_All_Room_Has_Player());
                            m_Tmp_Moving_From_Health_Point = false;
                            return Level_Controller.Instance.Get_Room_Curr_Player();
                        }
                        else
                        {
                            m_List_Room_Will_Attacking.RemoveAt(0);
                        }
                    }
                }
            }

            m_Tmp_Moving_From_Health_Point = false;
            return m_Tmp_Room_Target;
        }
        catch (Exception)
        {
            return null;
        }
    }

    public void Add_Data_List_Room_Will_Attacking(List<Room_Controller> List_Room_Will_Attacking)
    {
        m_List_Room_Will_Attacking.Clear();
        m_List_Room_Will_Attacking.AddRange(List_Room_Will_Attacking);
        m_List_Room_Will_Attacking.Shuffle();
    }

    public Room_Controller Get_Room_Has_Player_In_List_Room_Will_Attacking()
    {
        for (int i = 0; i < m_List_Room_Will_Attacking.Count; i++)
        {
            if (m_List_Room_Will_Attacking[i] && m_List_Room_Will_Attacking[i].Get_Has_Character_Inside_Room())
            {
                return m_List_Room_Will_Attacking[i];
            }
        }

        return null;
    }

    public Room_Controller Get_Room_In_List_Room_Will_Attacking(int index)
    {
        try
        {
            return m_List_Room_Will_Attacking[index];
        }
        catch (Exception)
        {
            return null;
        }
    }

    public void Remove_Room_In_List_Room_Will_Attacking(int index)
    {
        //try
        // {
        m_List_Room_Will_Attacking.RemoveAt(index);
        // }
        //  catch (Exception)
        // {
        //}
    }

    #endregion

    //[SerializeField] bool m_Is_Test_Move_To_Door;

    //private void Update()
    //{
    //    if (m_Is_Test_Move_To_Door)
    //    {
    //        m_Is_Test_Move_To_Door = false;
    //        Start_Move_To_Door();
    //    }
    //}

    #endregion

    public void Force_Move_And_Attack_Door(Room_Controller room_Controller)
    {
        m_Is_Spam_Attack = false;
        m_Room_Attacking = room_Controller;
        //Move_And_Attack_Door();

        if (RootManager.Check_AB_Boss_Line_Up())
        {
            if (m_Room_Attacking.Get_Count_Boss_Attacking() < 2)
            {
                m_Room_Attacking.Add_Boss_Attacking(this, false);
                Move_And_Attack_Door();
            }
            else
            {
                // TODO: Move to pos Line up
                Move_To_Line_Up();
            }
        }
        else
        {
            m_Room_Attacking.Add_Boss_Attacking(this, false);
            Move_And_Attack_Door();
        }

        //if (m_Room_Attacking.Get_Count_Boss_Attacking() < 2)
        //{
        //    m_Room_Attacking.Add_Boss_Attacking(this, false);
        //    Move_And_Attack_Door();
        //}
        //else
        //{
        //    // TODO: Move to pos Line up
        //    Move_To_Line_Up();
        //}
    }

    public void Moving_To_Line_Up([Bridge.Ref] Vector3 pos_Move, [Bridge.Ref] Vector3 pos_Look_At)
    {
        CancelInvoke(nameof(Start_Attack));
        Play_Animation(Type_Animation.Run);
        Debug.Log(transform.GetInstanceID() + "===> Set_Start_Move_To_Point | Moving_To_Line_Up()");
        m_Boss_Movement.Set_Start_Move_To_Point(pos_Move, pos_Look_At, () =>
        {
            Cancle_Start_Move_To_Door();
            CancelInvoke(nameof(Start_Attack));
            Play_Animation(Type_Animation.Idle);
        });

        if (!m_Moving_From_Health_Point && Game_Controller.Instance.Get_Sum_Player_In_Map() > 1 &&
            m_Is_Take_Damaged_To_Room)
        {
            Check_Stun_By_Trap();
        }
        else
        {
            m_Moving_From_Health_Point = false;
        }
    }

    #region =========== Check Stun By Item SP ==================

    private void Check_Active_Stun_By_Item_SP()
    {
        if (!m_Is_Live) return;

        if (m_Is_Stun_By_Item_SP_Stun)
        {
            //m_Time_Stun = 5f;
            m_Is_Stun_By_Item_SP = true;
            Set_Stun_Boss();
        }
        else
        {
            m_Is_Stun_By_Item_SP = false;
            Reset_Status_Effect_Stun_By_Item_SP();
        }
    }

    #endregion

    #region =========== Check Stun By Skill 2 Eilif ==================

    private void Check_Active_Stun_By_Skill_2_Eilif()
    {
        if (!m_Is_Live) return;

        if (m_Is_Stun_By_Skill_2_Eilif)
        {
            //m_Time_Stun = 5f;
            m_Is_Stun_By_Eilif = true;
            Set_Stun_Boss();
        }
        else
        {
            m_Is_Stun_By_Eilif = false;
            Reset_Status_Effect_Stun_By_Skill_2_Eilif();
        }
    }

    // updateofjura

    #endregion

    //xekotoby


    #region =========== Check Stun By Skill 2 Safeguard ==================

    private void Check_Active_Stun_By_Skill_2_Safeguard()
    {
        if (!m_Is_Live) return;

        if (m_Is_Stun_By_Skill_2_Safeguard)
        {
            //m_Time_Stun = 5f;
            m_Is_Stun_By_Safeguard = true;
            Set_Stun_Boss();
        }
        else
        {
            m_Is_Stun_By_Safeguard = false;
            Reset_Status_Effect_Stun_By_Skill_2_Safeguard();
        }
    }

    #endregion

    #region =========== Check Penetation By Bullet==================

    private void Check_Active_Penetation_By_Bullet()
    {
        if (!m_Is_Live) return;

        if (m_Is_Penetation)
        {
            DOVirtual.DelayedCall(5f, () => { m_Is_Penetation = false; });
        }
    }

    #endregion


    #region ============== Config Attack Golem ==============



    // internal Boss_Attack_Golem m_Boss_Attack_Golem;

    // [SerializeField] Transform m_Pos_Golem_Left;
    // [SerializeField] Transform m_Pos_Golem_Right;
    // [SerializeField] internal bool m_Is_Attacking_Golem;

    //
    // bool m_Call_Start_Move_To_Door_From_Golem;
    // bool m_Is_Moving_Attack_Door_Pause_By_Golem;
    // float m_Time_Start_Attack_Golem;


    //updateofjura
    //temp_dooor
    [SerializeField] Temp_Door m_Temp_Door_Controller;

    //updateofjura
    [SerializeField] bool m_Is_Attacking_TempDoor;

    // public void Set_Target_Golem(Golem_Controller golem_Controller)
    // {
    //     if (m_Boss_Attack_Golem && !m_Is_Moving_To_Health_Point)
    //     {
    //         Debug.Log("=====>>>>> Set_Target_Golem ");
    //         m_Time_Start_Attack_Golem = Time.time;
    //         if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story ||
    //             DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
    //         {
    //             Cancle_Start_Move_To_Door();
    //             Delay_Start_Move_To_Door(m_Time_Attack_Door);
    //         }
    //
    //         if (!m_Is_Attacking_Player)
    //         {
    //             m_Is_Moving_Attack_Door_Pause_By_Golem = true;
    //         }
    //
    //         m_Call_Start_Move_To_Door_From_Golem = true;
    //
    //         m_Boss_Movement.Stop_Move();
    //         m_Boss_Movement.Play_Animation(Type_Animation.Idle);
    //
    //         m_Boss_Attack_Golem.Move_And_Attack_Golem(golem_Controller);
    //     }
    // }

    // public void Take_Damage_To_Golem()
    // {
    //     if (m_Boss_Attack_Golem)
    //     {
    //         if (Get_Boss_ADC())
    //         {
    //             m_Boss_Attack_Golem.Take_Damage_To_Golem_Of_ADC(Get_Damage_Attack(),
    //                 m_Room_Attacking.Get_Bed_Controller().Get_Golem());
    //         }
    //         else
    //         {
    //             m_Boss_Attack_Golem.Take_Damage_To_Golem(Get_Damage_Attack());
    //         }
    //     }
    // }

    public void Take_Damage_To_Temp_Door()
    {
        if (m_Temp_Door_Controller)
        {
            m_Temp_Door.Take_Damage_To_Temp_Door(Get_Damage_Attack());
        }
    }





    [SerializeField] LayerMask m_Layer_Boss;
    // Golem_Controller m_Tmp_Golem;

    private void Notify_Golem_Near_Move_To_Default()
    {
        colliders = Physics2D.OverlapCircleAll(transform.position, 2f, m_Layer_Boss);
        if (colliders != null && colliders.Length > 0)
        {
            for (int i = 0; i < colliders.Length; i++)
            {
                // m_Tmp_Golem = colliders[i].GetComponent<Golem_Controller>();
                // if (m_Tmp_Golem && m_Tmp_Golem.Get_Is_Live())
                // {
                //     {
                //         m_Tmp_Golem.Get_Golem_Attack().End_Attack_Boss();
                //     }
                // }
            }
        }
    }

    private void Continue_Move()
    {
        Debug.LogError("Continue_Move 1");
        CancelInvoke(nameof(Loop_Check_Stun));
        if (Get_Is_Stunning())
        {
            CancelInvoke(nameof(Loop_Check_Stun));
            InvokeRepeating(nameof(Loop_Check_Stun), 0, 0.125f);
            return;
        }

        Debug.LogError("Continue_Move 2");
        if (m_Is_Attacking_Player)
        {
            Debug.LogError("Continue_Move 3");
            //m_Is_Moving_Attack_Door_Pause_By_Golem = false;
            Start_Move_Attack_Player();

            // Continue move attack Player
        }
        // else if (m_Is_Moving_Attack_Door_Pause_By_Golem)
        // {
        //     Debug.LogError("Continue_Move 4");
        //     m_Is_Moving_Attack_Door_Pause_By_Golem = false;
        //     m_Is_Lock_Anim_Attack = false;
        //     // Continue move attack Door
        //     Move_And_Attack_Door(true);
        // }
        else
        {
            Debug.LogError("Continue_Move 5");
            m_Is_Lock_Anim_Attack = false;

            Start_Move_And_Attack_Door(true);
        }
    }

    private void Loop_Check_Stun()
    {
        if (!Get_Is_Stunning())
        {
            Continue_Move();
        }
    }

    // public Golem_Controller Get_Curr_Golem_Attack()
    // {
    //     return m_Boss_Attack_Golem.Get_Curr_Golem();
    // }

    // public void Set_Is_Attacking_Golem(bool is_Attacking)
    // {
    //     m_Is_Attacking_Golem = is_Attacking;
    //     if (m_Boss_Attack_Golem.Get_Curr_Golem())
    //     {
    //         if (m_Is_Attacking_Golem)
    //         {
    //             if (m_Room_Attacking)
    //             {
    //                 m_Room_Attacking.Stop_Status_Attacking(this);
    //             }
    //
    //             m_Room_Attacking = m_Boss_Attack_Golem.Get_Curr_Golem().Get_Room_Controller(); // tan cong golem
    //             m_Room_Attacking.Set_Status_Attacking(this, true);
    //         }
    //         else
    //         {
    //             if (m_Room_Attacking)
    //             {
    //                 m_Room_Attacking.Stop_Status_Attacking(this);
    //             }
    //         }
    //     }
    // }

    // public bool Get_Is_Attacking_Golem()
    // {
    //     return m_Is_Attacking_Golem;
    // }


    //updateofjura



    #endregion


    #region mission destrory

    internal List<int> listMission = new List<int>();


    public void ListMission()
    {
        listMission.AddRange(Database.instance.ListMissionPass(
            Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()),
            Database.instance.GetHardLevel()));
    }


    private Vector2Int typeMission = new Vector2Int();

    private int countKillBoss = 0;

    /// <summary>
    /// load mission voi boss
    /// </summary>
    public void TypeMissionBoss()
    {
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() != Type_Mode_Gameplay.Story_Level) return;
        // if(Database.instance.GetHardLevel()&& DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level )return;
        Debug.LogError("Check so lan khi boss chet bi goi lai");
        int levelStoryCur = Database.instance.Get_Current_Loading_Level_Story(false); // lay level hien tai cua story
        switch (typeMission.y)
        {
            case 0:
                countKillBoss = 1;
                MissionKillNumberBoss(levelStoryCur);
                break;
            case 1:
                MissionKillTargetBoss(levelStoryCur, Type_Player.Bugbear_Butler_Mini_Boss);
                break;
            case 2:
                countKillBoss = 2;
                MissionKillNumberBoss(levelStoryCur);
                break;
            case 3:
                MissionKillTargetBoss(levelStoryCur, Type_Player.Crazy_Bugbear_Mini_Boss);
                break;
            case 4:
                MissionKillTargetBoss(levelStoryCur, Type_Player.Boss_Dracula);

                break;
            default: break;
        }
    }

    internal void MissionKillNumberBoss(int levelStoryCur)
    {
        //giet xong Boss
        countKillBoss--;
        if (countKillBoss == 0)
        {
            int a = Database.instance.CheckIndexMissionPass(levelStoryCur, typeMission.x,
                Database.instance.GetHardLevel());


            Debug.LogError("load co bi lap khong select  MissionKillNumberBoss");
            Database.instance.Select_Mission_Complete(levelStoryCur, a, Database.instance.GetHardLevel());
        }
    }

    internal void MissionKillTargetBoss(int levelStoryCur, Type_Player typePlayer)
    {
        if (m_Type_Boss == typePlayer)
        {
            int a = Database.instance.CheckIndexMissionPass(levelStoryCur, typeMission.x,
                Database.instance.GetHardLevel());

            Debug.LogError("load co bi lap khong select  MissionKillTargetBoss");
            Database.instance.Select_Mission_Complete(levelStoryCur, a, Database.instance.GetHardLevel());
        }
    }
    // internal void MissionKillTimeBoss(int levelStoryCur, Status_Win_Lose typePlayer)
    // {
    //
    //     if (Game_Controller.Instance.win == typePlayer)
    //     {
    //         Database.instance.CheckIndexMissionPass(levelStoryCur,typeMission.x);
    //     }
    // }


    public void ConfigMissionUpgrade()
    {
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() != Type_Mode_Gameplay.Story_Level) return;

        ListMission();
        bool isCheck = false;

        for (int i = 0; i < listMission.Count && !isCheck; i++)
        {
            switch (listMission[i])
            {
                case 9:
                    typeMission = new Vector2Int(listMission[i], 0);
                    isCheck = true;
                    break;
                case 12:
                    typeMission = new Vector2Int(listMission[i], 1);
                    isCheck = true;
                    break;
                case 13:
                    typeMission = new Vector2Int(listMission[i], 2);
                    isCheck = true;

                    break;

                case 16:
                    typeMission = new Vector2Int(listMission[i], 3);
                    isCheck = true;


                    break;

                case 17:
                    typeMission = new Vector2Int(listMission[i], 4);
                    isCheck = true;
                    break;

                default:
                    Debug.Log(" Truong hop khong phai nhiem vu tieu diet" + listMission[i]);
                    // Có thể thêm xử lý cho các trường hợp khác nếu cần
                    break;
            }
        }
    }

    #endregion
}