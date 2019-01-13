var MongoClient = require('mongodb')

var connection=MongoClient.connect('mongodb://localhost:27017/test');

module.exports = connection;