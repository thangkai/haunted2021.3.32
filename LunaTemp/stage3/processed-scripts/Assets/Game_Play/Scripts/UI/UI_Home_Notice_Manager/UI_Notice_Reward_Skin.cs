using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class UI_Notice_Reward_Skin : Base_UI
{
    [SerializeField] Type_Character m_Skin_Reward;
    [SerializeField] Animator m_Anim;
    [SerializeField] Image m_Icon;
    public override void Open_UI(Type_Character skin_Character)
    {
        m_Skin_Reward = skin_Character;
        base.Open_UI();
    }

    public override void OnReadyOpenUI()
    {
        base.OnReadyOpenUI();

        m_Icon.sprite = Data_Home.Instance.Get_All_Sprite().Get_Icon_Character_Small(m_Skin_Reward);
        DataSaved.Set_Skin_Character_Bought(m_Skin_Reward, true);

        m_Anim.Play_Animation_Play();

        DOVirtual.DelayedCall(1.5f, () =>
        {
            Canvas_Home.Instance.Get_UI_Home().Update_UI_Shop_Character();
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
