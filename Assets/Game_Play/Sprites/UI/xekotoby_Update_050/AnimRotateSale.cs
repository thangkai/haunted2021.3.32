using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class AnimRotateSale : MonoBehaviour
{ [SerializeField] private float duration = 1f; // Thời gian 1 vòng xoay
    private Tween _rotateTween;

    void OnEnable()
    {
        // Bắt đầu xoay liên tục
        _rotateTween = transform.DORotate(
                new Vector3(0, 0, 360), 
                duration, 
                RotateMode.FastBeyond360)
            .SetEase(Ease.Linear)      // Quay đều, không tăng giảm tốc
            .SetLoops(-1, LoopType.Restart)
            .SetRelative(true);        // Xoay cộng dồn mỗi vòng
    }

    void OnDisable()
    {
        // Dừng xoay khi GameObject bị disable
        if (_rotateTween != null && _rotateTween.IsActive())
        {
            _rotateTween.Kill();
            _rotateTween = null;
        }
    }
}
