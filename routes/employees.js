var express = require('express');
var router = express.Router();
var { employees } = require('../constants');

router.get('/', function(req, res, next) {
  const {findName} = req.query;
  const arr = findName === null ? employees
  :employees.filter(({name}) => name.toLowerCase().contains(findName.toLowerCase()))
  res.send(employees);
});
module.exports = router;