using UnityEngine;
using TMPro;

public class Layout_Anim_Boss_Die : MonoBehaviour
{
    bool m_Is_Start;
    [SerializeField] Animator m_Anim;
    [SerializeField] TextMeshPro m_Content;

    Type_Money m_Type_Money;
    int m_Amount;

    public void Set_Data(Type_Money type_Money, int amount)
    {
        m_Type_Money = type_Money;
        m_Amount = amount;

        if (m_Is_Start)
        {
            On_Ready_Update_Data();
        }
    }

    void Start()
    {
        m_Is_Start = true;
        On_Ready_Update_Data();
    }

    string m_Tmp_Content;

    private void On_Ready_Update_Data()
    {
        m_Tmp_Content = "";
        m_Tmp_Content += m_Type_Money == Type_Money.Coin ? "<sprite=2> +" : "<sprite=3> +";
        m_Tmp_Content += m_Amount;

        if(m_Content) m_Content.text = m_Tmp_Content;

        m_Anim.Play_Animation_Play();
        Destroy(gameObject, 3f);
    }
}
