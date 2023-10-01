const server = require("./src/server");
const { Character, Film, Planet } = require("./src/database/");



//! Probando las Funciones de los modelos ↓ 
// Planet.list()
// .then(res =>{
//     console.log(res[0])
// })



server.listen(8004, () =>{
    console.log("Database listen on port 8004");
});