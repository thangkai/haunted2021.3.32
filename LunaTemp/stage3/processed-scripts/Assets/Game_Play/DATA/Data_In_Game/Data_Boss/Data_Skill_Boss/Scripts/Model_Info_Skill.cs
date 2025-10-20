[System.Serializable]
public class Model_Info_Skill
{
    public float time_Exist;
    public float time_CD;
    public int min_Level_Boss;
    public int max_Number_Upgrade;
    public float ratio;

    public Model_Info_Skill(Data_Skill_Boss data_Skill_Boss)
    {
        time_Exist = data_Skill_Boss.time_Exist;
        time_CD = data_Skill_Boss.time_CD;
        min_Level_Boss = data_Skill_Boss.min_Level_Boss;
        max_Number_Upgrade = data_Skill_Boss.max_Number_Upgrade;
        ratio = data_Skill_Boss.ratio;
    }
}
