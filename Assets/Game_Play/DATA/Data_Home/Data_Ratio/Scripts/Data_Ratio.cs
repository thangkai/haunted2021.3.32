using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/IN GAME/Data Ratio", fileName = "Data_Ratio", order = 0)]
public class Data_Ratio : ScriptableObject
{
    [SerializeField] float[] m_Ratio_H_W_Icon_Character;
    [SerializeField] float[] m_Ratio_H_W_Icon_Character_V2;
    [SerializeField] float[] m_Ratio_H_W_Icon_Boss;

    public float Get_Ratio_H_W_Icon_Character(Type_Character type_Character)
    {
        if (RootManager.Check_Is_AB_SKin())
        {
            return m_Ratio_H_W_Icon_Character_V2[(int)type_Character % m_Ratio_H_W_Icon_Character_V2.Length];
        }
        return m_Ratio_H_W_Icon_Character[(int)type_Character % m_Ratio_H_W_Icon_Character.Length];
    }

    public float Get_Ratio_H_W_Icon_Character(Type_Character type_Character, bool is_Skin_2)
    {
        if (RootManager.Check_Is_AB_SKin())
        {
            if (is_Skin_2)
            {
                return m_Ratio_H_W_Icon_Character[(int)type_Character % m_Ratio_H_W_Icon_Character.Length];
            }
            return m_Ratio_H_W_Icon_Character_V2[(int)type_Character % m_Ratio_H_W_Icon_Character_V2.Length];
        }
        if (is_Skin_2)
        {
            return m_Ratio_H_W_Icon_Character_V2[(int)type_Character % m_Ratio_H_W_Icon_Character_V2.Length];
        }
        return m_Ratio_H_W_Icon_Character[(int)type_Character % m_Ratio_H_W_Icon_Character.Length];
    }

    public float Get_Ratio_H_W_Icon_Boss(Type_Player type_Boss)
    {
        return m_Ratio_H_W_Icon_Boss[(int)My_Utils.Get_Id_Boss(type_Boss) % m_Ratio_H_W_Icon_Boss.Length];
    }
}
