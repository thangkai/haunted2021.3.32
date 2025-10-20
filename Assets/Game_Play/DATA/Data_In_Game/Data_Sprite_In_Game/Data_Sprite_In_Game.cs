using UnityEngine;


[CreateAssetMenu(menuName = "Create Data/In Game/Data_Sprite_In_Game", fileName = "Data_Sprite_In_Game", order = 0)]
public class Data_Sprite_In_Game : ScriptableObject
{
    [SerializeField] Sprite m_Icon_Remove_Item;

    public Sprite Get_Sprite_Remove_Item()
    {
        return m_Icon_Remove_Item;
    }

    #region ====================== Data Character Sleep ======================

   
    [SerializeField] Sprite[] m_All_Sprite_Character_Sleep;
    [SerializeField] Sprite[] m_All_Sprite_Character_Sleep_V2;

    public Sprite Get_Sprite_Character_Sleep(Type_Character type_Character, bool is_Use_Skin_2)
    {
        if (RootManager.Check_Is_AB_SKin())
        {
            if (is_Use_Skin_2)
            {
                return m_All_Sprite_Character_Sleep[(int)type_Character % m_All_Sprite_Character_Sleep.Length];
            }
            return m_All_Sprite_Character_Sleep_V2[(int)type_Character % m_All_Sprite_Character_Sleep_V2.Length];
        }
        if (is_Use_Skin_2)
        {
            return m_All_Sprite_Character_Sleep_V2[(int)type_Character % m_All_Sprite_Character_Sleep_V2.Length];
        }
        return m_All_Sprite_Character_Sleep[(int)type_Character % m_All_Sprite_Character_Sleep.Length];
    }

    #endregion

    #region ====================== Sprite_Bed_By_Level ======================

   
    [SerializeField] Model_Sprite_Bed[] m_All_Sprite_Bed_By_Levels;

    public Model_Sprite_Bed Get_Sprite_Bed_By_Level(int level)
    {
        if (level < 0)
        {
            level = 0;
        }

        if (level >= m_All_Sprite_Bed_By_Levels.Length)
        {
            level = m_All_Sprite_Bed_By_Levels.Length - 1;
        }

        return m_All_Sprite_Bed_By_Levels[level];
    }

    #endregion

    #region ================== Data Icon ==================

 
    [SerializeField] Data_Sprite_By_Levels m_All_Sprite_Bullet_Player;
    [SerializeField] Data_Sprite_By_Levels m_All_Sprite_Bullet_Witch;
    [SerializeField] Data_Sprite_By_Levels m_All_Sprite_Bullet_Onslaught;
    [SerializeField] Data_Sprite_By_Levels m_All_Icon_Bed;
    [SerializeField] Data_Sprite_By_Levels m_All_Icon_Door;
    [SerializeField] Data_Sprite_By_Levels m_All_Icon_Turret;
    [SerializeField] Data_Sprite_By_Levels m_All_Icon_Energy_Tower;
        //updateofjura
    [SerializeField] Data_Sprite_By_Levels m_All_Data_Spite_Turret_Onslaught;
    [SerializeField] Data_Sprite_By_Levels m_All_Sprite_Bullet_Pierce;
    [SerializeField] Sprite[] m_All_Icon_Turrets;
    
    
    [SerializeField] Data_Sprite_By_Levels m_All_Sprite_Bullet_Pet;

    
    
    //xekotoby
    [SerializeField] Data_Sprite_By_Levels m_All_Icon_Turret_Penetation;

    public Sprite Get_Sprite_Bullet_Player(Type_Character type_Character, int level , Type_Turret type_Turret)
    {
        if (type_Character == Type_Character.Witch )
        {
            return m_All_Sprite_Bullet_Witch.Get_Icon(level);
        }
        if(type_Character == Type_Character.Onslaught && type_Turret == Type_Turret.Turret_Bed)
        {
            return m_All_Sprite_Bullet_Onslaught.Get_Icon(level);
        }
        return m_All_Sprite_Bullet_Player.Get_Icon(level);
    }
    
    public Sprite Get_Sprite_Bullet_Pet(PetName petName,   int level )
    {
      
        return m_All_Sprite_Bullet_Pet.Get_Icon(level);
    }

    
    public Sprite Get_Sprite_Bullel_Pierce(Type_Character type_Character, int level , Type_Turret type_Turret)
    {
      
        return m_All_Sprite_Bullet_Pierce.Get_Icon(level);
    }
    public Sprite Get_Sprite_Bullet_Onslaught(Type_Character type_Character, int level)
    {
      
            return m_All_Sprite_Bullet_Onslaught.Get_Icon(level);
       
    }

