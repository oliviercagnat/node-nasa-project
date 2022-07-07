// We make use of the launches Map
// const { launches } = require('../../models/launches.model');
const { getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
 } = require('../../models/launches.model');

// we set the resposne to get the 200 status code.
// But this Map object are not JS object notation.
// What we want to return from getAllLaunches is the list of values from Map
// We can get these values by calling the values function on the Map object
// We need first to convert it into JS object or array
// We use Array.from which takes iterable (launches.values) and turns it 
// into an array containing all the values.
// Our controller takes the data as it lives in the model,
// it manipulates the data into a format that works for our API into JSON that we can return
// to the FE.

// Now we know that any function starting with http return a http response.
// We let the model.js convert the data into an array with getAllLaunches()
function httpGetAllLaunches(req, res) {
    // return res.status(200).json(Array.from(launches.values()));
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate
        || !launch.target) {
          return res.status(400).json({
            error: 'Missing required launch property',
          });
        }

    launch.launchDate = new Date(launch.launchDate);
    // if (launch.launchDate.toString() === 'Invalid Date')
    // Same below
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
          error: 'Invalid launch date',
        });
      }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    // Check the ID in the params
    // Need to convert the string ID into a Number.
    const launchId = Number(req.params.id);
    
    // if launch doesn't exist
    if (!existsLaunchWithId(launchId)) {
        return res.status(404).json({
            error: 'Launch not found',
        });
    }

    // if has not been aborted
    const aborted = abortLaunchById(launchId);

    // return when exist and could be aborted
    return res.status(200).json(aborted);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};