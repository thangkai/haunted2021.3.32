namespace  Game_Play.Xekotoby.Pooling
{
   // using Sirenix.OdinInspector;
    using System.Collections.Generic;
    using UnityEngine;

    public class ObjectPoolManager : Singleton<ObjectPoolManager>
    {
        [System.Serializable]
        public class Pool
        {
            //[ShowInInspector]
            public int InstanceID => this.prefab.GetInstanceID();
            public GameObject prefab;
            public int initPoolNumber;
            [Range(1, 999)]
            public int extendPoolSize;
        }

        //Enemy Pool
        public List<Pool> enemyPools;
        private Dictionary<int, Queue<GameObject>> _enemyPoolDictionary;

        //Effect Pool
        public List<Pool> effectPools;
        private Dictionary<int, Queue<GameObject>> _effectPoolDictionary;

        //Other Pool
        public List<Pool> otherPools;
        private Dictionary<int, Queue<GameObject>> _otherPoolDictionary;

        //Damage Popup
        private Queue<DamagePopup> _damagePopupPool;
        [SerializeField]
        private int initDamagePopupNumber;

        [SerializeField]
        private DamagePopup damagePopupPrefab;

        [SerializeField]
        private int extendSizeDamagePopup;

        private DamagePopup _damagePopupTemp;

        [SerializeField] private GroupEnemy groupEnemyPrefab;

        private void Start()
        {
//            InitPools(this.enemyPools, ref this._enemyPoolDictionary);
            InitPools(this.effectPools, ref this._effectPoolDictionary);
       //     InitPools(this.otherPools, ref this._otherPoolDictionary);
            InitDamagePool();
        }

        private void InitDamagePool()
        {
            this._damagePopupPool = new Queue<DamagePopup>();
            //Init
            for (int i = 0; i < this.initDamagePopupNumber; i++)
            {
                DamagePopup damagePopup = Instantiate(this.damagePopupPrefab, transform);
                damagePopup.gameObject.SetActive(false);
                this._damagePopupPool.Enqueue(damagePopup);
            }
        }

        private void InitPools(List<Pool> pools, ref Dictionary<int, Queue<GameObject>> poolDictionary)
        {
            if (poolDictionary == null)
            {
                poolDictionary = new Dictionary<int, Queue<GameObject>>();
            }
            poolDictionary.Clear(); // Giữ nguyên tham chiếu, chỉ xóa dữ liệu cũ
            poolDictionary = new Dictionary<int, Queue<GameObject>>();

            foreach (Pool pool in pools)
            {
                Queue<GameObject> objectPool = new Queue<GameObject>();

                if (pool.prefab == null)
                {
                    continue;
                }

                for (int i = 0; i < pool.initPoolNumber; i++)
                {
                    GameObject obj = Instantiate(pool.prefab, transform);
                    obj.SetActive(false);
                    objectPool.Enqueue(obj);
                }

                poolDictionary.Add(pool.prefab.GetInstanceID(), objectPool);
            }
        }

        public GameObject SpawnEnemyFromPool(int instanceID, Vector3 position, Quaternion rotation)
        {
            if (!this._enemyPoolDictionary.ContainsKey(instanceID))
            {
                Debug.LogWarning("Pool with Instance ID " + instanceID + " doesn't exist.");
                return null;
            }

            //Check and Extend
            if (this._enemyPoolDictionary[instanceID].Count <= 0)
            {
                Pool poolForExtend = GetPool(instanceID, this.enemyPools);
                if (poolForExtend != null)
                {
                    for (int i = 0; i < poolForExtend.extendPoolSize; i++)
                    {
                        GameObject obj = Instantiate(poolForExtend.prefab, transform);
                        obj.SetActive(false);
                        this._enemyPoolDictionary[instanceID].Enqueue(obj);
                    }
                }
            }

            //Get object to Spawn
            GameObject objectToSpawn = this._enemyPoolDictionary[instanceID].Count > 0 ? this._enemyPoolDictionary[instanceID].Dequeue() : null;

            //Reset Object
            if (objectToSpawn)
            {
                //Set new position
                objectToSpawn.SetActive(true);
                objectToSpawn.transform.position = position;
                objectToSpawn.transform.rotation = rotation;

                //Init
                IPooledObject pooledObject = objectToSpawn.GetComponent<IPooledObject>();

                if (pooledObject != null)
                {
                    pooledObject.OnObjectSpawn();
                }
            }

            return objectToSpawn;
        }

        public GameObject SpawnEffectFromPool(int instanceID, Vector3 position, Quaternion rotation)
        {
            if (!this._effectPoolDictionary.ContainsKey(instanceID))
            {
                Debug.LogWarning("Pool with Instance ID " + instanceID + " doesn't exist.");
                return null;
            }

            //Check and Extend
            if (this._effectPoolDictionary[instanceID].Count <= 0)
            {
                Pool poolForExtend = GetPool(instanceID, this.effectPools);
                if (poolForExtend != null)
                {
                    for (int i = 0; i < poolForExtend.extendPoolSize; i++)
                    {
                        GameObject obj = Instantiate(poolForExtend.prefab, transform);
                        obj.SetActive(false);
                        this._effectPoolDictionary[instanceID].Enqueue(obj);
                    }
                }
            }

            //Get object to Spawn
            GameObject objectToSpawn = this._effectPoolDictionary[instanceID].Count > 0 ? this._effectPoolDictionary[instanceID].Dequeue() : null;

            //Reset Object
            if (objectToSpawn)
            {
                //Set new position
                objectToSpawn.SetActive(true);
                objectToSpawn.transform.position = position;
                objectToSpawn.transform.rotation = rotation;

                //Init
                IPooledObject pooledObject = objectToSpawn.GetComponent<IPooledObject>();

                if (pooledObject != null)
                {
                    pooledObject.OnObjectSpawn();
                }
            }

            return objectToSpawn;
        }

        public GameObject SpawnEffectFromPool(string effectName, Vector3 position, Quaternion rotation)
        {
            int instanceID = GameData.Instance.allEffectData.GetEffectID(effectName);
            if (!this._effectPoolDictionary.ContainsKey(instanceID))
            {
                Debug.LogWarning("Pool with Instance ID " + instanceID + " doesn't exist.");
                return null;
            }

            //Check and Extend
            if (this._effectPoolDictionary[instanceID].Count <= 0)
            {
                Pool poolForExtend = GetPool(instanceID, this.effectPools);
                if (poolForExtend != null)
                {
                    for (int i = 0; i < poolForExtend.extendPoolSize; i++)
                    {
                        GameObject obj = Instantiate(poolForExtend.prefab, transform);
                        obj.SetActive(false);
                        this._effectPoolDictionary[instanceID].Enqueue(obj);
                    }
                }
            }

            //Get object to Spawn
            GameObject objectToSpawn = this._effectPoolDictionary[instanceID].Count > 0 ? this._effectPoolDictionary[instanceID].Dequeue() : null;

            //Reset Object
            if (objectToSpawn)
            {
                //Set new position
                objectToSpawn.SetActive(true);
                objectToSpawn.transform.position = position;
                objectToSpawn.transform.rotation = rotation;

                //Init
                IPooledObject pooledObject = objectToSpawn.GetComponent<IPooledObject>();

                if (pooledObject != null)
                {
                    pooledObject.OnObjectSpawn();
                }
            }

            return objectToSpawn;
        }

        public GameObject SpawnOtherFromPool(int instanceID, Vector3 position, Quaternion rotation)
        {
            if (!this._otherPoolDictionary.ContainsKey(instanceID))
            {
                Debug.LogWarning("Pool with Instance ID " + instanceID + " doesn't exist.");
                return null;
            }

            //Check and Extend
            if (this._otherPoolDictionary[instanceID].Count <= 0)
            {
                Pool poolForExtend = GetPool(instanceID, this.otherPools);
                if (poolForExtend != null)
                {
                    for (int i = 0; i < poolForExtend.extendPoolSize; i++)
                    {
                        GameObject obj = Instantiate(poolForExtend.prefab, transform);
                        obj.SetActive(false);
                        this._otherPoolDictionary[instanceID].Enqueue(obj);
                    }
                }
            }

            //Get object to Spawn
            GameObject objectToSpawn = this._otherPoolDictionary[instanceID].Count > 0 ? this._otherPoolDictionary[instanceID].Dequeue() : null;

            //Reset Object
            if (objectToSpawn)
            {
                //Set new position
                objectToSpawn.SetActive(true);
                objectToSpawn.transform.position = position;
                objectToSpawn.transform.rotation = rotation;

                //Init
                IPooledObject pooledObject = objectToSpawn.GetComponent<IPooledObject>();

                if (pooledObject != null)
                {
                    pooledObject.OnObjectSpawn();
                }
            }

            return objectToSpawn;
        }

        public void ReleaseEnemyToPool(GameObject obj, int instanceID)
        {
            if (this._enemyPoolDictionary.ContainsKey(instanceID) && obj != null)
            {
                obj.transform.position = Vector3.zero;
                obj.transform.rotation = Quaternion.identity;
                obj.transform.parent = transform;
                this._enemyPoolDictionary[instanceID].Enqueue(obj);
                obj.SetActive(false);
            }
        }

        public void ReleaseEffectToPool(GameObject obj, int instanceID)
        {
            if (this._effectPoolDictionary.ContainsKey(instanceID) && obj != null)
            {
                obj.SetActive(false);
                obj.transform.position = Vector3.zero;
                obj.transform.rotation = Quaternion.identity;
                obj.transform.parent = transform;
                this._effectPoolDictionary[instanceID].Enqueue(obj);
            }
        }

        public void ReleaseOtherToPool(GameObject obj, int instanceID)
        {
            if (this._otherPoolDictionary.ContainsKey(instanceID) && obj != null)
            {
                obj.SetActive(false);
                obj.transform.position = Vector3.zero;
                obj.transform.rotation = Quaternion.identity;
                obj.transform.parent = transform;
                this._otherPoolDictionary[instanceID].Enqueue(obj);
            }
        }

        private Pool GetPool(int instanceID, List<Pool> pools)
        {
            for (int i = 0; i < pools.Count; i++)
            {
                if (pools[i].prefab.GetInstanceID() == instanceID)
                {
                    return pools[i];
                }
            }
            return null;
        }

        public GroupEnemy GetGroupEnemy()
        {
            return SpawnOtherFromPool(this.groupEnemyPrefab.gameObject.GetInstanceID(), Vector3.zero, Quaternion.identity).GetComponent<GroupEnemy>();
        }

        public void ReleaseEnemyGroup(GameObject groupEnemy)
        {
            ReleaseOtherToPool(groupEnemy, this.groupEnemyPrefab.gameObject.GetInstanceID());
        }


        public DamagePopup SpawnDamagePopup()
        {
            //Check and extend
            if (this._damagePopupPool.Count < 1)
            {
                for (int i = 0; i < this.extendSizeDamagePopup; i++)
                {
                    this._damagePopupTemp = Instantiate(this.damagePopupPrefab, transform);
                    this._damagePopupTemp.gameObject.SetActive(true);
                    this._damagePopupPool.Enqueue(this._damagePopupTemp);
                }
            }
            this._damagePopupTemp = this._damagePopupPool.Dequeue();
            this._damagePopupTemp.gameObject.SetActive(true);
            return this._damagePopupTemp;
        }

        public void ReleaseDamagePopup(DamagePopup damagePopup)
        {
            Transform popupTransform = damagePopup.transform; // Lưu transform vào biến tạm

            popupTransform.gameObject.SetActive(false);
            popupTransform.position = Vector3.zero;
            popupTransform.rotation = Quaternion.identity;
            popupTransform.parent = transform;
            this._damagePopupPool.Enqueue(damagePopup);
        }
    }

}