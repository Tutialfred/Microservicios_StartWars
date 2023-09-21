
const {ClientError} = require("../utils/errors/index")
 
module.exports = (req, res, next) =>{
    const { msg } = req.body
    if (msg) return next()
     else throw new ClientError("Don't contain 'Message'", 400)
}