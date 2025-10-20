
using System;
using System.Collections.Generic;
using UnityEngine;



[CreateAssetMenu (menuName = "Create Data/Home/Data_Type_Rank_Character", fileName = "Data_Type_Rank_Character",order = 0)]
public class Data_Type_Rank_Character : ScriptableObject
{
   public Type_Rank_Character m_Type_Rank_Character;
  public List<Info_Type_Rank> m_Info_Type_Rank = new List<Info_Type_Rank>(); 
   

}


[Serializable]
public struct Info_Type_Rank
{
   public float m_Health_Increase_With_Each_Level_Star;
   public float m_Health_Increase_With_Each_Star;
   public float m_Dame_Increase_With_Each_Level_Star;
   public float m_Dame_Increase_With_Each_Star;
   public int m_Gem_1_Update_Star;
   public int m_Dollar_1_Each_level;
   public List<int> star;
   
 
   //85+25==11+ 0.4 =11.4
}



