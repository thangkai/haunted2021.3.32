using DG.Tweening;
using Spine.Unity;
using System;
using System.Collections.Generic;
using UnityEngine;

public class My_Utils : MonoBehaviour
{
    public static float Get_Duration_Anim(SkeletonAnimation m_Anim, string name_Anim)
    {
        try
        {
            if (m_Anim)
            {
                return m_Anim.Skeleton.Data.FindAnimation(name_Anim).Duration;
            }
        }
        catch (Exception)
        {
            Debug.Log("Get_Duration_Anim Error : name_Anim = " + name_Anim);
            return 1f;
        }

        return 1f;
    }

    public static float Get_Time_Scale_Anim(SkeletonAnimation m_Anim, string name_Anim, float m_Speed_Attack)
    {
        return (Get_Duration_Anim(m_Anim, name_Anim) / 1f) * (1f / m_Speed_Attack);
    }

    public static float Get_Time_Scale_Anim(float time_Anim, float m_Speed_Attack)
    {
        return (time_Anim / 1f) * (1f / m_Speed_Attack);
    }

    //public static float Get_Time_Scale_Anim(SkeletonAnimation m_Anim, string name_Anim, float m_Speed_Attack)
    //{
    //    return (Get_Duration_Anim(m_Anim, name_Anim) / 1f) * (1f / m_Speed_Attack);
    //}

    public static string Get_Content_By_Language(Model_Name model_Name)
    {

        return model_Name.name_EN;
    }

    public static int Get_Second_By_Time(Model_Time model_Time)
    {
        return model_Time.minute * 60 + model_Time.seconds;
    }

    //updateofjura
    public static Status_Item_Shop_Character Get_Status_Skin_Character(Type_Character type_Character)
    {



        if (DataSaved.Get_Status_Try_Skin_Character(type_Character) == Status_Item_Shop_Character.Selected)
        {
            Debug.LogError("ssss");
            return Status_Item_Shop_Character.Normal;
        }





        if (DataSaved.Get_Skin_Character_Equipped() == type_Character)
        {
            return Status_Item_Shop_Character.Selected;
        }

        if (DataSaved.Get_Skin_Character_Bought(type_Character))
        {
            return Status_Item_Shop_Character.Bought;
        }



        return Status_Item_Shop_Character.Normal;
    }

    public static Status_Item_Shop_Character Get_Status_Skin_Boss(Type_Player type_Player)
    {
        if (DataSaved.Get_Skin_Boss_Equipped() == type_Player)
        {
            return Status_Item_Shop_Character.Selected;
        }

        if (DataSaved.Get_Skin_Boss_Bought(type_Player))
        {
            return Status_Item_Shop_Character.Bought;
        }

        return Status_Item_Shop_Character.Normal;
    }

    public static bool Check_Is_Boss(Type_Player type_Player)
    {
        int id_Boss = (int)type_Player;
        return id_Boss >= (int)Type_Player.Boss_Dracula && id_Boss <= (int)Type_Player.Boss_Medusa;
    }

    public static int Get_Id_Boss(Type_Player type_Player)
    {
        int min_Id = (int)Type_Player.Boss_Dracula;
        int max_Id = (int)Type_Player.Bat_Summoned_Boss_Of_Dracula;
        int id_Boss = (int)type_Player;
        if (id_Boss >= min_Id && id_Boss <= max_Id)
        {
            id_Boss -= min_Id;
            return id_Boss;
        }

        return 0;
    }

    public static int Get_Id_Pet(PetName type_Pet)
    {
        int min_Id = (int)PetName.Golden_Phantom;
        int max_Id = (int)PetName.Pet_Lucky_Rabbit;
        int id_Boss = (int)type_Pet;
        if (id_Boss >= min_Id && id_Boss <= max_Id)
        {
            id_Boss -= min_Id;
            return id_Boss;
        }

        return 0;
    }

    public static Sprite Get_Sprite_By_Language(Model_Image_Language m_Sprite)
    {

        return m_Sprite.sprite_EN;
    }

    public static Vector3 Get_New_Pos_By_Direction(Vector3 input, Type_Direction type_Direction)
    {
        Vector3 pos = input;
        switch (type_Direction)
        {
            case Type_Direction.Top:
                pos.y += 1f;
                break;
            case Type_Direction.Left:
                pos.x -= 1f;
                break;
            case Type_Direction.Right:
                pos.x += 1f;
                break;
            case Type_Direction.Bottom:
                pos.y -= 1f;
                break;
        }

        return pos;
    }

    public static Vector3 Get_Pos_Boss_Attack(Vector3 input, Type_Direction type_Direction)
    {
        Vector3 pos = input;
        switch (type_Direction)
        {
            case Type_Direction.Top:
                pos.y += 0.7f;
                break;
            case Type_Direction.Left:
                pos.x -= 1.2f;
                break;
            case Type_Direction.Right:
                pos.x += 1.2f;
                break;
            case Type_Direction.Bottom:
                pos.y -= 1.2f;
                break;
        }

        return pos;
    }

