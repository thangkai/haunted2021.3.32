namespace  Game_Play.Xekotoby.Pooling
{
    using System.Collections.Generic;
    using UnityEngine;

    [CreateAssetMenu(fileName = "All Effect Data", menuName = "Object BZK/Data/Effect/All Effect Data")]
    public class AllEffectData : ScriptableObject
    {
        [SerializeField]
        private EffectInfo[] allEffects;
        private Dictionary<string, EffectData> _allEffectDictionary = new Dictionary<string, EffectData>();

        private void OnEnable()
        {
            this._allEffectDictionary.Clear();
            for (int i = 0; i < this.allEffects.Length; i++)
            {
                this._allEffectDictionary.Add(this.allEffects[i].effectName, this.allEffects[i].effectData);
            }
        }

        public int GetEffectID(string effectName)
        {
            if (this._allEffectDictionary.ContainsKey(effectName))
            {
                return this._allEffectDictionary[effectName].effectPrefab.GetInstanceID();
            }
            return 0;
        }
    }

    [System.Serializable]
    public struct EffectInfo
    {
        public string effectName;
        public EffectData effectData;
    }

}