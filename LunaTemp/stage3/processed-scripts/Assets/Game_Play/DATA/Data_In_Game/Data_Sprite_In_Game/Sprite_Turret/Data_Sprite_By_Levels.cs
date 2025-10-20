using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Sprite/Data_Sprite_By_Levels", fileName = "Data_Sprite_Turret_", order = 0)]
public class Data_Sprite_By_Levels : ScriptableObject
{
    public Type_Turret type_Turret;
    public List<Sprite> m_All_Sprite_By_Level = new List<Sprite>();

    public Sprite Get_Icon(int level)
    {
        if (level >= m_All_Sprite_By_Level.Count)
        {
            level = m_All_Sprite_By_Level.Count - 1;
        }
        if (level < 0)
        {
            level = 0;
        }
        return m_All_Sprite_By_Level[level % m_All_Sprite_By_Level.Count];
    }
}
