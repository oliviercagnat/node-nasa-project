const http = require('http');

const app = require('./app');

// We call the planetsModel first, so we can load our planets first.
const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

// Create server and log the Port
const server = http.createServer(app);

// We await so our planetData is available for any request coming to our server.
// But we can't call await at the top level of a file.
// Needs to be inside of an async function. So let's create one.
// Here we wait for our loadPlanetData to resolve before starting the server.listen.

async function startServer() {
    await loadPlanetsData();
    
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  }
// We don't have to await our function, because nothing happens after we start our server.
// No code below waiting.
startServer();




// With this setup, we can separate the server function from our express code that we put 
// in app.js 
