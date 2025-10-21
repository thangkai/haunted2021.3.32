
using UnityEngine;

public class Collider_Check_Door : MonoBehaviour
{
    [SerializeField] Character_Controller m_Character_Controller;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (collision.CompareTag(Tags.Collider_Lock_Player_Move))
        {
            m_Collider_Lock_Player_Move = collision.GetComponent<Collider_Lock_Player_Move>();
            if (m_Collider_Lock_Player_Move)
            {
                if (m_Collider_Lock_Player_Move.Get_Door_Controller().type_Player != Type_Player.None)
                {
                    if (m_Character_Controller)
                    {
                        m_Character_Controller.Set_Active_Check_Inside_Room();

                        CancelInvoke(nameof(Ready_Check_Inside_Room));
                        Invoke(nameof(Ready_Check_Inside_Room), 0.1f);
                    }
                }
            }
        }
    }

    Collider_Lock_Player_Move m_Collider_Lock_Player_Move;

    private void Ready_Check_Inside_Room()
    {
        if (!m_Character_Controller.Check_Is_Inside_Room() && m_Collider_Lock_Player_Move)
        {
            m_Character_Controller.Lock_Move(m_Collider_Lock_Player_Move.Get_Door_Controller(), m_Collider_Lock_Player_Move.Get_Direction());
        }
    }
}
