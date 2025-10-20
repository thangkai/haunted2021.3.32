using UnityEngine;


public class Data_In_Game : Singleton<Data_In_Game>
{
    #region update xekototoby

   
    [SerializeField] Data_Type_Rank_Character_Manager m_Data_Type_Rank_Character;

    public Data_Type_Rank_Character_Manager Get_Data_Type_Rank_Character()
    {
        return m_Data_Type_Rank_Character;
    }

    #endregion





    [SerializeField] Data_Skeleton_Asset m_Data_Skeleton_Asset;

    public Data_Skeleton_Asset Get_Data_Skeleton_Asset()
    {
        return m_Data_Skeleton_Asset;
    }

    [SerializeField] Data_Info_Character_Manager m_Data_Info_Character_Manager;

    public Data_Info_Character_Manager Get_All_Data_Character()
    {
        return m_Data_Info_Character_Manager;
    }

    [SerializeField] GameObject m_Pref_Point_Test_Line_Up;

    public GameObject Get_Pref_Point_Test_Line_Up()
    {
        return m_Pref_Point_Test_Line_Up;
    }


    [SerializeField] Data_Prefap_In_Game m_Data_Prefap_In_Game;

    public Data_Prefap_In_Game Get_Data_Prefaps()
    {
        return m_Data_Prefap_In_Game;
    }

    [SerializeField] Data_Info_Turret_Manager m_Data_Info_Turret_Manager;

    public Data_Info_Turret_Manager Get_Data_Info_Turret_Manager()
    {
        return m_Data_Info_Turret_Manager;
    }







    [SerializeField] Data_Tab_Buy_Turret_Manager m_Data_Tab_Buy_Turret_Manager;

    public Data_Tab_Buy_Turret_Manager Get_Data_Tab_Buy_Turret_Manager()
    {
        return m_Data_Tab_Buy_Turret_Manager;
    }

    [SerializeField] Data_Sprite_In_Game m_Data_Sprite_In_Game;

    public Data_Sprite_In_Game Get_Data_Sprite_In_Game()
    {
        return m_Data_Sprite_In_Game;
    }

    [SerializeField] Data_Sprite_Home m_Data_Sprite_Character;

    public Data_Sprite_Home Get_Data_Sprite_Character()
    {
        return m_Data_Sprite_Character;
    }

    [SerializeField] Data_AI_Character_Manager m_Data_AI_Character_Manager;

    public Data_AI_Character_Manager Get_Data_AI_Character_Manager()
    {
        return m_Data_AI_Character_Manager;
    }


    [SerializeField] Data_Mission_Tut m_Data_Mission_Tut;

    public Data_Mission_Tut Get_Data_Mission_Tut()
    {
        return m_Data_Mission_Tut;
    }

    [SerializeField] Data_Alert m_Data_Alert;

    public Data_Alert Get_Data_Alert()
    {
        return m_Data_Alert;
    }

    public Sprite[] m_Icon_Skill_2;

    public Sprite Get_Icon_Skill_2(Type_Icon_Skill_Tree type_Icon_Skill_Tree)
    {
        switch (type_Icon_Skill_Tree)
        {
            // truong hop ngoai le
            case Type_Icon_Skill_Tree.Skill_2_Student:
                return m_Icon_Skill_2[0];

            case Type_Icon_Skill_Tree.Skill_2_Vampire_Hunter:
                return m_Icon_Skill_2[1];

            case Type_Icon_Skill_Tree.Skill_2_Repairer:
                return m_Icon_Skill_2[2];

            case Type_Icon_Skill_Tree.Skill_2_Eilif:
                return m_Icon_Skill_2[3];

            case Type_Icon_Skill_Tree.Skill_1_Safeguard:
                return m_Icon_Skill_2[4];
        }
        return null;
    }

