using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Info_Turret_Manager", fileName = "Data_Info_Turret_Manager", order = 0)]
public class Data_Info_Turret_Manager : ScriptableObject
{
    [SerializeField] Data_Info_Turret[] m_All_Info_Turrets;

    public Model_Info_Turret Get_Data_Info_Turret(Type_Turret type_Turret, int level)
    {

        return My_Utils.Get_Data_Info_Turret(m_All_Info_Turrets[(int)type_Turret % m_All_Info_Turrets.Length], level);
    }
    //public Model_Info_Turret Get_Data_Info_Turret_Onslaught(Type_Turret type_Turret, int level)
    //{

    //    return Utils.Get_Data_Info_Turret(m_All_Info_Turrets[19], level);
    //}
}