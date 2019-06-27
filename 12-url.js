const myURL =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL.href); //entire 
console.log(myURL.host);  // domain name
console.log(myURL.port); // 8080
console.log(myURL.protocol); //https