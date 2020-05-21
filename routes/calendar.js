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
