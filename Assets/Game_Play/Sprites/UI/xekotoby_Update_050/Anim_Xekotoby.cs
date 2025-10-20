using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class Anim_Xekotoby : MonoBehaviour
{
    [SerializeField] private RectTransform m_Image_Layout;
    [SerializeField] private Transform[] image_A;
    private void OnEnable()
    {
        ExpandImageLayout();
    }

    private void ExpandImageLayout()
    {
        m_Image_Layout.DOSizeDelta(new Vector2(m_Image_Layout.sizeDelta.x, 558.78f), 0.5f)
            .OnComplete(ScaleImages);
    }
  
    private void ScaleImages()
    {
        StartCoroutine(ScaleImagesCoroutine());
    }

    private IEnumerator ScaleImagesCoroutine()
    {
        for (int i = 0; i < image_A.Length; i++)
        {
            image_A[i].DOScale(Vector3.one, 0.5f).Play();
            yield return new WaitForSeconds(0.5f);
        }

        yield return null;
    }
}
