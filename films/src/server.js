const express = require("express");
const morgan = require("morgan");


const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

server.use("*", (req, res) =>{
    res.status(400).send("You are Loss")
})

server.use((error, req, res, next) =>{
    res.status(error.statusCode || 500).json({
        error: true,
        message: error.message
    });
});




module.exports = server;
