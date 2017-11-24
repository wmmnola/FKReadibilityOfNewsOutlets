// Requirements
let request = require("request");
let socket = require("socket.io")
let express = require("express");

// Implementations
let app = express();
let server = app.listen(3000);
let io = socket(server);
//app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.sendFile('index.html');
})


// Events
request.get('https://content.guardianapis.com/football', function(err,
  res, body) {
  body = JSON.parse(body);
  console.log(body);
});
