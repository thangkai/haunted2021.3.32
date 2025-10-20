using UnityEngine;
using TMPro;

public class Item_Stat_Upgrade : MonoBehaviour
{
    bool is_Start;
    string m_Content;
    [SerializeField] TextMeshProUGUI m_Txt_Stat;

    public void Set_Data_String(string content , float mdameBonus =0f, bool startlevel=true ,float m_Health_Bonus=0f)
    {
        if (startlevel==true )
        {
            m_Content = content;
        }
        else
        {
            if (mdameBonus == 0 || m_Health_Bonus==0)
            {
                m_Content = content;
                
            }
           
            else
            {
                if (content.Contains("Damage") ||content.Contains("Sát thương") )
                {
                    m_Content = content + "("+mdameBonus+")" ;
                }
                else if (content.Contains("HP") || (content.Contains("Máu") ))
                {
                    m_Content = content + "("+m_Health_Bonus+")" ;
                }
                else
                {
                    m_Content = content;
                }
            }
         
            
        }
        
        if (is_Start)
        {
            On_Ready_Update_UI();
        }
    }

    private void Start()
    {
        is_Start = true;
        On_Ready_Update_UI();
    }

    private void On_Ready_Update_UI()
    {
        m_Txt_Stat.text = m_Content;
    }
}
