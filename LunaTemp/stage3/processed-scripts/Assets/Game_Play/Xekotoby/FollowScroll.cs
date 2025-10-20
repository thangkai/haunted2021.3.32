using System;
using System.Collections;
using System.Collections.Generic;
using Haunted;
using UnityEngine;

public class FollowScroll : Base_Update
{
     public RectTransform scorll;
     public RectTransform parrentLaoyut;

     public override void Loop_Update()
     {
          parrentLaoyut.anchoredPosition = new Vector2(scorll.anchoredPosition.x, scorll.anchoredPosition.y);
     }
}
