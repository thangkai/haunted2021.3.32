using System;
using System.Collections.Generic;

using System.Linq;

using UnityEngine;
using Xekotoby;

using XekotobyNew;


public class Database : MonoBehaviour
{
    public static Database instance;

    public GameData database;

   // string filePath;

    [SerializeField]
    private List<SkillUnlockData> skillUnlockList = new List<SkillUnlockData>(); // Chỉ dùng để hiển thị trên Inspector

    void Awake()
    {
        if (instance == null)
        {
            instance = this;
            //            DontDestroyOnLoad(gameObject); // Đảm bảo đối tượng không bị hủy khi chuyển scene
        }
        else
        {
            Destroy(gameObject); // Nếu đã có instance, hủy đối tượng này
        }


       // filePath = Application.persistentDataPath + "/GameData.json";

        ReadData();

    }

    #region read-save_data

    public void SaveData()
    {
        if (database != null)
        {
          //  string json = JsonUtility.ToJson(database);
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(database);
            // Mã hóa nếu muốn
            // string json = JsonUtility.ToJson(database);
            // PlayerPrefs.SetString(UtilGame.KEY_DATABASE, json);

            // Lưu vào PlayerPrefs
            PlayerPrefs.SetString(UtilGame.KEY_DATABASE, json);
            PlayerPrefs.Save();

            Debug.Log("Save data (PlayerPrefs only)");
        }
    }








    public void ReadData()
    {
        try
        {
            if (PlayerPrefs.HasKey(UtilGame.KEY_DATABASE))
            {
                string json = PlayerPrefs.GetString(UtilGame.KEY_DATABASE);

                if (string.IsNullOrEmpty(json))
                {
                    Debug.LogWarning("Data key found but JSON is empty. Creating new GameData...");
                    database = new GameData();
                    SaveData();
                }
                else
                {
                    database = Newtonsoft.Json.JsonConvert.DeserializeObject<GameData>(json);

                    if (database == null)
                    {
                        Debug.LogWarning("Data is corrupted. Creating new GameData...");
                        PlayerPrefs.DeleteKey(UtilGame.KEY_DATABASE);
                        database = new GameData();
                        SaveData();
                    }
                }
            }
            else
            {
                Debug.LogWarning("No saved data found. Creating new GameData...");
                database = new GameData();
                SaveData();
            }
        }
        catch (Exception e)
        {
            Debug.LogWarning("Failed to load data: " + e.Message);
            PlayerPrefs.DeleteKey(UtilGame.KEY_DATABASE);
            database = new GameData();
            SaveData();
        }
    }

    #endregion

    #region Notify

    public Bool_Global_Variable m_Live_Data_XP_Change;

    public void Notify_Data_XP_Change()
    {
        if (m_Live_Data_XP_Change != null)
        {
            m_Live_Data_XP_Change.Value = true;
            SetXpRewardInGame(0);
            SaveData();
        }
    }

    #endregion


    #region  packSALEsHOPsALE





    #endregion
   

    #region checkUnlockIcon

    public void SetUnlockIcon(int index)
    {
        database.checkUnlockIcon[index] = true;
        SaveData();
    }



    public bool GetUnlockIconUnlock(int index)
    {
        return database.checkUnlockIcon[index];
    }

    public void SetUnlockIconCur(int index)
    {
        database.curUnlockIcon = index;
        SaveData();
    }

    #endregion

    #region checkUnlock titile

    public void SetUnlockTitle(int index)
    {
        database.checkUnlockTitle[index] = true;
        SaveData();
    }




    public void SetStatusWinLose(Status_Win_Lose status_Win_Lose)
    {
        database.statusWinLoseTitle = status_Win_Lose;
        SaveData();
    }

    public Status_Win_Lose GetStatusWinLose()
    {
        return database.statusWinLoseTitle;
    }


    public void SetDameTaken(bool status_Win_Lose)
    {
        database.isDameTaken = status_Win_Lose;
        SaveData();
    }

    public bool GetDameTaken()
    {
        return database.isDameTaken;
    }



    #endregion


 

    #region Level Loading strory

    /// <summary>
    /// load lv nao
    /// </summary>
    /// <param name="index"> gia tri level </param>
    public void Set_Current_Loading_Level_Story(int index, bool isHard)
    {
        if (isHard)
        {
            if (database.levelIndexStoryHard >= 10)
            {
                database.levelIndexStoryHard = 10;
            }

            database.levelIndexStoryHard = index;
        }
        else
        {
            if (database.levelIndexStory >= 10)
            {
                database.levelIndexStory = 10;
            }

            database.levelIndexStory = index;
        }

        SaveData();
    }




