using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Max_Turret_Can_Build", fileName = "Data_Max_Turret_Can_Build", order = 0)]
public class Data_Max_Turret_Can_Build : ScriptableObject
{
    [SerializeField] List<Case_Max_Turret_Can_Build> m_All_Case_Max_Turret = new List<Case_Max_Turret_Can_Build>();

    public List<Type_Max_Turret> Get_Random_Max_Turret()
    {
        List<Type_Max_Turret> output = new List<Type_Max_Turret>();

        Case_Max_Turret_Can_Build case_Max_Turret = m_All_Case_Max_Turret[Random.Range(0, m_All_Case_Max_Turret.Count - 1)];

        foreach (var item in case_Max_Turret.m_Case_Max_Turret)
        {
            int sum = item.amount;
            for (int i = 0; i < sum; i++)
            {
                output.Add(item.type_Max_Turret);
            }
        }

        output.Shuffle();
        return output;
    }
}
