var fs = require("fs"); // importing file system

var data = "My First File created using JS";

//writing file in the name of output.txt 
fs.writeFile('./output.txt', data, function(err) {
  if(!err){
    console.log("File written successfully");
  }else{
    console.log("Some error occured " );
    console.log(err);
  }
});

console.log("Program Ended prints first because writeFile is async");
