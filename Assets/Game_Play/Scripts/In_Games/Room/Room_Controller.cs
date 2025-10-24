using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

using System.Collections;
using Xekotoby;

public class Room_Controller : MonoBehaviour
{
    bool m_Has_Player;
   [SerializeField] Bool_Global_Variable m_Live_Data_Index_Claimed_Mission_Tutorial;
   [SerializeField] Bool_Global_Variable m_Live_Data_Can_Build_Crucific_Tutorial;
    [SerializeField] Level_Controller m_Level_Controller;
    [SerializeField] Room_Data_Loader m_Room_Data_Loader;
    [SerializeField] Type_Player m_Player_Owner = Type_Player.None;
    [SerializeField] Door_Controller m_Door;
    [SerializeField] Bed_Controller m_Bed;
    public Data_Player data_Player;
    [SerializeField] Transform m_Pos_Bound_Top_Right;
    [SerializeField] Transform m_Pos_Bound_Bottom_Left;
    [SerializeField] List<Transform> m_All_Location_Of_Turret_AI = new List<Transform>();

    [SerializeField] List<Turret_Controller> m_All_Turret_In_Room = new List<Turret_Controller>();
    [SerializeField] List<Energy_Tower_Controller> m_All_Energy_Tower_In_Room = new List<Energy_Tower_Controller>();
    [SerializeField] List<Trap_Controller> m_All_Trap_In_Room = new List<Trap_Controller>();
    [SerializeField] List<Mirror_Controller> m_All_Mirror_In_Room = new List<Mirror_Controller>();
    [SerializeField] List<Cross_Controller> m_All_Cross_In_Room = new List<Cross_Controller>();

    [SerializeField] List<Repair_Station_Controller> m_All_Repair_In_Room = new List<Repair_Station_Controller>();

    [SerializeField] List<Ground_Controller> m_All_Ground_Can_Build = new List<Ground_Controller>();
    [SerializeField] List<Ground_Controller> m_All_Ground_Using_Build_Turret = new List<Ground_Controller>();

   
    [SerializeField]
    Transform[] m_All_Pos_Golem_Moves;

    [SerializeField] Transform m_Pos_Boss_Fighting;
    [SerializeField] Transform m_Pos_Golem_Fighting;


    [SerializeField] Transform m_All_Pos_Boss_ADC;


    //xekotoby
   
    [SerializeField]
    List<Turret_Penetration> m_All_Turret_Penetration_In_Room = new List<Turret_Penetration>();


  
  

  


    private bool isBossAttack;







    [SerializeField] private SerializableDictionary<int, int> coinDic = new SerializableDictionary<int, int>();

    private int indexTurretCoin = -1;

    public void AddCoinDicRoom(int coin)
    {
        SetIndexRoom();
        coinDic.Add(indexTurretCoin, coin);
    }

    public int CalculateTotalCoins()
    {
        int total = 1;
        foreach (int coin in coinDic.values)
        {
            total += coin;
        }
        Debug.LogError("CalculateTotalCoins" + total);
        return total;
    }
    public void ChangeIndexTurretCoinRoom(int index, int coin)
    {
        if (coinDic.ContainsKey(index))
        {
            coinDic[index] = coin; // Cập nhật giá trị cho khóa index
        }
        else
        {
           
        }
    }


    public void SetIndexRoom()
    {
        indexTurretCoin++;
    }

    public int GetIndexRoom()
    {
        return indexTurretCoin;
    }









    public List<Vector2> Get_Pos_Default_Golem_Move()
    {
        List<Vector2> output = new List<Vector2>();
        for (int i = 0; i < m_All_Pos_Golem_Moves.Length; i++)
        {
            output.Add(m_All_Pos_Golem_Moves[i].position);
        }

        return output;
    }

  
   
    [SerializeField]
    bool m_Is_AI;

    Status_Action_Turrert m_Status_Action;
    Type_Turret m_Type_Target_Build;
    Data_Info_Turret_Manager m_Data_Info_Turret_Manager;
    Model_Info_Turret model_Info_Turret_Curr;
    Ground_Controller m_Ground_Build;
    Base_Turret m_Base_Turret_Target;
    Tween m_Tween_Update_Check_Can_Build_Target;


    [SerializeField] Temp_Door m_Temp_Door;


    public void Set_Level_Controller(Level_Controller level_Controller)
    {
        m_Level_Controller = level_Controller;
    }

    private Vector3 temp_Vec_3;

    public List<Transform> Get_Pos_ADC_Of_Room()
    {
        List<Transform> transformsAdc = new List<Transform>();

        foreach (Transform child in m_All_Pos_Boss_ADC.transform)
        {
            transformsAdc.Add(child);
        }

        return transformsAdc;
    }


    public Vector3 Get_Pos_Door_Of_Room()
    {
        if (m_Door == null)
        {
            return temp_Vec_3;
        }
        else if (m_Door.Get_Is_Door_Closed())
        {
            temp_Vec_3 = m_Door.transform.position;
            return m_Door.transform.position;
        }
        else
        {
            return temp_Vec_3;
        }
    }

    public Type_Player Get_Player_Owner()
    {
        return m_Player_Owner;
    }

    public void Update_Pos_Boss_Attack_Done()
    {
        if (m_Bed)
        {
            m_Bed.Update_Pos_Boss_Attack_Done();
        }
    }

    public void Compress_Data()
    {
        if (m_Room_Data_Loader == null)
        {
            m_Room_Data_Loader = GetComponent<Room_Data_Loader>();
        }
        else
        {
            m_Room_Data_Loader.list_Prefap_Holder.Clear();
        }

        {
        }
        if (m_Room_Data_Loader)
        {
            m_Room_Data_Loader.Add_New_Data_Holder();
        }
    }

    public bool Check_Inside_In_Room(Vector2 pos)
    {
        return MyExtensions.Find_Point_In_Rectangle(m_Pos_Bound_Bottom_Left.position, m_Pos_Bound_Top_Right.position,
            pos);
    }

   [SerializeField] bool m_Has_Character_Inside_Room;

    public bool Check_Player_Is_Full_Health()
    {
        if (m_Door)
        {
            return m_Door.Check_Is_Full_Health();
        }

        return false;
    }

    public bool Get_Has_Character_Inside_Room()
    {
        return m_Has_Character_Inside_Room;
    }

    public bool Check_Bed_Not_Kill()
    {
        //activeskill2
        if (Get_Type_Character() == Type_Character.Safeguard && m_Door == null)
        {
            return false;
        }

        return (m_Door == null && m_Bed);
    }

    public void Set_Has_Character_In_Room(bool has_Character)
    {
        m_Has_Character_Inside_Room = has_Character;
    }

    public bool Check_Has_Turret_Is_Attacking()
    {
        for (int i = 0; i < m_All_Turret_In_Room.Count; i++)
        {
            if (m_All_Turret_In_Room[i] && m_All_Turret_In_Room[i].Get_Is_Attacking())
            {
                return true;
            }
        }

        return false;
    }

    public bool Check_Tut_Use_Item()
    {
        if (m_All_Boss_Attacking.Count > 0)
        {
            return m_All_Boss_Attacking[0].Check_Tut_Use_Item();
        }

        return false;
    }

    public Vector3 Get_Pos_Boss_Fighting()
    {
        return m_Pos_Boss_Fighting.position;
    }

    public Vector3 Get_Pos_Golem_Fighting()
    {
        return m_Pos_Golem_Fighting.position;
    }

    public Vector3 Get_Pos_Golem_Fighting_Reflect()
    {
        Type_Direction type_Direction =
            My_Utils.Get_Direction_Left_Right(m_Pos_Boss_Fighting.position, m_Pos_Golem_Fighting.position);
        Vector3 output = m_Pos_Boss_Fighting.position;
        float delta_X = Mathf.Abs(m_Pos_Golem_Fighting.position.x - m_Pos_Boss_Fighting.position.x);
        if (type_Direction == Type_Direction.Left)
        {
            output.x += delta_X;
            return output;
        }

        output.x -= delta_X;
        return output;
    }

