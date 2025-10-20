using System;
using System.Collections.Generic;
using UnityEngine;

using Xekotoby;

using Animation = Spine.Animation;


public class DataHomeGame : Singleton<DataHomeGame>
{




    protected override void Awake()
    {
        base.Awake();
        SaveTimeSpineShop();

        AddIconRankCharacter();
        AddRankCharacter();
    }




    #region INSPECTOR DICTIONARY


    //
    //     [Separator (" config")]
    //     [SerializeField] private SerializableDictionary<int, int> skillUnlockDict = new SerializableDictionary<int, int>();
    //     [SerializeField] private SerializableDictionary<TypeSkillIcon, Sprite> skillUnlockDict2 = new SerializableDictionary<TypeSkillIcon, Sprite>();
    //     [SerializeField] private SerializableDictionary<Type_Rank_Character, Sprite> skillUnlockDict3 = new SerializableDictionary<Type_Rank_Character, Sprite>();
    //
    //     public void SetLevelUnlock(int character, int isUnlocked)
    //     {
    //        
    //         skillUnlockDict[character] = isUnlocked;
    //     }
    //
    //
    //     public void InitDic()
    //     {
    //         skillUnlockDict.Clear();
    //         foreach (var kvp in levelCondition)
    //         {
    //             SetLevelUnlock(kvp.Key, kvp.Value);
    //         }
    //     }
    // //============================///////////////////////////
    //     
    //     public void SetLevelUnlock(TypeSkillIcon character, Sprite isUnlocked)
    //     {
    //        
    //         skillUnlockDict2[character] = isUnlocked;
    //     }
    //     public void InitDic2()
    //     {
    //         skillUnlockDict2.Clear();
    //         foreach (var kvp in mTypeIconSkillCharacterDictionary)
    //         {
    //             SetLevelUnlock(kvp.Key, kvp.Value);
    //         }
    //     }
    //     
    //     public void SetLevelUnlock3(Type_Rank_Character character, Sprite isUnlocked)
    //     {
    //        
    //         skillUnlockDict3[character] = isUnlocked;
    //     }
    //     public void InitDic3()
    //     {
    //         skillUnlockDict3.Clear();
    //         foreach (var kvp in mTypeRankCharacterCharacterDictionary)
    //         {
    //             SetLevelUnlock3(kvp.Key, kvp.Value);
    //         }
    //     }
    //



    #endregion



    #region icon-avatar

    //avatar
    public SerializableDictionary<Type_Character, List<int>> unlockCharacterMap = new SerializableDictionary<Type_Character, List<int>>();

    public SerializableDictionary<Type_Player, int> killBoss = new SerializableDictionary<Type_Player, int>();
    public SerializableDictionary<int, int> levelCondition = new SerializableDictionary<int, int>();





    /// <summary>
    /// mua ruong mo tuong
    /// </summary>
    /// <param name="typeCharacter"> nhan vat se duoc unlock</param>
    public void SetUnlockCharacterIcon(Type_Character typeCharacter)
    {
        if (unlockCharacterMap.TryGetValue(typeCharacter, out List<int> keys))
        {
            foreach (var key in keys)
            {
                Database.instance.SetUnlockIcon(key);
            }
            Debug.Log($"Đã tìm thấy nhân vật {typeCharacter} với các chỉ số mở khóa: {string.Join(", ", keys)}.");
        }
        else
        {
            Debug.Log($"Không tìm thấy nhân vật {typeCharacter} trong unlockCharacter.");
        }
    }






    public void SetKillBossIcon(Type_Player typeBoss)
    {


        // Kiểm tra xem typeCharacter có tồn tại trong unlockCharacter không
        if (killBoss.TryGetValue(typeBoss, out var indexes))
        {
            // Nếu tồn tại, in ra khóa và giá trị

            Database.instance.SetUnlockIcon(indexes);

            Debug.Log($"Nhân vật: {typeBoss}, Chỉ số mở khóa: {string.Join(", ", indexes)}");
        }
        else
        {
            // Nếu không tồn tại, thông báo không tìm thấy
            Debug.Log($"Không tìm thấy nhân vật {typeBoss} trong Dictionary.");
        }
    }

