var mongoose = require('./db');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String},
    password: {type: String},
    age: {type: Number},
    logindate: {type: Date}
})

module.exports = mongoose.model('test',userSchema)
