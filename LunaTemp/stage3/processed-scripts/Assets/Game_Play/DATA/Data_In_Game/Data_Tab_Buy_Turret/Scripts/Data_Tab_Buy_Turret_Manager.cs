using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Tab_Buy_Turret_Manager", fileName = "Data_Tab_Buy_Turret_Manager", order = 0)]
public class Data_Tab_Buy_Turret_Manager : ScriptableObject
{
    [SerializeField] List<Data_Tab_Buy_Turret> m_All_Tab = new List<Data_Tab_Buy_Turret>();

    public Data_Tab_Buy_Turret Get_Data_Tab(Type_Tab_Buy_Turret type_Tab)
    {
        return m_All_Tab[(int)type_Tab % m_All_Tab.Count];
    }

    public int Get_Number_Limit(Type_Turret type_Turret)
    {
        for (int i = 0; i < m_All_Tab.Count; i++)
        {
            for (int k = 0; k < m_All_Tab[i].Get_Count_Data(); k++)
            {
                if (m_All_Tab[i].Get_Model_Tab_Buy_Turret(k).type_Turret == type_Turret)
                {
                    return m_All_Tab[i].Get_Model_Tab_Buy_Turret(k).number_Limited;
                }
            }
        }
        return 0;
    }

    public Type_Buy_Turret Get_Type_Buy_Turret(Type_Turret type_Turret)
    {
        for (int i = 0; i < m_All_Tab.Count; i++)
        {
            for (int k = 0; k < m_All_Tab[i].Get_Count_Data(); k++)
            {
                if (m_All_Tab[i].Get_Model_Tab_Buy_Turret(k).type_Turret == type_Turret)
                {
                    return m_All_Tab[i].Get_Model_Tab_Buy_Turret(k).type_Buy_Turret;
                }
            }
        }
        return Type_Buy_Turret.Unlimited;
    }
}
