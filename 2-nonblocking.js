//reading file without blocking -- non blocking I/O 
var fs = require('fs');

console.log("Pgm Started");

//it takes sometime to read the file entirely.
//JS Engine will work on other lines of code here before the file is completely read.
//After read, JS Engine will come back to the callback and execute it. 
//This is Async operation -- with arrow function
fs.readFile( './sample.txt', (err, data) => {
  if(!err){
    console.log(data.toString());
  }else{
    console.log(err);
  }
});

//the following will be printed before, and then the file content from line num 12
//This is non-blocking I/O
console.log("Pgm Ended");

