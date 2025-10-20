public enum Type_Scene
{
    Home,
    In_Game
}

public enum Type_Map_Mode
{
    Default,
    Hell,
    Spooky_Forest,
    Medieval_Village,
    Greek_Mythlogy
}

public enum Type_Mode_Gameplay
{
    Story,
    Challenge,
    Story_Level,
}

public enum Type_Mission_Daily
{
    Mission_1,
    Mission_2,
    Mission_3,
    None
}

public enum Type_Quest_Daily
{
    Survive_1_Night,
    Survive_2_Night,
    Survive_3_Night,
    Kill_1_Monster,
    Kill_2_Monster,
    Kill_3_Monster,
    Upgrade_Door_LV_8,
    Upgrade_Bed_LV_8,
    Energy_Tower_LV_3,
    Kill_All_Monster,
    Win_And_No_Build_Repair_Station,
    Win_And_No_Build_Turret,
    Win_And_No_Use_Fix_Door_Now,
    Win_And_Use_Character,
    Build_1_Of_2_Turret
}

public enum Type_Condition_Quest
{
    Win,
    Use_Character,
    Build,
    Upgrade,
    No_Build_Repair_Station,
    No_Build_Turret,
    No_Use_Fix_Door_Now,
    Kill_Monster,
    Kill_All_Monster
}

public enum Type_Sorting_Layer
{
    Floor,
    Default,
    Character,
    Bullet,
    Effect,
    UI
}

public enum Type_Tab_Shop
{
    Coin = 0,
    Item = 1,
    Pack = 2,
    Turret = 3,
    Total = 4,


}


public enum Type_Tab_Shop_Update_V070
{
    NONE = 0,
    IAP = 0,
    ITEM = 1,
    //080

    Total = 100,
}
public enum Type_Tab_Shop_Update_V080_Child_Inapp
{
    SALE = 0,
    PACK = 1,
    GEM = 2,
    //080

    Total = 100,
}


public enum Type_AI_Boss
{
    Normal,
    AI_ATK,
    Line_Up
}

public enum Type_Map
{
    Map_1,
    Map_2,
    Map_3,
    Map_4,
    Map_5,
    Map_6,
    Map_7,
    Map_8,
    Map_9,
    Map_10,
    Map_11,
    Map_12,
    Map_13,
    Map_14,
    Map_15,
    Map_16,
    Map_17,
    Map_18,
    Map_19,
    Map_20,
    Map_21,
    Map_22,
    Map_23,
    Map_24,
    Map_25,
    Map_26,
    Map_27,
    Map_28,
    Map_29,
    Map_30,
}

public enum Type_Level
{
    Easy,
    Normal,
    Hard,
    Very_Hard,
    Mad,
    Crazy
}

public enum From_UI
{
    UI_Home,
    UI_Skill_Tree,
    UI_Shop,
    None = 9999
}

public enum Type_Mode_Play
{
    Player,
    Boss
}

public enum Type_Buy_Turret
{
    Unlimited,
    Limited
}

public enum Status_Item
{
    Active,
    In_Active
}

public enum Type_Item_Select_Turret
{
    Free,
    Ads
}

public enum Type_Bullet_Skill
{
    None,
    Zeus,
    Witch,
    Calida
}

public enum Type_Bullet_Pet_Skill
{

    None = 0,
    Golden_Phantom = 1,
    Pet_Skulverin = 2,
    Pet_Electro_Dragon = 3,
    Pet_Arcana = 4,
    Pet_Healimo = 5,
    Pet_Lunabun = 6,
    Pet_Mimicat = 7,
    Pet_Goldshade = 8,
    Pet_Lucky_Rabbit = 9,










    Last = 1000,
}


public enum Type_Bullet_Boss
{
    None = -1,
    Default,







    Last = 1000,
}
public enum Type_Item_Support
{
    Door_Protect,
    Stun,
    Speed_X2,
    Meteorite,
    Money_X2
}

public enum Status_Win_Lose
{
    Player_Mode_Win_Kill_All_Vampire,
    Player_Mode_Win_Out_Of_Time,
    Player_Mode_Lose,
    Vampire_Mode_Win,
    Vampire_Mode_Lose,
    Player_Mode_Win_Causing_Dame,
}

