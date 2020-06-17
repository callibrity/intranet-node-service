var { sqlWhereConditions, sqlUpdateValues, objectIsEmpty } = require('./helperFunctions')

exports.getEmployeesQuery = ({query}) => objectIsEmpty(query) ?
  'SELECT * FROM employees' 
  :`SELECT * FROM employees WHERE ${sqlWhereConditions(query)}`

exports.putEmployeesQuery = ({body, query}) => (
  `UPDATE "Employees" SET ${sqlUpdateValues(body)} WHERE ${sqlWhereConditions(query)}`
)

exports.getWikiQuery = ({body, query}) => objectIsEmpty(query) ?
  'Select * FROM "Employees"'
  :'SELECT * FROM "Empl'
  `UPDATE employees SET ${sqlUpdateValues(body)} WHERE ${sqlWhereConditions(query)}`
)
