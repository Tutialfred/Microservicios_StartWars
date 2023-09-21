const planets = require("./planets.json")



module.exports = { 
    list: async () => {
        return planets;
    },
    create: async() =>{
        // throw Error("X Error al crear")
        return "CREADO CON EXITO"
    }
};







