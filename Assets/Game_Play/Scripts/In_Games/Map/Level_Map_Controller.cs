using System.Collections.Generic;
using UnityEngine;

public class Level_Map_Controller : MonoBehaviour
{
    public List<Prefap_Holder> list_Prefap_Holder = new List<Prefap_Holder>();

    private void Start()
    {
        CreateMap();
    }

    private void CreateMap()
    {
        if (Data_In_Game.Instance != null)
        {
            var data_Prefap = Data_In_Game.Instance.Get_Data_Prefaps();
            Prefap_Holder item;
            GameObject objPref;
            Door_Controller door_Controller;
            Vector3 pos;

            for (int i = 0; i < list_Prefap_Holder.Count; i++)
            {
                item = list_Prefap_Holder[i];
                objPref = Instantiate(data_Prefap.Get_Pref_Tile(item.type_Map_Mode, item.type_Tile), transform);
                if (item.type_Tile == Type_Tile.Door)
                {
                    pos = item.position;
                    switch (item.type_Direction_Move_Door)
                    {
                        case Type_Direction.Top:
                            pos.y += 1;
                            break;
                        case Type_Direction.Left:
                            pos.x -= 1;
                            break;
                        case Type_Direction.Right:
                            pos.x += 1;
                            break;
                        case Type_Direction.Bottom:
                            pos.y -= 1;
                            break;
                    }

                    objPref.transform.localPosition = pos;

                    door_Controller = objPref.GetComponent<Door_Controller>();
                    if (door_Controller)
                    {
                        door_Controller.Set_Type_Direction_Move(My_Utils.Get_Reflect_Direction(item.type_Direction_Move_Door));
                    }
                }
                else
                {
                    objPref.transform.localPosition = item.position;
                }
            }
        }
    }
}
