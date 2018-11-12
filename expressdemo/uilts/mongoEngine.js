var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://39.108.100.163:27017/animals', function (err, client) {
  if (err) throw err

  var db = client.db('animals')
  
  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err
    console.log(result)
  })
})