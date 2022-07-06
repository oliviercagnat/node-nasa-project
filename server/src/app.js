const express = require('express');

const planetsRouter = require('./routes/planets/planets.router');

// We create the app object that we will pass in createServer
// Any middleware attached to app will respond to request coming from the server
// express is a listener function for our node http server. 
// It's build on the top of our node http server that we can use to orgoanize our
// request handler by making routes and using middleware.

// We know that our express server will take some JSON DataTransfer, so we can use ou 
// the built-in express.json middleware, which parse incoming JSON from the body of 
// incoming request.
// Now we separated all express middleware from server function to organize our code better
// Structure we can use for any scale of node application going forward.
const app = express();
app.use(express.json());

module.exports = app;

