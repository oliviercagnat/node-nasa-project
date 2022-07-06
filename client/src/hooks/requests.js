const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.

  // We use the fetch function.
  // Our client and server are on different ports (3000 & 8000)
  // We need to specify it when we make our requests.
  // fetch returns a promise, so we need to await it.
  // Because it's already async, we use await.
  // We set it as our response, and return it as JSON.
  // Because we are returning the JS object in our controller which is a JSON. 
  // for planets, it's an array of JS object.

  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};