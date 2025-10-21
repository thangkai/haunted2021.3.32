
using System;
using System.Collections.Generic;
using UnityEngine;

public class DataSaved : Singleton<DataSaved>
{
    // GameData.CurrentLevel;
    protected override void Awake()
    {
        base.Awake();
        //        DontDestroyOnLoad(gameObject);

    

    }


 



  
    #region // ================================= Type Mode Play ================================== //

    private const string KEY_Type_Mode_Play = "KEY_Type_Mode_Play";

    public static void Set_Type_Mode_Play(Type_Mode_Play type_Mode_Play)
    {
        UtilGame.SetDataInt(KEY_Type_Mode_Play, (int)type_Mode_Play);
    }

    public static Type_Mode_Play Get_Type_Mode_Play()
    {
        return (Type_Mode_Play)UtilGame.GetDataInt(KEY_Type_Mode_Play, (int)Type_Mode_Play.Player);
    }

    #endregion

    #region =================== Live Data ===================

    public Bool_Global_Variable m_Live_Data_Coin_Change;
    public Bool_Global_Variable m_Live_Data_Blood_Change;
    public Bool_Global_Variable m_Live_Data_Energy_Change;
    public Bool_Global_Variable m_Live_Data_Other_Player_Die;
    public Bool_Global_Variable m_Live_Data_Index_Claimed_Mission_Tutorial;
    public Bool_Global_Variable m_Live_Data_Can_Build_Crucific_Tutorial;

    public Bool_Global_Variable m_Live_Data_Common_Chest_Remainning;

    public void Notify_Data_Index_Claimed_Mission_Tutorial_Change()
    {
        if (m_Live_Data_Index_Claimed_Mission_Tutorial != null)
        {
            m_Live_Data_Index_Claimed_Mission_Tutorial.Value = true;
        }
    }

    public void Notify_Data_Can_Build_Crucific_Tutorial_Change(bool value)
    {
        if (m_Live_Data_Can_Build_Crucific_Tutorial != null)
        {
            m_Live_Data_Can_Build_Crucific_Tutorial.Value = value;
        }
    }

    public void Notify_Data_Coin_Change()
    {
        if (m_Live_Data_Coin_Change != null)
        {
            m_Live_Data_Coin_Change.Value = true;
        }
    }

    public void Notify_Data_Money_Change()
    {
        if (m_Live_Data_Blood_Change != null)
        {
            m_Live_Data_Blood_Change.Value = true;
        }
    }

    public void Notify_Data_Energy_Change()
    {
        if (m_Live_Data_Energy_Change != null)
        {
            m_Live_Data_Energy_Change.Value = true;
        }
    }

    public void Notify_Data_Other_Player_Die_Change()
    {
        if (m_Live_Data_Other_Player_Die != null)
        {
            m_Live_Data_Other_Player_Die.Value = true;
        }
    }

    public void Notify_Data_Common_Chest_Remainning()
    {
        if (m_Live_Data_Common_Chest_Remainning != null)
        {
            m_Live_Data_Common_Chest_Remainning.Value = true;
        }
    }

    public Bool_Global_Variable m_Live_Data_Coin_In_Game_Change;

    public void Notify_Data_Coin_In_Game_Change()
    {
        if (m_Live_Data_Coin_In_Game_Change != null)
        {
            m_Live_Data_Coin_In_Game_Change.Value = true;
        }
    }

    public Bool_Global_Variable m_Live_Data_Energy_In_Game_Change;

    public void Notify_Data_Energy_In_Game_Change()
    {
        if (m_Live_Data_Energy_In_Game_Change != null)
        {
            m_Live_Data_Energy_In_Game_Change.Value = true;
        }
    }


    public Bool_Global_Variable m_Live_Data_Card_Character_In_Game_Change;

    public void Notify_Data_Card_Character_In_Game_Change()
    {
        if (m_Live_Data_Card_Character_In_Game_Change != null)
        {
            m_Live_Data_Card_Character_In_Game_Change.Value = true;
        }
    }


    public Bool_Global_Variable m_Live_Data_Level_Rank_Skin;

    public void Notify_Data_Level_Rank_SKin()
    {
        if (m_Live_Data_Level_Rank_Skin != null)
        {
            m_Live_Data_Level_Rank_Skin.Value = true;
        }
    }

    #endregion

    #region //  ================================ Coin ================================== //

    private const string key_coin = "key_coin";

    public static void Increase_Coin(int value, bool isNotify = true)
    {
        if (value <= 0)
        {
            return;
        }

        int sum = Get_Sum_Coin();
        sum = sum + value;
        Set_Coin(sum, isNotify);

        if (isNotify)
        {
            if (Instance != null)
            {
                Instance.Notify_Data_Coin_Change();
            }
        }
    }

    public static void Decrease_Coin(int value, bool isNotify = true)
    {
        int sum = Get_Sum_Coin();
        sum -= value;
        if (sum < 0)
        {
            sum = 0;
        }

        Set_Coin(sum);
        if (Instance != null && isNotify)
        {
            Instance.Notify_Data_Coin_Change();
        }
    }

    public static void Set_Coin(int value, bool isNotify = true)
    {
        UtilGame.SetDataInt(key_coin, value);
        if (Instance != null && isNotify)
        {
            Instance.Notify_Data_Coin_Change();
        }
    }

    public static int Get_Sum_Coin()
    {
        return UtilGame.GetDataInt(key_coin, 0);
    }

    #endregion

    #region //  ================================ Money ================================== //

    private const string key_Money = "key_Money";

    public static void Increase_Money(int value, bool isNotify = true)
    {
        if (value <= 0)
        {
            return;
        }

        int sum = Get_Sum_Money();
        sum = sum + value;
        Set_Money(sum, isNotify);

        if (isNotify)
        {
            if (Instance != null)
            {
                Instance.Notify_Data_Money_Change();
            }
        }
    }

    public static void Decrease_Money(int value, bool isNotify = true)
    {
        int sum = Get_Sum_Money();
        sum -= value;
        if (sum < 0)
        {
            sum = 0;
        }

        Set_Money(sum);
        if (Instance != null && isNotify)
        {
            Instance.Notify_Data_Money_Change();
        }
    }

    public static void Set_Money(int value, bool isNotify = true)
    {
        UtilGame.SetDataInt(key_Money, value);
        if (Instance != null && isNotify)
        {
            Instance.Notify_Data_Money_Change();
        }
    }

    public static int Get_Sum_Money()
    {
        return UtilGame.GetDataInt(key_Money, 0);
    }

    #endregion

 

   


  
















    #region // ================================= SOUND ================================== //

    private const string KEY_Status_Sound = "KEY_Status_Sound";

    public static void Set_Status_Sound(bool isTurnOn)
    {
        UtilGame.SetBool(KEY_Status_Sound, isTurnOn);
    }

    public static bool Get_Status_Sound()
    {
        return UtilGame.GetBool(KEY_Status_Sound, true);
    }

    #endregion



    #region // ================================= MUSIC ================================== //

    private const string KEY_Status_Music = "KEY_Status_Music";

    public static void Set_Status_Music(bool isTurnOn)
    {
        UtilGame.SetBool(KEY_Status_Music, isTurnOn);
    }

    public static bool Get_Status_Music()
    {
        return UtilGame.GetBool(KEY_Status_Music, true);
    }

    #endregion

    #region // ================================= LANGUAGE ================================== //

    private const string KEY_CURRENT_LANGUAGE = "Current_Language";

    public static void Set_Current_Language(string languageName)
    {
        UtilGame.SetString(KEY_CURRENT_LANGUAGE, languageName);
    }

    public static string Get_Current_Language()
    {
        return UtilGame.GetString(KEY_CURRENT_LANGUAGE, "English");
    }

    #endregion

    #region // ================================= Remove Ads ================================== //

    public static void Set_Is_Remove_Ads(bool isRemove)
    {
        UtilGame.SetDataBool(UtilGame.KEY_REMOVEADS, isRemove);
    }

    public static bool Get_Is_Remove_Ads()
    {
        return UtilGame.GetDataBool(UtilGame.KEY_REMOVEADS, false);
    }

    #endregion

    #region // ================================= Is Complete Tutorial ================================== //

    private const string KEY_Is_Complete_Tutorial = "KEY_Is_Complete_Tutorial";

    public static void Set_Is_Complete_Tutorial(bool isComplete)
    {
        UtilGame.SetBool(KEY_Is_Complete_Tutorial, isComplete);
    }

    public static bool Get_Is_Complete_Tutorial()
    {
        if (!RootManager.Check_Is_On_Tutorials())
        {
            return true;
        }

        return UtilGame.GetBool(KEY_Is_Complete_Tutorial, false);
    }

    #endregion

    #region //  ================================ Coin In Game ================================== //

    private const string Key_Coin_In_Game = "Key_Coin_In_Game";

    public static void Increase_Coin_In_Game(int value, bool isNotify = true)
    {
        if (value <= 0)
        {
            return;
        }

        int sum = Get_Coin_In_Game();
        sum = sum + value;
        Set_Coin_In_Game(sum, isNotify);

        if (isNotify)
        {
            if (Instance != null)
            {
                Instance.Notify_Data_Coin_In_Game_Change();
            }
        }
    }

    public static void Set_Coin_In_Game(int value, bool isNotify = true)
    {
        UtilGame.SetDataInt(Key_Coin_In_Game, value);
        if (Instance != null && isNotify)
        {
            Instance.Notify_Data_Coin_In_Game_Change();
        }
    }

    public static int Get_Coin_In_Game()
    {
        return UtilGame.GetDataInt(Key_Coin_In_Game, 0);
    }

    #endregion

    #region //  ================================ Energy In Game ================================== //

    private const string Key_Energy_In_Game = "Key_Energy_In_Game";

    public static void Increase_Energy_In_Game(int value, bool isNotify = true)
    {
        if (value <= 0)
        {
            return;
        }

        int sum = Get_Energy_In_Game();
        sum = sum + value;
        Set_Energy_In_Game(sum, isNotify);

        if (isNotify)
        {
            if (Instance != null)
            {
                Instance.Notify_Data_Energy_In_Game_Change();
            }
        }
    }

    public static void Set_Energy_In_Game(int value, bool isNotify = true)
    {
        UtilGame.SetDataInt(Key_Energy_In_Game, value);
        if (Instance != null && isNotify)
        {
            Instance.Notify_Data_Energy_In_Game_Change();
        }
    }

    public static int Get_Energy_In_Game()
    {
        return UtilGame.GetDataInt(Key_Energy_In_Game, 0);
    }

    #endregion

    #region // ================================= Shop KEY_Skin_Character_Bought ================================== //

    private const string KEY_Skin_Character_Bought = "KEY_Skin_Character_Bought_";

    public static void Set_Skin_Character_Bought(Type_Character type_Character, bool isBought)
    {
        UtilGame.SetDataBool(KEY_Skin_Character_Bought + type_Character, isBought);
        RootManager.Instance.Add_Character(type_Character);
    }

