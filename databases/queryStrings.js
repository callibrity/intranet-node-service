const { sqlWhereConditions, sqlUpdateValues, objectIsEmpty } = require('./../helpers/helperFunctions')

exports.getEmployeesQuery = (query) => objectIsEmpty(query) ?
  'SELECT * FROM employees' 
  :`SELECT * FROM employees WHERE ${sqlWhereConditions(query)}`

exports.putEmployeesQuery = ({body, query}) => (
  `UPDATE employees SET ${sqlUpdateValues(body)} WHERE ${sqlWhereConditions(query)}`
)