    public int Get_Current_Loading_Level_Story(bool isHard)
    {
        if (isHard) return database.levelIndexStoryHard;
        return database.levelIndexStory;
    }

    #endregion

    #region Level Unlock strory

    public void Increase_Unlock_Level_Story()
    {
        if (GetHardLevel())
        {
            database.levelUnlockStoryHard++;
            if (database.levelUnlockStoryHard >= 10)
            {
                database.levelUnlockStoryHard = 10;
            }
        }
        else
        {
            database.levelUnlockStory++;
            if (database.levelUnlockStory >= 10)
            {
                database.levelUnlockStory = 10;
            }
        }

        SaveData();
    }

    public int Get_Unlock_Level_Story(bool isHard)
    {
        if (isHard)
        {
            if (database.levelUnlockStoryHard >= 10)
            {
                return 10;
            }
            else
            {
                return database.levelUnlockStoryHard;
            }
        }
        else
        {
            if (database.levelUnlockStory >= 10)
            {
                return 10;
            }
            else
            {
                return database.levelUnlockStory;
            }
        }
    }





    public bool GetHardLevel()
    {
        return database.isHard;
    }

    public void SetHardLevel(bool isHard)
    {
        database.isHard = isHard;
        SaveData();
    }

    #endregion


    #region data_MissionComplete

    public void Select_Mission_Complete(int level, int numberMission, bool isHard)
    {
        if (isHard)
        {
            database.listLevelCompleteMissionHard[level].value[numberMission] = true;
            SetIndexStoryNext(1);
        }
        else
        {
            database.listLevelCompleteMission[level].value[numberMission] = true;
            SetIndexStoryNext(1);
        }

        //        Debug.LogError("HOAN THANH LEVEL CHUA NHIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
        SaveData();
    }







    public int CheckIndexMissionPass(int index, int value, bool isHard)
    {
        if (isHard)
        {
            for (int i = 0; i < database.listLevelCompleteMissionHard[index].mission.Count; i++)
            {
                //0 
                if (database.listLevelCompleteMissionHard[index].mission[i] == value)
                {
                    return i;
                }
            }
        }
        else
        {
            for (int i = 0; i < database.listLevelCompleteMission[index].mission.Count; i++)
            {
                if (database.listLevelCompleteMission[index].mission[i] == value)
                {
                    return i;
                }
            }
        }


        return 1;
    }






    public List<int> ListMissionPass(int index, bool isHard)
    {
        if (isHard)
        {
            return database.listLevelCompleteMissionHard[index].mission;
        }

        return database.listLevelCompleteMission[index].mission;
    }

    #endregion

    #region data_TitleComplete



    public void IncreaseKillBossKill()
    {
        database.bossKilled++;
        SaveData();
    }

    public int GetKillBossKill()
    {
        return database.bossKilled;
    }

    public void SetCharacterUnlock()
    {
        database.characterUnlock++;
        SaveData();
    }

    public int GetCharacterUnlock()
    {
        return database.characterUnlock;
    }


    public void SetBossTypeUnlock(Type_Player typePlayer)
    {
        if ((int)typePlayer < (int)Type_Player.Goblin_Melee_Normal_Boss && (int)typePlayer > (int)Type_Player.Player_8)
        {
            database.typeBoss[(int)typePlayer % 100] = true;
        }

        database.bossTypeNumber = 0;
        for (int i = 0; i < database.typeBoss.Count; i++)
        {
            if (database.typeBoss[i])
            {
                database.bossTypeNumber++;
            }
        }


        SaveData();
    }

    public int GetBossTypeUnlock()
    {
        return database.bossTypeNumber;
    }

    #endregion


    #region ComplineXp

    public void IncreaseXpUser(int number, bool isNotify = true)
    {
        if (number <= 0)
        {
            return;
        }

        int sum = GetXpToLevel(); //xp hien tai 
        //xp hien tai
        sum = sum + number;
        //100+150
        //350

        SetXp(sum, isNotify);

        if (isNotify)
        {
            if (instance != null)
            {
                instance.Notify_Data_XP_Change();
            }
        }
    }

    private void SetXp(int value, bool isNotify = true)
    {
        database.xpUser = value;
        if (instance != null && isNotify)
        {
            instance.Notify_Data_XP_Change();
        }
    }


    public int GetXpRewardInGame()
    {
        return database.xpRewardInGame;
    }

    public void SetXpRewardInGame(int reward)
    {
        database.xpRewardInGame = reward;
        SaveData();
    }

