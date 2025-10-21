using System.Collections;
using System.Collections.Generic;
using System.Security.Permissions;
using UnityEngine;

public class PlayerPrefConverter : MonoBehaviour
{
    private const string SAVE_KEY = "GameData"; // Key mới để lưu JSON
    
    
    void Start()
    {
        ConvertOldPlayerPrefsToJson();
    }

    public void ConvertOldPlayerPrefsToJson()
    {
        if (PlayerPrefs.HasKey(SAVE_KEY)) return; // Nếu đã có JSON, không cần chuyển đổi
        //
        // GameData2 data = new GameData2
        // {
        //     isShowCharacterPack = UtilGame.GetDataBool("KEY_Is_Show_Character_Pack", false),
        //     onStartRootManager = UtilGame.GetDataBool("Key_On_Start_Root_Manager", false),
        //     abIapCharacterPack = UtilGame.GetDataBool("Key_AB_IAP_Character_Pack", false)
        // };
        //
        // // Lặp qua tất cả nhân vật và lưu trạng thái cũ
        // foreach (Type_Character type in System.Enum.GetValues(typeof(Type_Character)))
        // {
        //     int id = (int)type;
        //     data.isOldCharacter[id] = UtilGame.GetDataBool("Key_Is_Old_Character_" + id, false);
        // }
        //
        // // Chuyển dữ liệu thành JSON và lưu vào PlayerPrefs
        // string json = JsonUtility.ToJson(data);
        // PlayerPrefs.SetString(SAVE_KEY, json);
        // PlayerPrefs.Save();
        //
        // // Xóa các key cũ
        // PlayerPrefs.DeleteKey("KEY_Is_Show_Character_Pack");
        // PlayerPrefs.DeleteKey("Key_On_Start_Root_Manager");
        // PlayerPrefs.DeleteKey("Key_AB_IAP_Character_Pack");
        //
        // foreach (Type_Character type in System.Enum.GetValues(typeof(Type_Character)))
        // {
        //     PlayerPrefs.DeleteKey("Key_Is_Old_Character_" + (int)type);
        // }
        //
        // PlayerPrefs.Save();
        // Debug.Log("Đã chuyển PlayerPrefs sang JSON và xóa key cũ.");
    }
}


[System.Serializable]
public class  Character
{
    public bool isFlagTutCompleteShowTutChest;
    public bool isCompleteShowTutChest;
    public int indexConditionShowTutChest;
    public bool isFirstPack;
    public bool isShowTimeChest;
    public bool isTrySkin;
    public int idDataTreeUnlock;
    public int idDataGemUnlock;
    public int numberDataCommonChestRemaining;
    public bool isNewTypePackAppear;
    public bool isTypePackFlagPromotion2Appear;
    public bool isPackIapHasAppears;
    public bool isTypePackKeyBundle499;
    public bool isFull6Hours;
    public int isBoughtPromotionRootPromotionStarter;
    public int isBoughtPromotionRoot2;
    public int isBoughtPromotionRoot;
    private Dictionary<Type_Key_Chest_Rank, int> _dicCurrencyCardCharacter;
    private Dictionary<Type_Character, int> _dicCardCharacterTotal;
    private Dictionary<Type_Character, int> _dicCardCharacter;
    private Dictionary<Type_Character, int> _dicNumberShowStarLevelSkin;
    private Dictionary<Type_Character, int> _dicNumberShowLevelRankSkin;

