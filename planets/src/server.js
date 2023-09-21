const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

// Ningun endpoint que deberia haber encontrado, como ultimo cae aca ↓ 
server.use("*", (req, res) =>{
    res.status(404).send("Not Found ☼ You are wrong")
})

// Manejador de errores 'invisible', sobreescribiendo el manejadores de erroes por default de Express
server.use((error, req, res, next) => {
    res.status(error.statusCode || 500).send({
    error: true,
    message: error.message
});
});










module.exports = server;