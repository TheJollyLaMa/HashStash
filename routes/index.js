var express = require('express');
var router = express.Router();

/* GET Backend Homepage. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET Backend data. */
router.get('/da', function(req, res, next) {
  // mock json data
  var mock_api_data = [ 
    {
      "name": "John Doe",
      "age": 32,
      "cars": [
         "Ford",
         "BMW",
          "Fiat"
      ]
    },
    {
      "name": "Jane Doe",
      "age": 30,
      "cars": [
          "Ford",
          "BMW",
          "Fiat"
      ]
    },
    {
      "name": "James Doe",
      "age": 25,
      "cars": [
          "Ford",
          "BMW",
          "Fiat"
      ]
    }
  ];
  res.json(mock_api_data);
});

router.get('/about', function(req, res) {
  fs.readFile('ReadMe.md', 'utf8', function(err, data) {
    if(err) {
      console.log(err);
    }
    res.send(marked(data.toString()));
  });
});
module.exports = router;