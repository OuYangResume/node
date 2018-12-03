var fs = require('fs');
var multer = require('multer') //文件上传

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

module.exports =upload