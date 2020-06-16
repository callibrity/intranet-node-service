var { client } = require('./databaseClient') 
var {respondWithError, respondWithResult} = require('./helperFunctions')

exports.executeQueryAndRespond = function(req, res, buildQueryString ){
  client.query(buildQueryString(req), (err, result) => {
    if(err){
      respondWithError(res, err)
    } else {
      respondWithResult(res, result)
    }
  })
}
