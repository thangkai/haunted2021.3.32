using System.Collections.Generic;
using UnityEngine;

public class Point_Display_Player : MonoBehaviour
{
    [SerializeField] List<Transform> m_All_Pos_Player = new List<Transform>();

    [SerializeField] List<int> m_All_Id_Pos_Empty = new List<int>();
 
    private void Start()
    {
        Vector3 pos_Cam = Camera.main.transform.position;
        pos_Cam.x = transform.position.x;
        pos_Cam.y = transform.position.y;
        Camera.main.transform.position = pos_Cam;

        Check_Empty_Point();
    }

    public Vector3 Get_Pos_First()
    {
        m_All_Id_Pos_Empty.Remove(0);
        return m_All_Pos_Player[0].position;
    }

    public Vector3 Get_Random_Postion()
    {
        Check_Empty_Point();

        m_All_Id_Pos_Empty.Shuffle();
        int random = m_All_Id_Pos_Empty[0];

        m_All_Id_Pos_Empty.Remove(random);

        return m_All_Pos_Player[random].position;
    }

    private void Check_Empty_Point()
    {
        if (m_All_Id_Pos_Empty.Count <= 0)
        {
            m_All_Id_Pos_Empty.Clear();
            int k = 8;
            if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
            {
                k = 4;
            }
            
            
            for (int i = 0; i < k; i++)
            {
                m_All_Id_Pos_Empty.Add(i);
            }
        }
    }
}
