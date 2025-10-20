using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Draw_Gizmos : MonoBehaviour
{
    [SerializeField] Color m_Color;
    [SerializeField] float m_Radius = 0.2f;
    private void OnDrawGizmos()
    {
        Gizmos.color = m_Color;
        Gizmos.DrawSphere(transform.position, m_Radius);
    }
}
