using System;
using System.Collections.Generic;
using UnityEngine;

public class SimplePool<T>
{
    private readonly Func<T> _createFunc;
    private readonly Action<T> _onGet;
    private readonly Action<T> _onRelease;
    private readonly Action<T> _onDestroy;
    private readonly bool _collectionChecks;
    private readonly Stack<T> _stack;
    private readonly int _maxSize;

    public int CountInactive => _stack.Count;

    public SimplePool(
        Func<T> createFunc,
        Action<T> onGet,
        Action<T> onRelease,
        Action<T> onDestroy,
        bool collectionChecks,
        int defaultCapacity = 10,
        int maxSize = 100)
    {
        _createFunc = createFunc;
        _onGet = onGet;
        _onRelease = onRelease;
        _onDestroy = onDestroy;
        _collectionChecks = collectionChecks;
        _maxSize = maxSize;
        _stack = new Stack<T>(defaultCapacity);
    }

    public T Get()
    {
        var item = _stack.Count > 0 ? _stack.Pop() : _createFunc();
        _onGet?.Invoke(item);
        return item;
    }

    public void Release(T item)
    {
        if (_stack.Count < _maxSize)
        {
            _onRelease?.Invoke(item);
            _stack.Push(item);
        }
    }
}