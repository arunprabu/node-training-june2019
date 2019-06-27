var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  // res.send('I will change this');

  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>About Page</title>
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
          <h1>About Page</h1>
        </div>
      </body>
    </html>
    `

  )
  
});

module.exports = router;
