using System.Collections.Generic;
using UnityEngine;

public class Multi_Sound_Controller : MonoBehaviour
{
    [SerializeField] AudioClip m_Clip;
    [SerializeField] int m_Min_Sound = 1;
    [SerializeField] int m_Max_Sound = 10;
    [SerializeField] float m_Volume = 1f;
    [SerializeField] float m_Time_Avoid_Spam = 0.1f;

    [Header("_____ Setup Clear Data _____")]
    [SerializeField] bool m_Is_On_Clear_Data = true;
    [SerializeField] float m_Time_Clear_Data = 5f;

    [Header("___ Read Only ___")]
    [SerializeField] List<AudioSource> m_All_Audio_Waiting = new List<AudioSource>();
    [SerializeField] List<AudioSource> m_All_Audio_Playing = new List<AudioSource>();
    [SerializeField] List<float> m_Time_Start_Playing = new List<float>();
    [SerializeField] List<float> m_Time_End_Playing = new List<float>();

    bool m_Is_Timing_Spam;

    private void Start()
    {
        Init_Audio_Source();
    }

    private void Init_Audio_Source()
    {
        m_Is_Timing_Spam = false;
        m_Time_Start_Playing.Clear();
        m_Time_End_Playing.Clear();
        m_All_Audio_Waiting.Clear();
        m_All_Audio_Playing.Clear();

        for (int i = 0; i < m_Min_Sound; i++)
        {
            AudioSource audioSource = gameObject.AddComponent<AudioSource>();
            audioSource.volume = m_Volume;
            m_All_Audio_Waiting.Add(audioSource);
        }

        if (m_Is_On_Clear_Data)
        {
            Invoke(nameof(Clear_Temp_Source), m_Time_Clear_Data);
        }
    }

    private void Reset_Time_Spam()
    {
        m_Is_Timing_Spam = false;
    }

    float m_Time_Start_Spam;

    public void Play_Sound(bool is_Force_Spam, AudioClip clip = null)
    {
        if (!DataSaved.Get_Status_Sound())
        {
            return;
        }

        if (!is_Force_Spam && m_Is_Timing_Spam)
        {
            return;
        }
        m_Is_Timing_Spam = true;
        m_Time_Start_Spam = Time.unscaledTime;

        if (m_All_Audio_Waiting.Count > 0)
        {
            if (clip == null)
            {
                clip = m_Clip;
            }
            m_All_Audio_Waiting[m_All_Audio_Waiting.Count - 1].PlayOneShot(clip);

            // Move to Playing 
            m_All_Audio_Playing.Add(m_All_Audio_Waiting[m_All_Audio_Waiting.Count - 1]);
            m_All_Audio_Waiting.RemoveAt(m_All_Audio_Waiting.Count - 1);

            m_Time_Start_Playing.Add(Time.unscaledTime);
            m_Time_End_Playing.Add(clip.length);
        }
        else
        {
            if (m_All_Audio_Waiting.Count + m_Time_Start_Playing.Count < m_Max_Sound)
            {
                AudioSource audioSource = gameObject.AddComponent<AudioSource>();
                audioSource.volume = m_Volume;
                m_All_Audio_Waiting.Add(audioSource);
            }
        }
    }

    private void Update()
    {
        if (m_Is_Timing_Spam)
        {
            if (Time.unscaledTime - m_Time_Start_Spam > m_Time_Avoid_Spam)
            {
                m_Is_Timing_Spam = false;
            }
        }

        if (m_Time_Start_Playing.Count > 0)
        {
            if (Time.unscaledTime - m_Time_Start_Playing[0] >= m_Time_End_Playing[0])
            {
                Update_Status_Waiting();
                m_Time_Start_Playing.RemoveAt(0);
                m_Time_End_Playing.RemoveAt(0);
            }
        }
    }

    private void Update_Status_Waiting()
    {
        if (m_All_Audio_Playing.Count > 0)
        {
            m_All_Audio_Waiting.Add(m_All_Audio_Playing[0]);
            m_All_Audio_Playing.RemoveAt(0);
        }

        CancelInvoke(nameof(Clear_Temp_Source));
        Invoke(nameof(Clear_Temp_Source), m_Time_Clear_Data);
    }

    private void Clear_Temp_Source()
    {
        for (int i = m_All_Audio_Waiting.Count - 1; i >= m_Min_Sound; i--)
        {
            Destroy(m_All_Audio_Waiting[i]);
            m_All_Audio_Waiting.RemoveAt(i);
        }
    }
}
