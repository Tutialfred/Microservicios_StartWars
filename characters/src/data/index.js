const axios = require("axios")
const json = require("./characters.json")

module.exports = {
    files: async () =>{
        const result = await axios.get("http://database:8004/Character");
        // return [{"tuti": "crack"}]
        return result.data
    },
}