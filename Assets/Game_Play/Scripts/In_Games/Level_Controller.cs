using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;


public class Level_Controller : Singleton<Level_Controller>
{
    [SerializeField] Bool_Global_Variable m_Live_Data_Loop_Time;
    [SerializeField] Transform m_Parent_Room;
//   [SerializeField] NavMeshSurface m_Nav_Mesh;
    [SerializeField] All_Point_Restore_Health m_All_Point_Restore_Health;
    [SerializeField] Point_Display_Player m_Point_Display_Player;
    [SerializeField] SpriteRenderer m_Ground_Tile;
    [SerializeField] GameObject m_Obj_Tut_Find_Room;

    [SerializeField] public List<Room_Controller> m_All_Room_Empty;
    [SerializeField] private List<Room_Controller> m_All_Room_Not_Has_Player_Move;
    [SerializeField] public List<Room_Controller> m_All_Room_Has_Player;

    Room_Controller m_Room_Tut;
    // NavMeshSurface – để xây dựng và kích hoạt bề mặt navmesh cho một loại tác nhân.---? XÂY DỰNG- KÍCH HOẠT
    // NavMeshModifier – ảnh hưởng đến việc tạo navmesh của các loại vùng navmesh, dựa trên phân cấp chuyển đổi.--> tạo navmesh- dựa trên phân cấp chuyển ổi
    //  NavMeshModifierVolume – ảnh hưởng đến việc tạo navmesh của các loại vùng navmesh, dựa trên thể tích.----> tạo navmesh -> dựa trên thể tích
    // NavMeshLink – kết nối các bề mặt navmesh giống nhau hoặc khác nhau cho một loại tác nhân. ----> kết nối các bề mặt cho 1 loại tác nhân
 
    private void Start()
    {
        if (m_All_Room_Empty.Count <= 0)
        {
            m_All_Room_Empty = new List<Room_Controller>();
        }
        else if (m_All_Room_Not_Has_Player_Move.Count <= 0)
        {
            m_All_Room_Not_Has_Player_Move = new List<Room_Controller>();
        }
        else if (m_All_Room_Has_Player.Count <= 0)
        {
            m_All_Room_Has_Player = new List<Room_Controller>();
        }


        m_All_Room_Not_Has_Player_Move.Clear();
        m_Map_Count_Room_Has_Player.Clear();
        m_Map_Turn_Force_Boss_Attack_Player.Clear();

        m_Room_Tut = null;

        if (m_Obj_Tut_Find_Room)
        {
            if (DataSaved.Get_Current_Loading_Level() == 0 &&
                DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story &&
                !DataSaved.Get_Is_Complete_Tutorial())
            {
              
                for (int i = m_All_Room_Empty.Count - 1; i >= 0; i--)
                {
                    if (m_All_Room_Empty[i].name == "Room_4")
                    {
                        m_Room_Tut = m_All_Room_Empty[i];
                        m_All_Room_Empty.RemoveAt(i);
                        break;
                    }
                }

                m_Obj_Tut_Find_Room.Set_Active(true);
            }
            else
            {
                m_Obj_Tut_Find_Room.Set_Active(false);
            }
        }

        m_All_Room_Not_Has_Player_Move.AddRange(m_All_Room_Empty);

        m_All_Room_Has_Player.Clear();
        m_All_Room_Empty.Shuffle();
        index_Random = 0;

        if (Canvas_In_Game.Instance)
        {
            Canvas_In_Game.Instance.Get_Camera_Movement().Set_Map_Renderer(m_Ground_Tile);
        }

        if (RootManager.Check_AB_Boss_Line_Up())
        {
            m_Live_Data_Loop_Time = Data_In_Game.Instance.Get_Live_Data_Loop_Time();
            if (m_Live_Data_Loop_Time)
            {
                m_Live_Data_Loop_Time.OnValueChanged.AddListener(Loop_Time);
            }
        }
    }



    public Room_Controller Room1()
    {
        return m_All_Room_Empty[0];
    }

