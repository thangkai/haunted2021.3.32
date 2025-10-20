using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Anim_Day_Leo : MonoBehaviour
{
    [SerializeField] SkeletonAnimation m_Anim_Day_Leo;
    Tween m_Tween_Delay_To_Idle;

    public void Play_Anim()
    {
        gameObject.Set_Active(true);

        m_Anim_Day_Leo.AnimationState.SetAnimation(0, "raise", false);
        m_Tween_Delay_To_Idle = DOVirtual.DelayedCall(2.7f, () =>
        {
            m_Anim_Day_Leo.AnimationState.SetAnimation(0, "idle", true);
        }, false);
    }

    private void OnDisable()
    {
        m_Tween_Delay_To_Idle.Do_Kill();
    }
}
