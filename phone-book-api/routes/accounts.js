var express = require('express');
var router = express.Router();

var mysql      = require('mysql');  // using the driver for mysql
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port: 3306,
  database : 'nodejs_phonebook_app'
});
connection.connect();

/* GET accounts listing by connecting to mysql  */
router.get('/', function(req, res, next) {
 // res.json({ msg: 'will make it work'});
  // executing mysql query
  connection.query('SELECT * from accounts', function (error, results, fields) {
    if (error) throw error;
    console.log('The accounts are: ', results);

    res.json( results );
  });
});

module.exports = router;
