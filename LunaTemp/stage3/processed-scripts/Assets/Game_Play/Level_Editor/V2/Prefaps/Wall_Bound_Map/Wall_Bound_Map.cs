using UnityEngine;

public class Wall_Bound_Map : MonoBehaviour
{
    [SerializeField] Room_Data_Loader m_Room_Data_Loader;

    public void Compress_Data()
    {
        if (m_Room_Data_Loader == null)
        {
            m_Room_Data_Loader = GetComponent<Room_Data_Loader>();
        }
        else
        {
            m_Room_Data_Loader.list_Prefap_Holder.Clear();
        }
        if (m_Room_Data_Loader)
        {
            m_Room_Data_Loader.Add_New_Data_Holder();
        }
    }
}
