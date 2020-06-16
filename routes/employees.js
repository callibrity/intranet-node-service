var express = require("express");
var router = express.Router();
var {getQuery, putQuery} = require("../databases/employeesQuery");

router.get("/", function(req, res) {
  getQuery(req, res);
});

router.put("/", function(req, res) { 
  putQuery(req, res);
});

module.exports = router;