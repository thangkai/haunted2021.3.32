using UnityEngine;
using DG.Tweening;

public class Collider_Detect_Character : MonoBehaviour
{
    [SerializeField] Base_Boss m_Base_Boss;
    [SerializeField] bool m_Is_Lock_Character;
    CircleCollider2D m_Collider;

    private void Start()
    {
        m_Collider = GetComponent<CircleCollider2D>();
        // Loop Detect Character
        Loop_Detect_Character();
    }

    private void Loop_Detect_Character()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Collider)
        {
            m_Collider.enabled = false;
            DOVirtual.DelayedCall(0.75f, () =>
            {
                if (Game_Controller.Get_Is_End_Level()) return;
                Reset_Lock_Character();
                DOVirtual.DelayedCall(0.25f, () =>
                {
                    if (Game_Controller.Get_Is_End_Level()) return;
                    Loop_Detect_Character();
                }, false).SetLink(this.gameObject);
            }, false).SetLink(this.gameObject);
        }
    }

    public void Reset_Lock_Character()
    {
        m_Is_Lock_Character = false;
        m_Collider.enabled = true;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        // if (!m_Is_Lock_Character && collision.CompareTag(Tags.Character))
        // {
        //     if (m_Base_Boss)
        //     {
        //         m_Is_Lock_Character = true;
        //         m_Base_Boss.Set_Target_Character(collision.transform);
        //     }
        // }
        // if (collision.gameObject.layer == LayerMask.NameToLayer("Enemy"))
        if (!m_Is_Lock_Character && collision.gameObject.layer == LayerMask.NameToLayer("Character"))
        {
            if (m_Base_Boss)
            {
                m_Is_Lock_Character = true;
                m_Base_Boss.Set_Target_Character(collision.transform);
            }
        }

    }
}
