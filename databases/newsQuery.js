var { client } = require("./databaseURL"); 
var { newsEventAndDateExist, queryHadAnError } = require("./helperFunctions");

function getQuery(res){
  const sqlString = "SELECT * FROM Announcements";
  client.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return;}
    return res.status(200).send(result.rows);
  });
}

function postQuery(req, res){
  const {date, event} = req.query;
  if (!newsEventAndDateExist(date, event, res)) {return;}
  const sqlString = `INSERT INTO Announcements VALUES ('1', '${date}', '${event}')`;
  client.query(sqlString, function(err) {
    if(queryHadAnError(err, res)) {return;}
    return res.status(201).send({message: `Event ${date}: ${event} created!`});
  });
}

function deleteQuery(req, res){
  const {date, event} = req.query;
  if (!newsEventAndDateExist(date, event, res)) {return;}
  const sqlString = `DELETE FROM Announcements WHERE date='${date}' AND event='${event}'`;
  client.query(sqlString, function(err) {
    if(queryHadAnError(err, res)) {return;}
    return res.status(200).send({message: `Event ${date}: ${event} deleted!`});
  });
}

function putQuery(req, res){
  const {date, event, update} = req.query;
  if (!newsEventAndDateExist(date, event, res)) {return;}
  const sqlString = `UPDATE Announcements SET event='${event}' WHERE date='${date}' AND event='${event}'`;
  client.query(sqlString, function(err) {
    if(queryHadAnError(err, res)) {return;}
    return res.status(200).send({message: `Event updated to ${date}: ${update}!`});
  });
}

module.exports = {
  getQuery,
  postQuery,
  deleteQuery,
  putQuery
};