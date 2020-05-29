var express = require('express');
var router = express.Router();
var { employees } = require('../constants');

router.get('/', function(req, res, next) {
  res.send(employees);
});
module.exports = router;