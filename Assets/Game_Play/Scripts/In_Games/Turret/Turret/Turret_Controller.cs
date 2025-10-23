using UnityEngine;

using DG.Tweening;
using TMPro;
using System.Collections;
using System.Collections.Generic;
using System;
using System.Diagnostics;
using Debug = UnityEngine.Debug;





public class Turret_Controller : Base_Turret_Can_Upgrade
{
    [Header("_____ Turret_Controller _____")]
    [SerializeField]
    float m_Range = 4f;

    [SerializeField] float m_Damage;
    [SerializeField] protected float m_Penetation;
    protected float m_Speed_Move = 15f;
    [SerializeField] float m_CD = 1f;
    [SerializeField] float m_CD_Onslaught = 1.5f;
    [SerializeField] protected Color m_Color_Gizmos;
    [SerializeField] SpriteRenderer m_Model_Chan_De;
    [SerializeField] SpriteRenderer m_Model_Turret;
    [SerializeField] ParticleSystem m_Effect_Upgrade;
    [SerializeField] Bool_Global_Variable m_Live_Data_Turret_Detect_Target;
    [SerializeField] Transform m_Pos_Effect_Stun;
    [SerializeField] Transform m_Pos_Effect_Scare;
    [SerializeField] Transform m_Pos_Effect_Charm;
    [SerializeField] protected Transform m_Pos_Effect_Electric;
    [SerializeField] Transform m_Anim_Collect_Coin;
    [SerializeField] TextMeshPro m_Value_Add_Coin;
    [SerializeField] Transform m_Pos_Effect_Fire;
    [SerializeField] List<int> m_Data_Energy = new List<int>();
    [SerializeField] Transform m_Anim_Collect_Energy;
    [SerializeField] int m_Energy_Increase;
    [SerializeField] TextMeshPro m_Txt_Energy;
    bool m_Is_Playing_Anim_Energy;
    Transform m_Effect_Fire;

    [Header("_______________ Ready Only _______________")]
   
    [SerializeField]
    protected bool m_Is_Stun;

   [SerializeField] protected bool m_Is_Scare;
   [SerializeField] protected bool m_Is_Charm;
   [SerializeField] bool m_Has_Compass;
   [SerializeField] protected bool m_Has_Bibble;
   [SerializeField] bool m_Has_ATM;
   [SerializeField] protected bool m_Has_Electric;
   [SerializeField] Bool_Global_Variable m_Live_Data_Compass_Change;
   [SerializeField] Bool_Global_Variable m_Live_Data_Bibble_Change;
   [SerializeField] Bool_Global_Variable m_Live_Data_ATM_Change;
   [SerializeField] Bool_Global_Variable m_Live_Data_Electric_Change;
   [SerializeField] Bool_Global_Variable m_Live_Data_Item_SP_Speed_X2;
    bool m_Is_Using_Item_SP_Speed_X2;

   
    [SerializeField]
    Transform m_Pos_Tut;

    [SerializeField] Bool_Global_Variable m_Live_Data_Index_Claimed_Mission_Tutorial;
    bool m_Is_Tutorials;
    bool m_Is_Start;

  [SerializeField] private bool m_turret_Bed;


    public bool Get_Is_Attacking()
    {
        return data_Player && m_Target != null && m_Target.GetComponent<Base_Boss>().m_Is_Live && !m_Is_Stun &&
               !m_Is_Scare && !m_Is_Charm;
    }