public enum Type_Mission_Tut
{
    Mission_1, // Tim phong
    Mission_2, // Nang cap giuong
    Mission_3, // Nang cap cua
    Mission_4, // Xay thap phao
    Mission_5, // Nang cap thap phao
    Mission_6, // Xay Thap nang luong
    Mission_7, // Xay thanh gia
    //Mission_8, // Dung nut sua cua
    //Mission_9, // Hoan thanh tut
    //Mission_10,
}

public enum Type_Alert
{
    Vampire_Go_Hunt,
    Door_HP_Lower_50,
    Door_HP_Lower_30,
    Vampire_Use_Skill_A,
    Vampire_Use_Skill_B,
    Vampire_Use_Skill_C,
    Vampire_Use_Skill_J,
    Vampire_Use_Skill_K,
    Vampire_Has_Escaped,
    Vampire_Level_Up,
    Vampire_Use_Skill_N,
    Vampire_Use_Skill_M,
    Vampire_Use_Skill_P,
}

public enum State_Item_Waiting_Room
{
    Hide,
    Show
}

public enum Status_Item_Shop_Character
{
    Normal,
    Bought,
    Selected,

    Select,
}

public enum Type_Tab_Buy_Turret
{
    Tab_Basic,
    Tab_Mine,
    Tab_High_Tech,
    Tab_Black_Tech,
    Tab_Factory,
}

public enum Type_Money
{
    Coin,
    Money,
    Daily_Gift,
    IAP,
    Card,
    CoinMoney,

}

public enum Status_Action_Turrert
{
    Buy,
    Upgrade
}

public enum Type_Notice_In_Game
{
    No_Internet,
    Video_Not_Available,
    Not_Enough_Gem
}

public enum Type_Tile
{
    None = -1,
    Ground = 0,
    Bed = 1,
    Door = 2,

    Wall_Left = 3,
    Wall_Right = 4,
    Wall_Top = 5,
    Wall_Bottom = 6,

    Wall_Top_Left = 7,
    Wall_Top_Right = 8,
    Wall_Bottom_Left = 9,
    Wall_Bottom_Right = 10,

    Wall_Top_Left_Out = 11,
    Wall_Top_Right_Out = 12,
    Wall_Bottom_Left_Out = 13,
    Wall_Bottom_Right_Out = 14,

    Point_Restore_Health = 15,
    Ground_Empty = 16,
    GroundBase = 17,

    //decor
    //maphell
    Decor_Hell_Table,
    Decor_Hell_Nen,
    Decor_Hell_Gia_Sach,
    Decor_Hon_Ham_Thach,
    Decor_R1,
    Decor_R2,
    Decor_R3,
    Decor_R4,
    Decor_R5,

    Decor_Trieu_Hoi_Quy,
    Decor_Tuong_Quy_1,
    Decor_Tuong_Quy_2,
    Decor_Tuong_Quy_3,

    //map khu mo    
    Decor_Bien_Chi_Dan_1,
    Decor_Bien_Chi_Dan_2,
    Decor_Khuc_Cay,
    Decor_Mo_1,
    Decor_Mo_2,
    Decor_Mo_3,
    Decor_Mo_4,
    Decor_Mo_5,
    Decor_Tree_1,
    Decor_Tree_2,
    Decor_Tree_3,
    Decor_Tree_4,
    Decor_Tree_5,
    Decor_Tree_6,
    Decor_R1_Spooky_Forest,
    Decor_R2_Spooky_Forest,
    Decor_R3_Spooky_Forest,

    //Medieval_Village
    Decor_Gia_Do_Vk,
    Decor_Group_26,
    Decor_Group_39,
    Decor_PitchFork,
    Decor_R1_Village,
    Decor_R2_Village,
    Decor_R3_Village,
    Decor_R4_Village,
    Decor_Rom1,
    Decor_Rom2,
    Decor_Rom3,
    Decor_Thung1,
    Decor_Thung2,
    Decor_Well,

