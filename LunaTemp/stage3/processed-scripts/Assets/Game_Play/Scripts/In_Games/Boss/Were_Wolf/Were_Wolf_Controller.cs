using Spine.Unity;
using System.Collections.Generic;
using UnityEngine;

public class Were_Wolf_Controller : Base_Boss
{
    [SerializeField] List<ParticleSystem> m_All_Effect_Mui_Mau = new List<ParticleSystem>();
    [SerializeField] List<ParticleSystemRenderer> m_All_Effect_Mui_Mau_2 = new List<ParticleSystemRenderer>();

    public override void Set_Data_Anim(SkeletonAnimation skeletonAnimation, MeshRenderer meshRenderer, Transform take_Dame, 
        ParticleSystem m_Fx, List<ParticleSystem> All_Effect_Mui_Mau, List<ParticleSystemRenderer> All_Effect_Mui_Mau_2,Transform posBulletAdc  )
    {
        base.Set_Data_Anim(skeletonAnimation, meshRenderer, take_Dame, m_Fx, m_All_Effect_Mui_Mau, m_All_Effect_Mui_Mau_2, posBulletAdc);

        m_All_Effect_Mui_Mau.Clear();
        m_All_Effect_Mui_Mau_2.Clear();

        m_All_Effect_Mui_Mau.AddRange(All_Effect_Mui_Mau);
        m_All_Effect_Mui_Mau_2.AddRange(All_Effect_Mui_Mau_2);
    }

    public override void Update_Sorting_Order(int order_Boss)
    {


        if (m_All_Effect_Mui_Mau.Count > 0)
        {
            if (m_All_Effect_Mui_Mau[0].gameObject.activeSelf)
            {
                for (int i = 0; i < m_All_Effect_Mui_Mau.Count; i++)
                {
                    if (m_All_Effect_Mui_Mau_2[i])
                    {
                        m_All_Effect_Mui_Mau_2[i].sortingOrder = order_Boss + 1;
                    }
                }
            }
        }
        
    }

    public override void Set_Active_Skill_L()
    {
        for (int i = 0; i < m_All_Effect_Mui_Mau.Count; i++)
        {
            if (m_All_Effect_Mui_Mau[i])
            {
                m_All_Effect_Mui_Mau[i].gameObject.SetActive(true);
                m_All_Effect_Mui_Mau[i].Play();
            }
        }
    }

    public override void Set_Inactive_Skill_L()
    {
        for (int i = 0; i < m_All_Effect_Mui_Mau.Count; i++)
        {
            if (m_All_Effect_Mui_Mau[i])
            {
                m_All_Effect_Mui_Mau[i].gameObject.SetActive(false);
            }
        }
    }
}