using System;
using UnityEngine;

public class UI_Notice_InGame : Singleton<UI_Notice_InGame>
{
    [SerializeField] UI_Notice_Count_Down_Start_Game m_UI_Notice_Count_Down_Start_Game;

    public void Start_Count_Down_Start_Game(Action m_Action_Done)
    {
        if (m_UI_Notice_Count_Down_Start_Game)
        {
            m_UI_Notice_Count_Down_Start_Game.Open_UI(Game_Controller.Instance.Get_Time_Spawn_Boss_Start_Game(), m_Action_Done);
        }
        else
        {
            if(m_Action_Done != null) m_Action_Done.Invoke();
        }
    }
}
