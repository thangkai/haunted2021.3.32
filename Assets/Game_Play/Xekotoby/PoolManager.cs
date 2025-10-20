
using UnityEngine;


public class PoolManager : MonoBehaviour
{
    public static PoolManager Instance { get; private set; }

    private SimpleObjectPool<Bullet_Controller_Boss> _bossBulletPool;
    private SimpleObjectPool<Bullet_Controller> _regularBulletPool;

    [Header("Boss Bullet Pool")]
    [SerializeField] private Bullet_Controller_Boss bossBulletPrefab;
    [SerializeField] private Transform bossBulletParent;
    [SerializeField] private int bossBulletInitialSize = 10;
    [SerializeField] private float bossDisplayLength = 1f;

    [Header("Regular Bullet Pool")]
    [SerializeField] private Bullet_Controller regularBulletPrefab;
    [SerializeField] private Transform regularBulletParent;
    [SerializeField] private int regularBulletInitialSize = 10;
    [SerializeField] private float regularDisplayLength = 1f;

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

        InitializePools();
    }

    private void InitializePools()
    {
        _bossBulletPool = new SimpleObjectPool<Bullet_Controller_Boss>(
            () =>
            {
                Bullet_Controller_Boss bullet = Instantiate(bossBulletPrefab, bossBulletParent);
              //  bullet.Initialize(bossDisplayLength);
                return bullet;
            },
            bullet => bullet.gameObject.SetActive(true),
            bullet => bullet.gameObject.SetActive(false)
        );

        for (int i = 0; i < bossBulletInitialSize; i++)
        {
            var bullet = _bossBulletPool.Get();
            _bossBulletPool.Release(bullet);
        }

        _regularBulletPool = new SimpleObjectPool<Bullet_Controller>(
            () =>
            {
                Bullet_Controller bullet = Instantiate(regularBulletPrefab, regularBulletParent);
                //bullet.Initialize(regularDisplayLength);
                return bullet;
            },
            bullet => bullet.gameObject.SetActive(true),
            bullet => bullet.gameObject.SetActive(false)
        );

        for (int i = 0; i < regularBulletInitialSize; i++)
        {
            var bullet = _regularBulletPool.Get();
            _regularBulletPool.Release(bullet);
        }
    }

    public Bullet_Controller_Boss SpawnBossBullet()
    {
        return _bossBulletPool.Get();
    }

    public Bullet_Controller SpawnRegularBullet(Transform transformPos)
    {
        Bullet_Controller bullet = _regularBulletPool.Get();
        bullet.transform.SetParent(transformPos); // Gán
        bullet.Display(); // Gọi Display để kích hoạt logic hiển thị (nếu có)
        return bullet;
    }
    public void DespawnBossBullet(Bullet_Controller_Boss bullet)
    {
        _bossBulletPool.Release(bullet);
    }

    public void DespawnRegularBullet(Bullet_Controller bullet)
    {
        _regularBulletPool.Release(bullet);
    }
}