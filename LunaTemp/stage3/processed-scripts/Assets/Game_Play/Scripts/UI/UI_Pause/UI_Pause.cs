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

    public void _Btn_Home_On_Click()
    {

        DataSaved.Set_Try_Skin_Character_Equipped_Home(Type_Character.None);
        if (DataSaved.Get_Try_Skin_Character_Equipped_Home() != Type_Character.None)
        {
            // thu skin euqid
            DataSaved.Set_Is_Unlock_Skill_2(DataSaved.Get_Try_Skin_Character_Equipped_Home(), false);
            DataSaved.Set_Is_Unlock_Skill_3(DataSaved.Get_Try_Skin_Character_Equipped_Home(), false);
        }
        SoundController.Play_Sound_Backs();

        
     
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
