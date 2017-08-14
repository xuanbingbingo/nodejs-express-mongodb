
function MongoDBCURD(){};

//插入数据
MongoDBCURD.prototype.insertData = function(db, table, options, callback) {
  //获取表链接
  let collection = db.collection(table);
  collection.insert(options, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }
    callback(result);
  });
}

//查找数据
MongoDBCURD.prototype.selectData = function(db, table, options, callback) {
  //获取表链接
  let collection = db.collection(table);
  //连接到表
  collection.find(options).toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }
    callback(result);
  });
}

//更新数据
MongoDBCURD.prototype.updateData = function(db, table, whereStr, updateStr, callback) {
  //连接到表
  var collection = db.collection(table);
  //更新数据
  // var whereStr = {"name":'菜鸟教程'};
  // var updateStr = {$set: { "url" : "https://www.runoob.com" }};
  collection.update(whereStr,updateStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }
    callback(result);
  });
}

//删除数据
MongoDBCURD.prototype.deleteData = function(db, table, whereStr,  callback) {
  //连接到表
  var collection = db.collection(table);
  //删除数据
  // var whereStr = {"name":'菜鸟教程'};
  // var updateStr = {$set: { "url" : "https://www.runoob.com" }};
  collection.remove(whereStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }
    callback(result);
  });
}

module.exports = new MongoDBCURD();