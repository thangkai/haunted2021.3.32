using System;
using System.Collections.Generic;
using UnityEngine;

public class SimpleObjectPool<T> where T : Component
{
    private readonly Stack<T> _pool = new Stack<T>();
    private readonly Func<T> _createFunc;
    private readonly Action<T> _onGet;
    private readonly Action<T> _onRelease;

    public SimpleObjectPool(Func<T> createFunc, Action<T> onGet = null, Action<T> onRelease = null)
    {
        _createFunc = createFunc ?? throw new ArgumentNullException(nameof(createFunc));
        _onGet = onGet;
        _onRelease = onRelease;
    }

    public T Get()
    {
        T item = _pool.Count > 0 ? _pool.Pop() : _createFunc();
        _onGet?.Invoke(item);
        return item;
    }

    public void Release(T item)
    {
        _onRelease?.Invoke(item);
        _pool.Push(item);
    }
}