    public int ConfigXpToLevel()
    {
        //xp: can
        //0 : xp base:100
        //1   150-- fai dat xp 250--350-150-100
        //2   200-- fai dat xp 450
        //3   250-- fai dat xp 700
        //4   300-- fai dat xp 1000
        //5   350-- fai dat xp 1350
        //6   400-- fat dat xp 1750


        //   int level = (database.xpUser / 50) - 1;
        //120/50 -1  120/50


        if (database.xpUser < 100) return 0; // Chưa đủ level 1

        double a = 25, b = 125, c = -(database.xpUser - 100);
        double delta = b * b - 4 * a * c;

        if (delta < 0) return 0; // Không có nghiệm hợp lệ

        int level = (int)((-b + Math.Sqrt(delta)) / (2 * a));
        return level + 1;

        //100 cap do khonh
        // 120 level 1
    }

    //Tổng XP nâng cấp cho cấp độ n = Tổng XP nâng cấp cho cấp độ (n-1) + XP cần để lên cấp tiếp theo


    public int GetXpToLevel()
    {
        return database.xpUser;
    }


    private const int XPBASE = 100;

    public int XPLevelUpgrade(int level)
    {
        //100+ 0*50
        // int levelCanUpgrade = XPBASE + (level * 50);
        // return levelCanUpgrade;
        //100 + 1 * 50;
        //100+ 2*50


        double a = 25;
        double b = 125;
        double xp = a * level * level + b * level + 100;
        return (int)xp;
    }

    #endregion


    #region tut

    public void SetTutDoorContinue(bool tut)
    {
        database.TutDoorContinue = tut;
        SaveData();
    }

    public bool GetTutDoorContinue()
    {
        return database.TutDoorContinue;
    }

    #endregion


    ///

    #region Skill nhan vat ----- Skill 2

    //Skill 2 
    public void SetIsUnlockSkill2(Type_Character type_Character, bool is_Done)
    {
        if (type_Character == Type_Character.None) return;

        // Kiểm tra xem typeCharacter có tồn tại trong unlockCharacter không
        if (database.skill2OfCharacterUnlock.TryGetValue(type_Character, out bool currentState))
        {
            // Nếu tồn tại, in ra khóa và giá trị
            if (!currentState)
            {
                // Cập nhật giá trị
                database.skill2OfCharacterUnlock[type_Character] = is_Done;
                Debug.Log($"Nhân vật: {type_Character}, Trạng thái mở khóa cũ: {currentState}, Mới: {is_Done}");
                //  InitDic();
            }
        }
        else
        {
            // Nếu không tồn tại, thông báo không tìm thấy
            Debug.Log($"Không tìm thấy nhân vật {type_Character} trong Dictionary.");
        }
    }

    public bool GetIsUnlockSkill2(Type_Character type_Character)
    {
        if (database.skill2OfCharacterUnlock.TryGetValue(type_Character, out bool isUnlocked))
        {
            return isUnlocked;
        }

        Debug.Log($"Không tìm thấy nhân vật {type_Character} trong Dictionary.");
        return false;
    }

    #endregion


    #region // Skill nhan vat ----- Skill 2 

    //Skill 2 
    public void SetSelectNoti(int levelNoti, bool is_Done)
    {
        if (database.isSelectLevelNotiMission.TryGetValue(levelNoti, out bool currentState))
        {
            if (!currentState)
            {
                // Cập nhật giá trị

                database.isSelectLevelNotiMission[levelNoti] = is_Done;
                Debug.LogError(levelNoti + " ----" + is_Done);
                SaveData();
                //   InitDic();
            }
        }
        else
        {
            Debug.Log($"Không tìm thấy nhân vật {levelNoti} trong Dictionary.");
        }
    }

    public bool GetSelectNoti(int levelNoti)
    {
        if (database.isSelectLevelNotiMission.TryGetValue(levelNoti, out bool isUnlocked))
        {
            return isUnlocked;
        }

        return false;
    }


    public void SetGemNext(int gem)
    {
        database.gemNext = gem;
        SaveData();
    }

    public void SetMoneyNext(int gem)
    {
        database.moneytNext = gem;
        SaveData();
    }

    public void SetNightNext(int gem)
    {
        if (gem >= database.nightUnlock)
        {
            database.nightUnlock = gem;
            SaveData();
        }
    }

    public void SetIndexStoryNext(int gem)
    {
        database.indexNotiStoryClaim += gem;
        SaveData();
    }


    public int GetGemNext()
    {
        return database.gemNext;
    }

    public int GetMoneyNext()
    {
        return database.moneytNext;
    }

    public int GetNightNext()
    {
        return database.nightUnlock;
    }

    public int GetIndexStoryClaimNext()
    {
        return database.indexNotiStoryClaim;
    }


