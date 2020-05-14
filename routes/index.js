var express = require('express');
var router = express.Router();

const announcements = [];

const randomTime = 1589397591722;

for (let i = 0; i < 10; i += 1) {
  const newTime = randomTime - i * 10000000000;
  announcements.push(
    {
      time: newTime,
      text: newTime.toString().repeat(50)
    }
  )
}

const calendar = [];



/* GET home page. */
router.get('/announcements', function(req, res, next) {
  const reducedAnnouncements = announcements.filter(({time}) => time >= randomTime - 3 * 10000000000)
  res.send(reducedAnnouncements);
});

router.get('/calendar', function(req, res, next) {
  res.send(calendar);
});

module.exports = router;
