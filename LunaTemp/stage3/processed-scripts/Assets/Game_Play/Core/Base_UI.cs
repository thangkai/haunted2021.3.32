using UnityEngine;
using System;
using DG.Tweening;
using Haunted;

public abstract class Base_UI : Base_Update
{
    #region ============== Fields ==============

    bool isUIOpening;
    bool isStart;

    #endregion

    #region ============== Virtual Methods ==============

    public virtual void OnThemeChange() {
    }
    public virtual void OnReadyOpenUI() { }

    public virtual void Perpare_Before_Close_UI() { }

    public virtual void Open_UI(Action action) { }
    public virtual void Open_UI(From_UI from_UI) { }
    public virtual void Open_UI(From_UI from_UI, Type_Money type_Money) { }
    public virtual void Open_UI(Type_Item_Support type_Item_Support, int amount) { }
    public virtual void Open_UI(From_UI prev_UI, From_UI from_UI, Type_Money type_Money) { }
    public virtual void Open_UI(From_UI prev_UI, From_UI from_UI, Type_Tab_Shop_Update_V070 type_Tab_Shop, Type_Money type_Money , bool isBuy) { }

    public virtual void Open_UI(int total_Open) { }
    public virtual void Open_UI(Type_Pack type_Pack, bool is_Sale) { }
    public virtual void Open_UI(Type_Character skin_Character) { }

    public virtual void Open_UI(Type_Notice_In_Game type_Notice) { }

    public virtual void Open_UI(Action action_Success, Action action_Fail, int number_Save) { }

    public virtual void Open_UI(Status_Win_Lose status_Win_Lose) { }
    public virtual void Open_UI(int time_Countdown, Action actionClose) { }

    public virtual void Open_UI(int total_Coin, int total_Blood, int energy, bool is_Force_Energy,int xp, Action action_Close) { }

    public virtual void Open_UI(Type_Mission_Tut type_Mission) { }
   


    public virtual void Open_UI(bool is_From_UI_Waiting_Room, bool is_Character, Type_Player type_Boss, Type_Character type_Character, bool is_Trying_Skin_2) { }
    public virtual void Open_UI(bool is_Character, Type_Player type_Boss, Type_Character type_Character, bool isHome) { }

    public virtual void Open_UI(Base_Turret base_Turret, Type_Player type_Player, Model_Info_Turret model_Info_Turret, Model_Price price_Current) { }
    public virtual void Open_UI(Base_Turret base_Turret, Type_Player type_Player) { }

   
 
   
   
    public virtual void Remove_Ads_Success() { }
    // public virtual void Open_UI(Item_Skill_Tree_Gem item_Skill_Tree_Gem) { }




    public virtual void Start()
    {
        isStart = true;
        OnReadyStart();
        OnThemeChange();
        
    }

    #endregion

    public void Open_UI()
    {
        isUIOpening = false;
        gameObject.SetActive(true);

        if (isStart)
        {
            OnReadyStart();
        }
    }

    private void OnReadyStart()
    {
        if (isUIOpening) return;
        isUIOpening = true;
        OnReadyOpenUI();
    }

    public virtual void Close_UI()
    {
        
        //xekotoby
   
        //xekotoby
    
        Perpare_Before_Close_UI();
        gameObject.SetActive(false);
      
    }

    public virtual void _Btn_Close_OnClick()
    {
        SoundController.Play_Sounds(Type_Sound.Back);
        Close_UI();
    }

    public virtual void Play_Anim_Close_UI() { }

    public virtual void _Btn_Close_With_Anim_OnClick()
    {
        SoundController.Play_Sounds(Type_Sound.Back);

        Play_Anim_Close_UI();

        DOVirtual.DelayedCall(0.5f, () =>
        {
            Close_UI();
        });
    }
}
