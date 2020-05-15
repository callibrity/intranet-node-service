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
    event: "Alex, Alex, and Alec thought everyone should change their names to Ale*"
  }
];

/* Testing out announcements with random strings */
router.get('/', function(req, res, next) {
  res.send(announcements);
});
module.exports = router;
