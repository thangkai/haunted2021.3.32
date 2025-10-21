using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Skill_Boss", fileName = "Data_Skill_Boss_", order = 0)]
public class Data_Skill_Boss : ScriptableObject
{
    public Type_Skill_Boss type_Skill_Boss;
    public Model_Name name_Skills;
    public Model_Name name_Descriptions;
    public float time_Exist;
    public float time_CD;
    public int min_Level_Boss;
    public int max_Number_Upgrade;
    public float ratio;
}
