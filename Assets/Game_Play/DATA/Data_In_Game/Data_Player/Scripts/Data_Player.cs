using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Player", fileName = "Data_Player", order = 0)]
public class Data_Player : ScriptableObject
{
    [SerializeField] Type_Player type_Player;
    [SerializeField] Bool_Global_Variable m_Live_Data_Attacking;
    [SerializeField] Bool_Global_Variable m_Live_Data_Attacking_Door;
    [SerializeField] Bool_Global_Variable m_Live_Data_Die;
    [SerializeField] Bool_Global_Variable m_Live_Data_Enter_Room;
    [SerializeField] Bool_Global_Variable live_Data_Coin_Change;
    [SerializeField] Bool_Global_Variable live_Data_Energy_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Repair_Station_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Immortal_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Compass_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Bibble_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_ATM_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Electric_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Garlic_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Active_Skill_1;
    [SerializeField] Bool_Global_Variable m_Live_Data_Active_Skill_2;
    [SerializeField] Bool_Global_Variable m_Live_Data_Air_Conditioner_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Sum_Turret_Change;

    //updateofjura
    [SerializeField] Bool_Global_Variable m_Live_Data_Turret_Bed_Change;


    [SerializeField] Bool_Global_Variable m_Live_Data_Item_Support_Door_Protect_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Item_Support_Stun_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Item_Support_Speed_X2_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Item_Support_Meteorite_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Item_Support_Money_X2_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Check_Can_Active_Meteorite;
    [SerializeField] Bool_Global_Variable m_Live_Data_Turret_Penetation_Change;
    [SerializeField] Bool_Global_Variable m_Live_Data_Heal_Hp_Door_Change;
    [SerializeField] private Bool_Global_Variable m_Live_Data_Room_Attack;


    //updateofjura
    [SerializeField] Bool_Global_Variable m_Live_Data_Item_Safeguard_Door_Shield_Change;

    [SerializeField] int sum_Coin;
    [SerializeField] int sum_Energy;
    [SerializeField] int sum_Turret_Builded;
    [SerializeField] int sum_Energy_Tower_Builded;
    [SerializeField] int sum_Repair_Station_Builded;
    [SerializeField] int sum_Garlic_Builded;
    [SerializeField] int sum_Compass_Builded; // Tong so la ban/ radar ma nguoi choi da xay
    [SerializeField] int sum_Bibble_Builded; // Tong so Kinh thanh
    [SerializeField] int sum_ATM_Builded;
    [SerializeField] int sum_Electric_Builded;
    [SerializeField] int sum_Air_Conditioner_Builded;
    [SerializeField] int sum_Holy_Water_Builded;
    [SerializeField] int sum_Mirror_Builded;
    [SerializeField] bool immortal;

    //updateofjura
    [SerializeField] int sum_Turret_Bed_Builded;
    [SerializeField] int sum_Turret_Penetation_Builded;





    [SerializeField] Dictionary<int, Model_Turret_Player> m_All_Turret_Player = new Dictionary<int, Model_Turret_Player>();

    [Header("Read Only")]
    [SerializeField] List<Model_Turret_Player> m_All_Turret_Player_Test = new List<Model_Turret_Player>();

    #region ============= Get Live Data =============

