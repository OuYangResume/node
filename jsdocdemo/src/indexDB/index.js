/*
 * @Author: your name
 * @Date: 2020-07-27 14:48:44
 * @LastEditTime: 2020-07-28 10:07:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/jsdocdemo/src/indexDB/index.js
 */

class indexDB {

    /**
     * 构造函数
     * @constructor
     * @param {Object} 
     */
    constructor(options) {
        this.name = options.name || null;
        this.age = options.age || null;
    }

    /**
     * @returns {String|*} 获取indexDB的名称
     */
    getName() {
        return this.name;
    }
    
    /**
     * 设置indexDB的name
     * @param {String} name 
     */
    setName(name) {
        this.name = name
    }
}


export default indexDB