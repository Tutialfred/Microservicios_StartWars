const json = require("../data")
const {response} = require("../utils")

module.exports = async (req, res) =>{
    const films = await json.list()
    response(res, 200, films)
}