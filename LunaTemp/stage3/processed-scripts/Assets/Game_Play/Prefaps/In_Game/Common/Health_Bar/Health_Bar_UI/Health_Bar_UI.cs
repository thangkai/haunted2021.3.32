using System;
using System.Collections;
using System.Collections.Generic;

using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Health_Bar_UI : MonoBehaviour
{
    Exp_Bar_UI m_Exp_Bar;
    [SerializeField] bool m_Is_Auto_Hide_Health_Bar = true;
    [SerializeField] float m_Max_Health;
    [SerializeField] float m_Curr_Health;
    [SerializeField] Image m_Progress_Health;
    [SerializeField] GameObject m_Obj_Level;

    [SerializeField] GameObject m_Obj_Bg;
    [SerializeField] GameObject m_Obj_Progress;

    private void Awake()
    {
        m_Is_Auto_Hide_Health_Bar = DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge;
    }

    private void Start()
    {
        m_Exp_Bar = GetComponent<Exp_Bar_UI>();
        m_Is_Die = false;


    }

    public void Set_Obj_Level(GameObject obj_Level)
    {
        m_Obj_Level = obj_Level;
    }

    public bool Check_Is_Full_Health()
    {
        return m_Curr_Health == m_Max_Health;
    }

    public float Get_Percent_Curr_Health()
    {
        return m_Curr_Health / m_Max_Health;
    }

    public float Get_Max_Health()
    {
        return m_Max_Health;
    }

    public void Set_Percent_Curr_Health(float percent)
    {
        m_Curr_Health = m_Max_Health * percent;
        Update_Progress();
    }

    //public float Get_Percent_Curr_Health_Feature(float m_Damage)
    //{
    //    float new_Health = (m_Curr_Health - m_Damage);
    //    if (new_Health < 0) new_Health = 0;
    //    return  new_Health / m_Max_Health;
    //}

    float m_Tmp_Health_Feature;

    public float Get_Percent_Health_Feature(float damage)
    {
        m_Tmp_Health_Feature = m_Curr_Health - damage;
        if (m_Tmp_Health_Feature < 0)
        {
            m_Tmp_Health_Feature = 0;
        }
        return m_Tmp_Health_Feature / m_Max_Health;
    }

    public void Set_Show_Progress(bool is_Show)
    {
        if (m_Is_Auto_Hide_Health_Bar && !m_Is_Die)
        {
            m_Obj_Bg.Set_Active(is_Show);
            m_Obj_Progress.Set_Active(is_Show);
            Check_Init_Exp_Bar();
            m_Exp_Bar.Set_Show_Bar(is_Show);
        }
    }

    private void Check_Init_Exp_Bar()
    {
        if (m_Exp_Bar == null)
        {
            m_Exp_Bar = GetComponent<Exp_Bar_UI>();
        }
    }

    public void Set_Force_Show_Progress(bool is_Show)
    {
        m_Obj_Bg.Set_Active(is_Show);
        m_Obj_Progress.Set_Active(is_Show);
        Check_Init_Exp_Bar();
        m_Exp_Bar.Set_Show_Bar(is_Show);
    }

    public void Increae_Max_Health(float new_Max_Health, bool is_Force_Full_Health = true)
    {
        m_Max_Health = new_Max_Health;
        if (is_Force_Full_Health)
        {
            m_Curr_Health = m_Max_Health;
        }

        Update_Progress();
    }

    public void Increae_Max_Health(float new_Max_Health, float percent_Health)
    {
        m_Max_Health = new_Max_Health;
        m_Curr_Health = m_Max_Health * percent_Health;

        Update_Progress();
    }

    float m_Tmp_Health_Increase;
    public void Increase_Curr_Health(float percent, Action action_Full_Health = null)
    {
        m_Tmp_Health_Increase = m_Max_Health * percent;
        m_Curr_Health += m_Tmp_Health_Increase;
        if (m_Curr_Health >= m_Max_Health)
        {
            m_Curr_Health = m_Max_Health;
            if (action_Full_Health != null)
            {
                action_Full_Health.Invoke();
            }
            Set_Show_Progress(false);
        }
        Update_Progress();
    }

    float m_Tmp_Health_Increase_From_Boss;
    public void Increase_Curr_Health(float percent, Base_Boss boss)
    {
        m_Tmp_Health_Increase_From_Boss = m_Max_Health * percent;
        m_Curr_Health += m_Tmp_Health_Increase_From_Boss;
        if (m_Curr_Health >= m_Max_Health)
        {
            m_Curr_Health = m_Max_Health;
            if (boss)
            {
                boss.Restore_Full_Health();
            }
            Set_Show_Progress(false);
            Update_Progress();
        }
        Update_Progress();
    }

    float m_Tmp_Health_Increase_Percent;
    public void Increase_Curr_Health(float percent, Action action_Increase_Done, Action action_Full_Health = null)
    {
        m_Tmp_Health_Increase_Percent = m_Max_Health * percent;
        m_Curr_Health += m_Tmp_Health_Increase_Percent;
        if (m_Curr_Health >= m_Max_Health)
        {
            m_Curr_Health = m_Max_Health;
            if (action_Full_Health != null)
            {
                action_Full_Health.Invoke();
            }
            Set_Show_Progress(false);
        }
        else
        {
            if (action_Increase_Done != null)
            {
                action_Increase_Done.Invoke();
            }
        }
        Update_Progress();
    }

    public void Increase_Curr_Health_By_Number(float number_HP, Action action_Full_Health = null)
    {
        m_Curr_Health += number_HP;
        if (m_Curr_Health >= m_Max_Health)
        {
            m_Curr_Health = m_Max_Health;
            if (action_Full_Health != null)
            {
                action_Full_Health.Invoke();
            }
            Set_Show_Progress(false);
        }
        Update_Progress();
    }

    public void Take_Damage(float damage, Action action_Died, Action action_Take_Damage_Done = null)
    {
        Set_Show_Progress(true);
        m_Curr_Health -= damage;
        if (m_Curr_Health <= 0)
        {
            m_Curr_Health = 0;

            Set_Force_Show_Progress(false);
            m_Obj_Level.Set_Active(false);
            if (action_Died != null)
            {
                 
                action_Died.Invoke();
            }
        }
        else
        {
            if (action_Take_Damage_Done != null)
            {
                action_Take_Damage_Done.Invoke();
            }
        }
        Update_Progress();
    }

    public void Set_Immortal()
    {
        m_Curr_Health = 0.3f * m_Max_Health;
        Update_Progress();
    }

    float m_Tmp_Progress;
    private void Update_Progress()
    {
        if (m_Is_Die) return;
        m_Tmp_Progress = m_Curr_Health / m_Max_Health;
        m_Progress_Health.fillAmount = m_Tmp_Progress;

        if (m_Is_Auto_Hide_Health_Bar)
        {
            Set_Show_Progress(m_Curr_Health < m_Max_Health);
        }
    }

    bool m_Is_Die;

    public void Update_State_Die(bool m_Is_Force_Die)
    {
        m_Progress_Health.fillAmount = 0;

        if (m_Is_Force_Die)
        {


            m_Obj_Bg.Set_Active(false);
            m_Obj_Progress.Set_Active(false);
            m_Obj_Level.Set_Active(false);
            Check_Init_Exp_Bar();
            m_Exp_Bar.Set_Show_Bar(false);
            
            
            
       
        }

        m_Is_Die = true;
    }
}
