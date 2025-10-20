using UnityEngine;

public class Tile_Holder : MonoBehaviour
{
    public Type_Map_Mode m_Type_Map_Mode;
    public Type_Tile type_Tile;
    public Type_Direction type_Direction_Move_Door;
    public Type_Direction type_Direction_Door;

    public Type_Tile Get_Type_Tile()
    {
        return type_Tile;
    }

    public Type_Direction Get_Type_Direction()
    {
        return type_Direction_Move_Door;
    }
}
