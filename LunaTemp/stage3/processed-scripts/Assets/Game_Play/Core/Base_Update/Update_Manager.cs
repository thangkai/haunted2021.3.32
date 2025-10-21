using System;
using System.Collections.Generic;
using UnityEngine;


namespace Haunted
{

    public class Update_Manager : Singleton<Update_Manager>
    {
        [SerializeField] List<Base_Update> m_All_Items = new List<Base_Update>();

        protected override void Awake()
        {
            base.Awake();
            //        DontDestroyOnLoad(gameObject);
        }

        public void Register_Update(Base_Update base_Update)
        {
            if (m_All_Items.Check_Contain(base_Update) < 0)
            {
                m_All_Items.Add(base_Update);
            }
        }

        private void Update()
        {
            for (int i = m_All_Items.Count - 1; i >= 0; i--)
            {
                try
                {
                    if (m_All_Items[i] == null)
                    {
                        m_All_Items.RemoveAt(i);
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("Update_Manager : " + e.Message);
                }

            }

            for (int i = m_All_Items.Count - 1; i >= 0; i--)
            {
                try
                {
                    if (m_All_Items[i])
                    {
                        m_All_Items[i].Loop_Update();
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("Update_Manager : " + e.Message);
                }

            }
        }

        private void FixedUpdate()
        {


            for (int i = m_All_Items.Count - 1; i >= 0; i--)
            {
                try
                {
                    if (m_All_Items[i] == null)
                    {
                        m_All_Items.RemoveAt(i);
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("Update_Manager : " + e.Message);
                }

            }



            for (int i = m_All_Items.Count - 1; i >= 0; i--)
            {
                try
                {
                    if (m_All_Items[i])
                    {
                        m_All_Items[i].Loop_Fixed_Update();
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("Update_Manager : " + e.Message);
                }

            }
        }

        private void LateUpdate()
        {
            for (int i = m_All_Items.Count - 1; i >= 0; i--)
            {
                try
                {
                    if (m_All_Items[i] == null)
                    {
                        m_All_Items.RemoveAt(i);
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("Update_Manager : " + e.Message);
                }

            }



            for (int i = m_All_Items.Count - 1; i >= 0; i--)
            {
                try
                {
                    if (m_All_Items[i])
                    {
                        m_All_Items[i].Loop_Late_Update();
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError("Update_Manager : " + e.Message);
                }

            }
        }
    }
}

