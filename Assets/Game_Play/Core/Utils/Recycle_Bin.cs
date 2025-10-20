using UnityEngine;

public class Recycle_Bin : Singleton<Recycle_Bin>
{
    public void On_Restart()
    {
        foreach (Transform item in transform)
        {
            Destroy(item.gameObject);
        }
    }

    [SerializeField] LayerMask m_Layer_Boss;
    Collider2D[] colliders;
    Base_Boss m_Tmp_Boss;

    public void Play_Effext_Exploresion_Fire(Vector3 pos, float damage)
    {
        var obj_Explosion = Instantiate(Data_In_Game.Instance.Get_Data_Effect().Get_Effect_Explosion_Fire(), transform);
        obj_Explosion.transform.position = pos;
        Effect_With_Skeleton effect_With_Skeleton = obj_Explosion.GetComponent<Effect_With_Skeleton>();
        if (effect_With_Skeleton)
        {
            effect_With_Skeleton.Play_Animation_Explosion_Fire(1f);
        }
        // End Anim
        colliders = Physics2D.OverlapCircleAll(pos, 1f, m_Layer_Boss);
        if (colliders != null && colliders.Length > 0)
        {
            for (int i = 0; i < colliders.Length; i++)
            {
                m_Tmp_Boss = colliders[i].GetComponent<Base_Boss>();
                if (m_Tmp_Boss)
                {
                    m_Tmp_Boss.Take_Damage(damage, false);
                }
            }
        }
    }

}
