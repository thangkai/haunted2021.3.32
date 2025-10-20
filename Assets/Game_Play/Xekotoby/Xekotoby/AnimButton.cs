using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class AnimButton : MonoBehaviour
{
    private Vector3 originalPosition; // Lưu vị trí ban đầu
    private float moveDistance = 0.1f; // Khoảng cách di chuyển
    private float moveDuration = 0.5f; // Thời gian di chuyển mỗi chiều



    private void OnEnable()
    {
        originalPosition = transform.position; // Lưu vị trí ban đầu
        StartMoveLoop(); // Bắt đầu vòng lặp di chuyển
    }

    private void OnDisable()
    {
        transform.position = originalPosition;
    }

    void StartMoveLoop()
    {
        // Tạo sequence cho di chuyển tới và lui
        Sequence moveSequence = DOTween.Sequence();
        moveSequence.Kill();
        
        // Di chuyển tới vị trí mới (originalPosition + moveDistance trên trục X)
        moveSequence.Append(transform.DOMoveY(originalPosition.y+  moveDistance, moveDuration)
            .SetEase(Ease.Linear)); // Ease.Linear để di chuyển đều

        // Trở về vị trí ban đầu
        moveSequence.Append(transform.DOMoveY(originalPosition.y, moveDuration)
            .SetEase(Ease.Linear));
        // Thêm delay 2 giây trước khi bắt đầu vòng lặp mới
        moveSequence.AppendInterval(2f);

        // Lặp lại vô hạn
        moveSequence.SetLoops(-1, LoopType.Restart); // -1 = lặp vô hạn, Restart = bắt đầu lại từ đầu

        // Phát sequence
        moveSequence.Play();
    }
}
