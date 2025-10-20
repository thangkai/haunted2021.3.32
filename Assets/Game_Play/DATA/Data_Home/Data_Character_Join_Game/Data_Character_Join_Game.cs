using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/Home/Data_Character_Join_Game", fileName = "Data_Character_Join_Game", order = 0)]
public class Data_Character_Join_Game : ScriptableObject
{
    public Type_Map type_Map;
    public Type_Player m_Type_Player_Current;
    public Type_Level m_Type_Level;
    public int m_Level_Boss_Start;
    public Model_Time max_Time_Play;

    [SerializeField] List<Model_Player_Join_Game> m_All_Player_Join_Game = new List<Model_Player_Join_Game>();

    [SerializeField] List<Model_Info_Level_Boss> m_All_Boss_By_Type = new List<Model_Info_Level_Boss>();
    [SerializeField] List<Model_Boss> m_All_Boss_Join_Game = new List<Model_Boss>();

    public List<Model_Player_Join_Game> Get_All_Player_Join_Game()
    {
        return m_All_Player_Join_Game;
    }

    public void Set_Data_Player_Join_Game(List<Model_Player_Join_Game> data_Player)
    {
        m_All_Player_Join_Game.Clear();
        m_All_Player_Join_Game.AddRange(data_Player);
    }

    public List<Model_Boss> Get_All_Boss_Join_Game()
    {
        return m_All_Boss_Join_Game;
    }

    public List<Model_Info_Level_Boss> Get_All_Boss_By_Type()
    {
        return m_All_Boss_By_Type;
    }

    public void Set_Data_Boss_Join_Game(List<Model_Boss> data_Player)
    {
        m_All_Boss_Join_Game.Clear();
        m_All_Boss_Join_Game.AddRange(data_Player);
    }

    bool m_Is_Player_Mode;

    public void Set_Data_Boss_By_Type(List<Model_Info_Level_Boss> all_Boss_By_Type)
    {
        m_All_Boss_By_Type.Clear();
        m_Is_Player_Mode = DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player;

        Model_Info_Level_Boss item;
        for (int i = 0; i < all_Boss_By_Type.Count; i++)
        {
            item = all_Boss_By_Type[i];
            Model_Info_Level_Boss model_Info_Level_Boss = new Model_Info_Level_Boss();
            model_Info_Level_Boss.type_Boss = item.type_Boss;
            if (!m_Is_Player_Mode && item.type_Boss == DataSaved.Get_Skin_Boss_Equipped())
            {
                model_Info_Level_Boss.amount = 1;
            }
            else
            {
                model_Info_Level_Boss.amount = item.amount;
            }

            m_All_Boss_By_Type.Add(model_Info_Level_Boss);
        }
    }
}