    public Bool_Global_Variable Get_Live_Data_Coin_Change()
    {
        return live_Data_Coin_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Energy_Change()
    {
        return live_Data_Energy_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Repair_Station_Change()
    {
        return m_Live_Data_Repair_Station_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Immortal_Change()
    {
        return m_Live_Data_Immortal_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Compass_Change()
    {
        return m_Live_Data_Compass_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Bibble_Change()
    {
        return m_Live_Data_Bibble_Change;
    }

    public Bool_Global_Variable Get_Live_Data_ATM_Change()
    {
        return m_Live_Data_ATM_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Electric_Change()
    {
        return m_Live_Data_Electric_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Garlic_Change()
    {
        return m_Live_Data_Garlic_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Attacking_Change()
    {
        return m_Live_Data_Attacking;
    }


    public Bool_Global_Variable Get_Live_Data_Attacking_Door_Change()
    {
        return m_Live_Data_Attacking_Door;
    }

    public Bool_Global_Variable Get_Live_Data_Die_Change()
    {
        return m_Live_Data_Die;
    }

    public Bool_Global_Variable Get_Live_Data_Enter_Room()
    {
        return m_Live_Data_Enter_Room;
    }

    public Bool_Global_Variable Get_Live_Data_Active_Skill_1()
    {
        return m_Live_Data_Active_Skill_1;
    }

    public Bool_Global_Variable Get_Live_Data_Active_Skill_2()
    {
        return m_Live_Data_Active_Skill_2;
    }

    public Bool_Global_Variable Get_Live_Data_Air_Conditioner_Change()
    {
        return m_Live_Data_Air_Conditioner_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Live_Data_Item_Support_Door_Protect()
    {
        return m_Live_Data_Item_Support_Door_Protect_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Live_Heal_Hp_Door()
    {
        return m_Live_Data_Heal_Hp_Door_Change;
    }

    //updateofjura
    public Bool_Global_Variable Get_Live_Data_Live_Data_Safeguatd_Door_Shield()
    {
        return m_Live_Data_Item_Safeguard_Door_Shield_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Item_Support_Meteorite()
    {
        return m_Live_Data_Item_Support_Meteorite_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Item_Support_Money_X2()
    {
        return m_Live_Data_Item_Support_Money_X2_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Item_Support_Speed_X2()
    {
        return m_Live_Data_Item_Support_Speed_X2_Change;
    }

    public Bool_Global_Variable Get_Live_Data_Item_Support_Stun()
    {
        return m_Live_Data_Item_Support_Stun_Change;
    }

    public void Notify_Attacking(bool is_Attacking)
    {
        if (m_Live_Data_Attacking != null)
        {
            m_Live_Data_Attacking.Value = is_Attacking;
            Debug.LogError(" skill Notify_Attacking " + type_Player);
        }
    }

    public void Notify_Attacking_Door(bool is_Attacking)
    {
        if (m_Live_Data_Attacking_Door)
        {
            m_Live_Data_Attacking_Door.Value = is_Attacking;
        }
    }

    public void Notify_Check_Can_Active_Meteorite(bool is_Attacking)
    {
        if (m_Live_Data_Check_Can_Active_Meteorite)
        {
            m_Live_Data_Check_Can_Active_Meteorite.Value = is_Attacking;
        }
    }

    public void Notify_Die(bool is_Die)
    {
        if (m_Live_Data_Die)
        {
            m_Live_Data_Die.Value = is_Die;
        }
    }

    public void Notify_Enter_Room(bool is_Enter_Room)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Enter_Room)
        {
            m_Live_Data_Enter_Room.Value = is_Enter_Room;
        }
    }

    public void Notify_Active_Skill_1(bool is_Active)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Active_Skill_1)
        {
            m_Live_Data_Active_Skill_1.Value = is_Active;
        }
    }

    public void Notify_Active_Skill_2(bool is_Active)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Active_Skill_2)
        {
            m_Live_Data_Active_Skill_2.Value = is_Active;
        }
    }

    public void Notify_Item_Support_Door_Protect(bool is_Active)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Item_Support_Door_Protect_Change)
        {
            m_Live_Data_Item_Support_Door_Protect_Change.Value = is_Active;
        }
    }

    //updateofjura
    public void Notify_Item_Safeguard_Door_Shield(bool is_Active)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Item_Safeguard_Door_Shield_Change)
        {
            m_Live_Data_Item_Safeguard_Door_Shield_Change.Value = is_Active;
        }
    }


    public void Notify_Heal_Hp_Door(bool is_Active)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Heal_Hp_Door_Change)
        {
            m_Live_Data_Heal_Hp_Door_Change.Value = is_Active;
        }
    }




    public void Notify_Item_Support_Meteorite(bool is_Active)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Item_Support_Meteorite_Change)
        {
            m_Live_Data_Item_Support_Meteorite_Change.Value = is_Active;
        }
    }

    public void Notify_Item_Support_Money_X2(bool is_Active)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Item_Support_Money_X2_Change)
        {
            m_Live_Data_Item_Support_Money_X2_Change.Value = is_Active;
        }
    }

    public void Notify_Item_Support_Speed_X2(bool is_Active)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Item_Support_Speed_X2_Change)
        {
            m_Live_Data_Item_Support_Speed_X2_Change.Value = is_Active;
        }
    }

    public void Notify_Item_Support_Stun(bool is_Active)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Item_Support_Stun_Change)
        {
            m_Live_Data_Item_Support_Stun_Change.Value = is_Active;
        }
    }

    public void Notify_Sum_Turret_Change(bool is_Active)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Sum_Turret_Change)
        {
            m_Live_Data_Sum_Turret_Change.Value = is_Active;
        }
    }

    #endregion

    public void Reset_Data()
    {
        sum_Coin = 1000;
        sum_Energy = 1000;
        sum_Turret_Builded = 0;
        sum_Repair_Station_Builded = 0;
        sum_Energy_Tower_Builded = 0;
        sum_Garlic_Builded = 0;
        sum_Compass_Builded = 0;
        sum_ATM_Builded = 0;
        sum_Electric_Builded = 0;
        sum_Air_Conditioner_Builded = 0;
        sum_Holy_Water_Builded = 0;
        sum_Mirror_Builded = 0;
        sum_Bibble_Builded = 0;
        //updateofjura
        sum_Turret_Bed_Builded = 0;
        sum_Turret_Penetation_Builded = 0;
        immortal = false;
        m_All_Turret_Player.Clear();

        Notify_Die(false);
        Notify_Enter_Room(false);
        Notify_Coin_Change();
        Notify_Energy_Change();

        Notify_Item_Support_Meteorite(false);
        Notify_Item_Support_Door_Protect(false);
        Notify_Item_Support_Speed_X2(false);
        Notify_Item_Support_Money_X2(false);
        Notify_Item_Support_Stun(false);
        Notify_Check_Can_Active_Meteorite(false);

        //updateofjura
        Notify_Item_Safeguard_Door_Shield(false);
        Notify_Heal_Hp_Door(false);
    }

    #region =============== Config Turret_Builded =======================

    public int Get_Sum_Turret_Builded()
    {
        return sum_Turret_Builded;
    }

    public void Increase_Sum_Turret_Builded()
    {
        sum_Turret_Builded += 1;
        Notify_Sum_Turret_Change(true);
    }

    public void Decrease_Sum_Turret_Builded()
    {
        sum_Turret_Builded -= 1;
        if (sum_Turret_Builded < 0)
        {
            sum_Turret_Builded = 0;
        }
        Notify_Sum_Turret_Change(false);
    }

    #endregion

    #region =============== Config Repair_Station_Builded =======================

    private void Notify_Data_Repair_Station_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Repair_Station_Change)
        {
            m_Live_Data_Repair_Station_Change.Value = true;
        }
    }

    public int Get_Sum_Repair_Station_Builded()
    {
        return sum_Repair_Station_Builded;
    }

    public void Increase_Sum_Repair_Station_Builded()
    {
        sum_Repair_Station_Builded += 1;
        Notify_Data_Repair_Station_Change();
    }

    public void Decrease_Sum_Repair_Station_Builded()
    {
        sum_Repair_Station_Builded -= 1;
        if (sum_Repair_Station_Builded < 0)
        {
            sum_Repair_Station_Builded = 0;
        }
        Notify_Data_Repair_Station_Change();
    }

    #endregion

    #region =============== Config Energy Tower =======================

    public int Get_Sum_Energy_Tower_Builded()
    {
        return sum_Energy_Tower_Builded;
    }

    public void Increase_Sum_Energy_Tower_Builded()
    {
        sum_Energy_Tower_Builded += 1;
    }

    public void Decrease_Sum_Energy_Tower_Builded()
    {
        sum_Energy_Tower_Builded -= 1;
        if (sum_Energy_Tower_Builded < 0)
        {
            sum_Energy_Tower_Builded = 0;
        }
    }

    #endregion

    #region =============== Config Turret Player =======================

    public bool Check_Has_Turret(Type_Turret type_Turret)
    {
        foreach (var item in m_All_Turret_Player.Values)
        {
            if (item.type_Turret == type_Turret)
            {
                return true;
            }
        }
        return false;
    }

    public void Remove_Turret(int id)
    {
        if (m_All_Turret_Player.ContainsKey(id))
        {
            m_All_Turret_Player.Remove(id);
        }

        Update_Read_Only_Test();
    }

    public void Add_Turret(int id, Model_Turret_Player model_Turret_Player)
    {
        if (!m_All_Turret_Player.ContainsKey(id))
        {
            m_All_Turret_Player.Add(id, model_Turret_Player);
        }
        else
        {
            m_All_Turret_Player[id] = model_Turret_Player;
        }

        Update_Read_Only_Test();
    }

    public int Get_Level_Turret(int id_Turret)
    {
        if (m_All_Turret_Player.ContainsKey(id_Turret))
        {
            return m_All_Turret_Player[id_Turret].level;
        }
        return -1;
    }

    public int Get_Level_Turret(Type_Turret type_Turret)
    {
        int max_level = 0;
        foreach (var item in m_All_Turret_Player.Values)
        {
            if (item.type_Turret == type_Turret && item.level > max_level)
            {
                max_level = item.level;
            }
        }
        return max_level;
    }

    private int Get_Total_Builded(Type_Turret type_Turret)
    {
        int total = 0;
        foreach (var item in m_All_Turret_Player.Values)
        {
            if (item.type_Turret == type_Turret)
            {
                total += 1;
            }
        }
        return total;
    }

    private void Update_Read_Only_Test()
    {
        m_All_Turret_Player_Test.Clear();
        foreach (var item in m_All_Turret_Player.Values)
        {
            m_All_Turret_Player_Test.Add(item);
        }
    }

    #endregion

    #region ============= Config Coin =============

    public int Get_Sum_Coin()
    {
        return sum_Coin;
    }

    public void Increase_Coin(int coin = 1, bool is_Notify = true)
    {
        //Debug.Log("Data_Player : Increase_Coin " + type_Player);
        sum_Coin += coin;
        if (is_Notify)
        {
            Notify_Coin_Change();
        }
    }

    public void Update_UI_Coin()
    {
        if (Player_Manager.Instance)
        {
            Player_Manager.Instance.Update_UI_Coin(type_Player);
        }
    }

    public void Decrease_Coin(int coin)
    {
        if (sum_Coin < 0) return;
        sum_Coin -= coin;
        if (sum_Coin < 0)
        {
            sum_Coin = 0;
        }
        Notify_Coin_Change();
    }

    private void Notify_Coin_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (live_Data_Coin_Change)
        {
            live_Data_Coin_Change.Value = true;
        }

        if (Player_Manager.Instance)
        {
            Player_Manager.Instance.Update_UI_Coin(type_Player);
        }
    }

    #endregion

    #region ============= Config Energy =============

    public int Get_Sum_Energy()
    {
        return sum_Energy;
    }

    public void Increase_Energy(int Energy = 1, bool is_Notify = true)
    {
        sum_Energy += Energy;
        if (is_Notify)
        {
            Notify_Energy_Change();
        }
    }

    public void Decrease_Energy(int Energy)
    {
        if (sum_Energy < 0) return;
        sum_Energy -= Energy;
        if (sum_Energy < 0)
        {
            sum_Energy = 0;
        }
        Notify_Energy_Change();
    }

    private void Notify_Energy_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (live_Data_Energy_Change)
        {
            live_Data_Energy_Change.Value = true;
        }

        if (Player_Manager.Instance)
        {
            Player_Manager.Instance.Update_UI_Energy(type_Player);
        }

    }

    #endregion

    #region =============== Config Immortal - Bat tu =======================

    public bool Get_Is_Immortal()
    {
        return immortal;
    }

    public void Set_Immortal(bool is_Immortal)
    {
        //Debug.Log("..... Set_Immortal : " + is_Immortal + " | " + Time.time);

        immortal = is_Immortal;

        if (Game_Controller.Get_Is_End_Level()) return;

        if (m_Live_Data_Immortal_Change)
        {
            m_Live_Data_Immortal_Change.Value = true;
        }
    }

    #endregion

    #region =============== Config Garlic =======================

    private void Notify_Data_Garlic_Builded_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Garlic_Change)
        {
            m_Live_Data_Garlic_Change.Value = true;
        }
    }

    public void Increase_Sum_Garlic_Builded()
    {
        sum_Garlic_Builded += 1;
        Notify_Data_Garlic_Builded_Change();
    }

    public void Decrease_Sum_Garlic_Builded()
    {
        sum_Garlic_Builded -= 1;
        if (sum_Garlic_Builded < 0)
        {
            sum_Garlic_Builded = 0;
        }
        Notify_Data_Garlic_Builded_Change();
    }

    public int Get_Sum_Garlic_Builded()
    {
        return sum_Garlic_Builded;
    }

    #endregion

    #region =============== Config Compass_Builded =======================

    private void Notify_Data_Compass_Builded_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Compass_Change)
        {
            m_Live_Data_Compass_Change.Value = true;
        }
    }

    public int Get_Sum_Compass_Builded()
    {
        return sum_Compass_Builded;
    }

    public void Increase_Sum_Compass_Builded()
    {
        sum_Compass_Builded += 1;
        Notify_Data_Compass_Builded_Change();
    }

    public void Decrease_Sum_Compass_Builded()
    {
        sum_Compass_Builded -= 1;
        if (sum_Compass_Builded < 0)
        {
            sum_Compass_Builded = 0;
        }
        Notify_Data_Compass_Builded_Change();
    }

    #endregion

    #region =============== Config Bibble_Builded =======================

    private void Notify_Data_Bibble_Builded_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Bibble_Change)
        {
            m_Live_Data_Bibble_Change.Value = true;
        }
    }

    public int Get_Sum_Bibble_Builded()
    {
        return sum_Bibble_Builded;
    }

    public void Increase_Sum_Bibble_Builded()
    {
        sum_Bibble_Builded += 1;
        Notify_Data_Bibble_Builded_Change();
    }

    public void Decrease_Sum_Bibble_Builded()
    {
        sum_Bibble_Builded -= 1;
        if (sum_Bibble_Builded < 0)
        {
            sum_Bibble_Builded = 0;
        }
        Notify_Data_Bibble_Builded_Change();
    }

    #endregion


    //xekotoby



    #region =============== Config Repair_Station_Builded =======================

    private void Notify_Data_Turret_Penetation_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Turret_Penetation_Change)
        {
            m_Live_Data_Turret_Penetation_Change.Value = true;
        }
    }

    public int Get_Sum_Turret_Penetation_Builded()
    {
        return sum_Turret_Penetation_Builded;
    }

    public void Increase_Sum_Turret_Penetation_Builded()
    {
        sum_Turret_Penetation_Builded += 1;
        Notify_Data_Turret_Penetation_Change();
    }

    public void Decrease_Sum_Turret_Penetation_Builded()
    {
        sum_Turret_Penetation_Builded -= 1;
        if (sum_Turret_Penetation_Builded < 0)
        {
            sum_Turret_Penetation_Builded = 0;
        }
        Notify_Data_Turret_Penetation_Change();
    }

    #endregion




    //updateofjura
    //thong bao turret_Bed
    private void Notify_Data_Turret_Bed_Builded_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Turret_Bed_Change)
        {
            m_Live_Data_Turret_Bed_Change.Value = true;
        }
    }


    public int Get_Sum_Turret_Bed_Builded()
    {
        return sum_Turret_Bed_Builded;
    }
    public void Increase_Sum_Turret_Bed_Builded()
    {
        sum_Turret_Bed_Builded += 1;
        Notify_Data_Turret_Bed_Builded_Change();

    }
    public void Decrease_Sum_Turret_Bed_Builded()
    {
        sum_Turret_Bed_Builded -= 1;
        if (sum_Turret_Bed_Builded < 0)
        {
            sum_Turret_Bed_Builded = 0;
        }
        Notify_Data_Bibble_Builded_Change();
    }







    #region =============== Config ATM_Builded =======================

    private void Notify_Data_ATM_Builded_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_ATM_Change)
        {
            m_Live_Data_ATM_Change.Value = true;
        }
    }

    public int Get_Sum_ATM_Builded()
    {
        return sum_ATM_Builded;
    }

    public void Increase_Sum_ATM_Builded()
    {
        sum_ATM_Builded += 1;
        Notify_Data_ATM_Builded_Change();
    }

    public void Decrease_Sum_ATM_Builded()
    {
        sum_ATM_Builded -= 1;
        if (sum_ATM_Builded < 0)
        {
            sum_ATM_Builded = 0;
        }
        Notify_Data_ATM_Builded_Change();
    }

    #endregion

    #region =============== Config Electric_Builded =======================

    private void Notify_Data_Electric_Builded_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Electric_Change)
        {
            m_Live_Data_Electric_Change.Value = true;
        }
    }

    public int Get_Sum_Electric_Builded()
    {
        return sum_Electric_Builded;
    }

    public void Increase_Sum_Electric_Builded()
    {
        sum_Electric_Builded += 1;
        Notify_Data_Electric_Builded_Change();
    }

    public void Decrease_Sum_Electric_Builded()
    {
        sum_Electric_Builded -= 1;
        if (sum_Electric_Builded < 0)
        {
            sum_Electric_Builded = 0;
        }
        Notify_Data_Electric_Builded_Change();
    }

    #endregion

    #region =============== Config Air_Conditioner_Builded =======================

    private void Notify_Data_Air_Conditioner_Change()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Live_Data_Air_Conditioner_Change)
        {
            m_Live_Data_Air_Conditioner_Change.Value = true;
        }
    }

    public int Get_Sum_Air_Conditioner_Builded()
    {
        return sum_Air_Conditioner_Builded;
    }

    public void Increase_Sum_Air_Conditioner_Builded()
    {
        sum_Air_Conditioner_Builded += 1;
        Notify_Data_Air_Conditioner_Change();
    }

    public void Decrease_Sum_Air_Conditioner_Builded()
    {
        sum_Air_Conditioner_Builded -= 1;
        if (sum_Air_Conditioner_Builded < 0)
        {
            sum_Air_Conditioner_Builded = 0;
        }
        Notify_Data_Air_Conditioner_Change();
    }

    #endregion

    #region =============== Config Holy_Water_Builded =======================

    public int Get_Sum_Holy_Water_Builded()
    {
        return sum_Holy_Water_Builded;
    }

    public void Increase_Sum_Holy_Water_Builded()
    {
        sum_Holy_Water_Builded += 1;
    }

    public void Decrease_Sum_Holy_Water_Builded()
    {
        sum_Holy_Water_Builded -= 1;
        if (sum_Holy_Water_Builded < 0)
        {
            sum_Holy_Water_Builded = 0;
        }
    }

    #endregion

    #region =============== Config Mirror_Builded =======================

    public int Get_Sum_Mirror_Builded()
    {
        return sum_Mirror_Builded;
    }

    public void Increase_Sum_Mirror_Builded()
    {
        sum_Mirror_Builded += 1;
    }

    public void Decrease_Sum_Mirror_Builded()
    {
        sum_Mirror_Builded -= 1;
        if (sum_Mirror_Builded < 0)
        {
            sum_Mirror_Builded = 0;
        }
    }

    #endregion

    #region ************************************ Data AI ************************************************

    [Header("*************** Data AI ***************")]
    [SerializeField] bool m_Is_AI;
    [SerializeField] bool m_Is_Using_Skin_2;
    [SerializeField] Type_Character m_Type_Character;
    [SerializeField] int m_Phase_Curr;
    [SerializeField] float m_Random_Target;
    [SerializeField] Type_Turret m_Target_Build_Or_Update;
    [SerializeField] Model_Price m_Price_Buy_Or_Upgrade;
    [SerializeField] Status_Action_Turrert m_Status_Action;
    [SerializeField] int m_Max_Turret_Can_Build = 3;

    [Space(30)]
    public List<Model_Condition_Phase_Clone> m_All_Condition = new List<Model_Condition_Phase_Clone>();
    public List<Model_Ratio_Turret_Clone> m_All_Ratio_Turret = new List<Model_Ratio_Turret_Clone>();

    #region ---------------- Get - Set ------------------------
    public Type_Character Get_Type_Character()
    {
        return m_Type_Character;
    }

    public int Get_Max_Turret_Can_Build()
    {
        return m_Max_Turret_Can_Build;
    }

    //xet cho tung nguoi chs // ca AI
    public void Set_Max_Turret_Can_Build(int m_Max)
    {
        if (m_Max <= 0)
        {
            m_Max = 3;
        }
        m_Max_Turret_Can_Build = m_Max;
        if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_23_Turret_Add_Max_2))
        {
            m_Max_Turret_Can_Build += 3;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_13_Turret_Add_Max_2))
        {
            m_Max_Turret_Can_Build += 2;
        }
        else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_15_Turret_Add_Max_2))
        {
            m_Max_Turret_Can_Build += 1;
        }
    }

    public bool Get_Is_AI()
    {
        return m_Is_AI;
    }

    public void Reset_Target_Build()
    {
        m_Target_Build_Or_Update = Type_Turret.None;
    }

    public Type_Turret Get_Target_Build_Or_Update()
    {
        return m_Target_Build_Or_Update;
    }

    public Status_Action_Turrert Get_Status_Action_Turrert()
    {
        return m_Status_Action;
    }

    public bool Get_Is_Use_Skin_2()
    {
        return m_Is_Using_Skin_2;
    }

    public void Set_Type_Character(Type_Character type_Character, Type_Player _type_Player, bool is_Use_Skin_2)
    {
        m_Is_Using_Skin_2 = is_Use_Skin_2;
        m_Is_AI = _type_Player != type_Player;
        m_Phase_Curr = 0;
        m_Type_Character = type_Character;

        Update_Data_Phase();
    }

    #endregion

    private int m_Temp_min_Number_Builded;
    private int Get_Min_Number_Builded(Model_Condition_Phase_Clone item)
    {
        m_Temp_min_Number_Builded = item.min_Number_Builded;

        if ((item.type_Turret == Type_Turret.Turret || item.type_Turret == Type_Turret.Energy_Tower))
        {
            if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_23_Turret_Add_Max_2))
            {
                m_Temp_min_Number_Builded += 3;
            }
            else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_13_Turret_Add_Max_2))
            {
                m_Temp_min_Number_Builded += 2;
            }
            else if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_15_Turret_Add_Max_2))
            {
                m_Temp_min_Number_Builded += 1;
            }

            if (m_Temp_min_Number_Builded > m_Max_Turret_Can_Build)
            {
                m_Temp_min_Number_Builded = m_Max_Turret_Can_Build;
            }
        }
        return m_Temp_min_Number_Builded;
    }

    #region ---------------------- Check_To_Next_Phase ----------------------

    bool m_Tmp_Is_Next_Phase;
    int m_Min_Number_Builded_In_Next_Phase;
    int m_Count_Num_Correct_Next_Phase;
    public void Check_To_Next_Phase()
    {
        if (m_Phase_Curr < 5)
        {
            if (m_All_Condition.Count > 0)
            {
                m_Tmp_Is_Next_Phase = false;
                if (m_All_Condition.Count == 1 && m_All_Condition[0].type_Turret == Type_Turret.None)
                {
                    // Case: Xây được 1 tháp bất kỳ			
                    m_Min_Number_Builded_In_Next_Phase = Get_Min_Number_Builded(m_All_Condition[0]);

                    for (int i = 0; i < m_All_Ratio_Turret.Count; i++)
                    {
                        if (Get_Total_Builded(m_All_Ratio_Turret[i].type_Turret) >= m_Min_Number_Builded_In_Next_Phase)
                        {
                            m_Tmp_Is_Next_Phase = true;
                            break;
                        }
                    }
                }
                else
                {
                    m_Count_Num_Correct_Next_Phase = 0;

                    for (int i = 0; i < m_All_Condition.Count; i++)
                    {
                        m_Min_Number_Builded_In_Next_Phase = Get_Min_Number_Builded(m_All_Condition[i]);
                        if (m_Min_Number_Builded_In_Next_Phase > 0)
                        {
                            if (Get_Total_Builded(m_All_Condition[i].type_Turret) >= m_Min_Number_Builded_In_Next_Phase)
                            {
                                m_Count_Num_Correct_Next_Phase += 1;
                            }
                            else
                            {
                                break;
                            }
                        }
                        else
                        {
                            if (Get_Level_Turret(m_All_Condition[i].type_Turret) >= (m_All_Condition[i].min_Level - 1))
                            {
                                m_Count_Num_Correct_Next_Phase += 1;
                            }
                            else
                            {
                                break;
                            }
                        }
                    }

                    if (m_Count_Num_Correct_Next_Phase >= m_All_Condition.Count)
                    {
                        m_Tmp_Is_Next_Phase = true;
                    }
                }

                if (m_Tmp_Is_Next_Phase)
                {
                    m_Phase_Curr += 1;
                    Update_Data_Phase();
                }
            }
        }
    }

    #endregion

    #region ---------------------- Update_Data_Phase ----------------------

    Model_Phase_Character m_Tmp_Model_Phase_Character;

    private void Update_Data_Phase()
    {
        m_All_Condition.Clear();
        m_All_Ratio_Turret.Clear();

        m_Tmp_Model_Phase_Character = Data_In_Game.Instance.Get_Data_AI_Character_Manager().Get_Data_Phase(m_Type_Character, m_Phase_Curr);

        for (int i = 0; i < m_Tmp_Model_Phase_Character.m_All_Condition.Count; i++)
        {
            Model_Condition_Phase_Clone model_Condition_Phase = new Model_Condition_Phase_Clone();
            model_Condition_Phase.min_Level = m_Tmp_Model_Phase_Character.m_All_Condition[i].min_Level;
            model_Condition_Phase.type_Turret = m_Tmp_Model_Phase_Character.m_All_Condition[i].type_Turret;
            model_Condition_Phase.min_Number_Builded = m_Tmp_Model_Phase_Character.m_All_Condition[i].min_Number_Builded;

            m_All_Condition.Add(model_Condition_Phase);
        }

        for (int i = 0; i < m_Tmp_Model_Phase_Character.m_All_Ratio_Turret.Count; i++)
        {
            Model_Ratio_Turret_Clone model_Ratio_Turret = new Model_Ratio_Turret_Clone();
            model_Ratio_Turret.type_Turret = m_Tmp_Model_Phase_Character.m_All_Ratio_Turret[i].type_Turret;
            model_Ratio_Turret.ratio = m_Tmp_Model_Phase_Character.m_All_Ratio_Turret[i].ratio;
            model_Ratio_Turret.turret_Receive_Ratio = m_Tmp_Model_Phase_Character.m_All_Ratio_Turret[i].turret_Receive_Ratio;

            m_All_Ratio_Turret.Add(model_Ratio_Turret);
        }

        Update_Target_Build_Or_Upgrade();

        Update_Price_Target_Build_Or_Upgrade();
    }

    #endregion

    public void Start_Get_New_Target()
    {
        Update_Target_Build_Or_Upgrade();

        Update_Price_Target_Build_Or_Upgrade();
    }

    #region ---------------------- Update_Target_Build_Or_Upgrade ----------------------

    float m_Tmp_Curr_Ratio;
    Model_Info_Turret m_Tmp_Data_Info;
    Type_Turret m_Tmp_Turret_Receive_Ratio;

    private void Update_Target_Build_Or_Upgrade()
    {
        m_Random_Target = Random.Range(1f, 99f);

        m_Tmp_Curr_Ratio = 0f;
        for (int i = 0; i < m_All_Ratio_Turret.Count; i++)
        {
            m_Tmp_Curr_Ratio += m_All_Ratio_Turret[i].ratio;
            if (m_Random_Target < m_Tmp_Curr_Ratio)
            {
                m_Target_Build_Or_Update = m_All_Ratio_Turret[i].type_Turret;

                if ((m_Phase_Curr == 0 || m_Phase_Curr == 1) && Data_In_Game.Instance)
                {
                    if (m_Tmp_Data_Info == null ||
                        !(m_Tmp_Data_Info.type_Turret == m_Target_Build_Or_Update && m_Tmp_Data_Info.level == Get_Level_Turret(m_Target_Build_Or_Update) + 1))
                    {
                        if (m_Type_Character == Type_Character.Onslaught && sum_Turret_Builded == 0)
                        {
                            m_Tmp_Data_Info = Data_In_Game.Instance.Get_Data_Info_Turret_Manager().
                                Get_Data_Info_Turret(m_Target_Build_Or_Update, Get_Level_Turret(m_Target_Build_Or_Update) + 1);

                            //updateofjura

                        }
                        else
                        {
                            m_Tmp_Data_Info = Data_In_Game.Instance.Get_Data_Info_Turret_Manager()
                           .Get_Data_Info_Turret(m_Target_Build_Or_Update, Get_Level_Turret(m_Target_Build_Or_Update) + 1);
                        }

                    }

                    if (m_Tmp_Data_Info.price_Upgrades.price_Energy > 0 && Get_Sum_Energy() <= 0)
                    {
                        m_Target_Build_Or_Update = m_Phase_Curr == 0 ? Type_Turret.Bed : Type_Turret.Energy_Tower;
                    }
                }

                m_Tmp_Turret_Receive_Ratio = m_All_Ratio_Turret[i].turret_Receive_Ratio;
                // Tranfer ratio
                if (m_Tmp_Turret_Receive_Ratio == Type_Turret.None)
                {
                    var tmp_turret_Receive_Ratio = Check_Turret_In_Condition(m_Target_Build_Or_Update);
                    if (tmp_turret_Receive_Ratio != Type_Turret.None)
                    {
                        m_Tmp_Turret_Receive_Ratio = tmp_turret_Receive_Ratio;
                    }
                }

                if (m_Tmp_Turret_Receive_Ratio != Type_Turret.None)
                {
                    var tmp_turret_Receive_Ratio = Check_Turret_In_Condition(m_Tmp_Turret_Receive_Ratio);
                    if (tmp_turret_Receive_Ratio != Type_Turret.None)
                    {
                        m_Tmp_Turret_Receive_Ratio = tmp_turret_Receive_Ratio;
                    }

                    // Start Tranfer Ratio
                    for (int k = 0; k < m_All_Ratio_Turret.Count; k++)
                    {
                        if (m_All_Ratio_Turret[k].type_Turret == m_Tmp_Turret_Receive_Ratio)
                        {
                            m_All_Ratio_Turret[k].ratio += m_All_Ratio_Turret[i].ratio;
                        }
                        else if (m_All_Ratio_Turret[k].type_Turret == m_Target_Build_Or_Update)
                        {
                            m_All_Ratio_Turret[k].ratio = 0f;
                        }
                    }
                }

                break;
            }
        }
    }

    #endregion

    #region ---------------------- Update_Price_Target_Build_Or_Upgrade ----------------------

    Data_Info_Turret_Manager m_Tmp_data_Info_Turret_Manager;
    Model_Info_Turret m_Tmp_Info_Turret_Update_Price;
    int m_Tmp_Level_Turret;
    int m_Tmp_Max_Turret_Can_Build;

    private void Update_Price_Target_Build_Or_Upgrade()
    {
        //updateofjura



        m_Tmp_data_Info_Turret_Manager = Data_In_Game.Instance.Get_Data_Info_Turret_Manager();

        m_Tmp_Level_Turret = Get_Level_Turret(m_Target_Build_Or_Update);

        m_Status_Action = Status_Action_Turrert.Buy;

        m_Tmp_Max_Turret_Can_Build = m_Max_Turret_Can_Build;

        if ((m_Target_Build_Or_Update == Type_Turret.Turret || m_Target_Build_Or_Update == Type_Turret.Energy_Tower))
        {
            int min_Number_Build_Condition = Check_Turret_In_Condition_2(m_Target_Build_Or_Update);
            if (min_Number_Build_Condition > 0 && m_Tmp_Max_Turret_Can_Build < min_Number_Build_Condition)
            {
                m_Tmp_Max_Turret_Can_Build = min_Number_Build_Condition;
            }
        }

        if (Check_Has_Turret(m_Target_Build_Or_Update))
        {
            if ((m_Target_Build_Or_Update != Type_Turret.Turret && m_Target_Build_Or_Update != Type_Turret.Energy_Tower) ||
                (m_Target_Build_Or_Update == Type_Turret.Turret && sum_Turret_Builded > m_Tmp_Max_Turret_Can_Build) ||
                (m_Target_Build_Or_Update == Type_Turret.Energy_Tower && sum_Energy_Tower_Builded > m_Tmp_Max_Turret_Can_Build))
            {
                m_Status_Action = Status_Action_Turrert.Upgrade;
                m_Tmp_Level_Turret += 1;
            }
        }

        if (m_Tmp_Level_Turret <= 0 && (m_Target_Build_Or_Update == Type_Turret.Bed || m_Target_Build_Or_Update == Type_Turret.Door))
        {
            m_Status_Action = Status_Action_Turrert.Upgrade;
            m_Tmp_Level_Turret += 1;
        }

        if (m_Status_Action == Status_Action_Turrert.Buy && (m_Target_Build_Or_Update == Type_Turret.Turret || m_Target_Build_Or_Update == Type_Turret.Energy_Tower))
        {
            m_Tmp_Level_Turret = 0;
        }

        if (m_Tmp_Info_Turret_Update_Price == null ||
            !(m_Tmp_Info_Turret_Update_Price.type_Turret == m_Target_Build_Or_Update && m_Tmp_Info_Turret_Update_Price.level == m_Tmp_Level_Turret))
        {
            m_Tmp_Info_Turret_Update_Price = m_Tmp_data_Info_Turret_Manager.Get_Data_Info_Turret(m_Target_Build_Or_Update, m_Tmp_Level_Turret);
        }

        if (m_Status_Action == Status_Action_Turrert.Upgrade && m_Tmp_Info_Turret_Update_Price.requirement_Upgrades != null)
        {
            if (!My_Utils.Check_Requirement(type_Player, m_Tmp_Info_Turret_Update_Price.requirement_Upgrades))
            {
                m_Target_Build_Or_Update = m_Tmp_Info_Turret_Update_Price.requirement_Upgrades.type_Turret;
                Update_Price_Target_Build_Or_Upgrade();
                return;
            }
        }

        m_Price_Buy_Or_Upgrade = m_Tmp_Info_Turret_Update_Price.price_Upgrades;
    }

    #endregion

    private int Check_Turret_In_Condition_2(Type_Turret type_Turret)
    {
        if (m_All_Condition.Count > 0)
        {
            for (int i = 0; i < m_All_Condition.Count; i++)
            {
                if (m_All_Condition[i].type_Turret == type_Turret)
                {
                    return m_All_Condition[i].min_Number_Builded;
                }
            }
        }
        return -1;
    }

    Model_Condition_Phase_Clone m_Tmp_Item_Conditions;
    bool is_Exist_In_Condition;
    int m_Tmp_Min_Number_Builded_In_Condition;

    private Type_Turret Check_Turret_In_Condition(Type_Turret type_Turret)
    {
        if (m_All_Condition.Count > 0)
        {
            is_Exist_In_Condition = false;
            for (int i = 0; i < m_All_Condition.Count; i++)
            {
                m_Tmp_Item_Conditions = m_All_Condition[i];
                if (is_Exist_In_Condition)
                {
                    return m_Tmp_Item_Conditions.type_Turret;
                }

                if (m_Tmp_Item_Conditions.type_Turret == type_Turret)
                {
                    m_Tmp_Min_Number_Builded_In_Condition = Get_Min_Number_Builded(m_Tmp_Item_Conditions);
                    if (m_Tmp_Min_Number_Builded_In_Condition > 0)
                    {
                        if (Get_Total_Builded(type_Turret) >= m_Tmp_Min_Number_Builded_In_Condition - 1)
                        {
                            is_Exist_In_Condition = true;
                        }
                    }
                    else
                    {
                        if (Get_Level_Turret(type_Turret) >= m_Tmp_Item_Conditions.min_Level - 1)
                        {
                            is_Exist_In_Condition = true;
                        }
                    }
                }
            }
        }
        return Type_Turret.None;
    }

    #endregion
}
