using UnityEngine;


public class SingletonLate<T> : MonoBehaviour where T : MonoBehaviour
{
    public static T Instance { get; private set; }

    protected virtual void Start()
    {
        // DontDestroyOnLoad(gameObject);
        Instance = GetComponent<T>();
    }

    protected virtual void OnDestroy()
    {
        Instance = null;
    }
}

