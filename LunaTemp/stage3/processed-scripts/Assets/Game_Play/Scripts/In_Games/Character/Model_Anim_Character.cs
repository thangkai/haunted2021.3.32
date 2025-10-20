using Spine.Unity;
using System;
using System.Collections.Generic;
using UnityEngine;

public class Model_Anim_Character : MonoBehaviour
{
    [SerializeField] private Transform m_Pos_Ammor_Follow;
    [SerializeField] SkeletonAnimation m_Anim;
    [SerializeField] MeshRenderer m_Mesh_Anim;
    [SerializeField] Transform m_Take_Dame;
    [SerializeField] ParticleSystem m_FX;

    public List<ParticleSystem> m_All_Effect_Mui_Mau = new List<ParticleSystem>();
    public List<ParticleSystemRenderer> m_All_Effect_Mui_Mau_2 = new List<ParticleSystemRenderer>();
    [SerializeField] Transform mBulletBoss;
    [SerializeField] internal Transform mPosSkill;
    [SerializeField] internal Transform mSkillPet;
    public SkeletonAnimation Get_SkeletonAnimation()
    {
        return m_Anim;
    }

    public Transform  PosSkillPet()
    {
        return mPosSkill;
    }

    public Transform  PosSkillPetAnim()
    {
        return mSkillPet;
    }

    public MeshRenderer Get_Mesh_Anim()
    {
        return m_Mesh_Anim;
    }

    public Transform Get_Pos_Ammor_Follow()
    {
        return m_Pos_Ammor_Follow == null ? transform : m_Pos_Ammor_Follow;
    }

    public Transform Get_Take_Dame()
    {
        return m_Take_Dame;
    }
    
    public Transform GetBulletBoss()
    {
        return mBulletBoss;
    }
    public ParticleSystem Get_Particle()
    {
        return m_FX;
    }

    public void Set_Data_Character(bool isUsingSkin2, Type_Character type_Character, Action action_Done = null)
    {
        
        
        var skeletonAsset = Data_In_Game.Instance
            .Get_Data_Skeleton_Asset()
            .Get_Skeleton_Asset_Character_Asset_Reference(isUsingSkin2, type_Character);

        m_Anim.skeletonDataAsset = skeletonAsset;
        if (DataSaved.Get_Skin_Character_Equipped() == Type_Character.Raven)
        {
            m_Anim.AnimationName = "idle";
        }
        else
        {
            m_Anim.AnimationName = "idle";
        }

        m_Anim.Initialize(true);

        if (action_Done != null)
        {
            action_Done.Invoke();
        }
        
        //
        // BundleObjectLoader.Instance.LoadSkeletonDataAssetFromFile(
        //     Data_In_Game.Instance.Get_Data_Skeleton_Asset().Get_Skeleton_Asset_Character_Asset_Reference(isUsingSkin2, type_Character), Boss_In_Game =>
        // {
        //     m_Anim.skeletonDataAsset = Boss_In_Game;
        //     if (DataSaved.Get_Skin_Character_Equipped() == Type_Character.Raven)
        //     {
        //         m_Anim.AnimationName = "idle";
        //     }
        //     else
        //     {
        //         m_Anim.AnimationName = "idle";
        //     }
        //
        //     m_Anim.Initialize(true);
        //
        //     if (action_Done != null)
        //     {
        //         action_Done.Invoke();
        //     }
        // });
    }
    public void Set_Data_Golem(Type_Golem type_golem, Action action_Done = null)
    {
        // BundleObjectLoader.Instance.LoadSkeletonDataAssetFromFile(Data_In_Game.Instance.Get_Data_Skeleton_Asset().Get_Skeleton_Asset_Reference_Asset_Golem(type_golem), Boss_In_Game =>
        // {
            m_Anim.skeletonDataAsset = Data_In_Game.Instance.Get_Data_Skeleton_Asset().Get_Skeleton_Asset_Reference_Asset_Golem(type_golem) ;



            m_Anim.Initialize(true);

            if (action_Done != null)
            {
                action_Done.Invoke();
            }
       // });
    }
    
    
    
    public void Set_Data_Pet(PetName typePet, Action action_Done = null)
    {
        // BundleObjectLoader.Instance.LoadSkeletonDataAssetFromFile(Data_In_Game.Instance.Get_Data_Skeleton_Asset().Get_Skeleton_Asset_Reference_Asset_Pet(typePet), Boss_In_Game =>
        // {
        //     m_Anim.skeletonDataAsset = Boss_In_Game;
        //
        //     // m_Anim.AnimationName = "idle";
        //
        //
        //     m_Anim.Initialize(true);
        //
        //     if (action_Done != null)
        //     {
        //         action_Done.Invoke();
        //     }
        // });
    }

    
    
    
    
    
    
    
}
