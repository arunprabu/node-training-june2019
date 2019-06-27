var express = require('express'); // imports
var router = express.Router(); 

/* GET faq page. */
router.get('/', function(req, res, next) {
  
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>FAQ Page</title>
    </head>
    <body>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/any">Any</a></li>
        <ul>
      </nav>
      <div>
        <h1>FAQ Page</h1>
      </div>
    </body>
  </html>
  `);
});


module.exports = router;
