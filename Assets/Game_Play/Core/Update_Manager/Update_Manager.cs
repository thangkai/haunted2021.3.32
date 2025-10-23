using UnityEngine;
using UnityEngine.EventSystems;
using DG.Tweening;
using Haunted;

public class Update_Manager : Base_Update
{
    [SerializeField] Bool_Global_Variable m_Live_Data_Turret_Detect_Target;
    [SerializeField] LayerMask m_Layer_Mask;

    Ray m_Ray;
    RaycastHit2D m_Raycast_Hit_2D;

    private void Start()
    {
        Update_Detect_Target();
    }

    private void Update_Detect_Target()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (m_Live_Data_Turret_Detect_Target)
        {
            m_Live_Data_Turret_Detect_Target.Value = true;
        }

        DOVirtual.DelayedCall(0.25f, () => { Update_Detect_Target(); }, false);
    }

    public override void Loop_Update()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (EventSystem.current.IsPointerOverGameObject())
        {
            return;
        }

        if (MyExtensions.Is_Pointer_Over_UI_Object()) return;

        // if (Input.GetMouseButtonUp(0))
        // {
        //     if (Game_Controller.Instance && Game_Controller.Instance.Get_Is_Time_Out())
        //     {
        //         return;
        //     }
        //
        //     m_Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        //
        //     m_Raycast_Hit_2D = Physics2D.Raycast(m_Ray.origin, m_Ray.direction, Mathf.Infinity, m_Layer_Mask);
        //     //Debug.Log("Get Mouse Button Up - Hit");
        //     if (m_Raycast_Hit_2D)
        //     {
        //         //Debug.Log("Get Mouse Button Up - Hit : Name = " + hit.collider.name);
        //         //UI_Log.Print_Logs("Hit " + hit.collider.name);
        //         if (m_Raycast_Hit_2D.collider.TryGetComponent(out Base_Turret item))
        //         {
        //             if (Camera_Movement.Instance)
        //             {
        //                 //Debug.Log("Get Mouse Button Up - CAM");
        //                 Camera_Movement.Instance.Wait_Event_Move_Cam(item);
        //             }
        //             else
        //             {
        //                 //Debug.Log("Get Mouse Button Up - Ready");
        //                 item.On_Ready_Click_Turret();
        //             }
        //         }
        //     }
        // }


        // if (Input.GetMouseButtonUp(0))
        // {
        //     if (Game_Controller.Instance && Game_Controller.Instance.Get_Is_Time_Out())
        //         return;
        //
        //     Vector3 mousePos = Input.mousePosition;
        //
        //
        //
        //     Vector2 worldPos = Camera.main.ScreenToWorldPoint(mousePos);
        //
        //     // Raycast 2D chính xác theo world pos
        //     m_Raycast_Hit_2D = Physics2D.Raycast(worldPos, Vector2.zero, 0f, m_Layer_Mask);
        //
        //     if (m_Raycast_Hit_2D.collider != null)
        //     {
        //         if (m_Raycast_Hit_2D.collider.TryGetComponent(out Base_Turret item))
        //         {
        //             if (Camera_Movement.Instance)
        //                 Camera_Movement.Instance.Wait_Event_Move_Cam(item);
        //             else
        //                 item.On_Ready_Click_Turret();
        //         }
        //     }
        // }


        //     if (Input.GetMouseButtonUp(0))
        //     {
        //         if (Game_Controller.Instance && Game_Controller.Instance.Get_Is_Time_Out())
        //             return;
        //
        //         Vector3 mousePos = Input.mousePosition;
        //
        //         // 🔥 LUNA/WEBGL FIX - Hoạt động 100%
        //         if (Application.platform == RuntimePlatform.WebGLPlayer)
        //         {
        //             // LUNA: Luôn dùng FIXED 320x480
        //             const float LUNA_WIDTH = 320f;
        //             const float LUNA_HEIGHT = 480f;
        //     
        //             // Scale từ Luna viewport về Unity screen
        //             float scaleX = (float)Screen.width / LUNA_WIDTH;
        //             float scaleY = (float)Screen.height / LUNA_HEIGHT;
        //     
        //             // Normalize mouse pos
        //             mousePos.x = mousePos.x / scaleX;
        //             mousePos.y = mousePos.y / scaleY;
        //     
        //             // CLAMP để tránh out of bounds
        //             mousePos.x = Mathf.Clamp(mousePos.x, 0, LUNA_WIDTH);
        //             mousePos.y = Mathf.Clamp(mousePos.y, 0, LUNA_HEIGHT);
        //     
        //             Debug.Log($"[LUNA FIX] Original: {Input.mousePosition} → Fixed: {mousePos}");
        //         }
        //
        //         Vector2 worldPos = Camera.main.ScreenToWorldPoint(new Vector3(mousePos.x, mousePos.y, 0));
        //
        //         // Raycast
        //         m_Raycast_Hit_2D = Physics2D.Raycast(worldPos, Vector2.zero, 0f, m_Layer_Mask);
        //
        //         if (m_Raycast_Hit_2D.collider != null)
        //         {
        //             if (m_Raycast_Hit_2D.collider.TryGetComponent(out Base_Turret item))
        //             {
        //                 if (Camera_Movement.Instance)
        //                     Camera_Movement.Instance.Wait_Event_Move_Cam(item);
        //                 else
        //                     item.On_Ready_Click_Turret();
        //             }
        //         }
        //     }
        // }

    }
}

