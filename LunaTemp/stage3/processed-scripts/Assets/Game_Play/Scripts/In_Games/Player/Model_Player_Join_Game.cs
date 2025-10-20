using UnityEngine;

[System.Serializable]
public class Model_Player_Join_Game
{
    public string name;
    public Type_Level type_Level;
    public Type_Player type_Player;
    [SerializeField]  Type_Character type_Character;
    public int max_Turret_Can_Build;
    public bool is_Using_Skin_2;
    [SerializeField]   public  Type_Rank_Character type_Rank_Character;
    public Type_Character Get_Type_Character()
    {
        return type_Character;
    }

    public void Set_Type_Character(Type_Character _type_Character)
    {
        type_Character = _type_Character;
    }
    public void Set_Type_Rank_Character(Type_Rank_Character _type_Character  )
    {
        type_Rank_Character = _type_Character;

    }
}
