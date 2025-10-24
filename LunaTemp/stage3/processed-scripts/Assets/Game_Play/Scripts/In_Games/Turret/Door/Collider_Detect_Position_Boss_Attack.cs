using UnityEngine;

public class Collider_Detect_Position_Boss_Attack : MonoBehaviour
{
    bool m_Is_Collisioned;
    [SerializeField] Door_Controller m_Door_Controller;
    [SerializeField] Type_Direction type_Direction;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (!m_Is_Collisioned && collision.GetComponent<Base_Turret>() != null)
        {
            m_Is_Collisioned = true;
            if (m_Door_Controller)
            {
                
            
                m_Door_Controller.Set_Pos_Boss_Attack(My_Utils.Get_Reflect_Direction(type_Direction));
            }
        }
    }
}
