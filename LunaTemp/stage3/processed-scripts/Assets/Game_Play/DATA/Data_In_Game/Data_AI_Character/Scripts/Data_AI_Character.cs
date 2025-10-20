using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_AI_Character", fileName = "Data_AI_Character_", order = 0)]
public class Data_AI_Character : ScriptableObject
{
    public Type_Character type_Character;
    [SerializeField] List<Model_Phase_Character> m_All_Phases = new List<Model_Phase_Character>();

    public Model_Phase_Character Get_Data_Phase(int index_Phase)
    {
        if (index_Phase >= m_All_Phases.Count - 1)
        {
            index_Phase = m_All_Phases.Count - 1;
        }
        return m_All_Phases[index_Phase];
    }
}
