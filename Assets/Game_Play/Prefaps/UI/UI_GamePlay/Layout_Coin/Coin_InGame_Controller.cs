using TMPro;
using UnityEngine;

public class Coin_InGame_Controller : MonoBehaviour
{
    [SerializeField] Bool_Global_Variable m_Live_Data_Coin_In_Game;
    [SerializeField] private TextMeshProUGUI coinText;
    Data_Player m_Data_Player;

    public void Add_Listener()
    {
        if (m_Live_Data_Coin_In_Game != null)
        {
            m_Live_Data_Coin_In_Game.OnValueChanged.AddListener(Update_UI_Coin);
        }

        Update_UI_Coin();
    }

    private void OnDestroy()
    {
        if (m_Live_Data_Coin_In_Game != null)
        {
            m_Live_Data_Coin_In_Game.OnValueChanged.RemoveListener(Update_UI_Coin);
        }
    }

    private void Update_UI_Coin()
    {
        if (Game_Controller.Instance.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            gameObject.Set_Active(true);
            m_Data_Player = Player_Manager.Instance.Get_Data_Player_Current();



            if (m_Data_Player)
            {
                this.coinText.text = m_Data_Player.Get_Sum_Coin().ToString();
            }
            else
            {
                gameObject.Set_Active(false);
            }
        }
        else
        {
            gameObject.Set_Active(false);
        }
    }
}
