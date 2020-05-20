var express = require('express');
var router = express.Router();
var client = require('../database');

router.get('/', function(req, res){

  client.query('SELECT * FROM Calendar', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }

    const {startMonth, startYear, endMonth, endYear} = getStartAndEndFromRequest(req);
  
    const list = result.rows.filter(ele => {
      const [year, month] = ele.start.split('-');
      const yearCheck = year >= startYear && year <= endYear;
      const monthCheck = month >= startMonth && month <= endMonth;
      return yearCheck && monthCheck;
    })
  
    res.send(list);
  });
})

const events = [
  { title: 'April 1 event', start: '2020-04-01', end: '2020-04-04' },
  { title: 'April 2 event', start: '2020-04-02', end: '2020-04-08' },
  { title: 'April 26 event', start: '2020-04-26', end: '2020-04-27' },
  { title: 'May 1 event', start: '2020-05-01', end: '2020-05-04' },
  { title: 'May 7 event', start: '2020-05-07', end: '2020-05-08' },
  { title: 'June 7 event', start: '2020-06-07', end: '2020-06-08' },
  { title: 'June 15 event', start: '2020-06-15', end: '2020-06-30' },
];

function getStartAndEndFromRequest(req){
  const {start, end} = req.query;
  const s = new Date(start);
  const startMonth = s.getMonth() + 1;
  const startYear = s.getFullYear();
  const e = new Date(end);
  const endMonth = e.getMonth() + 1;
  const endYear = e.getFullYear();
  return {startMonth, startYear, endMonth, endYear};
}

module.exports = router;
