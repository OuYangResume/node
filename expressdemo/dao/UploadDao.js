//数据库
const mysql = require('mysql')
let mysqlConf = require('../conf/mysqlconf')
const uplaodMapper = require('./UploadMapper')
// 创建一个MySQL连接池
var pool = mysql.createPool(mysqlConf);

let uploadDao = {
    /**
     * 获取所有上传文件
     * @param {*} callback 
     */
    getAllupload(callback) {
        pool.getConnection(function (err, connection) {
            if (err) throw err; // not connected!

            // Use the connection
            connection.query(uplaodMapper.getAllUpload, function (error, results, fields) {
                // When done with the connection, release it.
                connection.release();

                // Handle error after the release.
                if (error) throw error;

                // Don't use the connection here, it has been returned to the pool.
                callback(results);
            });
        });
    },
    /**
     * 获取文件总数
     * @param {int} callback 
     */
    getSumUpload(callback){
        pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query(uplaodMapper.getSumUpload,function(error,results,fields){
                // 释放连接
                connection.release()
                callback(results)
            })
        })
    }
}

module.exports = uploadDao