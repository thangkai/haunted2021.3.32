using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Info_Level", fileName = "Data_Info_Level_", order = 0)]
public class Data_Info_Level : ScriptableObject
{
    public Type_Player m_Showdow_Boss; // Using show in Level
    public Model_Name m_Name_Level;
    public Type_Map m_Type_Map;
    public Model_Time m_Time_Complete;
    public int m_Fake_Number;

    [Header("____ Config Boss ____")]
    public Type_Level m_Level_Boss; // Độ khó của boss
    public int m_Level_Start;
    public List<Model_Info_Level_Boss> m_All_Boss = new List<Model_Info_Level_Boss>();
    public List<Model_Time> m_Time_Spawner_Boss = new List<Model_Time>();

    [Header("____ Config Player ____")]
    public List<Model_Info_Level_Player> m_All_Player = new List<Model_Info_Level_Player>();

    public void Add_Data_Player(Type_Level type_Level, bool is_Challenge)
    {
        m_All_Player.Clear();

        Model_Info_Level_Player info_Level_Player = new Model_Info_Level_Player();
        info_Level_Player.m_Level_Player = type_Level;
        info_Level_Player.amount = is_Challenge ? 1 : 6;
        m_All_Player.Add(info_Level_Player);
    }

    public void Add_Boss(List<Model_Info_Level_Boss> all_Boss)
    {
        m_All_Boss.Clear();
        m_All_Boss.AddRange(all_Boss);
    }

    public void Add_Time_Spawner_Boss(List<Model_Time> all_Times)
    {
        m_Time_Spawner_Boss.Clear();
        m_Time_Spawner_Boss.AddRange(all_Times);
    }
}
