using System.Collections.Generic;

[System.Serializable]
public class Model_Info_Boss
{
    public string name_Boss;
    public Type_Player type_Boss;
    public float speed_Attack = 1f;
    public int XP = 20;

    public List<Type_Skill_Boss> m_Pool_Skill = new List<Type_Skill_Boss>();
    public Model_Stat_Boss stat_Boss;
    public int m_Amor;//xekotoby

}
