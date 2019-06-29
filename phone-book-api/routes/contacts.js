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

//static url should take higher precedence over the dynamic
router.get('/search', function(req, res, next){
  console.log(req.params);

  // reading query params --http://localhost:3000/api/contacts/search?fullName=arun 
  console.log(req.query);  //fullName with value will be inside this obj
  res.json({
    searchResults: "Search is not implemented yet"
  });
});

//GET req for fetching one contact -- catching url parameters
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
  var contactId = req.params.id;  // what contactId we have to update 
  var updatableContact = req.body;  //with what data we have to update 

  //send the req to services 
  contactService.updateContact(contactId, updatableContact, function(err, data){ 
    //receive data from the services
    if (!err) {
      //send it back as JSON
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

router.delete('/:id', function(req, res, next) {
  console.log("Inside Delete Request");
  res.json( {
    status: "Deleted Successfully!"
  });
});


module.exports = router;
