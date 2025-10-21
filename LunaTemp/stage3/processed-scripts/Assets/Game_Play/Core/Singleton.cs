using UnityEngine;

public class Singleton<T> : MonoBehaviour where T : Singleton<T>
{
    public static T Instance;

    public static bool instanceExists
    {
        get { return Instance != null; }
    }

    // Start is called before the first frame update
    protected virtual void Awake()
    {
        if (instanceExists)
        {
            Destroy(gameObject);
        }
        else
        {
            Instance = (T)this;
        }
    }

    protected virtual void OnDestroy()
    {
        if (Instance == this)
        {
            Instance = null;
        }
    }
}
