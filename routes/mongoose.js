var express = require('express')
var router = express.Router()
var User = require('../public/javascripts/user')

var user = new User({
    username : 'Tracy McGrady',                 //用户账号
    password: 'abcd',                            //密码
    age: 37,                                //年龄
    logindate : new Date()                      //最近登录时间
});
/**
 * 插入
 */
function insert() {
    

    user.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

function update(){
    var wherestr = {'username' : 'Tracy McGrady'};
    var updatestr = {'userpwd': 'zzzz'};

    User.update(wherestr, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
function findByIdAndUpdate(){
    var id = '56f2558b2dd74855a345edb2';
    var updatestr = {'userpwd': 'abcd'};
    
    User.findByIdAndUpdate(id, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
function del(){
    var wherestr = {'username' : 'Tracy McGrady'};
    
    User.remove(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
function getByConditions(){
    var wherestr = {'username' : 'Tracy McGrady'};
    
    User.find(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

function getByConditions(){
    var wherestr = {'username' : 'Tracy McGrady'};
    var opt = {"username": 1 ,"_id": 0};
    
    User.find(wherestr, opt, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

router.post('/mongoose', function(req, res){
    console.log(req.body)
    insert()
})

module.exports = router;