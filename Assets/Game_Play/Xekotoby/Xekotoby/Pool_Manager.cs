using UnityEngine;
using TMPro;


public class Pool_Manager : MonoBehaviour
{
    // Start is called before the first frame update
   public enum PoolType
    {
        Stack,
        LinkedList
    }

    public PoolType poolType;

    // Collection checks will throw errors if we try to release an item that is already in the pool.
    public bool collectionChecks = true;
    public int maxPoolSize = 10;

    SimplePool< TextMeshPro> m_Pool;

    public SimplePool<TextMeshPro> Pool
    {
        get
        {
            if (m_Pool == null)
            {
                if (poolType == PoolType.Stack)
                    m_Pool = new SimplePool<TextMeshPro>(CreatePooledItem, OnTakeFromPool, OnReturnedToPool, OnDestroyPoolObject, collectionChecks, 10, maxPoolSize);
                else
                    m_Pool = new SimplePool<TextMeshPro>(CreatePooledItem, OnTakeFromPool, OnReturnedToPool, OnDestroyPoolObject, collectionChecks, maxPoolSize);
            }
            return m_Pool;
        }
    }

    TextMeshPro CreatePooledItem()
    {
        var go = new GameObject("Pooled TMP");
        var ps = go.AddComponent<TextMeshPro>();
      //  ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
       // var main = ps.main;
      //  main.duration = 1;
       // main.startLifetime = 1;
        //main.loop = false;

        // This is used to return ParticleSystems to the pool when they have stopped.
        var returnToPool = go.AddComponent<Pool_Text>();
        returnToPool.pool = Pool;

        return ps;
    }

    // Called when an item is returned to the pool using Release
    void OnReturnedToPool(TextMeshPro system)
    {
        system.gameObject.SetActive(false);
    }

    // Called when an item is taken from the pool using Get
    void OnTakeFromPool(TextMeshPro system)
    {
        system.gameObject.SetActive(true);
    }

    // If the pool capacity is reached then any items returned will be destroyed.
    // We can control what the destroy behavior does, here we destroy the GameObject.
    void OnDestroyPoolObject(TextMeshPro system)
    {
        Destroy(system.gameObject);
    }

    // void OnGUI()
    // {
    //     GUILayout.Label("Pool size: " + Pool.CountInactive);
    //     if (GUILayout.Button("Create Particles"))
    //     {
    //         var amount = Random.Range(1, 10);
    //         for (int i = 0; i < amount; ++i)
    //         {
    //             var ps = Pool.Get();
    //             ps.transform.position = Random.insideUnitSphere * 10;
    //            
    //         }
    //     }
    // }
}
