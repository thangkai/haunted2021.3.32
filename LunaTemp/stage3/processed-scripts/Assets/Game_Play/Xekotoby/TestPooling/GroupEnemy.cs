namespace  Game_Play.Xekotoby.Pooling
{
    using UnityEngine;

    public class GroupEnemy : MonoBehaviour
    {
        private bool isReachedMaxEnemy = false;

        private void OnEnable()
        {
            this.isReachedMaxEnemy = false;
        }

        private void OnTransformChildrenChanged()
        {
            if (transform.childCount <= 0 && this.isReachedMaxEnemy)
            {
                ObjectPoolManager.Instance.ReleaseEnemyGroup(gameObject);
            }
        }

        public void AddNewEnemy(GameObject enemy)
        {
            enemy.transform.parent = transform;
        }

        public void SetFullState(bool state)
        {
            this.isReachedMaxEnemy = state;
        }
    }

}