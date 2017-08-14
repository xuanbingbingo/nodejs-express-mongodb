var express = require('express');
var router = express.Router();
var log4js = require('log4js');
const logger = log4js.getLogger('cheese');


/* GET home page. */
router.get('/', function(req, res, next) {
  // log4js.warn('this is a warn!')
  logger.info('this is a index request');
  logger.error('this is a test error');
  res.render('index', { title: 'Express' });
});

module.exports = router;
