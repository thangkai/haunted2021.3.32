using UnityEngine;

public class Collider_Check_Inside_Room : MonoBehaviour
{
    [SerializeField] Character_Controller m_Character_Controller;
    public bool is_Inside_Room;
    Base_Turret base_Turret;

    private void OnEnable()
    {
        is_Inside_Room = false;
        if (m_Character_Controller)
        {
            m_Character_Controller.Set_Current_Room_Inside(null);
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        base_Turret = collision.GetComponent<Base_Turret>();
        if (base_Turret)
        {
            is_Inside_Room = true;
            if (m_Character_Controller)
            {
                m_Character_Controller.Set_Current_Room_Inside(base_Turret.m_Room_Controller);
            }
        }
    }
}
