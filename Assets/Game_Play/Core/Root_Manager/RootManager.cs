using UnityEngine;


using System.Collections.Generic;
using System;




public class RootManager : Singleton<RootManager>
{
    public string VERSION = "1";
 public int m_Total_Level = 20;
    public int m_Total_Level_Mode_Challenge = 20;
    public bool DisEnableLog;
    public bool m_Is_On_Tutorials;
    [SerializeField] int m_Time_Sale = 24 * 60 * 60;
   [SerializeField] public int m_Time_Full_Level_pencent = 10;

    public bool isTutorialByXekotoby = false;
    public static float Get_Pencent_Config_Time()
    {
        if (Instance)
        {
            return (float)Instance.m_Time_Full_Level_pencent / 10f;
        }

        return 1f;
    }
    public bool DisEnableLog_ADS;


    
    public bool is_Test_Coin_In_Game;

   
    public int m_Max_Common;

   
    public int m_Max_Energy;

  


   
    public bool m_Is_Test_AB_Time_Vampire_Attack;



   


   
    public bool is_Full_Coin;

    
    public bool is_Build_For_Marketing;

   
    public bool IsRemoveAds;

   
    public bool isUnlockAllLevel;

   
    public bool m_Is_AB_Level_Very_Hard;

 
    public bool m_Is_AB_Auto_Sleep;
    //public bool m_Is_AB_Boss_Line_Up;

    
   
    public Type_AI_Boss m_Type_AI_Boss;

   
    public bool m_Is_AB_IAP_Character_Pack;


   [SerializeField] Type_Level_Play m_Type_Level_Play = Type_Level_Play.Normal;

   
   
    public string Key_Log_AB = "";

    private string Key_Log_AB_Level_Very_Hard = "_AB_LV_VH";
    private string Key_Log_AB_AI_ATK = "";


    [SerializeField] private Type_Pack packSaleInit = Type_Pack.None;
    [SerializeField] private float timeLoadingIngame = 6f;

    public void SetTimeLoadingIngame(float timeLoading)
    {
        timeLoadingIngame = timeLoading;

    }

    public float GetTimeLoadingIngame()
    {
        return timeLoadingIngame;
    }

    internal void SetPackSale(Type_Pack typePack)
    {
        packSaleInit = typePack;

    }
    internal Type_Pack GetPackSaleData()
    {
        return packSaleInit;

    }

    protected override void Awake()
    {
        base.Awake();
        // if (is_Test_Level)
        // {
        //     DataSaved.Set_Card_Character(60,Type_Character.Student );
        // }

        Init_Default_Value();
        //  DataSaved.Set_Is_Bought_Pack_Starter(true);




        IsRemoveAds = DataSaved.Get_Is_Remove_Ads();
        Debug.unityLogger.logEnabled = !DisEnableLog;

       

     

        DataSaved.Set_On_Start_Root_Manager(true);


        Exam_Character();
        Check_Tut();

        //login


    }


    public void Check_Tut()
    {
        if (isTutorialByXekotoby)
        {
            DataSaved.Set_Complete_Tut_Use_Item(true);
            // DataSaved.Set_Condition_Show_Tut_Chest(2 );
            // DataSaved.Set_Complete_Show_Tut_Chest(false);
        }
    }

   
    private void Init_Default_Value()
    {
        // if (!is_Test_Level)
        // {
        //     m_Type_Level_Play_Test = Type_Level_Play.Normal;
        //     m_Is_Test_AB_Time_Vampire_Attack = false;
        //     isTestAD = false;
        //     isTestInApp = false;
        //     isTestNotifile = false;
        //     IsRate = false;
        //     is_Full_Coin = false;
        //     is_Test_Coin_In_Game = false;
        //     is_Build_For_Marketing = false;
        //     IsRemoveAds = false;
        //     isUnlockAllLevel = false;
        //     m_Is_AB_Level_Very_Hard = false;
        //     m_Is_AB_Auto_Sleep = true;
        //     m_Type_AI_Boss = Type_AI_Boss.Normal;
        //     is_Test_Unlock_Level = false;
        //     m_Max_Energy = 10;
        //     m_Time_Full_Level_pencent = 10;
        //     m_Max_Common = 1;
        //
        // }
        //
        // if (is_Test_Level)
        // {
        //     DataSaved.Set_AB_IAP_Character_Pack(m_Is_AB_IAP_Character_Pack);
        // }
    }

















    private string Get_Key_AI_Boss()
    {
        if (m_Is_AB_Level_Very_Hard)
        {
            return Key_Log_AB_AI_ATK;
        }

        return "";
    }





    [SerializeField] private List<Type_Pack> a = new List<Type_Pack>();


