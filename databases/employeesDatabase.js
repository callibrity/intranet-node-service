var { pool } = require('./databaseURL');
var app = require('../app');
var { queryHadAnError } = require('./queryHadAnError');
var { conditionString } = require('./conditionString');

function getQuery(req, res){
  const sqlString = `SELECT * FROM employees${conditionString(req.query)}`;
  console.log(sqlString);
  console.log(sqlString);
  pool.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(200).send(result.rows);
  });
}

module.exports = {
  getQuery
}