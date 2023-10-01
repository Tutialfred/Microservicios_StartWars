const { response } = require("../utils")

module.exports = (req, res) =>{
    res.status(200).send("Character ready!")
    // response(res, 200, "ALL CHARACTERS IS HERE!")
}