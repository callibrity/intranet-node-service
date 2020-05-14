var express = require('express');
var router = express.Router();
var getCalendar = require('./getCalendar');

router.get('/', function(req, res, next){
  res.send('year and month needed')
})

router.get('/:year/:month', function(req, res, next) {
  const { year, month } = req.params;
  const calendar = getCalendar( year, month );
  res.send(calendar);
});

module.exports = router;