    public static bool Get_Skin_Character_Bought(Type_Character type_Character)
    {
        return UtilGame.GetDataBool(KEY_Skin_Character_Bought + type_Character, false);
    }

    public static void Reset_Bought_Skin_Character()
    {
        int m_Max_Skin = (int)Type_Character.Total;
        for (int i = 0; i < m_Max_Skin; i++)
        {
            Set_Skin_Character_Bought((Type_Character)i, false);
        }
    }

    public static bool Check_Is_Bought_All_Skin_Character()
    {
        int m_Max_Skin = (int)Type_Character.Total;
        for (int i = 0; i < m_Max_Skin; i++)
        {
            if (!Get_Skin_Character_Bought((Type_Character)i))
            {
                return false;
            }
        }

        return true;
    }

    public static Type_Character Get_Random_Skin_Not_Buy()
    {
        var output = Type_Character.Student;
        int m_Max_Skin = (int)Type_Character.Total;

        List<Type_Character> m_All_Skill_Not_Buy = new List<Type_Character>();
        for (int i = 0; i < m_Max_Skin; i++)
        {
            if (!Get_Skin_Character_Bought((Type_Character)i))
            {
                m_All_Skill_Not_Buy.Add((Type_Character)i);
            }
        }

        if (m_All_Skill_Not_Buy.Count > 0)
        {
            m_All_Skill_Not_Buy.Shuffle();
            return m_All_Skill_Not_Buy[0];
        }

        return output;
    }

    public static Type_Character Get_Random_Skin_Bought()
    {
        var output = Type_Character.Student;
        int m_Max_Skin = (int)Type_Character.Total;

        List<Type_Character> m_All_Skill_Not_Buy = new List<Type_Character>();
        for (int i = 0; i < m_Max_Skin; i++)
        {
            if (Get_Skin_Character_Bought((Type_Character)i))
            {
                m_All_Skill_Not_Buy.Add((Type_Character)i);
            }
        }

        if (m_All_Skill_Not_Buy.Count > 0)
        {
            m_All_Skill_Not_Buy.Shuffle();
            return m_All_Skill_Not_Buy[0];
        }

        return output;
    }

    public static Type_Character Get_Random_Skin_Not_Buy_And_Try()
    {
        var output = Type_Character.Student;
        int m_Max_Skin = (int)Type_Character.Total;

        List<Type_Character> m_All_Skill_Not_Buy = new List<Type_Character>();
        for (int i = 0; i < m_Max_Skin; i++)
        {
            if (!Get_Skin_Character_Bought((Type_Character)i) && (Type_Character)i != DataSaved.Get_Skin_Trying())
            {
                m_All_Skill_Not_Buy.Add((Type_Character)i);
            }
        }

        if (m_All_Skill_Not_Buy.Count > 0)
        {
            m_All_Skill_Not_Buy.Shuffle();
            return m_All_Skill_Not_Buy[0];
        }

        return output;
    }

    #endregion

    #region // ================================= Shop KEY_Skin_Character_Equipped ================================== //

    private const string KEY_Skin_Character_Equipped = "KEY_Skin_Character_Equipped";

    public static void Set_Skin_Character_Equipped(Type_Character type_Character)
    {
        UtilGame.SetDataInt(KEY_Skin_Character_Equipped, (int)type_Character);
    }

    public static Type_Character Get_Skin_Character_Equipped()
    {
        return (Type_Character)UtilGame.GetDataInt(KEY_Skin_Character_Equipped, (int)Type_Character.Student);
    }

    #endregion

    //CACH LY DE XOA

    #region // ================================= Shop KEY_Try_Skin_Character_Equipped_Home ================================== //

    private const string KEY_Try_Skin_Character_Equipped_Home = "KEY_Try_Skin_Character_Equipped_Home";

    public static void Set_Try_Skin_Character_Equipped_Home(Type_Character type_Character)
    {
        UtilGame.SetDataInt(KEY_Try_Skin_Character_Equipped_Home, (int)type_Character);
    }

    public static Type_Character Get_Try_Skin_Character_Equipped_Home()
    {
        return (Type_Character)UtilGame.GetDataInt(KEY_Try_Skin_Character_Equipped_Home, (int)Type_Character.Student);
    }

    #endregion

    #region // ================================= Shop KEY_Try_Skin_Character_Array ================================== //

    private const string KEY_Try_Skin_Character_Array = "KEY_Try_Skin_Character_Array_By_String";

    public static bool Get_Is_Ready_Try_Skin_Character(Type_Character type_Character)
    {
        List<int> Array_Free_Character = DataSaved.Get_Try_Skin_Character_Array().Convert_String_To_ListInt();
        if (Array_Free_Character.Count <= 0)
        {
            return false;
        }

        return Array_Free_Character[(int)type_Character % Array_Free_Character.Count] == 1;
    }

    public static Status_Item_Shop_Character Get_Status_Try_Skin_Character(Type_Character type_Character)
    {
        bool is_Ready_Try_Free = Get_Is_Ready_Try_Skin_Character(type_Character);
        if (!is_Ready_Try_Free)
        {
            return Status_Item_Shop_Character.Normal;
        }

        if (Get_Skin_Character_Equipped() == type_Character)
        {
            return Status_Item_Shop_Character.Selected;
        }

        return Status_Item_Shop_Character.Bought;
    }

    public static void Add_Try_Skin_Character_Array(Type_Character type_Character, int value_Open)
    {
        List<int> Array_Free_Character = DataSaved.Get_Try_Skin_Character_Array().Convert_String_To_ListInt();
        Array_Free_Character[(int)type_Character % Array_Free_Character.Count] = value_Open;
        Set_Try_Skin_Character_Array(Array_Free_Character.Convert_ListInt_To_String());
    }


    public static void Set_Try_Skin_Character_Array(string m_Try_Skin_String)
    {
        //UtilGame.SetDataInt(KEY_Try_Skin_Character_Array, (int)type_Character);
        UtilGame.SetDataString(KEY_Try_Skin_Character_Array, m_Try_Skin_String);
    }

    public static string Get_Try_Skin_Character_Array()
    {
        if (RootManager.Instance)
        {
            return UtilGame.GetDataString(KEY_Try_Skin_Character_Array,
                RootManager.Instance.Get_Default_Data_Try_Skin());
        }

        return UtilGame.GetDataString(KEY_Try_Skin_Character_Array, "0|0|0|0|0|0|0|0|0|0|0|0|0|0|0");
    }

    #endregion


    #region // ================================= Shop KEY_Skin_Boss_Bought ================================== //

    private const string KEY_Skin_Boss_Bought = "KEY_Skin_Boss_Bought_";

    public static void Set_Skin_Boss_Bought(Type_Player type_Boss, bool isBought)
    {
        UtilGame.SetDataBool(KEY_Skin_Boss_Bought + type_Boss, isBought);
    }

    public static bool Get_Skin_Boss_Bought(Type_Player type_Boss)
    {
        return UtilGame.GetDataBool(KEY_Skin_Boss_Bought + type_Boss, false);
    }

    #endregion

    #region // ================================= Shop KEY_Skin_Boss_Equipped ================================== //

    private const string KEY_Skin_Boss_Equipped = "KEY_Skin_Boss_Equipped";

    public static void Set_Skin_Boss_Equipped(Type_Player type_Boss)
    {
        UtilGame.SetDataInt(KEY_Skin_Boss_Equipped, (int)type_Boss);
    }

    public static Type_Player Get_Skin_Boss_Equipped()
    {
        return (Type_Player)UtilGame.GetDataInt(KEY_Skin_Boss_Equipped, (int)Type_Player.Boss_Dracula);
    }

    #endregion

    #region // ================================= Level Complete ================================== //

    private const string KEY_LEVEL_COMPLETE = "KEY_LEVEL_COMPLETE_";

    public static void Set_Level_Complete(int level)
    {
        UtilGame.SetBool(KEY_LEVEL_COMPLETE + level, true);
        Set_Max_Level_Unlocked(level + 1);
    }

    public static bool Get_Level_Complete(int level)
    {
        return UtilGame.GetBool(KEY_LEVEL_COMPLETE + level, false);
    }

    #endregion

    #region // ================================= Level Loading ================================== //

    private const string KEY_CURRENT_LOADING_LEVEL = "Current_loading_level";

    public static void Set_Current_Loading_Level(int levelIndex)
    {
        if (levelIndex >= RootManager.Instance.Get_Total_Level())
        {
            levelIndex = RootManager.Instance.Get_Total_Level() - 1;
        }

        UtilGame.SetInt(KEY_CURRENT_LOADING_LEVEL, levelIndex);
    }

    public static int Get_Current_Loading_Level()
    {
        return UtilGame.GetInt(KEY_CURRENT_LOADING_LEVEL, 0);
    }

    #endregion

    #region // ================================= Max Level unlocked index ================================== //

    private const string KEY_MAX_LEVEL_UNLOCKED = "Max_level_unlocked";

    public static void Set_Max_Level_Unlocked(int levelIndex)
    {
        if (levelIndex > Get_Max_Level_Unlocked_Index())
        {
            if (RootManager.Instance && levelIndex >= RootManager.Instance.Get_Total_Level())
            {
                levelIndex = RootManager.Instance.Get_Total_Level();
            }

            UtilGame.SetInt(KEY_MAX_LEVEL_UNLOCKED, levelIndex);
        }
    }

    public static int Get_Max_Level_Unlocked_Index()
    {
        int output = UtilGame.GetInt(KEY_MAX_LEVEL_UNLOCKED, 0);
        if (RootManager.Instance && output >= RootManager.Instance.Get_Total_Level())
        {
            output = RootManager.Instance.Get_Total_Level() - 1;
        }

        return output;
    }

    #endregion

    #region // ================================= Skill Tree Player ================================== //

    private const string KEY_Unlock_Skill_Tree_Player = "KEY_Unlock_Skill_Tree_Player_";

    public static void Set_Unlock_Skill_Tree_Player(Type_Skill_Tree type_Skill, bool is_Unlock)
    {
        UtilGame.SetBool(KEY_Unlock_Skill_Tree_Player + type_Skill, is_Unlock);
    }

    public static bool Get_Unlock_Skill_Tree_Player(Type_Skill_Tree type_Skill)
    {
        return UtilGame.GetBool(KEY_Unlock_Skill_Tree_Player + type_Skill, false);
    }

    #endregion


    #region // ================================= Skill Tree Player Gem ================================== //

    private const string KEY_Unlock_Skill_Tree_Gem_Player = "KEY_Unlock_Skill_Tree_Gem_Player_";

