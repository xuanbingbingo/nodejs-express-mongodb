var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//测试访问本地mysql数据库
/* GET users listing. */
router.get('/', function(req, res, next) {
  //建立与mysql数据库的链接
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
  });

  connection.connect();

  var usr={username:'libin',password:'haoyu5212'};

  connection.query('insert into users set ?', usr, function(err, result) {
    if (err) throw err;

    console.log(result);
    console.log('\n');
  });

  connection.query('select * from users', function(err, rows, fields) {
    if (err) throw err;

    console.log('selected after inserted');
    for(var i= 0,usr;usr=rows[i++];){
      console.log('user name='+usr.username + ', password='+usr.password);
    }

    console.log('\n');
  });

  connection.query('update users set password="ddd" where username="libin"', {password:'haoyu5212..'}, function(err, result) {
    if (err) throw err;

    console.log('updated zhangsan\'s password to ddd');
    console.log(result);
    console.log('\n');
  });

  connection.query('select * from users', function(err, rows, fields) {
    if (err) throw err;

    console.log('selected after updated');
    for(var i= 0,usr;usr=rows[i++];){
      console.log('user nae='+usr.username + ', password='+usr.password);
    }

    console.log('\n');
  });

  connection.query('delete from  users where username="libin"', function(err, result) {
    if (err) throw err;

    console.log('deleted zhangsan');
    console.log(result);
    console.log('\n');
  });

  connection.query('select * from users', function(err, rows, fields) {
    if (err) throw err;

    console.log('selected after deleted');
    for(var i= 0,usr;usr=rows[i++];){
      console.log('user nae='+usr.username + ', password='+usr.password);
    }

    console.log('\n');

  });

  connection.end();
  res.send('qqqqqq');
});

module.exports = router;
