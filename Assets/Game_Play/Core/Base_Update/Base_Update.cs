using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Haunted
{
public class Base_Update : MonoBehaviour
{
    public virtual void Loop_Update() { }
    public virtual void Loop_Fixed_Update() { }
    public virtual void Loop_Late_Update() { }

    public virtual void Awake()
    {
        CancelInvoke(nameof(Loop_Check_Register));
        Loop_Check_Register();
    }

    public virtual void OnDestroy()
    {
        CancelInvoke(nameof(Loop_Check_Register));
    }

    public virtual void Loop_Check_Register()
    {
        if (Update_Manager.Instance)
        {
            Update_Manager.Instance.Register_Update(this);
        }
        else
        {
            Invoke(nameof(Loop_Check_Register), 0.125f);
        }
    }
}

}

