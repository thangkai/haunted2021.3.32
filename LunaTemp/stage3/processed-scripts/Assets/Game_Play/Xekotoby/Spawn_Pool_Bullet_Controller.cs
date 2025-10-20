
using UnityEngine;

public class Spawn_Pool_Bullet_Controller : MonoBehaviour
{
    
    public static Spawn_Pool_Bullet_Controller Instance { get; private set; }

    private SimpleObjectPool<Bullet_Controller> _damegeLabelPopupPool;

    [Header("Damage Label Popup")]

    [SerializeField] private Bullet_Controller dameLabelPrefabs;

    [Header("Display Setup")]
    [Range(0.8f, 1.5f), SerializeField] public float displayLength = 1f;
    private Camera _mainCamera;

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
        
        _damegeLabelPopupPool = new SimpleObjectPool<Bullet_Controller>(
            () =>
            {
                Bullet_Controller damageLabel = Instantiate(dameLabelPrefabs, position);
                damageLabel.Initialize(displayLength, this);
                return damageLabel;
            },
            damageLabel => damageLabel.gameObject.SetActive(true),
            damageLabel => damageLabel.gameObject.SetActive(false)

        );
    }



 
    public Bullet_Controller SpawnDamagePopup(   )
    {
        Bullet_Controller damageLabel = _damegeLabelPopupPool.Get();
        damageLabel.Display( );
        return damageLabel;
    }

    public void ReturnDamageLabelToPool(Bullet_Controller dameLable3D)
    {
        _damegeLabelPopupPool.Release(dameLable3D);
    }
    
   

   
}