    public void SetLevelIcon(int levelCondiiton)
    {


        if (levelCondiiton >= 5 && levelCondiiton < 10)
        {
            levelCondiiton = 5;
        }
        if (levelCondiiton > 5 && levelCondiiton <= 10)
        {
            levelCondiiton = 10;
        }
        else if (levelCondiiton > 10 && levelCondiiton < 20)
        {
            //    levelCondiiton = levelCondiiton%10;
            if (levelCondiiton % 2 != 0)
            {
                levelCondiiton -= 1;
            }
        }
        else
        {
            // levelCondiiton = levelCondiiton%20;
            if (levelCondiiton % 2 != 0)
            {
                levelCondiiton -= 1;
            }

        }
        //        Debug.LogError(levelCondiiton);


        foreach (var key in levelCondition.keys)
        {
            if (key < levelCondiiton)
            {
                if (!Database.instance.GetUnlockIconUnlock(levelCondition[key]))
                {
                    Database.instance.SetUnlockIcon(levelCondition[key]);
                    Debug.Log($"Mở khóa level: {key}, Chỉ số mở khóa chưa unlock: {string.Join(", ", levelCondition[key])}");
                }
                else
                {
                    Debug.Log($"Level: {key} đã được mở khóa.");
                }
            }
        }

        // Kiểm tra xem typeCharacter có tồn tại trong unlockCharacter không
        if (levelCondition.TryGetValue(levelCondiiton, out var indexes))
        {
            // Nếu tồn tại, in ra khóa và giá trị
            if (!Database.instance.GetUnlockIconUnlock(indexes))
            {
                Database.instance.SetUnlockIcon(indexes);
                Debug.Log($"level: {levelCondiiton}, Chỉ số mở khóa chua unlock: {string.Join(", ", indexes)}");
            }
            else
            {
                Debug.Log($"level: {levelCondiiton}, Chỉ số mở khóa: {string.Join(", ", indexes)}");
            }


        }
        else
        {
            // Nếu không tồn tại, thông báo không tìm thấy
            Debug.Log($"Không tìm thấy level {levelCondiiton} trong Dictionary.");
        }
    }

    #endregion







    #region title


    //title
    private SerializableDictionary<Type_Condition_Title_User_Info, Vector2Int> _titleConditionDictionary = new SerializableDictionary<Type_Condition_Title_User_Info, Vector2Int>();






    /// <summary>
    /// select unlock title
    /// </summary>
    /// <param name="typeTitle"> title</param>
    public void SetTitleIcon(Type_Condition_Title_User_Info typeTitle)
    {

        if (_titleConditionDictionary.TryGetValue(typeTitle, out var indexes))
        {


            Database.instance.SetUnlockTitle(indexes.y);

            Debug.Log($"Nhân vật: {typeTitle}, Chỉ số mở khóa: {string.Join(", ", indexes)}");
        }
        else
        {

            Debug.Log($"Không tìm thấy nhân vật {typeTitle} trong Dictionary.");
        }
    }




    public void CheckCondition(Type_Condition_Title_User_Info typeTitle)
    {
        switch (typeTitle)
        {
            case Type_Condition_Title_User_Info.NewBie:

                break;
            case Type_Condition_Title_User_Info.Complete_Story_1:
                if (Database.instance.Get_Unlock_Level_Story(false) >= 1)// ISTESTING
                {
                    SetTitleIcon(typeTitle);
                    Debug.LogError("Complete title 1 ");
                }

                break;
            case Type_Condition_Title_User_Info.Reach_LV_20:
                CheckLevelTitle(typeTitle, 20);
                Debug.LogError("Hoan thanh level 20");
                break;
            case Type_Condition_Title_User_Info.Kill_10_Boss:

                CheckKillTitle(typeTitle, 10);
                Debug.LogError("Complete kill 10 boss");
                break;
            case Type_Condition_Title_User_Info.Build_ALL_Turret:

                if (Get_Build_AllTurret() == 19)
                {
                    SetTitleIcon(typeTitle);
                }

                break;
            case Type_Condition_Title_User_Info.Complete_Challenge_Mode:
                if (DataSaved.Get_Max_Level_Unlocked_Index_Mode_Challenge() == 20)
                {
                    SetTitleIcon(typeTitle);
                    Debug.LogError("Hoan thanh Complete_Challenge_Mode 1");
                }
                break;
            case Type_Condition_Title_User_Info.Win_By_Kill_All_The_Monster:
                ConditionWin(typeTitle, Database.instance.GetStatusWinLose());
                break;
            case Type_Condition_Title_User_Info.Kill_20_Boss:

                CheckKillTitle(typeTitle, 20);
                break;
            case Type_Condition_Title_User_Info.Win_Without_Causing_Damage:
                ConditionWin(typeTitle, Database.instance.GetStatusWinLose());
                break;
            case Type_Condition_Title_User_Info.Complete_Normal_Mode:
                if (DataSaved.Get_Max_Level_Unlocked_Index_Mode_Challenge() == 60)
                {
                    SetTitleIcon(typeTitle);
                    Debug.LogError("Hoan thanh Complete_Challenge_Mode 1");
                }
                break;
            case Type_Condition_Title_User_Info.Reach_LV_50:
                CheckLevelTitle(typeTitle, 50);
                Debug.LogError("Hoan thanh level 50");
                break;
            case Type_Condition_Title_User_Info.Kill_50_Boss:

                CheckKillTitle(typeTitle, 50);
                break;
            case Type_Condition_Title_User_Info.Kill_All_The_Monster_Type:
                if (Database.instance.GetBossTypeUnlock() == 6)
                {
                    SetTitleIcon(typeTitle);
                }

                break;
            case Type_Condition_Title_User_Info.Own_All_Character:
                if (Database.instance.GetCharacterUnlock() == 16)
                {
                    SetTitleIcon(typeTitle);
                }
                break;
            case Type_Condition_Title_User_Info.Reach_LV_100:
                CheckLevelTitle(typeTitle, 100);
                Debug.LogError("Hoan thanh level 100");
                break;
            case Type_Condition_Title_User_Info.Kill_100_Boss:

                CheckKillTitle(typeTitle, 100);

                Debug.LogError("Kill_100_Boss");
                break;

            default: break;
        }
    }

