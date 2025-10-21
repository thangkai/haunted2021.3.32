using UnityEngine;

public class Skill_Boss_Controller : MonoBehaviour
{
    [SerializeField] int[] total_Skill_Upgraded;

    public void Increase_Skill(Type_Skill_Boss type_Skill_Boss)
    {
        total_Skill_Upgraded[(int)type_Skill_Boss] += 1;
    }

    public int Get_Total_Upgrade_Skill(Type_Skill_Boss type_Skill_Boss)
    {
        return total_Skill_Upgraded[(int)type_Skill_Boss];
    }

    public bool Check_Has_Skill(Type_Skill_Boss type_Skill_Boss)
    {
        return total_Skill_Upgraded[(int)type_Skill_Boss] > 0;
    }

    public int Get_Level_Skill(Type_Skill_Boss type_Skill_Boss)
    {
        return total_Skill_Upgraded[(int)type_Skill_Boss];
    }
}
