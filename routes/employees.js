var express = require('express');
var router = express.Router();
var {getQuery} = require('../databases/employeesDatabase');

router.get('/', function(req, res) {
  getQuery(req, res);
});

module.exports = router;