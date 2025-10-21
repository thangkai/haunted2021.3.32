using UnityEngine;
using DG.Tweening;
using System;
using TMPro;


public class Canvas_Home : Singleton<Canvas_Home>
{
    [SerializeField] Bool_Global_Variable m_Live_Data_Loop_Time_Update_In_Home;
    


    private void Start()
    {
        //DataSaved.Set_Is_Collecting_Reward(true);
        //DataSaved.Set_Coin_Reward_In_Game(5);
        //DataSaved.Set_Blood_Reward_In_Game(3);

        Loop_Time_Update_In_Home();

        

        



        DataSaved.Set_On_Start_Root_Manager(false);

    }


   

   



    [SerializeField] UI_Home m_UI_Home;

    public UI_Home Get_UI_Home()
    {
        return m_UI_Home;
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


   



















}
