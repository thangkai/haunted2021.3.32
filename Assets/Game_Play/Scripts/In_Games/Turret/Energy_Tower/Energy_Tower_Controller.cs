using Spine.Unity;
using TMPro;
using UnityEngine;
using DG.Tweening;

public class Energy_Tower_Controller : Base_Turret_Can_Upgrade
{
    [Header(".......... Energy_Tower_Controller ..........")]
    [SerializeField] int m_Energy_Increase;
    [SerializeField] TextMeshPro m_Txt_Energy;
    [SerializeField] SpriteRenderer m_Model_Icon;
    [SerializeField] SkeletonAnimation m_Anim_Spine;
    [SerializeField] Transform m_Parent_Effect;
    [SerializeField] Transform m_Anim_Collect;
    [SerializeField] ParticleSystem m_Effect_Upgrade;
    [SerializeField] Vector3[] m_Pos_Smoke;
    [SerializeField] Bed_Controller m_Bed_Controller;

    bool m_Is_Unlock_Skill_9;

    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Add_Energy_Tower_In_Room(this);
        m_Bed_Controller = room_Controller.Get_Bed_Controller();
    }

    public override void Before_Remove_Item()
    {
        if (m_Room_Controller && this != null)
        {
            m_Room_Controller.Remove_Energy_Tower_In_Room(this);
        }
    }

    public override void Init_Data()
    {
        base.Init_Data();

        m_Is_Unlock_Skill_9 = DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_9_Energy_Tower_Add_1);

        Debug.Log("Bed_Controller : Init_Data");
        Update_UI();
    }

    public override void Add_Listener()
    {
        base.Add_Listener();

        Register_Data_Coin_Energy_Change();
        Update_UI();
        Play_Anim_Collect();

        m_Effect_Upgrade.PLay_Effect(false);

        Check_Data_Player();
       
    }

    public override void InCrease_Level()
    {
        base.InCrease_Level();

        Check_Data_Player();
     
    }

    private void OnDisable()
    {
        m_Anim_Collect.DOKill(false);
    }

    private void Play_Anim_Collect()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;

        m_Anim_Collect.DOKill(false);
        Update_UI();

        m_Anim_Collect.DOKill(false);
        m_Anim_Collect.Play_Anim_Collect_Dotween(() =>
        {
            Check_Data_Player();
            if (data_Player && type_Player != Type_Player.None)
            {
                Increase_Coin_In_Background();
                Play_Anim_Collect();
            }
        });
    }

    private void Increase_Coin_In_Background()
    {
        if (data_Player && type_Player != Type_Player.None)
        {
            if(m_Bed_Controller == null)
            {
                m_Bed_Controller = m_Room_Controller.Get_Bed_Controller();
            }
            if (m_Bed_Controller)
            {
                m_Bed_Controller.Increase_Energy_From_Other(Get_Data_Energy_With_Perk());
            }
        }
    }

    public override void Update_Model_Price()
    {
        base.Update_Model_Price();

        m_Energy_Increase = model_Info_Turret_Curr.model_Skills.energy;

        if (m_Type_Character == Type_Character.Scientist)
        {
            m_Energy_Increase = (int)(1.5f * m_Energy_Increase);
            if (m_Energy_Increase <= 1)
            {
                m_Energy_Increase = 2;
            }
        }
    }
    public override void Update_Model_By_Level()
    {
        m_Model_Icon.sprite = Data_In_Game.Instance.Get_Data_Sprite_In_Game().Get_Sprite_Energy_Tower_By_Level(level_Curr);

        if (level_Curr < 2)
        {
            m_Anim_Spine.gameObject.SetActive(true);
            m_Anim_Spine.skeletonDataAsset = Data_In_Game.Instance.Get_Data_Anim_Spine().Get_Anim_Energy_Tower(level_Curr);
            m_Anim_Spine.AnimationName = "spin";

            m_Anim_Spine.Initialize(true);
        }
        else
        {
            m_Anim_Spine.gameObject.SetActive(false);
        }

        if (level_Curr >= 4 && level_Curr <= 5) 
        {
            
            
            
            
            var obj_Effect = Instantiate(Data_In_Game.Instance.Get_Data_Effect().Get_Pref_Smoke_Orange(), m_Parent_Effect);
            obj_Effect.transform.localPosition = m_Pos_Smoke[level_Curr - 4];
        }
        else if (level_Curr >= 8 && level_Curr <= 9)
        {
            var obj_Effect = Instantiate(Data_In_Game.Instance.Get_Data_Effect().Get_Pref_Smoke(), m_Parent_Effect);
            obj_Effect.transform.localPosition = m_Pos_Smoke[level_Curr - 6];
        }
        else if (level_Curr > 9)
        {
            var obj_Effect = Instantiate(Data_In_Game.Instance.Get_Data_Effect().Get_Pref_Smoke(), m_Parent_Effect);
            obj_Effect.transform.localPosition = m_Pos_Smoke[3];
        }
        else
        {
            foreach (Transform item in m_Parent_Effect)
            {
                Destroy(item.gameObject);
            }
        }

        if(level_Curr > 0)
        {
            m_Effect_Upgrade.PLay_Effect(true);
        }
    }


    private void Update_UI()
    {
        if (m_Txt_Energy)
        {
            m_Txt_Energy.text = "+" + Get_Data_Energy_With_Perk();
        }
    }

    private int Get_Data_Energy_With_Perk()
    {
        if (m_Is_Unlock_Skill_9)
        {
            return m_Energy_Increase + 1;
        }
        return m_Energy_Increase;
    }
}
