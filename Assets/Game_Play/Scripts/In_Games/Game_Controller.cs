using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

using DG.Tweening;
using System;
using UnityEngine.UI;
using DG.Tweening.Plugins.Options;

// Su dung de load data Boss, data kich ban, che do choi


public class Game_Controller : Singleton<Game_Controller>
{
    [SerializeField] bool m_Is_End_Level;
    bool m_Is_Show_UI_Win_Lose;
   [SerializeField] bool m_Is_Time_Out;
    [SerializeField] Type_Player m_Player_Curent;
    [SerializeField] Type_Mode_Play m_Type_Mode_Play;
    [SerializeField] Type_Level m_Type_Level;
    [SerializeField] int m_Time_Spawn_Boss_Start_Game = 30;

    [SerializeField] TextMeshProUGUI m_Txt_Label_Night;
    [SerializeField] Data_Character_Join_Game data_Character_Join_Game;
    [SerializeField] List<Model_Boss> m_All_Boss_In_Map = new List<Model_Boss>();
    [SerializeField] List<Model_Boss> m_All_Data_Boss = new List<Model_Boss>();
    [SerializeField] List<int> m_Time_Will_Spawn_Boss = new List<int>();
    [SerializeField] List<Model_Info_Level_Boss> m_All_Boss_By_Type = new List<Model_Info_Level_Boss>();
    [SerializeField] AudioSource m_Music_In_Game;



    #region ============ Get - Set ============

    public Type_Level Get_Level()
    {
        return data_Character_Join_Game.m_Type_Level;
    }

    public int Get_Minutes()
    {
        return time_Increase / 60;
    }

    public static bool Get_Is_End_Level()
    {
        if (Instance)
        {
            return Instance.m_Is_End_Level;
        }
        return false;

    }
    public Type_Player Get_Player_Curr()
    {
        return m_Player_Curent;
    }

    public void Set_Is_End_Level()
    {
        m_Is_End_Level = true;
    }

    public Type_Mode_Play Get_Type_Mode_Play()
    {
        return m_Type_Mode_Play;
    }

    public List<Model_Boss> Get_All_Boss_In_Map()
    {
        return m_All_Boss_In_Map;
    }

    public List<Model_Info_Level_Boss> Get_All_Boss_By_Type()
    {
        return m_All_Boss_By_Type;
    }

    public int Get_Time_Spawn_Boss_Start_Game()
    {
        return m_Time_Spawn_Boss_Start_Game;
    }

    public void Play_Music_In_Game()
    {
        if (DataSaved.Get_Status_Music() && m_Music_In_Game)
        {
            m_Music_In_Game.Play();
        }
    }

    public void Stop_Music_In_Game()
    {
        if (DataSaved.Get_Status_Music() && m_Music_In_Game)
        {
            m_Music_In_Game.Stop();
        }
    }

    #endregion


    public void EnterGame()
    {
        // Database.instance.SetDameTaken(false);
        // DataHomeGame.Instance.ReSet_Build_AllTurret();
        Debug.LogError("Enter Game" +DataSaved.Get_Type_Mode_Gameplay_Playing());
       
        m_Is_Challenge_Mode = DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge;
        m_Is_Challenge_Mode = false;
        
        Debug.Log("Enter Game --------------" + m_Is_Challenge_Mode);
        if (Canvas_In_Game.Instance)
        {

            Play_Anim_Time_Start_Game(() =>
            {
                UI_Notice_InGame.Instance.Start_Count_Down_Start_Game(() =>
                {
                    if (!isCollider)
                    {
                        AcitveCollier();
                    }
                    if (RootManager.Check_AB_Auto_Sleep())
                    {
                        Check_Auto_Sleep();
                    }
                    else
                    {
                        Init_Config_Time();
                    }

              

                });

             
                Move_AI_To_Room();
            });

            Play_Music_In_Game();
           

        }

        // Canvas_In_Game.Set_Status_Loading(Status_Loading_In_Game.Loading);
        DataSaved.Set_Count_Using_Fix_Door_Now(0);

        m_Is_End_Level = false;
        m_Is_Show_UI_Win_Lose = false;

        //   Set_Active_Btn_Spawn_Boss_Challenge(false);

        if (DataSaved.Get_Is_Free_First_Play())
        {
            DataSaved.Set_Is_Free_First_Play(false);
        }
        else
        {
            //  DataSaved.Decrease_Energy(1);
        }

        if (DataSaved.Get_Max_Level_Unlocked_Index() > 0 && !DataSaved.Get_Check_Can_Show_Popup_IAP())
        {
            DataSaved.Set_Check_Can_Show_Popup_IAP(true);
        }

        DataSaved.Set_Count_Other_Player_Die(0);
        DataSaved.Set_Skin_Trying(Type_Character.None);

       // StartCoroutine(On_Restart());

        Invoke(nameof(CallRestart), 0.1f);

      
        int index_Level = DataSaved.Get_Current_Loading_Level() + 1;
        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {
            index_Level = Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()) + 1;
        }
        else if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        {
            index_Level = DataSaved.Get_Current_Loading_Level() + 1;
        }
        else
        {
            index_Level = DataSaved.Get_Current_Loading_Level_Mode_Challenge() + 1;
        }

        m_Txt_Label_Night.Set_Text((false ? "Đêm" : "Night") + " " + index_Level);




        DataSaved.Increase_Sum_Played();