    //_Btn_Buy_Update_Lv_On_Click


    public int GetMonneySkinNext()
    {
        return database.monneyNextUpdate;
    }

    public void SetMonneySkinNext(int gem)
    {
        database.monneyNextUpdate = gem;
        SaveData();
    }

    #endregion


    #region // Skill nhan vat ----- Skill 2 

    //Skill 2 
    public void SetSelectNotiCard(Type_Character levelNoti, int is_Done)
    {
        if (database.cardNoti.TryGetValue(levelNoti, out int currentState))
        {
            // Cập nhật giá trị

            database.cardNoti[levelNoti] = is_Done;
            Debug.LogError(levelNoti + " ----" + is_Done);
            SaveData();
        }
        else
        {
            Debug.Log($"Không tìm thấy nhân vật {levelNoti} trong Dictionary.");
        }
    }

    public int GetSelectNotiCard(Type_Character levelNoti)
    {
        if (database.cardNoti.TryGetValue(levelNoti, out int isUnlocked))
        {
            return isUnlocked;
        }

        return 200;
    }

    #endregion

    #region tryskin

    public Type_Character GetSkinTry()
    {
        return database.tryCharacter;
    }

    public void SetSkinTry(Type_Character typeCharacter)
    {
        database.tryCharacter = typeCharacter;
        SaveData();
    }

    #endregion


 















   


    //
    // #region // Skill nhan vat ----- Skill 2 
    //
    // //Skill 2 
    // public void SetSelectNotiButton(int levelNoti, bool is_Done)
    // {
    //     if (database.notiButton.TryGetValue(levelNoti, out bool currentState))
    //     {
    //         if (!currentState)
    //         {
    //             // Cập nhật giá trị
    //
    //             database.notiButton[levelNoti] = is_Done;
    //             Debug.LogError(levelNoti + " ----" + is_Done);
    //             SaveData();
    //             //   InitDic();
    //         }
    //     }
    //     else
    //     {
    //         Debug.Log($"Không tìm thấy nhân vật {levelNoti} trong Dictionary.");
    //     }
    // }
    //
    // public bool GetSelectNotiButton(int levelNoti)
    // {
    //     if (database.notiButton.TryGetValue(levelNoti, out bool isUnlocked))
    //     {
    //         return isUnlocked;
    //     }
    //
    //     return false;
    // }
    //
    //
    //
}


[Serializable]
public class GameData
{
    // UI: 
    public string stringNameUser;
    public List<bool> checkUnlockIcon;
    public List<bool> checkUnlockTitle;
    public int xpUser;
    public int xpRewardInGame;

    public int curUnlockIcon;
    public int curUnlockTitle;
    public List<int> titleNew;
    public List<int> avatarNew;


    public int bossKilled;
    public int characterUnlock;

    public int bossTypeNumber;

    //info skill
    public SerializableDictionary<Type_Character, bool> skill2OfCharacterUnlock;

    // Ingame
    public bool isHard;
    public int levelIndexStory;
    public int levelUnlockStory;
    public int levelIndexStoryHard;
    public int levelUnlockStoryHard;
    public bool isDameTaken;
    public List<KeyValuePair> listLevelCompleteMission;
    public List<KeyValuePair> listLevelCompleteMissionHard;


    public List<KeyValuePair> listLevelClaimMission;
    public List<KeyValuePair> listLevelClaimMissionHard;

    public SerializableDictionary<int, bool> isSelectLevelNotiMission;


    public List<bool> typeBoss;
    public Status_Win_Lose statusWinLoseTitle;


    //tut
    public bool TutDoorContinue;
    public bool isTutItemHome;

    //noti

    public int gemNext;
    public int moneytNext;
    public int nightUnlock;
    public int indexNotiStoryClaim;


    public SerializableDictionary<Type_Character, int> cardNoti;
    public int monneyNextUpdate;

    public Type_Character tryCharacter;


