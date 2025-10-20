using System.Collections;
using UnityEngine;
using DG.Tweening;

using UnityEngine.UI;

public class Mirror_Controller : Base_Turret
{
    [SerializeField] bool m_Is_Ready_Stun_Boss;

    [SerializeField] float m_Time_Stun_Boss = 3f;
    [SerializeField] float m_CD_Trap = 10f;
    [SerializeField] ParticleSystem m_Effect_Mirror;

    float m_Ratio_Stun = 50;


    [SerializeField] Canvas canvasTile;

    [SerializeField] private Image tileSlider;

    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Add_Mirror_In_Room(this);
        
        
        canvasTile.gameObject.SetActive(false);
       
    }

    public override void Before_Remove_Item()
    {
        if (m_Room_Controller && this != null)
        {
            m_Room_Controller.Remove_Mirror_In_Room(this);
        }
    }

    public float Get_Time_Stun()
    {
        return m_Time_Stun_Boss;
    }
  
    public bool Get_Is_Ready()
    {
        Check_Data_Perk();
        if (!m_Is_Ready_Stun_Boss && Random.Range(1, 99) < m_Ratio_Stun)
        {
            m_Effect_Mirror.PLay_Effect(true);
            return true;
        }

        return false;
    }

    public void Set_Is_Ready(bool is_Ready_Trap_Boss)
    {
        m_Is_Ready_Stun_Boss = is_Ready_Trap_Boss;

        CancelInvoke(nameof(Reset_Status_Trap));
        Invoke(nameof(Reset_Status_Trap), m_CD_Trap);
        CountDownTimeUse(m_CD_Trap,true);

        
    }

    private void Reset_Status_Trap()
    {
        m_Is_Ready_Stun_Boss = false;
    }

    private void Check_Data_Perk()
    {
        if (DataSaved.Get_Unlock_Skill_Tree_Player(Type_Skill_Tree.Skill_14_Mirror_Skill_10_Per))
        {
            m_Ratio_Stun = 60;
        }
        else
        {
            m_Ratio_Stun = 50;
        }
    }

    private Tween countDownTimeUse;


  
    public void ButtonTest()
    {
      



        CountDownTimeUse(m_CD_Trap,true);
    }

    public void CountDownTimeUse(float time, bool clockwise)
    {
        countDownTimeUse.Kill();
        
        canvasTile.gameObject.SetActive(true);
        tileSlider.fillAmount = 1f;
        
        
        float startValue = 1f;


        countDownTimeUse =  DOVirtual.Float(startValue, 0f, time, x =>
        {
            
            tileSlider.fillAmount = x;
        }).SetEase((Ease.Linear)).OnComplete(() =>
        {
         
            canvasTile.gameObject.SetActive(false);
            countDownTimeUse.Kill();
        }) ;
    }
    
    
    
    
    
}