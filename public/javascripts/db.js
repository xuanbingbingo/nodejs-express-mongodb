var mongoose = require('mongoose');
var DB_CONN_STR = 'mongodb://localhost:27017/test';
//建立连接
mongoose.connect(DB_CONN_STR);
/**
* 连接成功
*/
mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + DB_CONN_STR);  
});    

/**
* 连接异常
*/
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    

/**
* 连接断开
*/
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});

module.exports = mongoose;