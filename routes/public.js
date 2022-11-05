var express = require('express');
var router = express.Router();

// /* GET Backend Homepage. */
router.get('/public', function(req, res, next) {
    res.render('index.html');
    });

module.exports = router;