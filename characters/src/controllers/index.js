const { cachedAsync } = require("../utils")

module.exports = {
    getCharacters: (require("./getCharacters.js")),
    allCharacters: cachedAsync(require("./allCharacters.js")),
    postCharacters: (require("./postCharacters.js"))
}