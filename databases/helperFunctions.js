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

exports.sqlUpdateValues = function(query){
  let sqlUpdate = ''
  forEachQueryParam(query, (tableColumn, updateValue) => {
    const updateString = `"${tableColumn}"='${updateValue}'`
    sqlUpdate = sqlUpdate === '' ? updateString : `${sqlUpdate}, ${updateString}`
  })
  return sqlUpdate
} 

exports.sqlInsertValues = function(query){
  let sqlColumns = ''
  let sqlValues = ''
  forEachQueryParam(query, (tableColumn, updateValue) => {
    const sqlColumns = sqlColumns === '' ? tableColumn : `, ${tableColumn}`
    const sqlValues = sqlValues === '' ? updateValue : `, ${updateValue}`
  })
  return `(${sqlColumns}) VALUES (${sqlValues})`
}

exports.objectIsEmpty = (obj) => Object.keys(obj).length === 0

exports.respondWithError = (res, err) => res.status(500).send({message: `Request Failed: ${err}`})

exports.respondWithResult = (res, result) => res.status(200).send(result.rows)