using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Info_Level_Manager", fileName = "Data_Info_Level_Manager", order = 0)]
public class Data_Info_Level_Manager : ScriptableObject
{
    [SerializeField] List<Data_Info_Level> m_All_Level = new List<Data_Info_Level>();

    public Data_Info_Level Get_Data_Info_Level(int level)
    {
        return m_All_Level[level % m_All_Level.Count];
    }
}
