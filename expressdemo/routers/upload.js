const express = require('express')
const router = express.Router()
let uploadDao = require('../dao/UploadDao')

router.get('/getAllupload', (req, res, next) => {
    uploadDao.getAllupload((uploadList) => {
        console.dir(uploadList);
        res.send(uploadList)
    });
    uploadDao.getSumUpload((sum)=>{
        console.dir(sum[0].sum)

    })
})

module.exports = router