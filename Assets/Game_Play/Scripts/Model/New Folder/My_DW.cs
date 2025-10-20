using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class My_DW : Behaviour
{
    Action m_Action_Complete;
    float m_Speed;

    public My_DW Set_Speed(float speed)
    {
        m_Speed = speed;
        return this;
    }

    public My_DW On_Complete(Action action)
    {
        m_Action_Complete = action;
        return this;
    }

    public void Move(Vector3 pos, float duration)
    {
        if (m_Action_Complete != null)
        {
            m_Action_Complete.Invoke();
        }
    }
}
