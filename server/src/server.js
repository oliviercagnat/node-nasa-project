const http = require('http');

const app = require('./app');
// We create the app object that we will pass in createServer
// Any middleware attached to app will respond to request coming from the server
// express is a listener function for our node http server. 


const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// Create server and log the Port
server.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}...`);
});

// With this setup, we can separate the server function from our express code that we put 
// in app.js 
