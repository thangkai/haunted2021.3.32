using System;
using UnityEngine;
using UnityEngine.Events;

[CreateAssetMenu(menuName = "Create Global Variables/Bool Global Variable", fileName = "Live_Data_", order = 0)]
public class Bool_Global_Variable : ScriptableObject, ISerializationCallbackReceiver
{
    [TextArea(1, 10)]
    [SerializeField] string m_List_Notify;
    [TextArea(10,20)]
    [SerializeField] string m_List_Listener;

    [SerializeField] bool m_InitialValue;
    [SerializeField] bool m_Value;
    public UnityEvent OnValueChanged;
    public bool m_EnableDebugging;

    public bool Value
    {
        get => m_Value; 
        set { 
            m_Value = value;
            if (OnValueChanged != null)
            {
                try
                {
                    OnValueChanged.Invoke();
                }
                catch (Exception e)
                {
                    Debug.LogError("Error Bool_Global_Variable : " + e.Message);
                }
            }
            if (m_EnableDebugging)
            {
                Debug.Log("Value was changed : " + m_Value);
            }
        }
    }

    // Init default value
    public void OnBeforeSerialize()
    {
        m_Value = m_InitialValue;
    }

    public void OnAfterDeserialize()
    {
    }
}
