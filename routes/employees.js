const { dbCallStatus } = require("./../helpers/constants");
const { respondWithError, respondWithResult} = require("../helpers/helperFunctions");
const express = require("express");
const router = express.Router();
const { getEmployeesQuery, putEmployeesQuery } = require("../databases/queryStrings");
const { executeSingleQuery, executeMultiQuery} = require("../databases/executeQuery");

router.get("/", async (req, res) => {
  const queryString = getEmployeesQuery(req.query);
  const queryResult = await executeSingleQuery(queryString);
  if (queryResult.status === dbCallStatus.success)
    respondWithResult(res, queryResult.value);
  else {
    respondWithError(res, queryResult.value);
  }
});

//Todo, this is broken and the front end isn't passing the correct params anyways
router.put("/", async (req, res) => {
  const queryString = putEmployeesQuery(req.query);
  const queryResult = await executeSingleQuery(queryString);
  if (queryResult.status === dbCallStatus.success)
    respondWithResult(res, queryResult.value);
  else {
    respondWithError(res, queryResult.value);
  }
});

// async function doIt() {
//   const q = `SELECT * FROM employees WHERE UPPER("office") LIKE UPPER('%Cincinnati%')`;
//   const errQuery = "asdf";
//   const result = {};
//   [result.a, result.b, result.c, result.d] = await Promise.allSettled([
//     executeMultiQuery(q),
//     executeMultiQuery(errQuery),
//     executeMultiQuery(q),
//     executeMultiQuery(q),
//   ]);
//   return result;
// }

module.exports = router;
