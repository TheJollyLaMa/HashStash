var express = require('express');
var router = express.Router();

// /* GET Frontend Homepage. */
router.use('/', express.static('public'));
/* Open all public routes with a #! */
router.all('/', function (req, res, next) {
  res.sendFile('public/index.html', '/#!/');
});

module.exports = router;
