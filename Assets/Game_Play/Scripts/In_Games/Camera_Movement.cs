using System;
using UnityEngine;
using UnityEngine.EventSystems;
using DG.Tweening;

// Docs: Pan, Zoom and limit camera movement - Unity 2D Tutorial : https://www.youtube.com/watch?v=R6scxu1BHhs
public class Camera_Movement : Singleton<Camera_Movement>
{
    [SerializeField] Camera cam;
    [SerializeField] SpriteRenderer map_Renderer;
    [SerializeField] Vector2 m_Min_Map;
    [SerializeField] Vector2 m_Max_Map;

    Vector3 m_Pos_Bed;
    bool is_First_Open_Camera;
    Vector3 drag_Origin;

    public bool Get_Is_Lock_Move_Cam_Free()
    {
        return is_First_Open_Camera;
    }

    public void On_Ready_Move_Cam_Free()
    {
        is_First_Open_Camera = false;
    }

    public void Set_Map_Renderer(SpriteRenderer sprite)
    {
        map_Renderer = sprite;
        Update_Bound_Camera();
    }

    protected override void Awake()
    {
        base.Awake();
        is_First_Open_Camera = false;
       // isTweenComplete = false;
        if (map_Renderer)
        {
            Update_Bound_Camera();
        }
    }

    private void Update_Bound_Camera()
    {
        m_Min_Map.x = map_Renderer.transform.position.x - map_Renderer.bounds.size.x / 2f;
        m_Max_Map.x = map_Renderer.transform.position.x + map_Renderer.bounds.size.x / 2f;

        m_Min_Map.y = map_Renderer.transform.position.y - map_Renderer.bounds.size.y / 2f;
        m_Max_Map.y = map_Renderer.transform.position.y + map_Renderer.bounds.size.y / 2f;
    }


    private bool isTweenComplete;
    private Tween _tweenCamera;
    
    
    private void OnEnable()
    {
        if (Game_Controller.Instance != null && Game_Controller.Instance.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            var room = Level_Controller.Instance.Get_Room_Curr_Player();
            if (room)
            {
                is_First_Open_Camera = true;
                Vector3 pos = room.Get_Position_Bed();
                pos.z = -10f;
                m_Pos_Bed = pos;
                
                
                
                isTweenComplete = true;
                _tweenCamera =  cam.transform.DOMove(m_Pos_Bed, 0.25f).SetEase(Ease.Linear).OnComplete(() =>
                {
                    Pan_Camera();
                  //  cam.transform.position = m_Pos_Bed;
                  Clamp_Camera(m_Pos_Bed);
                
                
                   
                 
                    
                    _tweenCamera.Kill();
                });
            }
        }
    }

  

    private void Update()
    {
        if (Game_Controller.Get_Is_End_Level()) return;

        if (Game_Controller.Instance != null && Game_Controller.Instance.Get_Is_Time_Out())
        {
            return;
        }
        
        
        
        
        
        if (Input.GetMouseButtonDown(0))
        {
            if (EventSystem.current.IsPointerOverGameObject())
            {
                return;
            }
            isTweenComplete = false;
        }

        if (!isTweenComplete)
        {
            Pan_Camera();
        }
      
        // var room = Level_Controller.Instance.Get_Room_Curr_Player();
        // if (room == null)
        // {
        //     transform.position=new Vector3(-0.1f, -6.5f, -10f);
        // }

        // if (is_First_Open_Camera)
        // {
        //     cam.transform.position = m_Pos_Bed;
        // }
    }

    [SerializeField] float m_Time_Drag;
    [SerializeField] Base_Turret m_Turret_Wait_Click;
    Vector3 difference;
    private Vector3 velocity = Vector3.zero; // Biến lưu tốc độ cho SmoothDamp

    public void Wait_Event_Move_Cam(Base_Turret base_Turret)
    {
        m_Turret_Wait_Click = base_Turret;
    }

