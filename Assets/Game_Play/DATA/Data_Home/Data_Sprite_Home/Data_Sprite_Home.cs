using System;
using UnityEngine;

using XekotobyNew;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Sprite_Home", fileName = "Data_Sprite_Home", order = 0)]
public class Data_Sprite_Home : ScriptableObject
{
    
    
    #region ============== Sprite Character ==============
    [Header("____ Sprite Character _____")]
    [SerializeField] Sprite[] m_All_Icon_Character_Small;
    [SerializeField] Sprite[] m_All_Icon_Skin_2_Character_Small;
     [SerializeField] Sprite[] m_All_Icon_Character_Small_V2;
    [SerializeField] Sprite[] m_All_Icon_Skin_2_Character_Small_V2;

    [SerializeField] Sprite[] m_All_Icon_Character_Small_V3_Layout;
    public Sprite Get_Icon_Character_Small(Type_Character type_Character)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    return m_All_Icon_Character_Small_V2[(int)type_Character % m_All_Icon_Character_Small_V2.Length];
        //}
        return m_All_Icon_Character_Small[(int)type_Character % m_All_Icon_Character_Small.Length];
    }


    [SerializeField] Sprite[] m_All_Icon_Character;
    [SerializeField] Sprite[] m_All_Icon_Skin_2_Character;

    public Sprite Get_Icon_Character(Type_Character type_Character)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    return m_All_Icon_Character_V2[(int)type_Character % m_All_Icon_Character_V2.Length];
        //}
        return m_All_Icon_Character[(int)type_Character % m_All_Icon_Character.Length];
    }

    public Sprite Get_Icon_Rank_Character(Type_Rank_Character type_Character)
    {
        //if (RootManager.Check_Is_AB_SKin())
        //{
        //    return m_All_Icon_Character_V2[(int)type_Character % m_All_Icon_Character_V2.Length];
        //}
        return m_All_Icon_Character_Small_V3_Layout[(int)type_Character % m_All_Icon_Character_Small_V3_Layout.Length];
    }
    public Sprite Get_Icon_Skin_Character(Type_Character type_Character, bool is_Skin_2)
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
            return m_All_Icon_Skin_2_Character[(int)type_Character % m_All_Icon_Skin_2_Character.Length];
        }
        return m_All_Icon_Character[(int)type_Character % m_All_Icon_Character.Length];
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
            return m_All_Icon_Skin_2_Character_Small[(int)type_Character % m_All_Icon_Skin_2_Character_Small.Length];
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
            return m_All_Icon_Skin_2_Character_Small_V2[(int)type_Character % m_All_Icon_Skin_2_Character_Small_V2.Length];
        }
        return m_All_Icon_Character_Small_V2[(int)type_Character % m_All_Icon_Character_Small_V2.Length];
    }


    

    public Sprite Get_Icon_Skin_Small_Character_Reflect(Type_Character type_Character, bool is_Skin_2)
    {
        return Get_Icon_Skin_Small_Character(type_Character, !is_Skin_2);
    }

    #endregion

    #region ============== Sprite Boss ==============
    [Header("____ Sprite Boss _____")]

    [SerializeField] Sprite[] m_All_Icon_Boss_Small;
    [SerializeField] Sprite[] m_All_Icon_Boss_Small_V2;

    public Sprite Get_Icon_Boss_Small(Type_Player type_Boss)
    {
        if (RootManager.Check_Is_AB_SKin())
        {
            return m_All_Icon_Boss_Small_V2[(int)My_Utils.Get_Id_Boss(type_Boss) % m_All_Icon_Boss_Small_V2.Length];
        }
        return m_All_Icon_Boss_Small[(int)My_Utils.Get_Id_Boss(type_Boss) % m_All_Icon_Boss_Small.Length];
    }

    [SerializeField] Sprite[] m_All_Icon_Boss;

    public Sprite Get_Icon_Boss(Type_Player type_Boss)
    {
        return m_All_Icon_Boss[(int)My_Utils.Get_Id_Boss(type_Boss) % m_All_Icon_Boss.Length];
    }

    #endregion
    
    
    
  
    [SerializeField] Sprite[] spritesCard;

    public Sprite Get_Icon_Card(Type_Rank_Character  typeRankCharacter)
    {
        return spritesCard[(int) typeRankCharacter ];
    }

    #region ============== Sprite Icon Skill Tree ==============
    [Header("____ Sprite Skill Tree _____")]
    [SerializeField] Sprite[] m_All_Icon_Skill_Tree;

    public Sprite Get_Icon_Skill_Tree(Type_Icon_Skill_Tree type_Skill_Tree)
    {
        if (type_Skill_Tree == Type_Icon_Skill_Tree.Skill_2_Student)
        {
            return Get_Icon_Character_Small(Type_Character.Student);
        }

        if (type_Skill_Tree == Type_Icon_Skill_Tree.Skill_2_Scientist)
        {
            return Get_Icon_Character_Small(Type_Character.Scientist);
        }

        if (type_Skill_Tree == Type_Icon_Skill_Tree.Skill_2_Manager)
        {
            return Get_Icon_Character_Small(Type_Character.Manager);
        }

        if (type_Skill_Tree == Type_Icon_Skill_Tree.Skill_2_Miner)
        {
            return Get_Icon_Character_Small(Type_Character.Miner);
        }

        if (type_Skill_Tree == Type_Icon_Skill_Tree.Skill_2_Repairer)
        {
            return Get_Icon_Character_Small(Type_Character.Repairer);
        }

        if (type_Skill_Tree == Type_Icon_Skill_Tree.Skill_2_Vampire_Hunter)
        {
            return Get_Icon_Character_Small(Type_Character.Vampire_Hunter);
        }
        return m_All_Icon_Skill_Tree[(int)type_Skill_Tree % m_All_Icon_Skill_Tree.Length];
    }




    [Header("____ Sprite Skill Tree_Gem _____")]
    [SerializeField] Sprite[] m_All_Icon_Skill_Tree_Gem;
    public Sprite Get_Icon_Skill_Tree_Gem(Type_Skill_Tree_Gem type_Skill_Tree)
    {
   
        return m_All_Icon_Skill_Tree_Gem[(int)type_Skill_Tree % m_All_Icon_Skill_Tree_Gem.Length];
    }


    #endregion

    //#region ============== Sprite Character V2 ==============
    //[Separator("Sprite Character V2")]
    //[SerializeField] Sprite[] m_All_Icon_Character_Small_V2;
    //[SerializeField] Sprite[] m_All_Icon_Character_V2;
    //[SerializeField] Sprite[] m_All_Icon_Skin_2_Character_V2;
    //[SerializeField] Sprite[] m_All_Icon_Skin_2_Character_Small_V2;

    //#endregion

 
    [SerializeField] Sprite[] m_Icon_Item_Supports;

    public Sprite Get_Icon_Item_Support(Type_Item_Support type_Item_Support)
    {
        return m_Icon_Item_Supports[(int)type_Item_Support];
    }
    
    
    
    [SerializeField] Sprite[] m_Icon_Lock_Go;

    public Sprite Get_Icon_Lock_Go(bool isLock)
    {
        return m_Icon_Lock_Go[isLock ? 0 : 1];
    }
    
     
 
    [SerializeField] Sprite[] m_Icon_Lock_Bg;

    public Sprite Get_Icon_Lock_Bg(bool isLock)
    {
        return m_Icon_Lock_Bg[isLock ? 0 : 1];
    }
    
  
    [SerializeField] Sprite[] m_Icon_Title_Bg;

    public Sprite Get_Icon_Title_Bg(bool isLock)
    {
        return m_Icon_Title_Bg[isLock ? 0 : 1];
    }
    
    
   
    [SerializeField] Sprite[] m_Icon_Bg_Story_Mission;

    public Sprite Get_Story_Mission_Bg(bool isLock)
    {
        return m_Icon_Bg_Story_Mission[isLock ? 0 : 1];
    }
    
    
   
    [SerializeField] Sprite[] m_Icon_Eggs;

    public Sprite Get_Icon_Eggs_Bg(int  index )
    {
//0 : ads
//1: eggs
//2 diamond
        
        
        return m_Icon_Eggs[index % m_Icon_Eggs.Length];

    }

    [SerializeField] private Sprite[] m_Icon_Eggs_Currency;
    
    public Sprite Get_Icon_Eggs_Currency(int  index )
    {
//0 : ads
//1: eggs
//2 diamond
        
        
        return m_Icon_Eggs_Currency[index % m_Icon_Eggs_Currency.Length];

    }

    

    [SerializeField] private Sprite[] m_Icon_Pets;
    [SerializeField] private Sprite[] m_Icon_Pets_SR;
    [SerializeField] private Sprite[] m_Icon_Pets_SSR;
    
    public Sprite Get_Icon_Pets(int  index, int level )
    {
        if (level == 2)
        {
            //Debug.LogError("Get_Icon_Pets 2");
            return m_Icon_Pets_SR[index % m_Icon_Pets.Length];
        }

        if (level == 3)
        {
          //  Debug.LogError("Get_Icon_Pets 3");
            return m_Icon_Pets_SSR[index % m_Icon_Pets.Length];

        }
        
        //Debug.LogError("Get_Icon_Pets 1");
        return m_Icon_Pets[index % m_Icon_Pets.Length];

    }

    [SerializeField] private Sprite[] m_Level_Pets;
    
    public Sprite Get_Level_Pets(int  index )
    {

        
        
        return m_Level_Pets[index % m_Level_Pets.Length];

    }
    
    
    [SerializeField] private Sprite[] m_Rank_Pets;
    
    public Sprite Get_Rank_Pets(int  index )
    {

        
        
        return m_Rank_Pets[index % m_Rank_Pets.Length];

    }
    
    
        
    [SerializeField] private Sprite[] m_Rank_Pets_Anim;
    
    public Sprite Get_Rank_Pets_Anim(int  index )
    {

        
        
        return m_Rank_Pets_Anim[index % m_Rank_Pets_Anim.Length];

    }
    
    
    
    
       
    [SerializeField] private Sprite[] mBtnListPetStatus;
    
    // true la active
    // false    la  inavitve
    public Sprite Get_Button_Pets_Status(bool   isActive )
    {

        
        
        return isActive ? mBtnListPetStatus[0]: mBtnListPetStatus[1] ;

    }
    

   
   
    [SerializeField] PackGem[] spritesGem; // Giữ mảng này để serialize trong Inspector
    public Sprite Get_Type_Gem(Type_Pack  type )
    {

        
       foreach (var pack in spritesGem)
       {
           if (pack.typePack == type)
           {
               return pack.Sprite;
           }
       }
       return null; // Hoặc
      

    }

    [SerializeField] private Sprite[] mListReward;
    
    
    public Sprite GetReward(int   isActive )
    {



        return mListReward[isActive % mListReward.Length];

    }



}

[Serializable]
public struct PackGem
{
    public Type_Pack typePack;
    public Sprite Sprite;
}
