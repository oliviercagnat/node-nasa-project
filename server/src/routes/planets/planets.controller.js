const { getAllPlanets } = require('../../models/planets.model');

// This status code is optional since express returns it by default.
// But it's always better to return some responses.
// Here with the return, make sure that the controller only returns the response once.
// Wehen we try to respond multiple times, express complains about header already being set.
// Once we set the response, it's locked in.
// The return value is not used by express.
// We just use the return to make sure the function stops executing when response is ever set.
function httpGetAllPlanets(req, res) {
    return res.status(200).json(getAllPlanets());
}

module.exports = httpGetAllPlanets;