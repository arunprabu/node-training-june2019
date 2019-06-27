var express = require('express');
var router = express.Router();
//for api http://localhost:3000/api/contacts

/* GET req for listing down all contacts api end point. */
router.get('/', function(req, res, next) {
  res.json(
    [
      { id:1, fullName: "Arun", phoneNo: 1244323, email: 'a@example.com'},
      { id:2, fullName: "John", phoneNo: 3453245, email: 'j@example.com'},
      { id:3, fullName: "Peter", phoneNo: 3242234, email: 'peter@example.com'}
    ]
  );
});

// POST req for creating contact 
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json({
    id: 4,
    fullName: req.body.fullName,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    status: 'Saved Successfully!'
  });
});

//GET req for fetching one contact 
router.get('/:id', function(req, res, next) {
  res.json(
    { id: req.params.id, fullName: "Arun", phoneNo: 1244323, email: 'a@example.com'}
  );
});

//PUT req for updating one contact
router.put('/:id', function(req, res, next) {
  console.log("Inside Put Req");
  console.log(req.body);

  res.json(
    {
      id: req.params.id,
      fullName: req.body.fullName,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      status: 'Updated Successfully!'
    }
  )
});

router.delete('/:id', function(req, res, next) {
  console.log("Inside Delete Request");
  res.json( {
    status: "Deleted Successfully!"
  })
});

module.exports = router;
