var express = require('express')
var router = express.Router()
var {getEmployeesQuery, putEmployeesQuery} = require('../databases/queryStrings')
var {executeQueryAndRespond} = require('../databases/executeQueryAndRespond')

router.get('/', (req, res) => executeQueryAndRespond(req, res, getEmployeesQuery))

router.put('/', (req, res) => executeQueryAndRespond(req, res, putEmployeesQuery))

module.exports = router