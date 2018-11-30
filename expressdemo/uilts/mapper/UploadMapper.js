var upload={
    getAllUpload:'SELECT * from upload limit ?,?',
    getSumUpload:'SELECT COUNT(*) as sum FROM upload',
    getUploadByfilename:'SELECT * FROM upload WHERE filename = ?',
    insertUpload:'INSERT INTO upload SET ?',
}

module.exports=upload;