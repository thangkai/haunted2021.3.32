using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Config_Arrow_Name : MonoBehaviour
{
   public Transform Content;

   private void Update()
   {
      gameObject.transform.localPosition = new Vector3(gameObject.transform.localPosition.x, Content.localPosition.y-520f);
   }
}
