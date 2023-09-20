const json = require("../data/index")
const { response } = require("../utils")

module.exports = async (req, res) =>{
        const jsonPlanets = await json.list();
        response(res, 200, jsonPlanets)
}
