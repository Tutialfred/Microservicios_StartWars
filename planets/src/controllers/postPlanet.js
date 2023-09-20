const data = require("../data/index")
const { response } = require("../utils")

module.exports = async (req, res) =>{
    const createC = await data.create() 
    response(res, 200, createC)
} 
