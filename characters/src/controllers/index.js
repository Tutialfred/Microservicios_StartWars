const { cachedAsync } = require("../utils")

module.exports = {
    getCharacters: cachedAsync(require("./getCharacters.js")),
    allCharacters: cachedAsync(require("./allCharacters.js")),
    postCharacters: cachedAsync(require("./postCharacters.js"))
}