const { Schema } = require("mongoose");

const characterSchema = new Schema({
    "_id": String,
    "name": String,
    "height": String,
    "mass": String,
    "hair_color": String,
    "skin_color": String,
    "eye_color": String,
    "birth_year": String,
    "gender": {type: String, enum: ["male","female", "none", "n/a", "hermaphrodite"]},

    // Referencia del id del planeta
    "homeworld": { type: String, ref:"Planet" },

    // Array referencia de films 
    "films": [ { type: String, ref:"Film" } ]
});







//! Funciones del modelo ↓
characterSchema.statics.list = async function(){
    return await this.find()

    // Datos a mostrar ↓
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function(id){
    return await this.findById(id)
    
    // Datos a mostrar ↓
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};


characterSchema.statics.insert = async function(character) {
    return await this.create(character)
};


module.exports = characterSchema;