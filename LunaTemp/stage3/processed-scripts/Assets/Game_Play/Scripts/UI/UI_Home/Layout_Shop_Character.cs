using System;
using System.Collections.Generic;
using UnityEngine;


public class Layout_Shop_Character : Base_UI
{
    [SerializeField] List<Type_Character> m_All_Type_Characters = new List<Type_Character>();
    [SerializeField] List<Type_Character> m_All_Type_Characters_V2 = new List<Type_Character>();
    [SerializeField] List<Item_Shop_Home> m_All_Item_Character = new List<Item_Shop_Home>();


    public override void OnReadyOpenUI()
    {


        m_All_Type_Characters_V2.Clear();

        bool is_AB_Skin = RootManager.Check_Is_AB_SKin();
        List<Type_Character> arr_AB = new List<Type_Character>();
        arr_AB.AddRange(is_AB_Skin ? m_All_Type_Characters_V2 : m_All_Type_Characters);

        List<Type_Character> arr_Clone = new List<Type_Character>();
        arr_Clone.AddRange(arr_AB);


        List<Type_Character> arr_Bought = new List<Type_Character>();
        for (int i = 0; i < arr_AB.Count; i++)
        {
            if (DataSaved.Get_Skin_Character_Bought(arr_AB[i]))
            {
                arr_Bought.Add(arr_AB[i]);
            }
        }

        for (int i = arr_Clone.Count - 1; i >= 0; i--)
        {
            if (arr_Bought.Check_Contain(arr_Clone[i]) != -1)
            {
                arr_Clone.RemoveAt(i);
            }
        }
        List<Type_Character> arr_Correct = new List<Type_Character>();

        arr_Correct.AddRange(arr_Bought);
        arr_Correct.AddRange(arr_Clone);

        for (int i = 0; i < m_All_Item_Character.Count; i++)
        {
            m_All_Item_Character[i].Set_Type_Character(arr_Correct[i]);
        }
        Debug.LogError("xekotoby" + "set type ---------------------------------");
        Update_State_Data();


    }

    public void Update_State_Data()
    {

        for (int i = 0; i < m_All_Item_Character.Count; i++)
        {
            m_All_Item_Character[i].Update_State_Data();
        }
    }

    public void Reset_State_Data()
    {

        for (int i = 0; i < m_All_Item_Character.Count; i++)
        {
            m_All_Item_Character[i].Reset_Bg_HighLight();

        }
    }
    public void Reset_State_Equid_Data()
    {

        for (int i = 0; i < m_All_Item_Character.Count; i++)
        {

            m_All_Item_Character[i].Reset_Equid();

        }
    }




    public Type_Character Get_Next_Character(Type_Character type_Character)
    {
        int curr_Index = Get_Index_Type_Character(type_Character);
        curr_Index += 1;
        if (curr_Index >= m_All_Type_Characters.Count)
        {
            curr_Index = 0;
        }

        return m_All_Type_Characters[curr_Index];
    }















    public Type_Character Get_Prev_Character(Type_Character type_Character)
    {
        int curr_Index = Get_Index_Type_Character(type_Character);
        curr_Index -= 1;
        if (curr_Index < 0)
        {
            curr_Index = m_All_Type_Characters.Count - 1;
        }

        return m_All_Type_Characters[curr_Index];
    }

    private int Get_Index_Type_Character(Type_Character type_Character)
    {
        for (int i = 0; i < m_All_Type_Characters.Count; i++)
        {
            if (m_All_Type_Characters[i] == type_Character)
            {
                return i;
            }
        }

        return 0;
    }
}