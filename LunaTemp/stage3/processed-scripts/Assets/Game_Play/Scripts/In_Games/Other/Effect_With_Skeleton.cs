using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Effect_With_Skeleton : MonoBehaviour
{
    [SerializeField] SkeletonAnimation m_Anim;
    [SerializeField] float m_Time_Destroy = 1f;

    public void Play_Animation_Explosion_Fire(float range)
    {
        m_Anim.transform.localScale = new Vector3(range * 2f, range * 2f, range * 2f);

        Destroy(gameObject, m_Time_Destroy);
    }
}