    #region =========== Update Status To UI ==============

   [SerializeField] int m_Total_Boss_Attack;
    [SerializeField] bool m_Is_Unlock_Skill_2_Witch;

    bool m_Is_CD_Skill_2_Witch;
    float m_CD_Skill_2_Witch = 15f;

    //updateofjura
    bool m_Is_CD_Skill_1_Onslaught;
    float m_CD_Skill_1_Onslaught = 5f;
    [SerializeField] bool m_Is_Unlock_Skill_1_Onslaught;

    public int Get_Total_Boss_Attack()
    {
        return m_Total_Boss_Attack;
    }

    public void Set_Status_Attacking(Base_Boss base_Boss, bool is_From_Golem)
    {
        if (!m_All_Boss_Attacking.Contains(base_Boss))
        {
            m_Total_Boss_Attack += 1;

            Add_Boss_Attacking(base_Boss, false);
         
            Notify_Attacking(is_From_Golem);
         

            if (m_Total_Boss_Attack <= 1)
            {
                Loop_Active_Skill_2_Witch();
                // Loop_Active_Skill_1_Onslaught();
                // turret_Onslaught.Start_Active_Rocket();
            }
        }
    }

    //updateofjura
    [SerializeField] Turret_Onslaught turret_Onslaught;


    private void Loop_Active_Skill_2_Witch()
    {
        // For test
        //m_CD_Skill_2_Witch = 3f;

        if (m_Is_Unlock_Skill_2_Witch && m_Door)
        {
            if (!m_Is_CD_Skill_2_Witch)
            {
                m_Is_CD_Skill_2_Witch = true;
                m_Door.Active_Skill_2_Witch();
                DOVirtual.DelayedCall(m_CD_Skill_2_Witch, () =>
                {
                    m_Is_CD_Skill_2_Witch = false;
                    if (m_Total_Boss_Attack > 0)
                    {
                        Loop_Active_Skill_2_Witch();
                    }
                }, false);
            }
        }
    }

    public void Stop_Status_Attacking(Base_Boss base_Boss)
    {
        if (m_All_Boss_Attacking.Contains(base_Boss))
        {
            m_Total_Boss_Attack -= 1;
            if (m_Total_Boss_Attack < 0)
            {
                m_Total_Boss_Attack = 0;
            }

            Notify_Attacking(false);

            Debug.LogError("skill Stop_Status_Attacking");
            Remove_Boss_Attacking(base_Boss);
        }
    }


    private void Notify_Attacking(bool is_From_Golem)
    {
        Check_Data_Player();
        if (data_Player == null)
        {
            Debug.LogWarning("Notify_Attacking aborted: data_Player destroyed.");
            return;
        }


        if (data_Player)
        {
            data_Player.Notify_Attacking(m_Total_Boss_Attack > 0);
            if (!is_From_Golem)
            {
                data_Player.Notify_Attacking_Door(m_Total_Boss_Attack > 0);
            }

            CancelInvoke(nameof(Delay_Inactive_Meteorite));
            if (m_Total_Boss_Attack > 0)
            {
                data_Player.Notify_Check_Can_Active_Meteorite(true);
            }
            else
            {
                Invoke(nameof(Delay_Inactive_Meteorite), 1f);
            }
        }
    }

    private void Delay_Inactive_Meteorite()
    {
        if (data_Player)
        {
            data_Player.Notify_Check_Can_Active_Meteorite(false);
        }
    }

    #endregion

    private void Start()
    {
        m_All_Turret_In_Room.Clear();
        m_All_Trap_In_Room.Clear();
        m_All_Mirror_In_Room.Clear();
        m_Total_Boss_Attack = 0;
        m_All_Turret_Penetration_In_Room.Clear();

        DOVirtual.DelayedCall(1f, () => { Update_Ground_To_Build_Turret(); }, false);
    }

    public void Assign_Door(Door_Controller door)
    {
        m_Door = door;
    }

    public void Set_Bed_In_Room(Bed_Controller bed_Controller)
    {
        m_Bed = bed_Controller;
    }

    //updateofjura
    public void Set_Temp_Door_In_Room(Temp_Door temp_Controller)
    {
        m_Temp_Door = temp_Controller;
    }

    public void Set_Turret_Bed_In_Room(Turret_Onslaught turret_Onslaught)
    {
        this.turret_Onslaught = turret_Onslaught;
    }


    #region =============== Config Turret In Room ===============

    public void Add_Turret_In_Room(Turret_Controller turret_Controller)
    {
        if (!m_All_Turret_In_Room.Contains(turret_Controller))
        {
            m_All_Turret_In_Room.Add(turret_Controller);
        }
    }

    public void Remove_Turret_In_Room(Turret_Controller turret_Controller)
    {
        if (m_All_Turret_In_Room.Contains(turret_Controller))
        {
            m_All_Turret_In_Room.Remove(turret_Controller);
        }
    }

    public int Get_Sum_Turret_In_Room()
    {
        return m_All_Turret_In_Room.Count;
    }

    public bool Check_Can_Remove_Random_Turret_In_Room()
    {
        if (m_All_Turret_In_Room.Count <= 0)
        {
            return false;
        }

        return true;
    }

    List<Turret_Controller> temp_Remove_Random_Turret_In_Room = new List<Turret_Controller>();

    public bool Remove_Random_Turret_In_Room(int number_Turret)
    {
        if (m_All_Turret_In_Room.Count <= 0)
        {
            return false;
        }

        temp_Remove_Random_Turret_In_Room.Clear();
        temp_Remove_Random_Turret_In_Room.AddRange(m_All_Turret_In_Room);
        //updateofjura
        //loai sung onlaught khoi mang nguy remove
        if (Get_Type_Character() == Type_Character.Onslaught)
        {
            temp_Remove_Random_Turret_In_Room.RemoveAll(obj => obj is Turret_Onslaught);
            //for (int i = temp_Remove_Random_Turret_In_Room.Count - 1; i >= 0; i--)
            //{
            //    if (temp_Remove_Random_Turret_In_Room[i] is Turret_Onslaught)
            //    {
            //        temp_Remove_Random_Turret_In_Room.RemoveAt(i);
            //    }
            //}
        }

        temp_Remove_Random_Turret_In_Room.Shuffle();

        int max_Turret = number_Turret < m_All_Turret_In_Room.Count
            ? number_Turret
            : temp_Remove_Random_Turret_In_Room.Count;

        while (max_Turret > 0)
        {
            max_Turret -= 1;
            // try
            // {
            var turret_Random = temp_Remove_Random_Turret_In_Room[0];
            Remove_Turret_In_Room(turret_Random);
            turret_Random.Remove_Item_By_Boss();
            temp_Remove_Random_Turret_In_Room.RemoveAt(0);
            //}
            // catch { }
        }

        return true;
    }

    List<Turret_Controller> temp_Get_Random_Turret = new List<Turret_Controller>();
    List<Turret_Controller> data_Get_Random_Turret = new List<Turret_Controller>();

    public List<Turret_Controller> Get_All_Turret_In_Room()
    {
        return m_All_Turret_In_Room;
    }

    public List<Turret_Controller> Get_Random_Turret(int number_Turret)
    {
        data_Get_Random_Turret.Clear();
        if (m_All_Turret_In_Room.Count <= 0)
        {
            return data_Get_Random_Turret;
        }

        temp_Get_Random_Turret.Clear();
        temp_Get_Random_Turret.AddRange(m_All_Turret_In_Room);
        temp_Get_Random_Turret.Shuffle();

        int max_Turret = number_Turret < m_All_Turret_In_Room.Count ? number_Turret : temp_Get_Random_Turret.Count;

        while (max_Turret > 0)
        {
            max_Turret -= 1;

            //try
            //{
            data_Get_Random_Turret.Add(temp_Get_Random_Turret[0]);
            temp_Get_Random_Turret.RemoveAt(0);
            //}
            // catch { }
        }

        return data_Get_Random_Turret;
    }

