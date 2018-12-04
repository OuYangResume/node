const express = require('express')
const router = express.Router()
let uploadDao = require('../dao/UploadDao')
let upload = require('../uilts/uploadUilts')
let commonUilts = require('../uilts/commonUilts')
/**
 * 获取所有文件列表
 */
router.get('/getAllupload', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    console.dir(req);
    var data = {};
    uploadDao.getSumUpload((results) => {
        console.dir(results[0].sum)
        data.total = results[0].sum;
        uploadDao.getAllupload((uploadList) => {
            //console.dir(uploadList);
            data.uploadList = uploadList;
            res.send(data);
        });
    })
})
/**
 * 文件上传至服务器并保存到数据库
 */
router.post('/insertUpload', upload.any(), (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    //console.dir(req);
    var data ={};
    if (req.files.length > 0) {
        let filename = req.files[0].filename; //文件名
        let mimetype = req.files[0].mimetype;// 文件类型
        let uploadname = req.body.name; //上传人
        uploadDao.getUploadByFilename(filename, function (results) {
            console.dir(results);
            //判断文件是否存在
            if (results.length > 0) {
                data.code=202;
                data.msg = filename+"该文件也存在"
                res.send(data)
            } else {
                let uploadtime = commonUilts.getNowFormatDate();
                let file = { filename: filename, uploadtime: uploadtime, uploadname: uploadname, mimetype: mimetype };
                uploadDao.insertUpload(file, (results) => {
                    console.dir(results);
                    data.code=200;
                    data.msg="上传成功"
                    res.send(data)
                })
            }
        })
    } else {
        data.code=201;
        data.msg="没有选择上传的图片"
        res.send(data)
    }
})
/**
 * 按分页获取文件列表
 */
router.get('/getUploadByLimit', (req, res, next) => {  
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    //console.dir(req);
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    var pageNum = parseInt(param.pageNum || 1);// 页码
    var end = parseInt(param.pageSize || 10); // 默认页数
    var start = (pageNum - 1) * end;
    var data = {};
    uploadDao.getSumUpload((results) => {
        console.dir(results[0].sum)
        data.total = results[0].sum;
        uploadDao.getUploadByLimit(start,end,(uploadList)=>{
            data.uploadList = uploadList;
            res.send(data);
        })
    })
})
module.exports = router