    public static Type_Direction Get_Reflect_Direction(Type_Direction type_Direction)
    {
        switch (type_Direction)
        {
            case Type_Direction.None: return Type_Direction.None;
            case Type_Direction.Top: return Type_Direction.Bottom;
            case Type_Direction.Left: return Type_Direction.Right;
            case Type_Direction.Right: return Type_Direction.Left;
            case Type_Direction.Bottom: return Type_Direction.Top;
        }

        return Type_Direction.None;
    }

    public static Type_Direction Get_Direction_Left_Right([Bridge.Ref] Vector3 from, [Bridge.Ref] Vector3 to)
    {
        if (to.x > from.x)
        {
            return Type_Direction.Right;
        }

        return Type_Direction.Left;
    }

    public static List<string> Get_Des_Stat_Update(Model_Skill model_Skill, Model_Requirement model_Requirement,
        float dameBonus = 0f, float healthBonus = 0f)
    {
        List<string> output = new List<string>();
        bool is_Lang_VI = false;

        if (model_Skill != null && model_Skill.coin > 0)
        {
            output.Add((is_Lang_VI ? "Nhận vàng:   " : "Gain gold:   ") +
                       "<color=green><b>" + model_Skill.coin + "</b></color> " +
                       (is_Lang_VI ? "vàng/s" : "gold/s")
            );
        }

        if (model_Skill != null && model_Skill.HP > 0)
        {
            // if (healthBonus > 0)
            // {
            //     output.Add((is_Lang_VI ? "Máu:   " : "HP:   ") +
            //                "<color=green><b>" + model_Skill.HP + "</b></color> "
            //                + "<color=green><b>" + "(+" + +healthBonus + ")" + "</b></color>"
            //                + (is_Lang_VI ? "máu" : "HP")
            //     );
            // }
            // else
            // {
            output.Add((is_Lang_VI ? "Máu:   " : "HP:   ") +
                       "<color=green><b>" + Math.Floor(model_Skill.HP + healthBonus) + "</b></color> " +
                       (is_Lang_VI ? "máu" : "HP")
            );
            // }
        }

        if (model_Skill != null && model_Skill.energy > 0)
        {
            output.Add((is_Lang_VI ? "Nhận n.lượng:   " : "Gain power:   ") +
                       "<color=green><b>" + model_Skill.energy + "</b></color> " +
                       (is_Lang_VI ? "n.lượng/s" : "power/s")
            );
        }

        if (model_Skill != null && model_Skill.damage > 0)
        {
            // if (dameBonus > 0)
            // {
            //     output.Add((is_Lang_VI ? "Sát thương:   " : "Damage:   ") +
            //                "<color=green><b>" + model_Skill.damage + "</b></color>"
            //                +
            //                "<color=green><b>" + "(+" + +dameBonus + ")" + "</b></color>"
            //     );
            // }
            // else
            // {
            output.Add((is_Lang_VI ? "Sát thương:   " : "Damage:   ") +
                       "<color=green><b>" + Math.Floor(model_Skill.damage + dameBonus) + "</b></color>");
            // }
        }

        if (model_Skill != null && model_Skill.range > 0)
        {
            output.Add((is_Lang_VI ? "Tầm đánh:   " : "Range:   ") +
                       "<color=green><b>" + model_Skill.range + "</b></color>");
        }

        if (model_Skill != null && model_Skill.speed > 0)
        {
            output.Add((is_Lang_VI ? "Tốc độ đánh:   " : "Speed:   ") +
                       "<color=green><b>" + model_Skill.speed + "</b></color>");
        }

        if (model_Skill != null && model_Skill.damage_Penetration > 0)
        {
            output.Add((is_Lang_VI ? "xuyên giáp:   " : "Dame Piercing :   ") +
                       "<color=green><b>" + model_Skill.damage_Penetration + "</b></color> ");
        }

        if (model_Requirement != null && model_Requirement.type_Turret != Type_Turret.None)
        {
            if (model_Requirement.level - 1 >= 0)
            {
                string precondition;
                Model_Info_Turret model_Condition = Data_In_Game.Instance.Get_Data_Info_Turret_Manager()
                    .Get_Data_Info_Turret(
                        model_Requirement.type_Turret, model_Requirement.level - 1);

                if (is_Lang_VI)
                {
                    precondition = "Điều kiện: " + model_Condition.model_Names.name_VI;
                }
                else
                {
                    precondition = "Condition: " + model_Condition.model_Names.name_EN;
                }

                output.Add(precondition);
            }
        }

        return output;
    }

