using System.Collections.Generic;
using UnityEngine;

// Using Create Pref Tile of Room
public class Room_Data_Loader : MonoBehaviour
{
    public List<Prefap_Holder> list_Prefap_Holder = new List<Prefap_Holder>();

    public void Add_New_Data_Holder()
    {
        list_Prefap_Holder.Clear();

        foreach (Transform item in transform)
        {
            Tile_Holder tile_Holder = item.GetComponent<Tile_Holder>();
            if (tile_Holder)
            {
                Vector3 pos = item.transform.localPosition;
                pos.x += 0.5f;
                pos.y += 0.5f;
                pos.x = (int)pos.x;
                pos.y = (int)pos.y;

                Prefap_Holder prefap_Holder = new Prefap_Holder(
                    tile_Holder.m_Type_Map_Mode,
                    tile_Holder.Get_Type_Tile(), pos, 
                    tile_Holder.Get_Type_Direction(), tile_Holder.type_Direction_Door);
                list_Prefap_Holder.Add(prefap_Holder);
            }
        }
    }

    private void Start()
    {
        Create_Data_Room();
    }

    private void Create_Data_Room()
    {
        if (Data_In_Game.Instance != null)
        {
            var data_Prefap = Data_In_Game.Instance.Get_Data_Prefaps();

            foreach (var item in list_Prefap_Holder)
            {
                var pref = data_Prefap.Get_Pref_Tile(item.type_Map_Mode, item.type_Tile);
                var objPref = Instantiate(pref, transform);
                if (item.type_Tile == Type_Tile.Door)
                {
                    Type_Direction type_Direction = item.type_Direction_Move_Door;
                    Vector3 pos = item.position;
                    switch (type_Direction)
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

                    Door_Controller door_Controller = objPref.GetComponent<Door_Controller>();
                    if (door_Controller)
                    {
                        door_Controller.Set_Direction_Door(item.type_Direction_Door);
                        door_Controller.Set_Type_Direction_Move(Get_Reflect_Direction(type_Direction));
                    }
                }
                else
                {
                    objPref.transform.localPosition = item.position;
                }
            }
        }

        if (Game_Controller.Instance)
        {
            Game_Controller.Instance.Notify_Create_Room_Done();
        }
    }

    private Type_Direction Get_Reflect_Direction(Type_Direction input)
    {
        switch (input)
        {
            case Type_Direction.Top: return Type_Direction.Bottom;
            case Type_Direction.Left: return Type_Direction.Right;
            case Type_Direction.Right: return Type_Direction.Left;
            case Type_Direction.Bottom: return Type_Direction.Top;
        }
        return Type_Direction.None;
    }
}