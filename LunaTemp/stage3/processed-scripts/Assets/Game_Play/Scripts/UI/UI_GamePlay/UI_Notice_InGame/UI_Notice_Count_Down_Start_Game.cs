using UnityEngine;
using TMPro;
using System;


public class UI_Notice_Count_Down_Start_Game : Base_UI
{
    [SerializeField] int m_Time_Countdown;
    Action m_Action_Close;

   
    [SerializeField] TextMeshProUGUI m_Txt_Value;

    public override void Open_UI(int time_Countdown, Action actionClose)
    {
        m_Time_Countdown = time_Countdown;
        m_Action_Close = actionClose;
        base.Open_UI();
    }

    private void OnDisable()
    {
        CancelInvoke(nameof(Update_Count_Down));
    }

    public override void OnReadyOpenUI()
    {
        m_Txt_Value.gameObject.SetActive(m_Action_Close != null);
        Update_UI_Value();
        Debug.LogError("time da het 2 bi goi lai");
        CancelInvoke(nameof(Update_Count_Down));
        InvokeRepeating(nameof(Update_Count_Down), 1f, 1f);
    }

    private void Update_Count_Down()
    {
        m_Time_Countdown -= 1;

        if (m_Time_Countdown == 3)
        {
            SoundController.Play_Sounds(Type_Sound.Count_Down);
            Boss_Manager.Instance.Check_Alert_Boss();
        }

        if (m_Time_Countdown <= 0)
        {
            m_Time_Countdown = 0;
            Debug.LogError("time da het 2");
            CancelInvoke(nameof(Update_Count_Down));
            Update_UI_Value();
            Debug.LogError("time da het 1");
    
            if (m_Action_Close != null)
            {
                m_Action_Close.Invoke();
            }
            Debug.LogError("time da het 3");
            Close_UI();
        }

        Update_UI_Value();
    }

    private void Update_UI_Value()
    {
        m_Txt_Value.Set_Text(m_Time_Countdown.ToString());
    }
}
