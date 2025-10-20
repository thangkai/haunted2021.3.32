using DG.Tweening;
using UnityEngine;

public class Trap_Controller : Base_Turret
{
    [SerializeField] bool m_Is_Ready_Trap_Boss;

    [SerializeField] float m_Time_Stun_Boss = 3f;
    [SerializeField] float m_CD_Trap = 5f;

    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Add_Trap_In_Room(this);
    }

    public override void Before_Remove_Item()
    {
        if (m_Room_Controller && this != null)
        {
            m_Room_Controller.Remove_Trap_In_Room(this);
        }
    }

    public float Get_Time_Stun()
    {
        return m_Time_Stun_Boss;
    }

    public bool Get_Is_Ready()
    {

       // return true;
        if (!m_Is_Ready_Trap_Boss && DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_18_Trap_Skill_50_Per))
        {
            return true;
        }

        if (!m_Is_Ready_Trap_Boss && Random.Range(0, 10000) % 2 == 0)
        {
            return true;
        }
        return false;
    }

    public void Set_Is_Ready(bool is_Ready_Trap_Boss)
    {
        m_Is_Ready_Trap_Boss = is_Ready_Trap_Boss;

        DOVirtual.DelayedCall(m_CD_Trap, () => { Reset_Status_Trap(); }, false);
    }

    private void Reset_Status_Trap()
    {
        m_Is_Ready_Trap_Boss = false;
    }
  
}