    public void Update_Target_To_Turret(Base_Boss base_Boss)
    {
        //updateofjura

        //if(Get_Type_Character() == Type_Character.Safeguard)
        //{
        //    if (m_Temp_Door != null)
        //    {
        //        m_Temp_Door.Update_Target_To_Turret(base_Boss);
        //    }
        //    else
        //    {
        //        for (int i = 0; i < m_All_Turret_In_Room.Count; i++)
        //        {
        //            if (m_All_Turret_In_Room[i])
        //            {
        //                m_All_Turret_In_Room[i].Update_Target_To_Turret(base_Boss);
        //            }
        //        }
        //    }
        //    return
        //}

        for (int i = 0; i < m_All_Turret_In_Room.Count; i++)
        {
            if (m_All_Turret_In_Room[i])
            {
                m_All_Turret_In_Room[i].Update_Target_To_Turret(base_Boss);
            }
        }
    }

    #endregion

    #region =============== Config Trap In Room ===============

    public void Add_Trap_In_Room(Trap_Controller trap_Controller)
    {
        if (!m_All_Trap_In_Room.Contains(trap_Controller))
        {
            m_All_Trap_In_Room.Add(trap_Controller);
        }
    }

    public void Remove_Trap_In_Room(Trap_Controller trap_Controller)
    {
        if (m_All_Trap_In_Room.Contains(trap_Controller))
        {
            m_All_Trap_In_Room.Remove(trap_Controller);
        }
    }

    float time_Stun_By_Trap;

    public float Check_Is_Stun_By_Trap()
    {
        time_Stun_By_Trap = -1f;
        Check_Data_Player();
        if (data_Player && m_Bed)
        {
            for (int i = 0; i < m_All_Trap_In_Room.Count; i++)
            {
                if (m_All_Trap_In_Room[i] && m_All_Trap_In_Room[i].Get_Is_Ready())
                {
                    m_All_Trap_In_Room[i].Set_Is_Ready(false);
                    return m_All_Trap_In_Room[i].Get_Time_Stun();
                }
            }

            return time_Stun_By_Trap;
        }
        else
        {
            return time_Stun_By_Trap;
        }
    }

    #endregion

    #region =============== Config Mirror In Room ===============

    public void Add_Mirror_In_Room(Mirror_Controller mirror_Controller)
    {
        if (!m_All_Mirror_In_Room.Contains(mirror_Controller))
        {
            m_All_Mirror_In_Room.Add(mirror_Controller);
        }
    }

    public void Remove_Mirror_In_Room(Mirror_Controller mirror_Controller)
    {
        if (m_All_Mirror_In_Room.Contains(mirror_Controller))
        {
            m_All_Mirror_In_Room.Remove(mirror_Controller);
        }
    }

    float time_Stun_By_Mirror;

    public float Check_Stun_By_Mirror()
    {
        time_Stun_By_Mirror = -1f;
        Check_Data_Player();
        if (data_Player)
        {
            for (int i = 0; i < m_All_Mirror_In_Room.Count; i++)
            {
                if (m_All_Mirror_In_Room[i] && m_All_Mirror_In_Room[i].Get_Is_Ready())
                {
                    m_All_Mirror_In_Room[i].Set_Is_Ready(false);
                    return m_All_Mirror_In_Room[i].Get_Time_Stun();
                }
            }

            return time_Stun_By_Mirror;
        }
        else
        {
            return time_Stun_By_Mirror;
        }
    }

    #endregion

    #region =============== Config Energy Tower In Room ===============

    public void Add_Energy_Tower_In_Room(Energy_Tower_Controller energy_Tower)
    {
        if (!m_All_Energy_Tower_In_Room.Contains(energy_Tower))
        {
            m_All_Energy_Tower_In_Room.Add(energy_Tower);
        }
    }

    public void Remove_Energy_Tower_In_Room(Energy_Tower_Controller energy_Tower)
    {
        if (m_All_Energy_Tower_In_Room.Contains(energy_Tower))
        {
            m_All_Energy_Tower_In_Room.Remove(energy_Tower);
        }
    }

    #endregion


    #region =============== Config Cross In Room ===============

    public void Add_Cross_In_Room(Cross_Controller cross_Controller)
    {
        if (!m_All_Cross_In_Room.Contains(cross_Controller))
        {
            m_All_Cross_In_Room.Add(cross_Controller);
        }
    }

    public void Remove_Cross_In_Room(Cross_Controller cross_Controller)
    {
        if (m_All_Cross_In_Room.Contains(cross_Controller))
        {
            m_All_Cross_In_Room.Remove(cross_Controller);
        }
    }

    public List<Cross_Controller> GetCrossController()
    {
        if (m_All_Cross_In_Room.Count >= 0)
        {
            return m_All_Cross_In_Room;
        }

        return null;
    }

    #endregion


    #region =============== Config Repair In Room ===============

    public void Add_Repair_In_Room(Repair_Station_Controller repair_Station_Controller)
    {
        if (!m_All_Repair_In_Room.Contains(repair_Station_Controller))
        {
            m_All_Repair_In_Room.Add(repair_Station_Controller);
        }
    }

    public void Remove_Repair_In_Room(Repair_Station_Controller repair_Station_Controller)
    {
        if (m_All_Repair_In_Room.Contains(repair_Station_Controller))
        {
            m_All_Repair_In_Room.Remove(repair_Station_Controller);
        }
    }

    public List<Repair_Station_Controller> GetRepairController()
    {
        if (m_All_Repair_In_Room.Count >= 0)
        {
            return m_All_Repair_In_Room;
        }

        return null;
    }

    #endregion

    #region =============== Config Pierce Turret  In Room ===============

    public void Add_Turret_Penetration_In_Room(Turret_Penetration turret_Penetration_Controller)
    {
        if (!m_All_Turret_Penetration_In_Room.Contains(turret_Penetration_Controller))
        {
            m_All_Turret_Penetration_In_Room.Add(turret_Penetration_Controller);
        }
    }

    public void Remove_Turret_Penetration_In_Room(Turret_Penetration turret_Penetration_Controller)
    {
        if (m_All_Turret_Penetration_In_Room.Contains(turret_Penetration_Controller))
        {
            m_All_Turret_Penetration_In_Room.Remove(turret_Penetration_Controller);
        }
    }

    //xekotobytemp
    List<Turret_Penetration> temp_Remove_Random_Turret_Penetration_In_Room = new List<Turret_Penetration>();

    public int Get_Sum_Turret_Penetation_In_Room()
    {
        return m_All_Turret_Penetration_In_Room.Count;
    }

    public bool Check_Can_Remove_Random_Turret_Penetation_In_Room()
    {
        if (m_All_Turret_Penetration_In_Room.Count <= 0)
        {
            return false;
        }

        return true;
    }


    public bool Remove_Random_Turret_Penetation_In_Room(int number_Turret)
    {
        if (m_All_Turret_Penetration_In_Room.Count <= 0)
        {
            return false;
        }

        temp_Remove_Random_Turret_Penetration_In_Room.Clear();
        temp_Remove_Random_Turret_Penetration_In_Room.AddRange(m_All_Turret_Penetration_In_Room);

        if (Get_Type_Character() == Type_Character.Onslaught)
        {
            temp_Remove_Random_Turret_Penetration_In_Room.RemoveAll(obj => obj is Turret_Onslaught);
        }

        temp_Remove_Random_Turret_Penetration_In_Room.Shuffle();

        int max_Turret = number_Turret < m_All_Turret_Penetration_In_Room.Count
            ? number_Turret
            : temp_Remove_Random_Turret_Penetration_In_Room.Count;

        while (max_Turret > 0)
        {
            max_Turret -= 1;

            var turret_Random = temp_Remove_Random_Turret_Penetration_In_Room[0];
            Remove_Turret_Penetration_In_Room(turret_Random);
            turret_Random.Remove_Item_By_Boss();
            temp_Remove_Random_Turret_Penetration_In_Room.RemoveAt(0);
        }

        return true;
    }

