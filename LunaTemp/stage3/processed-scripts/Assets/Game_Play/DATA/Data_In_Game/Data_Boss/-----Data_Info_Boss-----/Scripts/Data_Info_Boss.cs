using System;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Info_Boss", fileName = "Data_Info_Boss_", order = 0)]
public class Data_Info_Boss : ScriptableObject
{
    [SerializeField] string name_Boss;
    [SerializeField] string name_Boss_V2;

    public Type_Player type_Boss;
    public float speed_Attack = 1f;
    public int[] XP_By_Levels;

    public List<Type_Skill_Boss> m_Pool_Skill = new List<Type_Skill_Boss>();
    [SerializeField] List<Model_Stat_Boss> m_Stat_Boss_By_Level = new List<Model_Stat_Boss>();
    //[SerializeField] List<Model_Stat_Boss> m_Stat_Boss_4_Munites_By_Level = new List<Model_Stat_Boss>();
    [SerializeField] List<Model_Stat_Boss> m_Stat_Boss_Very_Hard_By_Level = new List<Model_Stat_Boss>();
    public int m_Amor = 5;
   

    public List<Model_Stat_Boss> Get_Stat_Boss_By_Level()
    {
        return m_Stat_Boss_By_Level;
    }

    public Model_Stat_Boss Get_Stat_Boss_By_Level(int level)
    {
        
        if (RootManager.Get_Type_AI_Boss() == Type_AI_Boss.AI_ATK)
        {
            if (level < m_Stat_Boss_Very_Hard_By_Level.Count)
            {
                return m_Stat_Boss_Very_Hard_By_Level[level];
            }
            else
            {
                return m_Stat_Boss_Very_Hard_By_Level[m_Stat_Boss_Very_Hard_By_Level.Count - 1];
            }
        }
        else
        {
            if (level < m_Stat_Boss_By_Level.Count)
            {
                return m_Stat_Boss_By_Level[level];
            }
            else
            {
                return m_Stat_Boss_By_Level[m_Stat_Boss_By_Level.Count - 1];
            }
        }
    }


    public Model_Stat_Boss Get_Stat_Boss_Upgrade_Story_Level(int level)
    {

        if (Database.instance.GetHardLevel())
        {
            if (level < m_Stat_Boss_Very_Hard_By_Level.Count)
            {
                return m_Stat_Boss_Very_Hard_By_Level[level];
            }
            else
            {
                return m_Stat_Boss_Very_Hard_By_Level[m_Stat_Boss_Very_Hard_By_Level.Count - 1];
            }
        }
        else
        {
            if (level < m_Stat_Boss_By_Level.Count)
            {
                return m_Stat_Boss_By_Level[level];
            }
            else
            {
                return m_Stat_Boss_By_Level[m_Stat_Boss_By_Level.Count - 1];
            }
        }
    }


    public Model_Stat_Boss StatStoryLevelHard(int level)
    {
        if (Database.instance.GetHardLevel())
        {
            return m_Stat_Boss_Very_Hard_By_Level[level];
        }
        else
        {
            return m_Stat_Boss_By_Level[level];
        }
    }

    
    
    public string Get_Name_Boss()
    {
        if (RootManager.Check_Is_AB_SKin())
        {
            return name_Boss_V2;
        }
        return name_Boss;
    }
}
