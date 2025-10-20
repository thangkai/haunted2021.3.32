
using TMPro;
using UnityEngine;

using UnityEngine.Pool;



public class Pool_Text : MonoBehaviour
{
    public TextMeshPro system;
    public SimplePool<TextMeshPro> pool;

    void Start()
    {
        system = GetComponent<TextMeshPro>();
        //var main = system.main;
        //main.stopAction = ParticleSystemStopAction.Callback;
    }

    void OnParticleSystemStopped()
    {
        // Return to the pool
        pool.Release(system);
    }
}


