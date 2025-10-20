
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.SceneManagement;

using Spine.Unity;


public class UI_Waiting_Room : Base_UI
{

    [SerializeField] GameObject m_Obj_Btn_Tut_Hand;

    [SerializeField] int level_Selected;
    [SerializeField] Data_Character_Join_Game m_Data_Character_Join_Game;
    [SerializeField] Data_Max_Turret_Can_Build m_Data_Max_Turret_Can_Build;
    Data_Info_Level m_Data_Info_Level;
    [SerializeField] List<string> m_All_Name_Player = new List<string>();
    [SerializeField] List<Model_Boss> m_All_Boss_Join_Game = new List<Model_Boss>();
    [SerializeField] List<Model_Player_Join_Game> m_All_Player_Join_Game = new List<Model_Player_Join_Game>();
    [SerializeField] GameObject m_Obj_Btn_Back;
    [SerializeField] GridLayoutGroup m_Grid_Layout_Boss;

    [Header("_____ UI _____")]
    [SerializeField] TextMeshProUGUI m_Txt_Title;
    [SerializeField] GameObject m_Obj_Ready;
    [SerializeField] GameObject m_Obj_Wait_Other_Player;
    [SerializeField] TextMeshProUGUI m_Txt_Timing;
    int m_Count_Time;

    private List<IEnumerator> m_All_Coroutine = new List<IEnumerator>();

    Type_Character m_Force_Skin_Try;

    public override void OnReadyOpenUI()
    {

        Debug.Log("..... UI_Waiting_Room : OnReadyOpenUI START");
        CancelInvoke(nameof(Update_Timing));


        SoundController.Play_Musics(false);
        m_Obj_Btn_Back.Set_Active(true);
        m_All_Coroutine.Clear();
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        {
            level_Selected = DataSaved.Get_Current_Loading_Level();
        }
        else if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {
            level_Selected = Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel());
        }
        else
        {
            level_Selected = DataSaved.Get_Current_Loading_Level_Mode_Challenge();
        }

        m_Data_Info_Level = Data_Home.Instance.Get_Data_Info_Level_Manager().Get_Data_Info_Level(level_Selected);

        m_Txt_Title.Set_Text(My_Utils.Get_Content_By_Language(m_Data_Info_Level.m_Name_Level));
        Create_Data_Boss();
        Create_Data_Player();

        // TODO: Fill Data to UI Boss
        Fill_Data_UI_Boss();

        // TODO: Fill Data to UI Player
        Fill_Data_UI_Player();

        Set_Data_Join_Game();

        m_Count_Time = 0;
        m_Txt_Timing.Set_Text("...");
        m_Obj_Wait_Other_Player.Set_Active(false);
        m_Obj_Ready.Set_Active(true);

        m_Force_Skin_Try = Type_Character.None;
        bool m_Is_Show_Popup_Try_Skin = false;



