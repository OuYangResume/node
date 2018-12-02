var upload={
    getUploadByLimit:'SELECT * from upload limit ?,?',
    getSumUpload:'SELECT COUNT(*) as sum FROM upload',
    getUploadByfilename:'SELECT * FROM upload WHERE filename = ?',
    insertUpload:'INSERT INTO upload SET ?',
    getAllUpload:'SELECT * from upload'
}

module.exports=upload;