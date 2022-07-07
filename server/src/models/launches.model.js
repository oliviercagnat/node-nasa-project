const { httpGetAllLaunches } = require("../routes/launches/launches.controller");

// We will use a Map object to store the data
const launches = new Map();

let latestFlightNumber = 100;

// We want to store our lauches in an objet
const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    success: true,
};

// We set the flightNumber as the key, and the rest of the launch object as a value
// We can access them with get.
launches.set(launches.flightNumber, launch);

// Here the function return the format we needed (an array) we don't do it longer in our controller.
function getAllLaunches() {
    return Array.from(launches.values());
}

// Function to create new launch.
// Given a launch flightNumber, we want to set the launches at that key based on that flightNumber.
// Will be difficult for the client to keep track of the number.
// We want to start at last flightNumber, and increment. And use it as key for our new launch.
// But if we say that our launch here has no flightNumber, because set on the server side with latestFlightNumber,
// we need to add it to our launch object.
// It will retrn a new object with the flightNumber correctly set.
function addNewLaunch(launch) {
    latestFlightNumber += 1;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ['ZTM', 'NASA'],
            flightNumber: latestFlightNumber,
    }));
}

module.exports = {
    getAllLaunches,
}

