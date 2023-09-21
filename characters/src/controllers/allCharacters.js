const json = require("../data/index.js")
const {response} = require("../utils")

module.exports = async(req, res) =>{
    const jsonC = await json.files()
    // res.status(200).json(jsonC)
    response(res, 200, jsonC);
}