const { dbCallStatus } = require("../helpers/constants");
const { respondWithError, respondWithResultAndSuccess, respondWithSuccess } = require("../helpers/helperFunctions");
const express = require("express");
const router = express.Router();
const { getEmployeesQuery, getUpdateEmployeeQuery } = require("../databases/queryStrings");
const { executeSingleQuery} = require("../databases/executeQuery");

router.get("/", async (req, res) => {
  const queryString = getEmployeesQuery(req.query);
  const queryResult = await executeSingleQuery(queryString);
  if (queryResult.status === dbCallStatus.success)
    respondWithResultAndSuccess(res, queryResult.value);
  else {
    respondWithError(res, queryResult.value);
  }
});

router.put("/", async (req, res) => {
  const queryString = getUpdateEmployeeQuery(req);
  const queryResult = await executeSingleQuery(queryString);
  if (queryResult.status === dbCallStatus.success)
    respondWithSuccess(res);
  else {
    respondWithError(res, queryResult.value);
  }
});

module.exports = router;
