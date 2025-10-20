using System.Collections.Generic;
using UnityEngine;


public class Base_Turret : MonoBehaviour
{
    public Room_Controller m_Room_Controller;
    [SerializeField] GameObject m_Obj_Owner;
    public GameObject m_Obj_Upgrade;
    public Type_Player type_Player = Type_Player.None;
    public Type_Turret type_Turret;
    public Type_Character m_Type_Character;
    public int level_Curr;

   
   [SerializeField] bool m_Is_Live;
    public float max_Health;
    public Data_Player data_Player;
    public Model_Price price_Upgrade;
    public Model_Requirement requirement_Upgrade;
    bool is_Init_Data;
    public Model_Info_Turret model_Info_Turret_Upgrade;
    public Model_Info_Turret model_Info_Turret_Curr;
    public Base_Boss m_Base_Boss;

    public bool m_Is_Can_Click = true;
    //updateofjura

    public bool m_Is_Remove = true;
    public int indexCoinDic;
    [SerializeField] public Data_Type_Rank_Character _rankCharacter;

    //public static bool is_Skill_Safeguard = false;
    public virtual void Start()
    {
        m_Is_Live = true;
        if (m_Room_Controller == null)
        {
            Set_Room_Controller(transform.parent.GetComponent<Room_Controller>());
        }

        Init_Data();
    }

    private void Awake()
    {
        type_Player = Type_Player.None;

        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {

            //    Debug.LogError("load co bi lap khong");
            ConfigMissionUpgrade(); // he thong nhiem vu
        }


    }

    public void Set_Can_Click(bool is_Click)
    {
        m_Is_Can_Click = is_Click;
    }
    //updateofjura
    // tao 1 bien de ngan remove
    public void Set_Can_Remove(bool is_Click)
    {
        m_Is_Remove = is_Click;
    }

    public Type_Turret Get_Type_Turret()
    {
        return type_Turret;
    }

    public virtual Vector3 Get_Position_Door()
    {
        return transform.position;
    }

    public Model_Price Get_Price_Upgrade()
    {
        return price_Upgrade;
    }

    public void Set_Level_Curr(int level)
    {
        level_Curr = level;
    }

    public Room_Controller Get_Room_Controller()
    {
        return m_Room_Controller;
    }

    #region =========== Event Click ===========

    public void On_Ready_Click_Turret()
    {
        if (Is_Owner())
        {
            On_Turret_Click();
        }
    }

    #endregion

    #region =========== Virtual Method ===============

    public virtual void Take_Damage(float damage, Base_Boss base_Boss)
    {

        m_Base_Boss = base_Boss;
    }

    public virtual void Set_Data_Health(float health)
    {

    }

    public virtual void On_Died()
    {
        Remove_Item_Success();
        m_Room_Controller.RemoveCoinDicRoom(indexCoinDic);
    }

    public virtual void Before_Destroy_Game_Object() { }

    public virtual bool Check_Can_Click()
    {
        return true;
    }
    //updateofjura
    public virtual bool Check_Can_Remove()
    {
        return true;
    }
    // cap nhat ui upgrade turret

    public virtual void On_Turret_Click()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (!Check_Can_Click())
        {
            return;
        }







        if (model_Info_Turret_Upgrade == null)
        {
            model_Info_Turret_Upgrade = Data_In_Game.Instance.Get_Data_Info_Turret_Manager().Get_Data_Info_Turret(type_Turret, level_Curr + 1);
        }
        if (model_Info_Turret_Curr == null)
        {
            model_Info_Turret_Curr = Data_In_Game.Instance.Get_Data_Info_Turret_Manager().Get_Data_Info_Turret(type_Turret, level_Curr);
        }

        if (type_Turret == Type_Turret.Turret_Pierce)
        {
            if (level_Curr >= 3)
            {
                //UI_Alert_InGame.Instance.Play_Anim_Max_Level();
                return;
            }
        }
        else
        {
            if (level_Curr >= 19)
            {
                // UI_Alert_InGame.Instance.Play_Anim_Max_Level();
                return;
            }
        }


