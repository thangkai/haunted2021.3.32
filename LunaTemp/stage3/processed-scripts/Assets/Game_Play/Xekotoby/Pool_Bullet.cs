using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pool_Bullet : MonoBehaviour
{
    private Spawn_Pool_Bullet_Controller  _poolManager;
    private float _displayDuaration; 
    private Coroutine _moveCoroutine;
    public void Initialize(float displayDuaration, Spawn_Pool_Bullet_Controller poolManager)
    {
        _poolManager = poolManager;
        _displayDuaration = displayDuaration;
    


    }
    public void Display(int damage, [Bridge.Ref] Vector3 objPostition, bool direction , bool isCrit)
    {
        transform.localPosition = objPostition;
     
        
        if (_moveCoroutine != null)
        {
            StopCoroutine(_moveCoroutine);
        }
    
        //StartCoroutine(ReturnDamageLabelToPool(_displayDuaration));

    }
    // private IEnumerator ReturnDamageLabelToPool(float displayLength)
    // {
    //     yield return new WaitForSeconds(displayLength);
    //     _poolManager.ReturnDamageLabelToPool(this);
    // }
}
