const express = require('express')
const router = express.Router()
const connection = require('../uilts/mysqlEngine') //数据库配置
let bodyParser = require('body-parser') //表单请求 
let uploadSql = require('../dao/UploadMapper')

var fs = require('fs');
var multer = require('multer') //文件上传


var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//创建一个connection
connection.connect(function (err) {
    if (err) {
        console.log('连接失败' + err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

router.get('/getAllUser', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    let sql = 'SELECT * from user'
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
        //console.log('The solution is: ', rows[0]);
        res.send(rows);
    })
    // connection.end()
})

router.post('/insterUser', urlencodedParser, (req, res) => {
    console.dir(req.body);//取参数里面的值
    res.send(req.body.name)
})

router.post('/insterJsonUser', jsonParser, (req, res) => {
    console.dir(req.body);
    res.send(req.body.name)
})
/**
 * 获取当前时间格式“yyyy-MM-dd HH:MM:SS”
 */
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}
/**
 * 创建文件目录
 * @param {String} folder 
 */
var createFolder = function (folder) {
    try {
        fs.accessSync(folder)
    } catch (e) {
        fs.mkdirSync(folder)
    }
}

var uploadFolder = "./upload/";
createFolder(uploadFolder);

/**
 * 设置文件上传目录和文件名
 */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
        //   cb(null, file.fieldname + '-' + Date.now())
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

/**
 * 文件上传
 */
router.post('/upload', upload.any(), (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    console.dir(req);
    if (req.files.length > 0) {
        let filename = req.files[0].filename; //文件名
        let mimetype = req.files[0].mimetype;// 文件类型
        let uploadname = req.body.name; //上传人
        connection.query(uploadSql.getUploadByfilename, [filename], function (error, results, fields) {
            if (error) throw error;
            //判断文件是否存在
            if (results.length > 0) {
                res.send(filename + "已存在,请修改文件名重新上传。")
            } else {
                let uploadtime = getNowFormatDate();
                console.dir(uploadtime)
                let file = { filename: filename, uploadtime: uploadtime, uploadname: uploadname, mimetype: mimetype };
                var query = connection.query(uploadSql.insertUpload, file, function (error, results, fields) {
                    if (error) throw error;
                    res.send(filename + "在" + uploadtime + "时上传成功")
                });
            }
        })
    } else {
        res.send("请选择你想要上传的图片")
    }


})
/**
 * 判断文件是否存在(有问题!!)
 * @param {*} filename 
 */
function isuploadname(filename) {
    connection.query(uploadSql.getUploadByfilename, [filename], function (error, results, fields) {
        if (error) throw error;
        let query;
        if (results.length > 0) {
            query = true;
        }
        query = false;
        // return  results.length > 0 ?  query = true : query = false;
        return query
    })
    console.dir(query)
    return query;
}
/**
 * 获取所有图片，并分页。
 */
router.get('/getAllupload', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    //console.dir(req)
    connection.query(uploadSql.getSumUpload, (err, result) => {
        if (err) throw err
        var sum = result[0].sum;
        console.dir(result)
        console.dir(sum);
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        var pageNum = parseInt(param.pageNum || 1);// 页码
        var end = parseInt(param.pageSize || 10); // 默认页数
        var start = (pageNum - 1) * end;
        connection.query(uploadSql.getUploadByLimit, [start, end], function (err, rows, fields) {
            if (err) throw err
            var uploadList=rows;
            console.dir(sum);
            var uploadData={
                "uploadList":uploadList,
                "total":sum
            }
            res.send(uploadData);
        })
    })

    // connection.end()
})
/**
 *  获取图片总数
 */
function getUploadSum() {
    connection.query(uploadSql.getSumUpload, (err, result) => {
        if (err) throw err
        console.dir(result);
        return result.sum;
    })
}
module.exports = router