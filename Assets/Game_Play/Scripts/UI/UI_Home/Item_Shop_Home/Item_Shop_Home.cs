using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DG.Tweening;

using UnityEngine.EventSystems;


public class Item_Shop_Home : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    bool is_Start;
    [SerializeField] bool m_Is_Character;
    [SerializeField] public Type_Character m_Type_Character;
    [SerializeField] Type_Player m_Type_Boss;

    [Header("____ UI ____")]
    [SerializeField] Image m_Icon;
    [SerializeField] GameObject m_BG_Highlight;
    [SerializeField] GameObject m_Layout_Price;
    [SerializeField] TextMeshProUGUI m_Txt_Price;
    [SerializeField] GameObject m_Icon_Gem;
    [SerializeField] GameObject m_Icon_Money;

    Type_Money m_Type_Money;

    Status_Item_Shop_Character status_Item;
    Status_Item_Shop_Character status_Item2;
    [SerializeField] private Status_Item_Shop_Character status_Item_Click;
   


    Data_Type_Rank_Character data_Type_Rank_Character;
    Data_Info_Character data_Info_Character;








    //tut
    [SerializeField] private GameObject m_Obj_Tut_Hand;


    [SerializeField] private UI_Home UiHome;
    [SerializeField] private GameObject layout_Equip;



   [SerializeField] private Image mLayoutIcon;
    public void Update_State_Data()
    {
        if (is_Start)
        {
            On_Ready_Update_UI();
        }
    }



    public void Set_Type_Character(Type_Character type_Character)
    {
        m_Type_Character = type_Character;

        //xekotoby
        data_Info_Character = Data_Home.Instance.Get_All_Data_Character().Get_Data_Info_Character(m_Type_Character);
        data_Type_Rank_Character = Data_Home.Instance.Get_Data_Type_Rank_Character().Get_Data_Info_Character(data_Info_Character.m_Rank_Character);
    }

    void Start()
    {
        is_Start = true;

        On_Ready_Update_UI();
    }


    private Tween tweenButtonDown;
    private Tween tweenButtonUp;
    public void OnPointerDown(PointerEventData eventData)
    {
        tweenButtonDown?.Kill();
        tweenButtonDown = transform.DOScale(new Vector3(0.85f, 0.85f, 0.85f), 0.1f).OnComplete(() =>
        {
            tweenButtonDown?.Kill();
            transform.localScale = new Vector3(0.85f, 0.85f, 0.85f); // Thu nhỏ
        });

    }

    // Khi thả ra
    public void OnPointerUp(PointerEventData eventData)
    {
        tweenButtonUp?.Kill();
        tweenButtonUp = transform.DOScale(Vector3.one, 0.1f).OnComplete(() =>
        {
            tweenButtonUp?.Kill();
            transform.localScale = Vector3.one;
        });
    }

    private Tween m_Tween_Scale;
    private void OnDisable()
    {
        if (m_Tween_Scale != null && m_Tween_Scale.IsActive())
            m_Tween_Scale?.Kill();
    }

    private void On_Ready_Update_UI()
    {
        if (m_Type_Character == Type_Character.None) return;

        if (m_Is_Character)
        {

            Update_UI_Character();
            //  Update_Star();

        }
        else
        {
            Update_UI_Boss();
        }




 
        m_Tween_Scale?.Kill();



    }



    public void Reset_Bg_HighLight()
    {
        m_BG_Highlight.SetActive(false);

    }


    private void Update_UI_Character()
    {


        m_Icon.sprite = Data_Home.Instance.Get_All_Sprite().Get_Icon_Skin_Character_V2(m_Type_Character, DataSaved.Get_Is_Using_Skin_2(m_Type_Character));

        status_Item = My_Utils.Get_Status_Skin_Character(m_Type_Character);
        status_Item2 = DataSaved.Get_Status_Try_Skin_Character(m_Type_Character);

        m_BG_Highlight.Set_Active(status_Item == Status_Item_Shop_Character.Selected || status_Item2 == Status_Item_Shop_Character.Selected);









        // Debug.LogError(data_Info_Character.m_Rank_Character+ "------ false" );
        if (data_Info_Character != null)
        {


            mLayoutIcon.sprite =
                DataHomeGame.Instance.Get_Data_Layout_Rank_Character(data_Info_Character.m_Rank_Character);
        }

        if (m_Obj_Tut_Hand != null)
        {
            //            Debug.LogError("da vao chua 10s");
            if (m_Type_Character == Type_Character.Student)
            {
                if (DataSaved.Get_Complete_Show_Tut_Chest() && DataSaved.Get_Condition_Show_Tut_Chest() == 10)
                {
                    m_Obj_Tut_Hand.SetActive(true);

                    Debug.LogError("da vao chua 10");
                }
                else
                {
                    m_Obj_Tut_Hand.SetActive(false);
                    //                    Debug.LogError("da vao chua 11");

                }
            }

        }







        //  m_Layout_Price.Set_Active(status_Item == Status_Item_Shop_Character.Normal);
        if (status_Item == Status_Item_Shop_Character.Normal)
        {
            if (Data_Home.Instance.Get_All_Data_Character().Get_Type_Money(m_Type_Character) == Type_Money.Daily_Gift)
            {
                m_Txt_Price.gameObject.Set_Active(false);
                m_Icon_Gem.gameObject.Set_Active(false);
                m_Icon_Money.gameObject.Set_Active(false);

            }
            else
            {
                m_Type_Money = Data_Home.Instance.Get_All_Data_Character().Get_Type_Money(m_Type_Character);

                m_Txt_Price.gameObject.Set_Active(true);
                m_Icon_Gem.gameObject.Set_Active(m_Type_Money == Type_Money.Coin);
                m_Icon_Money.gameObject.Set_Active(m_Type_Money == Type_Money.Money);

                if (m_Type_Character == Type_Character.Raven)
                {
                    int a = 1;
                }

                if (m_Type_Money == Type_Money.IAP)
                {
                    m_Txt_Price.Set_Text(Data_Home.Instance.Get_All_Data_Character().Get_Price_USD(m_Type_Character));
                }
                else
                {
                    m_Txt_Price.Set_Text(Data_Home.Instance.Get_All_Data_Character().Get_Price(m_Type_Character).ToString());
                }
            }
        }

    }








    private void Update_UI_Boss()
    {
        m_Icon.sprite = Data_Home.Instance.Get_All_Sprite().Get_Icon_Boss_Small(m_Type_Boss);

        status_Item = My_Utils.Get_Status_Skin_Boss(m_Type_Boss);

        m_BG_Highlight.Set_Active(status_Item == Status_Item_Shop_Character.Selected);
        //   m_Layout_Price.Set_Active(status_Item == Status_Item_Shop_Character.Normal);
        if (status_Item == Status_Item_Shop_Character.Normal)
        {
            m_Txt_Price.Set_Text(Data_Home.Instance.Get_All_Data_Boss().Get_Price(m_Type_Boss).ToString());
        }
    }

    public void _On_Item_Click()
    {
        if (m_Type_Character == Type_Character.None) return;
        Debug.Log(m_Type_Character);
        SoundController.Play_Sound_Clicks();



        Debug.Log(m_Type_Character);

        DataSaved.Set_Skin_Character_Equipped(m_Type_Character);
        Debug.Log(m_Type_Character);
        m_Tween_Scale?.Kill();

        if (m_Type_Character == Type_Character.Student)
        {
            if (DataSaved.Get_Complete_Show_Tut_Chest() && DataSaved.Get_Condition_Show_Tut_Chest() == 10)
            {

                m_Obj_Tut_Hand.SetActive(false);

                Debug.LogError("da vao chua 14");
            }

        }

        Canvas_Home.Instance.Get_UI_Home().m_Layout_Shop_Character.Reset_State_Data();
        Canvas_Home.Instance.Get_UI_Home().m_Layout_Shop_Character_2.Reset_State_Data();
        m_BG_Highlight.SetActive(true);

    }










}
