using UnityEngine;

public class Player_Manager : Singleton<Player_Manager>
{
    //[SerializeField] Type_Player m_Player_Curent;
    [SerializeField] Bool_Global_Variable m_Live_Data_Coin_UI;
    [SerializeField] Bool_Global_Variable m_Live_Data_Energy_UI;

    [Header("____ UI ____")]
    [SerializeField] Energy_In_Game_Controller m_Energy_In_Game_Controller;
    [SerializeField] Coin_InGame_Controller  m_Coin_InGame_Controller;

    [Header("____ Data_Player ____")]

    [SerializeField] Model_Player[] m_All_Players;

    public Type_Character Get_Type_Character(Type_Player type_Player)
    {
        if (type_Player != Type_Player.None && type_Player <= Type_Player.Player_8)
        {
            return m_All_Players[(int)type_Player].type_Character_Of_Player;
        }
        return Type_Character.None;
    }

    public bool Get_Is_Using_Skin_2(Type_Player type_Player)
    {
        if (type_Player != Type_Player.None && type_Player <= Type_Player.Player_8)
        {
            return m_All_Players[(int)type_Player].is_Using_Skin_2;
        }
        return false;
    }

    public void On_Restart()
    {
        if (Game_Controller.Instance.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            if (m_Energy_In_Game_Controller)
            {
                m_Energy_In_Game_Controller.Add_Listener();
            }

            if (m_Coin_InGame_Controller)
            {
                m_Coin_InGame_Controller.Add_Listener();
            }
        }

        Reset_Data_Player();

        // TODO: Set_Type_Character
        var all_Data_Player_Join_Game = Game_Controller.Instance.Get_All_Character_Player_Join_Game();
        //Model_Player_Join_Game model_Player_Join_Game;
        Model_Player model_Player;
        for (int i = 0; i < all_Data_Player_Join_Game.Count; i++)
        {
            var model_Player_Join_Game = all_Data_Player_Join_Game[i];
            if (model_Player_Join_Game != null)
            {
                model_Player = m_All_Players[(int)model_Player_Join_Game.type_Player];
                model_Player.type_Character_Of_Player =  DataSaved.Get_Type_Character_Playing(model_Player_Join_Game.type_Player);//model_Player_Join_Game.Get_Type_Character();
                model_Player.type_Level = model_Player_Join_Game.type_Level;
                model_Player.is_Using_Skin_2 = model_Player_Join_Game.is_Using_Skin_2;

                model_Player.m_Data_Player.Set_Max_Turret_Can_Build(model_Player_Join_Game.max_Turret_Can_Build);
            }
        }

        Recycle_Bin.Instance.On_Restart();
    }

    public void Update_UI_Energy(Type_Player type_Player)
    {
        if (type_Player == Game_Controller.Instance.Get_Player_Curr())
        {
            if (m_Live_Data_Energy_UI)
            {
                m_Live_Data_Energy_UI.Value = true;
            }
        }
    }

    public void Update_UI_Coin(Type_Player type_Player)
    {
        if (type_Player == Game_Controller.Instance.Get_Player_Curr())
        {
            if (m_Live_Data_Coin_UI)
            {
                m_Live_Data_Coin_UI.Value = true;
            }
        }
    }

    public Data_Player Get_Data_Player(Type_Player type_Player)
    {
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {
            if (type_Player != Type_Player.None && type_Player <= Type_Player.Player_4)
            {
                return m_All_Players[(int)type_Player].m_Data_Player;
            }
        }
        else
        {
            if (type_Player != Type_Player.None && type_Player <= Type_Player.Player_8)
            {
                return m_All_Players[(int)type_Player].m_Data_Player;
            }

        }
        
       

        return null;
    }

    public Data_Player Get_Data_Player_Current()
    {
        return Get_Data_Player(Game_Controller.Instance.Get_Player_Curr());
    }

    #region =============== Sub Method ===============

    private void Reset_Data_Player()
    {
        for (int i = 0; i < 1; i++)
        {
            if (m_All_Players[i] != null)
            {
                m_All_Players[i].m_Data_Player.Reset_Data();
            }
        }
    }

    #endregion
}
