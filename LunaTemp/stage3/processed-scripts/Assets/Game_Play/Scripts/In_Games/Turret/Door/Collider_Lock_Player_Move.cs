using System;
using UnityEngine;

public class Collider_Lock_Player_Move : MonoBehaviour
{
    [SerializeField] Door_Controller m_Door_Controller;
    [SerializeField] Type_Direction type_Direction;

    public Door_Controller Get_Door_Controller()
    {
        return m_Door_Controller;
    }

    public Type_Direction Get_Direction()
    {
        return type_Direction;
    }

    private void OnMouseUp()
    {
        m_Door_Controller.OnMouseUp();
    }
}
