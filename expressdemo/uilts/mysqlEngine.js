//数据库
const mysql = require('mysql')
var connection = mysql.createConnection({
    host: '39.108.100.163',
    user: 'root',
    password: 'qwer',
    database: 'test'
});

module.exports =connection;