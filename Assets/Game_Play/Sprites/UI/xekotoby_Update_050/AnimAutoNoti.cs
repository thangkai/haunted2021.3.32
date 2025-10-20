using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class AnimAutoNoti : MonoBehaviour
{
    


    private Tween _scaleTween;
    [SerializeField]internal Vector3 scaleTarget = new Vector3(0.9f, 0.9f, 0.9f) ;
    [SerializeField] internal Vector3 scaleFrom = Vector3.one;
    void OnEnable()
    {
        // Dừng tween cũ nếu còn tồn tại
        if (_scaleTween != null && _scaleTween.IsActive())
            _scaleTween.Kill();

        // Đặt scale ban đầu để không bị giật
        transform.localScale = scaleTarget;

        // Bắt đầu tween loop
        _scaleTween = transform.DOScale(scaleFrom, 0.5f)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine);
    }

    void OnDisable()
    {
        // Dọn tween khi disable
        if (_scaleTween != null)
            _scaleTween.Kill();
    }
}
