const axios = require("axios")

const planets = require("./planets.json")



module.exports = { 
    list: async () => {
        const result = await axios.get("http://database:8004/Planet");
        return result        
        // return planets;
    },
    create: async() =>{
        // throw Error("X Error al crear")
        return "CREADO CON EXITO"
    }
};







