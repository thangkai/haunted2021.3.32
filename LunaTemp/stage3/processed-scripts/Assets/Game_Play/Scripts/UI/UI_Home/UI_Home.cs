using System.Collections;
using UnityEngine;

using TMPro;

using System.Collections.Generic;
using DG.Tweening;

public class UI_Home : Base_UI
{


    //[SerializeField] GameObject m_Btn_Remove_Ads;


 
    [SerializeField] private TMP_Text textTime;

    [SerializeField] private TMP_Text textTime2;


 
    private IEnumerator DelayStartCountdown()
    {
        yield return null; // đợi 1 frame
        StartCountdown(3, -1, 4f);
    }
    public void StartCountdown(float from, float to, float duration)
    {

        textTime.SetText("3");
        textTime2.SetText("3");
        float current = from;
        textTime.text = Mathf.CeilToInt(current).ToString();
        textTime2.text = Mathf.CeilToInt(current).ToString();


        DOTween.To(() => current, x =>
        {
            current = x;
            if (current == -1)
            {
                textTime.text = "START";
                textTime2.text = "START";
            }
            else
            {
                textTime.text = $"{Mathf.CeilToInt(current)}S";
                textTime2.text = $"{Mathf.CeilToInt(current)}S";


            }
        }, to, duration)
        .SetEase(Ease.Linear)
        .SetId(textTime)
        .SetId(textTime2)
          .OnComplete(() =>
    {
        // Khi countdown xong
        // Khi countdown xong -> đổi text thành START
        textTime.text = "START";
        textTime2.text = "START";
        _Btn_Challenge_Mode_On_Click();

    }); ;
    }

    public override void Start()
    {
        base.Start();
        SoundController.Play_Musics(true);
        StartCoroutine(DelayStartCountdown()); 

        DataSaved.Set_Skin_Trying(Type_Character.None);



      

        


        m_Layout_Shop_Character.OnReadyOpenUI();

        //update data;




        if (Database.instance != null)
        {

            Database.instance.SetSkinTry(Type_Character.None);
        }
    }







    // Check Popup After Receive Win lose






    // Check Popup When Enable UI Home




    private int k = 0;










    public override void OnReadyOpenUI()
    {
        Update_UI_Btn_Change_Mode_Play(true);
        
        DataSaved.Increase_Count_Open_UI_Home();


 
    }


    public void _Btn_Challenge_Mode_On_Click()
    {

        Set_Data_Join_Game();
        SoundController.Play_Sound_Plays();

        DataSaved.Set_Type_Mode_Gameplay_Playing(Type_Mode_Gameplay.Challenge);
        DataSaved.Set_Current_Loading_Level_Mode_Challenge(0);
     

        Canvas_Home.Instance.gameObject.SetActive(false);

        
        Game_Controller.Instance.EnterGame();
    }

    [SerializeField] Data_Character_Join_Game m_Data_Character_Join_Game;


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
    Data_Info_Level m_Data_Info_Level;
    [SerializeField] List<Model_Boss> m_All_Boss_Join_Game = new List<Model_Boss>();
    [SerializeField] List<Model_Player_Join_Game> m_All_Player_Join_Game = new List<Model_Player_Join_Game>();
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
    private void Set_Data_Join_Game()
    {
        m_Data_Info_Level = Data_Home.Instance.Get_Data_Info_Level_Manager().Get_Data_Info_Level(0);
        Create_Data_Boss();
        Create_Data_Player();
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
    private void Create_Data_Player()
    {
        int sum_Player = 0;
        m_All_Player_Join_Game.Clear();

        var all_Player = m_Data_Info_Level.m_All_Player;
        bool is_Player_Mode = DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player;

        //  var data_Random_Max_Turret = m_Data_Max_Turret_Can_Build.Get_Random_Max_Turret();
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

                    name_Player = "";
                    is_Using_Skin_2 = DataSaved.Get_Is_Using_Skin_2(type_Character);
                }
                else
                {
                    type_Character = (Type_Character)UnityEngine.Random.Range((int)Type_Character.Student, (int)Type_Character.Total - 1);


                    // if (sum_Player < data_Random_Max_Turret.Count)
                    // {
                    //     model_Player_Join_Game.max_Turret_Can_Build = (int)data_Random_Max_Turret[sum_Player];
                    // }
                    // else
                    // {
                    //     model_Player_Join_Game.max_Turret_Can_Build = 3;
                    // }

                    if ((int)type_Character <= (int)Type_Character.Scientist)
                    {
                        is_Using_Skin_2 = UnityEngine.Random.Range(0, 999) % 2 == 0;
                    }
                    else
                    {
                        is_Using_Skin_2 = false;
                    }
                }



                model_Player_Join_Game.type_Player = (Type_Player)(sum_Player % ((int)Type_Player.Player_8 + 1));
                model_Player_Join_Game.Set_Type_Character(type_Character);
                DataSaved.Set_Type_Character_Playing(model_Player_Join_Game.type_Player, type_Character, is_Using_Skin_2);

                model_Player_Join_Game.type_Level = item.m_Level_Player;
                model_Player_Join_Game.is_Using_Skin_2 = is_Using_Skin_2;

                model_Player_Join_Game.Set_Type_Rank_Character(DataHomeGame.Instance.Get_Rank_Character(type_Character));

                m_All_Player_Join_Game.Add(model_Player_Join_Game);


                sum_Player += 1;
            }
        }
    }






 











    #region ============ Change Mode Play ===============
    [Header("______ Change Mode Play ______")]




    [SerializeField] internal Layout_Shop_Character m_Layout_Shop_Character;

    [SerializeField] internal Layout_Shop_Character m_Layout_Shop_Character_2;
    //  [SerializeField] Layout_Shop_Character m_Layout_Shop_Boss;
    Type_Mode_Play type_Mode_Play;
    bool is_Mode_Player;

    public void _Btn_Change_Mode_OnClick()
    {
        SoundController.Play_Sound_Clicks();

        type_Mode_Play = DataSaved.Get_Type_Mode_Play();
        DataSaved.Set_Type_Mode_Play((type_Mode_Play == Type_Mode_Play.Player) ? Type_Mode_Play.Boss : Type_Mode_Play.Player);

        Update_UI_Btn_Change_Mode_Play();
    }

    private void Update_UI_Btn_Change_Mode_Play(bool is_From_Start = false)
    {
        is_Mode_Player = DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player;

        m_Layout_Shop_Character.gameObject.Set_Active(false);

        m_Layout_Shop_Character_2.gameObject.Set_Active(false);
        // m_Layout_Shop_Boss.gameObject.Set_Active(false);

        //  m_Obj_Btn_Perk.Set_Active(is_Mode_Player);


        if (is_Mode_Player)
        {
            m_Layout_Shop_Character.Open_UI();
            m_Layout_Shop_Character_2.Open_UI();

        }
        else
        {
            // m_Layout_Shop_Boss.Open_UI();
        }
        if (DataSaved.Get_Skin_Trying() == Type_Character.None)
        {

        }
        else
        {

        }

    }








    #endregion




}