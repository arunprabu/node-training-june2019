var Contact = require('../models/contact');

//CREATE A CONTACT
exports.createContact = function(contactData, callback){
  console.log(contactData);
  // 3. Construct our own query to Create Contact
  var contactDao = new Contact(contactData);
  //exec
  contactDao.save( function(err, savedContact) {
    // 4. Get status from Database
    if (!err) {
      console.log(`Contact registered successfully with contactId:${savedContact.contactId}`);
    }
    //  5. Channelise it to the router
    callback(err, savedContact);
  });
}

//get all contacts
exports.getContacts = function (callback) {
  Contact.find({}, function (err, contactList) {
    if (!err) {
      console.log("Fetched all contacts", contactList)
    }
    callback(err, contactList);
  });
}

//getContactById
exports.getContactById = function( _contactId, callback){
  //construct query   
  console.log(_contactId);
  //construct query and exec 
  Contact.findOne( { contactId: _contactId }, function(err, contactData) {
    if (!err) {
      console.log("Fetched contact of contactId :" + _contactId);
    }
    callback(err, contactData);
  });
} 

//UpdateContact
exports.updateContact = function( _contactId, newContactData, callback) {
  console.log(_contactId);
  console.log(newContactData);

  //1. construct the query and exec query 
  Contact.updateOne({ contactId: _contactId}, newContactData, function(err, data) {
    //2. get the data from db 
    if(!err){
      console.log("updated successfully");
    }

    //3. send it back to routes 
    callback(err, data);
  });
}

//DeleteContact 