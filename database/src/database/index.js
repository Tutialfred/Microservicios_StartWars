const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const connection = mongoose.createConnection(MONGO_URI);


module.exports = {
    Character : connection.model("Character", require("./schemas/characterSchema")),
    Film : connection.model("Film", require("./schemas/filmSchema")),
    Planet: connection.model("Planet", require("./schemas/planetSchema"))
}


//! Testeando los modelos
// const planet = connection.model("Planet", require("./schemas/planetSchema"))

// planet.find()
// // .populate("films", ["_id", "title"])
// .populate("residents", ["name"])
// .then((res)=>{
//     console.log(res[0]);
// });
