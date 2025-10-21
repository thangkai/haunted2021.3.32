using UnityEngine;

public enum Type_Animation 
{ 
    None = -1,
    Idle,
    Attack,
    Die,
    Run,
    Move,
    Attack2,
    Attack_SKill_C,
    Attack_3,
    Attack_Skill_P,//summon- dracula
    Shop,
}

public static class Animations
{
    public const string Play = "Play";
    public const string Play_Hide = "Play_Hide";
    public const string Idle = "Idle";
    public const string Open = "Open";
    public const string Close = "Close";

    public const string Name_Anim_Win = "win";

    public static void Play_Animation_Play(this Animator animator)
    {
        Play_Animation(animator, Play);
    }

    public static void Play_Animation_Play_Hide(this Animator animator)
    {
        Play_Animation(animator, Play_Hide);
    }

    public static void Play_Animation_Idle(this Animator animator)
    {
        Play_Animation(animator, Idle);
    }

    public static void Play_Animation_Close(this Animator animator)
    {
        Play_Animation(animator, Close);
    }

    public static void Play_Animation(this Animator animator, string anim)
    {
        if (animator && animator.isActiveAndEnabled)
        {
            animator.Play(anim);
        }
    }

    public static string Get_Name_Animation(Type_Animation type_Animation, Type_Player type_Boss)
    {
        switch (type_Animation)
        {
            case Type_Animation.Idle: return "idle";
            case Type_Animation.Attack: return "attack";
            case Type_Animation.Die: return "die";
            case Type_Animation.Run: return "run";
            case Type_Animation.Move: return "move";
            case Type_Animation.Attack2:
                {
                    if(type_Boss == Type_Player.Boss_Medusa)
                    {
                        return "attack2-1";
                    }
                    return "attack2";
                }
            case Type_Animation.Attack_SKill_C:
                {
                    if (type_Boss == Type_Player.Boss_Medusa)
                    {
                        return "attack-1";
                    }
                    return "attack-2";
                }
            case Type_Animation.Attack_Skill_P: return "summon";
        }
        return "idle";
    }

    public static string Get_Name_Animation(Type_Animation type_Animation, Type_Golem type_Golem)
    {
        switch (type_Animation)
        {
            case Type_Animation.Idle: return "idle";
            case Type_Animation.Attack: return "attack";
            case Type_Animation.Die: return "die";
            case Type_Animation.Run: return "run";
            case Type_Animation.Move: return "move";
            case Type_Animation.Attack_3: return "attack-3";
            case Type_Animation.Attack2:
                {
                    return "attack-2";
                }
        }
        return "idle";
    }
}