    private float smoothTime = 0.05f; // Thời gian làm mượt
    private void Pan_Camera()
    {
        
        
      
        if (EventSystem.current.IsPointerOverGameObject()    )
        {
            return;
        }

        if (MyExtensions.Is_Pointer_Over_UI_Object() ) return;

        if (Input.GetMouseButtonDown(0))
        {
            Debug.LogError("GetMouseButtonDown");
            if (EventSystem.current.IsPointerOverGameObject())
            {
                return;
            }

            isTweenComplete = false;

            is_First_Open_Camera = false;
            drag_Origin = cam.ScreenToWorldPoint(Input.mousePosition);
            m_Time_Drag = Time.time;
        }

        if (Input.GetMouseButton(0)) 
        {
          
            if (EventSystem.current.IsPointerOverGameObject())
            {
                return;
            }
            
            difference = drag_Origin - cam.ScreenToWorldPoint(Input.mousePosition);
            difference.z = 0f;

                // cam.transform.position = Clamp_Camera(cam.transform.position + difference);
            
            
            // Tính vị trí mục tiêu
            Vector3 targetPosition = cam.transform.position + difference;

            // Sử dụng SmoothDamp để làm mượt
            Vector3 newPosition = Vector3.SmoothDamp(
                cam.transform.position,
                targetPosition,
                ref velocity,
                smoothTime,
                Mathf.Infinity,
                Time.deltaTime
            );

            // Áp dụng Clamp_Camera
          //  cam.transform.position = Clamp_Camera(newPosition);
            SetPos(Clamp_Camera(newPosition));
        }

        if (Input.GetMouseButtonUp(0))
        {
          
            if (EventSystem.current.IsPointerOverGameObject())
            {
                return;
            }
            isTweenComplete = false;
            m_Time_Drag = Time.time - m_Time_Drag;
            if (m_Time_Drag < 0.125f && m_Turret_Wait_Click)
            {
                m_Turret_Wait_Click.On_Ready_Click_Turret();
                m_Turret_Wait_Click = null;
            }
            else
            {
                m_Turret_Wait_Click = null;
            }
        }
    }


    public void SetPos(Vector3 pos)
    {
       
        cam.transform.position = pos;
    }

    float cam_Height;
    float cam_Width;

    private Vector3 Clamp_Camera(Vector3 position)
    {
        cam_Height = cam.orthographicSize;
        cam_Width = cam.orthographicSize * cam.aspect;

        return new Vector3(
            Mathf.Clamp(position.x, m_Min_Map.x + cam_Width, m_Max_Map.x - cam_Width),
            Mathf.Clamp(position.y, m_Min_Map.y + cam_Height, m_Max_Map.y - cam_Height), 
            position.z);
    }

    float zoom_Cam;
    Vector2 m_Delta_Pos_Die;
    public void Move_Cam_To_Target(Type_Direction direction_Face, Type_Player type_Boss, Vector3 pos_Target, Action m_Action_Move_Done)
    {
        m_Delta_Pos_Die = Get_Delta_Pos_Boss_Die(type_Boss);
        if (direction_Face == Type_Direction.Left)
        {
            m_Delta_Pos_Die.x *= -1f;
        }
        pos_Target.x += m_Delta_Pos_Die.x;
        pos_Target.y += m_Delta_Pos_Die.y;
        pos_Target.z = transform.position.z;

        //transform.transform.position = pos_Target;
        SetPos(pos_Target);

        if (m_Action_Move_Done != null)
        {
            m_Action_Move_Done.Invoke();
        }

        // Zoom Cam
        zoom_Cam = cam.orthographicSize;

        DOTween.To(() => zoom_Cam, x => zoom_Cam = x, 4, 2f)
            .SetEase(Ease.InOutSine) // Hoặc Ease.Linear, Ease.OutQuad, v.v.
            .OnUpdate(() =>
            {
                cam.orthographicSize = zoom_Cam;
            });
    }

    [SerializeField] Vector2[] m_Delta_Pos_Boss_Die_V1;
    [SerializeField] Vector2[] m_Delta_Pos_Boss_Die_V2;

    public Vector2 Get_Delta_Pos_Boss_Die(Type_Player type_Boss)
    {
        if (RootManager.Instance && RootManager.Check_Is_AB_SKin())
        {
            if (My_Utils.Check_Is_Boss(type_Boss))
            {
                return m_Delta_Pos_Boss_Die_V2[My_Utils.Get_Id_Boss(type_Boss)];
            }
            return Vector2.zero;
                
        }
        else
        {
            if (My_Utils.Check_Is_Boss(type_Boss)) {
                return m_Delta_Pos_Boss_Die_V1[My_Utils.Get_Id_Boss(type_Boss)];
            }
            return Vector2.zero;
        }
    }
}