var express = require('express');
var router = express.Router();

var contactService = require('../services/contactService');

//for api http://localhost:3000/api/contacts

/* GET req for listing down all contacts api end point. */
router.get('/', function(req, res, next) {
  contactService.getContacts(function (err, data) {
    if (!err) {
      //4. send it back as JSON
      res.json(data);
    } else {
      res.json(err);
    }
  })
});

// POST req for creating contact 
router.post('/', function(req, res, next) {

  // methods, req obj  -- ok 
  contactService.createContact(req.body, function(err, data) {
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  })
});

//GET req for fetching one contact 
router.get('/:id', function(req, res, next) {
  console.log(`Requested contactId is ${req.params.id}`);
  contactService.getContactById(req.params.id, function(err, data){
    if (!err) {
      if(data){
        //4. send it back as JSON
        res.json(data);
      }else{
        res.json({ status: 'Unable to find contact with Contact Id: ' + req.params.id })
      }
    } else {
      res.json(err);
    }
  })
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
