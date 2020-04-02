/*
 * @Author: your name
 * @Date: 2020-04-01 14:20:40
 * @LastEditTime: 2020-04-02 11:15:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/utils/indexdb.js
 */
import indexDb from './indexDbManager'

const indexDbObject = {
    install(Vue) {
        //设置全局的bdObject
        Vue.prototype.dbObject = null;
        //创建indexDbManager对象
        var indexDbManager = new indexDb();
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