using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Skill_Boss_Manager", fileName = "Data_Skill_Boss_Manager", order = 0)]
public class Data_Skill_Boss_Manager : ScriptableObject
{
    [SerializeField] Data_Skill_Boss[] m_All_Data_Skill_Boss;

    public Data_Skill_Boss Get_Data_Skill_Boss(Type_Skill_Boss type_Skill)
    {
        return m_All_Data_Skill_Boss[(int)type_Skill % m_All_Data_Skill_Boss.Length];
    }
}