    // dien thong tin vao model turret
    public static Model_Info_Turret Get_Data_Info_Turret(Data_Info_Turret data_Info_Turret, int level)
    {
        Model_Info_Turret model_Info_Turret = new Model_Info_Turret();
        model_Info_Turret.type_Turret = data_Info_Turret.type_Turret;
        model_Info_Turret.level = level;

        if (level < data_Info_Turret.model_Names.Length)
        {
            model_Info_Turret.model_Names = data_Info_Turret.model_Names[level]; //vi-en--model
        }
        else
        {
            model_Info_Turret.model_Names = data_Info_Turret.model_Names[data_Info_Turret.model_Names.Length - 1];
        }


        model_Info_Turret.description_EN = data_Info_Turret.description_EN; //mota
        model_Info_Turret.description_VI = data_Info_Turret.description_VI; //mota

        if (level < data_Info_Turret.model_Skills.Length)
        {
            int level_Skill = level;

            if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
            {
                if (data_Info_Turret.type_Turret == Type_Turret.Door)
                {
                    level_Skill += 4;
                }
                else if (data_Info_Turret.type_Turret == Type_Turret.Turret)
                {
                    level_Skill += 3;
                }
            }

            if (level_Skill < data_Info_Turret.model_Skills.Length)
            {
                Model_Skill model = new Model_Skill();
                model.coin = data_Info_Turret.model_Skills[level_Skill].coin;
                model.HP = data_Info_Turret.model_Skills[level_Skill].HP;
                model.energy = data_Info_Turret.model_Skills[level_Skill].energy;
                model.damage = data_Info_Turret.model_Skills[level_Skill].damage;
                model.range = data_Info_Turret.model_Skills[level_Skill].range;
                model.speed = data_Info_Turret.model_Skills[level_Skill].speed;

                model.damage_Penetration = data_Info_Turret.model_Skills[level_Skill].damage_Penetration;

                model_Info_Turret.model_Skills = model;

                if (RootManager.Check_Is_Type_Level_Hard_4_Minutes() &&
                    data_Info_Turret.type_Turret == Type_Turret.Turret)
                {
                    model_Info_Turret.model_Skills.range = data_Info_Turret.model_Skills[level_Skill - 3].range;
                }
            }
            else
            {
                try
                {
                    var last_Skill = data_Info_Turret.model_Skills[data_Info_Turret.model_Skills.Length - 1];
                    float pow_2 = Mathf.Pow(2, level_Skill - (data_Info_Turret.model_Skills.Length - 1));

                    Model_Skill model_Info_Skill = new Model_Skill();
                    model_Info_Skill.coin = Mathf.FloorToInt(last_Skill.coin * pow_2);
                    model_Info_Skill.HP = Mathf.FloorToInt(last_Skill.HP * pow_2);
                    model_Info_Skill.energy = Mathf.FloorToInt(last_Skill.energy * pow_2);
                    model_Info_Skill.damage = last_Skill.damage * pow_2;
                    if (RootManager.Check_Is_Type_Level_Hard_4_Minutes() &&
                        data_Info_Turret.type_Turret == Type_Turret.Turret)
                    {
                        model_Info_Skill.range = last_Skill.range * Mathf.Pow(2,
                            level_Skill - 3 - (data_Info_Turret.model_Skills.Length - 1));
                    }
                    else
                    {
                        model_Info_Skill.range = last_Skill.range * pow_2;
                    }

                    model_Info_Skill.speed = last_Skill.speed * pow_2;


                    //xekotoby
                    model_Info_Skill.damage_Penetration = last_Skill.damage_Penetration * pow_2;
                    //xekotoby

                    model_Info_Turret.model_Skills = model_Info_Skill;
                }
                catch (Exception)
                {
                    model_Info_Turret.model_Skills = null;
                }
            }
        }
        else
        {
            model_Info_Turret.model_Skills = null;
        }

        model_Info_Turret.price_Upgrades = data_Info_Turret.Get_Price_By_Level(level);

        if (level < data_Info_Turret.m_Requirement_Upgrades.Length)
        {
            model_Info_Turret.requirement_Upgrades = data_Info_Turret.m_Requirement_Upgrades[level];
        }
        else
        {
            model_Info_Turret.requirement_Upgrades = null;
        }

        return model_Info_Turret;
    }

    public static void Decrease_Number_Turret_SO(Data_Player data_Player, Type_Turret type_Turret)
    {
        switch (type_Turret)
        {
            case Type_Turret.Turret:
                data_Player.Decrease_Sum_Turret_Builded();
                break;

            case Type_Turret.Energy_Tower:
                data_Player.Decrease_Sum_Energy_Tower_Builded();
                break;

            case Type_Turret.Repair_Station:
                data_Player.Decrease_Sum_Repair_Station_Builded();
                break;

            case Type_Turret.Mirror:
                data_Player.Decrease_Sum_Mirror_Builded();
                break;

            case Type_Turret.Cross:
                data_Player.Set_Immortal(false);
                break;

            case Type_Turret.ATM:
                data_Player.Decrease_Sum_ATM_Builded();
                break;

            case Type_Turret.Air_Conditioner:
                data_Player.Decrease_Sum_Air_Conditioner_Builded();
                break;

            case Type_Turret.Garlic:
                data_Player.Decrease_Sum_Garlic_Builded();
                break;

            case Type_Turret.Holy_Water:
                data_Player.Decrease_Sum_Holy_Water_Builded();
                break;

            case Type_Turret.Compass:
                data_Player.Decrease_Sum_Compass_Builded();
                break;

            case Type_Turret.Bible:
                data_Player.Decrease_Sum_Bibble_Builded();
                break;

            case Type_Turret.Electrical:
                data_Player.Decrease_Sum_Electric_Builded();
                break;
            case Type_Turret.Turret_Bed: //updateofjura
                data_Player.Decrease_Sum_Turret_Bed_Builded();
                break;
            case Type_Turret.Turret_Pierce:
                data_Player.Decrease_Sum_Turret_Penetation_Builded();
                break;
        }
    }

