const { cachedAsync } = require("../utils")

module.exports = {
    getPlanets : cachedAsync(require("./getPlanets")),
    postPlanets : cachedAsync(require("./postPlanet")),
    getJSON: cachedAsync(require("./getJSON"))
}
