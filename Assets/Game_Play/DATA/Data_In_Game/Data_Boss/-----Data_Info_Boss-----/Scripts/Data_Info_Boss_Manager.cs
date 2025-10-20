using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Info_Boss_Manager", fileName = "Data_Info_Boss_Manager_", order = 0)]
public class Data_Info_Boss_Manager : ScriptableObject
{
    [SerializeField] Data_Info_Boss[] m_All_Info_Boss;

    public Model_Info_Boss Get_Data_Info_Boss(Type_Player type_Boss, Type_Level type_Level)
    {
        int min = (int)Type_Player.Boss_Dracula;
        int max = (int)Type_Player.Bat_Summoned_Boss_Of_Dracula;
        if ((int)type_Boss >= min && (int)type_Boss <= max)
        {
            int id_Boss = (int)type_Boss - min;
            if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
            {
                
                return My_Utils.Get_Data_Info_Boss(m_All_Info_Boss[(int)id_Boss % m_All_Info_Boss.Length],Database.instance.GetHardLevel()?  Type_Level.Normal :  Type_Level.Easy   );
            }
            else
            {
                return My_Utils.Get_Data_Info_Boss(m_All_Info_Boss[(int)id_Boss % m_All_Info_Boss.Length], type_Level);

            }
        }

        return null;
    }
}
