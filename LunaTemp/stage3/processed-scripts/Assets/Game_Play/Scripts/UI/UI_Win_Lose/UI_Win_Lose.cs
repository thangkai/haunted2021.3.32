using System;
using UnityEngine;
using UnityEngine.UI;

using TMPro;
using UnityEngine.SceneManagement;

public class UI_Win_Lose : Base_UI
{
   [SerializeField] Status_Win_Lose m_Status_Win_Lose;
    [SerializeField] Model_Image_Language m_Sprite_Character_Win;
    [SerializeField] Model_Image_Language m_Sprite_Character_Lose;
    [SerializeField] Model_Image_Language m_Sprite_Vampire_Win;
    [SerializeField] Model_Image_Language m_Sprite_Vampire_Lose;
    [SerializeField] Sprite m_Sprite_Wolf;
    [SerializeField] Sprite m_Sprite_Castle;

    [Space(20)][SerializeField] float m_Time_Countdown = 3f;
    [SerializeField] int m_Coin_Reward;
    [SerializeField] int m_Blood_Reward;
    [SerializeField] int m_Money_Reward;
    [SerializeField] int m_Exp_Reward;
    bool m_Is_Lock_Click;

  //  [SerializeField] GameObject m_Obj_Btn_Joystick;
    [SerializeField] Image m_Icon_Title;
    [SerializeField] Image m_Icon_Title2;
    [SerializeField] Image m_Background;
    [SerializeField] Image m_Background_2;


    [SerializeField] GameObject m_Obj_Btn_Claim;


 [SerializeField] GameObject m_Layout_Bonus;
 [SerializeField] private GameObject bg_2;

    public override void Open_UI(Status_Win_Lose status_Win_Lose)
    {
        m_Status_Win_Lose = status_Win_Lose;
        base.Open_UI();
    }

    public override void OnReadyOpenUI()
    {
        Update_Icon_Title();
        Time.timeScale = 0;
     
     
        SoundController.Play_Sounds(Type_Sound.End_Game);
        if (Canvas_In_Game.Instance)
        {
            Canvas_In_Game.Instance.Get_UI_GamePlay().gameObject.Set_Active(false);
        }
      bg_2.SetActive(true);

        m_Layout_Bonus.Set_Active(false);
       // m_Obj_Btn_Joystick.SetActive(false);
        m_Is_Lock_Click = false;
        m_Coin_Reward = Get_Reward_Coin();
        m_Blood_Reward = Get_Reward_Money();
        m_Money_Reward = Get_Reward_Money_First_Time();  // DataSaved.Get_Sum_Vampire_Died();

        m_Exp_Reward = Database.instance.GetXpRewardInGame();







      




        m_Obj_Btn_Claim.SetActive(true);









      //  Game_Controller.Instance.Stop_Music_In_Game();

        DataSaved.Set_Is_Win_Game(Check_Is_Win());
    
     

      

    }

