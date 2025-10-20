using UnityEngine;
using DG.Tweening;

public class Repair_Station_Controller : Base_Turret
{


    [SerializeField] private GameObject fxRepair;
    [SerializeField] private GameObject iconRepair;

    
    private bool isHasRepaired = false; // Theo dõi xem RepairWork đã được gọi chưa
    private Tweener scaleTween;

    
       
    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        room_Controller.Add_Repair_In_Room(this);
         RepairDoNotWork();
        
    
    }

    
    
    public override void Before_Remove_Item()
    {
        if (m_Room_Controller && this != null)
        {
            m_Room_Controller.Remove_Repair_In_Room(this);
        }
    }


    
    
    
    private void OnDisable()
    {
        StopScaling();
    }

    public void RepairWork()
    {
        // Chỉ chạy nếu chưa gọi lần nào
        if (!isHasRepaired)
        {
            SetHasRepairUsing(true);
            if (fxRepair != null)
            {
                fxRepair.SetActive(true);
            }

            StartScaling();
        }
    }

    public void SetHasRepairUsing( bool isUse)
    {
        isHasRepaired = isUse;
    }
    public void RepairDoNotWork()
    {
        fxRepair.SetActive(false);
        StopScaling();
        SetHasRepairUsing(false);
    }


    // Bắt đầu hiệu ứng scale
    public void StartScaling()
    {
        if (iconRepair == null) return;

        // Dừng tween trước đó nếu đang chạy
        if (scaleTween != null)
        {
            scaleTween.Kill();
        }

        // Đặt scale ban đầu
        iconRepair.transform.localScale = Vector3.one;

        // Tạo tween scale từ 1 xuống 0.8 và lặp lại vô hạn
        scaleTween = iconRepair.transform.DOScale(0.95f, 0.25f)
            .SetLoops(-1, LoopType.Yoyo) // Lặp vô hạn, kiểu Yoyo (tới-lui)
            .SetEase(Ease.InOutSine); // Tạo chuyển động mượt mà
    }

    // Dừng hiệu ứng scale
    public void StopScaling()
    {
        if (scaleTween != null)
        {
            scaleTween.Kill(); // Dừng tween
            scaleTween = null;
            // Đặt lại scale về giá trị mặc định (1, 1, 1)
            if (iconRepair != null)
            {
                iconRepair.transform.localScale = Vector3.one;
            }
        }
    }

}
