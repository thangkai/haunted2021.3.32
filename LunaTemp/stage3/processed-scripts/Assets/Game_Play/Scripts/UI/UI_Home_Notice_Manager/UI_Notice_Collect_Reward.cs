using UnityEngine;

using TMPro;
using System;

public class UI_Notice_Collect_Reward : Base_UI
{
   
    [SerializeField] int m_Coin_Reward;
    [SerializeField] int m_Blood_Reward;
    [SerializeField] int m_Energy_Reward;
    [SerializeField] int m_XP_Reward;
    
    
    
    
    int prev_Coin;
    int prev_Blood;
    int prev_Energy;
    int prev_XP;
    
    bool m_Is_Anim_Coin_Done;
    bool m_Is_Anim_Blood_Done;
    bool m_Is_Anim_Energy_Done;
    bool m_Is_Anim_XP_Done;
    
    bool m_Is_Force_Energy;
  

 
    [SerializeField] CoinEffect m_Coin_Effect;
    [SerializeField] CoinEffect m_Blood_Effect;
    [SerializeField] CoinEffect m_Energy_Effect;
    [SerializeField] CoinEffect m_XP_Effect;

   
    [SerializeField] TextMeshProUGUI m_Txt_Coin;
    [SerializeField] TextMeshProUGUI m_Txt_Blood;
    [SerializeField] TextMeshProUGUI m_Txt_Energy;
    [SerializeField] TextMeshProUGUI m_Txt_XP;
    
    [SerializeField] GameObject m_Layout_Coin;
    [SerializeField] GameObject m_Layout_Blood;
    [SerializeField] GameObject m_Layout_Energy;
    [SerializeField] GameObject m_Layout_XP;
    [SerializeField] Animator m_Anim_Coin;
    [SerializeField] Animator m_Anim_Blood;
    [SerializeField] Animator m_Anim_Energy;
    [SerializeField] Animator m_Anim_XP;
    Action m_Action_Close;

    public override void Open_UI(int total_Coin, int total_Blood, int energy, bool is_Force_Energy, int xp, Action action_Close = null)
    {
        m_Action_Close = action_Close;
        m_Coin_Reward = total_Coin;
        m_Blood_Reward = total_Blood;
        m_Energy_Reward = energy;
        m_Is_Force_Energy = is_Force_Energy;
        
        m_XP_Reward = xp;
       
        base.Open_UI();
    }

    public override void OnReadyOpenUI()
    {
        m_Is_Anim_Coin_Done = m_Coin_Reward <= 0;
        m_Is_Anim_Blood_Done = m_Blood_Reward <= 0;
        m_Is_Anim_Energy_Done = m_Energy_Reward <= 0;
        m_Is_Anim_XP_Done = m_XP_Reward <= 0;
        
        

        m_Layout_Coin.Set_Active(m_Coin_Reward > 0);
        m_Layout_Blood.Set_Active(m_Blood_Reward > 0);
        m_Layout_Energy.Set_Active(m_Energy_Reward > 0);
        m_Layout_XP.Set_Active(m_XP_Reward > 0);


        m_Txt_Coin.Set_Text("+" + m_Coin_Reward.ToString());
        m_Txt_Blood.Set_Text("+" + m_Blood_Reward.ToString());
        m_Txt_Energy.Set_Text("+" + m_Energy_Reward.ToString());
        m_Txt_XP.Set_Text("+" + m_XP_Reward.ToString());

        prev_Coin = DataSaved.Get_Sum_Coin();
        prev_Blood = DataSaved.Get_Sum_Money();
       
        prev_XP = Database.instance.GetXpToLevel();

        if (m_Coin_Reward > 0)
        {
            m_Anim_Coin.Play_Animation_Play();
            DataSaved.Increase_Coin(m_Coin_Reward, false);
        }

        if (m_Blood_Reward > 0)
        {
            m_Anim_Blood.Play_Animation_Play();
            DataSaved.Increase_Money(m_Blood_Reward, false);
        }


        
        if (m_XP_Reward > 0)
        {
            m_Anim_XP.Play_Animation_Play();
          
                Database.instance.IncreaseXpUser(m_XP_Reward,false);
             //   DataSaved.Increase_Energy(m_XP_Reward, false);
           
        }
        CancelInvoke(nameof(Delay_Show_Coin_Effect));
        Invoke(nameof(Delay_Show_Coin_Effect), 1f);
    }

    private void Delay_Show_Coin_Effect()
    {
        if (m_Coin_Effect && m_Coin_Reward > 0)
        {
            m_Coin_Effect.AddCoins(prev_Coin, DataSaved.Get_Sum_Coin(), () =>
            {
                m_Is_Anim_Coin_Done = true;
                End_Anim();
                DataSaved.Instance.Notify_Data_Coin_Change();
                
            });
        }

        if (m_Blood_Effect && m_Blood_Reward > 0)
        {
            m_Blood_Effect.AddCoins(prev_Blood, DataSaved.Get_Sum_Money(), () =>
            {
                m_Is_Anim_Blood_Done = true;
                End_Anim();
                DataSaved.Instance.Notify_Data_Money_Change();
            });
        }

        if (m_Energy_Effect && m_Energy_Reward > 0)
        {
            m_Energy_Effect.AddCoins(prev_Energy, DataSaved.Get_Sum_Money(), () =>
            {
                m_Is_Anim_Energy_Done = true;
                End_Anim();
                DataSaved.Instance.Notify_Data_Energy_Change();
            });
        }
        
        if (m_XP_Effect && m_XP_Reward > 0)
        {
            m_XP_Effect.AddCoins(prev_XP, Database.instance.GetXpToLevel(), () =>
            {
                m_Is_Anim_XP_Done = true;
                End_Anim();
                Database.instance.Notify_Data_XP_Change();
            });
        }

        if (m_Is_Anim_Coin_Done && m_Is_Anim_Blood_Done && m_Is_Anim_Energy_Done && m_Is_Anim_XP_Done)
        {
            End_Anim();
        }
    }

    private void End_Anim()
    {
        if (m_Is_Anim_Coin_Done && m_Is_Anim_Blood_Done && m_Is_Anim_Energy_Done && m_Is_Anim_XP_Done)
        {
            CancelInvoke(nameof(Close_UI));
            Invoke(nameof(Close_UI), 0.25f);
        }
    }

    public override void Perpare_Before_Close_UI()
    {
        if (m_Anim_Coin.isActiveAndEnabled)
        {
            m_Anim_Coin.Play_Animation_Idle();
        }

        if (m_Anim_Blood.isActiveAndEnabled)
        {
            m_Anim_Blood.Play_Animation_Idle();
        }

        if (m_Anim_Energy.isActiveAndEnabled)
        {
            m_Anim_Energy.Play_Animation_Idle();
        }
        if (m_Anim_XP.isActiveAndEnabled)
        {
            m_Anim_XP.Play_Animation_Idle();
        }
    }

    public override void Close_UI()
    {
        base.Close_UI();
        if (m_Action_Close != null)
        {
            m_Action_Close.Invoke();
        }
    }
}
