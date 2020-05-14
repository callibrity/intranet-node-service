var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.send('year and month needed')
})

router.get('/:year/:month', function(req, res, next) {

  res.send('test');
});

module.exports = router;
