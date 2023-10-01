const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(require("./routes"));

server.use("*", (req,res) =>{
    res.status(404).send("You are loss Dude");
});

server.use((error, req, res, next) =>{
    res.status(error.statusCode || 500).json({
        error: true,
        message: error.massage
    });
});


module.exports = server;