    public override void Start()
    {
        base.Start();
        m_Is_Tutorials = DataSaved.Get_Current_Loading_Level() == 0 && !DataSaved.Get_Is_Complete_Tutorial() &&
                         DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story;
        m_Order_Default_Look_At_Target = m_Model_Turret.sortingOrder;

        m_Is_Start = true;



    }


    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Add_Turret_In_Room(this);
    }

    public override void Before_Remove_Item()
    {
        if (m_Room_Controller && this != null)
        {
            m_Room_Controller.Remove_Turret_In_Room(this);
        }
    }

    private void OnDisable()
    {
        CancelInvoke(nameof(Fight_Bullet));
        CancelInvoke(nameof(Update_Detect_Target));


        if (tweenRecoil != null)
        {
            tweenRecoil.Kill();
        }




        if (m_Anim_Collect_Coin) m_Anim_Collect_Coin.transform.DOKill(false);
        if (m_Anim_Collect_Energy) m_Anim_Collect_Energy.transform.DOKill(false);

        if (m_Live_Data_Turret_Detect_Target)
        {
            m_Live_Data_Turret_Detect_Target.OnValueChanged.RemoveListener(Update_Detect_Target);
        }

        if (m_Live_Data_Compass_Change)
        {
            m_Live_Data_Compass_Change.OnValueChanged.RemoveListener(On_Data_Compass_Change);
        }

        if (m_Live_Data_Bibble_Change)
        {
            m_Live_Data_Bibble_Change.OnValueChanged.RemoveListener(On_Data_Bibble_Change);
        }

        if (m_Live_Data_ATM_Change)
        {
            m_Live_Data_ATM_Change.OnValueChanged.RemoveListener(On_Data_ATM_Change);
        }

        if (m_Live_Data_Electric_Change)
        {
            m_Live_Data_Electric_Change.OnValueChanged.RemoveListener(On_Data_Electric_Change);
        }

        if (m_Live_Data_Item_SP_Speed_X2)
        {
            m_Live_Data_Item_SP_Speed_X2.OnValueChanged.RemoveListener(Listener_Live_Data_Item_SP_Speed_X2);
        }

        if (m_Live_Data_Index_Claimed_Mission_Tutorial)
        {
            m_Live_Data_Index_Claimed_Mission_Tutorial.OnValueChanged.RemoveListener(
                Listener_Live_Data_Index_Claimed_Mission_Tutorial);
        }
    }

    public override void Add_Listener()
    {
        base.Add_Listener();

        Check_Data_Player();
        if (data_Player == null) return;

        if (data_Player)
        {
            m_Anim_Collect_Energy.gameObject.Set_Active(false);
            if (data_Player.Get_Type_Character() == Type_Character.Sami)
            //   && DataSaved.Get_Is_Unlock_Skill_2(Type_Character.Sami))
            {
                m_Is_Playing_Anim_Energy = true;
            }
            else
            {
                m_Is_Playing_Anim_Energy = false;
            }
        }

        Register_Data_Coin_Energy_Change();

        // Add listener when data Compass Change
        m_Live_Data_Compass_Change = data_Player.Get_Live_Data_Compass_Change();
        if (m_Live_Data_Compass_Change)
        {
            m_Live_Data_Compass_Change.OnValueChanged.AddListener(On_Data_Compass_Change);
        }

        // Add listener when data Bibble Change
        m_Live_Data_Bibble_Change = data_Player.Get_Live_Data_Bibble_Change();
        if (m_Live_Data_Bibble_Change)
        {
            m_Live_Data_Bibble_Change.OnValueChanged.AddListener(On_Data_Bibble_Change);
        }

        // Add listener when data ATM Change
        m_Live_Data_ATM_Change = data_Player.Get_Live_Data_ATM_Change();
        if (m_Live_Data_ATM_Change)
        {
            m_Live_Data_ATM_Change.OnValueChanged.AddListener(On_Data_ATM_Change);
        }

        // Add listener when data Electric Change
        m_Live_Data_Electric_Change = data_Player.Get_Live_Data_Electric_Change();
        if (m_Live_Data_Electric_Change)
        {
            m_Live_Data_Electric_Change.OnValueChanged.AddListener(On_Data_Electric_Change);
        }

        if (m_Live_Data_Turret_Detect_Target)
        {
            m_Live_Data_Turret_Detect_Target.OnValueChanged.AddListener(Update_Detect_Target);
        }

        //CancelInvoke(nameof(Update_Detect_Target));
        //InvokeRepeating(nameof(Update_Detect_Target), 0f, 0.25f);

        m_Effect_Upgrade.PLay_Effect(false);

        if (m_Live_Data_Index_Claimed_Mission_Tutorial &&
            !data_Player.Get_Is_AI() && DataSaved.Get_Current_Loading_Level() == 0 &&
            !DataSaved.Get_Is_Complete_Tutorial() &&
            DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        {
            m_Live_Data_Index_Claimed_Mission_Tutorial.OnValueChanged.AddListener(
                Listener_Live_Data_Index_Claimed_Mission_Tutorial);
        }

        if (data_Player && !data_Player.Get_Is_AI())
        {
            m_Live_Data_Item_SP_Speed_X2 = data_Player.Get_Live_Data_Item_Support_Speed_X2();
            if (m_Live_Data_Item_SP_Speed_X2)
            {
                m_Is_Using_Item_SP_Speed_X2 = m_Live_Data_Item_SP_Speed_X2.Value;
                m_Live_Data_Item_SP_Speed_X2.OnValueChanged.AddListener(Listener_Live_Data_Item_SP_Speed_X2);
            }
        }

        Update_Model_Fire();
    }

    private void Update_Model_Fire()
    {
        if (m_Type_Character == Type_Character.Calida)
        {
            if (m_Effect_Fire == null)
            {
                m_Effect_Fire = Instantiate(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Fire()).transform;
            }

            int index_Level = level_Curr;
            if (index_Level < 0) index_Level = 0;
            if (index_Level >= m_Pos_Effect_Fire.childCount) index_Level = m_Pos_Effect_Fire.childCount - 1;
            m_Effect_Fire.SetParent(m_Pos_Effect_Fire.GetChild(index_Level));
            m_Effect_Fire.localPosition = Vector3.zero;
            m_Effect_Fire.localEulerAngles = Vector3.zero;
            m_Effect_Fire.localScale = new Vector3(1, 1, 1);
        }
    }

    private void Listener_Live_Data_Item_SP_Speed_X2()
    {
        m_Is_Using_Item_SP_Speed_X2 = m_Live_Data_Item_SP_Speed_X2.Value;
    }

    private void Listener_Live_Data_Index_Claimed_Mission_Tutorial()
    {
        m_Pos_Tut.Destroy_All_Children();
    }

    public override void InCrease_Level()
    {
        base.InCrease_Level();
        Game_Controller game_Controller = Game_Controller.Instance;
       

      



        if (m_Has_ATM)
        {
            int level_Turet = level_Curr;

            level_Turet = level_Turet + 1;
            if (level_Turet <= 0)
            {
                level_Turet = 1;
            }

            if (m_Type_Character == Type_Character.Manager)
            {
                level_Turet *= 2;
            }

            if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_22_ATM_Add_1))
            {
                level_Turet += 1;
            }


            m_Room_Controller.ChangeIndexTurretCoinRoom(indexCoinDic, level_Turet);

        }
    }

    public override void Update_Model_Price()
    {
        base.Update_Model_Price();
        Check_Data_Player();
        if (data_Player == null) return;


        m_Range = model_Info_Turret_Curr.model_Skills.range + 1;

        if (data_Player && data_Player.Get_Is_AI())
        {
            ////xekotoby_viet dang ruom ra
            _rankCharacter = Data_In_Game.Instance.Get_Data_Type_Rank_Character().Get_Data_Info_Character(
                Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(data_Player.Get_Type_Character())
                    .m_Rank_Character);
            Config_Dame_Bonus_Total();
            float m_dame_EachLevel = _rankCharacter
                .m_Info_Type_Rank[0]
                .m_Dame_Increase_With_Each_Level_Star;
            float m_dame_Star = _rankCharacter
                .m_Info_Type_Rank[0]
                .m_Dame_Increase_With_Each_Star;
            float m_dame_Bonus = 0f;


            m_dame_Bonus +=
                (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character)) * m_dame_EachLevel +
              m_dame_Star + m_Dame_Total + Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character).m_Atk;
            Debug.Log("dame tong " + m_Dame_Total + "dame nhan vat " + Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character).m_Atk
            + "dame moi lv " + (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character)) * m_dame_EachLevel
            );
            // m_dame_Bonus +=    * (float) Math.Pow(2, ((level_Curr+1) - 1));
            m_dame_Bonus *= (float)Math.Pow(2, ((level_Curr + 1) - 1));
            m_dame_Bonus = (float)Math.Round(m_dame_Bonus, 2);



            //xekotoby




            m_Damage = model_Info_Turret_Curr.model_Skills.damage + m_dame_Bonus;
        }
        else
        {
            _rankCharacter = Data_In_Game.Instance.Get_Data_Type_Rank_Character().Get_Data_Info_Character(
                Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character)
                    .m_Rank_Character);
            Config_Dame_Bonus_Total();
            float m_dame_EachLevel = _rankCharacter
                .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
                .m_Dame_Increase_With_Each_Level_Star;
            float m_dame_Star = _rankCharacter
                .m_Info_Type_Rank[DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character) - 1]
                .m_Dame_Increase_With_Each_Star;
            float m_dame_Bonus = 0f;



            m_dame_Bonus +=
                (DataSaved.Get_Is_Show_Lv_Rank_SKin(m_Type_Character)) * m_dame_EachLevel +
                 m_dame_Star + m_Dame_Total + Data_In_Game.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character).m_Atk;
            m_dame_Bonus *= (float)Math.Pow(2, ((level_Curr + 1) - 1));
            m_dame_Bonus = (float)Math.Round(m_dame_Bonus, 2);





            m_Damage = model_Info_Turret_Curr.model_Skills.damage + (m_dame_Bonus);
        }

        m_CD = model_Info_Turret_Curr.model_Skills.speed;


        m_Penetation = model_Info_Turret_Curr.model_Skills.damage_Penetration;


        if (m_Type_Character == Type_Character.Vampire_Hunter)
        {
            if (data_Player && data_Player.Get_Is_AI() &&
                DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_22_Skill_2_Vampire_Hunter))
            {
                m_Damage *= 1.5f;
            }
            else
            {
                m_Damage *= 1.3f;
            }
        }

        On_Data_Compass_Change();
        On_Data_Bibble_Change();
        On_Data_ATM_Change();
        On_Data_Electric_Change();

        Check_Data_Perk_Increase_Damage();
    }


    private float m_Dame_Total;

    private int starActive = 0;

    public void Config_Dame_Bonus_Total()
    {
        starActive = DataSaved.Get_Is_Show_Star_Lv_SKin(m_Type_Character);

        m_Dame_Total = 0;

        // mau tong = mau nhan vat + mau star hien tai + (mau moi lv *lv)+?? dang thieu mau vu
        if (starActive == 2)
        {

            m_Dame_Total = _rankCharacter
                .m_Info_Type_Rank[0]
                .m_Dame_Increase_With_Each_Level_Star * (5);

        }

        if (starActive == 3)
        {
            m_Dame_Total += _rankCharacter
                .m_Info_Type_Rank[0]
                .m_Dame_Increase_With_Each_Level_Star * (5);
            m_Dame_Total += _rankCharacter
                                .m_Info_Type_Rank[1]
                                .m_Dame_Increase_With_Each_Level_Star * (10) +
                            _rankCharacter
                                .m_Info_Type_Rank[1]
                                .m_Dame_Increase_With_Each_Star;




        }
    }

    public override void Update_Model_By_Level()
    {
        var data_Sprite_In_Game = Data_In_Game.Instance.Get_Data_Sprite_In_Game();

        if (type_Turret == Type_Turret.Turret_Bed)
        {
            m_Model_Chan_De.sprite = data_Sprite_In_Game.Get_Sprite_Chan_De_Turret_Onslaught();
            m_Model_Turret.sprite = data_Sprite_In_Game.Get_Sprite_Turret_Bed_By_Level(m_Type_Character, level_Curr);
        }
        //xekotoby
        else if (type_Turret == Type_Turret.Turret_Pierce)
        {
            //xekotoby
            //icon- sung tren map- co the khac nhau . nhung phan da la giong
            m_Model_Chan_De.sprite = null;
            m_Model_Turret.sprite =
                data_Sprite_In_Game.Get_Sprite_Turret_Penetation_By_Level(m_Type_Character, level_Curr);
        }
        else
        {
            m_Model_Chan_De.sprite = data_Sprite_In_Game.Get_Sprite_Chan_De_Turret(level_Curr);
            m_Model_Turret.sprite = data_Sprite_In_Game.Get_Sprite_Turret_By_Level(m_Type_Character, level_Curr);
        }


        if (level_Curr > 0)
        {
            m_Effect_Upgrade.PLay_Effect(true);
        }

        Update_Model_Fire(); //TODO co the thay đổi đạn
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
        if (Game_Controller.Get_Is_End_Level()) return;
        //  Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 1");







        if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;
        //   Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 2");

        if (data_Player == null)
        {
            return;
        }
        //   Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 3");


        if (m_Target == null || (m_Target.GetComponent<Base_Boss>() && !m_Target.GetComponent<Base_Boss>().m_Is_Live))
        {




            //updateofjura
            m_CD_Onslaught = 1.5f;

            var all_Boss = Boss_Manager.Instance.Get_All_Boss();

            float m_Min_Range = int.MaxValue;
            //   Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 7");

            foreach (var item in all_Boss)
            {
                if (item)
                {
                    Debug.Log(transform.GetInstanceID() + " | Update_Detect_Target 15");
                    float distance = Vector2.Distance(transform.position, item.transform.position);
                    if (distance < m_Range && distance < m_Min_Range)
                    {
                        //       Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 16");
                        m_Min_Range = distance;
                        m_Target = item.transform;
                    }
                }
            }

            //   Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 8");
            if (m_Target && m_Target.GetComponent<Base_Boss>().m_Is_Live)
            {
                m_Look_At_Target.Set_Target(m_Target.GetComponent<Base_Boss>().Get_Pos_Take_Damage_Look_At());

                Fight_Bullet();
                //Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 9");
                if (m_Has_Electric)
                {
                    Remove_Effect_Electric();
                    My_Utils.Play_Pref_Effect_No_Destroy(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Electric(),
                        m_Pos_Effect_Electric);
                    // Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 10");
                }
            }
            else
            {
                //  Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 11");
                if (m_Has_Electric)
                {
                    //  Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 12");
                    Remove_Effect_Electric();
                }
            }
        }
        else
        {
            //   Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 4");

            float distance = Vector2.Distance(transform.position, m_Target.position);
            if (distance > m_Range)
            {
                //Debug.Log(transform.GetInstanceID()  + " | Update_Detect_Target 5");

                m_Target = null;
                m_Look_At_Target.Set_Target(null);
                CancelInvoke(nameof(Fight_Bullet));

                if (m_Has_Electric)
                {
                    Remove_Effect_Electric();
                }

                if (m_Has_ATM)
                {
                    m_Room_Controller.ChangeIndexTurretCoinRoom(indexCoinDic, 0);
                }

            }
            else
            {

                if (m_Has_ATM)
                {
                    int level_Turet = level_Curr;

                    level_Turet = level_Turet + 1;
                    if (level_Turet <= 0)
                    {
                        level_Turet = 1;
                    }

                    if (m_Type_Character == Type_Character.Manager)
                    {
                        level_Turet *= 2;
                    }

                    if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_22_ATM_Add_1))
                    {
                        level_Turet += 1;
                    }


                    m_Room_Controller.ChangeIndexTurretCoinRoom(indexCoinDic, level_Turet);

                }

            }
        }
    }

    // Dang ban giup hang xom, ma co con Vampire khac tan cong nha minh, thi chuyen huong ban nha minh
    public virtual void Update_Target_To_Turret(Base_Boss base_Boss)
    {
        // Debug.Log(transform.GetInstanceID()  + " | Update_Target_To_Turret 1");

        if (Game_Controller.Get_Is_End_Level()) return;
        //  Debug.Log(transform.GetInstanceID()  + " | Update_Target_To_Turret 2");

        if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;
        //        Debug.Log(transform.GetInstanceID()  + " | Update_Target_To_Turret 3");

        if (m_Target == null)
        {
            Update_New_Target(base_Boss);
            //Debug.Log(transform.GetInstanceID()  + " | Update_Target_To_Turret 3");

        }
        else
        {
            Base_Boss boss_Curr = m_Target.GetComponent<Base_Boss>();
            if (base_Boss.m_Is_Live)
            {
                if (boss_Curr != null && boss_Curr.Get_Room_Attacking() &&
                    boss_Curr.Get_Room_Attacking().transform.GetInstanceID() !=
                    base_Boss.Get_Room_Attacking().transform.GetInstanceID())
                {
                    Update_New_Target(base_Boss);
                }
            }
            else
            {
                Update_New_Target(base_Boss);
            }
        }
    }

    // tim quai moi
    public virtual void Update_New_Target(Base_Boss base_Boss)
    {
        //  Debug.Log(transform.GetInstanceID()  + " | Update_New_Target 1");

        if (Game_Controller.Get_Is_End_Level()) return;

        //  Debug.Log(transform.GetInstanceID()  + " | Update_New_Target 2");

        if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;


        // Debug.Log(transform.GetInstanceID()  + " | Update_New_Target 3");

        float distance_To_Boss = Vector2.Distance(transform.position, base_Boss.transform.position);
        if (distance_To_Boss <= m_Range)
        {

            //  Debug.Log(transform.GetInstanceID()  + " | Update_New_Target 4");
            m_Target = base_Boss.transform;
            m_Look_At_Target.Set_Target(m_Target.GetComponent<Base_Boss>().Get_Pos_Take_Damage_Look_At());

            //  Debug.Log(transform.GetInstanceID()  + " | Update_New_Target 5");
            if (m_Has_Electric)
            {
                Remove_Effect_Electric();
                My_Utils.Play_Pref_Effect_No_Destroy(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Electric(),
                    m_Pos_Effect_Electric);
            }

            //Debug.Log(transform.GetInstanceID()  + " | Update_New_Target 5.5");
            CancelInvoke(nameof(Fight_Bullet));
            Fight_Bullet();

            //  Debug.Log(transform.GetInstanceID()  + " | Update_New_Target 6");
        }


        // Debug.Log(transform.GetInstanceID()  + " | Update_New_Target 7");
    }

    // remove hieu ung electric
    protected void Remove_Effect_Electric()
    {
        m_Pos_Effect_Electric.Destroy_All_Children();
    }

    protected float damage;
    protected Type_Bullet_Skill m_Type_Bullet_Skill;

    // ban sung


    public Tween tweenRecoil;

    [SerializeField] private Transform mIconBullets;

    public virtual void Fight_Bullet()
    {
        // Debug.Log(transform.GetInstanceID()  + " | Fight_Bullet 1");
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;


        // Debug.Log(transform.GetInstanceID()  + " | Fight_Bullet 2");


        if (!m_Is_Stun && !m_Is_Scare && !m_Is_Charm)
        {
            if (data_Player && m_Target != null && m_Target.GetComponent<Base_Boss>().m_Is_Live)
            {


                Debug.Log(transform.GetInstanceID() + " | Fight_Bullet 3");



                Spawn_Bullet();

                if (tweenRecoil != null)
                {
                    tweenRecoil.Kill();
                }

                // Lưu vị trí ban đầu
                float initialY = mIconBullets.localPosition.y;
                float recoilDistance = -0.25f; // Khoảng cách giật lùi (có thể điều chỉnh)

                // Tạo Sequence cho hiệu ứng recoil
                Sequence recoilSequence = DOTween.Sequence();

                // Phần 1: Giật lùi nhanh (di chuyển xuống)
                recoilSequence.Append(mIconBullets.DOLocalMoveY(initialY + recoilDistance, 0.1f)
                    .SetEase(Ease.OutQuad)); // Dùng OutQuad để giật nhanh

                // Phần 2: Trở lại vị trí ban đầu
                recoilSequence.Append(mIconBullets.DOLocalMoveY(initialY, 0.15f)
                    .SetEase(Ease.InOutSine)); // Dùng InOutSine để trở lại mượt mà

                recoilSequence.OnComplete(() =>
                {
                    mIconBullets.localPosition = Vector3.zero;

                });

                // Gán tween để quản lý
                tweenRecoil = recoilSequence;





                Debug.Log(transform.GetInstanceID() + " | Fight_Bullet 4");



            }
        }

        CancelInvoke(nameof(Fight_Bullet));

        m_CD = model_Info_Turret_Curr.model_Skills.speed;

        //updateofjura
        if (m_Type_Character == Type_Character.Onslaught && Get_Type_Turret() == Type_Turret.Turret_Bed)
        {
            m_CD_Onslaught = m_CD_Onslaught - (m_CD_Onslaught * 0.1f);
            if (m_CD_Onslaught <= 0.5f)
            {
                m_CD_Onslaught = 0.5f;
            }
        }

        if (m_Type_Character == Type_Character.Robot_Cyborg)
        {
            m_CD *= 0.8f;
        }

        Check_Data_Perk_Increase_Speed_Atk();

        if (m_Has_Bibble)
        {
            m_CD = m_CD * 0.5f;
        }


        //updateofjura  
        //moi don danh se tang 10% toc do danh 
        // toc do danh luc dau la 1.5 theo code
        // cong thuc la this.m_CD*= (m_CD- m_CD*0.1);
        // k tim thay ke dich giam toc do danh xuong 


        if (m_Has_Electric && m_Target)
        {
            float distance_To_Boss = Vector2.Distance(transform.position, m_Target.position);
            if (distance_To_Boss < 2f)
            {
                distance_To_Boss = 2f;
            }

            m_CD = (1 - (100f / distance_To_Boss) / 100f) * m_CD;
        }

        if (m_Is_Using_Item_SP_Speed_X2)
        {
            m_CD = m_CD * 0.5f;
        }

        if (m_Type_Character == Type_Character.Onslaught && Get_Type_Turret() == Type_Turret.Turret_Bed)
        {

            Invoke(nameof(Fight_Bullet), m_CD_Onslaught);
        }
        else
        {
            // Debug.Log(transform.GetInstanceID()  + " | Fight_Bullet 7");

            Invoke(nameof(Fight_Bullet), m_CD);
        }


        //updateofjura


        if (m_Has_Electric && m_Pos_Effect_Electric.childCount <= 0)
        {
            My_Utils.Play_Pref_Effect_No_Destroy(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Electric(),
                m_Pos_Effect_Electric);
        }
        else
        {
            Remove_Effect_Electric();
        }
    }

    public virtual void Spawn_Bullet()
    {




        Base_Boss base_Boss = m_Target.GetComponent<Base_Boss>();

        // new


        Spawn_Pool_Bullet_Controller.Instance.Create_Bullet(transform);
        Bullet_Controller obj_Bullet = Spawn_Pool_Bullet_Controller.Instance.SpawnDamagePopup();
        obj_Bullet.transform.localPosition = Vector3.zero;

        //  Debug.LogError("Spawn_Bullet :  turret controller" + base_Boss.gameObject.name  + obj_Bullet.transform );
        obj_Bullet.transform.localEulerAngles = m_Look_At_Target.transform.localEulerAngles;



        if (data_Player && type_Player != Type_Player.None)
        {

            //old
            // Bullet_Controller bullet_Controller = obj_Bullet.GetComponent<Bullet_Controller>();
            // new
            Bullet_Controller bullet_Controller = obj_Bullet;

            if (bullet_Controller)
            {
                //int level = data_Player.Get_Level_Turret(transform.GetInstanceID());
                //old
                obj_Bullet.transform.SetParent(Recycle_Bin.Instance.transform);
                //new


                damage = Check_Data_Perk_Skill_28();

                m_Type_Bullet_Skill = Type_Bullet_Skill.None;
                if (m_Type_Character == Type_Character.Zues && UnityEngine.Random.Range(0, 9999) % 2 == 0)
                {
                    m_Type_Bullet_Skill = Type_Bullet_Skill.Zeus;
                }
                else if (m_Type_Character == Type_Character.Witch)
                {
                    m_Type_Bullet_Skill = Type_Bullet_Skill.Witch;
                }
                else if (m_Type_Character == Type_Character.Calida)
                {
                    m_Type_Bullet_Skill = Type_Bullet_Skill.Calida;
                }


                //                Debug.LogError(m_Target.gameObject.name + " m_Target");
                bullet_Controller.Set_Target(transform.GetInstanceID(),
                    !data_Player.Get_Is_AI(),
                    m_Type_Character, m_Target, base_Boss.Get_Pos_Take_Damage(), m_Speed_Move, damage, level_Curr,
                    m_Type_Bullet_Skill, Type_Turret.Turret);


                Play_Sound_Shoot();

                StartCoroutine(Thread_Check_Add_Coin_To_ATM(level_Curr));
                //Check_Add_Coin_To_ATM(level_Curr);
            }

            else
            {
                Spawn_Pool_Bullet_Controller.Instance.ReturnDamageLabelToPool(bullet_Controller);
                //Destroy(bullet_Controller.gameObject);
            }
        }
    }

    protected void Play_Sound_Shoot()
    {
        if (level_Curr < 5)
        {
            SoundController.Play_Sounds(Type_Sound.Turret_1);
        }
        else if (level_Curr >= 6 && level_Curr <= 9)
        {
            SoundController.Play_Sounds(Type_Sound.Turret_3);
        }
        else
        {
            SoundController.Play_Sounds(Type_Sound.Turret_2);
        }
    }


    // check them tien cho atm
    protected IEnumerator Thread_Check_Add_Coin_To_ATM(int level)
    {
        yield return new WaitForEndOfFrame();
        Check_Add_Coin_To_ATM(level);
    }

    private void Check_Add_Coin_To_ATM(int level)
    {
        m_Energy_Increase = 0;

        if (m_Has_ATM)
        {
            if (!m_Anim_Collect_Coin.gameObject.activeInHierarchy) m_Anim_Collect_Coin.gameObject.Set_Active(true);

            int level_Turet = level;

            level = level + 1;
            if (level <= 0)
            {
                level = 1;
            }

            if (m_Type_Character == Type_Character.Manager)
            {
                level *= 2;
            }

            if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_22_ATM_Add_1))
            {
                level += 1;
            }

            m_Coin_Increase = level;

            data_Player.Increase_Coin(level, false);
            if (!data_Player.Get_Is_AI())
            {
                Canvas_In_Game.Instance.Get_UI_GamePlay().Update_UI_Coin();
            }

            if (m_Value_Add_Coin)
            {
                m_Value_Add_Coin.text = "+" + level;
            }

            m_Anim_Collect_Coin.transform.DOKill(false);

            m_Anim_Collect_Coin.Play_Anim_Collect_Dotween(() => { });

            if (m_Is_Playing_Anim_Energy)
            {
                m_Energy_Increase = Get_Energy_Increase(level_Turet);
                m_Txt_Energy.Set_Text("+" + m_Energy_Increase);

                data_Player.Increase_Energy(m_Energy_Increase, false);
                if (!data_Player.Get_Is_AI())
                {
                    Canvas_In_Game.Instance.Get_UI_GamePlay().Update_UI_Enerygy();
                }

                m_Anim_Collect_Energy.gameObject.Set_Active(true);
                m_Anim_Collect_Energy.DOKill(false);
                m_Anim_Collect_Energy.Play_Anim_Collect_Dotween(null);
            }
        }
        else
        {
            if (m_Anim_Collect_Coin.gameObject.activeInHierarchy) m_Anim_Collect_Coin.gameObject.Set_Active(false);
            if (m_Anim_Collect_Energy.gameObject.activeInHierarchy) m_Anim_Collect_Energy.gameObject.Set_Active(false);
        }
    }

    Bed_Controller m_Bed_Controller;
    int m_Coin_Increase;

    // tang coin then bg
    private void Increase_Coin_In_Background()
    {
        if (data_Player && type_Player != Type_Player.None)
        {
            if (m_Bed_Controller == null)
            {
                m_Bed_Controller = m_Room_Controller.Get_Bed_Controller();
            }

            if (m_Bed_Controller)
            {
                m_Bed_Controller.Increase_Coin_From_Other(m_Coin_Increase);
            }
        }
    }

    #endregion

    /**
     * When On_Data_Compass_Change : Tang tam danh len 50%
     * */

    #region ================== On_Data_Compass_Change =================

    private void On_Data_Compass_Change()
    {
        Check_Data_Player();
        if (data_Player)
        {
            m_Has_Compass = data_Player.Get_Sum_Compass_Builded() > 0;
            m_Range = model_Info_Turret_Curr.model_Skills.range + 1;
            if (m_Has_Compass)
            {
                m_Range = m_Range * 1.5f;
            }
        }
    }

    #endregion

    /**
     * When On_Data_Bibble_Change : Tang toc do danh len 50%
     * */

    #region ================== On_Data_Bibble_Change =================

    private void On_Data_Bibble_Change()
    {
        Check_Data_Player();
        if (data_Player)
        {
            m_Has_Bibble = data_Player.Get_Sum_Bibble_Builded() > 0;
        }
    }

    #endregion

    /**
     * When On_Data_ATM_Change : Cong Vang theo player
     * */

    #region ================== On_Data_ATM_Change =================

    private void On_Data_ATM_Change()
    {
        //Debug.Log(">>>>> On_Data_ATM_Change");
        Check_Data_Player();
        if (data_Player)
        {
            m_Has_ATM = data_Player.Get_Sum_ATM_Builded() > 0;
        }
    }

    #endregion

    /**
     * When On_Data_Electric_Change : Tang toc do danh dua theo khoang cach den Boss, Max 50%
     * */

    #region ================== On_Data_Electric_Change =================

    private void On_Data_Electric_Change()
    {
        Check_Data_Player();
        if (data_Player)
        {
            m_Has_Electric = data_Player.Get_Sum_Electric_Builded() > 0;

            Remove_Effect_Electric();
            if (m_Has_Electric && m_Target)
            {
                My_Utils.Play_Pref_Effect_No_Destroy(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Electric(),
                    m_Pos_Effect_Electric);
            }
        }
    }

    #endregion

    /**
     * When Boss Active Skill A, Turret will be Stun
     * */

    #region ================== On_Data_Electric_Change =================

    public void Set_Stun(bool is_Stun)
    {
        m_Is_Stun = is_Stun;

        Remove_All_Effect_Stun();
        if (m_Is_Stun)
        {
            My_Utils.Play_Pref_Effect_No_Destroy(
                Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Stun(),
                m_Pos_Effect_Stun);
        }
    }

    public void Set_Scare(bool is_Stun)
    {
        m_Is_Scare = is_Stun;

        Remove_All_Effect_Scare();
        if (m_Is_Scare)
        {
            My_Utils.Play_Pref_Effect_No_Destroy(
                Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Scare(),
                m_Pos_Effect_Scare);
        }
    }

    public void Set_Charm(Vector3 pos_Boss, bool is_Stun)
    {
        if (is_Stun)
        {
            var pref_Health_Fly = Instantiate(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Health_Fly(),
                Recycle_Bin.Instance.transform);
            pref_Health_Fly.transform.position = pos_Boss;
            pref_Health_Fly.transform.DOMove(transform.position, 0.5f).SetEase(Ease.Linear).OnComplete(() =>
            {
                m_Is_Charm = is_Stun;

                Remove_All_Effect_Charm();
                if (m_Is_Charm)
                {
                    My_Utils.Play_Pref_Effect_No_Destroy(
                        Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Charm(),
                        m_Pos_Effect_Charm);
                }

                Destroy(pref_Health_Fly.gameObject);
            });
        }
        else
        {
            m_Is_Charm = is_Stun;

            Remove_All_Effect_Charm();
        }
    }

    private void Remove_All_Effect_Stun()
    {
        m_Pos_Effect_Stun.Destroy_All_Children();
    }

    private void Remove_All_Effect_Scare()
    {
        m_Pos_Effect_Scare.Destroy_All_Children();
    }

    private void Remove_All_Effect_Charm()
    {
        m_Pos_Effect_Charm.Destroy_All_Children();
    }

    #endregion

    #region ============== PERK ==============

    private void Check_Data_Perk_Increase_Damage()
    {
        if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_29_Damage_40_Per))
        {
            m_Damage *= 4.0f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_24_Damage_25_Per))
        {
            m_Damage *= 2.5f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_19_Damage_20_Per))
        {
            m_Damage *= 2.0f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_10_Damage_15_Per))
        {
            m_Damage *= 1.15f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_2_Damage_5_Per))
        {
            m_Damage *= 1.05f;
        }
    }

    private void Check_Data_Perk_Increase_Speed_Atk()
    {
        if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_30_Speed_Atk_40_Per))
        {
            m_CD *= 0.6f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_25_Speed_Atk_25_Per))
        {
            m_CD *= 0.75f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_20_Speed_Atk_20_Per))
        {
            m_CD *= 0.8f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_11_Speed_Atk_15_Per))
        {
            m_CD *= 0.85f;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_3_Speed_Atk_5_Per))
        {
            m_CD *= 0.95f;
        }
    }

    protected float Check_Data_Perk_Skill_28()
    {
        if (DataSaved.Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem.Skill_7_Lose_10_Per_Door_Add_10_Per_Damage))
        {
            float output = m_Damage;
            var door = m_Room_Controller.Get_Door_Of_Room();
            if (door)
            {
                var percent_HP_Door = ((1f - door.Get_Curr_Percent_HP()) / 0.1f * 0.05f);
                output += percent_HP_Door * m_Damage;
            }
            else
            {
                output += 0.5f * m_Damage;
            }

            return output;
        }

        return m_Damage;
    }

    #endregion

    public void Show_Tut_5()
    {
        foreach (Transform item in m_Pos_Tut)
        {
            Destroy(item.gameObject);
        }

        DOVirtual.DelayedCall(0.125f, () =>
        {
            var obj_Tut = Instantiate(Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Hand_Tut(), m_Pos_Tut);
            obj_Tut.transform.localPosition = Vector3.zero;

            Data_Coin_Energy_Change();
        }, false);
    }

    bool m_Is_Can_Upgrade;
    int m_Order_Default_Look_At_Target;

    // du lieu coin nang luong khi thay doi
    public override void Data_Coin_Energy_Change()
    {
        if (Is_Owner())
        {
            Check_Data_Player();
            if (data_Player)
            {
                // if (m_Is_Tutorials && !data_Player.Get_Is_AI() &&
                //     DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story &&
                //     DataSaved.Get_Index_Claimed_Mission_Tutorial() == 4)
                // {
                //     m_Is_Can_Upgrade = true;
                //     m_Obj_Upgrade.Set_Active(true);
                // }
                // else
                // {
                //    
                // }
                m_Is_Can_Upgrade = Check_Can_Upgrade();
                m_Obj_Upgrade.Set_Active(m_Is_Can_Upgrade);

                if (m_Is_Start)
                {
                    if (m_Is_Can_Upgrade)
                    {
                        m_Model_Turret.sortingOrder = m_Order_Default_Look_At_Target;
                    }
                    else
                    {
                        m_Model_Turret.sortingOrder = 1;
                    }
                }
            }
        }
    }

    // lay gia tri khi nang luong tang
    private int Get_Energy_Increase(int level)
    {
        int lv = level;

        if (lv < 0)
        {
            lv = 0;
        }

        if (lv >= m_Data_Energy.Count)
        {
            lv = m_Data_Energy.Count - 1;
        }

        return m_Data_Energy[lv % m_Data_Energy.Count];
    }


}