    public List<Type_Pack> List_Type_Pack_Has_Apppear()
    {
        return a;
    }



    public void Exam_Character()
    {
        if (My_Utils.Get_Status_Skin_Character(DataSaved.Get_Skin_Character_Equipped()) ==
            Status_Item_Shop_Character.Selected)
        {
            DataSaved.Set_Try_Skin_Character_Equipped_Home(Type_Character.None);
        }
    }

    private void Start()
    {
        //        DontDestroyOnLoad(gameObject);

        Application.targetFrameRate = 60;
        //m_Is_Level_4_Minutes = false;

        //DataSaved.Set_Is_Show_Popup_IAP(false);
        DataSaved.Set_Is_Show_UI_Daily_Gift(false);
        DataSaved.Set_Is_Show_UI_Spin(false);

        // if (!is_Test_Level)
        // {
        //     m_Type_AI_Boss = Type_AI_Boss.Normal;
        // }

        if (is_Full_Coin)
        {
            // DataSaved.Set_Coin(10000);
            // DataSaved.Set_Money(10000000, true);

            // DataSaved.Set_Coin(5000);
            // DataSaved.Set_Money(5000, true);
            if (DataSaved.IsFirstOpen())
            {
                DataSaved.Set_Coin(5000);
                DataSaved.Set_Money(5000, true);

                DataSaved.SetNotFirstOpen();
            }



        }

        if (is_Build_For_Marketing)
        {
            DataSaved.Set_Coin(10000);
           
            for (int i = 0; i < (int)Type_Character.Total; i++)
            {
                DataSaved.Set_Skin_Character_Bought((Type_Character)i, true);
                if (!DataSaved.Get_Is_Unlock_Skill_2((Type_Character)i))
                {
                    DataSaved.Set_Is_Unlock_Skill_2((Type_Character)i, true);
                }
                if (!DataSaved.Get_Is_Unlock_Skill_3((Type_Character)i))
                {
                    DataSaved.Set_Is_Unlock_Skill_3((Type_Character)i, true);
                }
            }

        }

        if (isUnlockAllLevel)
        {

            // for (int i = 0; i < m_Total_Level - 1; i++)
            // {
            //     DataSaved.Set_Level_Complete(i);
            // }


            for (int i = 0; i < 2; i++)
            {
                DataSaved.Set_Level_Complete(i);
            }

            for (int i = 0; i < m_Total_Level_Mode_Challenge - 1; i++)
            {
                DataSaved.Set_Level_Complete_Mode_Challenge(i);
            }
        }

        // if (is_Test_Level)
        // {
        //     m_Type_Level_Play = m_Type_Level_Play_Test;
        //     //m_Is_Level_4_Minutes = m_Type_Level_Play_Test == Type_Level_Play.Hard_4_Minutes;
        //
        //     if (m_Is_AB_Level_Very_Hard)
        //     {
        //         if (m_Type_AI_Boss != Type_AI_Boss.Line_Up)
        //         {
        //             m_Type_AI_Boss = Type_AI_Boss.AI_ATK;
        //         }
        //
        //         Key_Log_AB = Key_Log_AB_Level_Very_Hard + Get_Key_AI_Boss();
        //     }
        //     //else
        //     //{
        //     //    if (m_Type_Level_Play_Test == Type_Level_Play.Hard_4_Minutes)
        //     //    {
        //     //        Key_Log_AB = Key_Log_AB_4_Minutes;
        //     //    }
        //     //    else if (m_Type_Level_Play_Test == Type_Level_Play.Hard)
        //     //    {
        //     //        Key_Log_AB = Key_Log_AB_Level3012;
        //     //    }
        //     //}
        //
        //     if (!UtilGame.isHashkeyData("Test_Energy"))
        //     {
        //         UtilGame.SetDataBool("Test_Energy", true);
        //
        //         DataSaved.Increase_Energy(m_Max_Energy);
        //     }
        //
        //     //Update_Data_AB_Skin_1601(m_Is_AB_Skin_1601);
        //     //xekotoby
        //     DataSaved.Set_Is_Full_Time_KEY(false);
        // }

        if (is_Test_Unlock_Level)
        {
            for (int i = 0; i < m_Max_Level_Unlock - 1; i++)
            {
                DataSaved.Set_Level_Complete(i);
            }
        }
    }

    public void Set_Remove_Ads()
    {
        DataSaved.Set_Is_Remove_Ads(true);
        IsRemoveAds = true;


    }

   
    public bool is_Test_Unlock_Level;

   
    public int m_Max_Level_Unlock;

    public int Get_Total_Level()
    {
        return m_Total_Level;
    }

    public int Get_Total_Level_Challenge()
    {
        return m_Total_Level_Mode_Challenge;
    }


