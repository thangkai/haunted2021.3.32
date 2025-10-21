using System;
using UnityEngine;

using XekotobyNew;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Sprite_Home", fileName = "Data_Sprite_Home", order = 0)]
public class Data_Sprite_Home : ScriptableObject
{
    
    
    #region ============== Sprite Character ==============
    [Header("____ Sprite Character _____")]
    [SerializeField] Sprite[] m_All_Icon_Character_Small;
  
     [SerializeField] Sprite[] m_All_Icon_Character_Small_V2;
 

    [SerializeField] Sprite[] m_All_Icon_Character_Small_V3_Layout;
    public Sprite Get_Icon_Character_Small(Type_Character type_Character)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    return m_All_Icon_Character_Small_V2[(int)type_Character % m_All_Icon_Character_Small_V2.Length];
        //}
        return m_All_Icon_Character_Small[(int)type_Character % m_All_Icon_Character_Small.Length];
    }


   
  



 
    
    public Sprite Get_Icon_Skin_Small_Character(Type_Character type_Character, bool is_Skin_2)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    if (is_Skin_2)
        //    {
        //        return m_All_Icon_Skin_2_Character_Small_V2[(int)type_Character % m_All_Icon_Skin_2_Character_Small_V2.Length];
        //    }
        //    return m_All_Icon_Character_Small_V2[(int)type_Character % m_All_Icon_Character_Small_V2.Length];
        //}
        if (is_Skin_2)
        {
            return m_All_Icon_Character_Small[(int)type_Character % m_All_Icon_Character_Small.Length];
        }
        return m_All_Icon_Character_Small[(int)type_Character % m_All_Icon_Character_Small.Length];
    }
    
    
    
    public Sprite Get_Icon_Skin_Character_V2(Type_Character type_Character, bool is_Skin_2)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    if (is_Skin_2)
        //    {
        //        return m_All_Icon_Skin_2_Character_V2[(int)type_Character % m_All_Icon_Skin_2_Character_V2.Length];
        //    }
        //    return m_All_Icon_Character_V2[(int)type_Character % m_All_Icon_Character_V2.Length];
        //}
        if (is_Skin_2)
        {
            return m_All_Icon_Character_Small_V2[(int)type_Character % m_All_Icon_Character_Small_V2.Length];
        }
        return m_All_Icon_Character_Small_V2[(int)type_Character % m_All_Icon_Character_Small_V2.Length];
    }


    

    #endregion

    #region ============== Sprite Boss ==============
    [Header("____ Sprite Boss _____")]

    [SerializeField] Sprite[] m_All_Icon_Boss_Small;
    

    public Sprite Get_Icon_Boss_Small(Type_Player type_Boss)
    {
        if (RootManager.Check_Is_AB_SKin())
        {
            return m_All_Icon_Boss_Small[(int)My_Utils.Get_Id_Boss(type_Boss) % m_All_Icon_Boss_Small.Length];
        }
        return m_All_Icon_Boss_Small[(int)My_Utils.Get_Id_Boss(type_Boss) % m_All_Icon_Boss_Small.Length];
    }


    #endregion
    
    
    
 


    

   




}

