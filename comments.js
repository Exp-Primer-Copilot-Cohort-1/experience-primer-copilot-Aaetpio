// Create web server
// Create a web server that listens to incoming requests and sends back a response.
// The server should respond to a GET request to /comments with a JSON object of comments.

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  res.json({ comments: [] });
});

app.listen(3001);
// In the example above, we require the express module, create an application with express(), and then respond to a GET request to /comments with an empty array. Finally, we tell the application to listen on port 3001. This is the most basic example of a web server with Express. We'll cover more features and uses in the next few exercises.

// Instructions
// 100 XP
// 1. Create a new Express application and save it to a variable called app.
// 2. Create a GET route that sends back a JSON object, which contains a key of comments and a value of an empty array. Use the route /comments.

// My Code
var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  res.json({ comments: [] });
});

app.listen(3001);