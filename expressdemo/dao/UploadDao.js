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
    getSumUpload(callback) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(uplaodMapper.getSumUpload, function (error, results, fields) {
                if (error) throw error;
                // 释放连接
                connection.release()
                callback(results)
            })
        })
    },
    /**
     * 根据文件名称查询文件列表
     * @param {string} filename 
     * @param {*} callback 
     */
    getUploadByFilename(filename,callback){
        pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query(uplaodMapper.getUploadByfilename,[filename],function(error,results,fields){
                if(error) throw error;
                connection.release()
                callback(results);
            })
        })
    },
    /**
     * 上传一个文件对象
     * @param {object} file 
     * @param {*} callback 
     */
    insertUpload(file,callback){
        pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query(uplaodMapper.insertUpload,file,function(error,results,fields){
                if(error) throw error;
                connection.release()
                callback(results)
            })
        })
    },
    /**
     * 分页获取文件信息
     * @param {int} start  
     * @param {int} count 
     * @param {*} callback 
     */
    getUploadByLimit(start,count,callback){
        pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query(uplaodMapper.getUploadByLimit,[start,count],function(error,results,fields){
                if(error) throw error;
                connection.release();
                callback(results)
            })
        })
    }
}

module.exports = uploadDao