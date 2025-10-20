using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Model_Anim_Boss_Character : MonoBehaviour
{
    [SerializeField] Base_Boss m_Base_Boss;
    [SerializeField] public Transform petSkill;
    public void Set_Data_Boss(Type_Player type_Player, Action action_Done = null)
    {
        // BundleObjectLoader.Instance.LoadFromFile(
        //     Data_In_Game.Instance.Get_Data_Skeleton_Asset().Get_GameObject_Reference_Asset_Boss_Anim(
        //         type_Player), Boss_In_Game =>
        //     {

                GameObject Boss_In_Game = Data_In_Game.Instance.Get_Data_Skeleton_Asset()
                    .Get_GameObject_Reference_Asset_Boss_Anim(
                        type_Player);
                var obj_Anim_Boss = Instantiate(Boss_In_Game, transform);
                obj_Anim_Boss.transform.localPosition = Vector3.zero;

                Model_Anim_Character model_Anim_Character = obj_Anim_Boss.GetComponent<Model_Anim_Character>();
                if (model_Anim_Character)
                {
                    if (m_Base_Boss.Get_Type_Boss() == Type_Player.Boss_Were_Wolf)
                    {
                        m_Base_Boss.Set_Data_Anim(
                        model_Anim_Character.Get_SkeletonAnimation(), model_Anim_Character.Get_Mesh_Anim(),
                        model_Anim_Character.Get_Take_Dame(), model_Anim_Character.Get_Particle(),
                        model_Anim_Character.m_All_Effect_Mui_Mau, model_Anim_Character.m_All_Effect_Mui_Mau_2, model_Anim_Character.GetBulletBoss()
                        );
                    }
                    else
                    {
                        m_Base_Boss.Set_Data_Anim(
                        model_Anim_Character.Get_SkeletonAnimation(), model_Anim_Character.Get_Mesh_Anim(),
                        model_Anim_Character.Get_Take_Dame(), model_Anim_Character.Get_Particle(), model_Anim_Character.GetBulletBoss()
                        );
                    }

                    petSkill = model_Anim_Character.PosSkillPetAnim();
                    var ammor_Follow = m_Base_Boss.Get_Boss_Movement().Get_Ammor_Follow();
                    if (ammor_Follow)
                    {
                        ammor_Follow.Set_Target_Follow(model_Anim_Character.Get_Pos_Ammor_Follow());
                    }
                }
                if (action_Done != null)
                {
                    action_Done.Invoke();
                }


          //  });
    }
}
