[System.Serializable]
public class TileMap
{
    public int width;
    public int height;
    //public string[] cats;
    public LayerData[] layers;
}

[System.Serializable]
public class Layers
{
    public LayerData[] layerData;
}

[System.Serializable]
public class LayerData
{
    public int[] data;
    public int height;
    public int id;
    public string name;
    public int opacity;
    public string type;
    public bool visible;
    public int width;
    public int x;
    public int y;
}