        Canvas_In_Game.Instance.Get_UI_Upgrade().Open_UI(this, type_Player,
            model_Info_Turret_Upgrade,
            model_Info_Turret_Curr.price_Upgrades);
    }

    public virtual void Update_Model_Price()
    {
        if (type_Turret == Type_Turret.Ground)
        {
            price_Upgrade = new Model_Price();
            price_Upgrade.price_Coin = 0;
            price_Upgrade.price_Energy = 0;
        }
        else
        {
            //if(RootManager.Get_Type_Level_Plays() == Type_Level_Play.Hard_4_Minutes)
            //{
            //    if (type_Turret == Type_Turret.Door)
            //    {
            //        level_Curr += 4;
            //    }
            //    else if (type_Turret == Type_Turret.Turret)
            //    {
            //        level_Curr += 3;
            //    }
            //}

            model_Info_Turret_Curr = Data_In_Game.Instance.Get_Data_Info_Turret_Manager().Get_Data_Info_Turret(type_Turret, level_Curr);
            model_Info_Turret_Upgrade = Data_In_Game.Instance.Get_Data_Info_Turret_Manager().Get_Data_Info_Turret(type_Turret, level_Curr + 1);
            price_Upgrade = model_Info_Turret_Upgrade.price_Upgrades;
            requirement_Upgrade = model_Info_Turret_Upgrade.requirement_Upgrades;

            if (model_Info_Turret_Curr.model_Skills != null)
            {
                float m_hp_Bonus = 0f;
                m_hp_Bonus += model_Info_Turret_Curr.model_Skills.HP;





                max_Health = m_hp_Bonus;
            }
            else
            {
                max_Health = 0;
            }
        }
    }

    //public void Update_Data_Infor_When_Max_Level()
    //{
    //    Model_Price new_Price = new Model_Price();
    //    new_Price.price_Coin = 

    //    model_Info_Turret_Curr.price_Upgrades = new Model_Price();
    //}





    public virtual Base_Turret Start_Build_New_Turret(Type_Turret type_Turret, int level = 0, bool m_Is_Build_From_Skill = false)
    {
        if (Game_Controller.Get_Is_End_Level()) return null;
        if (type_Player == Type_Player.None) return null;

        var pref_Turret = Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Turret(type_Turret);
        if (pref_Turret == null)
        {
            return null;
        }

        // Create new Turret here

        var obj_Turret = Instantiate(pref_Turret, transform.parent);


        //UPDATEOFJURA
        //TODO UNLOCK SKILL2 SAFEGUARD
        if (m_Type_Character == Type_Character.Safeguard && type_Turret == Type_Turret.Temp_Door)
        {
            obj_Turret.transform.localPosition = m_Room_Controller.Get_Pos_Door_Initial();
        }
        else
        {
            obj_Turret.transform.localPosition = transform.localPosition;
        }

        Debug.Log(obj_Turret.transform.localPosition + "save by me");




        Base_Turret turret_Controller = obj_Turret.GetComponent<Base_Turret>();
        if (turret_Controller)
        {
            turret_Controller.Set_Room_Controller(m_Room_Controller);


            turret_Controller.Set_Type_Player(type_Player);
            if (type_Player == Type_Player.Player_1)
            {

                if (type_Turret == Type_Turret.Turret)
                {
                    Database.instance.SetDameTaken(true);
                }
                Debug.LogError("nang cap cho title");
                DataHomeGame.Instance.Set_Build_AllTurret(type_Turret);

            }

            if (type_Turret == Type_Turret.Turret || type_Turret == Type_Turret.Energy_Tower)
            {
                level -= 1;
                if (level < 0) level = 0;
                turret_Controller.Set_Level_Curr(level);
            }
            else
            {
                //updateofjura
                if (m_Type_Character == Type_Character.Safeguard && type_Turret == Type_Turret.Door)
                {
                    Door_Controller doorController = turret_Controller as Door_Controller;
                    turret_Controller.GetComponent<Door_Controller>().InCrease_Level();
                }
                else
                {
                    turret_Controller.Set_Level_Curr(0);
                }


                // k the remove va k the click 

                if (m_Type_Character == Type_Character.Safeguard && type_Turret == Type_Turret.Temp_Door)
                {

                    // turret_Controller.Set_Can_Remove(false);
                    turret_Controller.Set_Can_Click(false);
                    Debug.LogError(turret_Controller.name + "aaaa");
                }
            }

            if (m_Is_Build_From_Skill && type_Turret == Type_Turret.Holy_Water && m_Type_Character == Type_Character.Priest)
            {
                turret_Controller.Set_Can_Click(false);
            }


            if (m_Is_Build_From_Skill && type_Turret == Type_Turret.Repair_Station && GetIsUseRepairStation())
            {

                TypeRepairMission();

            }


            if (m_Is_Build_From_Skill && type_Turret == Type_Turret.Energy_Tower && GetIsUseElectric())
            {

                TypeEnergyTowerMission();

            }
            //updateofjura

            if (m_Is_Build_From_Skill && type_Turret == Type_Turret.Turret_Bed && m_Type_Character == Type_Character.Onslaught)
            {
                turret_Controller.Set_Can_Remove(false);

            }
            //// TODO: da su dung skill2 safeguard

            //if (m_Is_Build_From_Skill && type_Turret == Type_Turret.Door && m_Type_Character == Type_Character.Safeguard)
            //{
            //    turret_Controller.Set_Can_Remove(false);
            //}



            Set_Index_Turret_Gold(type_Turret, m_Room_Controller, turret_Controller);

            Create_New_Turret_Success(turret_Controller);
        }

        // Check mission Tut
        Check_Complete_Mission_Build(type_Turret);

        // Remove Ground in Room
        Remove_Ground_In_Room();

        // Delete Item
        Destroy(gameObject);
        return turret_Controller;
    }


    #region Repair Mission
    public void TypeRepairMission()
    {
        if (!GetIsUseRepairStation()) return; // neu co nhiem vu lien quan den door



        int levelStoryCur = Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()); // lay level hien tai cua story

        int a = Database.instance.CheckIndexMissionPass(levelStoryCur, 11, Database.instance.GetHardLevel());

        Database.instance.Select_Mission_Complete(levelStoryCur, a, Database.instance.GetHardLevel());


        Debug.LogError("load co bi lap khong select  TypeRepairMission");
    }
    #endregion


    #region Energy Tower Mission
    public void TypeEnergyTowerMission()
    {
        if (!GetIsUseElectric()) return; // neu co nhiem vu lien quan den door
        int levelStoryCur = Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()); // lay level hien tai cua story
        Debug.LogError("load co bi lap khong select  TypeEnergyTowerMission");


        int a = Database.instance.CheckIndexMissionPass(levelStoryCur, 10, Database.instance.GetHardLevel());

        Database.instance.Select_Mission_Complete(levelStoryCur, a, Database.instance.GetHardLevel());
    }
    #endregion


    public virtual void Create_New_Turret_Success(Base_Turret base_Turret)
    {

    }
    //turtorial

    private void Check_Complete_Mission_Build(Type_Turret type_Turret)
    {
        if (Game_Controller.Instance && data_Player && !data_Player.Get_Is_AI()
            && DataSaved.Get_Current_Loading_Level() == 0 && !DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        {
            switch (type_Turret)
            {
                case Type_Turret.Turret:
                    if (DataSaved.Get_Index_Claimed_Mission_Tutorial() == 3)
                    {
                        Game_Controller.Instance.Set_Complete_Mission_Tutorial(Type_Mission_Tut.Mission_4, type_Player);
                    }
                    break;

                case Type_Turret.Energy_Tower:
                    if (DataSaved.Get_Index_Claimed_Mission_Tutorial() == 5)
                        Game_Controller.Instance.Set_Complete_Mission_Tutorial(Type_Mission_Tut.Mission_6, type_Player);
                    break;

                case Type_Turret.Cross:
                    if (DataSaved.Get_Index_Claimed_Mission_Tutorial() == 6)
                        Game_Controller.Instance.Set_Complete_Mission_Tutorial(Type_Mission_Tut.Mission_7, type_Player);
                    break;
            }
        }
    }

    public virtual void Remove_Ground_In_Room()
    {

    }

    public virtual void Add_Listener()
    {
        Add_Data_To_Player();
    }

    public virtual void Add_Data_To_Player()
    {


        if (type_Turret == Type_Turret.Ground)
        {
            return;
        }
        Check_Data_Player();

        if (data_Player)
        {
            data_Player.Add_Turret(transform.GetInstanceID(), new Model_Turret_Player(transform.GetInstanceID(), type_Turret, level_Curr));

        }

    }

    public virtual void Upgrade_Item_Success()
    {
        InCrease_Level();
    }

    public virtual void Before_Remove_Item() { }

    public virtual void Update_Model_By_Level() { }

    public virtual void Play_Sound_Character_Die() { }

    public void Remove_Item_By_Boss()
    {
        My_Utils.Play_Pref_Effect(
            Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Destroy_Turret(), transform,
            () =>
            {
                Remove_Item_Success();
            });
    }
    // remove turret khoi maap
    public virtual void Remove_Item_Success()
    {
        Before_Remove_Item();
        GameObject pref_Ground = null;
        if (DataSaved.Get_Type_Map_Mode_Playing() != null)
        {
            pref_Ground = Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Tile(DataSaved.Get_Type_Map_Mode_Playing(), Type_Tile.Ground);
        }

        if (pref_Ground == null || gameObject == null)
        {
            return;
        }
        Check_Data_Player();
        if (data_Player)
        {
            // Remove Item In Data Player
            data_Player.Remove_Turret(transform.GetInstanceID());
            My_Utils.Decrease_Number_Turret_SO(data_Player, type_Turret);
        }

        if (type_Turret != Type_Turret.Door)
        {
            // Create new Ground here
            var obj_Ground = Instantiate(pref_Ground, transform.parent);
            obj_Ground.transform.localPosition = transform.localPosition;
            Ground_Controller ground_Controller = obj_Ground.GetComponent<Ground_Controller>();
            if (ground_Controller)
            {
                ground_Controller.Set_Room_Controller(m_Room_Controller);
                ground_Controller.Set_Type_Player(type_Player);
            }
        }

        Before_Destroy_Game_Object();

        // Delete Item
        Destroy(gameObject);
    }

    #endregion

    public virtual void Set_Room_Controller(Room_Controller room_Controller)
    {
        m_Room_Controller = room_Controller;


    }


    public void Set_Index_Turret_Gold(Type_Turret typeTurret, Room_Controller roomController, Base_Turret baseTurret = null)
    {
        int coin = 0;
        switch (typeTurret)
        {

            case Type_Turret.Mine_Bronze:
            case Type_Turret.Mine_Silver:
            case Type_Turret.Mine_Gold:
            case Type_Turret.Mine_Platinum:

                coin = Data_In_Game.Instance.Get_Data_Info_Turret_Manager().Get_Data_Info_Turret(typeTurret, 0).model_Skills.coin;

                if (m_Type_Character != null && m_Type_Character == Type_Character.Miner)
                {
                    coin = (int)(coin * 1.5f);


                }



                roomController.AddCoinDicRoom(coin);
                Debug.LogError("--------" + "---" + typeTurret + " " + coin);

                indexCoinDic = roomController.GetIndexRoom();
                if (baseTurret != null)
                {
                    baseTurret.indexCoinDic = indexCoinDic;
                }


                Debug.LogError("indexCoinDic " + indexCoinDic);


                break;
            case Type_Turret.Bed:
            case Type_Turret.Turret_Bed:
            case Type_Turret.Turret:

                coin = Data_In_Game.Instance.Get_Data_Info_Turret_Manager().Get_Data_Info_Turret(typeTurret, 0).model_Skills.coin;
                roomController.AddCoinDicRoom(coin);
                Debug.LogError("--------" + "---" + typeTurret + " " + coin);

                indexCoinDic = roomController.GetIndexRoom();
                if (baseTurret != null)
                {
                    baseTurret.indexCoinDic = indexCoinDic;
                }










                Debug.LogError("indexCoinDic " + indexCoinDic);
                break;






            default: break;

        }

    }


    public void Change_Coin_Index_Turret_Gold(Type_Turret typeTurret, Room_Controller roomController, int coin)
    {
        switch (typeTurret)
        {
            case Type_Turret.Bed:
            case Type_Turret.Mine_Bronze:
            case Type_Turret.Mine_Gold:
            case Type_Turret.Mine_Silver:
            case Type_Turret.Mine_Platinum:

                roomController.ChangeIndexTurretCoinRoom(indexCoinDic, model_Info_Turret_Curr.model_Skills.coin);

                break;

            case Type_Turret.Turret_Bed:
            case Type_Turret.Turret:

                break;



            default: break;

        }

    }






    public void Set_Type_Player(Type_Player _type_Player)
    {
        type_Player = _type_Player;
        m_Type_Character = Player_Manager.Instance.Get_Type_Character(type_Player);
        Update_Model_Price();

        if (type_Player == Type_Player.None)
        {
            data_Player = null;
        }
        Add_Listener();
    }

    public virtual void Init_Data()
    {
        if (is_Init_Data) return;
        is_Init_Data = true;

        //level_Curr = 0;   //xekotoby

        Update_Model_Price();
        m_Obj_Upgrade.Set_Active(false);
        Update_Model_By_Level();


    }

    public virtual void InCrease_Level()
    {
        level_Curr += 1;

        Add_Data_To_Player();
        Update_Model_Price();
        Update_Model_By_Level();





    }

    bool is_Owner;
    public virtual bool Is_Owner()
    {
        is_Owner = Game_Controller.Instance.Get_Player_Curr() == type_Player && type_Player != Type_Player.None;
        Set_Active_Owner(is_Owner);
        return is_Owner;
    }

    private void Set_Active_Owner(bool isActive)
    {
        if (m_Obj_Owner)
        {
            m_Obj_Owner.SetActive(isActive);
        }
    }

    #region =============== Sub Method ===============

    public void Check_Data_Player()
    {
        if (data_Player == null)
        {
            data_Player = Player_Manager.Instance.Get_Data_Player(type_Player);
        }
    }

    public void Set_Status_Die()
    {
        m_Is_Live = false;
    }

    public bool Get_Is_Live()
    {
        return m_Is_Live;
    }

    #endregion





    #region Check Mission COMPLETE


    private bool isUseElectric = false;
    private bool isDoorMission = false;
    private bool isBedMission = false;
    private bool isTurretMission = false;
    private bool isRepaiStationMission = false;

    // may phat dien // tram sua chua
    public bool GetIsUseElectric()
    {
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() != Type_Mode_Gameplay.Story_Level) return false;

        return isUseElectric;
    }
    public void SetIsUseElectric(bool isUse)
    {


        this.isUseElectric = isUse;
    }



    public bool GetIsUseRepairStation()
    {
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() != Type_Mode_Gameplay.Story_Level) return false;

        return isUseElectric;
    }
    public void SetIsUseRepairStation(bool isUse)
    {
        this.isUseElectric = isUse;
    }



    // door
    public bool GetIsUseDoor()
    {
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() != Type_Mode_Gameplay.Story_Level) return false;

        return isDoorMission;
    }
    public void SetIsUseMissionDoor(bool isUse)
    {
        this.isDoorMission = isUse;
    }


    // Bed
    public bool GetIsUseBed()
    {
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() != Type_Mode_Gameplay.Story_Level) return false;

        return isDoorMission;
    }
    public void SetIsUseMissionBed(bool isUse)
    {
        this.isDoorMission = isUse;
    }




    // turret
    public bool GetIsUseTurret()
    {
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() != Type_Mode_Gameplay.Story_Level) return false;

        return isTurretMission;
    }
    public void SetIsUseMissionTurret(bool isUse)
    {
        this.isTurretMission = isUse;
    }


    internal List<int> listMission = new List<int>();


    public void ListMission()
    {
        listMission.AddRange(Database.instance.ListMissionPass(Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()), Database.instance.GetHardLevel()));
    }


    public void ConfigMissionUpgrade()
    {


        ListMission();

        for (int i = 0; i < listMission.Count; i++)
        {
            switch (listMission[i])
            {
                case 2:
                case 4:
                case 6:
                case 14:
                    SetIsUseMissionDoor(true);
                    break;
                case 7:
                case 15:
                    SetIsUseMissionBed(true);
                    break;
                case 10:
                    SetIsUseElectric(true);
                    break;
                case 11:
                    SetIsUseRepairStation(true);
                    break;
                case 3:
                case 5:
                case 8:
                    SetIsUseMissionTurret(true);
                    break;
                default:
                    Debug.Log(" Truong hop khong phai turret" + listMission[i]);
                    // Có thể thêm xử lý cho các trường hợp khác nếu cần
                    break;
            }
        }


    }




    #endregion

}
