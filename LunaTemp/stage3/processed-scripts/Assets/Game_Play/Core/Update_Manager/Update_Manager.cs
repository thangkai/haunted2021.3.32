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

        if (Input.GetMouseButtonUp(0))
        {
            if (Game_Controller.Instance && Game_Controller.Instance.Get_Is_Time_Out())
            {
                return;
            }

            m_Ray = Camera.main.ScreenPointToRay(Input.mousePosition);

            m_Raycast_Hit_2D = Physics2D.Raycast(m_Ray.origin, m_Ray.direction, Mathf.Infinity, m_Layer_Mask);
            //Debug.Log("Get Mouse Button Up - Hit");
            if (m_Raycast_Hit_2D)
            {
                //Debug.Log("Get Mouse Button Up - Hit : Name = " + hit.collider.name);
                //UI_Log.Print_Logs("Hit " + hit.collider.name);
                if (m_Raycast_Hit_2D.collider.TryGetComponent(out Base_Turret item))
                {
                    if (Camera_Movement.Instance)
                    {
                        //Debug.Log("Get Mouse Button Up - CAM");
                        Camera_Movement.Instance.Wait_Event_Move_Cam(item);
                    }
                    else
                    {
                        //Debug.Log("Get Mouse Button Up - Ready");
                        item.On_Ready_Click_Turret();
                    }
                }
            }
        }
    }

}