    public void CheckLevelTitle(Type_Condition_Title_User_Info typeTitle, int number)
    {


        if (Database.instance.ConfigXpToLevel() >= number)
        {
            SetTitleIcon(typeTitle);
        }
    }



    public void CheckKillTitle(Type_Condition_Title_User_Info typeTitle, int number)
    {


        if (Database.instance.GetKillBossKill() >= number)
        {
            SetTitleIcon(typeTitle);
        }
    }

    public void ConditionWin(Type_Condition_Title_User_Info typeTitle, Status_Win_Lose number)
    {
        //     Database.instance.SetDameTaken(true);

        if (number == Status_Win_Lose.Player_Mode_Win_Kill_All_Vampire || number == Status_Win_Lose.Player_Mode_Win_Out_Of_Time)
        {
            if (typeTitle == Type_Condition_Title_User_Info.Win_Without_Causing_Damage)
            {
                if (!Database.instance.GetDameTaken())
                {
                    SetTitleIcon(typeTitle);
                }

            }
            else
            {
                SetTitleIcon(typeTitle);
            }

        }

    }

    private int build_AllTurret = 0;

    public void ReSet_Build_AllTurret()
    {
        build_AllTurret = 0;
    }
    public void Set_Build_AllTurret(Type_Turret turret)
    {
        if (turret != Type_Turret.Bed
            || turret != Type_Turret.Door
            || turret != Type_Turret.Turret_Bed
            || turret != Type_Turret.Temp_Door
            || turret != Type_Turret.Ground
            || turret != Type_Turret.Coin
            || turret != Type_Turret.None
           )
        {
            build_AllTurret++;
        }

    }
    private int Get_Build_AllTurret()
    {
        return build_AllTurret;
    }
    #endregion






    #region  time spine shop



    private SerializableDictionary<Type_Character, float> animationDurations = new SerializableDictionary<Type_Character, float>();
    [SerializeField] private Data_Skeleton_Asset dataSkeletonAsset;

    public void SaveTimeSpineShop()
    {
        // Lưu cache thời gian của tất cả animations
        if (dataSkeletonAsset == null)
        {
            Debug.LogError("SkeletonAnimation chưa được gán hoặc dữ liệu bị thiếu!");
            return;
        }

        for (int i = 0; i < (int)Type_Character.Total; i++)
        {

            Animation shopAnimation = dataSkeletonAsset.Get_Skeleton_Asset_Character((Type_Character)i).GetSkeletonData(false).FindAnimation("shop");
            if (shopAnimation != null)
            {
                animationDurations.Add((Type_Character)i, shopAnimation.Duration);
                Debug.Log($"Lưu thời gian animation 'Shop': {(Type_Character)i}  {shopAnimation.Duration} giây");
            }
            else
            {
                Debug.LogError("Không tìm thấy animation 'Shop' trong dữ liệu Spine.");
            }
        }

    }

