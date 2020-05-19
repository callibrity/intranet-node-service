var express = require('express');
var router = express.Router();

const employees = 
[
  {
    "id": 0,
    "name": "Alec",
    "role": "Software Developer",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/DSC04255%20(1).jpg?width=900&height=900&name=DSC04255%20(1).jpg"
  },
  {
    "id": 1,
    "name": "Allen",
    "role": "Senior Software Developer",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/Callibrity_December2018%20Theme/Images/allen-h.jpg?width=900&height=900&name=allen-h.jpg"
  },
  {
    "id": 2,
    "name": "Andrew",
    "role": "Financial Analyst",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/Callibrity_December2018%20Theme/Images/andrew-b.jpg?width=900&height=900&name=andrew-b.jpg"
  },
  {
    "id": 3,
    "name": "Andy",
    "role": "Software Developer",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/Callibrity_December2018%20Theme/Images/andy-g.jpg?width=900&height=900&name=andy-g.jpg"
  },
  {
    "id": 4,
    "name": "Airc",
    "role": "Associate Software Developer",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/DSC04244%20(1).jpg?width=900&height=900&name=DSC04244%20(1).jpg"
  },
  {
    "id": 5,
    "name": "Aubrey",
    "role": "Software Developer",
    "photo": "https://www.callibrity.com/hs-fs/hubfs/Callibrity_December2018%20Theme/Images/aubrey-f.jpg?width=900&height=900&name=aubrey-f.jpg"
  }
];

router.get('/', function(req, res, next) {
  res.send(employees);
});
module.exports = router;