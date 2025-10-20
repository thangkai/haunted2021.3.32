namespace  Game_Play.Xekotoby.Pooling
{
    using UnityEngine;

    [CreateAssetMenu(fileName = "Effect Data", menuName = " Object BZK/Data/Effect/Effect Data")]
    public class EffectData : ScriptableObject
    {
        public GameObject effectPrefab;
        public float duration;
    }

}