    List<Turret_Penetration> temp_Get_Random_Turret_Penetration = new List<Turret_Penetration>();
    List<Turret_Penetration> data_Get_Random_Turret_Penetration = new List<Turret_Penetration>();

    public List<Turret_Penetration> Get_All_Turret_Penetration_In_Room()
    {
        return m_All_Turret_Penetration_In_Room;
    }

    public List<Turret_Penetration> Get_Random_Turret_Penetration(int number_Turret)
    {
        data_Get_Random_Turret_Penetration.Clear();
        if (m_All_Turret_In_Room.Count <= 0)
        {
            return data_Get_Random_Turret_Penetration;
        }

        temp_Get_Random_Turret_Penetration.Clear();
        temp_Get_Random_Turret_Penetration.AddRange(m_All_Turret_Penetration_In_Room);
        temp_Get_Random_Turret_Penetration.Shuffle();

        int max_Turret = number_Turret < m_All_Turret_Penetration_In_Room.Count
            ? number_Turret
            : temp_Get_Random_Turret_Penetration.Count;

        while (max_Turret > 0)
        {
            max_Turret -= 1;


            data_Get_Random_Turret_Penetration.Add(temp_Get_Random_Turret_Penetration[0]);
            temp_Get_Random_Turret_Penetration.RemoveAt(0);
        }

        return data_Get_Random_Turret_Penetration;
    }

    public void Update_Target_To_Turret_Penetration(Base_Boss base_Boss)
    {
        for (int i = 0; i < m_All_Turret_Penetration_In_Room.Count; i++)
        {
            if (m_All_Turret_Penetration_In_Room[i])
            {
                m_All_Turret_Penetration_In_Room[i].Update_Target_To_Turret(base_Boss);
            }
        }
    }

    #endregion


    #region ============== Get - Set ====================

    public bool Check_Is_Empty_Slot_To_Build()
    {
        return (m_All_Ground_Can_Build.Count + m_All_Ground_Using_Build_Turret.Count) > 0;
    }

    public Vector3 Get_Position_Door()
    {
        return m_Door.Get_Position_Door();
    }

    public Vector3 Get_Position_Door_Not_Close()
    {
        return m_Door.transform.position;
    }

    public Vector3 Get_Position_Door_Attack(Type_Player type_Boss)
    {
        return m_Door.Get_Position_Door_Attack(type_Boss);
    }


    public Vector3 Get_Position_Bed(Action action_Bed_Destroyed = null)
    {
        if (m_Bed)
        {
            return m_Bed.transform.position;
        }

        if (action_Bed_Destroyed != null)
        {
            action_Bed_Destroyed.Invoke();
        }

        return new Vector3(-999f, -999f, -999f);
    }

    public Bed_Controller Get_Bed_Controller()
    {
        return m_Bed;
    }

    public Door_Controller Get_Door_Of_Room()
    {
        return m_Door;
    }

    public Temp_Door Get_Temp_Door_Of_Room()
    {
        return m_Temp_Door;
    }

    public Type_Player Get_Type_Player()
    {
        return m_Player_Owner;
    }

    public Type_Character Get_Type_Character()
    {
        // Debug.LogError("typeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" + Player_Manager.Instance.Get_Type_Character(m_Player_Owner));
        return Player_Manager.Instance.Get_Type_Character(m_Player_Owner);
    }

    public bool Check_Has_Air_Conditioner()
    {
        Check_Data_Player();
        if (data_Player)
        {
            return data_Player.Get_Sum_Air_Conditioner_Builded() > 0;
        }

        return false;
    }

    public bool Check_Has_Holy_Water_Conditioner()
    {
        Check_Data_Player();
        if (data_Player)
        {
            return data_Player.Get_Sum_Holy_Water_Builded() > 0;
        }

        return false;
    }

    #endregion


    // Khi Player len giuong, se goi ham nay
    public void Set_Player_Owner(Type_Player type_Player)
    {
        m_Player_Owner = type_Player;

        if (type_Player == Type_Player.None)
        {
            data_Player = null;
        }


        Check_Data_Player();

        if (data_Player)
        {
            data_Player.Set_Type_Character(
                Player_Manager.Instance.Get_Type_Character(m_Player_Owner),
                Game_Controller.Instance.Get_Player_Curr(),
                Player_Manager.Instance.Get_Is_Using_Skin_2(m_Player_Owner));

            data_Player.Notify_Enter_Room(true);
        }


        foreach (Transform item in transform)
        {
            Base_Turret base_Turret = item.GetComponent<Base_Turret>();
            if (base_Turret)
            {
                base_Turret.Set_Type_Player(m_Player_Owner);
            }
        }


        if (m_Level_Controller && m_Player_Owner != Type_Player.None)
        {
            m_Level_Controller.Add_Data_To_Room_Has_Player(this);
        }


        // Update all item in room Playwer Owner
        if (type_Player == Type_Player.None)
        {
            m_Has_Player = false;
            Remove_All_Listener();
        }
        else
        {
            Check_Data_Player();

            // Character_Controller character_ = Game_Controller.Instance.Get_All_Character_Player_Join_Game(type_Player, out var data_Player);


            if (data_Player && data_Player.Get_Is_AI())
            {
                m_Has_Player = true;

                DOVirtual.DelayedCall(1f, () =>
                {
                    Update_Check_Can_Build_Target();


                }, false).SetLink(gameObject);
            }

            Check_Skill_1_Raven();
        }

        Check_Skill_1_Priest();
        //updateofJura
        Check_Skill_1_Onslaught();


        m_Is_Unlock_Skill_2_Witch =
            Player_Manager.Instance.Get_Type_Character(m_Player_Owner) == Type_Character.Witch &&
            DataSaved.Get_Is_Unlock_Skill_2(Type_Character.Witch);
        m_Is_Unlock_Skill_1_Onslaught =
            Player_Manager.Instance.Get_Type_Character(m_Player_Owner) == Type_Character.Onslaught;
    }

    private void OnDestroy()
    {
        Remove_All_Listener();
        m_Tween_Update_Check_Can_Build_Target?.Kill();
    }

    private void Remove_All_Listener()
    {
    

        if (m_Live_Data_Can_Build_Crucific_Tutorial)
        {
            m_Live_Data_Can_Build_Crucific_Tutorial.OnValueChanged.RemoveListener(
                Listener_Live_Data_Can_Build_Crucific_Tutorial);
        }
    }

    #region ==================== Listener Live Data ====================

  
    private void Listener_Live_Data_Can_Build_Crucific_Tutorial()
    {
        if (m_Live_Data_Can_Build_Crucific_Tutorial && m_Live_Data_Can_Build_Crucific_Tutorial.Value)
        {
            if (m_Ground_Build_Crucific == null && m_All_Ground_Can_Build.Count > 0)
            {
                m_Index_Hold_Build_Crucific = UnityEngine.Random.Range(0, m_All_Ground_Can_Build.Count - 1);
                // Show Hand In Ground
                m_Ground_Build_Crucific = m_All_Ground_Can_Build[m_Index_Hold_Build_Crucific];
                
                m_All_Ground_Can_Build.RemoveAt(m_Index_Hold_Build_Crucific);
            }
        }
        else
        {
            // Remove Hand in Ground
            if (m_Ground_Build_Crucific)
            {
               
                m_All_Ground_Can_Build.Add(m_Ground_Build_Crucific);
                m_Ground_Build_Crucific = null;
            }
        }
    }

    #endregion

    int m_Index_Hold_Build_Crucific;
    Ground_Controller m_Ground_Build_Crucific;

    // Build Turret


    // Upgrade Turret
   
    public void Check_Data_Player()
    {
        if (data_Player == null)
        {
            if (Player_Manager.Instance != null)
            {
                data_Player = Player_Manager.Instance.Get_Data_Player(m_Player_Owner);
            }
        }
    }

