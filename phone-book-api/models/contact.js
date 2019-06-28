var mongoose = require('./mongooseConnection'); //importing connection config
var autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create

var Schema = mongoose.Schema;

//Schema for Contact Collection
var Contact = new Schema( {
  contactId: {
    type: Number,
    unique: true  // primary key
  },
  fullName: String, 
  email: String, 
  phoneNo: String,
  createdBy : String,
  createdOn : {type: Date, default: Date.now},
  updatedBy : String,
  updatedOn : {type: Date, default: Date.now}
});

Contact.plugin(autoIncrement.plugin, {model: 'Contact', field: 'contactId', startAt: 1 });

module.exports = mongoose.model('Contact', Contact); //creating this as model for the collection Contact