    private void OnDisable()
    {
        if (m_Live_Data_Loop_Time)
        {
            m_Live_Data_Loop_Time.OnValueChanged.RemoveListener(Loop_Time);
        }
    }

    private void Loop_Time()
    {
        //for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
        //{
        //    if (m_All_Room_Has_Player[i].Get_Bed_Controller() && m_All_Room_Has_Player[i].Get_Count_Boss_Attacking() < 2)
        //    {
        //        // Uu tiem check current room co line up ko
        //        if (m_All_Room_Has_Player[i].Get_Count_Boss_Line_Up() > 0)
        //        {
        //            m_All_Room_Has_Player[i].Remove_First_Boss_Line_Up();
        //            break;
        //        }
        //    }
        //}

        for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
        {
            if (m_All_Room_Has_Player[i].Get_Bed_Controller())
            {
                m_All_Room_Has_Player[i].Loop_Check_Boss_Attacking();
            }
        }

        // Case Boss attaking room but Room not exist that boss attacking
        //Boss_Manager.Instance.Loop_Time();
    }

    //private Room_Controller Find_Room_Ready_To_Transfer(Room_Controller prev_Room)
    //{
    //    Room_Controller output = null;
    //    int m_Max_Line_Up = int.MinValue; 
    //    for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
    //    {
    //        if (m_All_Room_Has_Player[i].Get_Bed_Controller() &&
    //            //!m_All_Room_Has_Player[i].Equal_Id_Room(prev_Room) &&
    //            m_All_Room_Has_Player[i].Get_Count_Boss_Line_Up() > 0)
    //        {
    //            if (m_All_Room_Has_Player[i].Get_Count_Boss_Line_Up() > m_Max_Line_Up)
    //            {
    //                m_Max_Line_Up = m_All_Room_Has_Player[i].Get_Count_Boss_Line_Up();
    //                output = m_All_Room_Has_Player[i];
    //            }
    //        }
    //    }

    //    return output;
    //}

    #region ============ Config Tut Anim Hand =================

    public Transform Get_Bed_Empty()
    {
        return m_Bed_Empty;
    }

    public Transform Get_Door_Empty()
    {
        return m_Door_Empty;
    }

    public void Move_To_Bed_Empty()
    {
        if (m_Room_Tut && m_Bed_Empty)
        {
            // Canvas_In_Game.Instance.Get_UI_Fake_Joystick()
            //     .Set_Target_Move(m_Bed_Empty.transform, m_Bed_Empty.transform.position);
        }
    }

    public void Move_To_Door_Empty()
    {
        if (m_Room_Tut && m_Door_Empty)
        {
            // Canvas_In_Game.Instance.Get_UI_Fake_Joystick().Set_Target_Move(m_Door_Empty, m_Pos_Door);
        }
    }

    Transform m_Bed_Empty;
    Transform m_Door_Empty;
    Vector3 m_Pos_Door;

    public void Set_Door_Empty(Transform door, Vector3 pos)
    {
        if (m_Room_Tut)
        {
            m_Door_Empty = door;
            m_Pos_Door = pos;
            // Canvas_In_Game.Instance.Get_UI_Fake_Joystick().Set_Target_Move(door, pos);
        }
    }


    public void Set_Bed_Empty(Transform bed)
    {
        if (m_Room_Tut)
        {
            m_Bed_Empty = bed;
        }
    }

    #endregion

    public void Hide_Tut_Find_Empty_Room()
    {
        m_Obj_Tut_Find_Room.Set_Active(false);
    }

    #region =================== Set Data Form Editor ===================

  

    public void Set_Point_Display_Player(Point_Display_Player point_Display_Player)
    {
        m_Point_Display_Player = point_Display_Player;
    }

    public void Set_All_Point_Restore_Health(All_Point_Restore_Health all_Point_Restore_Health)
    {
        m_All_Point_Restore_Health = all_Point_Restore_Health;
    }

    public void Set_Parent_Room(Transform transform)
    {
        m_Parent_Room = transform;
    }

    public Transform Get_Parent_Room()
    {
        return m_Parent_Room;
    }

