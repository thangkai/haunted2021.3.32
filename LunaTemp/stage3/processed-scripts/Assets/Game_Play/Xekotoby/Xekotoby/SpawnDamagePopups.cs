using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using UnityEngine.SceneManagement;

public class SpawnDamagePopups : MonoBehaviour
{

    //   SpawnDamagePopups.Instance.DameDone(damage, exmpleLocationTarget, isCrit);


    public static SpawnDamagePopups Instance { get; private set; }

    private SimpleObjectPool<DameLabel> _damegeLabelPopupPool;

    [Header("Damage Label Popup")]

    [SerializeField] private DameLabel dameLabelPrefabs;

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

        _damegeLabelPopupPool = new SimpleObjectPool<DameLabel>(
            () =>
            {
                DameLabel damageLabel = Instantiate(dameLabelPrefabs, transform);
                damageLabel.Initialize(displayLength, this);
                return damageLabel;
            },
             damageLabel => damageLabel.gameObject.SetActive(true),
             damageLabel => damageLabel.gameObject.SetActive(false)

            );
        SceneManager.sceneLoaded += OnSceneLoaded;

        
    }
    private void OnDestroy()
    {
        SceneManager.sceneLoaded -= OnSceneLoaded;
    }

    private void OnSceneLoaded(Scene scene , LoadSceneMode mode)
    {
        _mainCamera = Camera.main;
    }
    public void DameDone(int damage, [Bridge.Ref] Vector3 position, bool isCrit)
    {
        //Vector3 screenPosition = _mainCamera.WorldToScreenPoint(position);
        //screenPosition.z = 0;
        //bool direction = screenPosition.x < Screen.width * 0.5f;
        SpawnDamagePopup(damage, position, false, isCrit);
    }
    private void SpawnDamagePopup( int damage, [Bridge.Ref] Vector3 position, bool direction, bool isCrit)
    {
        DameLabel damageLabel = _damegeLabelPopupPool.Get();
        damageLabel.Display(damage, position, direction, isCrit);
    }

    public void ReturnDamageLabelToPool(DameLabel dameLable3D)
    {
        _damegeLabelPopupPool.Release(dameLable3D);
    }







}
