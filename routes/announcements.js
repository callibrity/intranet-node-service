var express = require('express');
var router = express.Router();
var {getQuery, postQuery, deleteQuery, putQuery} = require('../database');

router.get('/', function(req, res) {
  getQuery(res);
});

router.post('/', function(req, res) {
  postQuery(req, res);
});

router.delete('/', function(req, res) {
  deleteQuery(req, res);
});

router.put('/', function(req, res) {
  putQuery(req, res);
});

module.exports = router;
