using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class Boss_Mini : Base_Boss
{
    // Start is called before the first frame update
    protected override void Update_Data_Boss(bool is_Increase_Level)
    {
        base.Update_Data_Boss(is_Increase_Level);
        
        Debug.LogError("Update data boss Mini");
    }

}
