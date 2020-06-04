var { pool } = require('./databaseURL');
var app = require('../app');
var { queryHadAnError } = require('./queryHadAnError');
var { conditionString } = require('./conditionString');
var { updateString } = require('./updateString')

function getQuery(req, res){
  const sqlString = `SELECT * FROM employees${conditionString(req.query)}`;
  pool.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(200).send(result.rows);
  });
}

function putQuery(req, res){
  const {query, body} = req;
  const sqlString = `UPDATE employees SET ${updateString(body)}${conditionString(query)}`;
  pool.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(200).send({message: `${query.name} updated!`});
  });
}

module.exports = {
  getQuery,
  putQuery
}