    public float GetAnimationDuration(Type_Character animationName)
    {
        if (animationDurations.TryGetValue(animationName, out float duration))
        {
            return duration;
        }
        else
        {
            Debug.LogError($"Không tìm thấy animation {animationName}");
            return 0f;
        }
    }





    #endregion



    #region skillIcon

    private Dictionary<TypeSkillIcon, Sprite> mTypeIconSkillCharacterDictionary = new Dictionary<TypeSkillIcon, Sprite>();

    private Sprite spriteDefault;

    public Sprite Get_Data_Icon_Skill_Character(TypeSkillIcon typeIconSkillCharacter)
    {
        if (mTypeIconSkillCharacterDictionary.TryGetValue(typeIconSkillCharacter, out Sprite spriteIcon))
        {
            return mTypeIconSkillCharacterDictionary[typeIconSkillCharacter];
        }

        return spriteDefault;

    }

    #endregion


    #region LAYOUTiCON



    private Dictionary<Type_Rank_Character, Sprite> mTypeRankCharacterCharacterDictionary = new Dictionary<Type_Rank_Character, Sprite>();
    [SerializeField] private List<Sprite> spriteRank;
    [SerializeField] private Sprite spriteRankDefault;

    private void AddIconRankCharacter()
    {
        if (mTypeRankCharacterCharacterDictionary.Count > 0)
        {
            mTypeRankCharacterCharacterDictionary.Clear();
        }



        Type_Rank_Character[] skillTypes = (Type_Rank_Character[])Enum.GetValues(typeof(Type_Rank_Character));

        int spriteIndex = 0; // Chỉ số dùng để lấy từ skillSprites


        //
        // Common,
        // Uncommon,
        // Rare,
        // Epic,
        // Legendary,
        foreach (Type_Rank_Character skill in skillTypes)
        {

            if (spriteIndex < spriteRank.Count) // Tránh lỗi vượt quá danh sách sprites
            {
                mTypeRankCharacterCharacterDictionary.Add(skill, spriteRank[spriteIndex]);
                spriteIndex++; // Tăng index để lấy sprite tiếp theo
            }
            else
            {
                break; // Thoát nếu danh sách sprites hết
            }

        }

        //InitDic3();
    }

    public Sprite Get_Data_Layout_Rank_Character(Type_Rank_Character typeIconSkillCharacter)
    {
        if (mTypeRankCharacterCharacterDictionary.TryGetValue(typeIconSkillCharacter, out Sprite spriteIcon))
        {
            return mTypeRankCharacterCharacterDictionary[typeIconSkillCharacter];
        }

        return spriteRankDefault;

    }
    #endregion



    #region typeRankCharacter



    private Dictionary<Type_Character, Type_Rank_Character> mRankOfCharacterCharacterDictionary = new Dictionary<Type_Character, Type_Rank_Character>();


    private void AddRankCharacter()
    {
        if (mRankOfCharacterCharacterDictionary.Count > 0)
        {
            mRankOfCharacterCharacterDictionary.Clear();
        }



        Type_Rank_Character[] skillTypes = (Type_Rank_Character[])Enum.GetValues(typeof(Type_Rank_Character));



        //
        // Common,
        // Uncommon,
        // Rare,
        // Epic,
        // Legendary,

        for (int i = 0; i < (int)Type_Character.Total; i++)
        {

            Type_Rank_Character shopAnimation =
                Data_Home.Instance.Get_All_Data_Character().Get_Type_Rank((Type_Character)i);
            if (shopAnimation != null)
            {
                mRankOfCharacterCharacterDictionary.Add((Type_Character)i, shopAnimation);
                Debug.Log($"Lưu thời gian animation 'Shop': {(Type_Character)i}  {shopAnimation} giây");
            }
            else
            {
                Debug.LogError("Không tìm thấy animation 'Shop' trong dữ liệu Spine.");
            }
        }


        //     InitDic3();
    }

    public Type_Rank_Character Get_Rank_Character(Type_Character typeIconSkillCharacter)
    {
        if (mRankOfCharacterCharacterDictionary.TryGetValue(typeIconSkillCharacter, out Type_Rank_Character spriteIcon))
        {
            return mRankOfCharacterCharacterDictionary[typeIconSkillCharacter];
        }

        return Type_Rank_Character.Common;

    }
    #endregion






}
