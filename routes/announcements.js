var express = require('express');
var router = express.Router();

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
    event: "Alex, Alex, and Alec did not care.  That was everyone else's problem."
  }
];

/* Testing out announcements with random strings */
router.get('/', function(req, res, next) {
  res.send(announcements);
});
module.exports = router;
