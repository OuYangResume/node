const express = require('express')
const router = express.Router();
// const connection=require('./../uilts/mongoEngine')
var mongoose = require('mongoose')
// mongoose.connect('mongodb://39.108.100.163:27017/test');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
//连接数据库
//假如数据库不存在，会自动创建一个数据库
var url1 = 'mongodb://127.0.0.1:27017/test';
let url = 'mongodb://39.108.100.163:27017/test';

MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.strictEqual(null, err);
    console.dir("Connection mongodb successfully to server");
    let data1 =[
        { name: "AS" }, { a: 2 }, { a: 3 }
    ]
    let data=require("./../public/location.json")
    insertDocuments(client, data,(result) =>{
        console.log(result)
    });
});

/**
 * @description: 插入数据
 * @param {type} 
 * @return: callback
 */
function insertDocuments(client, data, callback) {
    // get ths documents collection
    var db = client.db("test");
    // insert some documents
    db.collection("location").insert(data, function (err, result) {
        assert.strictEqual(err, null);
        // assert.strictEqual(3, result.result.n);
        // assert.strictEqual(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};

module.exports = router