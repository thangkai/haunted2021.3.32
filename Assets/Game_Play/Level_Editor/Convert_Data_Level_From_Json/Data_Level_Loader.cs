using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEditor;
using Newtonsoft.Json;

public class Data_Level_Loader : MonoBehaviour
{
#if UNITY_EDITOR
    // Download json : https://opensheet.elk.sh/1Fc5UvwuyFkI1Id0hU14ycS6eFfjdhQJ--HJChb9YUMU/H_4_Minutes
    [MenuItem("Haunted Castle/Load Data Level/Level Hard 4 minutes")]
    private static void Convert_Data_From_Json()
    {
        var path = File.ReadAllText(Application.dataPath + "/Resources/Json_Data/Data_Level_4_Minutes_Hard.json");
        var data = JsonConvert.DeserializeObject<Item_Json_V1>(path);

        string prev_Path = "Assets/Game_Play/DATA/Data_Home/Data_All_Levels/Load_Data_From_Json/Data_Level_Hard_4_Minutes/Data_Info_Level_Hard_4_Minutes_";

        Save_Data(Convert_V1_To_Item_Json(data), prev_Path, false);
    }

    [MenuItem("Haunted Castle/Load Data Level/Level Hard")]
    private static void Convert_Data_From_Json_Level_Hard()
    {
        //var path = File.ReadAllText(Application.dataPath + "/Resources/Json_Data/Data_Level_4_Minutes_Hard.json");
        //var data = JsonConvert.DeserializeObject<Item_Json>(path);

        //string prev_Path = "Assets/Game_Play/DATA/Data_Home/Data_All_Levels/Load_Data_From_Json/Data_Level_Hard_4_Minutes/Data_Info_Level_Hard_4_Minutes_";

        //Save_Data(data, prev_Path);
    }

    // Download json : https://opensheet.elk.sh/1Fc5UvwuyFkI1Id0hU14ycS6eFfjdhQJ--HJChb9YUMU/Normal_10p
    [MenuItem("Haunted Castle/Load Data Level/Level Normal 10 Minutes")]
    private static void Convert_Data_From_Json_Level_Normal()
    {
        var path = File.ReadAllText(Application.dataPath + "/Resources/Json_Data/Data_Level_10_Minutes_Normal.json");
        var data = JsonConvert.DeserializeObject<Item_Json_V1>(path);

        string prev_Path = "Assets/Game_Play/DATA/Data_Home/Data_All_Levels/Load_Data_From_Json/Data_Level_Normal_10_Minutes/Data_Level_Normal_10_Minutes_";

        Save_Data(Convert_V1_To_Item_Json(data), prev_Path, false);
    }

    public static Item_Json Convert_V1_To_Item_Json(Item_Json_V1 data)
    {
        Item_Json item_Json = new Item_Json();

        Dictionary<int, Model_Item_Level_Json> map_Data = new Dictionary<int, Model_Item_Level_Json>();

        for (int i = 0; i < data.Items.Count; i++) {
            var item = data.Items[i];
            if (map_Data.ContainsKey(item.Id_Level))
            {
                Model_Item_Vampire_Json model_Item_Vampire_Json = new Model_Item_Vampire_Json();
                model_Item_Vampire_Json.Vampire = item.Vampire;
                model_Item_Vampire_Json.SL = item.SL;
                model_Item_Vampire_Json.Time = item.Time;
                model_Item_Vampire_Json.Level_Jump = item.Level_Jump;

                map_Data[data.Items[i].Id_Level].Data_Vampire.Add(model_Item_Vampire_Json);
            }
            else
            {
                Model_Item_Level_Json model_Item_Level_Json = new Model_Item_Level_Json();
                model_Item_Level_Json.Id_Level = item.Id_Level;
                model_Item_Level_Json.Mode = item.Mode;
                model_Item_Level_Json.Sum_Time = item.Sum_Time;
                model_Item_Level_Json.Map = item.Map;
                model_Item_Level_Json.Level_Start = item.Level_Start;
                model_Item_Level_Json.Shadow = item.Shadow;
                model_Item_Level_Json.Fake_Number = item.Fake_Number;

                List<Model_Item_Vampire_Json> data_Vampire = new List<Model_Item_Vampire_Json>();
                Model_Item_Vampire_Json model_Item_Vampire_Json = new Model_Item_Vampire_Json();
                model_Item_Vampire_Json.Vampire = item.Vampire;
                model_Item_Vampire_Json.SL = item.SL;
                model_Item_Vampire_Json.Time = item.Time;
                model_Item_Vampire_Json.Level_Jump = item.Level_Jump;
                data_Vampire.Add(model_Item_Vampire_Json);

                model_Item_Level_Json.Add_Data_Vampire(data_Vampire);

                map_Data[data.Items[i].Id_Level] = model_Item_Level_Json;
            }
        }

        item_Json.Items.Clear();
        foreach (var item in map_Data.Keys)
        {
            item_Json.Items.Add(map_Data[item]);
        }

        return item_Json;
    }

