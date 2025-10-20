using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using DG.Tweening;
public class ButtonUIBase : MonoBehaviour,IPointerDownHandler, IPointerUpHandler
{
    private Tween tweenButtonDown;
    private Tween tweenButtonUp;
   [SerializeField] private Vector3 _vector3 = new Vector3(0.85f, 0.85f, 0.85f);

    public void Start()
    {
        transform.localScale = Vector3.one;
    }

    public void OnPointerDown(PointerEventData eventData)
    {
       // Debug.LogError("evenent");
        tweenButtonDown.Kill();
        tweenButtonDown = transform.DOScale( _vector3, 0.1f).OnComplete(() =>
        {
            tweenButtonDown.Kill();
            transform.localScale = _vector3;
        });

    }

    // Khi thả ra
    public void OnPointerUp(PointerEventData eventData)
    {
        tweenButtonUp.Kill();
        tweenButtonUp = transform.DOScale(Vector3.one, 0.1f).OnComplete(() =>
        {
            tweenButtonUp.Kill();
            transform.localScale =Vector3.one;
            
        });
    }
}
