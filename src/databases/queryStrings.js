const { sqlWhereConditions, objectIsEmpty } = require('./../helpers/helperFunctions')

exports.getEmployeesQuery = (query) => objectIsEmpty(query) ?
  'SELECT * FROM employees' 
  :`SELECT * FROM employees WHERE ${sqlWhereConditions(query)}`

exports.getUpdateEmployeeQuery = ({body}) => {
  const primary_key = body.callibrity_email;
  delete body.callibrity_email;
  let result = "";
  result += `UPDATE public.employees SET `
  Object.keys(body).forEach(key => result += `"${key}" = '${body[key]}',`);
  result = result.substring(0,result.length-1);
  result += ` WHERE "callibrity_email" = '${primary_key}'`;
  return result;
}
