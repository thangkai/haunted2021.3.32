using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Info_Turret", fileName = "Data_Info_", order = 0)]
public class Data_Info_Turret : ScriptableObject
{
    public Type_Turret type_Turret;
    public Model_Name[] model_Names;
    public string description_EN;
    public string description_VI;
    public Model_Skill[] model_Skills;
    [SerializeField] Model_Price[] m_All_Price_Upgrades;
    [SerializeField] Model_Price[] m_All_Price_Upgrades_4_Minutes;
    public Model_Requirement[] m_Requirement_Upgrades;

    public Model_Price Get_Price_By_Level(int level)
    {
        if (m_All_Price_Upgrades_4_Minutes != null && m_All_Price_Upgrades_4_Minutes.Length > 0 && RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            if (level < m_All_Price_Upgrades_4_Minutes.Length)
            {
                return m_All_Price_Upgrades_4_Minutes[level];
            }
            else
            {
                return m_All_Price_Upgrades_4_Minutes[m_All_Price_Upgrades_4_Minutes.Length - 1];
            }
        }
        else
        {
            if (level < m_All_Price_Upgrades.Length)
            {
                return m_All_Price_Upgrades[level];
            }
            else
            {
                return m_All_Price_Upgrades[m_All_Price_Upgrades.Length - 1];
            }
        }
    }
}
