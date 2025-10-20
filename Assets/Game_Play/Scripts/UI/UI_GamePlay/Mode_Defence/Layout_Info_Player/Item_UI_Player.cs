using UnityEngine;
using UnityEngine.UI;

public class Item_UI_Player : MonoBehaviour
{
    bool is_Start;
    bool is_Loaded_Data = true;
    bool m_Is_Live;
    [SerializeField] bool is_Can_Click;
    [SerializeField] Vector3 m_Pos_Player;
    [SerializeField] Layout_Mode_Defence m_Layout_Mode_Defence;
    [SerializeField] Bool_Global_Variable m_Live_Data_Attacking;
    [SerializeField] Bool_Global_Variable m_Live_Data_Player_Die;
    [SerializeField] Bool_Global_Variable m_Live_Data_Enter_Room;
    [SerializeField] Model_Player_Join_Game m_Model_Player;

    [Header("____ UI ____")]
    [SerializeField] GameObject m_Obj_You;
    [SerializeField] GameObject m_Obj_Attacking;
    [SerializeField] GameObject m_Obj_Died;

    [Space(20)]
    [SerializeField] Image m_Icon;
    [SerializeField] Image m_Layout_Icon;

    public Type_Player Get_Type_Player()
    {
        return m_Model_Player.type_Player;
    }

    public bool Get_Is_Can_Click()
    {
        return is_Can_Click;
    }

    public void Set_Current_Position(Vector3 position)
    {
        m_Pos_Player = position;
    }

    public void Set_Data(Layout_Mode_Defence layout_Mode_Defence, Model_Player_Join_Game model_Player)
    {
        m_Layout_Mode_Defence = layout_Mode_Defence;
        m_Model_Player = model_Player;
        is_Loaded_Data = false;
        is_Can_Click = false;
        m_Is_Live = true;

        m_Live_Data_Attacking = Player_Manager.Instance.Get_Data_Player(model_Player.type_Player).Get_Live_Data_Attacking_Change();
        m_Live_Data_Player_Die = Player_Manager.Instance.Get_Data_Player(model_Player.type_Player).Get_Live_Data_Die_Change();
        m_Live_Data_Enter_Room = Player_Manager.Instance.Get_Data_Player(model_Player.type_Player).Get_Live_Data_Enter_Room();

        Add_Listener();

        if (is_Start)
        {
            On_Ready_Update_UI();
        }
    }

    bool is_Attacking;
    bool is_Die;

    private void OnDestroy()
    {
        Remove_Listener();
    }

    private void Remove_Listener()
    {
        if (m_Live_Data_Attacking)
        {
            m_Live_Data_Attacking.OnValueChanged.RemoveListener(Listener_Live_Data_Player_Attacking);
        }

        if (m_Live_Data_Player_Die)
        {
            m_Live_Data_Player_Die.OnValueChanged.RemoveListener(Listener_Live_Data_Die);
        }

        if (m_Live_Data_Enter_Room)
        {
            m_Live_Data_Enter_Room.OnValueChanged.RemoveListener(Listener_Live_Data_Enter_Room);
        }
    }

    private void Add_Listener()
    {
        if (m_Live_Data_Attacking)
        {
            m_Live_Data_Attacking.OnValueChanged.AddListener(Listener_Live_Data_Player_Attacking);
        }

        if (m_Live_Data_Player_Die)
        {
            m_Live_Data_Player_Die.OnValueChanged.AddListener(Listener_Live_Data_Die);
        }

        if (m_Live_Data_Enter_Room)
        {
            m_Live_Data_Enter_Room.OnValueChanged.AddListener(Listener_Live_Data_Enter_Room);
        }
    }

    private void Listener_Live_Data_Player_Attacking()
    {
        if (m_Is_Live)
        {
            is_Attacking = m_Live_Data_Attacking.Value;
            if (is_Attacking && !m_Obj_Attacking.activeSelf)
            {
                m_Obj_Attacking.Set_Active(true);
                Check_Show_Warning(true);
            }
            else if (!is_Attacking && m_Obj_Attacking.activeSelf)
            {
                m_Obj_Attacking.Set_Active(false);
                Check_Show_Warning(false);
            }
        }
    }

    private void Listener_Live_Data_Die()
    {
        is_Die = m_Live_Data_Player_Die.Value;

        m_Obj_Died.Set_Active(is_Die);
        if (is_Die)
        {
            m_Is_Live = false;
            m_Obj_Attacking.Set_Active(false);
            Check_Show_Warning(false);
        }
    }

    private void Listener_Live_Data_Enter_Room()
    {
        is_Can_Click = m_Live_Data_Enter_Room.Value;
    }

    // Start is called before the first frame update
    void Start()
    {
        is_Start = true;
        On_Ready_Update_UI();
    }

    private void On_Ready_Update_UI()
    {
        if (is_Loaded_Data || m_Model_Player == null)
        {
            return;
        }
        is_Loaded_Data = true;

        m_Obj_You.Set_Active(m_Model_Player.type_Player == Game_Controller.Instance.Get_Player_Curr());
        m_Obj_Attacking.Set_Active(false);
        m_Obj_Died.Set_Active(false);

        // m_Icon.sprite = Data_In_Game.Instance.Get_Data_Sprite_Character().Get_Icon_Skin_Character_V2(
        //     //m_Model_Player.Get_Type_Character(), 
        //     DataSaved.Get_Type_Character_Playing(m_Model_Player.type_Player),
        //     m_Model_Player.is_Using_Skin_2);

        
        m_Icon.sprite =  Data_In_Game.Instance.Get_Data_Sprite_Character().Get_Icon_Skin_Small_Character(
            //m_Info_Player.Get_Type_Character(), 
            DataSaved.Get_Type_Character_Playing(m_Model_Player.type_Player),
            m_Model_Player.is_Using_Skin_2       );
        
        // m_Layout_Icon.sprite = Data_In_Game.Instance.Get_Data_Sprite_Character()
        //     .Get_Icon_Rank_Character(m_Model_Player.type_Rank_Character);
    }

    Camera_Movement m_Camera_Movement;
    Vector3 pos_Cam;

    public void _On_Item_OnCLick()
    {
        SoundController.Play_Sound_Clicks();

        if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player && is_Can_Click)
        {
            if (m_Layout_Mode_Defence != null && m_Layout_Mode_Defence.Get_Is_Can_Click_Item_Player())
            {
                if (m_Camera_Movement == null)
                {
                    m_Camera_Movement = Camera.main.transform.GetComponent<Camera_Movement>();
                }
                if (m_Camera_Movement != null && m_Camera_Movement.Get_Is_Lock_Move_Cam_Free())
                {
                    m_Camera_Movement.On_Ready_Move_Cam_Free();
                }

                pos_Cam = Camera.main.transform.position;
                pos_Cam.x = m_Pos_Player.x;
                pos_Cam.y = m_Pos_Player.y;

                Camera.main.transform.position = pos_Cam;
            }
        }
    }

    private void Check_Show_Warning(bool is_Active)
    {
        if (Game_Controller.Instance && m_Model_Player != null && m_Model_Player.type_Player == Game_Controller.Instance.Get_Player_Curr())
        {
            Canvas_In_Game.Instance.Check_Show_Warning(is_Active);
        }
    }
}
