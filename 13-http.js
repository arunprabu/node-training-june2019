// create a server 
// run it in a port 
// handle req  and send resp 

var http = require("http"); //importing http module

function getTemplate( pageName ) {
  return  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${pageName}</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/any">Any</a></li>
      <ul>
    </nav>
    <div>
      <h1>${pageName}</h1>
    </div>
  </body>
  </html>`
}

var httpServer = http.createServer( (req, res) => {
  console.log("Server created in port 3000");
  //printed twice as one more req received to load favicon from chrome family browsers
  //firefox sends req to load favicon for the first time only. but chrome in each loading.

  //req is an obj
  //res is also an obj  
  //res can be sent only once 

  //algo:
  //1. understand the url --> req.url
  //2. understanding the http method - GET, POST, PUT, PATCH, DELETE (CRUD)
  //3. construct the right template and send
  console.log(req.url, req.method);
  
  res.writeHead(200, {"Content-Type": "text/html"});
  
  //send res only if it is http method is get
  if(req.method == 'GET'){
    switch(req.url){
      case '/':
        //send the res
        res.write(getTemplate("Home Page"));
        break;
      
      case '/about':
        //send the res 
        res.write(getTemplate("About Page"));
        break; 
      
      case '/faq':
        //send the res
        res.write(getTemplate("FAQ Page")); 
        break;
      
      default: 
        //send the res
        res.write(getTemplate("Any Page"));
    }
  }else{
    //if the http req method is not GET 
    res.write(`
      <h1>${req.method} method is not supported</h1>
    `);
  }
  
  res.end();

})

httpServer.listen(3000);