    public void Add_Data_To_Room_Empty(Room_Controller room)
    {
        if (!m_All_Room_Empty.Contains(room))
        {
            m_All_Room_Empty.Add(room);
        }
    }

    public int Get_Sum_Room()
    {
        return m_All_Room_Empty.Count;
    }

    #endregion

    public void Start_Spawn_Character()
    {
        Start_Bake_Mesh();
    }

    public Vector3 Get_Random_Position_Player_Start_Game()
    {
        return m_Point_Display_Player.Get_Random_Postion();
    }

    public Vector3 Get_First_Position_Player_Start_Game()
    {
        return m_Point_Display_Player.Get_Pos_First();
    }

    private void Start_Bake_Mesh()
    {
        // if (m_Nav_Mesh)
        // {
        //     m_Nav_Mesh.BuildNavMesh();
        // }
    }

    public Room_Controller Get_Room_Curr_Player()
    {
        var curr_Player = Game_Controller.Instance.Get_Player_Curr();
        Debug.LogError(m_All_Room_Has_Player.Count + " :Get_Room_Curr_Player");
        for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
        {
            if (m_All_Room_Has_Player[i] && m_All_Room_Has_Player[i].Get_Type_Player() == curr_Player)
            {
                return m_All_Room_Has_Player[i];
            }
        }
        Debug.LogError(   "NULL : Get_Room_Curr_Player");
        return null;
    }

    // TODO: Using for mode Player
    Room_Controller m_Tmp_Room_Player;

    public bool Check_Is_Empty_Slot_To_Build()
    {
        m_Tmp_Room_Player = Get_Room_Curr_Player();
        if (m_Tmp_Room_Player)
        {
            return m_Tmp_Room_Player.Check_Is_Empty_Slot_To_Build();
        }

        return false;
    }

    public void Add_Data_To_Room_Has_Player(Room_Controller room_Controller)
    {
        if (!m_All_Room_Has_Player.Contains(room_Controller))
        {
            m_All_Room_Has_Player.Add(room_Controller);

            if (m_All_Room_Empty.Contains(room_Controller))
            {
                m_All_Room_Empty.Remove(room_Controller);
            }

            if (m_All_Room_Not_Has_Player_Move.Contains(room_Controller))
            {
                m_All_Room_Not_Has_Player_Move.Remove(room_Controller);
            }
        }
    }

    public void Remove_Data_To_Room_Has_Player(Room_Controller room_Controller)
    {
        if (m_All_Room_Has_Player.Contains(room_Controller))
        {
            m_All_Room_Has_Player.Remove(room_Controller);
        }
    }

    public Vector3 Get_Random_Pos_Point_Restore_Health()
    {
        return m_All_Point_Restore_Health.Get_Random_Point();
    }

    public Vector3 Get_Nearest_Point_Health(Vector2 pos_Boss)
    {
        return m_All_Point_Restore_Health.Get_Nearest_Point_Health(pos_Boss);
    }

    public List<Room_Controller> Get_All_Room_Has_Player()
    {
        return m_All_Room_Has_Player;
    }

    public int Get_Count_All_Room_Has_Player()
    {
        return m_All_Room_Has_Player.Count;
    }

    public Room_Controller Get_Room_Has_Player_By_Index(int id)
    {
        if (id < 0) return null;

        if (id < m_All_Room_Has_Player.Count)
        {
            return m_All_Room_Has_Player[id];
        }

        return null;
    }

    GameObject[] all_Beds;
    Bed_Controller bed_Controller_ReCheck;

    public void Recheck_Room_Has_Player()
    {
        m_All_Room_Has_Player.Clear();
        all_Beds = GameObject.FindGameObjectsWithTag(Tags.Bed);

        for (int i = 0; i < all_Beds.Length; i++)
        {
            if (all_Beds[i])
            {
                bed_Controller_ReCheck = all_Beds[i].GetComponent<Bed_Controller>();
                if (bed_Controller_ReCheck && bed_Controller_ReCheck.type_Player != Type_Player.None &&
                    bed_Controller_ReCheck.Get_Room_Controller().Get_Player_Owner() != Type_Player.None)
                {
                    m_All_Room_Has_Player.Add(bed_Controller_ReCheck.Get_Room_Controller());
                }
            }
        }
    }

