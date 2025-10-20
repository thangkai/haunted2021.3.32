using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Map", fileName = "Data_Map", order = 0)]
public class Data_Map : ScriptableObject
{
    [SerializeField] List<GameObject> m_All_Prefap_Map = new List<GameObject>();

    public GameObject Get_Prefap_Map(Type_Map type_Map)
    {
        return m_All_Prefap_Map[(int)type_Map % m_All_Prefap_Map.Count];
    }
}