    public Sprite Get_Sprite_Turret(Type_Turret type_Turret, int level)
    {
        switch (type_Turret)
        {
            case Type_Turret.Bed: return m_All_Icon_Bed.Get_Icon(level);
            case Type_Turret.Door: return m_All_Icon_Door.Get_Icon(level);
            case Type_Turret.Turret: return m_All_Icon_Turret.Get_Icon(level);
            case Type_Turret.Energy_Tower: return m_All_Icon_Energy_Tower.Get_Icon(level);
            case Type_Turret.Turret_Bed: return m_All_Data_Spite_Turret_Onslaught.Get_Icon(level);
            //xekotoby
            //co the nang cap thi fai them file ben ngoai
            case Type_Turret.Turret_Pierce : return m_All_Icon_Turret_Penetation.Get_Icon(level);
        }
        return m_All_Icon_Turrets[(int)type_Turret % m_All_Icon_Turrets.Length];
    }

    #endregion

    #region ================== Data Turret By Levels ==================

   
    [SerializeField] Sprite[] m_All_Chan_De_Turrets;

    [SerializeField] Sprite[] m_All_Chan_De_Turret_Penatation;
    public Sprite Get_Sprite_Chan_De_Turret(int level)
    {
       
            if (level < 2)
            {
                return m_All_Chan_De_Turrets[level];
            }
            if (level < 5)
            {
                return m_All_Chan_De_Turrets[2];
            }
            return m_All_Chan_De_Turrets[3];
        
       
    }

    public Sprite Get_Sprite_Chan_De_Turret_Onslaught()
    {
      
        return m_All_Chan_De_Turrets[4];
    }
    public Sprite Get_Sprite_Chan_De_Turret_Pierce()
    {
      
        return m_All_Chan_De_Turret_Penatation[0];
    }
    
 

    [SerializeField] Data_Sprite_By_Levels m_Data_Turret_By_Levels;
    [SerializeField] Data_Sprite_By_Levels m_Data_Turret_Witch_By_Levels;
    [SerializeField] Data_Sprite_By_Levels m_Data_Turret_Onslaught_By_Levels;
    [SerializeField] Data_Sprite_By_Levels m_Data_Turret_Penetation_By_Levels;

    public Sprite Get_Sprite_Turret_By_Level(Type_Character type_Character, int level)
    {
        //update of jura // thay doi mui ten tam doc
        if(type_Character == Type_Character.Witch)
        {
            return m_Data_Turret_Witch_By_Levels.Get_Icon(level);
        }
       
        return m_Data_Turret_By_Levels.Get_Icon(level);
    }
    public Sprite Get_Sprite_Turret_Penetation_By_Level(Type_Character type_Character, int level)
    {
     
       
        return m_Data_Turret_Penetation_By_Levels.Get_Icon(level);
    } 
    public Sprite Get_Sprite_Turret_Bed_By_Level(Type_Character type_Character, int level)
    {
        //update of jura // thay doi mui ten tam doc

        return m_Data_Turret_Onslaught_By_Levels.Get_Icon(level);
    }







    [SerializeField] Data_Sprite_By_Levels m_Data_Energy_Tower_By_Levels;

    public Sprite Get_Sprite_Energy_Tower_By_Level(int level)
    {
        return m_Data_Energy_Tower_By_Levels.Get_Icon(level);
    }


    #endregion

    #region ================== Data Door By Levels ==================

    [SerializeField] Data_Sprite_By_Levels m_Data_Door_By_Levels;

    public Sprite Get_Sprite_Door_By_Level(int level)
    {
        return m_Data_Door_By_Levels.Get_Icon(level);
    }

    #endregion

    #region ================== Data Sprite Item Support ==================

 
    [SerializeField] Sprite[] m_Data_Icon_Item_Support;

    public Sprite Get_Icon_Item_Support(Type_Item_Support type_Item_Support)
    {
        return m_Data_Icon_Item_Support[(int)type_Item_Support % m_Data_Icon_Item_Support.Length];
    }

    #endregion


    #region  ==============Data_Sprite_Bullet_boss============
 
    
    [SerializeField] Data_Sprite_By_Levels m_All_Sprite_Bullet_Boss;
    public Sprite Get_Sprite_Bullet_Boss(Type_Player typePlayer, int level )
    {

        return m_All_Sprite_Bullet_Boss.Get_Icon(level);
    }

    #endregion
}