    //defalut
    Decor_f1,
    Decor_f2,
    Decor_Giadevk,
    Decor_Group174,
    Decor_Giaphs,
    Decor_Throne,
    Decor_Tree_Left,





}


public enum Type_Max_Turret
{
    Max_1 = 1,
    Max_2 = 2,
    Max_3 = 3,
}

// Using Read data from Json
public enum Type_Tile_ID
{
    None = 0,
    Ground = 5,
    Bed = 10,
    Door = 20,

    Wall_Left = 30,
    Wall_Right = 40,
    Wall_Top = 50,
    Wall_Bottom = 60,

    Wall_Top_Left = 70,
    Wall_Top_Right = 80,
    Wall_Bottom_Left = 90,
    Wall_Bottom_Right = 100,

    Wall_Top_Left_Out = 110,
    Wall_Top_Right_Out = 120,
    Wall_Bottom_Left_Out = 130,
    Wall_Bottom_Right_Out = 140,

    Point_Restore_Health = 150
}

public enum Type_Turret
{
    Bed,
    Door,
    Turret,
    Energy_Tower,
    Repair_Station,
    Mirror,
    Cross, // Thánh giá
    ATM,
    Air_Conditioner,
    Trap,
    Garlic,
    Holy_Water,
    Compass, // La ban
    Bible, // Kinh thanh
    Electrical, // Cuong hoa dien

    Mine_Bronze,
    Mine_Silver,
    Mine_Gold,
    Mine_Platinum,
    Mining_Machine,
    Turret_Bed,
    Temp_Door,
    Turret_Pierce,

    Ground,
    Wall,

    Coin = 900,
    Energy = 901,

    None = 1000
}

public enum Type_Player
{
    None = -1,
    Player_1 = 0,
    Player_2 = 1,
    Player_3 = 2,
    Player_4 = 3,
    Player_5 = 4,
    Player_6 = 5,
    Player_7 = 6,
    Player_8 = 7,
    // main boss
    Boss_Dracula = 100,
    Boss_Succubus = 101,
    Boss_Baital_Vampire = 102,
    Boss_Were_Wolf = 103,
    Boss_Minotaurus = 104,
    Boss_Medusa = 105,
    //boss normal
    Goblin_Melee_Normal_Boss = 106,
    Goblin_wizard_Normal_Boss = 107,
    //mini boss
    Amored_Goblin_Mini_Boss = 108,
    Bugbear_Butler_Mini_Boss = 109,
    Crazy_Bugbear_Mini_Boss = 110,
    //monster Summoned
    Bat_Summoned_Boss_Of_Dracula = 111,



}

public enum Type_Character
{
    Student,
    Miner, // Thợ mỏ
    Repairer, // Thợ sửa chữa
    Manager, // Giám đốc
    Vampire_Hunter, // Thợ săn ma cà rồng
    Scientist, // Nhà khoa học
    Zues,
    Robot_Cyborg,
    Priest, // Mục sư
    Witch, // Phù thủy
    Calida,
    Eilif,
    Raven,
    Sami,
    Onslaught, //khau sung
    Safeguard,

    Total,


    None = 9999
}

public enum Type_Character_Standard
{
    Student = 0,
    Miner = 1, // Thợ mỏ
    Scientist = 2, // Nhà khoa học
    Priest = 3, // Mục sư

    Repairer = 4, // Thợ sửa chữa
    Robot_Cyborg = 5,
    Manager = 6, // Giám đốc

    Vampire_Hunter = 6, // Thợ săn ma cà rồng
    Zues = 7,
    Witch = 8, // Phù thủy
    Raven = 9,
    Sami = 10,
    Safeguard = 11,
    Onslaught = 12, //khau sung
    Eilif = 13,
    Calida = 14,
    Total = 15,


    None = 9999
}



public enum Type_Golem
{
    Golem_Fire,
    Golem_Tree
}

public enum Type_Skill_Golem
{
    Skill_1_Golem_Fire,
    Skill_1_Golem_Tree
}

public enum Type_Action_Golem
{
    Idle,
    Run
}

public enum Type_Item_Upgrade
{
    Upgrade_Normal,
    Upgrade_By_Ads,
    Remove_Item
}