    public static void Save_Data(Item_Json data, string prev_Path, bool is_Challenge_Mode)
    {
        for (int i = 0; i < data.Items.Count; i++)
        {
            var item = data.Items[i];
            string path_Save_Data = prev_Path + item.Id_Level + ".asset";
            Data_Info_Level data_Level = ScriptableObject.CreateInstance<Data_Info_Level>();

            Type_Level type_Level = Get_Type_Level(item.Mode);

            data_Level.m_Name_Level = Get_Name_Level(item.Id_Level);
            data_Level.m_Type_Map = (Type_Map)(item.Map - 1);
            data_Level.m_Time_Complete = is_Challenge_Mode ? Convert_To_Model_Time(0, item.Sum_Time) : Get_Time(0, item.Sum_Time);
            data_Level.m_Level_Boss = type_Level;
            data_Level.m_Level_Start = item.Level_Start;
            data_Level.m_Showdow_Boss = Get_Type_Boss_By_Name(item.Shadow);
            data_Level.m_Fake_Number = item.Fake_Number;
            data_Level.Add_Boss(Get_All_Boss(item.Data_Vampire));
            data_Level.Add_Time_Spawner_Boss(Get_Time_Spawn_Boss(item.Sum_Time, item.Data_Vampire, is_Challenge_Mode));
            data_Level.Add_Data_Player(type_Level, is_Challenge_Mode);

            AssetDatabase.CreateAsset(data_Level, path_Save_Data);
            EditorUtility.SetDirty(data_Level);
            AssetDatabase.SaveAssets();
        }
    }

    private static Model_Name Get_Name_Level(int id_Level)
    {
        Model_Name model_Name = new Model_Name();
        model_Name.name_VI = "Đêm " + id_Level;
        model_Name.name_EN = "Night " + id_Level;

        return model_Name;
    }

    private static Model_Time Get_Time(int level_Jump, int minutes, int second = 0)
    {
        Model_Time model_Time = new Model_Time();
        model_Time.minute = minutes;
        model_Time.seconds = second;

        return model_Time;
    }

    private static Model_Time Convert_To_Model_Time(int level_Jump, int second)
    {
        Model_Time model_Time = new Model_Time();
        model_Time.minute = second / 60;
        model_Time.seconds = second % 60;
        model_Time.level_Jump = level_Jump;

        return model_Time;
    }

    private static Type_Level Get_Type_Level(string mode)
    {
        if (mode.ToLower().Equals("e"))
        {
            return Type_Level.Easy;
        }
        if (mode.ToLower().Equals("h"))
        {
            return Type_Level.Hard;
        }
        if (mode.ToLower().Equals("vh"))
        {
            return Type_Level.Very_Hard;
        }
        if (mode.ToLower().Equals("m"))
        {
            return Type_Level.Mad;
        }
        if (mode.ToLower().Equals("c"))
        {
            return Type_Level.Crazy;
        }
        return Type_Level.Normal;
    }

    private static List<Model_Info_Level_Boss> Get_All_Boss(List<Model_Item_Vampire_Json> Data_Vampire)
    {
        List<Model_Info_Level_Boss> output = new List<Model_Info_Level_Boss>();

        Dictionary<Type_Player, int> m_Map_Bos = new Dictionary<Type_Player, int>();
        for (int i = 0; i < Data_Vampire.Count; i++)
        {
            Type_Player type_Player = Get_Type_Boss_By_Name(Data_Vampire[i].Vampire);

            if (m_Map_Bos.ContainsKey(type_Player))
            {
                m_Map_Bos[type_Player] += Data_Vampire[i].SL;
            }
            else
            {
                m_Map_Bos[type_Player] = Data_Vampire[i].SL;
            }
        }

        foreach (var item in m_Map_Bos.Keys)
        {
            Model_Info_Level_Boss model_Info_Level_Boss = new Model_Info_Level_Boss();
            model_Info_Level_Boss.type_Boss = item;
            model_Info_Level_Boss.amount = m_Map_Bos[item];
            output.Add(model_Info_Level_Boss);
        }

        return output;
    }

