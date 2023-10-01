const axios = require("axios")
const json = require("./films.json");

module.exports = {
    list : async() =>{
        const result = await axios.get("http://database:8004/Film");
        return result.data
        // return json  
    },
};