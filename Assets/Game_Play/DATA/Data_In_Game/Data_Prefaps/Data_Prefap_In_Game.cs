using UnityEngine;



[CreateAssetMenu(menuName = "Create Data/In Game/Data Prefaps", fileName = "Data_Prefap_In_Game", order = 0)]
public class Data_Prefap_In_Game : ScriptableObject
{
    [SerializeField] GameObject m_Pref_Txt_Level;

    public GameObject Get_Pref_Txt_Level()
    {
        return m_Pref_Txt_Level;
    }

    [SerializeField] GameObject m_Pref_Spine_Character;

    public GameObject Get_Pref_Spine_Character()
    {
        return m_Pref_Spine_Character;
    }

    [SerializeField] GameObject m_Pref_Health_Bar_UI;

    public GameObject Get_Pref_Health_Bar_UI()
    {
        return m_Pref_Health_Bar_UI;
    }

    [SerializeField] GameObject m_Pref_Bullet_PLayer;

    public GameObject Get_Pref_Bullet_Player()
    {
        return m_Pref_Bullet_PLayer;
    }
    
    [SerializeField] GameObject m_Pref_Bullet_PLayer_Penetation;

    public GameObject Get_Pref_Bullet_Player_Penetation()
    {
        return m_Pref_Bullet_PLayer_Penetation;
    }

    [SerializeField] GameObject m_Pref_Poison_Jug;

    public GameObject Get_Pref_Poison_Jug()
    {
        return m_Pref_Poison_Jug;
    }

    [SerializeField] GameObject m_Pref_Layout_Anim_Boss_Die;

    public GameObject Get_Pref_Layout_Anim_Boss_Die()
    {
        return m_Pref_Layout_Anim_Boss_Die;
    }

    [SerializeField] GameObject[] m_All_Pref_Tiles;
   
    public GameObject Get_Pref_Tile(Type_Map_Mode type_Map_Mode, Type_Tile type_Tile)
    {
 
        if (type_Tile == Type_Tile.None)
        {
            return null;
        }
        return m_All_Pref_Tiles[(int)type_Tile % m_All_Pref_Tiles.Length];
    }

    private GameObject Get_Pref_Tile_By_Type_Map_Mode(GameObject[] data, Type_Tile type_Tile)
    {
        if (type_Tile == Type_Tile.None)
        {
            return null;
        }
        return data[(int)type_Tile % data.Length];
    }

    [SerializeField] GameObject[] m_All_Pref_Turrets;

    public GameObject Get_Pref_Turret(Type_Turret type_Turret)
    {
        if (type_Turret == Type_Turret.None)
        {
            return null;
        }
        return m_All_Pref_Turrets[(int)type_Turret % m_All_Pref_Turrets.Length];
    }

    [SerializeField] GameObject[] m_All_Prefap_Boss;
  
 
    public GameObject Get_Prefap_Boss(Type_Player type_Boss)
    {
        int min = (int)Type_Player.Boss_Dracula;
        if ((int)type_Boss >= (int)min)
        {
            int id_Boss = (int)type_Boss - min;
         
            //return m_All_Addressable_Boss[id_Boss % m_All_Addressable_Boss.Length];
            return m_All_Prefap_Boss[id_Boss % m_All_Prefap_Boss.Length];
        }
        return null;
    }

    // updateofjura addressable
    // [SerializeField] AssetReference[] m_All_Addressable_Boss;
    // public AssetReference Get_Asset_Reference_Boss(Type_Player type_Boss)
    // {
    //
    //     int min = (int)Type_Player.Boss_Dracula;
    //     if ((int)type_Boss >= (int)min)
    //     {
    //         int id_Boss = (int)type_Boss - min;
    //         if (RootManager.Check_Is_AB_SKin())
    //         {
    //             //return m_All_Prefap_Boss_V2[id_Boss % m_All_Prefap_Boss_V2.Length];
    //         }
    //         Debug.LogError(id_Boss + "aaaa");
    //         Debug.LogError(m_All_Addressable_Boss.Length + "aaaa");
    //         if (m_All_Addressable_Boss[id_Boss % m_All_Addressable_Boss.Length] == null)
    //         {
    //             Debug.LogError("game lỗi r ");
    //
    //         }
    //         return m_All_Addressable_Boss[id_Boss % m_All_Addressable_Boss.Length];
    //         //return m_All_Prefap_Boss[id_Boss % m_All_Prefap_Boss.Length];
    //     }
    //     return m_All_Addressable_Boss[0 % m_All_Addressable_Boss.Length];
    // }

