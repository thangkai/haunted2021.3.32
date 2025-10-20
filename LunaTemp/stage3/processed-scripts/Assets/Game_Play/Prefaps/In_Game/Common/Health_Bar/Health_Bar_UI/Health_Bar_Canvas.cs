using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Health_Bar_Canvas : Singleton<Health_Bar_Canvas>
{
    [SerializeField] Transform m_Parent_Txt_Level;
    [SerializeField] Transform m_Parent_Txt_Level_Golem;
    [SerializeField] Transform m_Parent_Progress_Bar;
    [SerializeField] Transform m_Parent_Progress_Bar_Golem;

    public Transform Get_Parent_Txt_Level()
    {
        return m_Parent_Txt_Level;
    }

    public Transform Get_Parent_Txt_Level_Golem()
    {
        return m_Parent_Txt_Level_Golem;
    }

    public Transform Get_Parent_Progress_Bar()
    {
        return m_Parent_Progress_Bar;
    }

    public Transform Get_Parent_Progress_Bar_Golem()
    {
        return m_Parent_Progress_Bar_Golem;
    }
}
