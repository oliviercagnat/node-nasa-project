// Our router is just an other type of middleware that groups together
// related routes.
// So we group all our planets related routes in this file

const express = require('express');

const {
    getAllPlanets
} = require('./planets.controller');

const planetsRouter = express.Router();

// This will have to be managed by the planetsController.
// The controller takes in action and requests from the User and 
// Work with them to update the modeles.
// Here we will keep our controllers next to our routers.
// Here the router makes direct use of the controller.
// Don't wanna move around to far to get the code.
planetsRouter.get('/planets', getAllPlanets);

module.exports = {
    planetsRouter
};

