using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ammor_Follow : MonoBehaviour
{
    [SerializeField] private Transform m_Target_Follow;
    [SerializeField] private SpriteRenderer m_Ammor_Icon;



    public void Set_Target_Follow(Transform target)
    {
        m_Target_Follow = target;
    }
    
    public void Loop_Update(int order_In_Layer)
    {
        if (m_Target_Follow != null)
        {
            transform.position = m_Target_Follow.position;
            m_Ammor_Icon.sortingOrder = order_In_Layer + 1;
        }   
    }
}