    //dien thong tin
    public static Model_Phase_Character Clone_Model_Phase_Character(Model_Phase_Character input)
    {
        Model_Phase_Character output = new Model_Phase_Character();

        output.m_All_Condition.Clear();
        output.m_All_Condition.AddRange(input.m_All_Condition);

        output.m_All_Ratio_Turret.Clear();
        output.m_All_Ratio_Turret.AddRange(input.m_All_Ratio_Turret);

        return output;
    }

    // updateofjura
    // lay du lieu nguoi chs level min
    public static bool Check_Requirement(Type_Player m_Type_Player, Model_Requirement model_Requirement)
    {
        if (model_Requirement != null && model_Requirement.type_Turret != Type_Turret.None)
        {
            Data_Player data_Player = Player_Manager.Instance.Get_Data_Player(m_Type_Player);
            int level_min = model_Requirement.level - 1;
            if (level_min >= 0 && data_Player.Get_Level_Turret(model_Requirement.type_Turret) >= level_min)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        return true;
    }

    //update
    public static bool Update_Turret(bool is_AI, Data_Player data_Player, Type_Player m_Type_Player,
        Model_Price model_Price, Base_Turret m_Curr_Turret)
    {
        bool is_Can_Upgrade = false;

        if (data_Player == null)
        {
            data_Player = Player_Manager.Instance.Get_Data_Player(m_Type_Player);
        }
        //var data_Player = Player_Manager.Instance.Get_Data_Player(m_Type_Player);

        int price_Coin_Upgrade =
            Get_Price(m_Curr_Turret.m_Type_Character, m_Curr_Turret.type_Turret, model_Price.price_Coin);
        int price_Energy_Upgrade = Get_Price(m_Curr_Turret.m_Type_Character, m_Curr_Turret.type_Turret,
            model_Price.price_Energy);
        int index_Claimed_Mission = DataSaved.Get_Index_Claimed_Mission_Tutorial();

        if (!is_AI)
        {
            if (!DataSaved.Get_Is_Complete_Tutorial() &&
                DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story &&
                DataSaved.Get_Current_Loading_Level() == 0 &&
                ((m_Curr_Turret.type_Turret == Type_Turret.Bed && index_Claimed_Mission == 1) ||
                 (m_Curr_Turret.type_Turret == Type_Turret.Door && index_Claimed_Mission == 2) ||
                 (m_Curr_Turret.type_Turret == Type_Turret.Turret && index_Claimed_Mission == 4)
                ))
            {
                price_Coin_Upgrade = 0;
                price_Energy_Upgrade = 0;
            }
            else if (DataSaved.Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem.Skill_6_Upgrade_Free) &&
                     DataSaved.Get_Count_Other_Player_Die() > 0)
            {
                price_Coin_Upgrade = 0;
                price_Energy_Upgrade = 0;
            }
        }

        if (data_Player.Get_Sum_Coin() >= price_Coin_Upgrade &&
            data_Player.Get_Sum_Energy() >= price_Energy_Upgrade)
        {
            is_Can_Upgrade = true;
        }

        if (is_Can_Upgrade)
        {
            if (price_Coin_Upgrade > 0)
            {
                data_Player.Decrease_Coin(price_Coin_Upgrade);
            }

            if (price_Energy_Upgrade > 0)
            {
                data_Player.Decrease_Energy(price_Energy_Upgrade);
            }

            if (!is_AI && DataSaved.Get_Unlock_Skill_Tree_Gem_Player(Type_Skill_Tree_Gem.Skill_6_Upgrade_Free)
                       && DataSaved.Get_Count_Other_Player_Die() > 0)
            {
                DataSaved.Decrease_Count_Other_Player_Die();
            }

            if (m_Curr_Turret)
            {
                m_Curr_Turret.Upgrade_Item_Success();
            }

            data_Player.Reset_Target_Build();
        }

        return is_Can_Upgrade;
    }

