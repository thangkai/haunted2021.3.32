using UnityEngine;

[System.Serializable]
public class Prefap_Holder
{
    public Type_Map_Mode type_Map_Mode;
    public Type_Tile type_Tile;
    public Vector3 position;
    public Type_Direction type_Direction_Move_Door;
    public Type_Direction type_Direction_Door;

    public Prefap_Holder(Type_Map_Mode _type_Map_Mode, Type_Tile _type_Tile, Vector3 _position, Type_Direction type_Direction, Type_Direction type_Direction_Door)
    {
        type_Map_Mode = _type_Map_Mode;
        type_Tile = _type_Tile;
        position = _position;
        type_Direction_Move_Door = type_Direction;
        this.type_Direction_Door = type_Direction_Door;
    }
}
