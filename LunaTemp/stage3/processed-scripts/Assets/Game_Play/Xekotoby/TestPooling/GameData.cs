using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEngine;

namespace  Game_Play.Xekotoby.Pooling
{
    public class GameData : Singleton<GameData>
    {
        // public AudioData audioData;
        //
        public AllEffectData allEffectData;
        //
        // public AllSpriteData allSpriteData;
        //
        // public AllPathPositionData AllPathPositionData;
        //
        // public AllEnemyData allEnemyData;
        //
        // public SoundData GetSoundData(string soundName)
        // {
        //     return this.audioData.GetSoundData(soundName);
        // }
        //
        // public SoundData GetSoundData(Type_Sound type_Sound)
        // {
        //     return this.audioData.GetSoundData(type_Sound);
        // }

#if UNITY_EDITOR
        public static List<T> GetAllInstances<T>() where T : ScriptableObject
        {
            return AssetDatabase.FindAssets($"t: {typeof(T).Name}").ToList()
                .Select(AssetDatabase.GUIDToAssetPath)
                .Select(AssetDatabase.LoadAssetAtPath<T>)
                .ToList();
        }
#endif
        //
        //     public AllSpriteData Get_Data_Sprites()
        //     {
        //         return this.allSpriteData;
        //     }
        //
        //     [SerializeField] private Data_Player_Manager m_Data_Player_Manager;
        //
        //     public Data_Player_Manager Get_Data_Player_Manager()
        //     {
        //         return this.m_Data_Player_Manager;
        //     }
        //
        //     [SerializeField] private Data_Support_Character_Manager m_Data_Support_Character_Manager;
        //
        //     public Data_Support_Character_Manager Get_Data_Support_Character_Manager()
        //     {
        //         return this.m_Data_Support_Character_Manager;
        //     }
        //
        //     [SerializeField] private Data_Skill_Manager m_Data_Skill_Manager;
        //
        //     public Data_Skill_Manager Get_Data_Skill_Manager()
        //     {
        //         return this.m_Data_Skill_Manager;
        //     }
        // }

    }
}