    private static List<Model_Time> Get_Time_Spawn_Boss(int m_Max_Time, List<Model_Item_Vampire_Json> Data_Vampire, bool is_Challenge_Mode)
    {
        List<Model_Time> output = new List<Model_Time>();

        Dictionary<Type_Player, List<int>> m_Map_Bos = new Dictionary<Type_Player, List<int>>();
        Dictionary<Type_Player, List<int>> m_Map_Level_Jump = new Dictionary<Type_Player, List<int>>();

        int curr_Sum_Time = 0;

        for (int i = 0; i < Data_Vampire.Count; i++)
        {
            Type_Player type_Player = Get_Type_Boss_By_Name(Data_Vampire[i].Vampire);
            curr_Sum_Time += Data_Vampire[i].Time;
            if (m_Map_Bos.ContainsKey(type_Player))
            {
                for (int k = 0; k < Data_Vampire[i].SL; k++)
                {
                    // Add time = m_Max_Time - Time Vampire
                    if (is_Challenge_Mode)
                    {
                        m_Map_Bos[type_Player].Add(curr_Sum_Time);
                    }
                    else
                    {
                        m_Map_Bos[type_Player].Add(m_Max_Time - Data_Vampire[i].Time);
                    }

                    // Add Data Level Jump
                    m_Map_Level_Jump[type_Player].Add(Data_Vampire[i].Level_Jump);
                }
            }
            else
            {
                List<int> data = new List<int>();
                for (int k = 0; k < Data_Vampire[i].SL; k++)
                {
                    if (is_Challenge_Mode)
                    {
                        data.Add(curr_Sum_Time);
                    } 
                    else
                    {
                        data.Add(m_Max_Time - Data_Vampire[i].Time);
                    }
                }

                m_Map_Bos[type_Player] = data;

                // Add Data Level Jump
                List<int> data_Jump = new List<int>();
                for (int k = 0; k < Data_Vampire[i].SL; k++)
                {
                    data_Jump.Add(Data_Vampire[i].Level_Jump);
                }

                m_Map_Level_Jump[type_Player] = data_Jump;
            }
        }

        foreach (var item in m_Map_Bos.Keys)
        {
            for (int i = 0; i < m_Map_Bos[item].Count; i++)
            {
                if (is_Challenge_Mode)
                {
                    output.Add(Convert_To_Model_Time(m_Map_Level_Jump[item][i], m_Map_Bos[item][i]));
                }
                else
                {
                    output.Add(Get_Time(m_Map_Level_Jump[item][i], m_Map_Bos[item][i]));
                }
            }
        }

        return output;
    }

    public static Type_Player Get_Type_Boss_By_Name(string name)
    {
        name = name.ToLower();
        if (name.Equals("Baital Vampire".ToLower()))
        {
            return Type_Player.Boss_Baital_Vampire;
        }
        if (name.Equals("Succubus".ToLower()))
        {
            return Type_Player.Boss_Succubus;
        }
        if (name.Equals("Werewolf".ToLower()))
        {
            return Type_Player.Boss_Were_Wolf;
        }
        if (name.Equals("Minotaurus".ToLower()))
        {
            return Type_Player.Boss_Minotaurus;
        }
        if (name.Equals("Medusa".ToLower()))
        {
            return Type_Player.Boss_Medusa;
        }
        return Type_Player.Boss_Dracula;
    }
#endif
}

public class Item_Json
{
    public List<Model_Item_Level_Json> Items = new List<Model_Item_Level_Json>();
}

public class Model_Item_Level_Json
{
    public int Id_Level;
    public string Mode;
    public int Sum_Time;
    public int Map;
    public int Level_Start;
    public string Shadow;
    public int Fake_Number;
    public List<Model_Item_Vampire_Json> Data_Vampire = new List<Model_Item_Vampire_Json>();

    public void Add_Data_Vampire(List<Model_Item_Vampire_Json> data_Vampire)
    {
        Data_Vampire.Clear();
        Data_Vampire.AddRange(data_Vampire);
    }
}

public class Model_Item_Vampire_Json
{
    public string Vampire;
    public int SL;
    public int Time;
    public int Level_Jump;
}

public class Item_Json_V1
{
    public List<Model_Item_Level_Json_V1> Items;
}


public class Model_Item_Level_Json_V1
{
    public int Id_Level;
    public string Mode;
    public int Sum_Time;
    public string Vampire;
    public int SL;
    public int Time;
    public int Map;
    public int Level_Start;
    public int Level_Jump;
    public string Shadow;
    public int Fake_Number;
}
