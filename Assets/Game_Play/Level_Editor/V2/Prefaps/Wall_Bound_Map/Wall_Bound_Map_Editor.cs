using UnityEditor;
using UnityEngine;

#if UNITY_EDITOR
[CustomEditor(typeof(Wall_Bound_Map))]
[CanEditMultipleObjects]
public class Wall_Bound_Map_Editor : Editor
{
    public override void OnInspectorGUI()
    {
        DrawDefaultInspector();

        Wall_Bound_Map myScript = (Wall_Bound_Map)target;
        if (GUILayout.Button("Compress Data"))
        {
            myScript.Compress_Data();
        }
    }
}
#endif