        if ((DataSaved.Get_Is_Show_Popup_Try_Skin(Type_Character.Calida) ||
            DataSaved.Get_Is_Show_Popup_Try_Skin(Type_Character.Eilif) ||
            DataSaved.Get_Is_Show_Popup_Try_Skin(Type_Character.Raven) ||
            DataSaved.Get_Is_Show_Popup_Try_Skin(Type_Character.Sami)
            )
            &&
            ((DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && DataSaved.Get_Max_Level_Unlocked_Index() >= 2) ||
            (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge && DataSaved.Get_Max_Level_Unlocked_Index_Mode_Challenge() >= 2)
            ))
        {
            if (DataSaved.Get_Is_Show_Popup_Try_Skin(Type_Character.Calida) &&
                DataSaved.Get_Is_Show_Popup_Try_Skin_Character(Type_Character.Calida) &&
                !DataSaved.Get_Skin_Character_Bought(Type_Character.Calida)
                && DataSaved.Get_Level_Complete(0))
            {
                m_Force_Skin_Try = Type_Character.Calida;
                DataSaved.Set_Is_Show_Popup_Try_Skin(Type_Character.Calida, false);
            }
            else if (
                DataSaved.Get_Is_Show_Popup_Try_Skin(Type_Character.Eilif) &&
                DataSaved.Get_Is_Show_Popup_Try_Skin_Character(Type_Character.Eilif) &&
                !DataSaved.Get_Skin_Character_Bought(Type_Character.Eilif)
                && DataSaved.Get_Level_Complete(0))
            {
                m_Force_Skin_Try = Type_Character.Eilif;
                DataSaved.Set_Is_Show_Popup_Try_Skin(Type_Character.Eilif, false);
            }
            else if (
                DataSaved.Get_Is_Show_Popup_Try_Skin(Type_Character.Raven) &&
                DataSaved.Get_Is_Show_Popup_Try_Skin_Character(Type_Character.Raven) &&
                !DataSaved.Get_Skin_Character_Bought(Type_Character.Raven))
            {
                m_Force_Skin_Try = Type_Character.Raven;
                DataSaved.Set_Is_Show_Popup_Try_Skin(Type_Character.Raven, false);
            }
            else if (
                DataSaved.Get_Is_Show_Popup_Try_Skin(Type_Character.Sami) &&
                DataSaved.Get_Is_Show_Popup_Try_Skin_Character(Type_Character.Sami) &&
                !DataSaved.Get_Skin_Character_Bought(Type_Character.Sami))
            {
                m_Force_Skin_Try = Type_Character.Sami;
                DataSaved.Set_Is_Show_Popup_Try_Skin(Type_Character.Sami, false);
            }
            m_Is_Show_Popup_Try_Skin = m_Force_Skin_Try != Type_Character.None;
        }
        else
        {
            if (DataSaved.Get_Is_Show_Popup_Try_Skin_Character(Type_Character.Calida) &&
                !DataSaved.Get_Skin_Character_Bought(Type_Character.Calida)
                && DataSaved.Get_Level_Complete(0))
            {
                m_Force_Skin_Try = Type_Character.Calida;
            }
            else if (DataSaved.Get_Is_Show_Popup_Try_Skin_Character(Type_Character.Eilif) &&
                !DataSaved.Get_Skin_Character_Bought(Type_Character.Eilif)
                && DataSaved.Get_Level_Complete(0))
            {
                m_Force_Skin_Try = Type_Character.Eilif;
            }
            else if (DataSaved.Get_Is_Show_Popup_Try_Skin_Character(Type_Character.Raven) &&
                !DataSaved.Get_Skin_Character_Bought(Type_Character.Raven))
            {
                m_Force_Skin_Try = Type_Character.Raven;
            }
            else if (DataSaved.Get_Is_Show_Popup_Try_Skin_Character(Type_Character.Sami) &&
                !DataSaved.Get_Skin_Character_Bought(Type_Character.Sami))
            {
                m_Force_Skin_Try = Type_Character.Sami;
            }

        }



        Debug.Log("..... UI_Waiting_Room : OnReadyOpenUI END");

        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        {
            m_Obj_Btn_Tut_Hand.Set_Active(DataSaved.Get_Max_Level_Unlocked_Index() < 2);
        }
        else
        {
            m_Obj_Btn_Tut_Hand.Set_Active(false);
        }

        //updateofjura
        Debug.LogError(DataSaved.Get_Try_Skin_Character_Equipped_Home() + "aaaa");
        Debug.LogError(DataSaved.Get_Skin_Character_Equipped() + "aaaab");

