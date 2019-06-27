//Todo: write a file in this directory 'arun.txt'
// after writing, read the file content by emitting custom event

var fs = require("fs"); // importing file system
var events = require("events");

var eventEmitter = new events.EventEmitter();

var data = "My First File created using JS";


eventEmitter.on("ON_FILE_WRITTEN", function() {
  //Read file async
  fs.readFile( './arun.txt', (err, data) => {
    if(!err){
      console.log("File read Successfully and here goes the content...");
      console.log(data.toString());
    }else{
      console.log(err);
    }
  });
});

//writing file in the name of output.txt 
fs.writeFile('./arun.txt', data, (err) => {
  if(!err){
    console.log("File written successfully");
    
    eventEmitter.emit("ON_FILE_WRITTEN");
  }else{
    console.log("Some error occured " );
    console.log(err);
  }
});


console.log("Program Ended prints first because writeFile is async");