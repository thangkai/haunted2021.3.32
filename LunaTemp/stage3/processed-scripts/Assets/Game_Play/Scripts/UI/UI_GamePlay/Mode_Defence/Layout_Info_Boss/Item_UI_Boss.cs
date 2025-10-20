using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Item_UI_Boss : MonoBehaviour
{
    bool is_Start;
    bool is_Loaded_Data = true;
    [SerializeField] Bool_Global_Variable m_Live_Data_Boss_Die;
    [SerializeField] Model_Info_Level_Boss m_Model_Boss;
    [SerializeField] int m_Max_Amount;
    [SerializeField] int m_Curr_Amount;

    [Header("____ UI ____")]
    [SerializeField] TextMeshProUGUI m_Txt_Amount;
    [SerializeField] GameObject m_Obj_Died;

    [Space(20)]
    [SerializeField] Image m_Icon;
    public void Set_Data(Model_Info_Level_Boss model_Player)
    {
        m_Model_Boss = model_Player;
        is_Loaded_Data = false;
        m_Max_Amount = model_Player.amount;
        m_Curr_Amount = model_Player.amount;

        m_Live_Data_Boss_Die = Boss_Manager.Instance.Get_Data_Boss(model_Player.type_Boss).Get_Live_Data_Boss_Die();

        Add_Listener();

        if (is_Start)
        {
            On_Ready_Update_UI();
        }
    }

    private void Remove_Listener()
    {
        if (m_Live_Data_Boss_Die)
        {
            m_Live_Data_Boss_Die.OnValueChanged.RemoveListener(Listener_Live_Data_Boss_Die);
        }
    }

    private void OnDestroy()
    {
        if (m_Live_Data_Boss_Die)
        {
            m_Live_Data_Boss_Die.OnValueChanged.RemoveListener(Listener_Live_Data_Boss_Die);
        }
    }

    private void Listener_Live_Data_Boss_Die()
    {
        if (m_Live_Data_Boss_Die.Value)
        {
            m_Curr_Amount -= 1;
            if (m_Curr_Amount <= 0)
            {
                m_Curr_Amount = 0;

                m_Obj_Died.Set_Active(true);
            }
            else
            {
                m_Obj_Died.Set_Active(false);
            }
        }
        else
        {
            m_Obj_Died.Set_Active(false);
        }

        Update_UI_Amount();
    }

    private void Add_Listener()
    {
        if (m_Live_Data_Boss_Die)
        {
            m_Live_Data_Boss_Die.OnValueChanged.AddListener(Listener_Live_Data_Boss_Die);
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        is_Start = true;
        On_Ready_Update_UI();
    }

    private void On_Ready_Update_UI()
    {
        if (is_Loaded_Data || m_Model_Boss == null)
        {
            return;
        }
        is_Loaded_Data = true;

        Update_UI_Amount();
        m_Obj_Died.Set_Active(false);

        m_Icon.sprite = Data_In_Game.Instance.Get_Data_Sprite_Character().Get_Icon_Boss_Small(m_Model_Boss.type_Boss);
    }

    private void Update_UI_Amount()
    {
        m_Txt_Amount.Set_Text(m_Curr_Amount + "/" + m_Max_Amount);
    }
}