    // Method using for AI auto Build
    public static bool Check_Can_Build_Turret(
        Data_Player data_Player,
        Type_Player m_Type_Player,
        Type_Character type_Character,
        Type_Turret turret_Build,
        Model_Price model_Price,
        Base_Turret ground)
    {
        if (Game_Controller.Get_Is_End_Level()) return false;
        if (m_Type_Player == Type_Player.None) return false;

        if (data_Player == null)
        {
            data_Player = Player_Manager.Instance.Get_Data_Player(m_Type_Player);
        }

        // Check condition can Build
        bool is_Can_Build = false;
        int price_Coin = Get_Price(type_Character, turret_Build, model_Price.price_Coin);
        int price_Energy = Get_Price(type_Character, turret_Build, model_Price.price_Energy);

        int m_Number_Curr = 0;
        var m_Type_Buy_Turret = Type_Buy_Turret.Unlimited;
        int m_Number_Limited = 5;

        if (turret_Build == Type_Turret.Turret)
        {
            m_Type_Buy_Turret = Type_Buy_Turret.Limited;
            m_Number_Curr = data_Player.Get_Sum_Turret_Builded();
            m_Number_Limited = 5;
        }
        else if (turret_Build == Type_Turret.Repair_Station)
        {
            m_Type_Buy_Turret = Type_Buy_Turret.Limited;
            m_Number_Curr = data_Player.Get_Sum_Repair_Station_Builded();
            m_Number_Limited = 1;
        }
        else if (turret_Build == Type_Turret.Turret_Pierce)
        {
            m_Type_Buy_Turret = Type_Buy_Turret.Limited;
            m_Number_Curr = data_Player.Get_Sum_Turret_Penetation_Builded();
            m_Number_Limited = 1;
        }

        if (data_Player.Get_Sum_Coin() >= price_Coin && data_Player.Get_Sum_Energy() >= price_Energy)
        {
            if (m_Type_Buy_Turret == Type_Buy_Turret.Limited)
            {
                if (m_Number_Curr < m_Number_Limited)
                {
                    is_Can_Build = true;
                }
            }
            else
            {
                is_Can_Build = true;
            }
        }

        if (is_Can_Build)
        {
            Increase_Number_Turret(data_Player, turret_Build);

            if (price_Coin > 0)
            {
                data_Player.Decrease_Coin(price_Coin);
            }

            if (price_Energy > 0)
            {
                data_Player.Decrease_Energy(price_Energy);
            }

            if (ground)
            {
                ground.Start_Build_New_Turret(turret_Build);
            }

            data_Player.Reset_Target_Build();

            return true;
        }

        return false;
    }

    // Update data to Scriptable Object of Player
    public static void Increase_Number_Turret(Data_Player data_Player, Type_Turret type_Turret)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (data_Player == null) return;

