using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_AI_Character_Manager", fileName = "Data_AI_Character_Manager", order = 0)]
public class Data_AI_Character_Manager : ScriptableObject
{
    [SerializeField] List<Data_AI_Character> m_All_AI_Character = new List<Data_AI_Character>();

    public Model_Phase_Character Get_Data_Phase(Type_Character type_Character, int index_Phase)
    {
        return m_All_AI_Character[(int)type_Character].Get_Data_Phase(index_Phase);
    }
}
