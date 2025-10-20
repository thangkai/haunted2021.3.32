using UnityEngine;


public class Data_Home : Singleton<Data_Home>
{
    [SerializeField] private Color[] m_Color_By_Levels;

    public Color Get_Color_By_Level(Type_Level type_Level)
    {
        return m_Color_By_Levels[(int)type_Level];
    }

    [SerializeField] Data_Sprite_Home m_Data_Sprite_Home;

    public Data_Sprite_Home Get_All_Sprite()
    {
        return m_Data_Sprite_Home;
    }

    [SerializeField] Data_Ratio m_Data_Ratio;

    public Data_Ratio Get_Data_Ratio()
    {
        return m_Data_Ratio;
    }



    [SerializeField] Data_Info_Character_Manager m_Data_Info_Character_Manager;

    public Data_Info_Character_Manager Get_All_Data_Character()
    {
        return m_Data_Info_Character_Manager;
    }

    [SerializeField] Data_Info_Home_Boss_Manager m_Data_Info_Home_Boss_Manager;

    public Data_Info_Home_Boss_Manager Get_All_Data_Boss()
    {
        return m_Data_Info_Home_Boss_Manager;
    }

    [SerializeField] Data_Character_Join_Game m_Data_Character_Join_Game;

    public Data_Character_Join_Game Get_Data_Character_Join_Game()
    {
        return m_Data_Character_Join_Game;
    }

    [SerializeField] Data_Skeleton_Asset m_Data_Skeleton_Asset;

    public Data_Skeleton_Asset Get_Data_Skeleton_Asset()
    {
        return m_Data_Skeleton_Asset;
    }




  



    [SerializeField] Data_Info_Level_Manager m_Data_Info_Level_Normal_Manager;


    [SerializeField] Data_Info_Level_Manager m_Data_Info_Level_Very_Hard_Manager;


    public Data_Info_Level_Manager Get_Data_Info_Level_Manager()
    {
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge)
        {
            return m_Data_Info_Level_Challenge_Manager;
        }

        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {
            return m_Data_Info_Level_Manager;
        }
        if (RootManager.Check_AB_Level_Very_Hard())
        {
            return m_Data_Info_Level_Very_Hard_Manager;
        }
        else
        {
            return m_Data_Info_Level_Normal_Manager;
        }
    }

 
    [SerializeField] Data_Info_Level_Manager m_Data_Info_Level_Challenge_Manager;





    [SerializeField] Data_Type_Rank_Character_Manager m_Data_Type_Rank_Character;

    public Data_Type_Rank_Character_Manager Get_Data_Type_Rank_Character()
    {
        return m_Data_Type_Rank_Character;
    }


 






    [SerializeField] Data_Info_Level_Manager m_Data_Info_Level_Manager;

    public Data_Info_Level_Manager Get_All_Data_Info_Level_Manager()
    {
        return m_Data_Info_Level_Manager;
    }








}
