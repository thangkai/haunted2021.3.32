using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class UI_Notice_Tutorials : Base_UI
{
    [SerializeField] Type_Mission_Tut m_Mission_Tut;
    [SerializeField] TextMeshProUGUI m_Txt_Mission;

    public override void Open_UI(Type_Mission_Tut type_Mission)
    {
        m_Mission_Tut = type_Mission;
        base.Open_UI();
    }

    public override void OnReadyOpenUI()
    {
        m_Txt_Mission.Set_Text(My_Utils.Get_Content_By_Language(Data_In_Game.Instance.Get_Data_Mission_Tut()
            .Get_Des_Mission((int)m_Mission_Tut)));
    }
}
