using UnityEngine;
using UnityEngine.SceneManagement;

public class UI_Pause : Base_UI
{
    [SerializeField] GameObject m_Obj_Btn_Joystick;
    [SerializeField] bool is_Btn_Joystick_Active;

    public override void OnReadyOpenUI()
    {
        Time.timeScale = 0;

        is_Btn_Joystick_Active = m_Obj_Btn_Joystick.activeSelf;
        if (is_Btn_Joystick_Active)
        {
            m_Obj_Btn_Joystick.Set_Active(false);
        }
        
    }

    public void _Btn_Continue_On_Click()
    {
        SoundController.Play_Sound_Clicks();

        //Ads_Controller.Show_IntertitalClose(() =>
        //{
        //    Close_UI();
        //});

        Close_UI();
    }



    public override void Perpare_Before_Close_UI()
    {
        if (is_Btn_Joystick_Active)
        {
            m_Obj_Btn_Joystick.Set_Active(true);
        }
        Time.timeScale = 1;
    }
}