    private void Check_Skill_1_Priest()
    {
        // He always has a bottle of holy water with him when he goes to bed.
        if (Player_Manager.Instance.Get_Type_Character(m_Player_Owner) == Type_Character.Priest)
        {
            Build_Turret_From_Gift(Type_Turret.Holy_Water, 1, true);
        }
    }

    //updateofJura
    private void Check_Skill_1_Onslaught()
    {
        if (Player_Manager.Instance.Get_Type_Character(m_Player_Owner) == Type_Character.Onslaught)
        {
            Build_Turret_From_Gift(Type_Turret.Turret_Bed, 1, true);
        }
    }





    #region =============== Config Ground In Room ===============

    public void Add_Ground_In_Room(Ground_Controller ground_Controller)
    {
        if (!m_All_Ground_Can_Build.Contains(ground_Controller))
        {
            m_All_Ground_Can_Build.Add(ground_Controller);
        }
    }

    public void Remove_Ground_In_Room(Ground_Controller ground_Controller)
    {
        if (m_All_Ground_Can_Build.Contains(ground_Controller))
        {
            m_All_Ground_Can_Build.Remove(ground_Controller);
        }
        else
        {
            Remove_Ground_To_Build_Turret(ground_Controller);
        }
    }

    public void Add_Ground_To_Build_Turret(Ground_Controller ground_Controller)
    {
        if (!m_All_Ground_Using_Build_Turret.Contains(ground_Controller))
        {
            m_All_Ground_Using_Build_Turret.Add(ground_Controller);
        }
    }

    public void Remove_Ground_To_Build_Turret(Ground_Controller ground_Controller)
    {
        if (m_All_Ground_Using_Build_Turret.Contains(ground_Controller))
        {
            m_All_Ground_Using_Build_Turret.Remove(ground_Controller);
        }
    }

    private void Update_Ground_To_Build_Turret()
    {
        m_All_Ground_Using_Build_Turret.Clear();

        int index_Updated = 0;
        Ground_Controller item;

        // Kiểm tra list vị trí hợp lệ
        if (m_All_Location_Of_Turret_AI == null || m_All_Location_Of_Turret_AI.Count == 0)
        {
            Debug.LogWarning("⚠️ m_All_Location_Of_Turret_AI trống hoặc null!");
            return;
        }

        // Duyệt từng vị trí cần cập nhật
        while (index_Updated < m_All_Location_Of_Turret_AI.Count)
        {
            if (m_All_Ground_Can_Build.Count == 0)
                break;

            bool found = false;

            // Duyệt từ cuối list ground
            for (int i = m_All_Ground_Can_Build.Count - 1; i >= 0; i--)
            {
                item = m_All_Ground_Can_Build[i];

                if (item == null)
                {
                    Debug.LogWarning("⚠️ Ground item null, loại bỏ.");
                    m_All_Ground_Can_Build.RemoveAt(i);
                    continue;
                }

                if (item.transform.position == m_All_Location_Of_Turret_AI[index_Updated].position)
                {
                    Remove_Ground_In_Room(item);
                    Add_Ground_To_Build_Turret(item);
                    index_Updated++;
                    found = true;
                    break;
                }
            }

            // Nếu không tìm được ground tương ứng thì ngừng, tránh loop vô hạn
            if (!found)
                index_Updated++;
        }

        m_All_Ground_Using_Build_Turret.Shuffle();
    }


    #endregion

    #region ================ Update_Check_Can_Build_Target ================

    Base_Turret ground_Random;

    public void Build_Turret_From_Gift(Type_Turret type_Turret, int level, bool is_From_Skill = false)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        // updateofjura
        // neu doi tuong la sung tu hop qua thi se build ra bat ki o mot vi tri nao do cua sung dc quy dinh
        // nhung neu k muon turretofbed k sinh ra tai do thi lam nhu nao?
        // them dieu kien

        if (type_Turret == Type_Turret.Turret_Bed)
        {
            int m_Save_Pos_Turret = -1;
            float distance = 999f;
            //  Debug.LogError(distance+"aaaa");
            // Debug.LogError(m_Door.Get_Position_Door_Vec2() + "aaaab");
            for (int i = 0; i < m_All_Ground_Using_Build_Turret.Count; i++)
            {
                float tmp = Vector2.Distance(m_All_Ground_Using_Build_Turret[i].transform.localPosition,
                    m_Door.Get_Position_Door_Vec2());
                //Debug.LogError(m_Door.Get_Position_Door_Vec2() + "aaaab");
                if (tmp <= distance)
                {
                    m_Save_Pos_Turret = i;
                    distance = tmp;
                }
            }

            if (ground_Random == null)
            {
                ground_Random = m_All_Ground_Using_Build_Turret[m_Save_Pos_Turret];
            }
        }


        else if (type_Turret == Type_Turret.Turret)
        {
            ground_Random = Get_Random_Ground(m_All_Ground_Using_Build_Turret);
            if (ground_Random == null)
            {
                ground_Random = Get_Random_Ground(m_All_Ground_Can_Build);
            }
        }
        else
        {
            Debug.LogError("type_Turret" + type_Turret);
            ground_Random = Get_Random_Ground(m_All_Ground_Can_Build);
            if (ground_Random == null)
            {
                ground_Random = Get_Random_Ground(m_All_Ground_Using_Build_Turret);
            }
        }

