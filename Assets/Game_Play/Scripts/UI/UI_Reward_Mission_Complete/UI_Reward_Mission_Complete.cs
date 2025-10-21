using UnityEngine;
using TMPro;


public class UI_Reward_Mission_Complete : Base_UI
{
    [SerializeField] GameObject m_Obj_Icon_Title_V1;
    [SerializeField] GameObject m_Obj_Icon_Title_V2;

    //[Separator("Data")]
    //[SerializeField] Type_Mission_Tut m_Curr_Mission_Tut;

  
    //[SerializeField] TextMeshProUGUI m_Txt_Des_Tut;
    [SerializeField] Animator m_Animator;

    public override void Open_UI(Type_Mission_Tut type_Mission)
    {
        //m_Curr_Mission_Tut = type_Mission;
        base.Open_UI();
    }

    public override void OnReadyOpenUI()
    {
        //m_Is_Waiting_Close_UI = false;
     
        m_Animator.Play_Animation_Play();
        //m_Txt_Des_Tut.Set_Text(Utils.Get_Content_By_Language(Data_In_Game.Instance.Get_Data_Mission_Tut()
        //    .Get_Des_Mission((int)m_Curr_Mission_Tut)));

        //Firebase_Event.Log_Event_TUT_COMPLETED((int)m_Curr_Mission_Tut);
        if (RootManager.Check_Is_AB_SKin())
        {
            m_Obj_Icon_Title_V1.Set_Active(false);
            m_Obj_Icon_Title_V2.Set_Active(true);
        }
        else
        {
            m_Obj_Icon_Title_V2.Set_Active(false);
            m_Obj_Icon_Title_V1.Set_Active(true);
        }
    }

    public void _Btn_Claim_On_Click()
    {
        SoundController.Play_Sound_Clicks();

        DataSaved.Increase_Coin(10);
        DataSaved.Set_Is_Complete_Tutorial(true);
        m_Animator.Play_Animation_Play_Hide();

        m_Is_Waiting_Close_UI = true;
        m_Time_Start_Close_UI = Time.unscaledTime;
    }

    bool m_Is_Waiting_Close_UI;
    float m_Time_Start_Close_UI;
    //int index_Next_Mission;
    //Type_Mission_Tut next_Mission;

    public override void Loop_Update()
    {
        if (m_Is_Waiting_Close_UI)
        {
            if (Time.unscaledTime - m_Time_Start_Close_UI > 0.25f)
            {
                Check_Complete_Mission();
                m_Is_Waiting_Close_UI = false;
            }
        }
    }

    private void Check_Complete_Mission()
    {
        //index_Next_Mission = (int)m_Curr_Mission_Tut + 1;
        //if (index_Next_Mission <= (int)Type_Mission_Tut.Mission_7)
        //{
        //    next_Mission = (Type_Mission_Tut)index_Next_Mission;
        //    if (DataSaved.Get_Complete_Mission_Tutorial(next_Mission))
        //    {
        //        Open_UI(next_Mission);
        //    }
        //    else
        //    {
        //        Canvas_In_Game.Instance.Get_UI_Notice_Tutorials().Open_UI(next_Mission);
        //        Close_UI();
        //    }
        //}
        //else
        //{
        //    Close_UI();
        //}

        Close_UI();
    }
}