        //if (m_Is_Show_Popup_Try_Skin && DataSaved.Get_Try_Skin_Character_Equipped_Home() == DataSaved.Get_Skin_Character_Equipped())
        //{
        //    m_UI_Try_Skin.Open_UI(true, true, Type_Player.None, m_Force_Skin_Try, false);
        //}
    }

    [SerializeField] int m_Sum_Player_Ready;

    public void _Btn_Ready_OnClick()
    {


        m_Btn_Try_Skin.Set_Active(false);
        m_Obj_Btn_Back.Set_Active(false);
        SoundController.Play_Sound_Clicks();

        m_Obj_Ready.Set_Active(false);
        m_Obj_Wait_Other_Player.Set_Active(true);

        CancelInvoke(nameof(Update_Timing));
        InvokeRepeating(nameof(Update_Timing), 1f, 1f);

        m_Sum_Player_Ready = 0;

        for (int i = 0; i < m_All_Item_Boss.Count; i++)
        {
            m_Sum_Player_Ready += 1;
            var coroutine = Wait_Boss(i);
            m_All_Coroutine.Add(coroutine);
            StartCoroutine(coroutine);
        }

        for (int i = 0; i < m_All_Item_Player.Count; i++)
        {
            m_Sum_Player_Ready += 1;
            var coroutine = Wait_Player(i);
            m_All_Coroutine.Add(coroutine);
            StartCoroutine(coroutine);
        }

        //khi dung thu ads ngoai home
        if (DataSaved.Get_Try_Skin_Character_Equipped_Home() != Type_Character.None)
        {
            DataSaved.Set_Is_Unlock_Skill_2(DataSaved.Get_Try_Skin_Character_Equipped_Home(), true);
            DataSaved.Set_Is_Unlock_Skill_3(DataSaved.Get_Try_Skin_Character_Equipped_Home(), true);

            DataSaved.Set_Skin_Character_Equipped(Type_Character.Student);

        //    BundleObjectLoader.Instance.Set_Skin_Start_In_Home(Data_Home.Instance.Get_Data_Skeleton_Asset().Get_Skeleton_Asset_Character(DataSaved.Get_Skin_Character_Equipped()));
        }




        //dat skin trying ve none
        DataSaved.Set_Skin_Trying(Type_Character.None);



        // dat lai gia tri khi vao ads
        DataSaved.Add_Try_Skin_Character_Array(m_Curr_Skin_Player_Selected, 0);





    }

    IEnumerator Wait_Boss(int id)
    {
        yield return new WaitForSeconds(Random.Range(1f, 4f));
        m_All_Item_Boss[id].Play_Anim_Show();
        m_Sum_Player_Ready -= 1;
        On_Ready_Enter_Game_Play();
    }

    IEnumerator Wait_Player(int id)
    {
        yield return new WaitForSeconds(Random.Range(2f, 5f));
        m_All_Item_Player[id].Play_Anim_Show();
        m_Sum_Player_Ready -= 1;
        On_Ready_Enter_Game_Play();
    }

    private void On_Ready_Enter_Game_Play()
    {
        if (m_Sum_Player_Ready <= 0)
        {
            CancelInvoke(nameof(On_Ready_Load_Scene));
            Invoke(nameof(On_Ready_Load_Scene), 1f);
        }
    }

    private void On_Ready_Load_Scene()
    {
        SceneManager.LoadScene("In_Game");
    }

    private void OnDisable()
    {
        CancelInvoke(nameof(On_Ready_Load_Scene));
        CancelInvoke(nameof(Update_Timing));

        foreach (var item in m_All_Coroutine)
        {
            StopCoroutine(item);
        }
    }

    private void Update_Timing()
    {
        m_Count_Time += 1;
        m_Txt_Timing.Set_Text(m_Count_Time.ToString() + "S");
    }

    #region ================ Show_Data_UI_Boss ================

    [Header("____ UI Boss ___")]
    [SerializeField] Transform m_Parent_Item_Boss;
    [SerializeField] GameObject m_Pref_Item_Boss;
    [SerializeField] List<Item_Waiting_Room_Boss> m_All_Item_Boss = new List<Item_Waiting_Room_Boss>();

    private void Fill_Data_UI_Boss()
    {
        foreach (Transform item in m_Parent_Item_Boss)
        {
            Destroy(item.gameObject);
        }
        m_All_Item_Boss.Clear();

        bool is_Player_Mode = DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player;

        var all_Boss = m_Data_Info_Level.m_All_Boss;
        foreach (var item in all_Boss)
        {
            var obj_Item_Boss = Instantiate(m_Pref_Item_Boss, m_Parent_Item_Boss);
            Item_Waiting_Room_Boss item_Waiting = obj_Item_Boss.GetComponent<Item_Waiting_Room_Boss>();

            bool is_Player_Control = false;
            if (!is_Player_Mode && item.type_Boss == DataSaved.Get_Skin_Boss_Equipped())
            {
                is_Player_Control = true;
            }

            if (item_Waiting)
            {
                item_Waiting.Set_Data(is_Player_Control, State_Item_Waiting_Room.Hide, item);
                m_All_Item_Boss.Add(item_Waiting);
            }
        }

        if (m_All_Item_Boss.Count == 4)
        {
            m_Grid_Layout_Boss.constraintCount = 2;
        }
        else
        {
            m_Grid_Layout_Boss.constraintCount = 3;
        }
    }

    #endregion

    #region ================ Show_Data_UI_Player ================

    [Header("____ UI Player ___")]
    [SerializeField] Transform m_Parent_Item_Player;
    [SerializeField] GameObject m_Pref_Item_PLayer;
    [SerializeField] List<Item_Waiting_Room_Player> m_All_Item_Player = new List<Item_Waiting_Room_Player>();
    private void Fill_Data_UI_Player()
    {
        foreach (Transform item in m_Parent_Item_Player)
        {
            Destroy(item.gameObject);
        }
        m_All_Item_Player.Clear();
        bool is_Player_Mode = DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player;

        for (int i = 0; i < m_All_Player_Join_Game.Count; i++)
        {
            var item = m_All_Player_Join_Game[i];
            //            Debug.LogError("thang 2 ");
            var obj_Item_Boss = Instantiate(m_Pref_Item_PLayer, m_Parent_Item_Player);
            Item_Waiting_Room_Player item_Waiting = obj_Item_Boss.GetComponent<Item_Waiting_Room_Player>();

            bool is_Player_Control = false;
            if (is_Player_Mode && i == 0)
            {
                is_Player_Control = true;
            }

            if (item_Waiting)
            {
                item_Waiting.Set_Data(is_Player_Control, State_Item_Waiting_Room.Hide, item);
                m_All_Item_Player.Add(item_Waiting);
            }
        }
    }

    #endregion

    private void Create_Data_Boss()
    {
        var all_Boss = m_Data_Info_Level.m_All_Boss;
        m_All_Boss_Join_Game.Clear();

        bool is_Player_Mode = DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player;
        var time_Spawn_Boss = m_Data_Info_Level.m_Time_Spawner_Boss;
        var type_Level_Boss = m_Data_Info_Level.m_Level_Boss;

        int sum_Boss = 0;
        foreach (var item in all_Boss)
        {
            if (!is_Player_Mode && item.type_Boss == DataSaved.Get_Skin_Boss_Equipped())
            {
                Model_Boss model_Boss = new Model_Boss();
                model_Boss.is_Player_Control = true;
                m_All_Boss_Join_Game.Add(model_Boss);
            }
            else
            {
                int amount = item.amount;

                for (int i = 0; i < amount; i++)
                {
                    Model_Boss model_Boss = new Model_Boss();
                    model_Boss.is_Player_Control = false;
                    model_Boss.type_Level = type_Level_Boss;
                    model_Boss.type_Boss = item.type_Boss;

                    model_Boss.time_Spawn = Convert_Model_Time(time_Spawn_Boss[sum_Boss], time_Spawn_Boss[sum_Boss].level_Jump);

                    m_All_Boss_Join_Game.Add(model_Boss);

                    sum_Boss += 1;
                }
            }

        }
    }

    Model_Time Convert_Model_Time(Model_Time input, int level_Jump)
    {
        int sum_Second = My_Utils.Get_Second_By_Time(input);
        sum_Second = (int)(sum_Second * RootManager.Get_Pencent_Config_Time());
        Model_Time time = new Model_Time();
        time.minute = sum_Second / 60;
        time.seconds = sum_Second % 60;
        time.level_Jump = level_Jump;
        return time;
    }

    private void Create_Data_Player()
    {
        int sum_Player = 0;
        m_All_Player_Join_Game.Clear();
        m_All_Name_Player.Shuffle();

        var all_Player = m_Data_Info_Level.m_All_Player;
        bool is_Player_Mode = DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player;

        var data_Random_Max_Turret = m_Data_Max_Turret_Can_Build.Get_Random_Max_Turret();
        bool is_Using_Skin_2;

        foreach (var item in all_Player)
        {
            var amount = item.amount;
            for (int i = 0; i < amount; i++)
            {
                Model_Player_Join_Game model_Player_Join_Game = new Model_Player_Join_Game();
                Type_Character type_Character;
                string name_Player;
                if (sum_Player == 0 && is_Player_Mode)
                {
                    type_Character = DataSaved.Get_Skin_Character_Equipped();
                    if (DataSaved.Get_Skin_Trying() != Type_Character.None)
                    {
                        type_Character = DataSaved.Get_Skin_Trying();
                    }
                    m_Curr_Skin_Player_Selected = type_Character;
                    name_Player = "";
                    is_Using_Skin_2 = DataSaved.Get_Is_Using_Skin_2(type_Character);
                }
                else
                {
                    type_Character = (Type_Character)Random.Range((int)Type_Character.Student, (int)Type_Character.Total - 1);
                    name_Player = m_All_Name_Player[sum_Player];

                    if (sum_Player < data_Random_Max_Turret.Count)
                    {
                        model_Player_Join_Game.max_Turret_Can_Build = (int)data_Random_Max_Turret[sum_Player];
                    }
                    else
                    {
                        model_Player_Join_Game.max_Turret_Can_Build = 3;
                    }

                    if ((int)type_Character <= (int)Type_Character.Scientist)
                    {
                        is_Using_Skin_2 = Random.Range(0, 999) % 2 == 0;
                    }
                    else
                    {
                        is_Using_Skin_2 = false;
                    }
                }

                model_Player_Join_Game.name = name_Player;

                model_Player_Join_Game.type_Player = (Type_Player)(sum_Player % ((int)Type_Player.Player_8 + 1));
                model_Player_Join_Game.Set_Type_Character(type_Character);
                DataSaved.Set_Type_Character_Playing(model_Player_Join_Game.type_Player, type_Character, is_Using_Skin_2);

                model_Player_Join_Game.type_Level = item.m_Level_Player;
                model_Player_Join_Game.is_Using_Skin_2 = is_Using_Skin_2;

                model_Player_Join_Game.Set_Type_Rank_Character(DataHomeGame.Instance.Get_Rank_Character(type_Character));

                m_All_Player_Join_Game.Add(model_Player_Join_Game);

                //              Debug.LogError(DataHomeGame.Instance.Get_Rank_Character(type_Character) + " xekootoooooo");
                sum_Player += 1;
            }
        }
    }

    private void Set_Data_Join_Game()
    {
        m_Data_Character_Join_Game.max_Time_Play = Convert_Model_Time(m_Data_Info_Level.m_Time_Complete, 0);
        m_Data_Character_Join_Game.type_Map = m_Data_Info_Level.m_Type_Map;
        m_Data_Character_Join_Game.m_Type_Level = m_Data_Info_Level.m_Level_Boss;
        m_Data_Character_Join_Game.m_Level_Boss_Start = m_Data_Info_Level.m_Level_Start;

        if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            m_Data_Character_Join_Game.m_Type_Player_Current = Type_Player.Player_1;
        }
        else
        {
            m_Data_Character_Join_Game.m_Type_Player_Current = DataSaved.Get_Skin_Boss_Equipped();
        }

        m_Data_Character_Join_Game.Set_Data_Boss_By_Type(m_Data_Info_Level.m_All_Boss);
        m_Data_Character_Join_Game.Set_Data_Boss_Join_Game(m_All_Boss_Join_Game);

        m_Data_Character_Join_Game.Set_Data_Player_Join_Game(m_All_Player_Join_Game);
    }

    public override void Perpare_Before_Close_UI()
    {
        base.Perpare_Before_Close_UI();


        // if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        // {

        //     // Canvas_Home.Instance.Get_UI_Base().Open_UI();
        // }
        // else if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        // {

        //     Canvas_Home.Instance.Get_UI_Home().Open_UI();


        // }
        // else
        // {
        //     //  Canvas_Home.Instance.Get_UI_Select_Level_Challenge_Mode().Open_UI();
        //     //Canvas_Home.Instance.Get_UI_Base().Open_UI();
        // }


        SoundController.Play_Musics(true);
    }

    
    [SerializeField] GameObject m_Btn_Try_Skin;
    [SerializeField] Type_Character m_Curr_Skin_Player_Selected;
    [SerializeField] Type_Character m_Skin_To_Try;
    [SerializeField] Image m_Icon_Skin_Try;
    [SerializeField] bool m_Is_Trying_Skin_2;

    // private void Check_UI_Try_Skin()
    // {
    //     m_Btn_Try_Skin.Set_Active(false);


    //     if (!DataSaved.Check_Is_Bought_All_Skin_Character() &&
    //         DataSaved.Get_Skin_Trying() == Type_Character.None)
    //     {
    //         m_Skin_To_Try = m_Force_Skin_Try == Type_Character.None ? DataSaved.Get_Random_Skin_Not_Buy_And_Try() : m_Force_Skin_Try;
    //         m_Is_Trying_Skin_2 = m_Force_Skin_Try == Type_Character.None ? Get_Is_Trying_Skin_2(m_Skin_To_Try) : false;

    //         Debug.LogError(DataSaved.Get_Try_Skin_Character_Equipped_Home() + "1aaaa");
    //         Debug.LogError(DataSaved.Get_Skin_Character_Equipped() + "2aaaab");
    //         //if (m_Skin_To_Try != Type_Character.None && DataSaved.Get_Try_Skin_Character_Equipped_Home() == DataSaved.Get_Skin_Character_Equipped())
    //         if (m_Skin_To_Try != Type_Character.None && DataSaved.Get_Try_Skin_Character_Equipped_Home() == Type_Character.None)
    //         {
    //             if (m_Icon_Skin_Try)
    //             {
    //                 m_Icon_Skin_Try.sprite = Data_Home.Instance.Get_All_Sprite().Get_Icon_Skin_Small_Character(m_Skin_To_Try, m_Is_Trying_Skin_2);
    //             }

    //             m_Btn_Try_Skin.Set_Active(true);
    //         }
    //         //m_UI_Try_Skin.Open_UI(true, Type_Player.None, m_Skin_To_Try);
    //     }
    // }



    public void Watch_Ads_Try_Skin_Success()
    {
        if (m_Skin_To_Try == Type_Character.Calida || m_Skin_To_Try == Type_Character.Eilif ||
            m_Skin_To_Try == Type_Character.Raven || m_Skin_To_Try == Type_Character.Sami)
        {
            DataSaved.Set_Is_Show_Popup_Try_Skin_Character(m_Skin_To_Try, false);
        }

        m_Btn_Try_Skin.Set_Active(false);
        // DataSaved.Set_Is_Unlock_Skill_2(DataSaved.Get_Try_Skin_Character_Equipped_Home(), true);
        //DataSaved.Set_Is_Unlock_Skill_3(DataSaved.Get_Try_Skin_Character_Equipped_Home(), true);
        Debug.Log(m_Curr_Skin_Player_Selected + "aaaa");






        m_Curr_Skin_Player_Selected = m_Skin_To_Try;

        DataSaved.Add_Try_Skin_Character_Array(m_Skin_To_Try, 1);
        DataSaved.Set_Try_Skin_Character_Equipped_Home(m_Skin_To_Try);
        DataSaved.Set_Skin_Character_Equipped(m_Skin_To_Try);//new



       // BundleObjectLoader.Instance.Set_Skin_Start_In_Home(Data_Home.Instance.Get_Data_Skeleton_Asset().Get_Skeleton_Asset_Character(DataSaved.Get_Skin_Character_Equipped()));



        DataSaved.Set_Skin_Trying(m_Skin_To_Try);
        DataSaved.Set_Is_Trying_Skin_2(m_Is_Trying_Skin_2);
        Database.instance.SetSkinTry(m_Skin_To_Try);

        //DataSaved.Set_Try_Skin_Character_Equipped_Home(m_Skin_To_Try);

        m_All_Player_Join_Game[0].Set_Type_Character(m_Curr_Skin_Player_Selected);
        DataSaved.Set_Type_Character_Playing(m_All_Player_Join_Game[0].type_Player, m_Curr_Skin_Player_Selected, m_Is_Trying_Skin_2);
        m_All_Player_Join_Game[0].is_Using_Skin_2 = m_Is_Trying_Skin_2;

        // TODO: Fill Data to UI Player
        Fill_Data_UI_Player();
    }

    private bool Get_Is_Trying_Skin_2(Type_Character type_Character)
    {
        //if ((int)type_Character <= (int)Type_Character.Scientist)
        //{
        //    return Random.Range(0, 9999) % 2 == 0;
        //}
        return false;
    }
}
