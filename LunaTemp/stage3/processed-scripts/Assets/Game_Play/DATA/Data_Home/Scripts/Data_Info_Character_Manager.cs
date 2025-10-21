using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Info_Character_Manager", fileName = "Data_Info_Character_Manager", order = 0)]
public class Data_Info_Character_Manager : ScriptableObject
{
    [SerializeField] List<Data_Info_Character> m_All_Data_Player = new List<Data_Info_Character>();
    //[SerializeField] List<Data_Info_Character> m_All_Data_Player_V2 = new List<Data_Info_Character>();

    public Data_Info_Character Get_Data_Info_Character(Type_Character type_Character)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    return m_All_Data_Player_V2[(int)type_Character % m_All_Data_Player_V2.Count];
        //}
        //  Debug.Log(m_All_Data_Player.Count);
        return m_All_Data_Player[(int)type_Character % m_All_Data_Player.Count];
    }

    public Model_Name Get_Name_Character(Type_Character type_Character)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    return m_All_Data_Player_V2[(int)type_Character % m_All_Data_Player_V2.Count].name_Character;
        //}
        return m_All_Data_Player[(int)type_Character % m_All_Data_Player.Count].name_Character;
    }

    public int Get_Price(Type_Character type_Character)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    return m_All_Data_Player_V2[(int)type_Character % m_All_Data_Player_V2.Count].price;
        //}
        return m_All_Data_Player[(int)type_Character % m_All_Data_Player.Count].price;
    }

    public string Get_Price_USD(Type_Character type_Character)
    {
        Type_Pack type_Pack = My_Utils.Convert_To_Type_Pack(type_Character);
        if (type_Pack != Type_Pack.None)
        {
            string output = " ";
            if (string.IsNullOrEmpty(output))
            {
                output = m_All_Data_Player[(int)type_Character % m_All_Data_Player.Count].price_Use_EN;
                return output;
            }
            return output;
        }
        return "";
    }

    public Type_Money Get_Type_Money(Type_Character type_Character)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    return m_All_Data_Player_V2[(int)type_Character % m_All_Data_Player_V2.Count].type_Money;
        //}
        return m_All_Data_Player[(int)type_Character % m_All_Data_Player.Count].type_Money;
    }
    public Type_Rank_Character Get_Type_Rank(Type_Character type_Character)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    return m_All_Data_Player_V2[(int)type_Character % m_All_Data_Player_V2.Count].type_Money;
        //}
        return m_All_Data_Player[(int)type_Character % 1].m_Rank_Character;
    }


}