    public bool Check_Has_Room_Has_Player()
    {
        for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
        {
            if (m_All_Room_Has_Player[i] && m_All_Room_Has_Player[i].Get_Has_Character_Inside_Room())
            {
                return true;
            }
        }

        return false;
    }

    int index_Random = 0;
    Room_Controller m_Room_Player_Will_Move;

    public Room_Controller Get_Random_Room()
    {
        if (m_All_Room_Empty.Count < 0)
        {
            return null;
        }

        m_Room_Player_Will_Move = m_All_Room_Empty[index_Random % m_All_Room_Empty.Count];

        if (m_All_Room_Not_Has_Player_Move.Contains(m_Room_Player_Will_Move))
        {
            m_All_Room_Not_Has_Player_Move.Remove(m_Room_Player_Will_Move);
        }

        index_Random += 1;

        return m_Room_Player_Will_Move;
    }

    public Room_Controller Get_Room_Empty(Transform pos_Player, bool m_Is_Nearest)
    {
        if (m_Room_Tut) return m_Room_Tut;

        if (m_Is_Nearest)
        {
            if (m_All_Room_Not_Has_Player_Move.Count > 0)
            {
                float min_Distance = int.MaxValue;
                Room_Controller room_Nearest = null;
                float distance;
                for (int i = 0; i < m_All_Room_Not_Has_Player_Move.Count; i++)
                {
                    if (m_All_Room_Not_Has_Player_Move[i])
                    {
                        distance = (pos_Player.position -
                                    m_All_Room_Not_Has_Player_Move[i].Get_Position_Door_Not_Close()).sqrMagnitude;
                        if (distance < min_Distance)
                        {
                            min_Distance = distance;
                            room_Nearest = m_All_Room_Not_Has_Player_Move[i];
                        }
                    }
                }

                return room_Nearest;
            }
            else
            {
                if (m_All_Room_Empty.Count > 0)
                {
                    float min_Distance = int.MaxValue;
                    Room_Controller room_Nearest = null;
                    float distance;
                    for (int i = 0; i < m_All_Room_Empty.Count; i++)
                    {
                        if (m_All_Room_Empty[i])
                        {
                            distance = (pos_Player.position - m_All_Room_Empty[i].Get_Position_Door()).sqrMagnitude;
                            if (distance < min_Distance)
                            {
                                min_Distance = distance;
                                room_Nearest = m_All_Room_Empty[i];
                            }
                        }
                    }

                    return room_Nearest;
                }
            }
        }
        else
        {
            if (m_All_Room_Not_Has_Player_Move.Count > 0)
            {
                m_All_Room_Not_Has_Player_Move.Shuffle();
                m_Room_Player_Will_Move = m_All_Room_Not_Has_Player_Move[0];
                m_All_Room_Not_Has_Player_Move.RemoveAt(0);
                return m_Room_Player_Will_Move;
            }

            if (m_All_Room_Empty.Count > 0)
            {
                float min_Distance = int.MaxValue;
                Room_Controller room_Nearest = null;
                float distance;
                for (int i = 0; i < m_All_Room_Empty.Count; i++)
                {
                    if (m_All_Room_Empty[i])
                    {
                        distance = (pos_Player.position - m_All_Room_Empty[i].Get_Position_Door()).sqrMagnitude;
                        if (distance < min_Distance)
                        {
                            min_Distance = distance;
                            room_Nearest = m_All_Room_Empty[i];
                        }
                    }
                }

                return room_Nearest;
            }
        }

        return null;
    }

    #region ============= Boss Line Up ================

    SortedDictionary<int, List<int>> m_Map_Amount_Room_Line_Up = new SortedDictionary<int, List<int>>();
    List<int> m_All_Id_Room = new List<int>();