    //pet

   
    public GameData()
    {
        // so luong icon
        checkUnlockIcon = new List<bool>();
        for (int i = 0; i < 37; i++)
        {
            checkUnlockIcon.Add(false);
        }

        checkUnlockIcon[0] = true;
        checkUnlockIcon[1] = true;

        skill2OfCharacterUnlock = new SerializableDictionary<Type_Character, bool>();
        for (int i = (int)Type_Character.Student; i < (int)Type_Character.Total; i++)
        {
            Type_Character character = (Type_Character)i; // Chuyển từ int sang enum
            skill2OfCharacterUnlock.Add(character, false); // Thêm vào Dictionary
        }


        checkUnlockTitle = new List<bool>();
        for (int i = 0; i < 16; i++)
        {
            checkUnlockTitle.Add(false);
            //checkUnlockIcon[0] = true;
        }

        checkUnlockTitle[0] = true;

        titleNew = new List<int>();
        avatarNew = new List<int>();


        curUnlockIcon = 0;
        curUnlockTitle = 0;
        stringNameUser = "User";
        xpUser = 100;
        xpRewardInGame = 0;


        isHard = false;
        levelIndexStory = 0; // level se nhan vao chs
        levelUnlockStory = 0; // level da unlock
        levelIndexStoryHard = 0; //  Hard : level se nhan vao chs
        levelUnlockStoryHard = 0; //  harD: level da unlock 


        characterUnlock = 1; // add student

        bossKilled = 0;
        bossTypeNumber = 0;
        statusWinLoseTitle = Status_Win_Lose.Player_Mode_Lose;

        typeBoss = new List<bool>();
        for (int i = 0; i < (int)Type_Player.Goblin_Melee_Normal_Boss % 100; i++)
        {
            typeBoss.Add(false);
        }

        listLevelCompleteMission = new List<KeyValuePair>();
        for (int i = 0; i < 10; i++)
        {
            listLevelCompleteMission.Add(
                new KeyValuePair
                {
                    key = i,
                    value = new List<bool> { false, false, false },
                    // Tạo danh sách mission và thêm các giá trị từ typeLevelMission
                    mission = new List<int> { 0, 0, 0 }
                    // Data_Home.Instance.Get_All_Data_Level_Mission().Get_Data_Level_Mission(i)
                });
        }


        //test
        //   listLevelCompleteMission[0].value[0] = true;
        // listLevelCompleteMission[0].value[1] = true;
        // listLevelCompleteMission[0].value[2] = true;
        //
        // listLevelCompleteMission[1].value[0] = true;
        // listLevelCompleteMission[1].value[1] = true;
        // listLevelCompleteMission[1].value[2] = true;


        listLevelCompleteMissionHard = new List<KeyValuePair>();
        for (int i = 0; i < 10; i++)
        {
            listLevelCompleteMissionHard.Add(
                new KeyValuePair
                {
                    key = i,
                    value = new List<bool> { false, false, false },
                    // Tạo danh sách mission và thêm các giá trị từ typeLevelMission
                    mission = new List<int> { 0, 0, 0 }
                    // Data_Home.Instance.Get_All_Data_Level_Mission().Get_Data_Level_Mission(i)
                });
        }


        listLevelClaimMission = new List<KeyValuePair>();
        for (int i = 0; i < 10; i++)
        {
            listLevelClaimMission.Add(
                new KeyValuePair
                {
                    key = i,
                    value = new List<bool> { false, false, false },
                    // Tạo danh sách mission và thêm các giá trị từ typeLevelMission
                    mission = new List<int> { 0, 0, 0 }
                    // Data_Home.Instance.Get_All_Data_Level_Mission().Get_Data_Level_Mission(i)
                });
        }


        listLevelClaimMissionHard = new List<KeyValuePair>();
        for (int i = 0; i < 10; i++)
        {
            listLevelClaimMissionHard.Add(
                new KeyValuePair
                {
                    key = i,
                    value = new List<bool> { false, false, false },
                    // Tạo danh sách mission và thêm các giá trị từ typeLevelMission
                    mission = new List<int> { 0, 0, 0 }
                    // Data_Home.Instance.Get_All_Data_Level_Mission().Get_Data_Level_Mission(i)
                });
        }


        isSelectLevelNotiMission = new SerializableDictionary<int, bool>();
        for (int i = 0; i < 10; i++)
        {
            isSelectLevelNotiMission.Add(i, false); // Thêm vào Dictionary
        }


        TutDoorContinue = false;
        isDameTaken = true;
        isTutItemHome = false;

        gemNext = 50;
        moneytNext = 10;
        nightUnlock = 0;
        indexNotiStoryClaim = 0;
        //

        cardNoti = new SerializableDictionary<Type_Character, int>();
        for (int i = 0; i < (int)Type_Character.Total; i++)
        {
            cardNoti.Add((Type_Character)i, 0); // Add to Dictionary
        }

        monneyNextUpdate = 50;

        tryCharacter = Type_Character.None;








    









    }
}


[System.Serializable]
public class HauntedNameList
{
    public List<string> haunted_names;
}


[Serializable]
public class KeyValuePair
{
    public int key;
    public List<bool> value;
    public List<int> mission;
}

[Serializable]
public class SkillUnlockData
{
    public Type_Character character;
    public bool isUnlocked;
}


