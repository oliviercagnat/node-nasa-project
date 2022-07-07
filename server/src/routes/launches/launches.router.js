// We setup our endpoints like in planetsRouter.
// We need to access the express framework to use its express router
// 

const express = require('express');

const {
    httpGetAllLaunches,
    httpAddNewLaunch
} = require('./launches.controller');

const launchesRouter = express.Router();

// Our first endpoint will get all of our launches.
launchesRouter.get('/', httpGetAllLaunches);
// Here post route
launchesRouter.post('/', httpAddNewLaunch);
// We can now use it in app.js
module.exports = launchesRouter;