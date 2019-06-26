//Js is synchronous
var fs = require('fs'); // importing file system 

console.log("Program Started");

var data = fs.readFileSync('./sample.txt');    // reading the sync -- only after the file is completely read, the following lines will get executed
// so this is a blocking I/O
console.log(typeof data);  // object
console.log(data.toString());  // this will be printed and then program ended

console.log("Program ended "); // this will be after the above line