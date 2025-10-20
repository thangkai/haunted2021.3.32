using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class UI_Notice_Reward_Item_Support : Base_UI
{
    [SerializeField] Type_Character m_Skin_Reward;
    [SerializeField] Animator m_Anim;
    [SerializeField] Image m_Icon;
    [SerializeField] TextMeshProUGUI m_Txt_Amount;

    Type_Item_Support m_Type_Item_Support;
    int m_Amount;

    public override void Open_UI(Type_Item_Support type_Item_Support, int amount)
    {
        m_Type_Item_Support = type_Item_Support;
        m_Amount = amount;
        base.Open_UI();
    }

    public override void OnReadyOpenUI()
    {
        base.OnReadyOpenUI();

        m_Icon.sprite = Data_Home.Instance.Get_All_Sprite().Get_Icon_Item_Support(m_Type_Item_Support);
        m_Txt_Amount.Set_Text("+" + m_Amount);

        m_Anim.Play_Animation_Play();

        DOVirtual.DelayedCall(2f, () =>
        {
            Close_UI();
        });
    }

    public override void Perpare_Before_Close_UI()
    {
        if (m_Anim.isActiveAndEnabled)
        {
            m_Anim.Play_Animation_Idle();
        }
    }
}