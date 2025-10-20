using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Boss_Manager : Singleton<Boss_Manager>
{
    [Header("______ Using Mode Nhap vai Boss _____")]
    [SerializeField] Type_Player m_Boss_Curent;
    [SerializeField] List<Base_Boss> m_All_Obj_Boss = new List<Base_Boss>();

    public void Loop_Time()
    {
        Check_Boss_Attack_Room();
    }

    public List<Base_Boss> Get_All_Obj_Boss()
    {
        return m_All_Obj_Boss;
    }

    // Case Boss attaking room but Room not exist that boss attacking
    private void Check_Boss_Attack_Room()
    {
        for (int i = 0; i < m_All_Obj_Boss.Count; i++)
        {
            if (m_All_Obj_Boss[i] &&
                m_All_Obj_Boss[i].Get_Is_Take_Damaged_To_Room() &&
                m_All_Obj_Boss[i].Get_Room_Attacking() &&
                m_All_Obj_Boss[i].Get_Room_Attacking().Get_Bed_Controller() &&
                !m_All_Obj_Boss[i].Get_Room_Attacking().Check_Contain_In_Boss_Attacking(m_All_Obj_Boss[i].transform.GetInstanceID()))
            {
                m_All_Obj_Boss[i].Get_Room_Attacking().Add_Boss_Attacking(m_All_Obj_Boss[i], true);
                break;
            }
        }
    }

    public int Get_Count_Boss_In_Game()
    {
        return m_All_Obj_Boss.Count;
    }

    public void Set_Active_Skill_2_Vampire_Hunter()
    {
        for (int i = 0; i < m_All_Obj_Boss.Count; i++)
        {
            if (m_All_Obj_Boss[i])
            {
                m_All_Obj_Boss[i].Set_Stun_By_Skill_2_Vampire_Hunter();
            }
        }
    }






    public Base_Boss Get_First_Boss_Live()
    {
        if (m_All_Obj_Boss.Count > 0)
        {
            var clone_Boss = new List<Base_Boss>();
            clone_Boss.AddRange(m_All_Obj_Boss);
            for (int i = 1; i < clone_Boss.Count; i++)
            {
                if (clone_Boss[i]) clone_Boss[i].Force_Boss_Die();
            }
            return clone_Boss[0];
        }
        return null;
    }

    public void Remove_Boss(Base_Boss base_Boss)
    {
        if (m_All_Obj_Boss.Contains(base_Boss))
        {
            m_All_Obj_Boss.Remove(base_Boss);
        }
    }

    public bool Check_Is_Kill_All_Boss()
    {
        return m_All_Obj_Boss.Count <= 0;
    }

    public List<Base_Boss> Get_All_Boss()
    {
        return m_All_Obj_Boss;
    }

    public void On_Restart(int max_Level_Boss)
    {
        m_Max_Level_Boss = max_Level_Boss;
        //m_Currect_Layer_Health_Bar_Boss = 7;

        for (int i = 0; i < m_All_Obj_Boss.Count; i++)
        {
            if (m_All_Obj_Boss[i])
            {
                Destroy(m_All_Obj_Boss[i].gameObject);
            }
        }

        m_All_Obj_Boss.Clear();

        for (int i = 0; i < m_All_Data_Boss.Count; i++)
        {
            if (m_All_Data_Boss[i])
            {
                m_All_Data_Boss[i].Reset_Data();
            }
        }

        if (Game_Controller.Instance.Get_Type_Mode_Play() == Type_Mode_Play.Player)
        {
            m_Boss_Curent = Type_Player.None;
        }
    }

    public void Check_Alert_Boss()
    {
        if (m_Max_Level_Boss > 0 && !RootManager.Check_Is_Type_Level_Hard_4_Minutes())
        {
            if (m_Max_Level_Boss == 1)
            {
                UI_Alert_Boss.Instance.Play_Alert(Type_Alert_Boss.Monster_Level_Is_Higher);
            }
            else
            {
                UI_Alert_Boss.Instance.Play_Alert(Type_Alert_Boss.Monster_Crazy);
            }
            SoundController.Play_Sounds(Type_Sound.Alert);
        }

        if ((int)Game_Controller.Instance.Get_Level() > (int)DataSaved.Get_Type_Max_Level_Boss())
        {
            DataSaved.Set_Type_Max_Level_Boss(Game_Controller.Instance.Get_Level());
            UI_Alert_Boss.Instance.Play_Alert(Type_Alert_Boss.Monster_Is_Stronger);
            SoundController.Play_Sounds(Type_Sound.Alert);
        }
    }

    public void Start_Create_Boss()
    {
        var all_Type_Boss = Game_Controller.Instance.Get_All_Boss_In_Map();

        for (int i = 0; i < all_Type_Boss.Count; i++)
        {
            if (all_Type_Boss[i] != null)
            {
                Spawn_Boss(all_Type_Boss[i], m_Max_Level_Boss);
            }
        }
    }

    //GameObject obj_Boss = null;
    [SerializeField] Vector3 m_Pos_Spawn_Boss;


    Model_Anim_Boss_Character m_Model_Anim_Boss_Characeter;
   
    public void Spawn_Boss(Model_Boss item, int level)
    {
        Level_Controller level_Controller = Level_Controller.Instance;



        //var obj_Boss = Instantiate(
        // Data_In_Game.Instance.Get_Data_Prefaps().Get_Prefap_Boss(item.type_Boss), Recycle_Bin.Instance.transform);


        //var obj_Boss = null;

        
        var obj_Boss = Instantiate(
                Data_In_Game.Instance.Get_Data_Prefaps().Get_Prefap_Boss(item.type_Boss), Recycle_Bin.Instance.transform);
        ///release- tile chua co anim

        if (level_Controller)
        {

            // vi tri bosssss

            m_Pos_Spawn_Boss = level_Controller.Get_Random_Pos_Point_Restore_Health();
            obj_Boss.transform.position = m_Pos_Spawn_Boss;
        }
        if (obj_Boss != null)
        {
            Base_Boss base_Boss = obj_Boss.GetComponent<Base_Boss>();

            if (base_Boss)
            {
                base_Boss.m_Type_Level = item.type_Level;
                base_Boss.Set_Level(level);
                m_All_Obj_Boss.Add(base_Boss);

            }
        }
    }
    

    #region =========== Data_Boss ============

    [Header("____ Data_Boss ____")]

    [SerializeField] List<Data_Boss> m_All_Data_Boss = new List<Data_Boss>();
    [SerializeField] int m_Max_Level_Boss;

    public int Get_Max_Level_Boss()
    {
        return m_Max_Level_Boss;
    }

    public Type_Player Get_Boss_Curr()
    {
        return m_Boss_Curent;
    }

    public void Set_Max_Level_Boss(string name_Vampire, int max, bool from_Auto)
    {
        if (max > m_Max_Level_Boss)
        {
            m_Max_Level_Boss = max;
            if (m_Max_Level_Boss > 0 && !from_Auto)
            {
                UI_Alert.Show_Alerts_Vampire_Level_Up(name_Vampire, m_Max_Level_Boss + 1);
            }
        }
    }

    bool m_Is_Show_Level_Up;

    public void Show_Alerts_Vampire_Level_Up(string name_Vampire, int level)
    {
        if (m_Is_Show_Level_Up) return;
        if (level >= m_Max_Level_Boss)
        {
            m_Is_Show_Level_Up = true;
            UI_Alert.Show_Alerts_Vampire_Level_Up(name_Vampire, m_Max_Level_Boss + 1);
            DOVirtual.DelayedCall(1f, () =>
            {
                m_Is_Show_Level_Up = false;
            }, false);
        }
    }

    int m_Min_Id_Boss = (int)Type_Player.Boss_Dracula;

    public Data_Boss Get_Data_Boss(Type_Player type_Player)
    {
        if ((int)type_Player >= m_Min_Id_Boss)
        {
            return m_All_Data_Boss[((int)type_Player - m_Min_Id_Boss) % m_All_Data_Boss.Count];
        }
        return null;
    }

    //public Data_Boss Get_Data_Boss_Current()
    //{
    //    return Get_Data_Boss(m_Boss_Curent);
    //}

    #endregion

    int m_Currect_Layer_Health_Bar_Boss = 7;
    public int Get_Layer_Health_Bar_Boss()
    {
        int output = m_Currect_Layer_Health_Bar_Boss;
        m_Currect_Layer_Health_Bar_Boss += 1;
        return output;
    }

    public int Get_Curr_Layer_Health_Bar_Boss()
    {
        return m_Currect_Layer_Health_Bar_Boss;
    }

    List<Base_Boss> clone_Boss = new List<Base_Boss>();
    public void Force_All_Boss_Attack_Player()
    {
        if (m_All_Obj_Boss.Count > 0)
        {
            clone_Boss.Clear();
            clone_Boss.AddRange(m_All_Obj_Boss);
            for (int i = 0; i < clone_Boss.Count; i++)
            {
                if (clone_Boss[i]) clone_Boss[i].Force_Attack_PLayer();
            }
        }
    }
}