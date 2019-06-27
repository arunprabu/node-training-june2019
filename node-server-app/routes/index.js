var express = require('express'); // imports
var router = express.Router(); 

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'My Node app', devName: 'Arun' });

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Home Page</title>
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
        <h1>Home Page</h1>
      </div>
    </body>
  </html>
  `);
});

//POST method 
router.post('/', function(req, res, next) {
  console.log(req.body);

  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Home Page</title>
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
          <h1>Received Data ${req.body.name} and ${req.body.email}</h1>
        </div>
      </body>
    </html>
    `
  )
});


module.exports = router;
