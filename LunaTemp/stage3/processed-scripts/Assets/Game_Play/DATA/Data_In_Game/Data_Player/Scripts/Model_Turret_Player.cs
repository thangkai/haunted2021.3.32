[System.Serializable]
public class Model_Turret_Player
{
    public int id;
    public Type_Turret type_Turret;
    public int level;

    public Model_Turret_Player() { }
    public Model_Turret_Player(int _id, Type_Turret _type_Turret, int _level) 
    {
        id = _id;
        type_Turret = _type_Turret;
        level = _level;
    }
}
