const express = require("express");
const morgan = require("morgan");


const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

// Client visita cualquier otra URL de la aplicacion
server.use("*", (req,res) =>{
    res.status(400).send("You are LOSS")
})

// Configurando el manejador de errores por default de Express
server.use((error, req, res, next) => {
    res.status(error.statusCode || 500).send({
        error: true,
        message: error.message
    })
});


module.exports = server;
