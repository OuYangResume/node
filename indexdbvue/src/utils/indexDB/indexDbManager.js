/*
 * @Author: oouyang
 * @Date: 2020-04-01 14:44:01
 * @LastEditTime: 2020-04-03 17:03:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/utils/indexDb/indexDbManager.js
 */
class indexDBManager {
    constructor() {
        //indexDB 浏览器的对象
        this.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.webkitindexedDB || window.msIndexedDB;
        //数据库对象用于curd
        this.dbObject = null;
    }
    /**
     * @description:  初始化数据库
     * @param {String} dbname 数据库名称 
     * @param {Number} version 数据库版本 
     * @param {Object} newStore 数据库表名 name  索引key
     * @return: 
     */
    initIndexDB(dbname, version, newStore) {
        var version = version || 1;
        //这个方法接受两个参数，第一个参数是字符串，表示数据库的名字。如果指定的数据库不存在，就会新建数据库.
        var request = this.indexedDB.open(dbname, version);

        return new Promise((resolve, reject) => {
            request.onerror = function (event) {
                console.log('IndexedDB数据库打开错误');
            };
            //打开数据库成功,result属性拿到数据库对象。
            request.onsuccess = (event) => {
                this.dbObject = event.target.result;
                resolve(this.dbObject);
            };
            //onupgradeneeded调用,创建新的储存空间
            request.onupgradeneeded = function (event) {
                this.dbObject = event.target.result;
                var objectStore;
                //判断一下，对象仓库是否存在，如果不存在再新建。
                if (!this.dbObject.objectStoreNames.contains(newStore.name)) {
                    //新建对象仓库
                    objectStore = this.dbObject.createObjectStore(newStore.name, { keyPath: newStore.key });
                    //创建索引---索引名称、索引所在的属性、配置对象{说明该属性是否包含重复的值}
                    objectStore.createIndex('id', 'id', { unique: true });
                    // objectStore.createIndex('name', 'name', { unique: false });
                    // objectStore.createIndex('email', 'email', { unique: true });
                }
            }
        })

    }

    /**
     * @description: 获取数据库对象
     * @param {type} 
     * @return: 
     */
    getDbObject() {
        return this.dbObject;
    }
    /**
     * @description:  删除数据库
     * @param {dbname} 
     * @return: 
     */
    deleteDB(dbname, callback) {
        var deleteQuest = this.indexedDB.deleteDatabase(dbname);
        deleteQuest.onerror = function () {
            console.log('删除数据库出错');
        };
        deleteQuest.onsuccess = function () {
            if (callback && (typeof callback === 'function')) {
                callback();
            }
        }
    }
    /**
     * @description: 添加||更新数据
     * @param {type} 
     * @return: 
     */
    add(db, storeName, dataObject) {
        //写入数据需要新建一个事务。新建时必须指定表格名称和操作模式（"只读"或"读写"）
        var transaction = db.transaction(storeName, 'readwrite');
        var store = transaction.objectStore(storeName);
        // let dataObject = {
        //     "sex": [{ value: "1", name: "男" }, { value: "2", name: "女" }],
        //     "houseType": [{ value: "1", name: "出租" }, { value: "2", name: "自用" }, { value: "3", name: "待租" }, { value: "4", name: "闲置" }, { value: "5", name: "部分出租" }, { value: "6", name: "其他" }]
        // }
        var request
        for (let i in dataObject) {
            let dictId = i;
            let itemData = dataObject[i];
            request = store.put(Object.assign({ id: dictId, list: itemData }));
            request.onsuccess = function (event) {
                console.log('数据写入成功');
            };
            request.onerror = function (event) {
                console.log('数据写入失败');
            }
        }
    }

    /**
     * @description: 根据key索引读取数据
     * @param {type} 
     * @return: 
     */
    readDataByKey(db, storeName, key) {
        var transaction = db.transaction(storeName);
        var objectStore = transaction.objectStore(storeName);
        var request = objectStore.get(key);
        return new Promise((resolve, reject) => {
            request.onerror = function (event) {
                console.log('事务失败');
            };
            let resultData = [];
            request.onsuccess = function (event) {
                if (request.result) {
                    resultData = request.result
                    resolve(resultData)
                } else {
                    resolve(resultData)
                }
            };
        })

    }

    /**
     * @description: 获取所有数据
     * @param {type} 
     * @return: 
     */
    getdatabycursor(db, storename) {
        var objectStore = db.transaction(storename).objectStore(storename);
        var dataList = [];
        return new Promise((resolve, reject) => {
            objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    dataList.push(cursor.value)
                    cursor.continue();
                } else {
                    resolve(dataList);
                }
            };
        })
    }

}
export { indexDBManager }

export default indexDBManager;