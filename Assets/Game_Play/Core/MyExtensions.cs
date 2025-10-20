using DG.Tweening;
using DG.Tweening.Plugins.Options;
using System;
using System.Collections.Generic;
using Haunted;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public static class MyExtensions
{
    private static System.Random rng = new System.Random();

    public static void Shuffle<T>(this IList<T> list)
    {
        int n = list.Count;
        while (n > 1)
        {
            n--;
            int k = rng.Next(n + 1);
            T value = list[k];
            list[k] = list[n];
            list[n] = value;
            
        }
    }

    public static void Move<T>(this List<T> list, int oldIndex, int newIndex)
    {
        var item = list[oldIndex];

        list.RemoveAt(oldIndex);

        if (newIndex > oldIndex) newIndex--;
        // the actual index could have shifted due to the removal

        list.Insert(newIndex, item);
    }

    public static void Move<T>(this List<T> list, T item, int newIndex)
    {
        if (item != null)
        {
            var oldIndex = list.IndexOf(item);
            if (oldIndex > -1)
            {
                list.RemoveAt(oldIndex);

                if (newIndex > oldIndex) newIndex--;
                // the actual index could have shifted due to the removal

                list.Insert(newIndex, item);
            }
        }
    }

    public static int Round_To_Int_Neareast(this float input)
    {
        float delta = input - (int)input;
        if (delta >= 0.5f)
        {
            if(input >= 0)
            {
                return (int)input + 1;
            }
            else
            {
                return (int)input - 1;
            }
        }
        return (int)input;
    }

    public static string Convert_ListInt_To_String(this List<int> list)
    {
        string output = "";
        if(list != null && list.Count > 0)
        {
            for (int i = 0; i < list.Count; i++)
            {
                output += list[i];
                if(i < list.Count - 1)
                {
                    output += "|";
                }
            }
        }
        return output;
    }

    public static List<int> Convert_String_To_ListInt(this string input)
    {
        List<int> output = new List<int>();

        if (!string.IsNullOrEmpty(input))
        {
            if (input.Contains("|"))
            {
                var arrInt = input.Split('|');
                for (int i = 0; i < arrInt.Length; i++)
                {
                    output.Add_String_To_ListInt(arrInt[i]);
                }
            }
            else
            {
                output.Add_String_To_ListInt(input);
            }
        }
        else
        {
            output.Add_String_To_ListInt(input);
        }

        return output;
    }

    public static void Add_String_To_ListInt(this List<int> data, string value)
    {
        if (string.IsNullOrEmpty(value)) return;
        try
        {
            var valueInt = Int32.Parse(value);
            data.Add(valueInt);
        }
        catch (Exception e)
        {
            Debug.Log("value = " + value + " | " + e.ToString());
        }
    }

    public static Vector2Int To_Vector2Int(this Vector3 input)
    {
        return new Vector2Int(input.x.Round_To_Int_Neareast(), input.y.Round_To_Int_Neareast());
    }

    public static Vector2Int To_Vector2Int(this Vector2 input)
    {
        return new Vector2Int(input.x.Round_To_Int_Neareast(), input.y.Round_To_Int_Neareast());
    }

    //public static void Update_Status_Rigidbody2D(this Rigidbody2D rb, Status_Rigidbody status)
    //{
    //    switch (status)
    //    {
    //        case Status_Rigidbody.Static:

    //            break;

    //        case Status_Rigidbody.Move:
    //            break;
    //    }
    //}
    public static void SetLeft(this RectTransform rt, float left)
    {
        rt.offsetMin = new Vector2(left, rt.offsetMin.y);
    }

    public static void SetRight(this RectTransform rt, float right)
    {
        rt.offsetMax = new Vector2(-right, rt.offsetMax.y);
    }

    public static void SetTop(this RectTransform rt, float top)
    {
        rt.offsetMax = new Vector2(rt.offsetMax.x, -top);
    }

    public static void SetBottom(this RectTransform rt, float bottom)
    {
        rt.offsetMin = new Vector2(rt.offsetMin.x, bottom);
    }

    public static void Set_Active(this GameObject obj, bool isActive)
    {
        if (obj)
        {
            obj.SetActive(isActive);
        }
    }

    public static void Set_Text(this TextMeshPro obj, string value)
    {
        if (obj && !string.IsNullOrEmpty(value))
        {
            obj.text = value;
        }
    }

    public static void Set_Text(this TextMeshProUGUI obj, string value)
    {
        if (obj)
        {
            obj.text = value;
        }
    }

    public static void Set_Text(this TextMeshProUGUI obj, int value)
    {
        if (obj)
        {
            obj.text = value.ToString();
        }
    }

    public static void Set_Text_To_Time(this TextMeshProUGUI input, int currentTime)
    {
        if (input)
        {
            if(currentTime < 3600)
            {
                var timeSpan = TimeSpan.FromSeconds(currentTime);
                input.text = string.Format("{0:D2}:{1:D2}", timeSpan.Minutes, timeSpan.Seconds);
            }
            else
            {
                input.Set_Text_To_Time_Hour(currentTime);
            }
        }
    }
    
    
    public static void Set_Text_To_Time_Free_Key(this TextMeshProUGUI input, int currentTime, string s )
    {
        if (input)
        {
            if(currentTime < 3600)
            {
                var timeSpan = TimeSpan.FromSeconds(currentTime);
                input.text = s +   "<color=#FFFF00><b>"   +string.Format("{0:D2}:{1:D2}", timeSpan.Minutes, timeSpan.Seconds) +  "</b></color> ";
            }
            else
            {
                input.Set_Text_To_Time_Hour(currentTime,s);
            }
        }
    }
    
    public static void Set_Text_To_Time_Hour(this TextMeshProUGUI input, int currentTime , string s )
    {
        if (input)
        {
            var timeSpan = TimeSpan.FromSeconds(currentTime);
            input.text =  s +   "<color=#FFFF00><b>" +  string.Format("{0:D2}:{1:D2}:{2:D2}", timeSpan.Hours, timeSpan.Minutes, timeSpan.Seconds)+  "</b></color> ";
        }
    }


    public static void Set_Text_To_Time_Hour(this TextMeshProUGUI input, int currentTime)
    {
        if (input)
        {
            var timeSpan = TimeSpan.FromSeconds(currentTime);
            input.text = string.Format("{0:D2}:{1:D2}:{2:D2}", timeSpan.Hours, timeSpan.Minutes, timeSpan.Seconds);
        }
    }

    public static void Set_Text_To_Time(this Text input, int currentTime)
    {
        if (input)
        {
            var timeSpan = TimeSpan.FromSeconds(currentTime);
            input.text = string.Format("{0:D2}:{1:D2}", timeSpan.Minutes, timeSpan.Seconds);
        }
    }

    public static bool Find_Point_In_Rectangle(Vector2 point_A, Vector2 point_B, Vector2 point_Check)
    {
        if (point_Check.x > point_A.x && point_Check.x < point_B.x 
            && point_Check.y > point_A.y && point_Check.y < point_B.y)
        {
            return true;
        }

        return false;
    }

    public static int Get_TimeStamp(this DateTime dateTime)
    {
        DateTime epochStart = new DateTime(1970, 1, 1, 0, 0, 0, System.DateTimeKind.Utc);
        int cur_time = (int)(dateTime - epochStart).TotalSeconds;//System.DateTime.UtcNow
        return cur_time;
    }

    public static int Get_TimeStamp_Not_Second(this DateTime dateTime)
    {
        DateTime epochStart = new DateTime(1970, 1, 1, 0, 0, 0, System.DateTimeKind.Utc);

        DateTime input = new DateTime(dateTime.Year, dateTime.Month, dateTime.Day, 0, 0, 0, System.DateTimeKind.Utc);

        int cur_time = (int)(input - epochStart).TotalSeconds;//System.DateTime.UtcNow
        return cur_time;
    }

    public static int Get_TimeStamp_Day(this DateTime dateTime)
    {
        DateTime epochStart = new DateTime(1970, 1, 1, 0, 0, 0, System.DateTimeKind.Utc);
        int cur_time = (int)(dateTime - epochStart).TotalDays;//System.DateTime.UtcNow
        return cur_time;
    }

    public static int Get_TimeStamp_Seconds(this DateTime dateTime)
    {
        DateTime epochStart = new DateTime(1970, 1, 1, 0, 0, 0, System.DateTimeKind.Utc);
        int cur_time = (int)(dateTime - epochStart).TotalSeconds;//System.DateTime.UtcNow
        return cur_time;
    }

    public static DateTime TimeStamp_To_Date(this int timeStamp)
    {
        DateTime dateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
        dateTime = dateTime.AddSeconds(timeStamp);
        return dateTime;
    }

    public static int Get_Sub_Day(this DateTime dateTime1, DateTime dateTime2)
    {
        return dateTime1.Get_TimeStamp_Day() - dateTime2.Get_TimeStamp_Day();
    }

    public static int Get_Sub_Second(this DateTime dateTime1, DateTime dateTime2)
    {
        return dateTime1.Get_TimeStamp_Seconds() - dateTime2.Get_TimeStamp_Seconds();
    }

    public static void Play_Anim_Collect_Dotween(this Transform m_Anim_Collect_Coin, Action action_Done)
    {
        if (m_Anim_Collect_Coin)
        {
            m_Anim_Collect_Coin.localPosition = Vector3.zero;
            m_Anim_Collect_Coin.localScale = Vector3.zero;

            Play_Anim_Scale(m_Anim_Collect_Coin, 0, 1.1f, 0.5f);
            m_Anim_Collect_Coin.DOLocalMove(new Vector3(0, 0.325f, 0f), 0.5f).SetEase(Ease.Linear).OnComplete(() =>
            {
                if (m_Anim_Collect_Coin)
                {
                    Play_Anim_Scale(m_Anim_Collect_Coin, 1.1f, 1f, 0.25f);

                    m_Anim_Collect_Coin.DOLocalMove(new Vector3(0, 0.55f, 0f), 0.25f).SetEase(Ease.Linear).OnComplete(() =>
                    {
                        if (m_Anim_Collect_Coin)
                        {
                            Play_Anim_Scale(m_Anim_Collect_Coin, 1f, 0f, 0.25f);
                            m_Anim_Collect_Coin.DOLocalMove(new Vector3(0, 0.65f, 0f), 0.25f).SetEase(Ease.Linear).OnComplete(() =>
                            {
                                if (action_Done != null)
                                {
                                    action_Done.Invoke();
                                }
                            });
                        }
                        
                    });
                }
            });
        }
    }

    private static void Play_Anim_Scale(Transform m_Anim_Collect_Coin, float start, float end, float duration)
    {
        float scale = start;

        DOTween.To(() => scale, x => scale = x, end, duration).OnUpdate(() =>
        {
            if (m_Anim_Collect_Coin)
            {
                m_Anim_Collect_Coin.localScale = new Vector3(scale, scale, scale);
            }
        });
    }

    public static void PLay_Effect(this ParticleSystem m_Effect_Upgrade, bool is_Active, bool is_Auto_Hide = true)
    {
        if (m_Effect_Upgrade)
        {
            m_Effect_Upgrade.gameObject.Set_Active(is_Active);
            if (is_Active)
            {
                m_Effect_Upgrade.Play();
                if (is_Auto_Hide)
                {
                    DOVirtual.DelayedCall(m_Effect_Upgrade.main.duration, () => {
                        if (m_Effect_Upgrade)
                        {
                            m_Effect_Upgrade.gameObject.Set_Active(false);
                        }
                    }, false);
                }
            }
        }
    }

    public static void Update_Color_Materal(this Material mat, MeshRenderer meshRenderer, Color color, string key = "_Color")
    {
        if (mat)
        {
            mat.SetColor(key, color);
            meshRenderer.material = mat;

            //Material[] aaa = meshRenderer.materials;
            //aaa[0].SetColor(key, color);
            //meshRenderer.materials = aaa;
        }
    }

    public static void Play_Effect(this ParticleSystem effect)
    {
        if (effect)
        {
            effect.Play();
        }
    }

    public static bool Is_Pointer_Over_UI_Object()
    {
        PointerEventData eventDataCurrentPosition = new PointerEventData(EventSystem.current);
        eventDataCurrentPosition.position = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
        List<RaycastResult> results = new List<RaycastResult>();
        EventSystem.current.RaycastAll(eventDataCurrentPosition, results);

        for (int i = 0; i < results.Count; i++)
        {
            if (results[i].gameObject.layer == 5) //5 = UI layer
            {
                return true;
            }
        }

        return false;
    }

    public static bool Equal_Id_Room(this Room_Controller room_Controller, Room_Controller other_Room)
    {
        if (room_Controller == null || other_Room == null)
        {
            return false;
        }
        return room_Controller.transform.GetInstanceID() == other_Room.transform.GetInstanceID();
    }

    public static Type_Direction Get_Type_Direction(this Vector3 from, Vector3 target)
    {
        from = new Vector3(from.x.Round_To_Int_Neareast(), from.y.Round_To_Int_Neareast());
        target = new Vector3(target.x.Round_To_Int_Neareast(), target.y.Round_To_Int_Neareast());

        if (from.x == target.x)
        {
            if (target.y > from.y)
            {
                return Type_Direction.Top;
            }
            return Type_Direction.Bottom;
        }
        else
        {
            if (target.x > from.x)
            {
                return Type_Direction.Right;
            }
            return Type_Direction.Left;
        }
    }

    // return Huong vuong goc voi input theo chieu kiem dong ho
    public static Type_Direction Get_Corner_Direction_By_Clock(this Type_Direction from)
    {
        switch (from)
        {
            case Type_Direction.Top: return Type_Direction.Right;
            case Type_Direction.Left: return Type_Direction.Top;
            case Type_Direction.Right: return Type_Direction.Bottom;
            case Type_Direction.Bottom: return Type_Direction.Left;
        }
        return from;
    }

    // return Huong vuong goc voi input nguoc chieu kiem dong ho
    public static Type_Direction Get_Corner_Direction_By_Reflect_Clock(this Type_Direction from)
    {
        switch (from)
        {
            case Type_Direction.Top: return Type_Direction.Left;
            case Type_Direction.Left: return Type_Direction.Bottom;
            case Type_Direction.Right: return Type_Direction.Top;
            case Type_Direction.Bottom: return Type_Direction.Right;
        }
        return from;
    }

    public static Vector3 Get_Straight_Pos(this Vector3 from, Type_Direction type_Direction)
    {
        switch (type_Direction)
        {
            case Type_Direction.Top:
                from.y += 1;
                break;

            case Type_Direction.Left:
                from.x -= 1;
                break;

            case Type_Direction.Right:
                from.x += 1;
                break;

            case Type_Direction.Bottom:
                from.y -= 1;
                break;
        }
        from.x = from.x.Round_To_Int_Neareast();
        from.y = from.y.Round_To_Int_Neareast();
        return from;
    }

    public static void Do_Kill(this DG.Tweening.Core.TweenerCore<float, float, FloatOptions> tween)
    {
        if (tween != null)
        {
            tween.Kill(false);
            tween = null;
        }
    }

    public static void Do_Kill(this DG.Tweening.Core.TweenerCore<Vector3, Vector3, VectorOptions> tween)
    {
        if (tween != null)
        {
            tween.Kill(false);
            tween = null;
        }
    }

    public static void Do_Kill(this Tween tween)
    {
        if (tween != null)
        {
            tween.Kill(false);
            tween = null;
        }
    }

    public static void Destroy_All_Children(this Transform transform)
    {
        if (transform)
        {
            for (int i = transform.childCount - 1; i >= 0; i--)
            {
                GameObject.Destroy(transform.GetChild(i).gameObject);
            }
        }
    }

    public static int Check_Contain(this List<Type_Character> data, Type_Character typeCharacter)
    {
        if (data == null || data.Count <= 0)
        {
            return -1;
        }

        for (int i = 0; i < data.Count; i++)
        {
            if (data[i] == typeCharacter)
            {
                return i;
            }
        }

        return -1;
    }
    
    
    
    
    public static int Check_Contain(this List<Base_Update> data, Base_Update typeCharacter)
    {
        if (data == null || data.Count <= 0 ||typeCharacter ==null )
        {
            return -1;
        }

        for (int i = 0; i < data.Count; i++)
        {
            if ( data[i]!=null && data[i].transform.GetInstanceID() == typeCharacter.transform.GetInstanceID() )
            {
                return i;
            }
        }

        return -1;
    }
}