    [SerializeField] GameObject[] m_All_Prefap_Characters;
   
    
    
   

    public GameObject Get_Pref_Character(Type_Character type_Character, bool is_Using_Skin_2)
    {
        if (RootManager.Check_Is_AB_SKin())
        {

            Debug.Log("bug khon nan");
            if (is_Using_Skin_2)
            {
                return m_All_Prefap_Characters[(int)type_Character % m_All_Prefap_Characters.Length];
            }
            return m_All_Prefap_Characters[(int)type_Character % m_All_Prefap_Characters.Length];
        }
        if (is_Using_Skin_2)
        {

            Debug.Log("bug khon nan 9");
            return m_All_Prefap_Characters[(int)type_Character % m_All_Prefap_Characters.Length];
        }
        Debug.Log("bug khon nan 10");
        return m_All_Prefap_Characters[(int)type_Character % m_All_Prefap_Characters.Length];
    }


    
    
    
    
    
    //
    // [SerializeField] AssetReference[] m_All_Asset_Reference_Characters;
    // [SerializeField] AssetReference[] m_All_Asset_Reference_CharactersV2;
    // public AssetReference Get_Pref_Asset_Reference_Character(Type_Character type_Character, bool is_Using_Skin_2)
    // {
    //     if (RootManager.Check_Is_AB_SKin())
    //     {
    //         if (is_Using_Skin_2)
    //         {
    //             return m_All_Asset_Reference_Characters[(int)type_Character % m_All_Asset_Reference_Characters.Length];
    //         }
    //         return m_All_Asset_Reference_CharactersV2[(int)type_Character % m_All_Asset_Reference_CharactersV2.Length];
    //     }
    //     if (is_Using_Skin_2)
    //     {
    //         return m_All_Asset_Reference_CharactersV2[(int)type_Character % m_All_Asset_Reference_CharactersV2.Length];
    //     }
    //     return m_All_Asset_Reference_Characters[(int)type_Character % m_All_Asset_Reference_Characters.Length];
    // }




    [SerializeField] GameObject m_Pref_Hand_Tut;
    public GameObject Get_Pref_Hand_Tut()
    {
        return m_Pref_Hand_Tut;
    }

    [SerializeField] GameObject m_Pref_Hand_UI_Tut;
    public GameObject Get_Pref_Hand_UI_Tut()
    {
        return m_Pref_Hand_UI_Tut;
    }

    [SerializeField] GameObject m_Pref_BG_Upgrade;
    public GameObject Get_Pref_BG_Upgrade()
    {
        return m_Pref_BG_Upgrade;
    }

    [SerializeField] GameObject m_Pref_Day_Leo_Cua;
    public GameObject Get_Pref_Day_Leo_Cua()
    {
        return m_Pref_Day_Leo_Cua;
    }




    [SerializeField] GameObject m_Pref_Anim_Safeguard;
    public GameObject Get_Pref_Anim_Safeguard()
    {
        return m_Pref_Anim_Safeguard;
    }





    [SerializeField] GameObject m_Pref_Day_Leo_Boss;
    public GameObject Get_Pref_Day_Leo_Boss()
    {
        return m_Pref_Day_Leo_Boss;
    }






    [SerializeField] GameObject m_Pref_Rocket;

    public GameObject Get_Pref_Rock_Ket()
    {
        return m_Pref_Rocket;
    }

}
