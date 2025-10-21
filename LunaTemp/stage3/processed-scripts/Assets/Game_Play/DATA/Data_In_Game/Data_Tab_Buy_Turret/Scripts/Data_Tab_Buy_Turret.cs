using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Tab_Buy_Turret", fileName = "Data_Tab_", order = 0)]
public class Data_Tab_Buy_Turret : ScriptableObject
{
    [SerializeField] List<Model_Tab_Buy_Turret> m_All_Data_In_Tab = new List<Model_Tab_Buy_Turret>();

    public List<Model_Tab_Buy_Turret> Get_All_Data_In_Tab()
    {
        return m_All_Data_In_Tab;
    }

    public int Get_Count_Data()
    {
        return m_All_Data_In_Tab.Count;
    }

    public Model_Tab_Buy_Turret Get_Model_Tab_Buy_Turret(int index)
    {
        if (index < 0 || index >= m_All_Data_In_Tab.Count)
        {
            return null;
        }
        return m_All_Data_In_Tab[index];
    }
}
