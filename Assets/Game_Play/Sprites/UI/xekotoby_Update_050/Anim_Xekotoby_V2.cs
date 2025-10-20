using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;


public class Anim_Xekotoby_V2 : MonoBehaviour
{
    public Transform m_Target;
    public Transform m_From;
    public int m_Time_Open_Chest = 1;
    public Transform m_Card;
    private void OnEnable()
    {
        
        m_Card.DOLocalMove(m_Target.localPosition, 1f).SetEase(Ease.Flash);
    }
}
