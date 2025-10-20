using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Mission_Tut", fileName = "Data_Mission_Tut", order = 0)]
public class Data_Mission_Tut : ScriptableObject
{
    [SerializeField] List<Model_Name> m_All_Des_Missions = new List<Model_Name>();

    public Model_Name Get_Des_Mission(int step_mission)
    {
        return m_All_Des_Missions[step_mission % m_All_Des_Missions.Count];
    }
}
