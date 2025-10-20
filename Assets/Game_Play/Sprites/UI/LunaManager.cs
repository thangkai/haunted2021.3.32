
using UnityEngine;

using DG.Tweening;
using UnityEngine.UI;

public class LunaManager : MonoBehaviour
{

    public static LunaManager instace;


    
    public bool isLandscape;
   
    private float lastScreenWidth;
    private float lastScreenHeight;
   




    [SerializeField] private GameObject uiHomeLanscape;
    [SerializeField] private GameObject uiHomePort;
  
    private void Awake()
    {
        if (instace == null)
        {
            instace = this;

        }

        if (Screen.height >= Screen.width)
        {
            // // Debug.LogError("sssss");
            isLandscape = false;

        }
        else
        {
            // // Debug.LogError("ssss2s");
            isLandscape = true;


        }

        lastScreenWidth = Screen.width;
        lastScreenHeight = Screen.height;
        CheckAndApplyOrientation();
    }

    public void CheckAndApplyOrientation()
    {
        bool isLandscape = Screen.width > Screen.height;
        Debug.LogError("CheckAndApplyOrientation" + Screen.width + " -----" + Screen.height);
        uiHomeLanscape.SetActive(isLandscape);
        uiHomePort.SetActive(!isLandscape);
        if (isLandscape)
        {
            float aspect = (float)Screen.width / Screen.height;

            ZoomInCamera(GetOrthoSizeLandscape(aspect) - 0.3f);


        }
        else
        {
            // Debug.LogError("CheckAndApplyOrientation");
            ZoomInCamera(14.5f);


        }
    }

    public void Update()
    {



        if (Screen.width != lastScreenWidth || Screen.height != lastScreenHeight)
        {
            lastScreenWidth = Screen.width;
            lastScreenHeight = Screen.height;
            CheckAndApplyOrientation();
        }
    }

    private float size1;
    private float size2;

    void ZoomInCamera(float target1)
    {

        // float start1 = cameraGameplay.orthographicSize;
        // float start2 = cameraUi.orthographicSize;

        // cameraGameplay.DOOrthoSize(target1, 0.2f).SetEase(Ease.OutQuad);
        // cameraUi.DOOrthoSize(target1 - 2f, 0.2f).SetEase(Ease.OutQuad);
    }






    public float GetOrthoSizeLandscape(float aspect)
    {
        // Mặc định: 16:9 → aspect ≈ 1.77, size ≈ 9.68
        // Rộng hơn: 21:9 → aspect ≈ 2.33 → có thể nhỏ hơn chút
        return Mathf.Lerp(10f, 9f, Mathf.InverseLerp(1.6f, 2.3f, aspect));
    }

    public void OnPlayButtonClick()
    {
        Debug.Log("Play");
        Luna.Unity.Playable.InstallFullGame();
    }
    public void Btn_GameEnded()
    {
        Luna.Unity.LifeCycle.GameEnded();
    }

    private void OnEnable()
    {
        Luna.Unity.LifeCycle.OnPause += PauseGameplay;
        Luna.Unity.LifeCycle.OnResume += ResumeGameplay;
    }

    private void OnDisable()
    {
        Luna.Unity.LifeCycle.OnPause -= PauseGameplay;
        Luna.Unity.LifeCycle.OnResume -= ResumeGameplay;
    }


    private void ResumeGameplay()
    {
        Time.timeScale = 1f;
    }

    private void PauseGameplay()
    {
        Time.timeScale = 0;
    }



}
