using System.Collections.Generic;
using UnityEngine;

public class Layout_Mode_Defence : MonoBehaviour
{
    [SerializeField] GameObject m_Pref_Item_UI_Player;
    [SerializeField] Transform m_Layout_Info_Player;
    [SerializeField] List<Item_UI_Player> m_All_Item_PLayer = new List<Item_UI_Player>();

    [Space(20)]
    [SerializeField] Transform m_Layout_Info_Boss;
    [SerializeField] GameObject m_Pref_Item_UI_Boss;
    [SerializeField] List<Item_UI_Boss> m_All_Item_Boss = new List<Item_UI_Boss>();
    Type_Player type_Player_Curr;

    public bool Get_Is_Can_Click_Item_Player()
    {
        if (DataSaved.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            type_Player_Curr = Game_Controller.Instance.Get_Player_Curr();

            for (int i = 0; i < m_All_Item_PLayer.Count; i++)
            {
                if (m_All_Item_PLayer[i].Get_Type_Player() == type_Player_Curr)
                {
                    return m_All_Item_PLayer[i].Get_Is_Can_Click();
                }
            }
            return false;
        }
        return true;
    }

    public void Set_Data()
    {
        foreach (Transform item in m_Layout_Info_Player)
        {
            Destroy(item.gameObject);
        }
        m_All_Item_PLayer.Clear();

        var all_Data_Player_Join_Game = Game_Controller.Instance.Get_All_Character_Player_Join_Game();
        foreach (var item in all_Data_Player_Join_Game)
        {
            var obj_Item = Instantiate(m_Pref_Item_UI_Player, m_Layout_Info_Player);
            Item_UI_Player item_UI_Player = obj_Item.GetComponent<Item_UI_Player>();
            if (item_UI_Player)
            {
                item_UI_Player.Set_Data(this, item);
                m_All_Item_PLayer.Add(item_UI_Player);
            }
        }

        // Create Boss
        foreach (Transform item in m_Layout_Info_Boss)
        {
            Destroy(item.gameObject);
        }
        m_All_Item_Boss.Clear();

        var all_Boss_By_Type = Game_Controller.Instance.Get_All_Boss_By_Type();
        foreach (var item in all_Boss_By_Type)
        {
            var obj_Item = Instantiate(m_Pref_Item_UI_Boss, m_Layout_Info_Boss);
            Item_UI_Boss item_UI_Boss = obj_Item.GetComponent<Item_UI_Boss>();
            if (item_UI_Boss)
            {
                item_UI_Boss.Set_Data(item);
                m_All_Item_Boss.Add(item_UI_Boss);
            }
        }
    }

    public void Register_Postion_Player(Type_Player type_Player, [Bridge.Ref] Vector3 position)
    {
        //if(m_All_Item_PLayer.Count<=0)return;
       
        foreach (var item in m_All_Item_PLayer)
        {
            if (item && item.Get_Type_Player() == type_Player )
            {
                item.Set_Current_Position(position);
                break;
            }
        }
    }
}
