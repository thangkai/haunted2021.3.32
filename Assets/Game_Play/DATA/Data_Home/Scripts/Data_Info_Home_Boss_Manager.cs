using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Info_Home_Boss_Manager", fileName = "Data_Info_Home_Boss_Manager", order = 0)]
public class Data_Info_Home_Boss_Manager : ScriptableObject
{
    [SerializeField] List<Data_Info_Boss_Home> m_All_Data_Boss = new List<Data_Info_Boss_Home>();
    [SerializeField] List<Data_Info_Boss_Home> m_All_Data_Boss_V2 = new List<Data_Info_Boss_Home>();

    public Data_Info_Boss_Home Get_Data_Info_Boss(Type_Player type_Player)
    {
        if (RootManager.Check_Is_AB_SKin())
        {
            return m_All_Data_Boss_V2[My_Utils.Get_Id_Boss(type_Player)];
        }
        return m_All_Data_Boss[My_Utils.Get_Id_Boss(type_Player)];
    }

    public int Get_Price(Type_Player type_Player)
    {
        if (RootManager.Check_Is_AB_SKin())
        {
            return m_All_Data_Boss_V2[My_Utils.Get_Id_Boss(type_Player)].price;
        }
        return m_All_Data_Boss[My_Utils.Get_Id_Boss(type_Player)].price;
    }
}
