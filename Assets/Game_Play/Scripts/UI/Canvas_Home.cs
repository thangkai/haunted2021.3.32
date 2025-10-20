using UnityEngine;
using DG.Tweening;
using System;
using TMPro;


public class Canvas_Home : Singleton<Canvas_Home>
{
    [SerializeField] Bool_Global_Variable m_Live_Data_Loop_Time_Update_In_Home;
    [SerializeField] Bool_Global_Variable m_Live_Data_Update_Skin_Character;



    private void Start()
    {
        //DataSaved.Set_Is_Collecting_Reward(true);
        //DataSaved.Set_Coin_Reward_In_Game(5);
        //DataSaved.Set_Blood_Reward_In_Game(3);

        Loop_Time_Update_In_Home();

        CancelInvoke(nameof(Delay_Show_Collect_Reward_Win_Lose));
        Invoke(nameof(Delay_Show_Collect_Reward_Win_Lose), 0.5f);

        Reset_Label_Btn_Spin();



        DataSaved.Set_On_Start_Root_Manager(false);

    }


    private void Delay_Show_Collect_Reward_Win_Lose()
    {

        bool is_Collecting_Reward_Winlose = DataSaved.Get_Is_Collecting_Reward();
        if (is_Collecting_Reward_Winlose)
        {



        }
        else
        {
            if (DataSaved.Get_Complete_Tut_Use_Item() && !DataSaved.Get_Complete_Tut_Home_Shop_Item())
            {

                Debug.LogError(" su dung xong do ");

            }

            // if (DataSaved.Get_Condition_Show_Tut_Chest() == 2 && !DataSaved.Get_Complete_Show_Tut_Chest())
            // {
            //     Debug.LogError(" su dung xong chest ");
            //     Canvas_Home.Instance.Get_UI_Home().Show_Tut_Shop_Item(1);

            // }


        }
        DataSaved.Set_Key_Is_Try_Skin(false);

    }


   

    private void OnDisable()
    {
        CancelInvoke(nameof(Delay_Show_Collect_Reward_Win_Lose));
    }

    [SerializeField] UI_Home m_UI_Home;

    public UI_Home Get_UI_Home()
    {
        return m_UI_Home;
    }





    // [SerializeField] UI_Select_Level_Challenge_Mode m_UI_Select_Level_Challenge_Mode;

    // public UI_Select_Level_Challenge_Mode Get_UI_Select_Level_Challenge_Mode()
    // {
    //     return m_UI_Select_Level_Challenge_Mode;
    // }

    // [SerializeField] UI_Waiting_Room m_UI_Waiting_Room;

    // public UI_Waiting_Room Get_UI_Waiting_Room()
    // {
    //     return m_UI_Waiting_Room;
    // }
















    public void _Btn_Shop_Character_On_Click()

    {
        SoundController.Play_Sound_Clicks();


    }


    public void _Btn_Shop_Home_On_Click()

    {
        SoundController.Play_Sound_Clicks();
        m_UI_Home._Btn_Home_OnClick();

    }






    private void Loop_Time_Update_In_Home()
    {
        if (m_Live_Data_Loop_Time_Update_In_Home)
        {
            m_Live_Data_Loop_Time_Update_In_Home.Value = true;
        }

        DOVirtual.DelayedCall(1f, () =>
        {
            Loop_Time_Update_In_Home();
        }, false);
    }



    //[SerializeField] UI_Best_Seller m_UI_Start_Pack;

    //public UI_Best_Seller Get_UI_Start_Pack()
    //{
    //    return m_UI_Start_Pack;
    //}

    #region ============ Config time countdown Spin ============

    public const int m_Total_Time_Count_Down = 60 * 60 * 4;
    Tween m_Counter_Timer;
    bool is_Free_Spin;

    [SerializeField] TextMeshProUGUI m_Value_Time_Count_Down_In_UI_Home;

    public void Check_Time_Spin()
    {
        is_Free_Spin = DataSaved.Get_Is_Free_Spin();

        int sec = DateTime.Now.Get_Sub_Second(DataSaved.Get_Last_Time_Claim_Free_Spin());
        int total_Energy_Earned = sec / m_Total_Time_Count_Down;

        if (m_Counter_Timer != null)
        {
            m_Counter_Timer.Kill(false);
        }

        if (total_Energy_Earned > 0 || is_Free_Spin)
        {
            DataSaved.Set_Is_Free_Spin(true);
            DataSaved.Set_Last_Time_Claim_Free_Spin(DateTime.Now.AddSeconds(-sec % m_Total_Time_Count_Down));
            Reset_Label_Btn_Spin();
        }
        else
        {
            Make_Counter();
        }
    }

    private void Make_Counter()
    {
        if (DataSaved.Get_Is_Free_Spin())
        {
            return;
        }







    }

    public void Reset_Label_Btn_Spin()
    {
        m_Value_Time_Count_Down_In_UI_Home.Set_Text("Spin");
    }

    #endregion

    public void Notify_Update_Skin_Character()
    {
        if (m_Live_Data_Update_Skin_Character)
        {
            m_Live_Data_Update_Skin_Character.Value = true;
        }
    }



    //ui user info





















}
