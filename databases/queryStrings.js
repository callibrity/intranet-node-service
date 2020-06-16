var { sqlWhereConditions, sqlUpdateValues, objectIsEmpty } = require('./helperFunctions')

exports.getEmployeesQuery = ({query}) => objectIsEmpty(query) ?
  'SELECT * FROM "Employees"' 
  :`SELECT * FROM "Employees" WHERE ${sqlWhereConditions(query)}`

exports.putEmployeesQuery = ({body, query}) => (
  `UPDATE "Employees" SET ${sqlUpdateValues(body)} WHERE ${sqlWhereConditions(query)}`
)