public enum Type_Direction
{
    None,
    Top,
    Left,
    Right,
    Bottom,
    Top_Left,
    Bottom_Left,
    Top_Right,
    Bottom_Right,
    Left_Top,
    Left_Bottom,
    Right_Top,
    Right_Bottom
}

public enum Type_Skill_Boss
{
    Skill_A, // La het 
             //Làm choáng mọi kẻ địch trong 1s

    Skill_B, // Cuong no
             //Tăng gấp đôi tốc đánh trong 5s

    Skill_C, // Do sat
             //Tăng gấp đôi dame trong 5s

    Skill_D, // Hoi phuc
             //Hồi phục 1% hp 1 giây

    Skill_E, // Atk damage
             //Tăng 10% dame

    Skill_F, // Atk speed
             //Tăng 10% tốc đánh

    Skill_G, // Hp
             //Tăng 10% hp

    Skill_H, // Khang lanh
             //Giảm hiệu quả của điều hòa đi 10%

    Skill_I, // Hut Mau
             //Mỗi đòn đánh sẽ có 10% hút máu

    Skill_J, // Khat mau
             //Tiêu diệt 1 tháp phòng ngự ngẫu nhiên

    Skill_K, // Hoang so
             //Vô hiệu hóa 1 tháp phòng ngự trong 5s

    Skill_L, // Mui mau
             //Càng ít máu đánh càng nhanh

    Skill_M, // Máu điên
             //Tăng khả năng hồi phục. Hồi phục 30% máu trong 3s

    Skill_N, // Me hoac
             //Quyến rũ tất cả tháp pháo của phòng đang tấn công, Các tháp pháo không thể tấn công trong 3s

    Skill_O,// Đạn nguyền
            //  Bắn ra phép thuật bị nguyền, trong 5s đốt 2% máu cửa mỗi giây.


    Skill_P,// summon
            // trieu hoi quat vat

}

public enum Type_Icon_Skill_Tree
{
    Door,
    Increase_Damage,
    Increase_Speed,
    Repair_Station,
    Energy_Tower,
    Turret,
    Mirror,
    Random_Turret,
    Critical_Damage,
    Skill_2_Student,
    Garlic,
    Skill_2_Scientist,
    Trap,
    ATM,
    Skill_2_Miner,
    Skill_2_Vampire_Hunter,
    Skill_2_Repairer,
    Air_Conditioner,
    Skill_2_Manager,
    Cross,
    Lose_10_Per_Door_Add_10_Per_Damage,
    Holy_Water,
    Upgrade_Free,
    Skill_2_Eilif,
    Skill_1_Safeguard,
    Turret_Penetation,

}

public enum Type_Skill_Tree
{
    Skill_1_Hp_Door_10_Per,//ver trc
    Skill_2_Damage_5_Per,//ver trc
    Skill_3_Speed_Atk_5_Per,//ver trc

    Skill_4_Turret_Add_Max_2,
    Skill_5_Speed_Attack_Turret_Peratation_10_Per,

    Skill_6_Repair_Station_Add_Max_2,//ver trc
    Skill_7_Turret_Peratation_Add_Max_2,

    Skill_8_Hp_Door_15_Per,

    Skill_9_Energy_Tower_Add_1, //dung


    Skill_10_Damage_15_Per,// ver trc
    Skill_11_Speed_Atk_15_Per,//ver trc
    Skill_12_Hp_Door_20_Per,//ver trc
    Skill_13_Turret_Add_Max_2,//vertrc
    Skill_14_Mirror_Skill_10_Per, //dung

    Skill_15_Turret_Add_Max_2, //dung
    Skill_16_Turret_Peratation_Add_Max_2, //dung
    Skill_17_Garlic_Skill_1_Per, //dung
    Skill_18_Trap_Skill_50_Per,//ver trc 

    Skill_19_Damage_20_Per,
    Skill_20_Speed_Atk_20_Per,
    Skill_21_Speed_Attack_Turret_Peratation_50_Pe,

    //Skill_22_Skill_2_Vampire_Hunter,//ver trc
    Skill_22_ATM_Add_1, //dung

