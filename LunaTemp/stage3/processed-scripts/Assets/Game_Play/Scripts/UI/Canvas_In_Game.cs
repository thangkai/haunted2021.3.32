using UnityEngine;



public class Canvas_In_Game : Singleton<Canvas_In_Game>
{
    [SerializeField] Camera_Movement m_Camera_Movement;
    [SerializeField] GameObject m_Obj_Joystick;
    [SerializeField] BG_Warning m_Bg_BG_Warning;

    public void Check_Show_Warning(bool is_Show)
    {
        if (m_Bg_BG_Warning)
        {
            m_Bg_BG_Warning.Show_Effect(is_Show);
        }
    }

    private void Start()
    {
        if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        {
            DataSaved.Set_Index_Claimed_Mission_Tutorial(0);
        }

        Check_Show_Tutorials();




    }



    public void Set_Active_Btn_Join_Stick(bool is_Active)
    {
        m_Obj_Joystick.Set_Active(is_Active);
    }

    [SerializeField] UI_Upgrade m_UI_Upgrade;

    public UI_Upgrade Get_UI_Upgrade()
    {
        return m_UI_Upgrade;
    }


    [SerializeField] UI_Build m_UI_Build;
    public UI_Build Get_UI_Build()
    {
        return m_UI_Build;
    }

    [SerializeField] UI_Packback m_UI_Packback;
    public UI_Packback Get_UI_Packback()
    {
        return m_UI_Packback;
    }

    [SerializeField] UI_GamePlay m_UI_GamePlay;

    public UI_GamePlay Get_UI_GamePlay()
    {
        return m_UI_GamePlay;
    }

    [SerializeField] UI_Win_Lose m_UI_Win_Lose;

    public UI_Win_Lose Get_UI_Win_Lose()
    {
        return m_UI_Win_Lose;
    }






    public Camera_Movement Get_Camera_Movement()
    {
        return m_Camera_Movement;
    }



    #region =========== Tutorials ============




    [SerializeField] UI_Notice_Tutorials m_UI_Notice_Tutorials;

    public UI_Notice_Tutorials Get_UI_Notice_Tutorials()
    {
        return m_UI_Notice_Tutorials;
    }

    public void Check_Show_Tutorials()
    {
        if (DataSaved.Get_Current_Loading_Level() == 0
            && DataSaved.Get_Index_Claimed_Mission_Tutorial() <= (int)Type_Mission_Tut.Mission_7
            && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story
            //&& !DataSaved.Get_Complete_Mission_Tutorial((Type_Mission_Tut)DataSaved.Get_Index_Claimed_Mission_Tutorial())
            )
        {
            Type_Mission_Tut curr_Mission = (Type_Mission_Tut)DataSaved.Get_Index_Claimed_Mission_Tutorial();
            m_UI_Notice_Tutorials.Open_UI(curr_Mission);
        }
        else
        {
            m_UI_Notice_Tutorials.Close_UI();
        }
    }

    #endregion




    // public static void Set_Status_Loading(Status_Loading_In_Game status)
    // {
    //     if (Instance)
    //     {
    //         Instance.Set_Status_Loadings(status);
    //     }
    // }

    // public void Set_Status_Loadings(Status_Loading_In_Game status)
    // {
    //     if (m_UI_Loading)
    //     {
    //         m_UI_Loading.Set_Status_Loading(status);
    //     }
    // }











}
