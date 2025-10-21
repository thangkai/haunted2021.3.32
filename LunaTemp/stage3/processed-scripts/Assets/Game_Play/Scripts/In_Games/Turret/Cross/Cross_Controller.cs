
using DG.Tweening;

using Spine.Unity;
using UnityEngine;
using UnityEngine.UI;

public class Cross_Controller : Base_Turret
{

    
    [SerializeField] Canvas canvasTile;

    [SerializeField] private Image tileSlider;
    
    
    private Tween countDownTimeUse;
    private Tween tweenCrossEnd;
    private Sequence _sequenceCross;

    [SerializeField] private SkeletonAnimation spineCross;
    
    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Add_Cross_In_Room(this);
        
        
        canvasTile.gameObject.SetActive(false);
        spineCross.gameObject.SetActive(false);
    }

    
    
    public override void Before_Remove_Item()
    {
        if (m_Room_Controller && this != null)
        {
            m_Room_Controller.Remove_Cross_In_Room(this);
        }
    }


    public void AnimCrossStart()
    {
        
        _sequenceCross.Do_Kill();
        if (spineCross == null || spineCross.Skeleton == null || spineCross.AnimationState == null) return;
        spineCross.gameObject.SetActive(true);
        
        
        // Tìm animation1 trong SkeletonData
        var skeletonData = spineCross.Skeleton.Data;
   
        // Chạy animation1, không lặp
        spineCross.AnimationState.SetAnimation(0, "start", false);

        // Lấy thời gian của animation1
        float anim1Duration = 0.3334f;

        // Tạo Sequence để chờ và chạy animation2
        _sequenceCross =  DOTween.Sequence()
            .AppendInterval(anim1Duration) // Chờ animation1 hoàn thành
            .AppendCallback(() =>
            {
                spineCross.AnimationState.SetAnimation(0, "idle", true);
            })
            .SetTarget(spineCross) // Liên kết Sequence với spineCross để quản lý
            .OnKill(() =>
            {
                spineCross.AnimationState.SetAnimation(0, "idle", true);
                _sequenceCross.Do_Kill();
            });
    }

    
    
  
    public void ButtonTest()
    {
      



        CountDownTimeUse(30f,true);
    }
    
    
    
    
    

    public void CountDownTimeUse(float time, bool clockwise)
    {
        countDownTimeUse.Kill();
        
        canvasTile.gameObject.SetActive(true);
        tileSlider.fillAmount = 1f;
        
        
        float startValue = 1f;

        
        spineCross.AnimationState.SetAnimation(0, "end", false);
        tweenCrossEnd.Do_Kill();
        tweenCrossEnd = DOVirtual.DelayedCall(0.5f,() =>
        {
            spineCross.gameObject.SetActive(false);
            tweenCrossEnd.Do_Kill();
        });

        countDownTimeUse =  DOVirtual.Float(startValue, 0f, time, x =>
        {
            
            tileSlider.fillAmount = x;
        }).SetEase((Ease.Linear)).OnComplete(() =>
        {

           
            canvasTile.gameObject.SetActive(false);
            countDownTimeUse.Kill();
        }) ;
    }


    public void ResetCrossDoorBuild()
    {
        spineCross.gameObject.SetActive(false);
        tweenCrossEnd.Do_Kill();
        canvasTile.gameObject.SetActive(false);
        countDownTimeUse.Kill();
    }
}
