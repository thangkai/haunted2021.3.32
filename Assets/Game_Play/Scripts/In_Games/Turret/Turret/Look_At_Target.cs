using Haunted;
using UnityEngine;

public class Look_At_Target : Base_Update
{
    [SerializeField] Transform m_Target;
    Vector3 pos_Target;
    public void Set_Target(Transform target)
    {
        m_Target = target;
    }

    public override void Loop_Fixed_Update()
    {        
        if (Game_Controller.Get_Is_End_Level()) return;

        if (m_Target)
        {
            pos_Target = m_Target.position;
            pos_Target.z = 0;
            transform.up = pos_Target - transform.position;
        }
    }
}
