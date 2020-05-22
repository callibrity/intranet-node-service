var { Pool } = require('pg');
var app = require('./app');

var testString = 'postgres://jdkfzrdp:Rj2bM4jUptX89UEQEUiC0pyb6SMPZN6L@raja.db.elephantsql.com:5432/jdkfzrdp';
var devString = 'postgres://xsuzfsll:sSa6qY83tfbIeykZ4Np1mROIohahR9w0@salt.db.elephantsql.com:5432/xsuzfsll';
var prodString = 'postgres://jrzjwmlt:Y4Z6XpJfFVh4wqih79IW_CofZR1VzrbE@salt.db.elephantsql.com:5432/jrzjwmlt';
var env = process.env.NODE_ENV;

var conString = env === 'test' ? testString : env === 'production' ? prodString : devString;
var pool = new Pool({connectionString: conString});

function eventAndDateExist(date, event, res){
  if(!date){
    res.status(400).send({message: 'Date is missing!'});
    return false;
  }
  if(!event){
    res.status(400).send({message: 'Event is missing!'})
    return false;
  }
  return true;
}

function queryHadAnError(err, res){
  if(err) {
    res.status(500).send({message: `Request Failed: ${err}`});
    return true;
  }
  return false;
}

function getQuery(res){
  const sqlString = 'SELECT * FROM Announcements';
  pool.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(200).send(result.rows);
  });
}

function postQuery(req, res){
  const {date, event} = req.query;
  if (!eventAndDateExist(date, event, res)) {return}
  const sqlString = `INSERT INTO Announcements VALUES ('1', '${date}', '${event}')`;
  pool.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(201).send({message: `Event ${date}: ${event} created!`});
  });
}

function deleteQuery(req, res){
  const {date, event} = req.query;
  if (!eventAndDateExist(date, event, res)) {return}
  const sqlString = `DELETE FROM Announcements WHERE date='${date}' AND event='${event}'`;
  pool.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(200).send({message: `Event ${date}: ${event} deleted!`});
  });
}

function putQuery(req, res){
  const {date, event, update} = req.query;
  if (!eventAndDateExist(date, event, res)) {return}
  const sqlString = `UPDATE Announcements SET event='${event}' WHERE date='${date}' AND event='${event}'`
  pool.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(200).send({message: `Event updated to ${date}: ${update}!`});
  });
}

const client = {
  getQuery,
  postQuery,
  deleteQuery,
  putQuery
}

module.exports = client;

/*
module.exports = {
  query: (text, callback) => {
    const start = Date.now();
    return pool.query(text, (err, res) => {
      const duration = Date.now() - start;
      const rows = res ? res.rowCount : undefined;
      console.log('executed query', {text, duration, rows});
      callback(err, res)
    })
  }
};
*/