// public enum Type_Sound
// {
//     click,
//     back
// }

namespace Game_Play.Xekotoby.Pooling
{
    using System.Collections.Generic;
    using UnityEngine;
    using UnityEngine.Audio;

    public class AudioManager : Singleton<AudioManager>
    {
        private Queue<SoundController> audioSources = new Queue<SoundController>();
        private List<SoundController> soundUsingSources = new List<SoundController>();
        private List<SoundController> musicUsingSources = new List<SoundController>();

        [SerializeField]
        private SoundController soundControlPrefab;

        [SerializeField]
        private int initAudioSouceNumber = 10;

        [SerializeField]
        private int extendAudioSouceNumber = 5;

        [SerializeField]
        private float recyleAudioSourceRate = 1f;

        [SerializeField] private AudioMixer gameMixer;
        [SerializeField] private AudioMixerGroup musicGroupMixer;
        [SerializeField] private AudioMixerGroup soundGroupMixer;

        private SoundController tempSoundControl;
        private SoundData tempSoundData;

        private bool isMute;
        private bool isSoundMute;
        private bool isMusicMute;

        private const string musicVolumeString = "MusicVolume";
        private const string soundVolumeString = "SoundVolume";
        private const string masterVolumeString = "MasterVolume";

        public static void Play_Sounds(Type_Sound type_Sound)
        {
            if (Instance)
            {
                Instance.PlaySound(type_Sound);
            }
        }

        private void Start()
        {
            AddAudioSourcePool(this.initAudioSouceNumber);

            InvokeRepeating(nameof(RecycleAudioSouce), 0f, this.recyleAudioSourceRate);
        }
        public void ChangeMasterVolumeState(bool state)
        {
            this.isMute = !state;
            this.gameMixer.SetFloat(masterVolumeString, this.isMute ? -80f : 0f);
        }

        public void ChangeSoundVolumeState(bool state)
        {
            this.isSoundMute = !state;
            //UtilGame.SetDataBool(UtilGame.KEY_IS_SOUND_MUTE, this.isSoundMute);
            
            //TODO
          //  UtilGame.SetSoundMute(this.isSoundMute);
            this.gameMixer.SetFloat(soundVolumeString, this.isSoundMute ? -80f : 0f);
        }

        public void ChangeMusicVolumeState(bool state)
        {
            this.isMusicMute = !state;
            //UtilGame.SetDataBool(UtilGame.KEY_IS_MUSIC_MUTE, this.isMusicMute);
            //TODO
           // UtilGame.SetMusicMute(this.isMusicMute);
            this.gameMixer.SetFloat(musicVolumeString, this.isMusicMute ? -80f : 0f);
        }
        private void RecycleAudioSouce()
        {
            //Debug.LogError("BEFORE " + this.soundUsingSources.Count);
            for (int i = this.soundUsingSources.Count - 1; i >= 0; i--)
            {
                //TODO
                // if (this.soundUsingSources[i] && !this.soundUsingSources[i].IsPlaying)
                // {
                //     ReleaseSoundController(this.soundUsingSources[i]);
                //     this.soundUsingSources.RemoveAt(i);
                // }
            }
            //Debug.LogError("AFTER " + this.soundUsingSources.Count);
        }

        private void AddAudioSourcePool(int addNumber)
        {
            for (int i = 0; i < addNumber; i++)
            {
                this.tempSoundControl = Instantiate(this.soundControlPrefab, transform);
                ReleaseSoundController(this.tempSoundControl);
            }
        }

        private void ReleaseSoundController(SoundController soundControl)
        {
            soundControl.gameObject.SetActive(false);
            this.audioSources.Enqueue(soundControl);
        }

        private SoundController GetSoundController()
        {
            if (this.audioSources.Count <= 0)
            {
                //Extend pool
                AddAudioSourcePool(this.extendAudioSouceNumber);
            }

            this.tempSoundControl = this.audioSources.Dequeue();
            this.tempSoundControl.gameObject.SetActive(true);
            return this.tempSoundControl;
        }

        public void PlaySound(string soundName)
        {
            this.tempSoundControl = GetSoundController();
            //TODO
           // this.tempSoundData = GameData.Instance.GetSoundData(soundName);
            //this.tempSoundControl.PlaySound(GameData.Instance.GetSoundData(soundName));

            Play_Sound();
        }

        public void PlaySound(Type_Sound type_Sound)
        {
            this.tempSoundControl = GetSoundController();
            //TODO
            // this.tempSoundData = GameData.Instance.GetSoundData(type_Sound);
            // this.tempSoundControl.PlaySound(GameData.Instance.GetSoundData(type_Sound));

            Play_Sound();
        }

        private void Play_Sound()
        {
            if (tempSoundControl)
            {
                //TODO
                // if (this.tempSoundControl.IsLoop)
                // {
                //     if (musicUsingSources != null) this.musicUsingSources.Add(this.tempSoundControl);
                // }
                // else
                // {
                //     if (soundUsingSources != null) this.soundUsingSources.Add(this.tempSoundControl);
                // }
            }

        }
    }

}