    public static void Set_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem type_Skill, bool is_Unlock)
    {
        UtilGame.SetBool(KEY_Unlock_Skill_Tree_Gem_Player + type_Skill, is_Unlock);
    }

    public static bool Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem type_Skill)
    {
        return UtilGame.GetBool(KEY_Unlock_Skill_Tree_Gem_Player + type_Skill, false);
    }

    #endregion


    #region // ================================= Sum Vampire Died ================================== //

    private const string KEY_Sum_Vampire_Died = "KEY_Sum_Vampire_Died";

    public static void Increase_Sum_Vampire_Died(int delta = 1)
    {
        Set_Sum_Vampire_Died(Get_Sum_Vampire_Died() + delta);
    }

    public static void Reset_Sum_Vampire_Died()
    {
        Set_Sum_Vampire_Died(0);
    }

    public static void Set_Sum_Vampire_Died(int sum)
    {
        UtilGame.SetDataInt(KEY_Sum_Vampire_Died, sum);
    }

    public static int Get_Sum_Vampire_Died()
    {
        return UtilGame.GetDataInt(KEY_Sum_Vampire_Died, 0);
    }

    #endregion

    #region // ================================= Coin Reward In Game ================================== //

    private const string KEY_Coin_Reward_In_Game = "KEY_Coin_Reward_In_Game";

    public static void Set_Coin_Reward_In_Game(int sum)
    {
        UtilGame.SetDataInt(KEY_Coin_Reward_In_Game, sum);
    }

    public static int Get_Coin_Reward_In_Game()
    {
        return UtilGame.GetDataInt(KEY_Coin_Reward_In_Game, 0);
    }

    #endregion

    #region // ================================= Blood Reward In Game ================================== //

    private const string KEY_Blood_Reward_In_Game = "KEY_Blood_Reward_In_Game";

    public static void Set_Blood_Reward_In_Game(int sum)
    {
        UtilGame.SetDataInt(KEY_Blood_Reward_In_Game, sum);
    }

    public static int Get_Blood_Reward_In_Game()
    {
        return UtilGame.GetDataInt(KEY_Blood_Reward_In_Game, 0);
    }

    #endregion

    #region // ================================= Is_Collecting_Reward ================================== //

    private const string KEY_Is_Collecting_Reward = "KEY_Is_Collecting_Reward";

    public static void Set_Is_Collecting_Reward(bool is_Collecting)
    {
        UtilGame.SetDataBool(KEY_Is_Collecting_Reward, is_Collecting);
    }

    public static bool Get_Is_Collecting_Reward()
    {
        return UtilGame.GetDataBool(KEY_Is_Collecting_Reward, false);
    }

    #endregion



   

    #region // ================================= Index Claimed Daily Gift ================================== //

    #region // __________ Index Claimed Daily Gift __________ //

    private const string KEY_Index_Claimed_Daily_Gift = "KEY_Index_Claimed_Daily_Gift";

    public static void Inscrease_Index_Claimed_Daily_Gift()
    {
        Set_Index_Claimed_Daily_Gift(Get_Index_Claimed_Daily_Gift() + 1);
    }

    public static void Set_Index_Claimed_Daily_Gift(int index)
    {
        UtilGame.SetDataInt(KEY_Index_Claimed_Daily_Gift, index);
    }

    public static int Get_Index_Claimed_Daily_Gift()
    {
        return UtilGame.GetDataInt(KEY_Index_Claimed_Daily_Gift, 0);
    }

    #endregion

    #region // __________ Claimed_Gift_Today __________ //

    private const string KEY_Claimed_Gift_Today = "KEY_Claimed_Gift_Today";

    public static void Set_Claimed_Gift_Today(bool is_Claimed)
    {
        UtilGame.SetDataBool(KEY_Claimed_Gift_Today, is_Claimed);
    }

    public static bool Get_Claimed_Gift_Today()
    {
        return UtilGame.GetDataBool(KEY_Claimed_Gift_Today, false);
    }

    #endregion

    #region // __________ LAST_CLAIM_DATE __________ //--------datetime

    private const string KEY_Last_Claim_Date = "KEY_Last_Claim_Date";

    public static void Reset_Last_Claim_Date()
    {
        UtilGame.DeleteKeyData(KEY_Last_Claim_Date);
    }

    public static void Set_Last_Claim_Date(DateTime dateTime)
    {
        UtilGame.SetDataInt(KEY_Last_Claim_Date, dateTime.Get_TimeStamp());
    }

    public static DateTime Get_Last_Claim_Date()
    {
        return UtilGame.GetDataInt(KEY_Last_Claim_Date, DateTime.Today.Get_TimeStamp()).TimeStamp_To_Date();
    }

    #endregion

    #region // __________ Day_7_Claimed_Skin __________ //

    private const string KEY_Day_7_Claimed_Skin = "KEY_Day_7_Claimed_Skin";

    public static void Set_Day_7_Claimed_Skin(bool is_Claimed)
    {
        UtilGame.SetDataBool(KEY_Day_7_Claimed_Skin, is_Claimed);
    }

    public static bool Get_Day_7_Claimed_Skin()
    {
        return UtilGame.GetDataBool(KEY_Day_7_Claimed_Skin, false);
    }

    #endregion

    #region // __________ Day_3_Claimed_Skin __________ //

    private const string KEY_Day_3_Claimed_Skin = "KEY_Day_3_Claimed_Skin";

    public static void Set_Day_3_Claimed_Skin(bool is_Claimed)
    {
        UtilGame.SetDataBool(KEY_Day_3_Claimed_Skin, is_Claimed);
    }

    public static bool Get_Day_3_Claimed_Skin()
    {
        return UtilGame.GetDataBool(KEY_Day_3_Claimed_Skin, false);
    }

    #endregion

    #region // __________ Reset_Day_3_Claimed __________ //

    private const string KEY_Reset_Day_3_Claimed = "KEY_Reset_Day_3_Claimed";

    public static void Set_Reset_Day_3_Claimed(bool is_Claimed)
    {
        UtilGame.SetDataBool(KEY_Reset_Day_3_Claimed, is_Claimed);
    }

    public static bool Get_Reset_Day_3_Claimed()
    {
        return UtilGame.GetDataBool(KEY_Reset_Day_3_Claimed, false);
    }

    #endregion

    #region // __________ Skin_Free_For_Day_7 __________ //

    private const string KEY_Skin_Free_For_Day_7 = "KEY_Skin_Free_For_Day_7";

    public static void Set_Skin_Free_For_Day_7(Type_Character skin)
    {
        UtilGame.SetDataInt(KEY_Skin_Free_For_Day_7, (int)skin);
    }

    public static Type_Character Get_Skin_Free_For_Day_7()
    {
        Type_Character skin = (Type_Character)UtilGame.GetDataInt(KEY_Skin_Free_For_Day_7, (int)Type_Character.Student);

        if (Get_Skin_Character_Bought(skin))
        {
            skin = Get_Random_Skin_Not_Buy();
            Set_Skin_Free_For_Day_7(skin);
        }

        return skin;
    }

    #endregion

    #endregion

    #region // __________ Last Time Claim Energy __________ //--------datetime

    private const string KEY_Last_Time_Claim_Energy = "KEY_Last_Time_Claim_Energy";

    public static void Reset_Last_Time_Claim_Energy()
    {
        UtilGame.DeleteKeyData(KEY_Last_Time_Claim_Energy);
    }

    public static void Set_Last_Time_Claim_Energy(DateTime dateTime)
    {
        UtilGame.SetDataInt(KEY_Last_Time_Claim_Energy, dateTime.Get_TimeStamp());
    }

    public static DateTime Get_Last_Time_Claim_Energy()
    {
        return UtilGame.GetDataInt(KEY_Last_Time_Claim_Energy, DateTime.Today.Get_TimeStamp()).TimeStamp_To_Date();
    }

    #endregion

    #region // ================================= KEY_Count_Other_Player_Die ================================== //

    private const string KEY_Count_Other_Player_Die = "KEY_Count_Other_Player_Die";

    public static void Increase_Count_Other_Player_Die(int delta = 1)
    {
        Set_Count_Other_Player_Die(Get_Count_Other_Player_Die() + delta);
        if (Instance)
        {
            Instance.Notify_Data_Other_Player_Die_Change();
        }
    }

    public static void Decrease_Count_Other_Player_Die(int delta = 1)
    {
        int sum = Get_Count_Other_Player_Die() - delta;
        if (sum < 0)
        {
            sum = 0;
        }

        Set_Count_Other_Player_Die(sum);
        if (Instance)
        {
            Instance.Notify_Data_Other_Player_Die_Change();
        }
    }

    public static void Set_Count_Other_Player_Die(int input)
    {
        UtilGame.SetDataInt(KEY_Count_Other_Player_Die, input);
    }

    public static int Get_Count_Other_Player_Die()
    {
        return UtilGame.GetDataInt(KEY_Count_Other_Player_Die, 0);
    }

    #endregion

    #region // ================================= Sum Played ================================== //

    private const string KEY_Sum_Played = "KEY_Sum_Played";

    public static void Increase_Sum_Played()
    {
        Set_Sum_Played(Get_Sum_Played() + 1);
    }

    private static void Set_Sum_Played(int levelIndex)
    {
        UtilGame.SetInt(KEY_Sum_Played, levelIndex);
    }

    public static int Get_Sum_Played()
    {
        return UtilGame.GetInt(KEY_Sum_Played, 0);
    }

    #endregion

    #region // ================================= Count_Open_UI_Home ================================== //

    private const string KEY_Count_Open_UI_Home = "KEY_Count_Open_UI_Home";

    public static void Increase_Count_Open_UI_Home()
    {
        Set_Count_Open_UI_Home(Get_Count_Open_UI_Home() + 1);
    }

    public static void Set_Count_Open_UI_Home(int levelIndex)
    {
        UtilGame.SetInt(KEY_Count_Open_UI_Home, levelIndex);
    }

    public static int Get_Count_Open_UI_Home()
    {
        return UtilGame.GetInt(KEY_Count_Open_UI_Home, 0);
    }

    #endregion

    #region // __________ Is_Show_UI_Daily_Gift __________ //

    private const string KEY_Is_Show_UI_Daily_Gift = "KEY_Is_Show_UI_Daily_Gift";

    public static void Set_Is_Show_UI_Daily_Gift(bool is_Claimed)
    {
        UtilGame.SetDataBool(KEY_Is_Show_UI_Daily_Gift, is_Claimed);
    }

    public static bool Get_Is_Show_UI_Daily_Gift()
    {
        return UtilGame.GetDataBool(KEY_Is_Show_UI_Daily_Gift, false);
    }

    #endregion

    #region // __________ Is_Show_UI_Spin __________ //

    private const string KEY_Is_Show_UI_Spin = "KEY_Is_Show_UI_Spin";

    public static void Set_Is_Show_UI_Spin(bool is_Claimed)
    {
        UtilGame.SetDataBool(KEY_Is_Show_UI_Spin, is_Claimed);
    }

    public static bool Get_Is_Show_UI_Spin()
    {
        return UtilGame.GetDataBool(KEY_Is_Show_UI_Spin, false);
    }

    #endregion

    #region // __________ Is_Complete_Tut_Fix_Door __________ //

    private const string KEY_Is_Complete_Tut_Fix_Door = "KEY_Is_Complete_Tut_Fix_Door";

    public static void Set_Is_Complete_Tut_Fix_Door(bool is_Done)
    {
        UtilGame.SetDataBool(KEY_Is_Complete_Tut_Fix_Door, is_Done);
    }

    public static bool Get_Is_Complete_Tut_Fix_Door()
    {
        return UtilGame.GetDataBool(KEY_Is_Complete_Tut_Fix_Door, false);
    }

    #endregion

    #region // __________ Is_Complete_Tut_Gift_In_Game __________ //

    private const string KEY_Is_Complete_Tut_Gift_In_Game = "KEY_Is_Complete_Tut_Gift_In_Game";

    public static void Set_Is_Complete_Tut_Gift_In_Game(bool is_Done)
    {
        UtilGame.SetDataBool(KEY_Is_Complete_Tut_Gift_In_Game, is_Done);
    }

    public static bool Get_Is_Complete_Tut_Gift_In_Game()
    {
        return UtilGame.GetDataBool(KEY_Is_Complete_Tut_Gift_In_Game, false);
    }

    #endregion

    #region // __________ Is_Free_First_Play __________ //

    private const string KEY_Is_Free_First_Play = "KEY_Is_Free_First_Play";

    public static void Set_Is_Free_First_Play(bool is_Done)
    {
        UtilGame.SetDataBool(KEY_Is_Free_First_Play, is_Done);
    }

    public static bool Get_Is_Free_First_Play()
    {
        return UtilGame.GetDataBool(KEY_Is_Free_First_Play, true);
    }

    #endregion

    #region // __________ Is_Free_First_Try_Skin __________ //

    private const string KEY_Is_Free_First_Try_Skin = "KEY_Is_Free_First_Try_Skin";

    public static void Set_Is_Free_First_Try_Skin(bool is_Done)
    {
        UtilGame.SetDataBool(KEY_Is_Free_First_Try_Skin, is_Done);
    }

    public static bool Get_Is_Free_First_Try_Skin()
    {
        return UtilGame.GetDataBool(KEY_Is_Free_First_Try_Skin, true);
    }

    #endregion

    #region // ================================= Shop KEY_Skin_Trying ================================== //

    private const string KEY_Skin_Trying = "KEY_Skin_Trying";

    public static void Set_Skin_Trying(Type_Character type_Character)
    {
        UtilGame.SetDataInt(KEY_Skin_Trying, (int)type_Character);
    }

    public static Type_Character Get_Skin_Trying()
    {
        return (Type_Character)UtilGame.GetDataInt(KEY_Skin_Trying, (int)Type_Character.None);
    }

    #endregion

    #region // ================================= Shop Is_Trying_Skin_2 ================================== //

    private const string KEY_Is_Trying_Skin_2 = "KEY_Is_Trying_Skin_2";

    public static void Set_Is_Trying_Skin_2(bool is_Trying)
    {
        UtilGame.SetDataBool(KEY_Is_Trying_Skin_2, is_Trying);
    }

    public static bool Get_Is_Trying_Skin_2()
    {
        return UtilGame.GetDataBool(KEY_Is_Trying_Skin_2, false);
    }

    #endregion

    #region // __________ Is_Free_Spin __________ //

    private const string KEY_Is_Free_Spin = "KEY_Is_Free_Spin";

    public static void Set_Is_Free_Spin(bool is_Done)
    {
        UtilGame.SetDataBool(KEY_Is_Free_Spin, is_Done);
    }

    public static bool Get_Is_Free_Spin()
    {
        return UtilGame.GetDataBool(KEY_Is_Free_Spin, true);
    }

    #endregion

    #region // __________ Last Time Claim Free Spin __________ //--------datetime

    private const string KEY_Last_Time_Claim_Free_Spin = "KEY_Last_Time_Claim_Free_Spin";

    public static void Reset_Last_Time_Claim_Free_Spin()
    {
        UtilGame.DeleteKeyData(KEY_Last_Time_Claim_Free_Spin);
    }

    public static void Set_Last_Time_Claim_Free_Spin(DateTime dateTime)
    {
        UtilGame.SetDataInt(KEY_Last_Time_Claim_Free_Spin, dateTime.Get_TimeStamp());
    }

    public static DateTime Get_Last_Time_Claim_Free_Spin()
    {
        return UtilGame.GetDataInt(KEY_Last_Time_Claim_Free_Spin, DateTime.Now.Get_TimeStamp()).TimeStamp_To_Date();
    }

    #endregion

    #region // __________ Is_Show_Best_Seller __________ //

    private const string KEY_Is_Show_Popup_IAP = "KEY_Is_Show_Popup_IAP";

    public static void Set_Is_Show_Popup_IAP(bool is_Done)
    {
        UtilGame.SetDataBool(KEY_Is_Show_Popup_IAP, is_Done);
    }

    public static bool Get_Is_Show_Popup_IAP()
    {
        return UtilGame.GetDataBool(KEY_Is_Show_Popup_IAP, false);
    }

    #endregion

    #region // __________ Is_First_Time_Show_Best_Seller __________ //

    private const string KEY_Is_First_Time_Show_Best_Seller = "KEY_Is_First_Time_Show_Best_Seller";

    public static void Set_Is_First_Time_Show_Best_Seller(bool is_Done)
    {
        UtilGame.SetDataBool(KEY_Is_First_Time_Show_Best_Seller, is_Done);
    }

    public static bool Get_Is_First_Time_Show_Best_Seller()
    {
        return UtilGame.GetDataBool(KEY_Is_First_Time_Show_Best_Seller, false);
    }

    #endregion

    #region // __________ Is_Unlock_Skill_2 __________ //

    private const string KEY_Is_Unlock_Skill_2 = "KEY_Is_Unlock_Skill_2_";

    public static void Set_Is_Unlock_Skill_2(Type_Character type_Character, bool is_Done)
    {
        if (type_Character == Type_Character.None) return;
        UtilGame.SetDataBool(KEY_Is_Unlock_Skill_2 + type_Character, is_Done);
    }

    public static bool Get_Is_Unlock_Skill_2(Type_Character type_Character)
    {
        return UtilGame.GetDataBool(KEY_Is_Unlock_Skill_2 + type_Character, false);
    }

    #endregion

    #region // __________ Is_Unlock_Skill_3 __________ //

    private const string KEY_Is_Unlock_Skill_3 = "KEY_Is_Unlock_Skill_3_";

    public static void Set_Is_Unlock_Skill_3(Type_Character type_Character, bool is_Done)
    {
        if (type_Character == Type_Character.None) return;
        UtilGame.SetDataBool(KEY_Is_Unlock_Skill_3 + type_Character, is_Done);
    }

    public static bool Get_Is_Unlock_Skill_3(Type_Character type_Character)
    {
        if (Game_Controller.Instance && !Get_Skin_Character_Bought(type_Character)) return true;

        return UtilGame.GetDataBool(KEY_Is_Unlock_Skill_3 + type_Character, false);
    }

    #endregion

    #region // __________ Is_Using_Skin_2 __________ //

    private const string KEY_Is_Using_Skin_2 = "KEY_Is_Using_Skin_2";

    public static void Set_Is_Using_Skin_2(Type_Character type_Character, bool is_Done)
    {
        if (type_Character == Type_Character.None) return;
        UtilGame.SetDataBool(KEY_Is_Using_Skin_2 + type_Character, is_Done);
    }

    public static bool Get_Is_Using_Skin_2(Type_Character type_Character)
    {
        return UtilGame.GetDataBool(KEY_Is_Using_Skin_2 + type_Character, false);
    }

    #endregion

    #region // __________ Is_Bought_Skin_2 __________ //

    private const string KEY_Is_Bought_Skin_2 = "KEY_Is_Bought_Skin_2_";

    public static void Set_Is_Bought_Skin_2(Type_Character type_Character, bool is_Done)
    {
        if (type_Character == Type_Character.None) return;
        UtilGame.SetDataBool(KEY_Is_Bought_Skin_2 + type_Character, is_Done);
    }

    public static bool Get_Is_Bought_Skin_2(Type_Character type_Character)
    {
        return UtilGame.GetDataBool(KEY_Is_Bought_Skin_2 + type_Character, false);
    }

    #endregion

    #region // __________ Sum Item Support __________ //

    private const string KEY_Sum_Item_Support = "KEY_Sum_Item_Support_";

    public static void Set_Sum_Item_Support(Type_Item_Support type_Item_Support, int value)
    {
        UtilGame.SetDataInt(KEY_Sum_Item_Support + type_Item_Support, value);
    }

    public static int Get_Sum_Item_Support(Type_Item_Support type_Item_Support)
    {
        return UtilGame.GetDataInt(KEY_Sum_Item_Support + type_Item_Support, 1);
    }

    public static void Decrease_Sum_Item_Support(Type_Item_Support type_Item_Support, int value = 1)
    {
        int aaa = Get_Sum_Item_Support(type_Item_Support);
        aaa -= value;
        if (aaa < 0) aaa = 0;
        Set_Sum_Item_Support(type_Item_Support, aaa);
    }

    public static void Increase_Sum_Item_Support(Type_Item_Support type_Item_Support, int value = 1)
    {
        Set_Sum_Item_Support(type_Item_Support, Get_Sum_Item_Support(type_Item_Support) + value);
    }

    #endregion

    #region // __________ Type Max Level Boss __________ //

    private const string KEY_Type_Max_Level_Boss = "KEY_Type_Max_Level_Boss";

    public static void Set_Type_Max_Level_Boss(Type_Level type_Level)
    {
        UtilGame.SetDataInt(KEY_Type_Max_Level_Boss, (int)type_Level);
    }

    public static Type_Level Get_Type_Max_Level_Boss()
    {
        return (Type_Level)UtilGame.GetDataInt(KEY_Type_Max_Level_Boss, (int)Type_Level.Easy);
    }

    #endregion

    #region // ================================= Complete_Tut_Use_Item ================================== //

    private const string KEY_Complete_Tut_Use_Item = "KEY_Complete_Tut_Use_Item";

    public static void Set_Complete_Tut_Use_Item(bool is_Complete)
    {
        UtilGame.SetDataBool(KEY_Complete_Tut_Use_Item, is_Complete);
    }

    public static bool Get_Complete_Tut_Use_Item()
    {
        return UtilGame.GetDataBool(KEY_Complete_Tut_Use_Item, false);
    }

    #endregion

    #region // ================================= Complete_Tut_Use_Packback_Item ================================== //

    private const string KEY_Complete_Tut_Use_Packback_Item = "KEY_Complete_Tut_Use_Packback_Item";

    public static void Set_Complete_Tut_Use_Packback_Item(bool is_Complete)
    {
        UtilGame.SetDataBool(KEY_Complete_Tut_Use_Packback_Item, is_Complete);
    }

    public static bool Get_Complete_Tut_Use_Packback_Item()
    {
        return UtilGame.GetDataBool(KEY_Complete_Tut_Use_Packback_Item, false);
    }

    #endregion

    #region // ================================= Complete_Tut_Home_Shop_Item ================================== //

    private const string KEY_Complete_Tut_Home_Shop_Item = "KEY_Complete_Tut_Home_Shop_Item_2";

    public static void Set_Complete_Tut_Home_Shop_Item(bool is_Complete)
    {
        UtilGame.SetDataBool(KEY_Complete_Tut_Home_Shop_Item, is_Complete);
    }

    public static bool Get_Complete_Tut_Home_Shop_Item()
    {
        return UtilGame.GetDataBool(KEY_Complete_Tut_Home_Shop_Item, false);
    }

    #endregion

    #region // ================================= Complete_Tut_Home_Shop_Item ================================== //

    private const string KEY_Complete_Tut_Home_Buy_Item_Door = "KEY_Complete_Tut_Home_Buy_Item_Door";

    public static void Set_Complete_Tut_Home_Buy_Item_Door(bool is_Complete)
    {
        UtilGame.SetDataBool(KEY_Complete_Tut_Home_Buy_Item_Door, is_Complete);
    }

    public static bool Get_Complete_Tut_Home_Buy_Item_Door()
    {
        return UtilGame.GetDataBool(KEY_Complete_Tut_Home_Buy_Item_Door, false);
    }

    #endregion

    #region // ================================= Complete_Tut_Home_Shop_Item_Repair ================================== //

    private const string KEY_Complete_Tut_Home_Shop_Item_Repair = "KEY_Complete_Tut_Home_Shop_Item_Repair";

    public static void Set_Complete_Tut_Home_Shop_Item_Repair(bool is_Complete)
    {
        UtilGame.SetDataBool(KEY_Complete_Tut_Home_Shop_Item_Repair, is_Complete);
    }

    public static bool Get_Complete_Tut_Home_Shop_Item_Repair()
    {
        return UtilGame.GetDataBool(KEY_Complete_Tut_Home_Shop_Item_Repair, false);
    }

    #endregion


    #region // ================================= Complete_Tut_Back_Shop ================================== //

    private const string KEY_Complete_Tut_Back_Shop = "KEY_Complete_Tut_Back_Shop_2";

    public static void Set_Complete_Tut_Back_Shop(bool is_Complete)
    {
        UtilGame.SetDataBool(KEY_Complete_Tut_Back_Shop, is_Complete);
    }

    public static bool Get_Complete_Tut_Back_Shop()
    {
        return UtilGame.GetDataBool(KEY_Complete_Tut_Back_Shop, false);
    }

    #endregion

    #region // ================================= Check_Can_Show_Popup_IAP ================================== //

    private const string KEY_Check_Can_Show_Popup_IAP = "KEY_Check_Can_Show_Popup_IAP";

    public static void Set_Check_Can_Show_Popup_IAP(bool is_Complete)
    {
        UtilGame.SetDataBool(KEY_Check_Can_Show_Popup_IAP, is_Complete);
    }

    public static bool Get_Check_Can_Show_Popup_IAP()
    {
        return UtilGame.GetDataBool(KEY_Check_Can_Show_Popup_IAP, false);
    }

    #endregion

    #region // __________ Is_Receive_Bonus_Gem_Pack_Normal __________ //

    private const string KEY_Is_Receive_Bonus_Gem_Pack_Normal = "KEY_Is_Receive_Bonus_Gem_Pack_Normal";

    public static void Set_Is_Receive_Bonus_Gem_Pack_Normal(bool is_Done)
    {
        UtilGame.SetDataBool(KEY_Is_Receive_Bonus_Gem_Pack_Normal, is_Done);
    }

    public static bool Get_Is_Receive_Bonus_Gem_Pack_Normal()
    {
        return UtilGame.GetDataBool(KEY_Is_Receive_Bonus_Gem_Pack_Normal, false);
    }

    #endregion

    #region // __________ Total Day Played __________ //

    private const string KEY_Total_Day_Played = "KEY_Total_Day_Played";

    public static void Increase_Total_Day_Played(int delta = 1)
    {
        Set_Total_Day_Played(Get_Total_Day_Played() + delta);
    }

    public static void Set_Total_Day_Played(int total)
    {
        UtilGame.SetDataInt(KEY_Total_Day_Played, total);
    }

    public static int Get_Total_Day_Played()
    {
        return UtilGame.GetDataInt(KEY_Total_Day_Played, 0);
    }

    #endregion

    #region // __________ Is_Show_Pack_Sale __________ //

    private const string KEY_Is_Show_Pack_Sale = "KEY_Is_Show_Pack_Sale";
    [SerializeField] Bool_Global_Variable m_Live_Data_Show_Pack_Sales;

    private void Notify_Live_Data_Show_Pack_Sales(bool is_Show)
    {
        if (m_Live_Data_Show_Pack_Sales)
        {
            m_Live_Data_Show_Pack_Sales.Value = is_Show;
        }
    }

    public static void Set_Is_Show_Pack_Sale(bool is_Done)
    {
        UtilGame.SetDataBool(KEY_Is_Show_Pack_Sale, is_Done);
        if (Instance)
        {
            Instance.Notify_Live_Data_Show_Pack_Sales(is_Done);
        }
    }

    public static bool Get_Is_Show_Pack_Sale()
    {
        return UtilGame.GetDataBool(KEY_Is_Show_Pack_Sale, true);
    }

    #endregion

    #region // __________ Last_Date_Show_Sale __________ //--------datetime

    private const string KEY_Last_Date_Show_Sale = "KEY_Last_Date_Show_Sale";

    public static void Set_Last_Date_Show_Sale(DateTime dateTime)
    {
        UtilGame.SetDataInt(KEY_Last_Date_Show_Sale, dateTime.Get_TimeStamp_Not_Second());
    }

    public static DateTime Get_Last_Date_Show_Sale() // last day hien thi sale  
    {
        return UtilGame.GetDataInt(KEY_Last_Date_Show_Sale, DateTime.Today.Get_TimeStamp_Not_Second())
            .TimeStamp_To_Date();
    }

    #endregion

    #region // __________ Last Time Claim Pack Sale __________ //--------datetime

    private const string KEY_Last_Time_Claim_Pack_Sale = "KEY_Last_Time_Claim_Pack_Sale";

    public static void Set_Last_Time_Claim_Pack_Sale(DateTime dateTime)
    {
        UtilGame.SetDataInt(KEY_Last_Time_Claim_Pack_Sale, dateTime.Get_TimeStamp());
    }

    public static DateTime Get_Last_Time_Claim_Pack_Sale()
    {
        return UtilGame.GetDataInt(KEY_Last_Time_Claim_Pack_Sale, DateTime.Now.Get_TimeStamp()).TimeStamp_To_Date();
    }

    #endregion

    #region ============= DAILY QUEST =============

    #region ------------ Type Quest Mission Daily ------------

    private const string KEY_Type_Quest_Mission_Daily = "KEY_Type_Quest_Mission_Daily";

    public static void Set_Type_Quest_Mission_Daily(Type_Mission_Daily type_Mission_Daily,
        Type_Quest_Daily type_Quest_Daily)
    {
        UtilGame.SetDataInt(KEY_Type_Quest_Mission_Daily + type_Mission_Daily.ToString(), (int)type_Quest_Daily);
    }

    public static Type_Quest_Daily Get_Type_Quest_Mission_Daily(Type_Mission_Daily type_Mission_Daily)
    {
        return (Type_Quest_Daily)UtilGame.GetDataInt(KEY_Type_Quest_Mission_Daily + type_Mission_Daily.ToString(),
            (int)Type_Quest_Daily.Kill_All_Monster);
    }

    #endregion

    #region ------------ Is Complete Mission Daily ------------

    private const string KEY_Is_Complete_Mission_Daily = "KEY_Is_Complete_Mission_Daily_";



    public static bool Get_Is_Complete_Mission_Daily(Type_Mission_Daily type_Mission_Daily)
    {
        return UtilGame.GetDataBool(KEY_Is_Complete_Mission_Daily + type_Mission_Daily.ToString(), false);
    }

    #endregion

    #region ------------ Is Claimed Mission Daily ------------

    private const string KEY_Is_Claimed_Mission_Daily = "KEY_Is_Claimed_Mission_Daily_";

    public static void Set_Is_Claimed_Mission_Daily(Type_Mission_Daily type_Mission_Daily, bool is_Complete)
    {
        UtilGame.SetDataBool(KEY_Is_Claimed_Mission_Daily + type_Mission_Daily.ToString(), is_Complete);
    }

    public static bool Get_Is_Claimed_Mission_Daily(Type_Mission_Daily type_Mission_Daily)
    {
        return UtilGame.GetDataBool(KEY_Is_Claimed_Mission_Daily + type_Mission_Daily.ToString(), false);
    }

    #endregion

    #region ------------ Progress Mission Daily ------------

    private const string KEY_Progress_Mission_Daily = "KEY_Progress_Mission_Daily_";

    public static void Increase_Progress_Mission_Daily(Type_Mission_Daily type_Mission_Daily)
    {
        Set_Progress_Mission_Daily(type_Mission_Daily, Get_Progress_Mission_Daily(type_Mission_Daily) + 1);
    }

    public static void Set_Progress_Mission_Daily(Type_Mission_Daily type_Mission_Daily, int progress)
    {
        UtilGame.SetDataInt(KEY_Progress_Mission_Daily + type_Mission_Daily.ToString(), progress);
    }

    public static int Get_Progress_Mission_Daily(Type_Mission_Daily type_Mission_Daily)
    {
        return UtilGame.GetDataInt(KEY_Progress_Mission_Daily + type_Mission_Daily.ToString(), 0);
    }

    #endregion

    #region ------------ Type Character Mission Daily ------------

    private const string KEY_Type_Character_Mission_Daily = "KEY_Type_Character_Mission_Daily";

    public static void Set_Type_Character_Mission_Daily(Type_Character type_Character)
    {
        UtilGame.SetDataInt(KEY_Type_Character_Mission_Daily, (int)type_Character);
    }

    public static Type_Character Get_Type_Character_Mission_Daily()
    {
        if (!UtilGame.isHashkeyData(KEY_Type_Character_Mission_Daily))
        {
            Set_Type_Character_Mission_Daily(Get_Random_Skin_Bought());
        }

        return (Type_Character)UtilGame.GetDataInt(KEY_Type_Character_Mission_Daily, (int)Get_Random_Skin_Bought());
    }

    #endregion

    #region ------------ KEY_Sum_Day_Played ------------

    private const string KEY_Sum_Day_Played = "KEY_Sum_Day_Played";

    public static void Increase_Sum_Day_Played()
    {
        Set_Sum_Day_Played(Get_Sum_Day_Played() + 1);
    }

    public static void Set_Sum_Day_Played(int sum_Day)
    {
        UtilGame.SetDataInt(KEY_Sum_Day_Played, sum_Day);
    }

    public static int Get_Sum_Day_Played()
    {
        return UtilGame.GetDataInt(KEY_Sum_Day_Played, 0);
    }

    #endregion

    //#region ------------ KEY_Reset_Data_Daily_Quest ------------

    //private const string KEY_Reset_Data_Daily_Quest = "KEY_Reset_Data_Daily_Quest";

    //public static void Set_Reset_Data_Daily_Quest(bool is_Reset)
    //{
    //    UtilGame.SetDataBool(KEY_Reset_Data_Daily_Quest, is_Reset);
    //}

    //public static bool Get_Reset_Data_Daily_Quest()
    //{
    //    return UtilGame.GetDataBool(KEY_Reset_Data_Daily_Quest, false);
    //}

    //#endregion

    #region ------------ Is_Same_Character_Quest_Daily------------

    private const string KEY_Is_Same_Character_Quest_Daily = "KEY_Is_Same_Character_Quest_Daily";

    public static void Set_Is_Same_Character_Quest_Daily(bool is_Complete)
    {
        UtilGame.SetDataBool(KEY_Is_Same_Character_Quest_Daily, is_Complete);
    }

    public static bool Get_Is_Same_Character_Quest_Daily()
    {
        return UtilGame.GetDataBool(KEY_Is_Same_Character_Quest_Daily, false);
    }

    #endregion

    #region ------------ Count Using Fix Door Now ------------

    private const string KEY_Count_Using_Fix_Door_Now = "KEY_Count_Using_Fix_Door_Now";

    public static void Increase_Count_Using_Fix_Door_Now()
    {
        Set_Count_Using_Fix_Door_Now(Get_Count_Using_Fix_Door_Now() + 1);
    }

    public static void Set_Count_Using_Fix_Door_Now(int progress)
    {
        UtilGame.SetDataInt(KEY_Count_Using_Fix_Door_Now, progress);
    }

    public static int Get_Count_Using_Fix_Door_Now()
    {
        return UtilGame.GetDataInt(KEY_Count_Using_Fix_Door_Now, 0);
    }

    #endregion

    #region ------------- Is_New_Day -------------

    private const string KEY_Is_New_Day = "KEY_Is_New_Day";

    public static void Set_Is_New_Day(bool is_New_Day)
    {
        UtilGame.SetDataBool(KEY_Is_New_Day, is_New_Day);
    }

    public static bool Get_Is_New_Day()
    {
        return UtilGame.GetDataBool(KEY_Is_New_Day, true);
    }

    #endregion

    #region // __________ Last_Date_Played __________ //--------datetime

    private const string KEY_Last_Date_Played = "KEY_Last_Date_Played";

    public static void Set_Last_Date_Played(DateTime dateTime)
    {
        UtilGame.SetDataInt(KEY_Last_Date_Played, dateTime.Get_TimeStamp_Not_Second());
    }

    public static DateTime Get_Last_Date_Played()
    {
        return UtilGame.GetDataInt(KEY_Last_Date_Played, DateTime.Today.Get_TimeStamp_Not_Second()).TimeStamp_To_Date();
    }

    #endregion

    #endregion

    #region =============== MODE CHALLENGE ======================

    #region // ================================= KEY_Type_Mode_Gameplay_Playing ================================== //

    private const string KEY_Type_Mode_Gameplay_Playing = "KEY_Type_Mode_Gameplay_Playing";

    public static void Set_Type_Mode_Gameplay_Playing(Type_Mode_Gameplay type_Mode)
    {
        UtilGame.SetDataInt(KEY_Type_Mode_Gameplay_Playing, (int)type_Mode);
    }

    public static Type_Mode_Gameplay Get_Type_Mode_Gameplay_Playing()
    {
        return (Type_Mode_Gameplay)UtilGame.GetDataInt(KEY_Type_Mode_Gameplay_Playing, (int)Type_Mode_Gameplay.Story);
    }

    #endregion


    #region // ================================= Level Complete MODE CHALLENGE ================================== //

    private const string KEY_LEVEL_COMPLETE_MODE_CHALLENGE = "KEY_LEVEL_COMPLETE_MODE_CHALLENGE_";

    public static void Set_Level_Complete_Mode_Challenge(int level)
    {
        UtilGame.SetBool(KEY_LEVEL_COMPLETE_MODE_CHALLENGE + level, true);
        Set_Max_Level_Unlocked_Mode_Challenge(level + 1);
    }

    public static bool Get_Level_Complete_Mode_Challenge(int level)
    {
        return UtilGame.GetBool(KEY_LEVEL_COMPLETE_MODE_CHALLENGE + level, false);
    }

    #endregion

    #region // ================================= Level Loading ================================== //

    private const string KEY_CURRENT_LOADING_LEVEL_Mode_Challenge = "Current_loading_level_Mode_Challenge";

    public static void Set_Current_Loading_Level_Mode_Challenge(int levelIndex)
    {
        if (levelIndex >= RootManager.Instance.Get_Total_Level_Challenge())
        {
            levelIndex = RootManager.Instance.Get_Total_Level_Challenge() - 1;
        }

        UtilGame.SetInt(KEY_CURRENT_LOADING_LEVEL_Mode_Challenge, levelIndex);
    }

    public static int Get_Current_Loading_Level_Mode_Challenge()
    {
        return UtilGame.GetInt(KEY_CURRENT_LOADING_LEVEL_Mode_Challenge, 0);
    }

    #endregion

    #region // ================================= Max Level unlocked index ================================== //

    private const string KEY_MAX_LEVEL_UNLOCKED_Mode_Challenge = "Max_level_unlocked_Mode_Challenge";

    public static void Set_Max_Level_Unlocked_Mode_Challenge(int levelIndex)
    {
        if (levelIndex > Get_Max_Level_Unlocked_Index_Mode_Challenge())
        {
            if (RootManager.Instance && levelIndex >= RootManager.Instance.Get_Total_Level_Challenge())
            {
                levelIndex = RootManager.Instance.Get_Total_Level_Challenge();
            }

            UtilGame.SetInt(KEY_MAX_LEVEL_UNLOCKED_Mode_Challenge, levelIndex);
        }
    }

    public static int Get_Max_Level_Unlocked_Index_Mode_Challenge()
    {
        int output = UtilGame.GetInt(KEY_MAX_LEVEL_UNLOCKED_Mode_Challenge, 0);
        if (RootManager.Instance && output >= RootManager.Instance.Get_Total_Level_Challenge())
        {
            output = RootManager.Instance.Get_Total_Level_Challenge() - 1;
        }

        return output;
    }

    #endregion

    #endregion

    #region // ================================= Is First Time Collect Reward ================================== //

    private const string KEY_Is_First_Time_Collect_Reward = "KEY_Is_First_Time_Collect_Reward_";

    public static void Set_Is_First_Time_Collect_Reward(Type_Mode_Gameplay type_Mode_Gameplay, int level,
        bool isComplete)
    {
        UtilGame.SetBool(KEY_Is_First_Time_Collect_Reward + type_Mode_Gameplay.ToString() + "_" + level, isComplete);
    }

    public static bool Get_Is_First_Time_Collect_Reward(Type_Mode_Gameplay type_Mode_Gameplay, int level)
    {
        return UtilGame.GetBool(KEY_Is_First_Time_Collect_Reward + type_Mode_Gameplay.ToString() + "_" + level, false);
    }

    #endregion

    #region // ================================= Is Win Game ================================== //

    private const string KEY_Is_Win_Game = "KEY_Is_Win_Game";

    public static void Set_Is_Win_Game(bool isComplete)
    {
        UtilGame.SetBool(KEY_Is_Win_Game, isComplete);
    }

    public static bool Get_Is_Win_Game()
    {
        return UtilGame.GetBool(KEY_Is_Win_Game, false);
    }

    #endregion

    #region // ================================= Count Item Shop Turret ================================== //

    private const string KEY_Sum_Item_Shop_Turret = "KEY_Sum_Item_Shop_Turret_";

    public static void Increase_Sum_Item_Shop_Turret(Type_Turret type_Turret, int delta = 1)
    {
        Set_Sum_Item_Shop_Turret(type_Turret, Get_Sum_Item_Shop_Turret(type_Turret) + delta);
    }

    public static void Decrease_Sum_Item_Shop_Turret(Type_Turret type_Turret, int delta = 1)
    {
        Set_Sum_Item_Shop_Turret(type_Turret, Get_Sum_Item_Shop_Turret(type_Turret) - delta);
    }

    public static void Set_Sum_Item_Shop_Turret(Type_Turret type_Turret, int sum)
    {
        UtilGame.SetDataInt(KEY_Sum_Item_Shop_Turret + type_Turret.ToString(), sum);
    }

    public static int Get_Sum_Item_Shop_Turret(Type_Turret type_Turret)
    {
        return UtilGame.GetDataInt(KEY_Sum_Item_Shop_Turret + type_Turret.ToString(), 0);
    }

    #endregion

    #region // __________ Level Night Story Quest __________ //

    private const string KEY_Level_Night_Story_Quest = "KEY_Level_Night_Story_Quest";

    public static void Inscrease_Level_Night_Story_Quest()
    {
        Set_Level_Night_Story_Quest(Get_Level_Night_Story_Quest() + 1);
    }

    public static void Set_Level_Night_Story_Quest(int index)
    {
        UtilGame.SetDataInt(KEY_Level_Night_Story_Quest, index);
    }

    public static int Get_Level_Night_Story_Quest()
    {
        return UtilGame.GetDataInt(KEY_Level_Night_Story_Quest, DataSaved.Get_Max_Level_Unlocked_Index());
    }

    #endregion

    #region // __________ Sum Player Mode Challenge __________ //

    private const string KEY_Sum_Player_Mode_Challenge = "KEY_Sum_Player_Mode_Challenge";

    public static void Inscrease_Sum_Player_Mode_Challenge(int delta)
    {
        Set_Sum_Player_Mode_Challenge(Get_Sum_Player_Mode_Challenge() + delta);
    }

    public static void Set_Sum_Player_Mode_Challenge(int index)
    {
        UtilGame.SetDataInt(KEY_Sum_Player_Mode_Challenge, index);
    }

    public static int Get_Sum_Player_Mode_Challenge()
    {
        return UtilGame.GetDataInt(KEY_Sum_Player_Mode_Challenge, 0);
    }

    #endregion

    #region // __________ Type_Character_Playing __________ //

    private const string KEY_Type_Character_Playing = "KEY_Type_Character_Playing_";

    public static void Set_Type_Character_Playing(Type_Player type_Player, Type_Character type_Character,
        bool using_Skin_2)
    {
        Debug.Log("=====> Set_Type_Character_Playing : type_Player = " + type_Player + " | type_Character = " +
                  type_Character + " | using_Skin_2 = " + using_Skin_2);
        UtilGame.SetDataInt(KEY_Type_Character_Playing + type_Player.ToString(), (int)type_Character);
    }

    public static Type_Character Get_Type_Character_Playing(Type_Player type_Player)
    {
        return (Type_Character)UtilGame.GetDataInt(KEY_Type_Character_Playing + type_Player.ToString(),
            (int)Type_Character.Student);
    }

    #endregion

    #region // __________ KEY_Is_Show_Popup_Try_Skin __________ //

    private const string KEY_Is_Show_Popup_Try_Skin = "KEY_Is_Show_Popup_Try_Skin_";

    public static void Set_Is_Show_Popup_Try_Skin(Type_Character type_Character, bool is_Show)
    {
        UtilGame.SetDataBool(KEY_Is_Show_Popup_Try_Skin + type_Character, is_Show);
    }

    public static bool Get_Is_Show_Popup_Try_Skin(Type_Character type_Character)
    {
        return UtilGame.GetDataBool(KEY_Is_Show_Popup_Try_Skin + type_Character, true);
    }

    #endregion

    #region // __________ KEY_Is_Show_Popup_Try_Skin_Character __________ //

    private const string KEY_Is_Show_Popup_Try_Skin_Character = "KEY_Is_Show_Popup_Try_Skin_Character_";

    public static void Set_Is_Show_Popup_Try_Skin_Character(Type_Character type_Character, bool is_Show)
    {
        UtilGame.SetDataBool(KEY_Is_Show_Popup_Try_Skin_Character + type_Character, is_Show);
    }

    public static bool Get_Is_Show_Popup_Try_Skin_Character(Type_Character type_Character)
    {
        return UtilGame.GetDataBool(KEY_Is_Show_Popup_Try_Skin_Character + type_Character, true);
    }

    #endregion

    #region // __________ KEY_Is_Show_Popup_Character_Pack __________ //

    private const string KEY_Is_Show_Popup_Character_Pack = "KEY_Is_Show_Popup_Character_Pack";

    public static void Set_Is_Show_Popup_Character_Pack(bool is_Show)
    {
        UtilGame.SetDataBool(KEY_Is_Show_Popup_Character_Pack, is_Show);
        // show khi win- lose- ve man home tu pause 
    }

    public static bool Get_Is_Show_Popup_Character_Pack()
    {
        return UtilGame.GetDataBool(KEY_Is_Show_Popup_Character_Pack, false);
    }

    #endregion

    #region // __________ Is_Show_Character_Pack __________ //

    private const string KEY_Is_Show_Character_Pack = "KEY_Is_Show_Character_Pack";

    public static void Set_Is_Show_Character_Pack(bool is_Show)
    {
        UtilGame.SetDataBool(KEY_Is_Show_Character_Pack, is_Show);
    }

    public static bool Get_Is_Show_Character_Pack()
    {
        return UtilGame.GetDataBool(KEY_Is_Show_Character_Pack, false);
    }

    #endregion


    #region ============== On_Start_Root_Manager ============

    private const string Key_On_Start_Root_Manager = "Key_On_Start_Root_Manager";

    public static void Set_On_Start_Root_Manager(bool is_Active)
    {
        UtilGame.SetDataBool(Key_On_Start_Root_Manager, is_Active);
    }

    public static bool Get_On_Start_Root_Manager()
    {
        return UtilGame.GetDataBool(Key_On_Start_Root_Manager, false);
    }

    #endregion

    #region ============== AB_Test ============

    private const string Key_AB_IAP_Character_Pack = "Key_AB_IAP_Character_Pack";

    public static void Set_AB_IAP_Character_Pack(bool is_Active)
    {
        UtilGame.SetDataBool(Key_AB_IAP_Character_Pack, is_Active);
    }

    public static bool Get_AB_IAP_Character_Pack()
    {
        return UtilGame.GetDataBool(Key_AB_IAP_Character_Pack, false);
    }

    #endregion

    #region // __________ Key_Type_Map_Mode_Playing __________ //

    private const string Key_Type_Map_Mode_Playing = "Key_Type_Map_Mode_Playing";

    public static void Set_Type_Map_Mode_Playing(Type_Map_Mode type_Map_Mode)
    {
        UtilGame.SetDataInt(Key_Type_Map_Mode_Playing, (int)type_Map_Mode);
    }

    public static Type_Map_Mode Get_Type_Map_Mode_Playing()
    {
        return (Type_Map_Mode)UtilGame.GetDataInt(Key_Type_Map_Mode_Playing, (int)Type_Map_Mode.Default);
    }

    #endregion


    #region // __________ KEY_Is_Show_Lv_SKin __________ //

    private const string KEY_Is_Show_Lv_Rank_SKin = "KEY_Is_Show_Lv_Rank_SKin";

    public static void Increase_Lv_SKin_Character(int value, Type_Character type_Character, bool isNotify = true)
    {
        if (value <= 0)
        {
            return;
        }

        int sum = Get_Is_Show_Lv_Rank_SKin(type_Character);
        sum = sum + value;
        Set_Is_Show_Lv_Rank_SKin(type_Character, sum, isNotify);
        //Set_Card_Character_Total(sum, type_Character);
        if (isNotify)
        {
            if (Instance != null)
            {
                Instance.Notify_Data_Level_Rank_SKin();
            }
        }
    }

    public static void Set_Is_Show_Lv_Rank_SKin(Type_Character type_Character, int is_Show, bool isNotify = true)
    {
        UtilGame.SetDataInt(KEY_Is_Show_Lv_Rank_SKin + type_Character, is_Show);
    }

    public static int Get_Is_Show_Lv_Rank_SKin(Type_Character type_Character)
    {
        return UtilGame.GetDataInt(KEY_Is_Show_Lv_Rank_SKin + type_Character, 0);
    }

    #endregion


    #region __________ KEY_Is_Show_Star_Lv_SKin __________


    public static void Increase_Star_SKin_Character(int value, Type_Character type_Character, bool isNotify = true)
    {
        if (value <= 0)
        {
            return;
        }

        int sum = Get_Is_Show_Star_Lv_SKin(type_Character);
        sum = sum + value;
        Set_Is_Show_Star_Lv_SKin(type_Character, sum, isNotify);
        //Set_Card_Character_Total(sum, type_Character);
        if (isNotify)
        {
            if (Instance != null)
            {
                Instance.Notify_Data_Level_Rank_SKin();
            }
        }
    }

    private const string KEY_Is_Show_Star_Lv_SKin = "KEY_Is_Show_Star_Lv_SKin";

    public static void Set_Is_Show_Star_Lv_SKin(Type_Character type_Character, int is_Show, bool isNotify = true)
    {
        UtilGame.SetDataInt(KEY_Is_Show_Star_Lv_SKin + type_Character, is_Show);
    }

    public static int Get_Is_Show_Star_Lv_SKin(Type_Character type_Character)
    {
        return UtilGame.GetDataInt(KEY_Is_Show_Star_Lv_SKin + type_Character, 1);
    }

    #endregion


    #region CARD currency unit

    private const string key_Card_Character = "key_Card";


    public static void Increase_Card_Character(int value, Type_Character type_Character, bool isNotify = true)
    {
        if (value <= 0)
        {
            return;
        }

        int sum = Get_Sum_Card_Character(type_Character);
        sum = sum + value;
        Set_Card_Character(sum, type_Character, isNotify);
        Set_Card_Character_Total(sum, type_Character);
        if (isNotify)
        {
            if (Instance != null)
            {
                Instance.Notify_Data_Card_Character_In_Game_Change();
            }
        }
    }

    public static void Decrease_Card_Character(int value, Type_Character type_Character, bool isNotify = true)
    {
        int sum = Get_Sum_Card_Character(type_Character);
        sum -= value;
        if (sum < 0)
        {
            sum = 0;
        }

        Set_Card_Character(sum, type_Character);
        if (Instance != null && isNotify)
        {
            Instance.Notify_Data_Card_Character_In_Game_Change();
        }
    }

    public static void Set_Card_Character(int value, Type_Character type_Character, bool isNotify = true)
    {
        UtilGame.SetDataInt(key_Card_Character + type_Character, value);
        if (Instance != null && isNotify)
        {
            Instance.Notify_Data_Card_Character_In_Game_Change();
        }
    }

    public static int Get_Sum_Card_Character(Type_Character type_Character)
    {
        return UtilGame.GetDataInt(key_Card_Character + type_Character, 0);
    }




    private const string key_Card_Character_Total = "key_Card_Character_Total";

    public static void Set_Card_Character_Total(int value, Type_Character type_Character, bool isNotify = true)
    {
        UtilGame.SetDataInt(key_Card_Character_Total + type_Character, value);

    }

    public static int Get_Sum_Card_Character_Total(Type_Character type_Character)
    {
        return UtilGame.GetDataInt(key_Card_Character_Total + type_Character, 0);
    }



    #endregion

    #region KEY_Chest_Currency_Unit

    private const string KEY_Chest_Currency_Unit = "KEY_Chest_Currency_Unit";

    public static void Set_Key_Card_Character(Type_Key_Chest_Rank typeKeyChestRank, int value)
    {
        UtilGame.SetDataInt(KEY_Chest_Currency_Unit + typeKeyChestRank, value);
    }

    public static int Get_Sum_Key_Card_Character(Type_Key_Chest_Rank typeKeyChestRank)
    {
        return UtilGame.GetDataInt(KEY_Chest_Currency_Unit + typeKeyChestRank, 0);
    }

    public static void Decrease_Sum_Key_Card_Character(Type_Key_Chest_Rank type_Item_Support, int value = 1)
    {
        int aaa = Get_Sum_Key_Card_Character(type_Item_Support);
        aaa -= value;
        if (aaa < 0) aaa = 0;
        Set_Key_Card_Character(type_Item_Support, aaa);
    }

    public static void Increase_Sum_Key_Card_Character(Type_Key_Chest_Rank type_Item_Support, int value = 1)
    {
        Set_Key_Card_Character(type_Item_Support, Get_Sum_Key_Card_Character(type_Item_Support) + value);
    }

    #endregion







    #region // ================================= Is_Bought_Key_Bundles_1.49================================== //

    private const string KEY_Is_Bought_Promotion_Root = "KEY_Is_Bought_Promotion_Root";

    public static void Set_Is_Bought_Promotion_Root(Type_Pack Pack_Sale_Promotion, bool is_Bought)
    {
        UtilGame.SetBool(KEY_Is_Bought_Promotion_Root + Pack_Sale_Promotion, is_Bought);
    }

    public static bool Get_Is_Bought_Promotion_Root(Type_Pack Pack_Sale_Promotion)
    {
        return UtilGame.GetBool(KEY_Is_Bought_Promotion_Root + Pack_Sale_Promotion, false);
    }

    #endregion


    #region // ================================= Pack_Promotion_6_Hours================================== //

    private const string KEY_Pack_Promotion_6_Hours = "KEY_Pack_Promotion_6_Hours";

    public static void Set_Is_Bought_Promotion_Root_2(int is_Bought)
    {

        UtilGame.SetInt(KEY_Pack_Promotion_6_Hours, is_Bought);

    }

    public static int Get_Is_Bought_Promotion_Root_2()
    {
        return UtilGame.GetDataInt(KEY_Pack_Promotion_6_Hours, -1);
    }

    #endregion


    #region // ================================= Pack_Promotion_6_Hours================================== //

    private const string KEY_Pack_Promotion_Starter = "KEY_Pack_Promotion_Starter";

    public static void Set_Is_Bought_Promotion_Root_Promotion_Starter(int is_Bought)
    {

        UtilGame.SetDataInt(KEY_Pack_Promotion_Starter, is_Bought);

    }

    public static int Get_Is_Bought_Promotion_Root_Promotion_Starter()
    {
        return UtilGame.GetDataInt(KEY_Pack_Promotion_Starter, -1);
    }

    #endregion

    #region // ================================= check_Full_6_Hours================================== //

    private const string KEY_Is_Full_6_Hours = "KEY_Is_Full_6_Hours";

    public static void Set_Is_Full_6_Hours(bool is_Bought)
    {
        UtilGame.SetBool(KEY_Is_Full_6_Hours, is_Bought);
    }

    public static bool Get_Is_Full_6_Hours()
    {
        return UtilGame.GetBool(KEY_Is_Full_6_Hours, false);
    }

    #endregion


    #region ============== typepack 499 ============

    private const string Key_Type_pack_Key_Bunddle_499 = "Key_Type_pack_Key_Bunddle_499";

    public static void Set_Key_Type_pack_Key_Bunddle_499(bool is_Active)
    {
        UtilGame.SetDataBool(Key_Type_pack_Key_Bunddle_499, is_Active);
    }

    public static bool Get_Key_Type_pack_Key_Bunddle_499()
    {
        return UtilGame.GetDataBool(Key_Type_pack_Key_Bunddle_499, false);
    }

    #endregion


    #region ============== typepack Appear ============--------datetime

    private const string Key_Pack_Iap_Appears = "Key_Pack_Iap_Appears";

    public static void Set_Key_Pack_Iap_Appears(Type_Pack typePack, DateTime dateTime)
    {
        UtilGame.SetDataInt(KEY_Last_Time_Claim_Pack_Sale + typePack, dateTime.Get_TimeStamp());
    }

    public static DateTime Get_Key_Pack_Iap_Appears(Type_Pack typePack)
    {
        return UtilGame.GetDataInt(Key_Pack_Iap_Appears + typePack, DateTime.Now.Get_TimeStamp()).TimeStamp_To_Date();
    }

    #endregion


    #region ==============  typepack has Appear ============

    private const string Key_Pack_Iap_Has_Appears = "Key_Pack_Iap_Has_Appears";

    public static void Set_Key_Pack_Iap_Has_Appears(Type_Pack typePack, bool is_Active)
    {
        UtilGame.SetBool(Key_Pack_Iap_Has_Appears + typePack, is_Active);
    }

    public static bool Get_Key_Pack_Iap_Has_Appears(Type_Pack typePack)
    {
        return UtilGame.GetBool(Key_Pack_Iap_Has_Appears + typePack, false);
    }

    #endregion

    #region ==============  typepack Flag Promotion 2 Appear ============

    private const string Key_TypePack_Flag_Promtion_2_Appears = "Key_TypePack_Flag_Promtion_2_Appears";

    public static void Set_Key_TypePack_Flag_Promtion_2_Appears(bool is_Active)
    {
        UtilGame.SetBool(Key_TypePack_Flag_Promtion_2_Appears, is_Active);
    }

    public static bool Get_Key_TypePack_Flag_Promtion_2_Appears()
    {
        return UtilGame.GetBool(Key_TypePack_Flag_Promtion_2_Appears, false);
    }

    #endregion


    #region ==============  Newtypepack Flag Promotion 2 Appear ============

    private const string Key_New_TypePack_Appears = "Key_New_TypePack_Appears";

    public static void Set_Key_New_TypePack_Appears(bool is_Active)
    {
        UtilGame.SetBool(Key_New_TypePack_Appears, is_Active);
    }

    public static bool Get_Key_New_TypePack_Appears()
    {
        return UtilGame.GetBool(Key_New_TypePack_Appears, false);
    }

    #endregion


    #region // __________ Last Time Claim Pack Sale 2  __________ //---------datetime

    private const string KEY_Last_Time_Claim_Pack_Sale_2 = "KEY_Last_Time_Claim_Pack_Sale_2";

    public static void Set_KEY_Last_Time_Claim_Pack_Sale_2(DateTime dateTime)
    {
        UtilGame.SetDataInt(KEY_Last_Time_Claim_Pack_Sale_2, dateTime.Get_TimeStamp());

    }

    public static DateTime Get_KEY_Last_Time_Claim_Pack_Sale_2()
    {
        return UtilGame.GetDataInt(KEY_Last_Time_Claim_Pack_Sale_2, DateTime.Now.Get_TimeStamp()).TimeStamp_To_Date();
    }

    #endregion

    #region Data_Common_Chest_Remaining

    private const string KEY_Data_Common_Chest_Remaining = "KEY_Data_Common_Chest_Remaining";

    public static void Set_Data_Common_Chest_Remaining(int is_Bought)
    {
        UtilGame.SetDataInt(KEY_Data_Common_Chest_Remaining, is_Bought);
    }

    public static int Get_Data_Common_Chest_Remaining()
    {
        return UtilGame.GetDataInt(KEY_Data_Common_Chest_Remaining, 3);
    }

    public static void Decrease_Data_Common_Chest_Remaining(int delta = 1)
    {
        int sum = Get_Data_Common_Chest_Remaining() - delta;
        if (sum < 0)
        {
            sum = 0;
        }

        Set_Data_Common_Chest_Remaining(sum);
        if (Instance)
        {
            Instance.Notify_Data_Common_Chest_Remainning();
        }
    }

    #endregion

    #region Data_Id_Gem_Unlock

    private const string KEY_Data_Id_Gem_Unlock = "KEY_Data_Id_Gem_Unlock";

    public static void Set_Data_Id_Gem_Unlock(int is_Bought)
    {
        UtilGame.SetDataInt(KEY_Data_Id_Gem_Unlock, is_Bought);
    }

    public static int Get_Data_Id_Gem_Unlock()
    {
        return UtilGame.GetDataInt(KEY_Data_Id_Gem_Unlock
            , 0);
    }


    private const string KEY_Data_Id_Tree_Unlock = "KEY_Data_Id_Tree_Unlock";


    public static void Set_Data_Id_Tree_Unlock(int is_Bought)
    {
        UtilGame.SetDataInt(KEY_Data_Id_Tree_Unlock, is_Bought);
    }

    public static int Get_Data_Id_Tree_Unlock()
    {
        return UtilGame.GetDataInt(KEY_Data_Id_Tree_Unlock, 0);
    }

    #endregion


    #region ============== Key_Is_Try_Skin ============

    private const string Key_Is_Try_Skin = "Key_Is_Try_Skin";

    public static void Set_Key_Is_Try_Skin(bool is_Active)
    {
        UtilGame.SetBool(Key_Is_Try_Skin, is_Active);
    }

    public static bool Get_Key_Is_Try_Skin()
    {
        return UtilGame.GetBool(Key_Is_Try_Skin, false);
    }


    // bool
    private const string Key_Get_Is_Show_Time = "Key_Get_Is_Show_Time";
    public static void Set_Is_Show_Time(bool is_Done)
    {
        UtilGame.SetDataBool(Key_Get_Is_Show_Time, is_Done);

    }

    public static bool Get_Is_Show_Time()
    {
        return UtilGame.GetDataBool(Key_Get_Is_Show_Time, false);
    }
    #endregion


    #region MyRegion




    private const string Key_Get_Is_First_Pack = "Key_Get_Is_First_Pack";
    public static void Set_Is_First_Pack(bool is_Done)
    {
        UtilGame.SetDataBool(Key_Get_Is_First_Pack, is_Done);

    }

    public static bool Get_Is_First_Pack()
    {
        return UtilGame.GetDataBool(Key_Get_Is_First_Pack, false);
    }
    #endregion

    // dong ngay 21/3
    // #region Dame -hp 
    //
    //
    //
    //
    // private const string Key_Get_Dame_Total= "Key_Get_Dame_Total";
    // public static void Set_Dame_Total(float is_Done)
    // {
    //     UtilGame.SetDataFloat(Key_Get_Dame_Total, is_Done);
    //   
    // }
    //
    // public static float Get_Dame_Total()
    // {
    //     return UtilGame.GetDataFloat(Key_Get_Dame_Total, 0f);
    // }
    //
    //
    //
    // private const string Key_Get_Hp_Total= "Key_Get_Hp_Total";
    // public static void Set_Hp_Total(float is_Done)
    // {
    //     UtilGame.SetDataFloat(Key_Get_Hp_Total, is_Done);
    //   
    // }
    //
    // public static float Get_Hp_Total()
    // {
    //     return UtilGame.GetDataFloat(Key_Get_Hp_Total, 0f);
    // }
    //
    // #endregion



    #region  //condition show tut




    private const string Key_Condition_Show_Tut_Chest = "Key_Condition_Show_Tut_Chest";
    public static void Set_Condition_Show_Tut_Chest(int is_Done)
    {

        if (Get_Condition_Show_Tut_Chest() == 1)
        {
            UtilGame.SetDataInt(Key_Condition_Show_Tut_Chest, 2);
        }
        else
        {
            UtilGame.SetDataInt(Key_Condition_Show_Tut_Chest, is_Done);
        }


    }

    public static int Get_Condition_Show_Tut_Chest()
    {
        return UtilGame.GetDataInt(Key_Condition_Show_Tut_Chest, 0);
    }

    #endregion




    #region Key_Complete_Show_Tut_Chest




    private const string Key_Complete_Show_Tut_Chest = "Key_Complete_Show_Tut_Chest";
    public static void Set_Complete_Show_Tut_Chest(bool is_Done)
    {
        UtilGame.SetDataBool(Key_Complete_Show_Tut_Chest, is_Done);

    }

    public static bool Get_Complete_Show_Tut_Chest()
    {
        return UtilGame.GetDataBool(Key_Complete_Show_Tut_Chest, false);
    }

    #endregion




    private const string Key_Flag_Tut_Complete_Show_Tut_Chest = "Key_Flag_Tut_Complete_Show_Tut_Chest";
    public static void Set_Flag_Tut_Complete_Show_Tut_Chest(bool is_Done)
    {
        UtilGame.SetDataBool(Key_Flag_Tut_Complete_Show_Tut_Chest, is_Done);

    }

    public static bool Get_Flag_Tut_Complete_Show_Tut_Chest()
    {
        return UtilGame.GetDataBool(Key_Flag_Tut_Complete_Show_Tut_Chest, false);
    }




    #region first


    public static bool IsFirstOpen()
    {
        return PlayerPrefs.GetInt("FirstOpen", 1) == 1; // mặc định 1 = lần đầu
    }

    public static void SetNotFirstOpen()
    {
        PlayerPrefs.SetInt("FirstOpen", 0);
        PlayerPrefs.Save();
    }
    #endregion




}

