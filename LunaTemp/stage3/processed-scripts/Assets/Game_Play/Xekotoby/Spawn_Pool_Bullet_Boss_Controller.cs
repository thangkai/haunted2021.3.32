using System;
using UnityEngine;

using UnityEngine.SceneManagement;
public class Spawn_Pool_Bullet_Boss_Controller : MonoBehaviour
{
    
    public static Spawn_Pool_Bullet_Boss_Controller Instance { get; private set; }

    private SimpleObjectPool<Bullet_Controller_Boss> _damegeLabelPopupPool;

    [Header("Damage Label Popup")]

    [SerializeField] private Bullet_Controller_Boss dameLabelPrefabs;

    [Header("Display Setup")]
    [Range(0.8f, 5f), SerializeField] public float displayLength = 1f;


    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }

      
 
        
    }

    public void Create_Bullet(Transform position)
    {
        _damegeLabelPopupPool = new SimpleObjectPool<Bullet_Controller_Boss>(
            () =>
            {
                Bullet_Controller_Boss damageLabel = Instantiate(dameLabelPrefabs, position);
                damageLabel.Initialize(displayLength, this);
                return damageLabel;
            },
            damageLabel => damageLabel.gameObject.SetActive(true),
            damageLabel => damageLabel.gameObject.SetActive(false)

        );
    }



 
    public Bullet_Controller_Boss SpawnDamagePopup(   )
    {
        
     //   Debug.LogError("SpawnDamagePopup");
        Bullet_Controller_Boss damageLabel = _damegeLabelPopupPool.Get();
        damageLabel.Display( );
        return damageLabel;
    }

    public void ReturnDamageLabelToPool(Bullet_Controller_Boss dameLable3D)
    {
        _damegeLabelPopupPool.Release(dameLable3D);
    }


}
