var express = require('express');
var router = express.Router();
var { employees } = require('../constants');

function stringCheck(query, actual){
  return query === undefined ? true : actual.toLowerCase().includes(query.toLowerCase());
}

function queryFilter(queryName, queryOffice, {name, office}) {
  return stringCheck(queryName, name) && stringCheck(queryOffice, office);
}

router.get('/', function(req, res, next) {
  const {queryName, queryOffice} = req.query;
  const arr = employees.filter((emp) => queryFilter(queryName, queryOffice, emp))
  return res.status(200).send(arr);
});
module.exports = router;