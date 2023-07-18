// Create web server
// Create a web server that can respond to requests for /comments.json
// with a JSON representation of the list of comments.
// Use our readFile function to read the comments.json file and then send
// the contents of the file back to the client using JSON.stringify.
// Remember to set the Content-Type header to application/json in your response.
// Everything should work properly if you go to http://localhost:8000/comments.json
// in your browser.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log('Responding to a request.');
  response.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };
  response.end(JSON.stringify(myObj));
});

server.listen(8000);
console.log('Listening on port 8000...');