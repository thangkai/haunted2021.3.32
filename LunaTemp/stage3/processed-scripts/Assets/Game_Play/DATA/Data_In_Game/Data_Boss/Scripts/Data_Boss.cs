using UnityEngine;

/**
 * Class using Get/Set data Boss when Play In Game
 * */
[CreateAssetMenu(menuName = "Create Data/In Game/Data_Boss", fileName = "Data_Boss_", order = 0)]
public class Data_Boss : ScriptableObject
{
    [SerializeField] Bool_Global_Variable m_Live_Data_Boss_Die;
    [SerializeField] int level_Boss;

    public Bool_Global_Variable Get_Live_Data_Boss_Die()
    {
        return m_Live_Data_Boss_Die;
    }

    public void Notify_Boss_Die()
    {
        if (m_Live_Data_Boss_Die)
        {
            m_Live_Data_Boss_Die.Value = true;
        }
    }

    public void Reset_Data()
    {
        level_Boss = 0;
    }

    #region ============= Config EXP =============

    public int Get_Level_Boss()
    {
        return level_Boss;
    }

    public void Increase_Level(int level = 1)
    {
        level_Boss += level;
    }

    #endregion
}
