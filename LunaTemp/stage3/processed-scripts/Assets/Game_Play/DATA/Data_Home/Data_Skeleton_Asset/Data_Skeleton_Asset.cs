using Spine.Unity;
using System.Collections.Generic;
using UnityEngine;


using Spine.Unity;




[CreateAssetMenu(menuName = "Create Data/Home/Data_Skeleton_Asset", fileName = "Data_Skeleton_Asset", order = 0)]
public class Data_Skeleton_Asset : ScriptableObject
{
    [SerializeField] List<SkeletonDataAsset> m_All_Asset_Anim_Character = new List<SkeletonDataAsset>();
 


    [SerializeField] List<SkeletonDataAsset> m_All_Asset_Anim_Character_Skeleton_Data = new List<SkeletonDataAsset>();
  



    SkeletonDataAsset temp = null;
    public SkeletonDataAsset Get_Skeleton_Asset_Character_Asset_Reference(bool is_Using_Skin_2, Type_Character type_Character)
    {

         is_Using_Skin_2 = DataSaved.Get_Is_Using_Skin_2(type_Character);
        
        if (RootManager.Check_Is_AB_SKin())
        {
            if (is_Using_Skin_2)
            {
                return m_All_Asset_Anim_Character_Skeleton_Data[(int)type_Character % m_All_Asset_Anim_Character_Skeleton_Data.Count];


            }
            return m_All_Asset_Anim_Character_V2_Skeleton_Data[(int)type_Character % m_All_Asset_Anim_Character_V2_Skeleton_Data.Count];


        }
        if (is_Using_Skin_2)
        {
            return m_All_Asset_Anim_Character_V2_Skeleton_Data[(int)type_Character % m_All_Asset_Anim_Character_V2_Skeleton_Data.Count];


        }
        return m_All_Asset_Anim_Character_Skeleton_Data[(int)type_Character % m_All_Asset_Anim_Character_Skeleton_Data.Count];

    }
    public SkeletonDataAsset Get_Skeleton_Asset_Character(Type_Character type_Character)
    {
     
       
    
        return m_All_Asset_Anim_Character[(int)type_Character % m_All_Asset_Anim_Character.Count];
    }


    //-----------------------------------boss---------------------------------------------------------------

 

    
    [SerializeField] List<SkeletonDataAsset> m_All_Asset_Anim_Character_V2_Skeleton_Data = new List<SkeletonDataAsset>();
 

    
    [SerializeField] List<GameObject> m_All_Boss_Anim = new List<GameObject>();

 
    [SerializeField] List<GameObject> m_All_Asset_Anim_Boss_Skeleton_Data_GameObject = new List<GameObject>();
    public GameObject Get_GameObject_Reference_Asset_Boss_Anim(Type_Player type_Boss)
    {

        return m_All_Asset_Anim_Boss_Skeleton_Data_GameObject[My_Utils.Get_Id_Boss(type_Boss) % m_All_Asset_Anim_Boss_Skeleton_Data_GameObject.Count];

    }


  


    //-------------------------------------------------typegolem---------------------------------------------------------------------
    [SerializeField] List<SkeletonDataAsset> m_All_Asset_Anim_Golem_Skeleton_Data = new List<SkeletonDataAsset>();

    public SkeletonDataAsset Get_Skeleton_Asset_Reference_Asset_Golem(Type_Golem type_Golem)
    {
        if (type_Golem == Type_Golem.Golem_Fire)
        {
            return m_All_Asset_Anim_Golem_Skeleton_Data[0];
        }
        else
        {
            return m_All_Asset_Anim_Golem_Skeleton_Data[1];

        }
    }







}
