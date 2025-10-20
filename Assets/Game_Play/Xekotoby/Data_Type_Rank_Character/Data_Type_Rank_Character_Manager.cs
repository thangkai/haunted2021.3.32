using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Type_Rank_Character_Manager", fileName = "Data_Type_Rank_Character_Manager", order = 0)]
public class Data_Type_Rank_Character_Manager : ScriptableObject
{
    [SerializeField] List<Data_Type_Rank_Character> m_All_Data_Player = new List<Data_Type_Rank_Character>();
    
    
    public Data_Type_Rank_Character Get_Data_Info_Character(Type_Rank_Character type_Character)
    {
      
       // Debug.Log(m_All_Data_Player.Count);
        return m_All_Data_Player[(int)type_Character % m_All_Data_Player.Count];
    }

    public Info_Type_Rank Data_Info_Type_CharacteR(int star ,Type_Rank_Character type_Character)
    {
        return m_All_Data_Player[(int)type_Character % m_All_Data_Player.Count].m_Info_Type_Rank[star];
    }
  

    
}
