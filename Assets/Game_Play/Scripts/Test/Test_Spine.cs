using Spine.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Test_Spine : MonoBehaviour
{
    SkeletonAnimation skeletonAnimation;
    Spine.AnimationState animationState;

    void Awake()
    {
        skeletonAnimation = GetComponent<SkeletonAnimation>();
        animationState = skeletonAnimation.AnimationState;

        //// registering for events raised by any animation
        //animationState.Start += OnSpineAnimationStart;
        //animationState.Interrupt += OnSpineAnimationInterrupt;
        //animationState.End += OnSpineAnimationEnd;
        //animationState.Dispose += OnSpineAnimationDispose;
        //animationState.Complete += OnSpineAnimationComplete;

        animationState.Event += OnUserDefinedEvent;

        //// registering for events raised by a single animation track entry
        //Spine.TrackEntry trackEntry = animationState.SetAnimation(trackIndex, "walk", true);
        //trackEntry.Start += OnSpineAnimationStart;
        //trackEntry.Interrupt += OnSpineAnimationInterrupt;
        //trackEntry.End += OnSpineAnimationEnd;
        //trackEntry.Dispose += OnSpineAnimationDispose;
        //trackEntry.Complete += OnSpineAnimationComplete;
        //trackEntry.Event += OnUserDefinedEvent;

        m_Curr_Type_Animation = Type_Animation.Idle;
        Change_Anim();
    }

    Type_Animation m_Curr_Type_Animation;
    private void Change_Anim()
    {
        string name_Anim = Animations.Get_Name_Animation(m_Curr_Type_Animation, Type_Player.Boss_Baital_Vampire);
        skeletonAnimation.AnimationState.SetAnimation(0, name_Anim, true);
        //skeletonAnimation.Initialize(true);

        switch (m_Curr_Type_Animation)
        {
            case Type_Animation.Idle:
                m_Curr_Type_Animation = Type_Animation.Run;
                break;

            case Type_Animation.Attack:
                m_Curr_Type_Animation = Type_Animation.Die;
                break;

            case Type_Animation.Die:
                m_Curr_Type_Animation = Type_Animation.Idle;
                break;

            case Type_Animation.Run:
                m_Curr_Type_Animation = Type_Animation.Attack;
                break;

        }

        Invoke(nameof(Change_Anim), 2f);
    }

    public void OnUserDefinedEvent(Spine.TrackEntry trackEntry, Spine.Event e)
    {
        Debug.Log("Event spine = " + e.Data.Name);
        //if (e.Data.Name == targetEventName)
        //{
        //    // Add your implementation code here to react to user defined event
        //}
    }

}