        //CancelInvoke(nameof(Loop_Time_Wait_Boss));
        //InvokeRepeating(nameof(Loop_Time_Wait_Boss), 1f, 1f);
    }
    void CallRestart()
    {
        StartCoroutine(On_Restart());
    }
    IEnumerator On_Restart()
    {
     
        m_Is_Time_Out = false;
        is_Spawned_Character = false;
        On_Restart_Test_AB_Time_Vampire_Attack();
        DataSaved.Reset_Sum_Vampire_Died();
        Init_Data();

        yield return new WaitForEndOfFrame();
        
        //  Canvas_In_Game.Set_Status_Loading(Status_Loading_In_Game.Joining_Room);
        // Create Map

        if (Data_In_Game.Instance!=null&& Data_In_Game.Instance.Get_Pref_Map(Type_Map.Map_1) != null)
        {
            var obj_Map = Instantiate(Data_In_Game.Instance.Get_Pref_Map(Type_Map.Map_1));

            obj_Map.transform.localPosition = Vector3.zero;
            Level_Controller level_Controller = obj_Map.GetComponent<Level_Controller>();
            if (level_Controller)
            {
                m_Sum_Room = level_Controller.Get_Sum_Room();
            }
            else
            {
                m_Sum_Room = -1;
            }
        }
        
      
        
      
       

        // Restart data boss
        m_Max_Level_Boss = 0;

        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            m_Max_Level_Boss = 4;
        }

        if (RootManager.Check_AB_Level_Very_Hard())
        {
            m_Max_Level_Boss = data_Character_Join_Game.m_Level_Boss_Start - 1;
            if (m_Max_Level_Boss < 0)
            {
                m_Max_Level_Boss = 0;
            }
        }

        //  Debug.LogError("XekotobyTime33");
        Boss_Manager.Instance.On_Restart(m_Max_Level_Boss);
        //Debug.LogError("XekotobyTime35");
        Player_Manager.Instance.On_Restart();
        //Debug.LogError("XekotobyTime34");
        m_Is_Spawn_Character_Done = false;
        yield return new WaitUntil(Check_Spawn_Character_Done);
        //        Debug.LogError("XekotobyTime36");
        // Add Data to UI

        Canvas_In_Game.Instance.Get_UI_GamePlay().Update_Layout_Mode_Play();

        // Reset Time
        time_Increase = 0;
        Debug.LogError("XekotobyTime3- " + max_Time_Play);

        m_Txt_Time_CountDown.Set_Text_To_Time(max_Time_Play <= 0 ? 0 : max_Time_Play);

        // Canvas_In_Game.Set_Status_Loading(Status_Loading_In_Game.Complete);
        yield return new WaitForEndOfFrame();


        foreach (var item in all_Player)
        {
            if (item.Get_Type_Player() != m_Player_Curent)
            {
                item.Play_Anim(Type_Animation.Idle);


            }
        }





    }

    public bool Check_Spawn_Character_Done()
    {
        return m_Is_Spawn_Character_Done;
    }


    [SerializeField] int m_Sum_Room;
    bool is_Spawned_Character;
    bool m_Is_Spawn_Character_Done;

    public void Notify_Create_Room_Done()
    {
        if (is_Spawned_Character) return;

        m_Sum_Room -= 1;

        if (m_Sum_Room <= 0)
        {
            is_Spawned_Character = true;
            //  Canvas_In_Game.Set_Status_Loading(Status_Loading_In_Game.Wait_Other_player);
          
            CancelInvoke(nameof(Start_Spawn_Character));
            Invoke(nameof(Start_Spawn_Character), 0.1f);
        }
    }

    private void Init_Data()
    {
        m_Player_Curent = data_Character_Join_Game.m_Type_Player_Current;
        m_Type_Level = data_Character_Join_Game.m_Type_Level;
        m_All_Character_Of_Players.Clear();
        m_All_Character_Of_Players.AddRange(data_Character_Join_Game.Get_All_Player_Join_Game());

        m_All_Data_Boss.Clear();
        m_All_Boss_In_Map.Clear();
        m_Time_Will_Spawn_Boss.Clear();
        m_All_Data_Boss.AddRange(data_Character_Join_Game.Get_All_Boss_Join_Game());

        m_All_Boss_By_Type.Clear();
        m_All_Boss_By_Type.AddRange(data_Character_Join_Game.Get_All_Boss_By_Type());

        Model_Boss model_Boss;
        for (int i = m_All_Data_Boss.Count - 1; i >= 0; i--)
        {
            model_Boss = m_All_Data_Boss[i];
            if (model_Boss != null && My_Utils.Get_Second_By_Time(model_Boss.time_Spawn) <= 0)
            {
                if (!model_Boss.is_Player_Control)
                {
                    m_All_Boss_In_Map.Add(model_Boss);
                    m_All_Data_Boss.RemoveAt(i);
                }
            }
        }

        Init_Time_Will_Spawn_Boss();

        if (m_Is_Challenge_Mode)
        {
            Init_Data_Init_Data_Challenge_Mode();
        }

        max_Time_Play = My_Utils.Get_Second_By_Time(data_Character_Join_Game.max_Time_Play);

        Init_Sum_Boss_In_Map();
        Init_Sum_Player_In_Map();
    }

    private void Init_Time_Will_Spawn_Boss()
    {
        for (int i = 0; i < m_All_Data_Boss.Count; i++)
        {
            if (!m_Time_Will_Spawn_Boss.Contains(My_Utils.Get_Second_By_Time(m_All_Data_Boss[i].time_Spawn)))
            {
                m_Time_Will_Spawn_Boss.Add(My_Utils.Get_Second_By_Time(m_All_Data_Boss[i].time_Spawn));
            }
        }

        for (int i = 0; i < m_Time_Will_Spawn_Boss.Count; i++)
        {
            m_Time_Will_Spawn_Boss[i] -= 10;
        }

        m_Time_Will_Spawn_Boss.Sort();
    }

    private void Remove_Time_Will_Spawn_Boss(int time)
    {
        if (m_Time_Will_Spawn_Boss.Contains(time))
        {
            m_Time_Will_Spawn_Boss.Remove(time);
        }
    }

    private void Create_Boss()
    {
        Boss_Manager.Instance.Start_Create_Boss();

        UI_Alert.Show_Alerts("", Type_Alert.Vampire_Go_Hunt);
    }

    #region ============= Config All Player Join Game =============

 
    [SerializeField] List<Model_Player_Join_Game> m_All_Character_Of_Players = new List<Model_Player_Join_Game>();
   [SerializeField] Character_Controller m_Character_Current;

    public Character_Controller Get_Curr_Character_Controller()
    {
        return m_Character_Current;
    }

    public void Change_Tag_Character_Player(string new_Tag, Room_Controller room_Controller)
    {
        if (m_Character_Current)
        {
            m_Character_Current.Change_New_Tag(new_Tag);
        }
        // Has Player in Room
        if (room_Controller)
        {
            room_Controller.Set_Has_Character_In_Room(new_Tag == Tags.Untagged);
        }

    }

    public List<Model_Player_Join_Game> Get_All_Character_Player_Join_Game()
    {
        return m_All_Character_Of_Players;
    }

    private bool isCollider = false;


    public GameObject buttonCollider;
    public void AcitveCollier()
    {
        // if (character_controllerCur != null)
        // {
            buttonCollider.SetActive(false);
            isCollider = true;
           // character_controllerCur.End_Move_To_Bed();
        //}
       
    }
    public bool GetAcitveCollier()
    {
       return isCollider;
    }
    Character_Controller character_controllerCur;

    public void Start_Spawn_Character()
    {
        
        
        
        Debug.LogError("SpawnCharacter" +  m_All_Character_Of_Players.Count);
        if (Level_Controller.Instance)
        {
            Level_Controller.Instance.Start_Spawn_Character();
        }

        Canvas_In_Game.Instance.Get_UI_GamePlay().Set_Active_Joystick(false);

        int total_Player = m_All_Character_Of_Players.Count;
       
        all_Player.Clear();
        Character_Controller character_Controller;

        for (int i = 0; i < total_Player; i++)
        {
            Model_Player_Join_Game model_Player_Join_Game = m_All_Character_Of_Players[i];
            if (model_Player_Join_Game == null)
            {
                continue;
            }

            Debug.Log("bug khon nan " + i);
            var obj_Character = Instantiate(
                Data_In_Game.Instance.Get_Data_Prefaps().Get_Pref_Character(
                    DataSaved.Get_Type_Character_Playing(model_Player_Join_Game.type_Player),
                model_Player_Join_Game.is_Using_Skin_2 ));
            
            if (obj_Character != null)
            {
                character_Controller = obj_Character.GetComponent<Character_Controller>();
                character_controllerCur=character_Controller;
                if (character_Controller)
                {
                    character_Controller.Set_Model_Player_Join_Game(model_Player_Join_Game.is_Using_Skin_2, model_Player_Join_Game);
                    all_Player.Add(character_Controller);
                }

                if (model_Player_Join_Game.type_Player == m_Player_Curent && obj_Character != null)
                {
                    m_Character_Current = character_Controller;


                    //                        Debug.LogError("bat joysick");
                    Canvas_In_Game.Instance.Get_UI_GamePlay().Set_Active_UI_Joystick(true);

                    Canvas_In_Game.Instance.Get_UI_GamePlay().Set_Active_Joystick(true);



                    Camera.main.transform.SetParent(m_Character_Current.transform);
                    Camera.main.transform.localPosition = new Vector3(0, 0, -10);
                }


                if (!DataSaved.Get_Is_Complete_Tutorial() && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story && model_Player_Join_Game.type_Player == m_Player_Curent)
                {
                    obj_Character.transform.position = Level_Controller.Instance.Get_First_Position_Player_Start_Game();
                }
                else
                {
                    obj_Character.transform.position = new Vector3(
                        Level_Controller.Instance.Room1().Get_Bed_Controller().transform.localPosition.x + 0.5f,
                        Level_Controller.Instance.Room1().Get_Bed_Controller().transform.localPosition.y, 0f);

                }



            }
        }

        DOVirtual.DelayedCall(0.5f, () =>
        {
            m_Is_Spawn_Character_Done = true;
        }, false);
    }







    [SerializeField] private List<Character_Controller> all_Player = new List<Character_Controller>();
    private void Move_AI_To_Room()
    {
        for (int i = 0; i < all_Player.Count; i++)
        {
            var character_Controller = all_Player[i];
            if (character_Controller && character_Controller.Get_Type_Player() != m_Player_Curent)
            {
                character_Controller.Play_Anim(Type_Animation.Idle);




                DOVirtual.DelayedCall(UnityEngine.Random.Range(0.2f, 1.2f), () =>
                {
                    var random_Room = Level_Controller.Instance.Get_Random_Room();
                    if (random_Room)
                    {
                        if (Get_Pause_Dialogue())
                        {
                            SetLockAIMove(true);
                        }
                        else
                        {
                            character_Controller.Set_Target_Move(random_Room.Get_Bed_Controller());
                        }

                    }
                }).SetLink(gameObject);
            }
        }

    }

    [SerializeField] private bool isLockAI;
    public bool GetLockAiMove()
    {
        return isLockAI;
    }

    public void SetLockAIMove(bool isLock)
    {
        isLockAI = isLock;

    }

    public void CharacterAIMover()
    {
        for (int i = 0; i < all_Player.Count; i++)
        {
            var character_Controller = all_Player[i];
            if (character_Controller && character_Controller.Get_Type_Player() != m_Player_Curent)
            {
                character_Controller.Play_Anim(Type_Animation.Idle);

                DOVirtual.DelayedCall(0.1f, () =>
                {
                    var random_Room = Level_Controller.Instance.Get_Random_Room();
                    if (random_Room)
                    {

                        character_Controller.Set_Target_Move(random_Room.Get_Bed_Controller());


                    }
                });
            }
        }
    }

    #endregion

    #region ============= Config Time Spawn Boss in Mode Challenge =============
   
    [SerializeField] Bool_Global_Variable m_Live_Data_Start_Burn_Door;
    [SerializeField] bool m_Is_Challenge_Mode;
    [SerializeField] int m_Curr_Wave_Challenge;





    [Header("-------- Anim Bonus Coin -------- ")]
    [SerializeField] Animator m_Anim_Bonus_Coin;
    [SerializeField] TextMeshProUGUI m_Txt_Value_Coin_Bonus;
    [SerializeField] TextMeshProUGUI m_Txt_Value_Energy_Bonus;
    [SerializeField] List<int> m_All_Time_Count_Down = new List<int>();
    [SerializeField] int m_Time_Count_Down_Burn_Door;

    int m_Tmp_Delta;
    int m_Curr_Time_Count_Down;
    int m_Max_Time_Count_Down;
    int m_Time_Delay_Each_Wave = 5;

    public Bool_Global_Variable Get_Live_Data_Start_Burn_Door()
    {
        return m_Live_Data_Start_Burn_Door;
    }

    public void _Btn_Next_Wave_OnClick()
    {
        SoundController.Play_Sound_Clicks();

        // Bonus
        Play_Anim_Add_Coin_Bonus(true);

        // CancelInvoke(nameof(Update_Progress_Btn_Challenge_Mode));
        // Start_Wave(false);
        // Play_Anim_Higtlight_Btn_Spawn_Bosss(false);

        CancelInvoke(nameof(Play_Sound_Alert_Boss_Spawn));
        UI_Alert_Boss.Instance.Stop_Alert();
    }

    // public void Check_Kill_All_Boss_Mode_Challenge()
    // {
    //     if (Boss_Manager.Instance.Check_Is_Kill_All_Boss())
    //     {
    //         Play_Anim_Higtlight_Btn_Spawn_Bosss(true);
    //     }
    // }

    public void Play_Anim_Add_Coin_Bonus(bool is_Click)
    {
        int energy_Bonus = (Boss_Manager.Instance.Get_Max_Level_Boss() + 1) * 100;
        if (is_Click)
        {
            energy_Bonus += (m_Curr_Time_Count_Down) * (Boss_Manager.Instance.Get_Max_Level_Boss() + 1);
        }
        int coin_Bonus = energy_Bonus * 3;

        m_Txt_Value_Coin_Bonus.Set_Text("+" + coin_Bonus);
        m_Txt_Value_Energy_Bonus.Set_Text("+" + energy_Bonus);
        m_Anim_Bonus_Coin.gameObject.Set_Active(true);
        m_Anim_Bonus_Coin.enabled = true;
        m_Anim_Bonus_Coin.Play_Animation_Play();

        DOVirtual.DelayedCall(2f, () =>
        {
            m_Anim_Bonus_Coin.enabled = false;
            m_Anim_Bonus_Coin.gameObject.Set_Active(false);
        }, false);

        Player_Manager.Instance.Get_Data_Player_Current().Increase_Coin(coin_Bonus);
        Player_Manager.Instance.Get_Data_Player_Current().Increase_Energy(energy_Bonus);
    }


    private void Init_Data_Init_Data_Challenge_Mode()
    {
        // Set_Active_Btn_Spawn_Boss_Challenge(false);
        m_Curr_Wave_Challenge = 0;
        m_All_Time_Count_Down.Clear();

        for (int i = 0; i < m_Time_Will_Spawn_Boss.Count; i++)
        {
            if (i == 0)
            {
                m_All_Time_Count_Down.Add(m_Time_Will_Spawn_Boss[i] + 10);
            }
            else
            {
                m_All_Time_Count_Down.Add(m_Time_Will_Spawn_Boss[i] - m_Time_Will_Spawn_Boss[i - 1]);
            }
        }
    }

    // private void Start_Wave(bool is_Start)
    // {
    //     if (m_Curr_Wave_Challenge < m_All_Time_Count_Down.Count - 1)
    //     {
    //         if (!is_Start)
    //         {
    //             m_Curr_Wave_Challenge += 1;

    //             m_Curr_Time_Count_Down = m_All_Time_Count_Down[m_Curr_Wave_Challenge];
    //             m_Max_Time_Count_Down = m_All_Time_Count_Down[m_Curr_Wave_Challenge];








    //             Spawn_Boss_Now();

    //             DOVirtual.DelayedCall(m_Time_Delay_Each_Wave, () =>
    //             {
    //                 Set_Active_Btn_Spawn_Boss_Challenge(true);
    //                 CancelInvoke(nameof(Update_Progress_Btn_Challenge_Mode));
    //                 Update_Progress_Btn_Challenge_Mode();
    //                 Start_Fill_Amount();
    //             }, false);
    //         }
    //         else
    //         {
    //             m_Curr_Time_Count_Down = m_All_Time_Count_Down[m_Curr_Wave_Challenge];
    //             m_Max_Time_Count_Down = m_All_Time_Count_Down[m_Curr_Wave_Challenge];
    //             Set_Active_Btn_Spawn_Boss_Challenge(true);
    //             CancelInvoke(nameof(Update_Progress_Btn_Challenge_Mode));
    //             Update_Progress_Btn_Challenge_Mode();
    //             Start_Fill_Amount();
    //         }
    //     }
    //     else if (m_Curr_Wave_Challenge == m_All_Time_Count_Down.Count - 1)
    //     {
    //         Spawn_Boss_Now();

    //         m_Curr_Time_Count_Down = m_All_Time_Count_Down[m_Curr_Wave_Challenge];
    //         m_Max_Time_Count_Down = m_All_Time_Count_Down[m_Curr_Wave_Challenge];
    //         CancelInvoke(nameof(Update_Progress_Btn_Challenge_Mode));

    //         //m_Layout_Burn.Set_Active(true);
    //         //m_Progress_Burn.gameObject.Set_Active(true);
    //         //m_Icon_Burn.color = m_Color_Inactive_Burn;

    //         //Start_Count_Down_Burn();
    //     }
    // }







    // private void Update_Progress_Btn_Challenge_Mode()
    // {
    //     if (m_Curr_Time_Count_Down <= 0)
    //     {
    //         Play_Anim_Add_Coin_Bonus(false);
    //         Start_Wave(false);
    //     }
    //     else
    //     {
    //         m_Txt_Time_Challenge_Count_Down.Set_Text(m_Curr_Time_Count_Down <= 0 ? 0 : m_Curr_Time_Count_Down);
    //         m_Curr_Time_Count_Down -= 1;

    //         if (m_Curr_Time_Count_Down == 9)
    //         {
    //             UI_Alert_Boss.Instance.Play_Alert(Type_Alert_Boss.Monster_Spawn);

    //             CancelInvoke(nameof(Play_Sound_Alert_Boss_Spawn));
    //             Invoke(nameof(Play_Sound_Alert_Boss_Spawn), 7f);
    //         }

    //         CancelInvoke(nameof(Update_Progress_Btn_Challenge_Mode));
    //         Invoke(nameof(Update_Progress_Btn_Challenge_Mode), 1f);
    //     }
    // }


    #endregion

    #region =========== Config Time ================

    
    [SerializeField] Bool_Global_Variable m_Live_Data_Loop_Time;
    [SerializeField] TextMeshProUGUI m_Txt_Time_CountDown;
    [SerializeField] int max_Time_Play;
    [SerializeField] int time_Increase;
    [SerializeField] int m_Max_Level_Boss;

    public Bool_Global_Variable Get_Live_Data_Loop_Time()
    {
        return m_Live_Data_Loop_Time;
    }

    private void Notify_Live_Data_Loop_Time()
    {
        if (m_Live_Data_Loop_Time != null && m_Live_Data_Loop_Time)
        {
            m_Live_Data_Loop_Time.Value = true;
        }
    }

    //private void Loop_Time_Wait_Boss()
    //{
    //    Notify_Live_Data_Loop_Time();
    //}

    public int Get_Time_Increase()
    {
        return time_Increase;
    }

    public void Set_Max_Level_Boss(int level)
    {
        if (level > m_Max_Level_Boss)
        {
            m_Max_Level_Boss = level;
        }
    }

    public void Init_Config_Time()
    {
        time_Increase = 0;
        //        Debug.LogError("XekotobyTime4"+ max_Time_Play);

        m_Txt_Time_CountDown.Set_Text_To_Time(max_Time_Play <= 0 ? 0 : max_Time_Play);

        CancelInvoke(nameof(Loop_Time_CountDown));
        //CancelInvoke(nameof(Loop_Time_Wait_Boss));
        InvokeRepeating(nameof(Loop_Time_CountDown), 1f, 1f);

        Create_Boss();

        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Challenge)
        {
            //   Start_Wave(true);



            m_Time_Count_Down_Burn_Door = Get_Total_Time() <= 0 ? 0 : Get_Total_Time();

        }

    }

    private int Get_Total_Time()
    {
        return My_Utils.Get_Second_By_Time(data_Character_Join_Game.max_Time_Play) + (m_All_Time_Count_Down.Count + 1) * m_Time_Delay_Each_Wave;
    }

    private void Loop_Time_CountDown()
    {
        if (m_Is_End_Level)
        {
            CancelInvoke(nameof(Loop_Time_CountDown));
            return;
        }

        Notify_Live_Data_Loop_Time();

        if (max_Time_Play <= 0)
        {
            m_Is_Time_Out = true;
            max_Time_Play = 0;
            m_Is_End_Level = true;
            CancelInvoke(nameof(Loop_Time_CountDown));
            Debug.LogError("XekotobyTime" + max_Time_Play);
            m_Txt_Time_CountDown.Set_Text_To_Time(max_Time_Play <= 0 ? 0 : max_Time_Play);

            if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
            {
                Start_Player_Win_Time_Out();
            }
            else
            {
                Show_UI_Win_Lose(Status_Win_Lose.Vampire_Mode_Lose);
            }
        }
        else
        {
            Check_Spawn_Boss();
        }


        if (!m_Is_Challenge_Mode)
        {
            max_Time_Play -= 1;
            time_Increase += 1;


            m_Txt_Time_CountDown.Set_Text_To_Time(max_Time_Play <= 0 ? 0 : max_Time_Play);
        }

        Check_Test_AB_Time_Vampire_Attack();
    }

    Model_Boss m_Tmp_Model_Boss;
    int m_Level_Boss_Spawn;


    private void Check_Spawn_Boss()
    {
        m_Level_Boss_Spawn = m_Max_Level_Boss + 1;

        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            m_Level_Boss_Spawn = m_Max_Level_Boss;
        }

        for (int i = m_All_Data_Boss.Count - 1; i >= 0; i--)
        {
            m_Tmp_Model_Boss = m_All_Data_Boss[i];
            if (m_Tmp_Model_Boss != null && My_Utils.Get_Second_By_Time(m_Tmp_Model_Boss.time_Spawn) <= time_Increase)
            {
                if (!m_Tmp_Model_Boss.is_Player_Control)
                {
                    Boss_Manager.Instance.Spawn_Boss(m_Tmp_Model_Boss, m_Level_Boss_Spawn);
                    m_All_Data_Boss.RemoveAt(i);
                }
            }
        }

        if (m_Time_Will_Spawn_Boss.Count > 0 && DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
        {
            if (time_Increase >= m_Time_Will_Spawn_Boss[0])
            {
                UI_Alert_Boss.Instance.Play_Alert(Type_Alert_Boss.Monster_Spawn);
                m_Time_Will_Spawn_Boss.RemoveAt(0);

                CancelInvoke(nameof(Play_Sound_Alert_Boss_Spawn));
                Invoke(nameof(Play_Sound_Alert_Boss_Spawn), 7f);
            }
        }
    }

    private void Play_Sound_Alert_Boss_Spawn()
    {
        SoundController.Play_Sounds(Type_Sound.Alert);
    }

    public void Spawn_Boss_Now()
    {
        if (!Boss_Manager.Instance.Check_Is_Kill_All_Boss() && !m_Is_Challenge_Mode)
        {
            return;
        }

        Model_Time curr_Time = Get_Time_Next_Phare();
        Model_Boss model_Boss;
        for (int i = m_All_Data_Boss.Count - 1; i >= 0; i--)
        {
            model_Boss = m_All_Data_Boss[i];
            if (model_Boss != null && !model_Boss.is_Player_Control && curr_Time != null)
            {
                if (model_Boss.time_Spawn.minute == curr_Time.minute && model_Boss.time_Spawn.seconds == curr_Time.seconds)
                {
                    Boss_Manager.Instance.Spawn_Boss(model_Boss, m_Max_Level_Boss + 1 + model_Boss.time_Spawn.level_Jump);
                    m_All_Data_Boss.RemoveAt(i);
                }
            }
        }

        if (m_Time_Will_Spawn_Boss.Count > 0 && !m_Is_Challenge_Mode)
        {
            UI_Alert_Boss.Instance.Play_Alert(Type_Alert_Boss.Monster_Spawn);
            m_Time_Will_Spawn_Boss.RemoveAt(0);

            CancelInvoke(nameof(Play_Sound_Alert_Boss_Spawn));
            SoundController.Play_Sounds(Type_Sound.Alert);
        }

    }
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.A))
        {
            Debug.LogError("da nhan");
            Spawn_Boss_Now_Button();
        }

    }

    [SerializeField] private List<Model_Boss> m_All_Data_Boss_Test_ = new List<Model_Boss>();
    public void Spawn_Boss_Now_Button()
    {


        Model_Time curr_Time = Get_Time_Next_Phare_Test_Button();

        Model_Boss model_Boss;
        for (int i = m_All_Data_Boss_Test_.Count - 1; i >= 0; i--)
        {
            model_Boss = m_All_Data_Boss_Test_[i];
            if (model_Boss != null && !model_Boss.is_Player_Control && curr_Time != null)
            {
                if (model_Boss.time_Spawn.minute == curr_Time.minute && model_Boss.time_Spawn.seconds == curr_Time.seconds)
                {
                    Boss_Manager.Instance.Spawn_Boss(model_Boss, m_Max_Level_Boss + 1 + model_Boss.time_Spawn.level_Jump);
                    m_All_Data_Boss_Test_.RemoveAt(i);
                }
            }
        }
        if (m_Time_Will_Spawn_Boss.Count > 0 && !m_Is_Challenge_Mode)
        {
            UI_Alert_Boss.Instance.Play_Alert(Type_Alert_Boss.Monster_Spawn);
            m_Time_Will_Spawn_Boss.RemoveAt(0);

            CancelInvoke(nameof(Play_Sound_Alert_Boss_Spawn));
            SoundController.Play_Sounds(Type_Sound.Alert);
        }

    }





    private Model_Time Get_Time_Next_Phare()
    {
        Model_Time curr_Time = null;
        Model_Boss model_Boss;
        for (int i = 0; i < m_All_Data_Boss.Count; i++)
        {
            model_Boss = m_All_Data_Boss[i];
            if (model_Boss != null && !model_Boss.is_Player_Control)
            {
                if (curr_Time != null)
                {
                    if (My_Utils.Get_Second_By_Time(model_Boss.time_Spawn) < My_Utils.Get_Second_By_Time(curr_Time))
                    {
                        curr_Time = model_Boss.time_Spawn;
                    }
                }
                else
                {
                    curr_Time = model_Boss.time_Spawn;
                }
            }
        }
        return curr_Time;
    }

    private Model_Time Get_Time_Next_Phare_Test_Button()
    {
        Model_Time curr_Time = null;
        Model_Boss model_Boss;
        for (int i = 0; i < m_All_Data_Boss_Test_.Count; i++)
        {
            model_Boss = m_All_Data_Boss_Test_[i];
            if (model_Boss != null && !model_Boss.is_Player_Control)
            {
                if (curr_Time != null)
                {
                    if (My_Utils.Get_Second_By_Time(model_Boss.time_Spawn) < My_Utils.Get_Second_By_Time(curr_Time))
                    {
                        curr_Time = model_Boss.time_Spawn;
                    }
                }
                else
                {
                    curr_Time = model_Boss.time_Spawn;
                }
            }
        }
        return curr_Time;
    }
    #endregion

    #region =========== Sum Boss In Map ================

   
    [SerializeField] int m_Sum_Boss_In_Map;

    private void Init_Sum_Boss_In_Map()
    {
        m_Sum_Boss_In_Map = 0;
        for (int i = 0; i < m_All_Boss_By_Type.Count; i++)
        {
            m_Sum_Boss_In_Map += m_All_Boss_By_Type[i].amount;
        }
    }

    public void Decrease_Boss_In_Map()
    {
        m_Sum_Boss_In_Map -= 1;

        if (m_Sum_Boss_In_Map <= 0)
        {
            CancelInvoke(nameof(Delay_Show_UI_Win_Lose));
            Invoke(nameof(Delay_Show_UI_Win_Lose), 2f);
        }
    }

    public int Get_Sum_Boss_In_Map()
    {
        return m_Sum_Boss_In_Map;
    }

    public int Get_Sum_Player_In_Map()
    {
        return m_Sum_Player_In_Map;
    }

    private void Delay_Show_UI_Win_Lose()
    {
        if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            Show_UI_Win_Lose(Status_Win_Lose.Player_Mode_Win_Kill_All_Vampire);
        }
        else
        {
            Show_UI_Win_Lose(Status_Win_Lose.Vampire_Mode_Lose);
        }
    }

    #endregion

    #region =========== Sum Player In Map ================

 
    [SerializeField] int m_Sum_Player_In_Map;

    private void Init_Sum_Player_In_Map()
    {
        m_Sum_Player_In_Map = m_All_Character_Of_Players.Count;
    }

    public void Decrease_Player_In_Map()
    {
        m_Sum_Player_In_Map -= 1;

        if (m_Sum_Player_In_Map <= 0 && DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Boss)
        {
            CancelInvoke(nameof(Delay_Show_UI_Vampire_Win_Lose));
            Invoke(nameof(Delay_Show_UI_Vampire_Win_Lose), 1f);
        }
    }

    private void Delay_Show_UI_Vampire_Win_Lose()
    {
        Show_UI_Win_Lose(Status_Win_Lose.Vampire_Mode_Win);
    }

    #endregion

    #region =========== Tutorials ================

    public void Set_Complete_Mission_Tutorial(Type_Mission_Tut type_Mission, Type_Player type_Player)
    {
        //if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player 
        //    && DataSaved.Get_Current_Loading_Level() == 0 
        //    && type_Player == Get_Player_Curr()
        //    && !DataSaved.Get_Complete_Mission_Tutorial(type_Mission)
        //    )
        //{
        //    DataSaved.Set_Complete_Mission_Tutorial(type_Mission, true);

        //    if (DataSaved.Get_Index_Claimed_Mission_Tutorial() == (int)type_Mission)
        //    {
        //        DataSaved.Increase_Index_Claimed_Mission_Tutorial();
        //        Canvas_In_Game.Instance.Get_UI_Reward_Mission_Complete().Open_UI(type_Mission);
        //    }
        //} 
        //else 
        if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player
            && DataSaved.Get_Current_Loading_Level() == 0
            && type_Player == Get_Player_Curr())
        {
            DataSaved.Increase_Index_Claimed_Mission_Tutorial();
            Canvas_In_Game.Instance.Check_Show_Tutorials();
        }
    }

    #endregion

    #region ============== Start Player Win - Time Out =================

    public bool Get_Is_Time_Out()
    {
        return m_Is_Time_Out;
    }

    private void Start_Player_Win_Time_Out()
    {
        Base_Boss boss_Live = Boss_Manager.Instance.Get_First_Boss_Live();
        if (boss_Live)
        {
            boss_Live.Force_Stop_Move();

            Camera_Movement.Instance.Move_Cam_To_Target(boss_Live.Get_Curr_Direction(), boss_Live.m_Type_Boss, boss_Live.transform.position, () =>
            {

                Debug.LogError("Start_Player_Win_Time_Out  cameera");
                boss_Live.Force_Boss_Die();

                DOVirtual.DelayedCall(3f, () =>
                {
                    On_Ready_Open_UI_Win_Time_Out();
                }, false);
            });
        }
        else
        {
            On_Ready_Open_UI_Win_Time_Out();
        }
    }

    private void On_Ready_Open_UI_Win_Time_Out()
    {
        Show_UI_Win_Lose(Status_Win_Lose.Player_Mode_Win_Out_Of_Time);
    }

    #endregion

    private void Show_UI_Win_Lose(Status_Win_Lose status_Win_Lose)
    {
        if (m_Is_Show_UI_Win_Lose)
        {
            return;
        }
        m_Is_End_Level = true;
        m_Is_Show_UI_Win_Lose = true;

        Time.timeScale = 0;

        bool is_Win = Is_Win(status_Win_Lose);




        IncreaseBonusXpUser(is_Win);

        if (status_Win_Lose != Status_Win_Lose.Player_Mode_Lose &&
            DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {
            if (Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()) ==
                Database.instance.Get_Unlock_Level_Story(Database.instance.GetHardLevel()))
            {
                Database.instance.Increase_Unlock_Level_Story();
            }

        }







        Canvas_In_Game.Instance.Get_UI_Win_Lose().Open_UI(status_Win_Lose);




        if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
        {
            if (Database.instance)
            {

                Debug.LogError("Hoan thanh level story");
                Database.instance.Select_Mission_Complete(Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()), 0, Database.instance.GetHardLevel());



            }
        }



    }


    public void IncreaseBonusXpUser(bool isWin)
    {
        if (isWin)
        {
            if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story)
            {
                if (Database.instance)
                {
                    Debug.LogError("IncreaseBonusXpUser 11111" + (150 + (20 * (DataSaved.Get_Current_Loading_Level() + 1))));


                    //Database.instance.IncreaseXpUser(150 + (DataSaved.Get_Current_Loading_Level() *20) ,false);
                    Database.instance.SetXpRewardInGame(150 + (DataSaved.Get_Current_Loading_Level() * 20));



                }
            }

            if (DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level)
            {
                if (Database.instance)
                {
                    Debug.LogError("IncreaseBonusXpUser 22222" + (150 + ((Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()) * 20))));
                    if (Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()) == Database.instance.Get_Unlock_Level_Story(Database.instance.GetHardLevel()))
                    {
                        // lan dau

                        Database.instance.SetXpRewardInGame(500 + (Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()) * 100));
                    }
                    else
                    {

                        // lan sau 

                        Debug.LogError("IncreaseBonusXpUser 33333 " + 150 + (Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()) * 20));


                        Database.instance.SetXpRewardInGame(150 + (Database.instance.Get_Current_Loading_Level_Story(Database.instance.GetHardLevel()) * 20));
                    }

                }
            }
        }
    }

    private bool Is_Win(Status_Win_Lose status_Win_Lose)
    {
        switch (status_Win_Lose)
        {
            case Status_Win_Lose.Player_Mode_Win_Kill_All_Vampire:
            case Status_Win_Lose.Player_Mode_Win_Out_Of_Time:
            case Status_Win_Lose.Vampire_Mode_Win:
                return true;
        }
        return false;
    }

    #region =========== Config Anim Layout Time =====================
  
    [SerializeField] RectTransform m_Rect_Layout_Time;
    [SerializeField] Transform m_Point_Center;
    [SerializeField] Transform m_Point_Layout_Time;
    [SerializeField] GameObject m_Obj_Coin;
    [SerializeField] GameObject m_Obj_Energy;
    [SerializeField] Image m_BG_Anim_Time;
    [SerializeField] Animator m_Anim_Layout_Time;


    [SerializeField] private bool isPauseAppearDialogue = false;
    //Vector3 pos_Layout_Time_Default = new Vector3(-218, -125, 0);


    public bool Get_Pause_Dialogue()
    {
        return isPauseAppearDialogue;

    }
    public void Set_Pause_Dialogue(bool isPause)
    {
        isPauseAppearDialogue = isPause;


    }



    public void Play_Anim_Time_Start_Game(Action m_Anim_Done)
    {
        m_Obj_Coin.SetActive(false);
        m_Obj_Energy.SetActive(false);
      //  m_BG_Anim_Time.SetAlpha(175f / 255f);
        
        Color c = m_BG_Anim_Time.color;
        c.a = 175f / 255f;
        m_BG_Anim_Time.color = c;
        
        
        m_BG_Anim_Time.gameObject.SetActive(true);
        m_Anim_Layout_Time.enabled = false;

        m_Rect_Layout_Time.transform.position = m_Point_Center.position;
        m_Rect_Layout_Time.localScale = new Vector3(2f, 2f, 2f);

        DOVirtual.DelayedCall(1f, () =>
        {
            m_Rect_Layout_Time.DOMove(m_Point_Layout_Time.position, 1f)
            .SetEase(Ease.Linear)
            .OnComplete(() =>
            {




                m_Obj_Coin.SetActive(true);
                m_Obj_Energy.SetActive(true);
                m_BG_Anim_Time.gameObject.SetActive(false);

                m_Anim_Done.Invoke();
            });

            float scale = 2;
            DOTween.To(() => scale, x => scale = x, 1, 0.5f)
            .SetEase(Ease.Linear)
            .OnUpdate(() =>
            {
                m_Rect_Layout_Time.localScale = new Vector3(scale, scale, scale);
            }).OnComplete(() =>
            {

                scale = 1f;
                DOTween.To(() => scale, x => scale = x, 1.1f, 0.25f)
                .SetEase(Ease.Linear)
                .OnUpdate(() =>
                {
                    m_Rect_Layout_Time.localScale = new Vector3(scale, scale, scale);
                })
                .OnComplete(() =>
                {
                    //scale = 1.1f;
                    DOTween.To(() => scale, x => scale = x, 1f, 0.25f)
                    .SetEase(Ease.Linear)
                    .OnUpdate(() =>
                    {
                        m_Rect_Layout_Time.localScale = new Vector3(scale, scale, scale);
                    }).OnComplete(() =>
                    {
                        m_Anim_Layout_Time.enabled = true;
                        m_Anim_Layout_Time.Play_Animation_Play();
                        DOVirtual.DelayedCall(1f, () =>
                        {
                            m_Anim_Layout_Time.enabled = false;
                        }, false).SetLink(gameObject);
                    });
                });
            });

            float alpha = 175;
            DOTween.To(() => alpha, x => alpha = x, 0, 1f)
            .SetEase(Ease.Linear)
            .OnUpdate(() =>
            {
               // m_BG_Anim_Time.SetAlpha(alpha / 255f);
                
                Color color1 = m_BG_Anim_Time.color;
                color1.a = alpha / 255f;
                m_BG_Anim_Time.color = color1;
            });
        }, false);
    }

    #endregion

    #region =========== Config Test_AB_Time_Vampire_Attack ================

 
    [SerializeField] List<int> m_Data_AB_Easy_Count_Down = new List<int>();
    [SerializeField] List<int> m_Data_AB_Normal_Count_Down = new List<int>();
    [SerializeField] List<int> m_Data_AB_Hard_Count_Down = new List<int>();

    [Header("ReadOnly")]
   [SerializeField] List<int> m_Time_AB_Easy_Count_Down = new List<int>();
   [SerializeField] List<int> m_Time_AB_Normal_Count_Down = new List<int>();
   [SerializeField] List<int> m_Time_AB_Hard_Count_Down = new List<int>();

    private void On_Restart_Test_AB_Time_Vampire_Attack()
    {
        if (RootManager.Get_Is_Test_AB_Time_Vampire_Attack())
        {
            m_Time_AB_Easy_Count_Down.Clear();
            m_Time_AB_Normal_Count_Down.Clear();
            m_Time_AB_Hard_Count_Down.Clear();

            m_Time_AB_Easy_Count_Down.AddRange(m_Data_AB_Easy_Count_Down);
            m_Time_AB_Normal_Count_Down.AddRange(m_Data_AB_Normal_Count_Down);
            m_Time_AB_Hard_Count_Down.AddRange(m_Data_AB_Hard_Count_Down);
        }
    }

    private int Get_Curr_Time_AB_Vampire_Attack()
    {
        switch (m_Type_Level)
        {
            case Type_Level.Easy:
                if (m_Time_AB_Easy_Count_Down.Count > 0)
                {
                    return m_Time_AB_Easy_Count_Down[0];
                }
                return -1;

            case Type_Level.Normal:
                if (m_Time_AB_Normal_Count_Down.Count > 0)
                {
                    return m_Time_AB_Normal_Count_Down[0];
                }
                return -1;

            case Type_Level.Hard:
                if (m_Time_AB_Hard_Count_Down.Count > 0)
                {
                    return m_Time_AB_Hard_Count_Down[0];
                }
                return -1;
        }

        return -1;
    }

    private void Set_Next_Time_AB_Vampire_Attack()
    {
        switch (m_Type_Level)
        {
            case Type_Level.Easy:
                if (m_Time_AB_Easy_Count_Down.Count > 0)
                {
                    m_Time_AB_Easy_Count_Down.RemoveAt(0);
                }
                return;

            case Type_Level.Normal:
                if (m_Time_AB_Normal_Count_Down.Count > 0)
                {
                    m_Time_AB_Normal_Count_Down.RemoveAt(0);
                }
                return;

            case Type_Level.Hard:
                if (m_Time_AB_Hard_Count_Down.Count > 0)
                {
                    m_Time_AB_Hard_Count_Down.RemoveAt(0);
                }
                return;
        }
    }

    bool m_Is_Timing_AB_Vampire_Attack;

    public bool Get_Is_Timing_AB_Vampire_Attack()
    {
        if (RootManager.Get_Is_Test_AB_Time_Vampire_Attack())
        {
            return m_Is_Timing_AB_Vampire_Attack;
        }
        return false;
    }

    int m_Tmp_minute;


    private void Check_Test_AB_Time_Vampire_Attack()
    {
        if (RootManager.Get_Is_Test_AB_Time_Vampire_Attack() && !m_Is_Timing_AB_Vampire_Attack)
        {
            m_Tmp_minute = Get_Curr_Time_AB_Vampire_Attack();
            if (m_Tmp_minute > 0 && max_Time_Play <= m_Tmp_minute * 60)
            {
                m_Is_Timing_AB_Vampire_Attack = true;

                Set_Next_Time_AB_Vampire_Attack();

                Boss_Manager.Instance.Force_All_Boss_Attack_Player();

                DOVirtual.DelayedCall(1f, () =>
                {
                    m_Is_Timing_AB_Vampire_Attack = false;
                }, false);
            }
        }
    }

    #endregion

    private void Check_Auto_Sleep()
    {

        for (int i = all_Player.Count - 1; i >= 0; i--)
        {
            if (all_Player[i] == null)
            {
                all_Player.RemoveAt(i);
            }
        }

        if (all_Player.Count > 0)
        {
            bool isPlayerCur = false;

            for (int i = 0; i < all_Player.Count; i++)
            {
                if (all_Player[i])
                {
                    if (all_Player[i].Get_Type_Player() == m_Player_Curent)
                    {
                        isPlayerCur = true;
                    }

                    try
                    {
                        all_Player[i].Auto_Find_Room_Nearest_And_Move();
                    }
                    catch (Exception e)
                    {
                        Debug.LogError("Check_Auto_Sleep : error = " + e.Message);
                    }
                }
            }

            Canvas_In_Game.Instance.Set_Active_Btn_Join_Stick(false);
            Canvas_In_Game.Instance.Get_UI_GamePlay().Set_Active_Follow_Me(isPlayerCur);
        }
        else
        {
            Init_Config_Time();
        }
    }
}
