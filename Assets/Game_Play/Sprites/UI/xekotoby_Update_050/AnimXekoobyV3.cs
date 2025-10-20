
using UnityEngine;

using DG.Tweening;

namespace Xekotoby
{


    public class AnimXekoobyV3 : MonoBehaviour
    {
        public Vector3 scale;
        private Tween _a;
        private Tween _b;

      
        public void Select()
        {

            if (_a == null)
            {
                transform.localScale = scale;
                //transform.DOScaleX(1, 0.5f);

            }
            else
            {
                _a.Kill();
            }

            _a = transform.DOScale(Vector3.one, 0.3f).SetEase(Ease.Unset).OnComplete(() =>
            {
                transform.localScale = Vector3.one;
                _a.Kill();
            });
        }

      
        public void UnSelect()
        {

            if (_a == null)
            {
                transform.localScale = Vector3.one;
                //transform.DOScaleX(1, 0.5f);

            }
            else
            {
                _a.Kill();
            }

            //transform.DOScaleX(1, 0.5f);
            _a = transform.DOScale(0, 0.3f).SetEase(Ease.Unset).OnComplete(() =>
            {
                transform.localScale = Vector3.zero;
                _a.Kill();
            });
        }
    }
}