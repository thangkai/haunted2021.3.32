
using UnityEngine;
using System;
using System.Collections.Generic;

namespace Confifg_BY_ME
{
    
    [Serializable]
    public class Locks
    {
        public Vector2 position;
        public int charges;
    }

    [Serializable]
    public class Saws
    {
        public Vector2 position;
    }
    
    [Serializable]
    public class Tiles
    {
        public Vector2 position;
        public int direction;
    }

    [Serializable]
    public class Solution
    {
        public List<Steps> steps;
        
    }

    [Serializable]
    public class Steps
    {
        public int x;
        public int y;
    }
    
    [Serializable]
    public class Size
    {
        public int width;
        public int height;
    }

    [Serializable]
    public class LevelData
    {
        public Size size;
        public Solution solution;
        public List<Tiles> tiles;
        public List<Saws> saws;
        public int[] walls;
        public int[] bombs;
        public List<Locks> locks;
        public int[] rotators;
        public int[] colors;
        public Vector2 offset;
        public int moves;
        public int[] tileFeatures;
    }

}