        switch (type_Turret)
        {
            case Type_Turret.Turret:
                data_Player.Increase_Sum_Turret_Builded();
                break;

            case Type_Turret.Energy_Tower:
                data_Player.Increase_Sum_Energy_Tower_Builded();
                break;

            case Type_Turret.Repair_Station:
                data_Player.Increase_Sum_Repair_Station_Builded();
                break;

            case Type_Turret.Mirror:
                data_Player.Increase_Sum_Mirror_Builded();
                break;

            case Type_Turret.ATM:
                data_Player.Increase_Sum_ATM_Builded();
                break;

            case Type_Turret.Air_Conditioner:
                data_Player.Increase_Sum_Air_Conditioner_Builded();
                break;

            case Type_Turret.Trap:
                break;

            case Type_Turret.Garlic:
                data_Player.Increase_Sum_Garlic_Builded();
                break;

            case Type_Turret.Holy_Water:
                data_Player.Increase_Sum_Holy_Water_Builded();
                break;

            case Type_Turret.Compass:
                data_Player.Increase_Sum_Compass_Builded();
                break;

            case Type_Turret.Bible:
                data_Player.Increase_Sum_Bibble_Builded();
                break;

            case Type_Turret.Electrical:
                data_Player.Increase_Sum_Electric_Builded();
                break;
            case Type_Turret.Turret_Bed: //updateofjura
                data_Player.Increase_Sum_Turret_Bed_Builded();
                break;
            case Type_Turret.Turret_Pierce:
                data_Player.Increase_Sum_Turret_Penetation_Builded();
                break;
        }
    }

    #region ================= Boss =======================

    public static Model_Info_Boss Get_Data_Info_Boss(Data_Info_Boss data_Info, Type_Level type_Level)
    {
        Model_Info_Boss model_Info_Boss = new Model_Info_Boss();
        model_Info_Boss.name_Boss = data_Info.Get_Name_Boss();
        model_Info_Boss.type_Boss = data_Info.type_Boss;
        model_Info_Boss.speed_Attack = data_Info.speed_Attack;
        model_Info_Boss.m_Pool_Skill.AddRange(data_Info.m_Pool_Skill);

        int level = (int)type_Level;
        if (level < data_Info.XP_By_Levels.Length)
        {
            model_Info_Boss.XP = data_Info.XP_By_Levels[level];
        }
        else
        {
            model_Info_Boss.XP = data_Info.XP_By_Levels[data_Info.XP_By_Levels.Length - 1];
        }

        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {
            model_Info_Boss.stat_Boss = data_Info.Get_Stat_Boss_Upgrade_Story_Level(level);
        }
        else
        {
            model_Info_Boss.stat_Boss = data_Info.Get_Stat_Boss_By_Level(level);
        }


        //model_Info_Boss.m_Amor = data_Info.m_Amor; //xekotoby

        return model_Info_Boss;
    }

    #endregion

    public static bool Check_Condition_Unlock_Skill_Tree(List<Type_Skill_Tree> conditions, int night,
        List<Type_Skill_Tree_Gem> conditions_Gem = null)
    {
        int level = (DataSaved.Get_Current_Loading_Level() + 1);

        if (night > level)
        {
            return false;
        }
        else
        {
            if (conditions == null)
            {
                return true;
            }


            if (conditions.Count <= 0)
            {
                if (conditions_Gem == null || conditions_Gem.Count <= 0)
                {
                    return true;
                }
                else
                {
                    for (int i = 0; i < conditions_Gem.Count; i++)
                    {
                        if (!DataSaved.Get_Unlock_Skill_Tree_Gem_Player(conditions_Gem[i]))
                        {
                            return false;
                        }
                    }
                }
            }
            else
            {
                for (int i = 0; i < conditions.Count; i++)
                {
                    if (!DataSaved.Get_Unlock_Skill_Tree_Player(conditions[i]))
                    {
                        return false;
                    }
                }
            }
        }


        return true;
    }

    public static bool Check_Condition_Unlock_Skill_Tree_Night(int night)
    {
        int level = (DataSaved.Get_Current_Loading_Level() + 1);

        if (night > level)
        {
            return false;
        }


        return true;
    }


    public static float Get_Rotation_By_Direction(Type_Direction type_Direction)
    {
        switch (type_Direction)
        {
            case Type_Direction.Top: return 0f;
            case Type_Direction.Left: return 90f;
            case Type_Direction.Right: return 270f;
            case Type_Direction.Bottom: return 180f;
        }

        return 0f;
    }

    public static void Play_Pref_Effect(GameObject pref_Effect, Transform m_Pos_Effect_Skill,
        Action m_Action_Done = null)
    {
        Play_Pref_Effect(pref_Effect, m_Pos_Effect_Skill, false, true, m_Action_Done);
    }


    // public static void Play_Spine_Animation(GameObject spine_Prefab, Transform spawn_Transform,bool is_Auto_Destroy = true, Action on_Complete = null)
    // {
    //     Play_Spine_Animation(spine_Prefab, spawn_Transform, is_Auto_Destroy);
    // }
    //


    public static void Play_Pref_Effect_In_Parent(GameObject pref_Effect, Transform m_Pos_Effect_Skill,
        Action m_Action_Done = null)
    {
        Play_Pref_Effect(pref_Effect, m_Pos_Effect_Skill, true, true, m_Action_Done);
    }

    public static void Play_Pref_Effect_No_Destroy(GameObject pref_Effect, Transform m_Pos_Effect_Skill)
    {
        Play_Pref_Effect(pref_Effect, m_Pos_Effect_Skill, false, false, null);
    }


    public static void Play_Pref_Effect_Layer(GameObject pref_Effect, Transform m_Pos_Effect_Skill, int layerID,
        string layerName)
    {
        Play_Pref_Effect_Layer(pref_Effect, m_Pos_Effect_Skill, false, layerID, layerName, false, null);
    }


    public static void Play_Spine_Animation(GameObject pref_Effect, Transform m_Pos_Effect_Skill, bool autoDestroy)
    {
        Play_Spine_Animation(pref_Effect, m_Pos_Effect_Skill, autoDestroy, null);
    }


    private static void Play_Pref_Effect_Layer(GameObject pref_Effect, Transform m_Pos_Effect_Skill,
        bool is_None_Parent, int layerID, string layerName,
        bool is_Auto_Destroy = true, Action m_Action_Done = null)
    {
        var obj_Effect = Instantiate(pref_Effect, m_Pos_Effect_Skill);
        obj_Effect.transform.localPosition = Vector3.zero;
        obj_Effect.transform.localScale = new Vector3(1, 1, 1);

        if (is_Auto_Destroy && !is_None_Parent)
        {
            obj_Effect.transform.SetParent(Recycle_Bin.Instance.transform);
        }

        ParticleSystem[] allParticleSystems = obj_Effect.GetComponentsInChildren<ParticleSystem>();

        foreach (ParticleSystem childEffect in allParticleSystems)
        {
            childEffect.gameObject.layer = LayerMask.NameToLayer(layerName);
            ParticleSystemRenderer childRenderer = childEffect.GetComponent<ParticleSystemRenderer>();
            if (childRenderer != null)
            {
                childRenderer.sortingOrder = layerID; // Hoặc tăng dần
            }
        }

        ParticleSystem effect = obj_Effect.GetComponent<ParticleSystem>();


        if (effect)
        {
            effect.Play();
            DOVirtual.DelayedCall(effect.main.duration, () =>
            {
                if (m_Action_Done != null)
                {
                    m_Action_Done.Invoke();
                }

                if (is_Auto_Destroy)
                {
                    Destroy(obj_Effect);
                }
            }, false);
        }
        else
        {
            if (is_Auto_Destroy)
            {
                UnityEngine.Object.Destroy(obj_Effect, 3f);
            }
        }
    }


    private static void Play_Spine_Animation(GameObject spine_Prefab, Transform spawn_Transform,
        bool is_Auto_Destroy = true, Action on_Complete = null)
    {
        // Instantiate Spine GameObject tại vị trí spawn_Transform
        var spine_Obj = Instantiate(spine_Prefab, spawn_Transform);
        spine_Obj.transform.localPosition = Vector3.zero;
        spine_Obj.transform.localScale = Vector3.one;

        // Nếu auto destroy và không phải là none parent, set parent là Recycle Bin
        if (is_Auto_Destroy)
        {
            spine_Obj.transform.SetParent(Recycle_Bin.Instance.transform);
        }

        // Lấy component SkeletonAnimation (Spine)
        Transform firstChild = spine_Obj.transform.childCount > 0 ? spine_Obj.transform.GetChild(0) : null;

        if (firstChild != null)
        {
            // Lấy component SkeletonAnimation từ child đầu tiên
            var skeletonAnimation = firstChild.GetComponent<SkeletonAnimation>();
            if (skeletonAnimation != null)
            {
                // Lấy animation state
                var state = skeletonAnimation.AnimationState;

                // Đăng ký sự kiện hoàn thành animation
                state.Complete += (trackEntry) =>
                {
                    // Gọi action callback nếu có
                    on_Complete?.Invoke();

                    // Destroy object nếu is_Auto_Destroy = true
                    if (is_Auto_Destroy)
                    {
                        Destroy(spine_Obj); // Vẫn destroy spine_Obj (parent)
                    }
                };

                // Phát animation đầu tiên
                skeletonAnimation.AnimationState.SetAnimation(0, "attack", false);
            }
        }
        else
        {
            // Nếu không tìm thấy SkeletonAnimation, destroy sau 3 giây như fallback
            if (is_Auto_Destroy)
            {
                UnityEngine.Object. Destroy(spine_Obj, 3f);
            }
        }
    }


    private static void Play_Pref_Effect(GameObject pref_Effect, Transform m_Pos_Effect_Skill,
        bool is_None_Parent,
        bool is_Auto_Destroy = true, Action m_Action_Done = null)
    {
        var obj_Effect = Instantiate(pref_Effect, m_Pos_Effect_Skill);
        obj_Effect.transform.localPosition = Vector3.zero;
        obj_Effect.transform.localScale = new Vector3(1, 1, 1);

        if (is_Auto_Destroy && !is_None_Parent)
        {
            obj_Effect.transform.SetParent(Recycle_Bin.Instance.transform);
        }

        ParticleSystem effect = obj_Effect.GetComponent<ParticleSystem>();
        if (effect)
        {
            effect.Play();
            DOVirtual.DelayedCall(effect.main.duration, () =>
            {
                if (m_Action_Done != null)
                {
                    m_Action_Done.Invoke();
                }

                if (is_Auto_Destroy)
                {
                    Destroy(obj_Effect);
                }
            }, false);
        }
        else
        {
            if (is_Auto_Destroy)
            {
                UnityEngine.Object. Destroy(obj_Effect, 3f);
            }
        }
    }


    public static int Get_Price(Type_Character type_Character, Type_Turret type_Turret, int _price)
    {
        int price = _price;

        if (type_Turret == Type_Turret.Energy_Tower &&
            type_Character == Type_Character.Scientist &&
            DataSaved.Get_Is_Unlock_Skill_2(type_Character))
        {
            price = (int)(0.7f * price);
        }

        if (type_Character == Type_Character.Miner &&
            DataSaved.Get_Is_Unlock_Skill_2(type_Character) &&
            (type_Turret == Type_Turret.Mine_Bronze || type_Turret == Type_Turret.Mine_Gold ||
             type_Turret == Type_Turret.Mine_Platinum || type_Turret == Type_Turret.Mine_Silver))
        {
            price = (int)(0.7f * price);
        }

        if (type_Character == Type_Character.Manager &&
            DataSaved.Get_Is_Unlock_Skill_2(type_Character))
        {
            price = (int)(0.85f * price);
        }

        if (type_Character == Type_Character.Robot_Cyborg &&
            DataSaved.Get_Is_Unlock_Skill_2(type_Character) &&
            type_Turret == Type_Turret.Energy_Tower)
        {
            price = (int)(0.7f * price);
        }

        if ((type_Character == Type_Character.Zues || type_Character == Type_Character.Vampire_Hunter) &&
            DataSaved.Get_Is_Unlock_Skill_2(type_Character) &&
            type_Turret == Type_Turret.Turret)
        {
            price = (int)(0.7f * price);
        }
        //updateofjura
        //Giảm giá súng đi 50%.

        if (type_Character == Type_Character.Onslaught && DataSaved.Get_Is_Unlock_Skill_2(type_Character))
        {
            if (type_Turret == Type_Turret.Turret || type_Turret == Type_Turret.Turret_Bed)
            {
                price = (int)(0.7f * price);
            }
        }


        if (price < 0)
        {
            price = 0;
        }

        return price;
    }

    public static int Get_Max_Number_Can_Builded(Type_Turret type_Turret, int number)
    {
        int output = number;

        if (type_Turret == Type_Turret.Repair_Station &&
            DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_6_Repair_Station_Add_Max_2))
        {
            output += 2;
        }
        else if (type_Turret == Type_Turret.Turret_Pierce)
        {
            if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_16_Turret_Peratation_Add_Max_2))
            {
                output += 4;
            }
            else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_7_Turret_Peratation_Add_Max_2))
            {
                output += 2;
            }
        }
        else if (type_Turret == Type_Turret.Turret)
        {
            if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_23_Turret_Add_Max_2))
            {
                output += 6;
            }
            else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_15_Turret_Add_Max_2
                     ))
            {
                output += 4;
            }
            else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_4_Turret_Add_Max_2))
            {
                output += 2;
            }
        }
        else if (type_Turret == Type_Turret.Turret_Pierce &&
                 DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_7_Turret_Peratation_Add_Max_2))
        {
            output += 2;
        }
        //


        //TODO moI THAY DOI GIOI HAN

        return output;
    }





    public static bool Check_Tut_Mission_7(Type_Player m_Type_Player)
    {
        return !DataSaved.Get_Is_Complete_Tutorial() &&
               DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story &&
               DataSaved.Get_Current_Loading_Level() == 0 &&
               DataSaved.Get_Index_Claimed_Mission_Tutorial() == 6 &&
               Player_Manager.Instance.Get_Data_Player(m_Type_Player).Get_Sum_Energy() >= 64;
    }

    public static Type_Pack Get_Pack_Sale(Type_Pack type_Pack)
    {
        switch (type_Pack)
        {

            case Type_Pack.Pack_Best_Seller: return Type_Pack.Gem_Best_Seller_Sale;
            case Type_Pack.Pack_Starter: return Type_Pack.Starter_Sale;
            case Type_Pack.Shield_Pack: return Type_Pack.Shield_Pack_Sale;
            case Type_Pack.Attack_Pack: return Type_Pack.Attack_Pack_Sale;
            case Type_Pack.Item_Pack: return Type_Pack.Item_Pack_Sale;
            case Type_Pack.Legend_Bundles: return Type_Pack.Legend_Bundles_Promotion_Sale;
            case Type_Pack.Epic_Bundles: return Type_Pack.Epic_Bundles_Promotion_Sale;
            case Type_Pack.Key_Bundles:
                if (DataSaved.Get_Key_Type_pack_Key_Bunddle_499() == true)
                {
                    return Type_Pack.Key_Bundles_Promotion499_Sale;
                }

                return Type_Pack.Key_Bundles_Promotion299_Sale;

            case Type_Pack.Common_Key_Bundles: return Type_Pack.Common_Key_Bundles_Sale;
            case Type_Pack.Rare_Key_Bundles: return Type_Pack.Rare_Key_Bundles_Sale;
            case Type_Pack.Legendary_Key_Bundles: return Type_Pack.Legendary_Key_Bundles_Sale;


            case Type_Pack.Character_Pack:
                if (DataSaved.Get_AB_IAP_Character_Pack())
                {
                    return Type_Pack.Character_Pack_Sale_B;
                }

                return Type_Pack.Character_Pack_Sale;


            case Type_Pack.SubWeeklyDeal:


                return Type_Pack.SubWeeklyDealSale;


            case Type_Pack.Pack_Remove_Ads:
                return Type_Pack.Pack_Remove_Ads_Sale;
            case Type_Pack.Pack_Gem_Small:
                return Type_Pack.Gem_Small_Sale;

            case Type_Pack.Pack_Gem_Normal:
                return Type_Pack.Gem_Normal_Sale;

            case Type_Pack.Pack_Gem_Big:
                return Type_Pack.Gem_Big_Sale;
            case Type_Pack.Pack_Gem_Huge:
                return Type_Pack.Gem_Pack_Huge_Sale;


            case Type_Pack.Pack_Remove_Ads_Huge:
                return Type_Pack.Gem_Pack_Huge_Sale;

            case Type_Pack.Pack_Remove_Ads_Normal:
                return Type_Pack.Gem_Pack_Normal_Sale;


        }

        return type_Pack;
    }



    public static bool Get_Is_Playing_Max_Level()
    {
        return
            (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story &&
             DataSaved.Get_Current_Loading_Level() >= DataSaved.Get_Level_Night_Story_Quest());
    }

    public static string Get_Name_Type_Level(Type_Level type_Level)
    {

        switch (type_Level)
        {
            case Type_Level.Easy: return "Easy";
            case Type_Level.Normal: return "Normal";
            case Type_Level.Hard: return "Hard";
            case Type_Level.Very_Hard: return "Very Hard";
            case Type_Level.Mad: return "Mad";
            case Type_Level.Crazy: return "Crazy";
        }

        return "Easy";
    }

    public static void Kill_Tween(Tween tween)
    {
        if (tween != null)
        {
            tween.Kill(false);
            tween = null;
        }
    }

    public static Type_Pack Convert_To_Type_Pack(Type_Character type_Character)
    {
        switch (type_Character)
        {
            case Type_Character.Calida: return Type_Pack.Character_Calida;
            case Type_Character.Eilif: return Type_Pack.Character_Eilif;
            case Type_Character.Raven: return Type_Pack.Character_Raven;
            case Type_Character.Sami: return Type_Pack.Character_Sami;
            case Type_Character.Vampire_Hunter: return Type_Pack.Character_VampireHunter;
        }

        return Type_Pack.None;
    }

    public static Type_Golem Get_Type_Golem(Type_Character type_Character)
    {
        switch (type_Character)
        {
            case Type_Character.Calida: return Type_Golem.Golem_Fire;

            case Type_Character.Eilif: return Type_Golem.Golem_Tree;
        }

        return Type_Golem.Golem_Fire;
    }


  
}