using Spine.Unity;
using UnityEngine;

[CreateAssetMenu(menuName = "Create Data/In Game/Data_Anim_Spine", fileName = "Data_Anim_Spine", order = 0)]
public class Data_Anim_Spine : ScriptableObject
{
    [SerializeField] SkeletonDataAsset[] m_Anim_Energy_Tower;

    public SkeletonDataAsset Get_Anim_Energy_Tower(int level)
    {
        if (level < 0)
        {
            level = 0;
        }
        if (level >= m_Anim_Energy_Tower.Length)
        {
            level = m_Anim_Energy_Tower.Length - 1;
        }
        return m_Anim_Energy_Tower[level];
    }
}