    public Type_Map_Mode typeMapMode;
    public bool isAbIAPCharacterPack;
    public bool isOnRootManager;
    public bool isOldCharacter;
    public bool isShowCharacterPack;
    public bool isShowPopupCharacterPack;
    private Dictionary<Type_Character, bool >  _dicIsShowPopupTrySkinCharacter;
    private Dictionary<Type_Player, Type_Character> _typeCharacterPlaying;
    public int sumPlayerModeChallenge;
    public int levelNightStoryQuest;
    private Dictionary<Type_Turret, int> _dicNumberItemShopTurret;
    public bool isWinGame;
    private Dictionary<FirstTimeCollect, bool> _dicIsTimeCollect;
    public int maxLevelUnlockedIndexModeChallenge;
    public int currentLoadingLevelModeChallenge;
    public bool isLevelCompleteModeChallenge;
    public Type_Mode_Gameplay typeModeGamePlaying;
    public bool isNewDay;
    public int countUsingFixDoorNow;
    public bool isSameCharacterQuestDaily;
    public int sumDayPlayed;
    public Type_Character typeCharacterMissionDaily;
    private Dictionary<Type_Mission_Daily , int> _dicProgressMissionDaily;
    private Dictionary<Type_Mission_Daily , bool> _dicIsClaimedMissionDaily;
    private Dictionary<Type_Mission_Daily , bool> _dicIsCompleteMissionDaily;
    private Dictionary<Type_Mission_Daily, Type_Quest_Daily> _dicTypeQuestMissionDaily;
    public bool isShowPackSale;
    public int totalDayPlayed;
    public bool isReceiveBonusGemPackNormal;
    public bool isCHeckCanShowPopupIAP;
    public bool isCompleteTutBackShop;
    public bool isCompleteTutHomeShopItemRepair;
    public bool isCompleteTutHomeBuyItemDoor;
    public bool isCompleteTutHomeShopItem;
    public bool isCompleteTutUsePackBackItem;
    public bool isCompleteTutUseItem;
    public Type_Level levelTypeMaxBoss;
    private Dictionary<Type_Item_Support, int> _dicSumItemSupport;
    private Dictionary<Type_Character, bool> _dicIsBoughtSkin2;
    private Dictionary<Type_Character, bool> _dicIsUsingSkin2;
    private Dictionary<Type_Character, bool> _dicIsUnlockSkill3;
    private Dictionary<Type_Character, bool> _dicIsUnlockSkill2;
    public bool isFirstTimeShowBestSeller;
    public bool isShowPopupIAP;
    public bool isFreeSpin;
    public bool isTryingSkin2;
    public Type_Character isSkinTrying;
    public bool isFreeFirstTrySkin;
    public bool isFreeFirstPlay;
    public bool isCompleteTutGiftInGame;
    public bool isCompleteTutFixDoor;
    public bool isShowUISpin;
    public bool isShowUIDailyGift;
    public int numberCountOpenUIHome;
    public int sumPlayed;
    public int countOtherPlayerDie;
    public Type_Character skinFreeForDay7;
    public bool isResetDay3Claimed;
    public bool isDay3ClaimedSkin;
    public bool isDay7ClaimedSkin;
    public bool isClaimedGiftToday;
    public int indexClaimedDailyGift;
    public int indexClaimedMissionTutorial;
    public bool isCollectingReward;
    public int moneyRewardInGame;//blood
    public int coinRewardInGame;
    public int sumVampireDied;
    private Dictionary<Type_Skill_Tree_Gem, bool> _dicUnlockSkillTreeGemPlayer;
    private Dictionary<Type_Skill_Tree_Gem, bool> _dicUnlockSkillTreePlayer;
    public int numberLevelUnlockedIndex;
    public int numberCurrentLoadingLevel;
    public bool isLevelComplete;
    public Type_Player typeSkinBossEquipped;
    private Dictionary<Type_Player, bool> _dicSkinBossBought;
    private Dictionary<Type_Character, bool> _dicStatusTrySkinCharacter;
    public Type_Character trySkinCharacterEquippedHome;
    public Type_Character skinCharacterEquipped;
    private Dictionary<Type_Character, bool> _dicSkinCharacterBought;
    public int energyInGame;
    public int coinInGame;
    public bool isCompleteTutorial;
    public bool isRemoveAds;
    public bool isCurrentLanguage;
    public bool isStatusMusic;
    public bool isStatusVibration;
    public bool isStatusSound;
    public bool isBoughtGemPackBestSeller;
    public bool isBoughtCharacterPack;
    public bool isBoughtPackStarter;
    public bool isBoughtPackRemoveAds;
    public bool isFullTimeKey;
    public bool isEnergyInfinity;
    public bool isFullEnergy;
    public int numberEnergy;
    public int numberMoney;
    public int numberCoin;
    public Type_Mode_Play typeModePlay;
}


[System.Serializable]
public class  SupportGame
{

}

[System.Serializable]
public struct FirstTimeCollect
{
    public Type_Mode_Gameplay typeModeGameplay;
    public int level;
}