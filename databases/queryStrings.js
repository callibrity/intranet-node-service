var { sqlWhereConditions, sqlUpdateValues, sqlInsertValues, objectIsEmpty } = require('./helperFunctions')

exports.getEmployeesQuery = ({query}) => (
  objectIsEmpty(query) ?
    'SELECT * FROM employees' 
    :`SELECT * FROM employees WHERE ${sqlWhereConditions(query)}`
)

exports.putEmployeesQuery = ({body, query}) => (
  `UPDATE employees SET ${sqlUpdateValues(body)} WHERE ${sqlWhereConditions(query)}`
)

exports.postEmployeesQuery = ({body}) => (
  `INSERT INTO employees ${sqlInsertValues(body)}`
)

exports.deleteEmployeesQuery = ({query}) => (
  `DELETE FROM employees WHERE ${sqlWhereConditions(query)}`
)

exports.getWikiQuery = ({query}) => (
  objectIsEmpty(query) ?
  'SELECT * FROM wiki_content'
)