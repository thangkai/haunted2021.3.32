using UnityEngine;
using UnityEngine.UI;

using DG.Tweening;
using TMPro;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;


public class UI_GamePlay : MonoBehaviour
{
    [SerializeField] Layout_Mode_Defence m_Layout_Mode_Defence;
    [SerializeField] Layout_Mode_Vampire m_Layout_Mode_Vampire;

    [SerializeField] GameObject m_Obj_Alert_Follow_Me;


    private void Start()
    {
        Set_Active_Btn_Golem(false);
        if (RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            m_CD = 16;
            m_CD_Skill_2 = 16;
        }
        else
        {
            m_CD = 31;
            m_CD_Skill_2 = 31;
        }

        Reset_Btn_Skill_1_Normal();
        Set_Active_UI_Joystick(true);


        Update_Layout_Time();



        if (m_Live_Data_Skill_2_Eilif)
        {
            m_Live_Data_Skill_2_Eilif.Value = false;
        }
        //updateofjura
        if (m_Live_Data_Skill_1_Safeguard)
        {
            m_Live_Data_Skill_1_Safeguard.Value = false;
        }
        // SetMissionModeStoryLevel();
    }


    public void Update_Layout_Mode_Play()
    {
        if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            m_Layout_Mode_Vampire.gameObject.Set_Active(false);
            m_Layout_Mode_Defence.gameObject.Set_Active(true);

            m_Layout_Mode_Defence.Set_Data();
        }
        else
        {
            m_Layout_Mode_Defence.gameObject.Set_Active(false);
            m_Layout_Mode_Vampire.gameObject.Set_Active(true);
        }
    }


    public void Register_Postion_Player(Type_Player type_Player, [Bridge.Ref] Vector3 position)
    {
        m_Layout_Mode_Defence.Register_Postion_Player(type_Player, position);
    }

    public void _Btn_Pause_On_Click()
    {
        SoundController.Play_Sound_Clicks();
        LunaManager.instace.OnPlayButtonClick();


    }

    public void Hide_Layout_Item_Support()
    {


        //Canvas_In_Game.Instance.Get_UI_Buy_Item_Support().Close_UI();


        m_Obj_Btn_Skill_2.Set_Active(false);

        Set_Active_Btn_Golem(false);
    }

    public void Set_Active_Follow_Me(bool is_Active)
    {
        m_Obj_Alert_Follow_Me.Set_Active(is_Active);
    }


    public void _Btn_Story_Mission_On_Click()
    {
        SoundController.Play_Sound_Clicks();

    }


    #region ================== Layout Time ==================

    
    [Header("---- Info Mode Story ----")]
    [SerializeField] GameObject m_Obj_Time_Story;
    [SerializeField] GameObject m_Obj_Des_Story;
    [Header("---- Info Mode Challenge ----")]
    [SerializeField] GameObject m_Obj_Title_Challenge;
    [SerializeField] GameObject m_Obj_Des_Challenge;

    private void Update_Layout_Time()
    {
        //  Set_Active_Layout_Time_Story(DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story || DataSaved.Get_Type_Mode_Gameplay_Playing() == Type_Mode_Gameplay.Story_Level);
        Set_Active_Layout_Time_Story(true);

    }

    private void Set_Active_Layout_Time_Story(bool is_Active)
    {
        m_Obj_Time_Story.Set_Active(is_Active);
        m_Obj_Des_Story.Set_Active(is_Active);
        m_Obj_Title_Challenge.Set_Active(!is_Active);
        m_Obj_Des_Challenge.Set_Active(!is_Active);
    }

    #endregion

    #region ================== Btn Skill 1 ==================

  

    [SerializeField] Image m_Progress_Skill;
    float m_CD = 31;
   [SerializeField] bool m_Is_Disable_Click_Skill;
   [SerializeField] Data_Player m_Curr_Data_Player;
    float amount_Skill_1;
    public void _Btn_Skill_1_On_Click()
    {
        if (m_Is_Disable_Click_Skill) return;
        m_Is_Disable_Click_Skill = true;

        if (m_Is_Show_Tut_Fix_Door)
        {
            m_Is_Show_Tut_Fix_Door = false;
            Time.timeScale = 1;
            DataSaved.Set_Is_Complete_Tut_Fix_Door(true);
            Reset_Btn_Skill_1_Normal();
        }

        if (m_Curr_Data_Player == null)
        {
            m_Curr_Data_Player = Player_Manager.Instance.Get_Data_Player(Game_Controller.Instance.Get_Player_Curr());
        }

        m_Curr_Data_Player.Notify_Active_Skill_1(true);

        amount_Skill_1 = 1f;
        m_Progress_Skill.fillAmount = amount_Skill_1;
        DOTween.To(() => amount_Skill_1, x => amount_Skill_1 = x, 0, m_CD)
            .OnUpdate(() =>
        {
            m_Progress_Skill.fillAmount = amount_Skill_1;
        }).
        OnComplete(() =>
        {
            m_Is_Disable_Click_Skill = false;
        });
    }



    #endregion

    #region ================== Config Joystick ==================
    [Header("____ Config Joystick ____")]
    [SerializeField] Camera_Movement m_Camera_Movement;
    [SerializeField] GameObject m_UI_Fake_Joystick;

    public void Set_Active_Joystick(bool isActive)
    {
        Canvas_In_Game.Instance.Set_Active_Btn_Join_Stick(isActive);

        m_Camera_Movement.enabled = !isActive;


        Check_Active_Skill_2(!isActive);


    }

    Character_Controller character_Controller;
    public void StartMove()
    {
        if (Game_Controller.Instance != null)
        {
            character_Controller = Game_Controller.Instance.Get_Curr_Character_Controller();
            if (character_Controller)
            {
                Set_Active_UI_Joystick(false);
                character_Controller.Start_Move_By_Joystick();
            }
        }
    }

    public void Move([Bridge.Ref] Vector2 direction)
    {
        if (Game_Controller.Instance != null)
        {
            character_Controller = Game_Controller.Instance.Get_Curr_Character_Controller();
            if (character_Controller)
            {
                character_Controller.On_Move_By_JoyStick(direction);
            }
        }
    }

    public void End_Move()
    {
        if (Game_Controller.Instance != null)
        {
            character_Controller = Game_Controller.Instance.Get_Curr_Character_Controller();
            if (character_Controller)
            {
                Set_Active_UI_Joystick(true);
                character_Controller.End_Move_By_Joystick();
            }
        }
    }

    internal void Set_Active_UI_Joystick(bool is_Active)
    {
        m_UI_Fake_Joystick.Set_Active(is_Active);

    }

    #endregion

    #region ================== Btn Skill 2 ==================

   
    [SerializeField] GameObject m_Obj_Btn_Skill_2;
    [SerializeField] Image m_Progress_Skill_2;
    [SerializeField] Image m_Icon_Skill_2;
    float m_CD_Skill_2 = 30;
    [SerializeField] Bool_Global_Variable m_Live_Data_Skill_2_Eilif;
   [SerializeField] bool m_Is_Disable_Click_Skill_2;
    [SerializeField] Animator m_Anim_Reward_Coin_Skill_2;
    [SerializeField] TextMeshProUGUI m_Txt_Reward_Coin_Skill_2;
    private Tween m_Tween_Alert_Reward_Skill_2;
    float amount_Skill_2;
    Tween m_Tween_Delay_Off_Skill_2_Eilif;



    //updateofjura
    float m_CD_Skill_2_Safeguard = 120f;
    [SerializeField] Bool_Global_Variable m_Live_Data_Skill_1_Safeguard;
   [SerializeField] bool m_Is_Disable_Click_Skill_1_Safeguard;
    Tween m_Tween_Delay_Off_Skill_2_Safeguard;

    private void Check_Active_Skill_2(bool is_Active)
    {
        if (Check_Active_Btn_Skill_2())
        {
            Set_Active_Skill_2(is_Active);
        }
        else
        {
            m_Obj_Btn_Skill_2.Set_Active(false);
        }
    }
    public void _Btn_Skill_2_On_Click()
    {
        if (m_Is_Disable_Click_Skill_2) return;
        m_Is_Disable_Click_Skill_2 = true;

        if (m_Curr_Data_Player == null)
        {
            m_Curr_Data_Player = Player_Manager.Instance.Get_Data_Player(Game_Controller.Instance.Get_Player_Curr());
        }

        m_Curr_Data_Player.Notify_Active_Skill_2(true);

        if (m_Curr_Data_Player.Get_Type_Character() == Type_Character.Eilif && m_Live_Data_Skill_2_Eilif)
        {
            m_Tween_Delay_Off_Skill_2_Eilif.Do_Kill();
            m_Live_Data_Skill_2_Eilif.Value = true;
            m_Tween_Delay_Off_Skill_2_Eilif = DOVirtual.DelayedCall(5f, () =>
            {
                m_Live_Data_Skill_2_Eilif.Value = false;
            }, false);
        }
        else if (m_Curr_Data_Player.Get_Type_Character() == Type_Character.Raven)
        {
            // Todo: Play alert +1000 coin in UI
            Play_Anim_Reward_Coin_Skill_2(1000);

            m_Curr_Data_Player.Increase_Coin(1000);
        }
        //updateofjura
        else if (m_Curr_Data_Player.Get_Type_Character() == Type_Character.Safeguard && m_Live_Data_Skill_1_Safeguard)
        {
            m_Tween_Delay_Off_Skill_2_Safeguard.Do_Kill();
            m_Live_Data_Skill_1_Safeguard.Value = true;
            m_Tween_Delay_Off_Skill_2_Safeguard = DOVirtual.DelayedCall(20f, () =>
            {
                m_Live_Data_Skill_1_Safeguard.Value = false;
            }, false);
        }


        m_CD_Skill_2 = Get_Time_CD_Skill_2(m_Curr_Data_Player.Get_Type_Character());
        amount_Skill_2 = 1f;
        m_Progress_Skill_2.fillAmount = amount_Skill_2;
        DOTween.To(() => amount_Skill_2, x => amount_Skill_2 = x, 0, m_CD_Skill_2)
            .OnUpdate(() =>
            {
                m_Progress_Skill_2.fillAmount = amount_Skill_2;
            }).
        OnComplete(() =>
        {
            m_Is_Disable_Click_Skill_2 = false;
        });
    }

    public void Set_Active_Skill_2(bool is_Active)
    {
        m_Obj_Btn_Skill_2.Set_Active(is_Active);
        if (is_Active)
        {
            m_Progress_Skill_2.fillAmount = 0f;
            m_Is_Disable_Click_Skill_2 = false;
        }
    }

    private float Get_Time_CD_Skill_2(Type_Character type_Character)
    {
        if (type_Character == Type_Character.Student)
        {
            return 150f;
        }
        if (type_Character == Type_Character.Repairer)
        {
            return 250f;
        }
        if (type_Character == Type_Character.Vampire_Hunter)
        {
            return 200f;
        }
        if (type_Character == Type_Character.Eilif)
        {
            return 30f;
        }
        if (type_Character == Type_Character.Raven)
        {
            return 60f;
        }
        //updateofjura
        if (type_Character == Type_Character.Safeguard)
        {
            return 120f;
        }
        return 300f;
    }

    Type_Character m_Type_Character_In_Skill_2;
    bool is_Unlock_Skill;
    private bool Check_Active_Btn_Skill_2()
    {
        if (m_Curr_Data_Player == null)
        {
            m_Curr_Data_Player = Player_Manager.Instance.Get_Data_Player(Game_Controller.Instance.Get_Player_Curr());
        }

        m_Type_Character_In_Skill_2 = m_Curr_Data_Player.Get_Type_Character();

        if (m_Type_Character_In_Skill_2 == Type_Character.Student)
        {
            is_Unlock_Skill = DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_15_Skill_2_Student);
            if (m_Icon_Skill_2)
            {
                m_Icon_Skill_2.sprite = Data_In_Game.Instance.Get_Icon_Skill_2(Type_Icon_Skill_Tree.Skill_2_Student);
            }
            return is_Unlock_Skill;
        }
        if (m_Type_Character_In_Skill_2 == Type_Character.Repairer)
        {
            is_Unlock_Skill = DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_23_Skill_2_Repairer);
            if (m_Icon_Skill_2)
            {
                m_Icon_Skill_2.sprite = Data_In_Game.Instance.Get_Icon_Skill_2(Type_Icon_Skill_Tree.Skill_2_Repairer);
            }
            return is_Unlock_Skill;
        }

        if (m_Type_Character_In_Skill_2 == Type_Character.Eilif)
        {
            is_Unlock_Skill = DataSaved.Get_Is_Unlock_Skill_2(m_Type_Character_In_Skill_2) || Database.instance.GetSkinTry() == Type_Character.Eilif;
            if (m_Icon_Skill_2)
            {
                m_Icon_Skill_2.sprite = Data_In_Game.Instance.Get_Icon_Skill_2(Type_Icon_Skill_Tree.Skill_2_Eilif);
            }
            return is_Unlock_Skill;
        }
        if (m_Type_Character_In_Skill_2 == Type_Character.Safeguard)
        {
            if (m_Icon_Skill_2)
            {
                m_Icon_Skill_2.sprite = Data_In_Game.Instance.Get_Icon_Skill_2(Type_Icon_Skill_Tree.Skill_1_Safeguard);
            }
            return true;
        }

        if (m_Type_Character_In_Skill_2 == Type_Character.Raven)
        {
            is_Unlock_Skill = DataSaved.Get_Is_Unlock_Skill_2(m_Type_Character_In_Skill_2);
            if (m_Icon_Skill_2)
            {
                m_Icon_Skill_2.sprite = Data_In_Game.Instance.Get_Icon_Skill_2(m_Type_Character_In_Skill_2);
            }
            return is_Unlock_Skill;
        }
        return false;
    }

    private void Play_Anim_Reward_Coin_Skill_2(int number_Reward)
    {
        m_Tween_Alert_Reward_Skill_2.Do_Kill();
        m_Txt_Reward_Coin_Skill_2.Set_Text("+" + number_Reward);
        m_Anim_Reward_Coin_Skill_2.gameObject.Set_Active(true);
        m_Anim_Reward_Coin_Skill_2.enabled = true;
        m_Anim_Reward_Coin_Skill_2.Play_Animation_Play();

        m_Tween_Alert_Reward_Skill_2 = DOVirtual.DelayedCall(3f, () =>
        {
            m_Anim_Reward_Coin_Skill_2.gameObject.Set_Active(false);
        }, false);
    }

    #endregion

    #region ================== Tut Fix Door ==================

   
    [SerializeField] GameObject m_Layout_Tut_Fix_Door;

    [SerializeField] Transform m_Holder_Tut_Btn_Skill_1;

    bool m_Is_Show_Tut_Fix_Door;




    private void Reset_Btn_Skill_1_Normal()
    {
        // m_Btn_Skill_1.SetParent(m_Holder_Btn_Skill_1);
        // m_Layout_Tut_Fix_Door.Set_Active(false);
    }



    #endregion

    #region ============ Tut Item Support ============
 
   [SerializeField] Bool_Global_Variable m_Live_Data_Attacking_Door;

    [SerializeField] GameObject m_Layout_Tut_Use_Item;

    [SerializeField] Transform m_Holder_Tut_Door_Protect;



   [SerializeField] int m_Count_Attack_Door;
    bool m_Is_Use_Item_Support_In_Tut;



    private void Listener_Live_Data_Attacking()
    {
        if (m_Live_Data_Attacking_Door && m_Live_Data_Attacking_Door.Value)
        {
            m_Count_Attack_Door += 1;

            if (m_Count_Attack_Door >= 3 && !m_Is_Use_Item_Support_In_Tut
            && Level_Controller.Instance && Level_Controller.Instance.Get_Room_Curr_Player().Check_Tut_Use_Item())
            {
                m_Live_Data_Attacking_Door.OnValueChanged.RemoveListener(Listener_Live_Data_Attacking);

            }
        }
    }

    private void Remove_Listener()
    {
        m_Tween_Start_Count_Down_Golem.Do_Kill();
        if (m_Live_Data_Attacking_Door)
        {
            m_Live_Data_Attacking_Door.OnValueChanged.RemoveListener(Listener_Live_Data_Attacking);
        }
    }


    private void OnDestroy()
    {
        Remove_Listener();
        m_Tween_Alert_Reward_Skill_2.Do_Kill();
        m_Tween_Delay_Off_Skill_2_Eilif.Do_Kill();
        //updateofjura
        m_Tween_Delay_Off_Skill_2_Safeguard.Do_Kill();
    }





    #endregion








    #region ================== 
  
    [SerializeField] TextMeshProUGUI m_Txt_Coin;
    [SerializeField] TextMeshProUGUI m_Txt_Energy;

    public void Update_UI_Coin()
    {
        m_Txt_Coin.Set_Text(Player_Manager.Instance.Get_Data_Player_Current().Get_Sum_Coin());
    }

    public void Update_UI_Enerygy()
    {
        m_Txt_Energy.Set_Text(Player_Manager.Instance.Get_Data_Player_Current().Get_Sum_Energy());
    }

    #endregion

    #region ========= Btn Golem =========

  
    [SerializeField] GameObject m_Obj_Btn_Golem;
    [SerializeField] Image m_Icon_Golem;
    [SerializeField] Image m_Icon_Progress_Golem;
    [SerializeField] Sprite m_Ic_Golem_Fire_On;
    [SerializeField] Sprite m_Ic_Golem_Fire_Off;
    [SerializeField] Sprite m_Ic_Golem_Tree_On;
    [SerializeField] Sprite m_Ic_Golem_Tree_Off;

    bool m_Is_Can_Click_Golem;
    float m_Tmp_Progress_Golem;
    private TweenerCore<float, float, FloatOptions> m_Tween_Start_Count_Down_Golem;

    public void Set_Active_Btn_Golem(bool is_Active)
    {
        m_Obj_Btn_Golem.Set_Active(is_Active);
    }

    public void Init_Data_Btn_Golem()
    {
        if (m_Curr_Data_Player == null)
        {
            m_Curr_Data_Player = Player_Manager.Instance.Get_Data_Player(Game_Controller.Instance.Get_Player_Curr());
        }

        m_Type_Character_In_Skill_2 = m_Curr_Data_Player.Get_Type_Character();

        if (m_Type_Character_In_Skill_2 == Type_Character.Calida || m_Type_Character_In_Skill_2 == Type_Character.Eilif)
        {
            if (DataSaved.Get_Is_Unlock_Skill_3(m_Type_Character_In_Skill_2))
            {
                Set_Active_Btn_Golem(true);

                if (m_Type_Character_In_Skill_2 == Type_Character.Calida)
                {
                    m_Icon_Golem.sprite = m_Ic_Golem_Fire_On;
                    m_Icon_Progress_Golem.sprite = m_Ic_Golem_Fire_Off;
                }
                else if (m_Type_Character_In_Skill_2 == Type_Character.Eilif)
                {
                    m_Icon_Golem.sprite = m_Ic_Golem_Tree_On;
                    m_Icon_Progress_Golem.sprite = m_Ic_Golem_Tree_Off;
                }
            }
        }

        m_Is_Can_Click_Golem = true;
        m_Icon_Progress_Golem.fillAmount = 0f;
        m_Tween_Start_Count_Down_Golem.Do_Kill();
    }

    public void Start_Count_Down_Golem(float time)
    {
        m_Is_Can_Click_Golem = false;
        m_Icon_Progress_Golem.fillAmount = 1f;
        m_Tmp_Progress_Golem = 1f;

        m_Tween_Start_Count_Down_Golem.Do_Kill();
        m_Tween_Start_Count_Down_Golem = DOTween.To(() => m_Tmp_Progress_Golem, x => m_Tmp_Progress_Golem = x, 0, time)
            .OnUpdate(() =>
        {
            m_Icon_Progress_Golem.fillAmount = m_Tmp_Progress_Golem;
        }).SetEase(Ease.Linear).OnComplete(() =>
        {
            m_Is_Can_Click_Golem = true;
            m_Icon_Progress_Golem.fillAmount = 0f;
        });
    }


  
 

    #endregion













}
