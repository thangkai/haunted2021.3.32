using UnityEngine;



public class Canvas_In_Game : Singleton<Canvas_In_Game>
{
    [SerializeField] Camera_Movement m_Camera_Movement;
    // [SerializeField] GameObject m_Obj_Joystick;
    [SerializeField] BG_Warning m_Bg_BG_Warning;

    public void Check_Show_Warning(bool is_Show)
    {
        if (m_Bg_BG_Warning)
        {
            m_Bg_BG_Warning.Show_Effect(is_Show);
        }
    }





    public void Set_Active_Btn_Join_Stick(bool is_Active)
    {
       // m_Obj_Joystick.Set_Active(is_Active);
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

















}
