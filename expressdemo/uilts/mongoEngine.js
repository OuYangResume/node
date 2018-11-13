var MongoClient = require('mongodb')

var connection=MongoClient.connect('mongodb://39.108.100.163:27017/test');

module.exports = connection;