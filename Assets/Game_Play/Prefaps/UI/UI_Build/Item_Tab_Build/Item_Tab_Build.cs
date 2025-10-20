using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Item_Tab_Build : MonoBehaviour
{
    [SerializeField] Type_Tab_Buy_Turret m_Type_Tab;
    [SerializeField] UI_Build m_UI_Build;
    [SerializeField] GameObject m_Obj_Selected;
    [SerializeField] GameObject m_Obj_UnSelected;

    public Type_Tab_Buy_Turret Get_Type_Tab()
    {
        return m_Type_Tab;
    }

    public void Update_Status(Status_Item status)
    {
        m_Obj_Selected.Set_Active(status == Status_Item.Active);
        m_Obj_UnSelected.Set_Active(status == Status_Item.In_Active);
    }

    public void _Btn_Tab_OnClick()
    {
        if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && DataSaved.Get_Current_Loading_Level() == 0)
        {
            if(DataSaved.Get_Index_Claimed_Mission_Tutorial() == 3 || DataSaved.Get_Index_Claimed_Mission_Tutorial() == 5)
            {
                return;
            }

            if (My_Utils.Check_Tut_Mission_7(m_UI_Build.Get_Type_Player()))
            {
                return;
            }
        }

        SoundController.Play_Sound_Clicks();
        if (m_UI_Build)
        {
            m_UI_Build.Btn_Tab_OnClick(m_Type_Tab);
        }
    }
}