    Skill_23_Turret_Add_Max_2, //dung

    // Skill_23_Turret_Add_Max_2,//dung
    Skill_24_Damage_25_Per,
    Skill_25_Speed_Atk_25_Per,
    Skill_26_Hp_Door_25_Per,

    Skill_27_Air_Conditioner_20_Per, //dung

    Skill_28_Cross_Add_3s, //dung,

    Skill_29_Damage_40_Per,
    Skill_30_Speed_Atk_40_Per,
    Skill_31_Hp_Door_40_Per,
    Skill_32_Speed_Attack_Turret_Peratation_75_Per,

    Skill_15_Skill_2_Student,//ngoai leeeeeeeeeeeeeeeeeeeeeeeeee
    Skill_22_Skill_2_Vampire_Hunter,//ver trc.
    Skill_23_Skill_2_Repairer,//ver trc









    Skill_100_Excaption, // TRUONG HOP NGOAI LE

    SKill_None
}


public enum TypeSkillIcon
{
    First = -1,

    Student1,
    Scientist1,
    Scientist2,
    Miner1,
    Miner2,
    Priest1,
    Priest2,
    Mechanic1,
    Mechanic2,
    AdvanceRobot1,
    AdvanceRobot2,
    BossManager1,
    BossManager2,
    DevilHunter1,
    DevilHunter2,
    Zeus1,
    Zeus2,
    Witch1,
    Witch2,
    Raven1,
    Raven2,
    Sami1,
    Sami2,
    SafeGuard1,
    SafeGuard2,
    Onslaught1,
    Onslaught2,
    Eilif1,
    Eilif2,
    Eilif3,
    Calida1,
    Calida2,
    Calida3,
    //point last..... lock tren r// chi dc them sau nua thoi































    Last,


}

public enum Type_Skill_Tree_Gem
{
    Skill_1_Get_1_Random_Turret,
    Skill_2_Critical_Damage_10_Per,
    Skill_3_Holy_Water_15_Per,
    Skill_4_Get_2_Random_Turret,
    Skill_5_Critical_Damage_20_Per,
    Skill_6_Upgrade_Free,
    Skill_7_Lose_10_Per_Door_Add_10_Per_Damage,

    SKill_None
}


public enum Type_Pack
{
    Pack_Remove_Ads = 0,                  //+
    Pack_Gem_Small = 1,
    Pack_Gem_Normal = 2,
    Pack_Gem_Big = 3,
    Pack_Gem_Huge = 4,
    Pack_Remove_Ads_Normal = 5,
    Pack_Remove_Ads_Huge = 6,
    Pack_Best_Seller = 7,
    Pack_Starter = 8,
    Gem_Extra_Huge = 9,
    Gem_Mega_Huge = 10,
    Gem_Best_Seller = 11,
    Pack_Free_Gem = 12,

    Pack_Gem_Tiny = 13,
    Shield_Pack = 14,//sua                    //+
    Attack_Pack = 15,//sua                   //+
    Item_Pack = 16,//sua

    Shield_Pack_Sale = 17,
    Attack_Pack_Sale = 18,
    Item_Pack_Sale = 19,
    Gem_Best_Seller_Sale = 20,
    Starter_Sale = 21,
    Gem_Normal_Sale = 22,
    Gem_Best_Seller_Sale_1 = 23,

    Character_Calida,//24
    Character_Eilif,//25

    Character_Pack,//26
    Character_Pack_Sale,//27

    Character_Raven,//28
    Character_Sami,//29

    Character_Pack_B,//30
    Character_Pack_Sale_B,//31
                          //xekotoby
    Legend_Bundles,//32
    Epic_Bundles,//33
    Key_Bundles,//34
    Common_Key_Bundles,//35
    Rare_Key_Bundles,//36
    Legendary_Key_Bundles,//37

    Key_Bundles_Promotion499_Sale,//38
    Key_Bundles_Promotion299_Sale,//39
    Legend_Bundles_Promotion_Sale,//40
    Epic_Bundles_Promotion_Sale,//41
    //newu 12/8/2025
    Common_Key_Bundles_Sale,//42
    Rare_Key_Bundles_Sale,//43
    Legendary_Key_Bundles_Sale,//44

