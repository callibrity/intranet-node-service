var express = require('express');
var router = express.Router();
var client = require('../database');

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

router.get('/', function(req, res) {
  const sqlString = 'SELECT * FROM Announcements';
  client.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(200).send(result.rows);
  });
});

router.post('/', function(req, res) {
  const {date, event} = req.query;
  if (!eventAndDateExist(date, event, res)) {return}
  const sqlString = `INSERT INTO Announcements VALUES ('1', '${date}', '${event}')`;
  client.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(201).send({message: `Event ${date}: ${event} created!`});
  });
});

router.delete('/', function(req, res) {
  const {date, event} = req.query;
  if (!eventAndDateExist(date, event, res)) {return}
  const sqlString = `DELETE FROM Announcements WHERE date='${date}' AND event='${event}'`;
  client.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(200).send({message: `Event ${date}: ${event} deleted!`});
  });
});

router.put('/', function(req, res) {
  const {date, event, update} = req.query;
  if (!eventAndDateExist(date, event, res)) {return}
  const sqlString = `UPDATE Announcements SET event='${event}' WHERE date='${date}' AND event='${event}'`
  client.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return}
    return res.status(200).send({message: `Event updated to ${date}: ${update}!`});
  });
});

module.exports = router;
