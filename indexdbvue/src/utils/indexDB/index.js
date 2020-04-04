/*
 * @Author: your name
 * @Date: 2020-04-01 14:20:40
 * @LastEditTime: 2020-04-04 13:01:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/utils/indexdb.js
 */
import indexDb from './indexDbManager'

const indexDbObject = {
    install(Vue) {
        //设置全局的bdObject
       // Vue.prototype.dbObject = null;
        //创建indexDbManager对象
        var indexDbManager = new indexDb();
        var dbname = "dictCache",
            version = 1,
            newStore = { name: "dict", key: "id" };
        indexDbManager.initIndexDB(dbname, version, newStore).then(dbObject => {
            Vue.prototype.dbObject = dbObject;
            return new Promise((resolve, reject) => {
                resolve(dbObject);
            })
        })
        //将indexDbManager的方法注册到vue的生命周期上。
        Vue.prototype.initIndexDB = async function (dbname, version, newStore) {
            let dbObject = await indexDbManager.initIndexDB(dbname, version, newStore)
            debugger
            Vue.prototype.dbObject = dbObject;
            return new Promise((resolve, reject) => {
                resolve(dbObject);
            })
        };

    }
}

export default indexDbObject;