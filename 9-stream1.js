var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream('./large_data.txt', { start: 200, end: 1400})

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

readerStream.on("data", function(chunk) {
  data+= chunk;
});

readerStream.on("end", function(){
  console.log("===================OPERATION ENDED =================");
  console.log(data);
});

readerStream.on("error", function(err) {
  console.log("Some error occured");
  console.log(err);
});