    Character_VampireHunter,//45

    Pack_Remove_Ads_Sale,//46
    Gem_Small_Sale,//47
    Gem_Big_Sale,//48
    Gem_Huge_Sale,//49
    Gem_Pack_Normal_Sale,//50
    Gem_Pack_Huge_Sale,//51










    SubWeeklyDeal,//52

    SubWeeklyDealSale,//53



    None = 99999
}

public enum Type_Reward
{
    Coin,
    Energy,
    Energy_Infinity,
    Remove_Ads,
    Skin_Miner,

    Item_Meteorite,
    Item_Door_Protect,
    Item_Stun,
    Item_Speed_X2,
    Item_Money_X2,
    Character_Zues,

    Unlock_All_Skill,
    Unlock_All_Character,
    Legend_Key,
    Epic_Key,
    Common_Key,
    VampireHunter,

}

public enum Type_Level_Play
{
    Normal,
    Hard,
    Hard_4_Minutes
}

public enum Type_Rank_Character
{
    Common,
    Uncommon,
    Rare,
    Epic,
    Legendary,

    Total,


    None = 9999
}

public enum Type_Chest_Rank
{
    Common_Chest,
    Rare_Chest,
    Legendary_Chest
}
public enum Type_Key_Chest_Rank
{
    Common_Key_Chest,
    Rare_Key_Chest,
    Legendary_Key_Chest,
}


#region  UI_User_Info



public enum Type_Condition_Unlock_User_Info
{
    FIRST,//FIRST POINT
    KILL,
    LEVEL,
    UNLOCK,
    Misson,
    LAST,//LAST POINT

}



public enum Type_Condition_Title_User_Info
{
    FIRST,//FIRST POINT
    Complete_Story_1,
    Reach_LV_20,
    Kill_10_Boss,
    Build_ALL_Turret,
    Complete_Challenge_Mode,
    Win_By_Kill_All_The_Monster,
    Kill_20_Boss,
    Win_Without_Causing_Damage,
    Complete_Normal_Mode,
    Reach_LV_50,
    Kill_50_Boss,
    Kill_All_The_Monster_Type,
    Own_All_Character,
    Reach_LV_100,
    Kill_100_Boss,


    NewBie,




    LAST,//LAST POINT

}
#endregion

#region UI_InGame_StoryDialogue

public enum ConditionStoryDialogue
{
    WHEN_INIT_LEVEL,
    CONTINUE,
    SLEEP_WAIT_30S,
    Boss_Crazy_Bugbear,
    Boss_Dracula
}

#endregion

#region story_Mission

public enum Type_Story_Mission
{

    NONE = 0,
    SURRIVIVAL = 1,
    UPGRADE = 2,
    DESTROY = 3,

    LAST = 9999,
}


public enum Type_Reward_Mission
{
    NONE = 0,


}
#endregion


#region  NameUIload

public enum NameUILoad
{
    NONE = 0,
    CANVASHOME,








    LAST = 1000,
}



public enum NameAtlasInGameLoad
{
    NONE = 0,
    ATLAS_REMOVE,
    ATLAS_IN_GAME_UI,










    LAST = 1000,
}

#endregion


#region PET


public enum TypeEgg
{

    EggType1 = 0,
    EggType2 = 1,
    EggType3 = 2,





    EggTypeLast,
}



public enum PetType
{
    None = 0,
    Attack = 1,
    Gold = 2,
    Heal = 3,










    Last = 1000,



}
public enum PetRank
{
    None = 0,
    Grey = 1,
    Green = 2,
    Purple = 3,










    Last = 1000,



}

public enum PetName
{
    None = 0,
    Golden_Phantom = 1,
    Pet_Skulverin = 2,
    Pet_Electro_Dragon = 3,
    Pet_Arcana = 4,
    Pet_Healimo = 5,
    Pet_Lunabun = 6,
    Pet_Mimicat = 7,
    Pet_Goldshade = 8,
    Pet_Lucky_Rabbit = 9,










    Last = 1000,



}

#endregion
