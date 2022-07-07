const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');
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

// cors node.js package for providing a Connect/Express middleware that can be used 
// to enable CORS (Cross-origin resource sharing)
app.use(cors({
    origin: 'http://localhost:3000',
}));

// Standard Apache combined log output. :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
// Displays all information: origins hosting the site, browser making request against our API
// In dev mode, when our BE and FE are being served from 2 different apps, we login only what's coming on the server.
// We get all the FE requests for our different files. They are mixed in with the API request of the BE with the planets.
// 
app.use(morgan('combined'));

// We build ths chain of middleware that handle requests that come to our App.
// They get checked with some Json content type if we are parsing some data.
// Then go through our express router which handles first all of these planets Routes.
app.use(express.json());

// Other express middleware to serve all our public files (where we got the build react app)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Here take the requests of the router.
app.use('/planets', planetsRouter);

// If we pass a path before our launchesRouter, we can also say it will only react to request under /launches
// It means that now we can make things shorter by adding it to our get and post routes.
app.use('/launches', launchesRouter);

// Route the path '/' to our index.html file, which is same as '/launch'
// We add /* so it matches everything that follows.
// To match any endpoint which is not matching above.
// What it doesn't match passes at index.html so React or FE can handle the routing instead.
// Our server just serves the html as it did before.
// Inside 
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})


module.exports = app;

