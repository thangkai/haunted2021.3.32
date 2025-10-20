using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Info_Boss", fileName = "Data_Info_Home_", order = 0)]
public class Data_Info_Boss_Home : ScriptableObject
{
    public Type_Player type_Boss;
    public Model_Name name_Boss;
    public Model_Name descriptions;

    public int price;
    public Type_Money type_Money;
}
