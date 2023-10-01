const { cachedAsync } = require("../utils")

// Sacamos todos los 'cachedAsync' por que lanzaba un error
module.exports = {
    getPlanets : (require("./getPlanets")),
    postPlanets : (require("./postPlanet")),
    getJSON: (require("./getJSON"))
}
