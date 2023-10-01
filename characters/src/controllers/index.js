const { cachedAsync } = require("../utils")

// SACANDO EL CAHEDASYNC POR EL ERROR QUE LANZA
module.exports = {
    getCharacters: (require("./getCharacters.js")),
    allCharacters: cachedAsync(require("./allCharacters.js")),
    postCharacters: (require("./postCharacters.js"))
}