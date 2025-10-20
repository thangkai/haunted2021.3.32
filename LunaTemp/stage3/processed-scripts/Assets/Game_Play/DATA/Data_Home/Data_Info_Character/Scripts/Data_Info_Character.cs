using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Info_Character", fileName = "Data_Info_Character_", order = 0)]
public class Data_Info_Character : ScriptableObject
{
    public Type_Character type_Character;
    public Model_Name name_Character;
    public Model_Name descriptions;

    public int price;
    public Type_Money type_Money;
    public string price_Use_EN; 
    public string price_Use_VI; 

 
    public int price_Skin_2;

   
    public Model_Name descriptions_Skill_1;
    public Model_Name descriptions_Skill_2;
    public int price_Skill_2;
    

  
    public bool m_Is_Has_Skill_3;
    public int price_Skill_3;
    public Model_Name descriptions_Skill_3;
    
    

    public int m_Hp;
    public int m_Atk;
    public Type_Rank_Character m_Rank_Character;

   public List<TypeSkillIcon> mTypeSkillIcons;
}
