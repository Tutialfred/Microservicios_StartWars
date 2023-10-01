// const { cachedAsync } = require("../utils")
const { cachedAsync } = require("../utils")

// SACAMOS EL 'CACHEDASYNC' por el error que lanza
module.exports = {
    getFilms: (require("./getFilms.js")),
    getJson: (require("./getJson.js")),
    postFilms: (require("./postFilms.js"))
}