        if (ground_Random)
        {
            ground_Random.Start_Build_New_Turret(type_Turret, level, is_From_Skill);
            Check_Data_Player();
            My_Utils.Increase_Number_Turret(data_Player, type_Turret);
        }
    }


    private Base_Turret Get_Random_Ground(List<Ground_Controller> ground_Controllers)
    {
        if (ground_Controllers.Count > 0)
        {
            //int id_Ground_Random = UnityEngine.Random.Range(0, ground_Controllers.Count - 1);
            return ground_Controllers[UnityEngine.Random.Range(0, ground_Controllers.Count - 1)];
        }

        return null;
    }

    public void Update_Check_Can_Build_Target()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        Check_Data_Player();
        if (data_Player)
        {
            m_Is_AI = data_Player.Get_Is_AI();
            if (m_Is_AI && m_Player_Owner != Type_Player.None)
            {
                //Check_Can_Build_Target();
                //Check_To_Next_Phase();
                if (this != null && gameObject != null)
                    StopCoroutine(Check_In_Background());
                StopCoroutine(Check_In_Background());
                if (this != null && gameObject != null)
                    StartCoroutine(Check_In_Background());

                if (m_Has_Player)
                {
                    m_Tween_Update_Check_Can_Build_Target.Do_Kill();
                    m_Tween_Update_Check_Can_Build_Target =
                        DOVirtual.DelayedCall(1f, () => { Update_Check_Can_Build_Target(); }, false).SetLink(gameObject);
                }
            }
        }
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.M))
        {
            Debug.LogError(gameObject.name + "---" + CalculateTotalCoins());
        }
    }

    private void OnDisable()
    {
        m_Tween_Update_Check_Can_Build_Target.Do_Kill();
    }

    private IEnumerator Check_In_Background()
    {
        yield return new WaitForSeconds(Time.deltaTime * 2);
        Check_Can_Build_Target();

        yield return new WaitForSeconds(Time.deltaTime * 2);
        Check_To_Next_Phase();
    }

    private void Check_To_Next_Phase()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Player_Owner == Type_Player.None) return;

        Check_Data_Player();
        if (data_Player)
        {
            data_Player.Check_To_Next_Phase();
        }
    }

    public void Check_Can_Build_Target()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (m_Player_Owner != Type_Player.None)
        {
            Check_Data_Player();
            if (data_Player != null && data_Player.Get_Is_AI())
            {
                m_Status_Action = data_Player.Get_Status_Action_Turrert();
                m_Type_Target_Build = data_Player.Get_Target_Build_Or_Update();

                if (m_Type_Target_Build == Type_Turret.None)
                {
                    data_Player.Start_Get_New_Target();
                    return;
                }

                if (m_Data_Info_Turret_Manager == null)
                {
                    m_Data_Info_Turret_Manager = Data_In_Game.Instance.Get_Data_Info_Turret_Manager();
                }

                if (m_Status_Action == Status_Action_Turrert.Buy)
                {
                    if (model_Info_Turret_Curr == null ||
                        !(model_Info_Turret_Curr.type_Turret == m_Type_Target_Build &&
                          model_Info_Turret_Curr.level == 0))
                    {
                        model_Info_Turret_Curr =
                            m_Data_Info_Turret_Manager.Get_Data_Info_Turret(m_Type_Target_Build, 0);
                    }

                    if (m_Type_Target_Build == Type_Turret.Turret)
                    {
                        if (m_All_Ground_Using_Build_Turret.Count > 0 && data_Player.Get_Sum_Turret_Builded() <
                            data_Player.Get_Max_Turret_Can_Build())
                        {
                            m_Ground_Build = m_All_Ground_Using_Build_Turret[0];
                            My_Utils.Check_Can_Build_Turret(data_Player, m_Player_Owner,
                                data_Player.Get_Type_Character(), m_Type_Target_Build,
                                model_Info_Turret_Curr.price_Upgrades, m_Ground_Build);
                        }
                        else
                        {
                            Upgrade_Turret_AI();
                        }
                    }
                    else
                    {
                        if (m_All_Ground_Can_Build.Count > 0)
                        {
                            m_Ground_Build =
                                m_All_Ground_Can_Build[UnityEngine.Random.Range(0, m_All_Ground_Can_Build.Count - 1)];
                            My_Utils.Check_Can_Build_Turret(data_Player, m_Player_Owner,
                                data_Player.Get_Type_Character(), m_Type_Target_Build,
                                model_Info_Turret_Curr.price_Upgrades, m_Ground_Build);
                        }
                        else
                        {
                            Upgrade_Turret_AI(true);
                        }
                    }
                }
                else
                {
                    Upgrade_Turret_AI();
                }
            }
        }
    }

    private void Upgrade_Turret_AI(bool is_Need_Change_Target = false)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Player_Owner == Type_Player.None) return;

        m_Type_Target_Build = data_Player.Get_Target_Build_Or_Update();

        if ((int)m_Type_Target_Build > (int)Type_Turret.Energy_Tower)
        {
            is_Need_Change_Target = true;
        }

        if (is_Need_Change_Target)
        {
            m_Type_Target_Build = (Type_Turret)UnityEngine.Random.Range(0, 3);
        }

        m_Base_Turret_Target = null;
        // Find Base_Turret has target build
        switch (m_Type_Target_Build)
        {
            case Type_Turret.Bed:
                m_Base_Turret_Target = m_Bed;
                break;

            case Type_Turret.Door:
                m_Base_Turret_Target = m_Door;
                break;
            //updateofjura
            case Type_Turret.Temp_Door:
                m_Base_Turret_Target = m_Temp_Door;
                break;


            case Type_Turret.Turret:
                if (m_All_Turret_In_Room.Count > 0)
                {
                    m_Base_Turret_Target = Get_Turret_Min_Level();
                }

                break;

            case Type_Turret.Energy_Tower:
                if (m_All_Energy_Tower_In_Room.Count > 0)
                {
                    m_Base_Turret_Target = Get_Energy_Tower_Min_Level();
                }

                break;
        }

        if (m_Base_Turret_Target)
        {
            My_Utils.Update_Turret(true, data_Player, m_Base_Turret_Target.type_Player,
                m_Base_Turret_Target.Get_Price_Upgrade(), m_Base_Turret_Target);
        }
    }

    Base_Turret base_Turret_Min_Level;

    public Base_Turret Get_Turret_Min_Level()
    {
        base_Turret_Min_Level = m_All_Turret_In_Room[0];

        for (int i = 0; i < m_All_Turret_In_Room.Count; i++)
        {
            if (m_All_Turret_In_Room[i] && m_All_Turret_In_Room[i].level_Curr < base_Turret_Min_Level.level_Curr)
            {
                base_Turret_Min_Level = m_All_Turret_In_Room[i];
            }
        }

        return base_Turret_Min_Level;
    }

    Base_Turret m_Energy_Tower_Min_Level;

    public Base_Turret Get_Energy_Tower_Min_Level()
    {
        m_Energy_Tower_Min_Level = m_All_Energy_Tower_In_Room[0];
        for (int i = 0; i < m_All_Energy_Tower_In_Room.Count; i++)
        {
            if (m_All_Energy_Tower_In_Room[i] &&
                m_All_Energy_Tower_In_Room[i].level_Curr < m_Energy_Tower_Min_Level.level_Curr)
            {
                m_Energy_Tower_Min_Level = m_All_Energy_Tower_In_Room[i];
            }
        }

        return m_Energy_Tower_Min_Level;
    }

    #endregion

    #region ============ Manage Boss Attacking ==================

  
   
    [SerializeField]
    List<Base_Boss> m_All_Boss_Attacking = new List<Base_Boss>();

    public int Get_Count_Boss_Attacking()
    {
        Clean_Data_Boss_Attacking();
        return m_All_Boss_Attacking.Count;
    }

    public bool Check_Contain_In_Boss_Attacking(int id_Boss)
    {
        Clean_Data_Boss_Attacking();
        for (int i = 0; i < m_All_Boss_Attacking.Count; i++)
        {
            if (m_All_Boss_Attacking[i].transform.GetInstanceID() == id_Boss)
            {
                return true;
            }
        }

        return false;
    }

    private void Clean_Data_Boss_Attacking()
    {
        for (int i = m_All_Boss_Attacking.Count - 1; i >= 0; i--)
        {
            if (m_All_Boss_Attacking[i] == null)
            {
                m_All_Boss_Attacking.RemoveAt(i);
            }
        }
    }


    public void Add_Boss_Attacking(Base_Boss base_Boss, bool is_From_Boss_Manager)
    {
        Clean_Data_Boss_Attacking();


        if (!Check_Contain_In_Boss_Attacking(base_Boss.transform.GetInstanceID()))
        {
            m_All_Boss_Attacking.Add(base_Boss);
            Check_Is_Full_Attacking(base_Boss, is_From_Boss_Manager);
        }


        Debug.LogError(gameObject.name + " Them boss" + base_Boss.m_Type_Boss);

        
    }

    public void Remove_Boss_Attacking(Base_Boss base_Boss)
    {
        Clean_Data_Boss_Attacking();
        if (Check_Contain_In_Boss_Attacking(base_Boss.transform.GetInstanceID()))
        {
            m_All_Boss_Attacking.Remove(base_Boss);
        }

        if (!base_Boss.Check_Stun_By_Trap())
        {
           // m_Bed.CheckBossAttackingDoorGolemReturn(this.m_All_Boss_Attacking.Count > 0);
        }
    }

    private void Check_Is_Full_Attacking(Base_Boss base_Boss, bool is_From_Boss_Manager)
    {
        Clean_Data_Boss_Attacking();

        if (RootManager.Check_AB_Boss_Line_Up())
        {
            if (m_All_Boss_Attacking.Count > 2)
            {
                Level_Controller.Instance.Room_Is_Full_Attacking(this, base_Boss, is_From_Boss_Manager);
            }
        }
    }

    public Base_Boss Get_Last_Boss_Attacking()
    {
        Clean_Data_Boss_Attacking();
        if (m_All_Boss_Attacking.Count > 0)
        {
            var output = m_All_Boss_Attacking[m_All_Boss_Attacking.Count - 1];
            m_All_Boss_Attacking.RemoveAt(m_All_Boss_Attacking.Count - 1);
            return output;
        }

        return null;
    }

    public void On_Kill_Door_Success()
    {
        Clean_Data_Boss_Line_Up();
        for (int i = 0; i < m_All_Boss_Line_Up.Count; i++)
        {
            if (m_All_Boss_Line_Up[i])
            {
                m_All_Boss_Line_Up[i].Destroy_Door_Complete();
            }
        }
    }

    public void Loop_Check_Boss_Attacking()
    {
        for (int i = m_All_Boss_Attacking.Count - 1; i >= 0; i--)
        {
            if (m_All_Boss_Attacking[i].Get_Room_Attacking().transform.GetInstanceID() != transform.GetInstanceID())
            {
                m_All_Boss_Attacking.RemoveAt(i);
            }
        }
    }


    Type_Direction m_Tmp_type_Direction_Look_At;
    Vector3 m_Tmp_curr_Pos_Boss;
    Vector3 m_Tmp_curr_Pos_Boss_Prev;
    bool m_Tmp_Found_Boss_Prev;

    public float Get_Pos_Look_At(Base_Boss curr_Boss)
    {
        Clean_Data_Boss_Line_Up();
        if (m_All_Boss_Attacking.Count <= 1)
        {
            m_Tmp_type_Direction_Look_At = curr_Boss.transform.position.Get_Type_Direction(Get_Position_Door());
        }
        else
        {
            m_Tmp_curr_Pos_Boss = curr_Boss.transform.position;
            m_Tmp_curr_Pos_Boss.x = m_Tmp_curr_Pos_Boss.x.Round_To_Int_Neareast();
            m_Tmp_curr_Pos_Boss.y = m_Tmp_curr_Pos_Boss.y.Round_To_Int_Neareast();
            m_Tmp_curr_Pos_Boss.z = 0;

            m_Tmp_Found_Boss_Prev = false;
            // Find Boss prev
            for (int i = 1; i < m_All_Boss_Attacking.Count; i++)
            {
                if (m_All_Boss_Attacking[i].transform.GetInstanceID() == curr_Boss.transform.GetInstanceID())
                {
                    m_Tmp_curr_Pos_Boss_Prev = m_All_Boss_Attacking[i].transform.position;
                    m_Tmp_curr_Pos_Boss_Prev.x = m_Tmp_curr_Pos_Boss_Prev.x.Round_To_Int_Neareast();
                    m_Tmp_curr_Pos_Boss_Prev.y = m_Tmp_curr_Pos_Boss_Prev.y.Round_To_Int_Neareast();
                    m_Tmp_curr_Pos_Boss_Prev.z = 0;
                    m_Tmp_Found_Boss_Prev = true;
                    break;
                }
            }

            if (!m_Tmp_Found_Boss_Prev)
            {
                m_Tmp_type_Direction_Look_At = curr_Boss.transform.position.Get_Type_Direction(Get_Position_Door());
            }
            else
            {
                m_Tmp_type_Direction_Look_At = m_Tmp_curr_Pos_Boss.Get_Type_Direction(m_Tmp_curr_Pos_Boss_Prev);
                if (m_Tmp_type_Direction_Look_At == Type_Direction.Top ||
                    m_Tmp_type_Direction_Look_At == Type_Direction.Bottom)
                {
                    m_Tmp_type_Direction_Look_At = curr_Boss.transform.position.Get_Type_Direction(Get_Position_Door());
                }
            }
        }

        if (m_Tmp_type_Direction_Look_At == Type_Direction.Left)
        {
            return curr_Boss.transform.position.x - 1;
        }

        return curr_Boss.transform.position.x + 1;
    }

    #endregion

    #region ============ Manage Boss Line Up ==================

  
   
    [SerializeField]
    List<Base_Boss> m_All_Boss_Line_Up = new List<Base_Boss>();

    public Base_Boss Get_Boss_Transfer()
    {
        if (m_All_Boss_Line_Up.Count > 0)
        {
            Debug.LogError("so luong > 0");
            return m_All_Boss_Line_Up[m_All_Boss_Line_Up.Count - 1];
        }

        Debug.LogError("null");
        return null;
    }

    public Base_Boss Get_Boss_Attacking()
    {
        if (m_All_Boss_Attacking.Count > 0)
        {
            // Debug.LogError(" Get_Boss_Attacking so luong > 0");
            return m_All_Boss_Attacking[m_All_Boss_Attacking.Count - 1];
        }

        //  Debug.LogError("Get_Boss_Attacking");
        return null;
    }


    public bool Get_Has_Boss_Attacking()
    {
        if (m_All_Boss_Attacking.Count > 0)
        {

            return true;
        }


        return false;
    }

    public int Get_Count_Boss_Line_Up()
    {
        Clean_Data_Boss_Line_Up();
        return m_All_Boss_Line_Up.Count;
    }

    private bool Check_Contain_In_Boss_Line_Up(int id_Boss)
    {
        Clean_Data_Boss_Line_Up();
        for (int i = 0; i < m_All_Boss_Line_Up.Count; i++)
        {
            if (m_All_Boss_Line_Up[i].transform.GetInstanceID() == id_Boss)
            {
                return true;
            }
        }

        return false;
    }

    private void Clean_Data_Boss_Line_Up()
    {
        for (int i = m_All_Boss_Line_Up.Count - 1; i >= 0; i--)
        {
            if (m_All_Boss_Line_Up[i] == null)
            {
                m_All_Boss_Line_Up.RemoveAt(i);
            }
        }
    }

    public void Add_Boss_Line_Up(Base_Boss base_Boss)
    {
        Clean_Data_Boss_Line_Up();
        if (!Check_Contain_In_Boss_Line_Up(base_Boss.transform.GetInstanceID()))
        {
            m_All_Boss_Line_Up.Add(base_Boss);
        }
    }

    public void Remove_Boss_Line_Up(Base_Boss base_Boss)
    {
        Clean_Data_Boss_Line_Up();
        if (Check_Contain_In_Boss_Line_Up(base_Boss.transform.GetInstanceID()))
        {
            m_All_Boss_Line_Up.Remove(base_Boss);
        }
    }

    #endregion

    #region ============ Manage Boss Line Up ==================

    List<GameObject> m_Tmp_Point_Line_Up = new List<GameObject>();

    private void Create_Pref_Point_Line_Up(Vector3 pos)
    {
        var objPref = Instantiate(Data_In_Game.Instance.Get_Pref_Point_Test_Line_Up(), Recycle_Bin.Instance.transform);
        objPref.transform.position = pos;

        m_Tmp_Point_Line_Up.Add(objPref);
    }

    public void Remove_First_Boss_Line_Up()
    {
        if (m_All_Boss_Line_Up.Count > 0)
        {
            Remove_And_Sort_Line_Up(m_All_Boss_Line_Up[0]);
        }
    }

    public Vector3 Get_Position_Line_Up()
    {
        Vector3 output;
        int count_Boss_Line_Up = m_All_Boss_Line_Up.Count;
        // Add new pos line up
        if (m_Data_Pos_Line_Up.Count == 0 || m_Data_Pos_Line_Up.Count < count_Boss_Line_Up)
        {
            output = Get_New_Pos_Line_Up();
            if (output != Get_Position_Door())
            {
                output.z = 0;
                m_Data_Pos_Line_Up.Add(output);
                //Create_Pref_Point_Line_Up(output);
            }
        }
        else
        {
            output = m_Data_Pos_Line_Up[count_Boss_Line_Up - 1];
        }

        return output;
    }

    public bool Check_Pos_Has_Exist_In_Line_Up(Vector3 pos)
    {
        return m_Data_Pos_Line_Up.Contains(pos);
    }

    Collider2D[] m_Collider_Not_Line_Up;

    private bool Check_Can_Line_Up(Vector3 pos)
    {
        m_Collider_Not_Line_Up = Physics2D.OverlapCircleAll(pos, 0.2f);
        for (int i = 0; i < m_Collider_Not_Line_Up.Length; i++)
        {
            if (m_Collider_Not_Line_Up[i].CompareTag(Tags.Collider_Line_Up))
            {
                return false;
            }
        }

        if (Level_Controller.Instance.Check_Exist_Pos_Line_Up_In_Other_Room(transform.GetInstanceID(), pos))
        {
            return false;
        }

        return true;
    }

    private Vector3 Get_New_Pos_Line_Up()
    {
        if (m_Data_Pos_Line_Up.Count <= 0)
        {
            return Get_New_Pos_Line_Up(Get_Door_Of_Room().transform.position,
                m_All_Boss_Attacking[0].transform.position);
        }

        if (m_Data_Pos_Line_Up.Count == 1)
        {
            return Get_New_Pos_Line_Up(m_All_Boss_Attacking[0].transform.position, m_Data_Pos_Line_Up[0]);
        }

        return Get_New_Pos_Line_Up(m_Data_Pos_Line_Up[m_Data_Pos_Line_Up.Count - 2],
            m_Data_Pos_Line_Up[m_Data_Pos_Line_Up.Count - 1]);
    }

    private Vector3 Get_New_Pos_Line_Up(Vector3 pos_Prev, Vector3 pos_Curr)
    {
        Type_Direction type_Dir_Check;
        Vector3 pos_Target;

        type_Dir_Check = pos_Prev.Get_Type_Direction(pos_Curr);

        pos_Target = pos_Curr.Get_Straight_Pos(type_Dir_Check);

        if (Check_Can_Line_Up(pos_Target))
        {
            return pos_Target;
        }
        else
        {
            // Check Clock
            Type_Direction type_Direction_Clock = type_Dir_Check.Get_Corner_Direction_By_Reflect_Clock();
            pos_Target = pos_Curr.Get_Straight_Pos(type_Direction_Clock);
            if (Check_Can_Line_Up(pos_Target))
            {
                return pos_Target;
            }
            else
            {
                // Check Reflect Clock
                type_Direction_Clock = type_Dir_Check.Get_Corner_Direction_By_Clock();
                pos_Target = pos_Curr.Get_Straight_Pos(type_Direction_Clock);
                if (Check_Can_Line_Up(pos_Target))
                {
                    return pos_Target;
                }
                else
                {
                    return Get_Position_Door();
                }
            }
        }
    }

    List<Vector3> m_Tmp_Pos_Line_Up = new List<Vector3>();
   [SerializeField] List<Vector3> m_Data_Pos_Line_Up = new List<Vector3>();

    private void Remove_And_Sort_Line_Up(Base_Boss base_Boss)
    {
        if (m_All_Boss_Line_Up.Contains(base_Boss))
        {
            int m_Id_Boss_Remove = -1;
            for (int i = 0; i < m_All_Boss_Line_Up.Count; i++)
            {
                if (m_All_Boss_Line_Up[i].transform.GetInstanceID() == base_Boss.transform.GetInstanceID())
                {
                    m_Id_Boss_Remove = i;
                    break;
                }
            }

            if (m_Id_Boss_Remove != -1)
            {
                m_Tmp_Pos_Line_Up.Clear();

                for (int i = m_Id_Boss_Remove; i < m_All_Boss_Line_Up.Count; i++)
                {
                    m_Tmp_Pos_Line_Up.Add(m_Data_Pos_Line_Up[i]);
                }

                int index = 0;
                for (int i = m_Id_Boss_Remove + 1; i < m_All_Boss_Line_Up.Count; i++)
                {
                    if (index > 0)
                    {
                        m_All_Boss_Line_Up[i].Moving_To_Line_Up(m_Tmp_Pos_Line_Up[index], m_Tmp_Pos_Line_Up[index - 1]);
                    }
                    else
                    {
                        m_All_Boss_Line_Up[i].Moving_To_Line_Up(m_Tmp_Pos_Line_Up[index],
                            Get_Door_Of_Room().transform.position);
                        //m_All_Boss_Line_Up[i].Force_Move_And_Attack_Door(this);
                    }

                    index += 1;
                }

                m_All_Boss_Line_Up[m_Id_Boss_Remove].Force_Move_And_Attack_Door(this);
                m_All_Boss_Line_Up.RemoveAt(m_Id_Boss_Remove);
                //m_Data_Pos_Line_Up.RemoveAt(m_Data_Pos_Line_Up.Count - 1);
            }
        }
    }

    #endregion



    #region ================= Check Skill 1 Raven =======================

    private void Check_Skill_1_Raven()
    {
        if (data_Player)
        {
            if (data_Player.Get_Type_Character() == Type_Character.Raven)
            {
                Build_Turret_From_Gift(Type_Turret.Mining_Machine, 1);
            }
        }
    }

    #endregion

    #region ================= Check Skill 2 Safeguard =======================

    [SerializeField] Base_Turret m_Door_Skill_2_Safeguard;
    private bool m_Is_Active_Skill_2_Safeguard = true;

    public Base_Turret Check_And_Build_Skill_2_Safeguard(Base_Turret door)
    {
        if (m_Door_Skill_2_Safeguard == null)
        {
            // Replace True = has character Safeguard And active Skill 2
            if (door && Get_Type_Character() == Type_Character.Safeguard && Active_Skill_2_Safeguard() == true)
            {
                m_Door_Skill_2_Safeguard = door.Start_Build_New_Turret(Type_Turret.Temp_Door);


                Vector3 pos = My_Utils.Get_New_Pos_By_Direction(
                    m_Door_Skill_2_Safeguard.gameObject.transform.localPosition, Get_Direction_Door_Initial());
                // sap cua
                //update ofjura
                m_Door_Skill_2_Safeguard.gameObject.transform
                    .DOMove(pos, 0.5f).OnComplete(() =>
                        {
                            m_Bed.State_Shield_Bed();
                            Is_Active_Skill_2_Safeguard();
                            //  My_Utils.Play_Pref_Effect(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Smoke_Temp_Door, m_Pos_Holy_Water);
                        }
                    );
            }
        }

        return m_Door_Skill_2_Safeguard;
    }


    public Base_Turret Get_Door_Skill_2_Safeguard()
    {
        return m_Door_Skill_2_Safeguard;
    }


    private int m_Count_Save_Door_By_Ads = 0;
    [SerializeField] bool m_Hide_Layout = true;

    public void Save_Door_Index()
    {
        m_Count_Save_Door_By_Ads -= 1;
    }

    public void Hide_Layout_False()
    {
        m_Hide_Layout = false;
    }

    public bool Hide_layout()
    {
        return m_Hide_Layout;
    }

    public int Save_Door()
    {
        return m_Count_Save_Door_By_Ads;
    }

    public bool Check_Is_Active_Skill_2_Safeguard()
    {
        Debug.Log(m_Is_Active_Skill_2_Safeguard + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        return Get_Type_Character() == Type_Character.Safeguard && Active_Skill_2_Safeguard() == true;
    }

    public void Is_Active_Skill_2_Safeguard()
    {
        m_Is_Active_Skill_2_Safeguard = false;
    }

    public bool Active_Skill_2_Safeguard()
    {
        return m_Is_Active_Skill_2_Safeguard;
    }

    //updateofjura
    [SerializeField] Base_Turret m_Real_Door_Skill_2_Safeguard;

    public Base_Turret Check_And_Build_Skill_2_Safeguard_Real_Door(Base_Turret Real_Door)
    {
        if (m_Real_Door_Skill_2_Safeguard == null)
        {
            // Replace True = has character Safeguard And active Skill 2

            m_Real_Door_Skill_2_Safeguard = Real_Door.Start_Build_New_Turret(Type_Turret.Door);
        }

        return m_Real_Door_Skill_2_Safeguard;
    }

    [SerializeField] private Vector3 m_Pos_Door_Initial = Vector3.zero;

    public void Set_Pos_Door_Initial(Vector3 pos_Door)
    {
        m_Pos_Door_Initial = pos_Door;
    }

    public Vector3 Get_Pos_Door_Initial()
    {
        return m_Pos_Door_Initial;
    }

    [SerializeField] Type_Direction m_Type_Direction_Close;

    public void Set_Direction_Door_Initial(Type_Direction pos_Door)
    {
        m_Type_Direction_Close = pos_Door;
    }

    public Type_Direction Get_Direction_Door_Initial()
    {
        return m_Type_Direction_Close;
    }

    #endregion
}