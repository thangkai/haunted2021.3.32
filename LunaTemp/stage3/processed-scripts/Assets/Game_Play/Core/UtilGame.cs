using UnityEngine;

using System;
using TMPro;

public class UtilGame
{

    public const string url_rate = "https://play.google.com/store/apps/details?id=";

    public const string KEY_REMOVEADS = "KEY_REMOVEADS";
    public const string KEY_INSTALL = "KEY_INSTALL_GAME";
    public const string KEY_DATABASE = "KEY_DATABASE_TE@M_g@ame_Bzk";
    public const string KEY_DATABASE_Rev_Bzk = "KEY_DATABASE_Rev_Bzk_TE@M_g@ame_Bzk";

    public const string DATE_INITIALIZED = "date_initialized";
    public const string DAY_CHECK_SUB = "day_check_sub";
    public static string DayCheckSubscription
    {
        get => GetDataString(DAY_CHECK_SUB, "09/16/2000 12:00:00");
        set => SetDataString(DAY_CHECK_SUB, value);
    }

    public const string Time_INITIALIZED = "time_INITIALIZED";
    public static void SetDataString(string key, string value, string child = "none")
    {
        PlayerPrefs.SetString(key + "_" + child + "_" + Application.identifier, value);
        PlayerPrefs.Save();
    }

    public static string GetDataString(string key, string defualt = "none", string child = "none")
    {
        return PlayerPrefs.GetString(key + "_" + child + "_" + Application.identifier, defualt);
    }

    public static void SetDataInt(string key, int value, string child = "none")
    {
        PlayerPrefs.SetInt(key + "_" + child + "_" + Application.identifier, value);
        Debug.Log("KEY_OK : " + (key + "_" + child + "_" + Application.identifier));
        PlayerPrefs.Save();
    }

    public static int GetDataInt(string key, int defualt = 0, string child = "none")
    {
        return PlayerPrefs.GetInt(key + "_" + child + "_" + Application.identifier, defualt);
    }

    public static void SetDataFloat(string key, float value)
    {
        PlayerPrefs.SetFloat(key + "_" + Application.identifier, value);
        PlayerPrefs.Save();
    }

    public static float GetDataFloat(string key, float defualt = 0, string child = "none")
    {
        return PlayerPrefs.GetFloat(key + "_" + child + "_" + Application.identifier, defualt);
    }

    public static void SetDataDouble(string key, double value, string child = "none")
    {
        string fullKey = key + "_" + child + "_" + Application.identifier;
        PlayerPrefs.SetString(fullKey, value.ToString(System.Globalization.CultureInfo.InvariantCulture));
        PlayerPrefs.Save();
    }

    public static double GetDataDouble(string key, double defualt = 0, string child = "none")
    {
        string fullKey = key + "_" + child + "_" + Application.identifier;
        string strValue = PlayerPrefs.GetString(fullKey, defualt.ToString(System.Globalization.CultureInfo.InvariantCulture));
        if (double.TryParse(strValue, System.Globalization.NumberStyles.Float, System.Globalization.CultureInfo.InvariantCulture, out double result))
            return result;
        return defualt;
    }

    public static void SetDataBool(string key, bool value, string child = "none")
    {
        string fullKey = key + "_" + child + "_" + Application.identifier;
        PlayerPrefs.SetInt(fullKey, value ? 1 : 0);
        PlayerPrefs.Save();
    }

    public static bool GetDataBool(string key, bool defualt = false, string child = "none")
    {
        string fullKey = key + "_" + child + "_" + Application.identifier;
        int defVal = defualt ? 1 : 0;
        return PlayerPrefs.GetInt(fullKey, defVal) == 1;
    }

    #region Data Save Client

    public static int GetInt(string key, int adefault)
    {
        return PlayerPrefs.GetInt(key + "_none_" + Application.identifier, adefault);
    }

    public static void SetInt(string key, int value)
    {
        PlayerPrefs.SetInt(key + "_none_" + Application.identifier, value);
        PlayerPrefs.Save();
    }

    public static float GetFloat(string key, float adefualt)
    {
        return PlayerPrefs.GetFloat(key + "_none_" + Application.identifier, adefualt);
    }

    public static void SetFloat(string key, float value)
    {
        PlayerPrefs.SetFloat(key + "_none_" + Application.identifier, value);
        PlayerPrefs.Save();
    }

    public static void SetDouble(string key, double value)
    {
        string fullKey = key + "_none_" + Application.identifier;
        string valueStr = value.ToString(System.Globalization.CultureInfo.InvariantCulture);
        PlayerPrefs.SetString(fullKey, valueStr);
        PlayerPrefs.Save();
    }

    public static double GetDoubleU(string key, double adefualt)
    {
        string fullKey = key + "_none_" + Application.identifier;
        string strValue = PlayerPrefs.GetString(fullKey, adefualt.ToString(System.Globalization.CultureInfo.InvariantCulture));
        if (double.TryParse(strValue, System.Globalization.NumberStyles.Float, System.Globalization.CultureInfo.InvariantCulture, out double result))
            return result;
        return adefualt;
    }

    public static void SetBool(string key, bool value)
    {
        string fullKey = key + "_none_" + Application.identifier;
        PlayerPrefs.SetInt(fullKey, value ? 1 : 0);
        PlayerPrefs.Save();
    }

    public static bool GetBool(string key, bool adefualt)
    {
        string fullKey = key + "_none_" + Application.identifier;
        int defVal = adefualt ? 1 : 0;
        return PlayerPrefs.GetInt(fullKey, defVal) == 1;
    }

    public static string GetString(string key, string adefualt)
    {
        return PlayerPrefs.GetString(key + "_none_" + Application.identifier, adefualt);
    }

    public static void SetString(string key, string value)
    {
        PlayerPrefs.SetString(key + "_none_" + Application.identifier, value);
        PlayerPrefs.Save();
    }

    #endregion


    public static bool isHashkey(string key)
    {
        return PlayerPrefs.HasKey(key + "_none_" + Application.identifier);
    }

    public static bool isHashkeyData(string key, string child = "none")
    {
        return PlayerPrefs.HasKey(key + "_" + child + "_" + Application.identifier);
    }

    public static void DeleteKey(string key)
    {
        PlayerPrefs.DeleteKey(key + "_none_" + Application.identifier);
    }

    public static void DeleteKeyData(string key, string child = "none")
    {
        PlayerPrefs.DeleteKey(key + "_" + child + "_" + Application.identifier);
    }

    public static bool IsConnectionNetwork()
    {
        if (Application.internetReachability == NetworkReachability.NotReachable)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}