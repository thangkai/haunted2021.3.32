using UnityEngine;

public enum Type_Sound
{
    Music,
    Play,
    Click,
    Back,
    Win,
    Lose,
    End_Game,
    Collect_Coin,
    Boss_Attack,
    Boss_Die,
    Boss_Appear,
    Count_Down,
    Buy_Turret,
    Upgrade_Turret,
    Character_Run,
    Boss_Receive_Damage,
    Pop_Up,
    Male_Die,
    Female_Die,
    Vampire_Use_Skill_A,
    Turret_1,
    Turret_2,
    Turret_3,
    Alert,
    Meteor_Fall,
    Meteor_Explosion,
}

public class SoundController : Singleton<SoundController>
{
    protected override void Awake()
    {
        base.Awake();
        // DontDestroyOnLoad(gameObject);
    }

    private void Start()
    {
        Play_Music(Type_Sound.Music);
    }

    #region ========= Static Method =================

    public static void Play_Sound_Clicks()
    {
        if (Instance)
        {
            Instance.Play_Sound_Click();
        }
    }

    public static void Play_Sound_Backs()
    {
        if (Instance)
        {
            Instance.Play_Sound_Back();
        }
    }

    public static void Play_Sound_Plays()
    {
        if (Instance != null)
        {
            Instance.Play_Sound_Play();
        }
    }

    public static void Toggle_Music_Click()
    {
        if (Instance)
        {
            Instance.Toggle_Music_OnClick();
        }
    }

    public static void Toggle_Sound_Click()
    {
        if (Instance)
        {
            Instance.Toggle_Sound_OnClick();
        }
    }



    public static void Play_Sounds(Type_Sound type_Sound)
    {
        if (Instance)
        {
            Instance.Play_Sound(type_Sound);
        }
    }

    public static void Stop_Sounds(Type_Sound type_Sound)
    {
        if (Instance)
        {
            Instance.Stop_Sound(type_Sound);
        }
    }

    public static void Play_Musics(Type_Sound type_Sound)
    {
        if (Instance)
        {
            Instance.Play_Music(type_Sound);
        }
    }

    public static void Play_Musics(bool is_On)
    {
        if (Instance)
        {
            Instance.Play_Music(is_On);
        }
    }

    #endregion

    [SerializeField] AudioSource m_AudioSource;
    [SerializeField] AudioSource m_AudioSource_Music;
    [SerializeField] Multi_Sound_Controller m_Multi_Sound;
    [SerializeField] Multi_Sound_Controller m_Multi_Sound_Boss;
    [SerializeField] Multi_Sound_Controller m_Multi_Sound_Boss_Attack;
    [SerializeField] Multi_Sound_Controller m_Multi_Sound_Turret;
    [SerializeField] AudioSource m_Audio_Player_Run;

    #region ============== Music ==============

    [Header("---------- Music ----------")]
    [SerializeField] AudioClip m_Clip_Music;

    public void Play_Music(bool is_On)
    {
        if (DataSaved.Get_Status_Music())
        {
            if (is_On)
            {
                m_AudioSource_Music.gameObject.SetActive(true);
                m_AudioSource_Music.clip = Get_AudioClip(Type_Sound.Music);
                m_AudioSource_Music.Play();
            }
            else
            {
                m_AudioSource_Music.gameObject.SetActive(false);
            }
        }
        else
        {
            m_AudioSource_Music.gameObject.SetActive(false);
        }
    }

    public void Play_Music(Type_Sound type_Sound)
    {
        if (DataSaved.Get_Status_Music())
        {
            m_AudioSource_Music.gameObject.SetActive(true);
            m_AudioSource_Music.clip = Get_AudioClip(type_Sound);
            m_AudioSource_Music.Play();
        }
        else
        {
            m_AudioSource_Music.gameObject.SetActive(false);
        }
    }

    public void Toggle_Music_OnClick()
    {
        DataSaved.Set_Status_Music(!DataSaved.Get_Status_Music());
        if (DataSaved.Get_Status_Music())
        {
            Play_Music(Type_Sound.Music);
        }
        else
        {
            m_AudioSource_Music.gameObject.SetActive(false);
        }
    }

    #endregion

    //[Header("---------- Vibration ----------")]
    

    #region ============== Sound ==============

    [Header("---------- Sound ----------")]
    [SerializeField] AudioClip[] m_All_Clips;

    public void Toggle_Sound_OnClick()
    {
        DataSaved.Set_Status_Sound(!DataSaved.Get_Status_Sound());
    }

    public void Play_Sound_Click()
    {
        Play_Sound(Type_Sound.Click);
    }

    public void Play_Sound_Back()
    {
        Play_Sound(Type_Sound.Back);
    }

    public void Play_Sound_Play()
    {
        Play_Sound(Type_Sound.Play);
    }

    public void Play_Sound(Type_Sound type_Sound)
    {
        if (DataSaved.Get_Status_Sound())
        {
            if (type_Sound == Type_Sound.Character_Run)
            {
                m_Audio_Player_Run.Play();
            }
            else
            {
                switch (type_Sound)
                {
                    case Type_Sound.Boss_Attack:
                        if (m_Multi_Sound_Boss_Attack)
                        {
                            m_Multi_Sound_Boss_Attack.Play_Sound(true, Get_AudioClip(type_Sound));
                        }
                        return;

                    case Type_Sound.Boss_Die:
                    case Type_Sound.Boss_Appear:
                    case Type_Sound.Boss_Receive_Damage:
                    case Type_Sound.Vampire_Use_Skill_A:
                        if (m_Multi_Sound_Boss)
                        {
                            m_Multi_Sound_Boss.Play_Sound(true, Get_AudioClip(type_Sound));
                        }
                        return;

                    case Type_Sound.Turret_1:
                    case Type_Sound.Turret_2:
                    case Type_Sound.Turret_3:
                        if (m_Multi_Sound_Turret)
                        {
                            m_Multi_Sound_Turret.Play_Sound(true, Get_AudioClip(type_Sound));
                        }
                        return;
                }

                if (m_Multi_Sound)
                {
                    if (type_Sound == Type_Sound.Meteor_Explosion || type_Sound == Type_Sound.Meteor_Fall)
                    {
                        m_Multi_Sound.Play_Sound(
    true, Get_AudioClip(type_Sound));
                    }
                    else
                    {
                        m_Multi_Sound.Play_Sound(
    false, Get_AudioClip(type_Sound));
                    }
                }
            }
        }
    }

    public void Stop_Sound(Type_Sound type_Sound)
    {
        if (DataSaved.Get_Status_Sound())
        {
            if (type_Sound == Type_Sound.Character_Run)
            {
                m_Audio_Player_Run.Pause();
            }
        }
    }

    public AudioClip Get_AudioClip(Type_Sound type_Sound)
    {
        return m_All_Clips[(int)type_Sound];
    }
    #endregion
}
