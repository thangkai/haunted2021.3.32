using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class Anim_Shied_Safeguard : MonoBehaviour
{
    [SerializeField] SkeletonAnimation m_Anim_Shield_Safeguard;
    Tween m_Tween_Delay_To_Idle;

    public void Play_Anim()
    {
        gameObject.Set_Active(true);
        m_Anim_Shield_Safeguard.gameObject.SetActive(true);
        m_Anim_Shield_Safeguard.AnimationState.SetAnimation(0, "loop", true);
        //m_Tween_Delay_To_Idle = DOVirtual.DelayedCall(2.7f, () =>
        //{
        //    m_Anim_Shield_Safeguard.AnimationState.SetAnimation(0, "idle", true);
        //}, false);
    }

    private void OnDisable()
    {
        m_Tween_Delay_To_Idle.Do_Kill();
    }
}