    public Sprite Get_Icon_Skill_2(Type_Character type_Character)
    {
        switch (type_Character)
        {

            case Type_Character.Student:
                return m_Icon_Skill_2[0];

            case Type_Character.Vampire_Hunter:
                return m_Icon_Skill_2[1];

            case Type_Character.Repairer:
                return m_Icon_Skill_2[2];

            case Type_Character.Eilif:
                return m_Icon_Skill_2[3];

            case Type_Character.Raven:
                return m_Icon_Skill_2[0];
        }
        return null;
    }

  
    [SerializeField] Color[] m_Color_Model_Boss;

    public Color Get_Color_Boss_Normal()
    {
        return m_Color_Model_Boss[0];
    }

    public Color Get_Color_Boss_Skill_C()
    {
        return m_Color_Model_Boss[1];
    }


    [Header("_____ Data Boss ______")]
    [SerializeField] Data_Info_Boss_Manager m_Data_Info_Boss_Manager;

    public Data_Info_Boss_Manager Get_Data_Info_Boss_Manager()
    {
        return m_Data_Info_Boss_Manager;
    }

    [SerializeField] Data_Skill_Boss_Manager m_Data_Skill_Boss_Manager;

    public Data_Skill_Boss_Manager Get_Data_Skill_Boss_Manager()
    {
        return m_Data_Skill_Boss_Manager;
    }



    [SerializeField] Data_Map m_Data_Map;

    public Data_Map Get_Data_Map()
    {
        return m_Data_Map;
    }

    [Header("_____ Data Anim Spin ______")]
    [SerializeField] Data_Anim_Spine m_Data_Anim_Spine;

    public Data_Anim_Spine Get_Data_Anim_Spine()
    {
        return m_Data_Anim_Spine;
    }

    [Header("_____ Data Effect ______")]
    [SerializeField] Data_Effect m_Data_Effect;

    public Data_Effect Get_Data_Effect()
    {
        return m_Data_Effect;
    }

    [SerializeField] Bool_Global_Variable m_Live_Data_Index_Claimed_Mission_Tutorial;
    [SerializeField] Bool_Global_Variable m_Live_Data_Can_Build_Crucific_Tutorial;
    [SerializeField] Bool_Global_Variable m_Live_Data_Loop_Time;
    [SerializeField] Bool_Global_Variable m_Live_Data_Item_SP_Stun;
    [SerializeField] Bool_Global_Variable m_Live_Data_Skill_2_Eilif;
    [SerializeField] Bool_Global_Variable m_Live_Data_Skill_2_Safeguard;
    [SerializeField] Bool_Global_Variable m_Live_Data_Damagetation;

    public Bool_Global_Variable Get_Live_Data_Index_Claimed_Mission_Tutorial()
    {
        return m_Live_Data_Index_Claimed_Mission_Tutorial;
    }

    public Bool_Global_Variable Get_Live_Data_Can_Build_Crucific_Tutorial()
    {
        return m_Live_Data_Can_Build_Crucific_Tutorial;
    }

    public Bool_Global_Variable Get_Live_Data_Loop_Time()
    {
        return m_Live_Data_Loop_Time;
    }

    public Bool_Global_Variable Get_Live_Data_Item_SP_Stun()
    {
        return m_Live_Data_Item_SP_Stun;
    }

    public Bool_Global_Variable Get_Live_Data_Skill_2_Eilif()
    {
        return m_Live_Data_Skill_2_Eilif;
    }
    //updateofjura
    public Bool_Global_Variable Get_Live_Data_Skill_2_Safeguard()
    {
        return m_Live_Data_Skill_2_Safeguard;
    }
    public Bool_Global_Variable Get_Live_Data_Damagetation()
    {
        return m_Live_Data_Damagetation;
    }

    [Header("_____ Data Map ______")]
    [SerializeField] GameObject[] m_All_Map_Challenges;
    // [SerializeField] GameObject[] m_All_Maps;


    public GameObject Get_Pref_Map(Type_Map type_Map)
    {
       
        return m_All_Map_Challenges[(int)type_Map % m_All_Map_Challenges.Length];
    }












}