    #region ================= Static method ==================

    public static bool Get_Is_Test_AB_Time_Vampire_Attack()
    {
        if (Instance)
        {
            return Instance.m_Is_Test_AB_Time_Vampire_Attack;
        }

        return false;
    }

    public static Type_AI_Boss Get_Type_AI_Boss()
    {
        if (Instance)
        {
            return Instance.m_Type_AI_Boss;
        }

        return Type_AI_Boss.Normal;
    }

    public static Type_Level_Play Get_Type_Level_Plays()
    {
        if (Instance)
        {
            return Instance.Get_Type_Level_Play();
        }

        return Type_Level_Play.Normal;
    }

    public static bool Check_Is_Type_Level_Hard_4_Minutes()
    {
        //if (Check_AB_Level_Very_Hard())
        //{
        //    return false;
        //}

        //if (Instance)
        //{
        //    //return Instance.Get_Type_Level_Play() == Type_Level_Play.Hard_4_Minutes;
        //    return Instance.m_Is_Level_4_Minutes;
        //}
        return false;
    }

    public static bool Check_Is_On_Tutorials()
    {
        if (Instance)
        {
            return Instance.m_Is_On_Tutorials;
        }

        return true;
    }

    public static bool Check_Is_AB_SKin()
    {
        return false;
    }

    public static bool Check_AB_Level_Very_Hard()
    {
        if (Instance)
        {
            return Instance.m_Is_AB_Level_Very_Hard;
        }

        return false;
    }

    public static bool Check_AB_Boss_Line_Up()
    {
        if (Instance)
        {
            return Instance.m_Type_AI_Boss == Type_AI_Boss.Line_Up;
        }

        return false;
    }

    public static bool Check_AB_Auto_Sleep()
    {
        if (Instance)
        {
            return Instance.m_Is_AB_Auto_Sleep;
        }

        return false;
    }

    public static int Get_Max_Energy()
    {
        if (Instance)
        {
            return Instance.m_Max_Energy;
        }

        return 10;
    }

    public static int Get_Max_Key_Commnon_Chest()
    {
        if (Instance)
        {
            return Instance.m_Max_Common;
        }

        return 1;
    }

    public static int Get_Time_Sale()
    {
        if (Instance)
        {
            return Instance.m_Time_Sale;
        }

        return 90 * 60;
    }








    #endregion

    //xekotobby

    //xekomotion

    public Type_Level_Play Get_Type_Level_Play()
    {
        return m_Type_Level_Play;
    }





 









    public string Get_Default_Data_Try_Skin()
    {
        List<int> Default_Data = new List<int>();


        for (int i = 0; i < (int)Type_Character.Total; i++)
        {
            Default_Data.Add(0);
        }

        return Default_Data.Convert_ListInt_To_String();
    }




    #region list_Character

    [SerializeField] public List<Type_Character> m_List_Add_Character;

    public void Add_Character(Type_Character typeCharacter)
    {
        if (m_List_Add_Character != null)
        {
            m_List_Add_Character.Add(typeCharacter);
            if (Database.instance != null)
            {
                Database.instance.SetCharacterUnlock();
            }

        }

    }
    public void Remove_Character(Type_Character typeCharacter)
    {
        if (m_List_Add_Character != null)
        {
            m_List_Add_Character.Remove(typeCharacter);
        }

    }

    public int Count_List_Add_Character()
    {

        if (m_List_Add_Character != null)
        {

            return m_List_Add_Character.Count;
        }

        return 0;
    }


    public void Sort_List_Add_Character()
    {
        if (m_List_Add_Character.Count > 1)
        {
            for (int i = 0; i < m_List_Add_Character.Count - 1; i++)
            {

                Type_Character_Standard m_Standard_Character;
                // neu 2 enum == gia tri
                if (Enum.TryParse(m_List_Add_Character[i].ToString(), out m_Standard_Character))
                {

                    for (int j = i + 1; j < m_List_Add_Character.Count; j++)
                    {
                        Type_Character_Standard m_Standard_Character_j;
                        Enum.TryParse(m_List_Add_Character[j].ToString(), out m_Standard_Character_j);

                        if ((int)m_Standard_Character > (int)m_Standard_Character_j)
                        {
                            //swap vi tri character
                            Type_Character b = m_List_Add_Character[j];
                            m_List_Add_Character[j] = m_List_Add_Character[i];
                            m_List_Add_Character[i] = b;

                        }
                    }

                }

            }

            for (int i = 0; i < m_List_Add_Character.Count; i++)
            {
                Debug.LogError("Xekotoby" + m_List_Add_Character[i]);
            }
        }


    }

    #endregion





}