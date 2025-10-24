
using UnityEngine;

using DG.Tweening;
using UnityEngine.UI;

public class LunaManager : MonoBehaviour
{

    public static LunaManager instace;


    
    public bool isLandscape;
   
    private float lastScreenWidth;
    private float lastScreenHeight;
   




    [SerializeField] private GameObject uiHomeLanscape, uiIngameLan;
    [SerializeField] private GameObject uiHomePort, uiIngamePor;
    [SerializeField] private CanvasScaler canvasScalerIngame, healBar;
    [SerializeField] private GameObject build;
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
        
        uiIngameLan.SetActive(isLandscape);
        uiIngamePor.SetActive(!isLandscape);
        if (isLandscape)
        {
            build.transform.localScale = new Vector3(0.70f, 0.7f, 0.7f);
        }
        else
        {
            build.transform.localScale = new Vector3(1f, 1f, 1f);
        }
        
        if (isLandscape)
        {
            float aspect = (float)Screen.width / Screen.height;

            ZoomInCamera(GetOrthoSizeLandscape(aspect) - 0.3f);
            // canvasScalerIngame.matchWidthOrHeight = 1;
            // healBar.matchWidthOrHeight = 1;


        }
        else
        {
             Debug.LogError("CheckAndApplyOrientation");
            ZoomInCamera(8f);
            // canvasScalerIngame.matchWidthOrHeight = 0;
            // healBar   .matchWidthOrHeight = 0;


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
    public Camera cameraGameplay;
    void ZoomInCamera(float target1)
    {

        float start1 = cameraGameplay.orthographicSize;
      

         cameraGameplay.DOOrthoSize(target1, 0.2f).SetEase(Ease.OutQuad);
        // cameraUi.DOOrthoSize(target1 - 2f, 0.2f).SetEase(Ease.OutQuad);
    }






    public float GetOrthoSizeLandscape(float aspect)
    {
        // Mặc định: 16:9 → aspect ≈ 1.77, size ≈ 9.68
        // Rộng hơn: 21:9 → aspect ≈ 2.33 → có thể nhỏ hơn chút
        return Mathf.Lerp(3f, 4f, Mathf.InverseLerp(1.6f, 2.3f, aspect));
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
