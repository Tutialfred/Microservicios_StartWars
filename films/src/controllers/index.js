const { cachedAsync } = require("../utils")

module.exports = {
    getFilms: cachedAsync(require("./getFilms.js")),
    getJson: cachedAsync(require("./getJson.js")),
    postFilms: cachedAsync(require("./postFilms.js"))
}