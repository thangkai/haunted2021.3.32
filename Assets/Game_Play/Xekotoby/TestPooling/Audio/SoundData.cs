namespace Game_Play.Xekotoby.Pooling
{
   // using Sirenix.OdinInspector;
    using UnityEngine;

    [CreateAssetMenu(fileName = "Sound Data", menuName = "Object BZK/Data/Audio/Sound Data")]
   // [InlineEditor]
    [System.Serializable]
    public class SoundData : ScriptableObject
    {
        public string soundName;
        public AudioClip soundClip;
        public float volume = 1f;
        public float pitch = 1f;
        public bool isLoop = false;
    }

}