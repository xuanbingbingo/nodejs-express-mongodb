var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var MongoDBCURD = require("../public/javascripts/mongodbCommon");
var DB_CONN_STR = 'mongodb://localhost:27017/test';

//测试访问本地mongodb数据库
/* GET users listing. */
router.post('/postData', function(req, res, next) {

  //执行数据库取操作
  let name = req.body.name;

  //要查找的字段
  let options = {
    name: '菜鸟工具'
  };

  //要插入的数据
  let data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];

  //要更新的数据
  let whereStr = {"name":'菜鸟教程'};
  let updateStr = {$set: { "url" : "https://www.runoob.com" }};

  //要删除的数据

  //let whereStr = {"name":'菜鸟教程'};

  //连接数据库操作
  MongoClient.connect(DB_CONN_STR,function(err,db){
    if(err) throw err;

    // 查找数据
    MongoDBCURD.selectData(db, 'myTable', {}, function(result){
      res.header("Access-Control-Allow-Origin", "*");
      res.json(result);
    })

    //插入数据
    // MongoDBCURD.insertData(db, 'myTable', data, function(result){
    //   console.log(result);
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.json(result);
    // })

    //更新数据 (数据表中的某条数据)
    // MongoDBCURD.updateData(db, 'myTable', whereStr, updateStr, function(result){
    //     console.log(result);
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.json(result);
    // })

    //删除数据
    // MongoDBCURD.deleteData(db, 'myTable', whereStr, function(result){
    //     console.log(result);
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.json(result);
    // })
  })
});

module.exports = router;