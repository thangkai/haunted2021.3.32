using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class BG_Warning : MonoBehaviour
{
    [SerializeField] Material m_Material_Warning;
    [SerializeField] float m_Min_Alpha = 0.3f;
    [SerializeField] float m_Max_Alpha = 1f;
    [SerializeField] Image m_Img_Warning;

    float m_Curr_Alpha;
    bool m_Is_Active;

    private void Start()
    {
        gameObject.Set_Active(false);
        m_Img_Warning.enabled = true;
    }

    public void Show_Effect(bool is_Active)
    {
        m_Is_Active = is_Active;
        gameObject.Set_Active(is_Active);

        if (is_Active)
        {
            Play_Anim();
        }
    }

    private void Play_Anim()
    {
        if (m_Is_Active)
        {
            m_Curr_Alpha = m_Min_Alpha;
            DOTween.To(() => m_Curr_Alpha, x => m_Curr_Alpha = x, m_Max_Alpha, 1f).OnUpdate(() =>
            {
                Set_Alpha(m_Curr_Alpha);
            }).OnComplete(() => {

                if (m_Is_Active)
                {
                    m_Curr_Alpha = m_Max_Alpha;
                    DOTween.To(() => m_Curr_Alpha, x => m_Curr_Alpha = x, m_Min_Alpha, 1f).OnUpdate(() =>
                    {
                        Set_Alpha(m_Curr_Alpha);
                    }).OnComplete(() => {

                        if (m_Is_Active)
                        {
                            Play_Anim();
                        }
                    });
                } 
            });
        }
        
    }

    private void Set_Alpha(float alpha)
    {
        if (m_Material_Warning)
        {
            m_Material_Warning.SetFloat("_Alpha", alpha);
        }
    }
}
