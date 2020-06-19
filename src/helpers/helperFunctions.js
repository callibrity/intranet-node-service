const forEachQueryParam = (query, callback) => {
  const queryParams = Object.keys(query)
  queryParams.forEach((queryParam) => {
    const tableColumn = queryParam
    const paramValue = query[queryParam]
    callback(tableColumn, paramValue)
  })
} 

exports.sqlWhereConditions = function(query){
  let sqlConditions = ''
  forEachQueryParam(query, (tableColumn, searchValue) => {
    const conditionString = `UPPER("${tableColumn}") LIKE UPPER('%${searchValue}%')`
    sqlConditions = sqlConditions === '' ? 
      `${conditionString}` 
      : `${sqlConditions} AND ${conditionString}` 
  })
  return sqlConditions
}

exports.objectIsEmpty = (obj) => Object.keys(obj).length === 0;

exports.respondWithError = (res, err) => res.status(500).send({message: `Request Failed: ${err}`});

exports.respondWithResultAndSuccess = (res, result) => res.status(200).send(result.rows);

exports.respondWithSuccess = (res) => res.status(200).send();