using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Newtonsoft.Json;

public class Json_Helper
{
    public static T[] FromJson<T>(string json)
    {
        //var wrapper = JsonUtility.FromJson<Wrapper<T>>(json);
        // var wrapper = JsonUtility.FromJson<Wrapper<T>>(json);
        // return wrapper.Items;
        
        var wrapper = JsonConvert.DeserializeObject<Wrapper<T>>(json);
        return wrapper.Items;
    }

    public static string ToJson<T>(T[] array)
    {
        var wrapper = new Wrapper<T> { Items = array };
        return JsonConvert.SerializeObject(wrapper, Formatting.None);
    }

    [Serializable]
    private class Wrapper<T>
    {
        public T[] Items;
    }
}
