var events = require('events'); // Import events module
var data = "test";

var eventEmitter = new events.EventEmitter();
//custom event 

eventEmitter.on("ON_DATA_PRINTED", function() {
  console.log("Data printed successfully");
});

//attach listener for the emitted custom events 
eventEmitter.on("ON_CONNECTION_ESTABLISHED", (_data) => {
  console.log("Inside emitted events listener");
  console.log(_data);
  
  //Todo: emit an event 'DATA_PRINTED' and then add listener for it
  eventEmitter.emit("ON_DATA_PRINTED");
});

console.log("event emitting");
//create custom event 
eventEmitter.emit("ON_CONNECTION_ESTABLISHED", data);//emit the custom event  
