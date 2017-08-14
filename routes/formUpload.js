var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var multiparty = require('multiparty');
var util = require('util');
// var debug = require('debug');

function getExName(str){
  var pos = str.lastIndexOf('.');
  return str.substring(pos);
}

router.post('/formUpload', function(req, res){

  var form = new multiparty.Form({uploadDir: './static'});
  //上传完成后处理
  form.parse(req, function(err, fields, files) {
    console.log(fields);
    console.log(files);

    var filesTmp = JSON.stringify(files,null,2);
    if(err){
      console.log('parse error: ' + err);
    } else {
      console.log('parse files: ' + filesTmp);
      var inputFile = files.userFile[0];
      var uploadedPath = inputFile.path;
      // var dstPath = './static/' + inputFile.originalFilename;//文件原始名称
      var dstPath = './static/' + fields.name[0] + getExName(inputFile.originalFilename);//改为自定义名称;
      //重命名为真实文件名
      fs.rename(uploadedPath, dstPath, function(err) {
        if(err){
          console.log('rename error: ' + err);
        } else {
          console.log('rename ok');
        }
      });
    }
    res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: filesTmp}));
  });

  // if (req.busboy) {
  //   req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
  //     console.log(file);
  //     var saveTo = path.join(__dirname.replace('routes', 'static'), 'heh.png');
  //     file.pipe(fs.createWriteStream(saveTo));
  //     file.on('end', function () {
  //       //在这边可以做一些数据库操作
  //       res.json({
  //         success: true
  //       });
  //     });
  //   });
  //   req.pipe(req.busboy);
  // }
})

module.exports = router;