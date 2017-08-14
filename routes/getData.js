var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';

/* GET users listing. */
router.get('/getData', function(req, res, next) {
  //执行数据库取操作
  MongoClient.connect(DB_CONN_STR,function(err,db){
    if(err) throw err;
    db.collection('myTable').find().toArray(function(err,result){
      console.log(result);
      res.header("Access-Control-Allow-Origin", "*");
      res.json(result);
    })
  })
});

module.exports = router;