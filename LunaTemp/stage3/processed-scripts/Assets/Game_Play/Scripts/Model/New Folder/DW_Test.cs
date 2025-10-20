using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class DW_Test
{
    public static My_DW DW_Move(this Transform obj, Vector3 pos, float duration)
    {
        My_DW aa = new My_DW();
        aa.Move(pos, duration);
        return aa;
    }
}