    public Room_Controller Find_Room_V2(Room_Controller prev_Room, Base_Boss base_Boss)
    {
        if (Check_Has_Room_Line_Up(prev_Room))
        {
            return Find_Room_To_Line_Up(prev_Room, base_Boss);
        }
        else
        {
            var output = Find_Room_Normal(base_Boss);
            if (output.Get_Count_Boss_Attacking() >= 2)
            {
                return Find_Room_Has_Lower_2_Player(-1);
            }
            else
            {
                return output;
            }
        }
    }

    private Room_Controller Find_Room_To_Line_Up(Room_Controller prev_Room, Base_Boss base_Boss)
    {
        // Tim tat ca cac room dang co so luong line up it nhat va random trong so do
        m_Map_Amount_Room_Line_Up.Clear();
        m_All_Id_Room.Clear();
        int min_Amount_Line_Up = int.MaxValue;
        int tmp_Count_Boss_Line_Up;

        for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
        {
            if (m_All_Room_Has_Player[i].Get_Bed_Controller() && !m_All_Room_Has_Player[i].Equal_Id_Room(prev_Room))
            {
                tmp_Count_Boss_Line_Up = m_All_Room_Has_Player[i].Get_Count_Boss_Line_Up();
                if (tmp_Count_Boss_Line_Up < min_Amount_Line_Up)
                {
                    min_Amount_Line_Up = tmp_Count_Boss_Line_Up;
                }

                if (m_Map_Amount_Room_Line_Up.ContainsKey(tmp_Count_Boss_Line_Up))
                {
                    m_Map_Amount_Room_Line_Up[tmp_Count_Boss_Line_Up]
                        .Add(m_All_Room_Has_Player[i].transform.GetInstanceID());
                }
                else
                {
                    List<int> list_Room = new List<int>();
                    list_Room.Add(m_All_Room_Has_Player[i].transform.GetInstanceID());

                    m_Map_Amount_Room_Line_Up[tmp_Count_Boss_Line_Up] = list_Room;
                }
            }
        }

        // Sort Map Room by key
        if (m_Map_Amount_Room_Line_Up.Count > 0)
        {
            m_All_Id_Room.AddRange(m_Map_Amount_Room_Line_Up[min_Amount_Line_Up]);
            if (m_All_Id_Room.Count > 0)
            {
                m_All_Id_Room.Shuffle();
                for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
                {
                    if (m_All_Room_Has_Player[i].Get_Bed_Controller() &&
                        m_All_Room_Has_Player[i].transform.GetInstanceID() == m_All_Id_Room[0])
                    {
                        return m_All_Room_Has_Player[i];
                    }
                }

                return Find_Room_Normal(base_Boss);
            }
            else
            {
                return Find_Room_Normal(base_Boss);
            }
        }
        else
        {
            return Find_Room_Normal(base_Boss);
        }
    }

    List<Room_Controller> Room_Has_Lower_2_Player = new List<Room_Controller>();

    private Room_Controller Find_Room_Has_Lower_2_Player(int id_Room)
    {
        Room_Has_Lower_2_Player.Clear();
        for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
        {
            if (m_All_Room_Has_Player[i].Get_Bed_Controller() &&
                m_All_Room_Has_Player[i].Get_Count_Boss_Attacking() < 2 &&
                m_All_Room_Has_Player[i].transform.GetInstanceID() != id_Room)
            {
                Room_Has_Lower_2_Player.Add(m_All_Room_Has_Player[i]);
            }
        }

        if (Room_Has_Lower_2_Player.Count > 0)
        {
            Room_Has_Lower_2_Player.Shuffle();
            return Room_Has_Lower_2_Player[0];
        }

        return null;
    }

    Room_Controller m_Tmp_Room_Has_Lower_2_Player;

