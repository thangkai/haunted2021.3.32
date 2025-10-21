namespace Game_Play.Xekotoby.Pooling
{
    using UnityEngine;
    using UnityEngine.SceneManagement;

    public class EffectBase : MonoBehaviour
    {
        [SerializeField]
        protected EffectData effectData;

        [SerializeField]
        protected bool isLoop;

        [SerializeField]
        protected ParticleSystem effect;

        protected virtual void OnEnable()
        {
            CancelInvoke(nameof(SelfDestroy));
            this.effect.Play();
            if (!this.isLoop)
            {
                Invoke(nameof(SelfDestroy), this.effectData.duration);
            }
            SceneManager.sceneUnloaded += SceneUnloadedHandle;
            //GameplayManager.OnGameOver.AddListener(OnGameOverHandle);
        }

     
        private void OnGameOverHandle(bool arg0)
        {
            SelfDestroy();
        }

        private void SceneUnloadedHandle(Scene arg0)
        {
            // if (LoadSceneManager.gameplaySceneName.Equals(arg0.name))
            // {
                SelfDestroy();
          //  }
        }

        public virtual void SelfDestroy()
        {
            ObjectPoolManager.Instance.ReleaseEffectToPool(gameObject, this.effectData.effectPrefab.GetInstanceID());
        }

        public virtual void SetTimeLife(float timeLife)
        {
            Invoke(nameof(SelfDestroy), timeLife);
        }
    }

}