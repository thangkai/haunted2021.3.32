using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class DameLabel : MonoBehaviour
{
    [Header("Damage Label")]
    [SerializeField] private TMP_Text damageText;
    [SerializeField] private float normalFontSize = 42;
    [SerializeField] private float critFontSize = 52;
    [SerializeField] private Color normalFontColor = Color.white;

    [SerializeField] private float startColorFadePercent = 0.8f;

    [Header("Animation easing")]
    [SerializeField] private AnimationCurve easeCurve;
    private float _displayDuaration;

    [Header("Bezier curve Setting")]
    [SerializeField] private Vector2 hightPointOffset = new Vector2(-3.5f, 3);
    [SerializeField] private Vector2 lowPointOffset = new Vector2(-1f, -5);
    [SerializeField] private float heightVarationMax = 1.5f;
    [SerializeField] private float heightVarationMin = 0.5f;

    private Vector3 _highPointOffsetBasedOnDirection = Vector3.zero;
    private Vector3 _dropPointOffsetBasedOnDirection = Vector3.zero;

    private bool _direction = true;


    [Header("Visualize")]
    [SerializeField] private bool displayGizmos;
    [SerializeField, Range(1,30)] private int gizmosResolution = 20;

    private Vector3 _startingPositionForVisualization = Vector3.zero;

     private SpawnDamagePopups  _poolManager;
    private Coroutine _moveCoroutine;

    private void OnDrawGizmos()
    {
        if (!displayGizmos) return;

        Vector3 start = transform.localPosition;


        OrientCurveBasedOnDirection();



        if (Application.isPlaying)
            start = _startingPositionForVisualization;

        var heighVariation = heightVarationMax - heightVarationMin;

        Vector3 highPoint = start + _highPointOffsetBasedOnDirection + new Vector3(0, heighVariation, 0);
        Vector3 dropPoint = highPoint + _dropPointOffsetBasedOnDirection;

        int colorChangeIndex= (int)(startColorFadePercent * gizmosResolution);
        Gizmos.color = Color.red;

        Vector3 prevPoint = start;


        for (int i = 1; i <= gizmosResolution; i++)
        {
            float time = 1 / (float)gizmosResolution;
            Vector3 nextPoint = CaculateBezierPoint(time, start, highPoint,dropPoint);
            if(i>= colorChangeIndex)
            {
                Gizmos.color = Color.yellow;
            }
            Gizmos.DrawLine(prevPoint, nextPoint);

            prevPoint = nextPoint;




        
        
        }


    }

    private void OrientCurveBasedOnDirection()
    {
        _highPointOffsetBasedOnDirection = hightPointOffset;
        _dropPointOffsetBasedOnDirection = lowPointOffset;
        if (_direction) return;
        _highPointOffsetBasedOnDirection.x = -_highPointOffsetBasedOnDirection.x;
        _dropPointOffsetBasedOnDirection.x = _dropPointOffsetBasedOnDirection.x;
    }
    
    
    private Vector3 CaculateBezierPoint(float progress , Vector3 start, Vector3 control, Vector3 end)
    {
        float remainingPath = 1 - progress;

        Vector3 curentLocation = remainingPath * remainingPath * start;

        curentLocation += 2 * remainingPath * progress * control;

        curentLocation += progress * progress * end;
        return curentLocation;


    }

    public void Initialize(float displayDuaration, SpawnDamagePopups poolManager)
    {
        _poolManager = poolManager;
        _displayDuaration = displayDuaration;
        OrientCurveBasedOnDirection();


    }

    public void Display(int damage, Vector3 objPostition, bool direction , bool isCrit)
    {
        transform.localPosition = objPostition;
        _startingPositionForVisualization = objPostition;
        _direction = direction;

        damageText.SetText(damage.ToString());

        damageText.color = normalFontColor;
        damageText.enableVertexGradient = isCrit;
        damageText.fontSize = isCrit ? critFontSize : normalFontSize;

        if (_moveCoroutine != null)
        {
            StopCoroutine(_moveCoroutine);
        }
        _moveCoroutine = StartCoroutine(Move());
        StartCoroutine(ReturnDamageLabelToPool(_displayDuaration));

    }
    private IEnumerator Move()
    {
        float time = 0;
        float fadeStartTime = startColorFadePercent * _displayDuaration;
        OrientCurveBasedOnDirection();

        Vector3 start = transform.localPosition;

        var heightVariation = Random.Range(heightVarationMin, heightVarationMax);



        Vector3 variation = new Vector3(0, heightVariation, 0);
        Vector3 hightPoint = (start + _highPointOffsetBasedOnDirection + variation);
        Vector3 dropPoint = hightPoint + _dropPointOffsetBasedOnDirection;

        while (time < _displayDuaration)
        {
            time += Time.deltaTime;
            float progress = time / _displayDuaration;
            float easedTime = easeCurve.Evaluate(progress);

            if(time>= fadeStartTime)
            {
                Color color = damageText.color;

                float newAlpha = Mathf.Lerp(1, 0, (time - fadeStartTime)/ (_displayDuaration-fadeStartTime));
                color.a = newAlpha;
                damageText.color = color;
            }
            transform.localPosition = CaculateBezierPoint(easedTime, start, hightPoint, dropPoint);
            yield return null;
        }


    }

    private IEnumerator ReturnDamageLabelToPool(float displayLength)
    {
        yield return new WaitForSeconds(displayLength);
        _poolManager.ReturnDamageLabelToPool(this);
    }













}
