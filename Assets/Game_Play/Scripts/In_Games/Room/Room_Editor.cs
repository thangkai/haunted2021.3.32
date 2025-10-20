using UnityEditor;
using UnityEngine;

#if UNITY_EDITOR
[CustomEditor(typeof(Room_Controller))]
[CanEditMultipleObjects]
public class Room_Editor : Editor
{
    public override void OnInspectorGUI()
    {
        DrawDefaultInspector();

        Room_Controller myScript = (Room_Controller)target;
        if (GUILayout.Button("Compress Data"))
        {
            myScript.Compress_Data();

            EditorUtility.SetDirty(target);
            PrefabUtility.RecordPrefabInstancePropertyModifications(target);
        }
    }
}
#endif