    public void Room_Is_Full_Attacking(Room_Controller room_Controller, Base_Boss base_Boss, bool is_From_Boss_Manager)
    {
        if (m_All_Room_Has_Player.Count <= 1)
        {
            if (is_From_Boss_Manager)
            {
                base_Boss.Force_Move_And_Attack_Door(room_Controller);
            }
            else
            {
                Base_Boss boss_Will_Move = room_Controller.Get_Last_Boss_Attacking();
                if (boss_Will_Move)
                {
                    boss_Will_Move.Force_Move_And_Attack_Door(room_Controller);
                }
            }
        }
        else
        {
            m_Tmp_Room_Has_Lower_2_Player = Find_Room_Has_Lower_2_Player(room_Controller.transform.GetInstanceID());
            if (m_Tmp_Room_Has_Lower_2_Player)
            {
                Base_Boss boss_Will_Move = room_Controller.Get_Last_Boss_Attacking();
                if (boss_Will_Move)
                {
                    boss_Will_Move.Force_Move_And_Attack_Door(m_Tmp_Room_Has_Lower_2_Player);
                }
            }
            else
            {
                m_Tmp_Room_Has_Lower_2_Player = Find_Room_To_Line_Up(room_Controller, base_Boss);
                if (m_Tmp_Room_Has_Lower_2_Player)
                {
                    Base_Boss boss_Will_Move = room_Controller.Get_Last_Boss_Attacking();
                    if (boss_Will_Move)
                    {
                        boss_Will_Move.Force_Move_And_Attack_Door(m_Tmp_Room_Has_Lower_2_Player);
                    }
                }
            }
        }
    }

    private bool Check_Has_Room_Line_Up(Room_Controller prev_Room)
    {
        int count_Room_Has_2_Player = 0;
        int sum_Real_Player = 0;
        for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
        {
            if (m_All_Room_Has_Player[i].Get_Bed_Controller() &&
                !m_All_Room_Has_Player[i].Equal_Id_Room(prev_Room))
            {
                sum_Real_Player += 1;
                if (m_All_Room_Has_Player[i].Get_Count_Boss_Line_Up() > 0)
                {
                    return true;
                }

                if (m_All_Room_Has_Player[i].Get_Count_Boss_Attacking() >= 2)
                {
                    count_Room_Has_2_Player += 1;
                }
            }
        }

        // Case: cac room khac deu co 2 boss attack nhung ko co boss line up
        if (count_Room_Has_2_Player >= sum_Real_Player)
        {
            return true;
        }

        return false;
    }

    public bool Check_Exist_Pos_Line_Up_In_Other_Room(int id_Room, Vector3 pos)
    {
        for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
        {
            if (m_All_Room_Has_Player[i] &&
                m_All_Room_Has_Player[i].Get_Bed_Controller() &&
                id_Room != m_All_Room_Has_Player[i].transform.GetInstanceID() &&
                m_All_Room_Has_Player[i].Check_Pos_Has_Exist_In_Line_Up(pos))
            {
                return true;
            }
        }

        return false;
    }

    #region ---------------- Find Room Normal ----------------

    Dictionary<int, int> m_Map_Turn_Force_Boss_Attack_Player = new Dictionary<int, int>();
    Dictionary<int, int> m_Map_Count_Room_Has_Player = new Dictionary<int, int>();

