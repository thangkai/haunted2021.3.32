namespace  Game_Play.Xekotoby.Pooling
{
    using DG.Tweening;
    using TMPro;
    using UnityEngine;

    public class DamagePopup : MonoBehaviour
    {
        [SerializeField] private TextMeshPro damageText;
        private Color textColor;
        private Color32 whiteColor = new Color32(255, 255, 255, 255);
        private Color32 yellowColor = new Color32(255, 234, 0, 255);
        private Color32 orangeColor = new Color32(255, 127, 80, 255);

        private float moveUpSpeed = 3f;
        private float disappearTime = .25f;
        private float moveUpTime = 0.5f;
        private float moveUpDistance = .75f;
        private static int sortingOrder = 0;
        private static DamagePopup damagePopupTmp;
        private readonly Vector3 defaultScale = new Vector3(0.1f, 0.1f, 0.1f);

        public void Setup(int damageAmount, bool isCrit)
        {
            if (this.damageText == null)
            {
                return;
            }

            this.damageText.SetText(damageAmount.ToString());

            //if (damageAmount < 100)
            //{
            //    this.damageText.color = this.whiteColor;
            //}
            //else if (damageAmount < 200)
            //{
            //    this.damageText.color = this.yellowColor;
            //}
            //else
            //{
            //    this.damageText.color = this.orangeColor;
            //}

            this.damageText.color = this.orangeColor;

            transform.DOMoveY(transform.position.y + this.moveUpDistance, this.moveUpTime).OnComplete(OnDamagePopupMoveUpComplete);
            transform.DOScale(0.2f, this.moveUpTime);
            //.OnComplete(
            //() =>
            //{
            //    //Spawner.Instance.DamagePopupPool.Release(this);
            //    ObjectPoolManager.Instance.ReleaseDamagePopup(this);
            //}
            //);
        }

        private void OnDamagePopupMoveUpComplete()
        {
            float timeLeft = this.disappearTime;
            this.textColor = this.damageText.color;
            transform.DOScale(0f, this.disappearTime);
            DOTween.To(() => timeLeft, x => timeLeft = x, 0f, this.disappearTime).OnUpdate(
                () =>
                {
                    this.textColor.a = (timeLeft / this.disappearTime);
                    this.damageText.color = this.textColor;
                }
                ).OnComplete(
                () =>
                {
                    //Spawner.Instance.DamagePopupPool.Release(this);
                    ObjectPoolManager.Instance.ReleaseDamagePopup(this);
                }
                );
        }

        public static DamagePopup Create(Vector3 position, int damageAmount)
        {
            //damagePopupTmp = Spawner.Instance.DamagePopupPool.Get() as DamagePopup;
            damagePopupTmp = ObjectPoolManager.Instance.SpawnDamagePopup();
            if (damagePopupTmp)
            {
                damagePopupTmp.transform.position = position;
                //bool isCrit = damageAmount / GameplayManager.playerCharacter.Damage.Value >= 1.5f;
                //damagePopupTmp.Setup(damageAmount, isCrit);
                damagePopupTmp.Setup(damageAmount, true);
            }
            return damagePopupTmp;
        }

        public void OnEnable()
        {
            transform.DOKill();
            DOTween.Kill(this);

            sortingOrder++;
            if (this.damageText)
            {
                this.damageText.sortingOrder = sortingOrder;
            }

            transform.localScale = this.defaultScale;
        }
    }

}