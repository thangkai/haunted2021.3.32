[System.Serializable]
public class Model_Boss
{
    public bool is_Player_Control;
    public Type_Level type_Level;
    public Type_Player type_Boss;
    public Model_Time time_Spawn;

    public void Set_Model_Boss(bool is_Player_Control,Type_Level type_Level,Type_Player type_Boss, Model_Time   time_Spawn )
    {
        this.is_Player_Control = is_Player_Control;
        this.type_Level = type_Level;
        this.type_Boss = type_Boss;
        this.time_Spawn = time_Spawn;
    }
}
