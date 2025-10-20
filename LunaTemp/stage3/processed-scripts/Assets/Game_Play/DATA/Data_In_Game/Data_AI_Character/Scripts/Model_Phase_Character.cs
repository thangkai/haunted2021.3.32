using System.Collections.Generic;

[System.Serializable]
public class Model_Phase_Character
{
    public string name_Phase;
    public string description;
    public List<Model_Condition_Phase> m_All_Condition = new List<Model_Condition_Phase>();
    public List<Model_Ratio_Turret> m_All_Ratio_Turret = new List<Model_Ratio_Turret>();
}