    private Room_Controller Find_Room_Normal(Base_Boss base_Boss)
    {
        try
        {
            int id_Boss = base_Boss.transform.GetInstanceID();
            Room_Controller m_Tmp_room_Has_Character = null;
            Room_Controller m_Tmp_Room_Target = null;
            bool m_Has_Bed_Not_Kill = false;
            int m_Turn_Force_Has_Player = Get_Turn_Force_Boss_Attack_Player(id_Boss, base_Boss.m_Type_Level);
            int m_Count_Room_Has_Player = base_Boss.Get_Count_Room_Has_Player();

            for (int i = 0; i < m_All_Room_Has_Player.Count; i++)
            {
                if (m_All_Room_Has_Player[i] && m_All_Room_Has_Player[i].Check_Bed_Not_Kill())
                {
                    m_Has_Bed_Not_Kill = true;
                    return m_All_Room_Has_Player[i];
                }
            }

            if (Get_Count_All_Room_Has_Player() == 2)
            {
                Add_Data_Map_Count_Room_Has_Player(id_Boss);
                return Get_Room_Has_Player_By_Index(m_Map_Count_Room_Has_Player[id_Boss] % 2);
            }
            else if (Get_Count_All_Room_Has_Player() == 1)
            {
                return Get_Room_Has_Player_By_Index(0);
            }

            base_Boss.Check_Data_Room_Will_Attacking();

            if (base_Boss.Get_Count_List_Room_Will_Attacking() <= 0)
            {
                base_Boss.Add_Data_List_Room_Will_Attacking(m_All_Room_Has_Player);

                if (m_Turn_Force_Has_Player > base_Boss.Get_Count_List_Room_Will_Attacking())
                {
                    m_Turn_Force_Has_Player = base_Boss.Get_Count_List_Room_Will_Attacking();
                }
            }

            if (base_Boss.Get_Count_List_Room_Will_Attacking() <= 0)
            {
                return m_Tmp_Room_Target;
            }

            m_Tmp_room_Has_Character = base_Boss.Get_Room_Has_Player_In_List_Room_Will_Attacking();

            if (m_Tmp_room_Has_Character)
            {
                if (m_Has_Bed_Not_Kill)
                {
                    return m_Tmp_room_Has_Character;
                }
                else
                {
                    m_Count_Room_Has_Player += 1;
                    base_Boss.Increase_Count_Room_Has_Player();
                    if (m_Count_Room_Has_Player == 1)
                    {
                        return m_Tmp_room_Has_Character;
                    }

                    if (m_Count_Room_Has_Player % 2 == 0)
                    {
                        return m_Tmp_room_Has_Character;
                    }
                }
            }
            else
            {
                m_Tmp_Room_Target = base_Boss.Get_Room_In_List_Room_Will_Attacking(0);
                if (m_All_Room_Has_Player.Count == 1)
                {
                    return m_Tmp_Room_Target;
                }

                if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
                {
                    if (m_Tmp_Room_Target.Get_Player_Owner() == Game_Controller.Instance.Get_Player_Curr())
                    {
                        base_Boss.Remove_Room_In_List_Room_Will_Attacking(0);
                        m_Tmp_Room_Target = base_Boss.Get_Room_In_List_Room_Will_Attacking(0);
                    }

                    m_Count_Room_Has_Player += 1;
                    base_Boss.Increase_Count_Room_Has_Player();
                    if (m_Count_Room_Has_Player >= m_Turn_Force_Has_Player)
                    {
                        m_Count_Room_Has_Player = 0;
                        base_Boss.Reset_Count_Room_Has_Player();
                        Init_Turn_Force_Has_Player(base_Boss.m_Type_Level);

                        return Get_Room_Curr_Player();
                    }
                    else
                    {
                        base_Boss.Remove_Room_In_List_Room_Will_Attacking(0);
                    }
                }
            }

            return m_Tmp_Room_Target;
        }
        catch (Exception)
        {
            return null;
        }
    }

    private void Add_Data_Map_Count_Room_Has_Player(int key)
    {
        if (m_Map_Count_Room_Has_Player.ContainsKey(key))
        {
            m_Map_Count_Room_Has_Player[key] += 1;
        }
        else
        {
            m_Map_Count_Room_Has_Player[key] = 0;
        }
    }

    private int Get_Turn_Force_Boss_Attack_Player(int key, Type_Level level_Boss)
    {
        if (!m_Map_Turn_Force_Boss_Attack_Player.ContainsKey(key))
        {
            m_Map_Turn_Force_Boss_Attack_Player[key] = Init_Turn_Force_Has_Player(level_Boss);
        }

        return m_Map_Turn_Force_Boss_Attack_Player[key];
    }

    private int Init_Turn_Force_Has_Player(Type_Level type_Level)
    {
        if (m_All_Room_Has_Player.Count <= 2)
        {
            return 2;
        }
        else
        {
            if (type_Level == Type_Level.Normal || type_Level == Type_Level.Hard)
            {
                return 3;
            }
            else
            {
                return UnityEngine.Random.Range(3, 4);
            }
        }
    }

    #endregion

    #endregion
}