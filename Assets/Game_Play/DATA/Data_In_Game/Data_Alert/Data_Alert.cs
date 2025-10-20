using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Alert", fileName = "Data_Alert", order = 0)]
public class Data_Alert : ScriptableObject
{
    [SerializeField] List<Model_Name> m_All_Des_Alert = new List<Model_Name>();

    public Model_Name Get_Des_Alert(Type_Alert type_Alert)
    {
        return m_All_Des_Alert[(int)type_Alert % m_All_Des_Alert.Count];
    }
}
