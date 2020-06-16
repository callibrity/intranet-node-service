var { client } = require("./databaseClient"); 
var { queryHadAnError, sqlConditionString, sqlUpdateString } = require("./helperFunctions");

function getQuery(req, res){
  const { query } = req;
  const sqlString = `SELECT * FROM "Employees"${sqlConditionString(query)}`;
  client.query(sqlString, function(err, result) {
    if(queryHadAnError(err, res)) {return;}
    return res.status(200).send(result.rows);
  });
}

function putQuery(req, res){
  const {query, body} = req;
  const sqlString = `UPDATE "Employees" SET ${sqlUpdateString(body)}${sqlConditionString(query)}`;
  client.query(sqlString, function(err) {
    if(queryHadAnError(err, res)) {return;}
    return res.status(200).send({message: `${query.name} updated!`});
  });
}

module.exports = {
  getQuery,
  putQuery
};