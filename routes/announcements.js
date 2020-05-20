var express = require('express');
var router = express.Router();
var client = require('../database');

const announcements = [
  {
    date: 'May 3',
    event: 'Alex, Alex, and Alec became acquainted'
  },
  {
    date: 'May 4',
    event: 'Alex, Alex, and Alec confused everyone with their names'
  },
  {
    date: 'May 5',
    event: "Alex, Alex, and Alec thought everyone should change their names to Ale*"
  }
];

router.get('/', function(req, res, next) {
  client.query('SELECT * FROM Announcements', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    res.send(result.rows);
  });
});
module.exports = router;
