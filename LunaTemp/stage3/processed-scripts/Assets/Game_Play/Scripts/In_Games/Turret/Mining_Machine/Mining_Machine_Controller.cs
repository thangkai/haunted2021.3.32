using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using Spine.Unity;
using DG.Tweening;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;
using TMPro;
using System;

public class Mining_Machine_Controller : Base_Turret
{
   
    [SerializeField] Bed_Controller m_Bed_Controller;
    [SerializeField] Transform m_Model_Machine;
    [SerializeField] Transform m_Progress_Machine;
    [SerializeField] int m_Coin_Increase;
    [SerializeField] TextMeshPro m_Txt_Coin;
    [SerializeField] Transform m_Anim_Collect;
    [SerializeField] Transform m_Holder_Effect;
    [SerializeField] ParticleSystem m_Effect_Coin_Machine;

    [SerializeField] Bool_Global_Variable m_Live_Data_Die;
    private Tweener m_Tween_Progress;
    private TweenerCore<Vector3, Vector3, VectorOptions> m_Tween_Scale;

    public override void Start()
    {
        base.Start();

        var obj_Effect = Instantiate(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Coin_Mining_Machine(), m_Holder_Effect);
        obj_Effect.transform.localPosition = Vector3.zero;

        m_Effect_Coin_Machine = obj_Effect.GetComponent<ParticleSystem>();
        if (m_Effect_Coin_Machine)
        {
            m_Effect_Coin_Machine.gameObject.Set_Active(false);
        }
    }

    public override void On_Turret_Click()
    {
        if (Game_Controller.Get_Is_End_Level()) return;
    }

    public override void Set_Room_Controller(Room_Controller room_Controller)
    {
        base.Set_Room_Controller(room_Controller);
        m_Bed_Controller = room_Controller.Get_Bed_Controller();
    }

    public override void Add_Listener()
    {
        base.Add_Listener();

        if (data_Player)
        {
            m_Live_Data_Die = data_Player.Get_Live_Data_Die_Change();

            if (m_Live_Data_Die)
            {
                m_Live_Data_Die.OnValueChanged.AddListener(On_Live_Data_Bed_Die_Change);
            }


            m_Anim_Collect.gameObject.Set_Active(false);
            Start_Turn_On_Machine();
        }
    }

    private void OnDisable()
    {
        m_Anim_Collect.DOKill(false);
        m_Tween_Progress.Do_Kill();
        m_Tween_Scale.Do_Kill();
        if (m_Live_Data_Die)
        {
            m_Live_Data_Die.OnValueChanged.RemoveListener(On_Live_Data_Bed_Die_Change);
        }
    }

    private void On_Live_Data_Bed_Die_Change()
    {
        if (m_Live_Data_Die && m_Live_Data_Die.Value == true)
        {
            Stop_Active_Machine();
            if (m_Live_Data_Die)
            {
                m_Live_Data_Die.OnValueChanged.RemoveListener(On_Live_Data_Bed_Die_Change);
            }
        }
    }

    private void Stop_Active_Machine()
    {
        m_Anim_Collect.DOKill(false);
        m_Tween_Progress.Do_Kill();
        m_Tween_Scale.Do_Kill();
        m_Model_Machine.transform.localScale = new Vector3(1, 1, 1);
        m_Progress_Machine.gameObject.Set_Active(false);
    }

    private void Start_Turn_On_Machine()
    {
        m_Tween_Progress.Do_Kill();
        m_Tween_Progress = DOVirtual.Float(0f, 1f, 10f, x =>
        {
            m_Progress_Machine.localScale = new Vector3(x, 1, 1);
        }).SetEase(Ease.Linear).OnComplete(() => 
        {
            Play_Anim_Machine_Collect();
        });
    }

    private void Play_Anim_Machine_Collect()
    {
        m_Progress_Machine.localScale = new Vector3(0, 1, 1);

        m_Tween_Scale.Do_Kill();
        m_Tween_Scale = m_Model_Machine.DOScale(new Vector3(1.2f, 1.2f, 1.2f), 0.125f)
            .SetEase(Ease.Linear).OnComplete(() =>
            {
                m_Anim_Collect.gameObject.Set_Active(true);
                // TODO: Play Effect coin bay ra

                if (m_Effect_Coin_Machine)
                {
                    m_Effect_Coin_Machine.gameObject.Set_Active(true);
                    m_Effect_Coin_Machine.Play();
                }

                m_Coin_Increase = Get_Coin_Minner();

                if (m_Coin_Increase > 0)
                {
                    Update_UI();

                    Play_Anim_Collect(() =>
                    {
                        Start_Turn_On_Machine();
                    });
                }

                m_Tween_Scale = m_Model_Machine.DOScale(new Vector3(1f, 1f, 1f), 0.125f).SetEase(Ease.Linear);
            });
    }

    private void Play_Anim_Collect(Action action_Done)
    {
        if (Game_Controller.Get_Is_End_Level()) return;
        if (m_Room_Controller && m_Room_Controller.Get_Bed_Controller() == null) return;

        if (type_Player != Type_Player.None)
        {
            Check_Data_Player();
            if (data_Player)
            {
                Increase_Coin_In_Background();
            }
        }
        if (action_Done != null)
        {
            action_Done.Invoke();
        }

        m_Anim_Collect.DOKill(false);
        m_Anim_Collect.Play_Anim_Collect_Dotween(() =>
        {
            m_Anim_Collect.gameObject.Set_Active(false);
        });
    }

    private void Increase_Coin_In_Background()
    {
        if (data_Player && type_Player != Type_Player.None)
        {
            if (m_Bed_Controller == null)
            {
                m_Bed_Controller = m_Room_Controller.Get_Bed_Controller();
            }
            if (m_Bed_Controller)
            {
                m_Bed_Controller.Increase_Coin_From_Other(m_Coin_Increase);
            }
        }
    }

    private int Get_Coin_Minner()
    {
        if (m_Bed_Controller)
        {
            int reward_Coin = (m_Bed_Controller.Get_Coin_In_Bed() *
                UnityEngine.Random.Range(20, 30)) / (Game_Controller.Instance.Get_Minutes() + 1);

            return reward_Coin;
        }

        return 0;
    }

    private void Update_UI()
    {
        if (m_Txt_Coin)
        {
            m_Txt_Coin.text = "+" + m_Coin_Increase;
        }
    }
}
