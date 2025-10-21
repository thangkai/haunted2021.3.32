using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Exp_Bar : MonoBehaviour
{
    [SerializeField] bool m_Is_Force_Hide;

    [SerializeField] float m_Curr_Exp;
    [SerializeField] float m_Max_Exp;

    [SerializeField] Transform m_Progress_Health;
    [SerializeField] GameObject m_Obj_Bg;
    [SerializeField] GameObject m_Obj_Progress;

    public void Set_New_Level(float max_Exp)
    {
        m_Max_Exp = max_Exp;
        m_Curr_Exp = 0;
        Update_Progress();
    }

    public void Set_Exp(float exp)
    {
        m_Curr_Exp = exp;
        Update_Progress();
    }

    public void Set_Show_Bar(bool is_Show)
    {
        if (m_Is_Force_Hide)
        {
            m_Obj_Bg.Set_Active(false);
            m_Obj_Progress.Set_Active(false);
        }
        else
        {
            m_Obj_Bg.Set_Active(is_Show);
            m_Obj_Progress.Set_Active(is_Show);
        }
    }

    float m_Tmp_Progress;
    private void Update_Progress()
    {
        m_Tmp_Progress = m_Curr_Exp / m_Max_Exp;

        if (m_Tmp_Progress < 0) m_Tmp_Progress = 0;
        if (m_Tmp_Progress > 1) m_Tmp_Progress = 1;

        m_Progress_Health.localScale = new Vector3(m_Tmp_Progress, 1, 1);
    }
}