    private int Get_Reward_Coin()
    {
        Type_Mode_Gameplay type_Mode_Gameplay = DataSaved.Get_Type_Mode_Gameplay_Playing();
        bool is_Challenge_Mode = type_Mode_Gameplay == Type_Mode_Gameplay.Challenge;


        bool is_Story_Mode = type_Mode_Gameplay == Type_Mode_Gameplay.Story_Level;

        Database.instance.SetStatusWinLose(m_Status_Win_Lose);
        switch (m_Status_Win_Lose)
        {
            case Status_Win_Lose.Player_Mode_Win_Kill_All_Vampire:
                if (is_Challenge_Mode)
                {
                    if (!DataSaved.Get_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                            DataSaved.Get_Current_Loading_Level_Mode_Challenge()))
                    {


                        m_Layout_Bonus.Set_Active(true);
                        return 10;
                    }
                }


                else
                {


                    if (is_Story_Mode)
                    {

                        if (!DataSaved.Get_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                             Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel())))
                        {


                            m_Layout_Bonus.Set_Active(true);
                            return 5;
                        }
                    }
                    else
                    {
                        // Firebase_Event.Log_Event_Win();
                        // Firebase_Event.Log_Event_WIN_GAME_KILL();
                        if (!DataSaved.Get_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                                DataSaved.Get_Current_Loading_Level()))
                        {


                            m_Layout_Bonus.Set_Active(true);
                            return 5;
                        }
                    }

                }

                return 0;

            case Status_Win_Lose.Player_Mode_Win_Out_Of_Time:

                if (is_Challenge_Mode)
                {

                    if (!DataSaved.Get_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                            DataSaved.Get_Current_Loading_Level_Mode_Challenge()))
                    {


                        m_Layout_Bonus.Set_Active(true);
                        return 10;
                    }
                }
                else
                {


                    if (is_Story_Mode)
                    {

                        if (!DataSaved.Get_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                                Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel())))
                        {


                            m_Layout_Bonus.Set_Active(true);
                            return 5;
                        }
                    }
                    else
                    {


                        if (!DataSaved.Get_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                                DataSaved.Get_Current_Loading_Level()))
                        {


                            m_Layout_Bonus.Set_Active(true);
                            return 5;
                        }
                    }




                }

                return 0;

            case Status_Win_Lose.Player_Mode_Lose:
                if (is_Challenge_Mode)
                {

                    return 0;
                }
                else
                {

                }


                return 1;
        }

        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge) return 0;
        return 1;
    }

    private int Get_Reward_Money()
    {
        int m_reward_Money = 0;

        m_reward_Money =
            (int)Math.Round(
                500 * (float)((DataSaved.Get_Current_Loading_Level() + 1) * 5) /
                ((DataSaved.Get_Current_Loading_Level() + 1) + 5), MidpointRounding.AwayFromZero);
        switch (m_Status_Win_Lose)
        {
            case Status_Win_Lose.Player_Mode_Win_Kill_All_Vampire:
                return m_reward_Money + 100;

            case Status_Win_Lose.Player_Mode_Win_Out_Of_Time:
                return m_reward_Money;

            case Status_Win_Lose.Player_Mode_Lose:
                return 100;
        }

        //xekotoby : doi luong first time e
        return 100;
    }

    private int Get_Reward_Money_First_Time()
    {
        int m_reward_Money = 0;

        m_reward_Money =
            (int)Math.Round(
               2500 * (float)((DataSaved.Get_Current_Loading_Level() + 1) * 5) /
                ((DataSaved.Get_Current_Loading_Level() + 1) + 5), MidpointRounding.AwayFromZero);

        Type_Mode_Gameplay type_Mode_Gameplay = DataSaved.Get_Type_Mode_Gameplay_Playing();
        bool is_Challenge_Mode = type_Mode_Gameplay == Type_Mode_Gameplay.Challenge;

        switch (m_Status_Win_Lose)
        {
            case Status_Win_Lose.Player_Mode_Win_Kill_All_Vampire:
                if (is_Challenge_Mode)
                {

                    if (!DataSaved.Get_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                            DataSaved.Get_Current_Loading_Level_Mode_Challenge()))
                    {
                        DataSaved.Set_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                            DataSaved.Get_Current_Loading_Level_Mode_Challenge(), true);

                        m_Layout_Bonus.Set_Active(true);
                        return m_reward_Money * 2 + 100;
                    }
                }
                else
                {

                    if (!DataSaved.Get_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                            DataSaved.Get_Current_Loading_Level()))
                    {
                        DataSaved.Set_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                            DataSaved.Get_Current_Loading_Level(), true);

                        m_Layout_Bonus.Set_Active(true);
                        return m_reward_Money + 100;
                    }
                }

                return 0;

            case Status_Win_Lose.Player_Mode_Win_Out_Of_Time:

                if (is_Challenge_Mode)
                {

                    if (!DataSaved.Get_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                            DataSaved.Get_Current_Loading_Level_Mode_Challenge()))
                    {
                        DataSaved.Set_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                            DataSaved.Get_Current_Loading_Level_Mode_Challenge(), true);

                        m_Layout_Bonus.Set_Active(true);
                        return m_reward_Money * 2;
                    }
                }
                else
                {

                    if (!DataSaved.Get_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                            DataSaved.Get_Current_Loading_Level()))
                    {
                        DataSaved.Set_Is_First_Time_Collect_Reward(type_Mode_Gameplay,
                            DataSaved.Get_Current_Loading_Level(), true);

                        m_Layout_Bonus.Set_Active(true);
                        return m_reward_Money;
                    }
                }

                return 0;

            case Status_Win_Lose.Player_Mode_Lose:
                if (is_Challenge_Mode)
                {
                    return 100;
                }
                return 100;
        }
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge) return 100;
        return 100;
    }

    private void Update_Icon_Title()
    {



        switch (m_Status_Win_Lose)
        {
            case Status_Win_Lose.Player_Mode_Win_Kill_All_Vampire:
            case Status_Win_Lose.Player_Mode_Win_Out_Of_Time:

                if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
                {
                    DataSaved.Set_Level_Complete(DataSaved.Get_Current_Loading_Level());
                }
                else if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge)
                {
                    DataSaved.Set_Level_Complete_Mode_Challenge(DataSaved.Get_Current_Loading_Level_Mode_Challenge());
                }

                m_Icon_Title.sprite = m_Sprite_Character_Win.sprite_EN;
                m_Icon_Title2.sprite = m_Sprite_Character_Win.sprite_EN;
                m_Background.sprite = m_Sprite_Castle;
                m_Background_2.sprite = m_Sprite_Castle;



                break;

            case Status_Win_Lose.Player_Mode_Lose:
                m_Icon_Title.sprite = m_Sprite_Character_Lose.sprite_EN;
                m_Icon_Title2.sprite = m_Sprite_Character_Lose.sprite_EN;
                m_Background.sprite = m_Sprite_Wolf;
                m_Background_2.sprite = m_Sprite_Wolf;


                break;

            case Status_Win_Lose.Vampire_Mode_Win:
                m_Icon_Title.sprite = m_Sprite_Vampire_Win.sprite_EN;
                m_Icon_Title2.sprite = m_Sprite_Vampire_Win.sprite_EN;
                m_Background.sprite = m_Sprite_Wolf;
                m_Background_2.sprite = m_Sprite_Wolf;


                break;

            case Status_Win_Lose.Vampire_Mode_Lose:
                m_Icon_Title.sprite = m_Sprite_Character_Lose.sprite_EN;
                m_Icon_Title2.sprite =  m_Sprite_Character_Lose.sprite_EN;
                
                m_Background.sprite = m_Sprite_Castle;
                m_Background_2.sprite = m_Sprite_Castle;

                break;
        }
    }



    public void _Btn_Claim_OnClick()
    {
        Debug.LogError("Select Luna");
        LunaManager.instace.OnPlayButtonClick();
    }


    private bool Check_Is_Win()
    {
        switch (m_Status_Win_Lose)
        {
            case Status_Win_Lose.Player_Mode_Win_Kill_All_Vampire:
            case Status_Win_Lose.Player_Mode_Win_Out_Of_Time:
            case Status_Win_Lose.Vampire_Mode_Win:
                return true;
        }

        return false;
    }




   
}