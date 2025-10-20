using System;
using System.Collections.Generic;
using UnityEngine;

namespace Xekotoby
{
    [Serializable]
    public class SerializableDictionary<TKey, TValue> : ISerializationCallbackReceiver
    {
        [SerializeField] public List<TKey> keys = new List<TKey>();
        [SerializeField] public List<TValue> values = new List<TValue>();

        private Dictionary<TKey, TValue> dictionary = new Dictionary<TKey, TValue>();

        public TValue this[TKey key]
        {
            get => dictionary[key];
            set => dictionary[key] = value;
        }

        public int Count => dictionary.Count;

        public Dictionary<TKey, TValue> GetDictionary()
        {
            return dictionary;
        }

        public void Add(TKey key, TValue value)
        {
            if (!dictionary.ContainsKey(key))
            {
                dictionary.Add(key, value);
#if UNITY_EDITOR
                keys.Add(key);
                values.Add(value);
#endif
            }
        }
        public bool Remove(TKey key)
        {
            bool removed = dictionary.Remove(key);
#if UNITY_EDITOR
            if (removed)
            {
                int index = keys.IndexOf(key);
                if (index >= 0)
                {
                    keys.RemoveAt(index);
                    values.RemoveAt(index);
                }
            }
#endif
            return removed;
        }
        public bool TryGetValue(TKey key, out TValue value)
        {
            return dictionary.TryGetValue(key, out value);
        }

        public bool ContainsKey(TKey key)
        {
            return dictionary.ContainsKey(key);
        }

        public void Clear()
        {
            dictionary.Clear();
#if UNITY_EDITOR
            keys.Clear();
            values.Clear();
#endif
        }

        // ISerializationCallbackReceiver implementation
        public void OnBeforeSerialize()
        {
#if UNITY_EDITOR
            // Editor: đồng bộ Dictionary => List
            keys.Clear();
            values.Clear();
            foreach (var pair in dictionary)
            {
                keys.Add(pair.Key);
                values.Add(pair.Value);
            }
#endif
        }

        public void OnAfterDeserialize()
        {
            dictionary = new Dictionary<TKey, TValue>();

            for (int i = 0; i < Math.Min(keys.Count, values.Count); i++)
            {
                if (!dictionary.ContainsKey(keys[i]))
                {
                    dictionary.Add(keys[i], values[i]);
                }
            }
        }
    }
}
