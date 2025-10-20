using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Layout_Tut_Use_Item : MonoBehaviour
{
    private void OnEnable()
    {
        Canvas_In_Game.Instance.Get_UI_Build().gameObject.Set_Active(false);
        Canvas_In_Game.Instance.Get_UI_Upgrade().gameObject.Set_Active(false);
    }
}
