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

    




}