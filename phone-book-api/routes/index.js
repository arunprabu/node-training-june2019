var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(
    `<p>Index page</p>
    `
  )
});

module.exports = router;
