using System.Collections.Generic;
using UnityEngine;

public class All_Point_Restore_Health : MonoBehaviour
{
    [SerializeField] List<Vector3> m_All_Point_Restore_Health = new List<Vector3>();

    public Vector3 Get_Random_Point()
    {
        return m_All_Point_Restore_Health[Random.Range(0, m_All_Point_Restore_Health.Count - 1)];
    }

    float min_Distance;
    int index_Target;
    float distance;

    public Vector3 Get_Nearest_Point_Health(Vector2 pos_Boss)
    {
        min_Distance = int.MaxValue;
        index_Target = 0;

        for (int i = 0; i < m_All_Point_Restore_Health.Count; i++)
        {
            //float distance = Vector2.Distance(pos_Boss, m_All_Point_Restore_Health[i]);
            distance = (pos_Boss - (Vector2)m_All_Point_Restore_Health[i]).sqrMagnitude;
            if (distance < min_Distance)
            {
                min_Distance = distance;
                index_Target = i;
            }
        }
        return m_All_Point_Restore_Health[index_Target];
    }
}
