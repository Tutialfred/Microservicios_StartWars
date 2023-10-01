const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware"); 



const app = express();

app.use(morgan("dev"));

// ! CHARACTERS
app.use("/menuCharacters", createProxyMiddleware({
    // target: "http://localhost:8001",
    target: "http://characters:8001",
    changeOrigin: true
}));
app.use("/characters", createProxyMiddleware({
    // target: "http://localhost:8001",
    target: "http://characters:8001", 
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    changeOrigin: true
}));
app.use("/postCharacters", createProxyMiddleware({
    // target: "http://localhost:8001",
    target: "http://characters:8001",
    changeOrigin: true
}));


// ! FILMS
app.use("/menuFilms", createProxyMiddleware({
    // target: "http://localhost:8002",
    target: "http://films:8002",
    changeOrigin: true
}));
app.use("/films", createProxyMiddleware({
    // target: "http://localhost:8002",
    target: "http://films:8002",
    changeOrigin: true
}));
app.use("/postFilms", createProxyMiddleware({
    // target: "http://localhost:8002",
    target: "http://films:8002",
    changeOrigin: true
}));


// ! PLANETS
app.use("/menuPlanets", createProxyMiddleware({
    // target: "http://localhost:8003",
    target: "http://planets:8003",
    changeOrigin: true
}));
app.use("/planets", createProxyMiddleware({
    // target: "http://localhost:8003",
    target: "http://planets:8003",
    changeOrigin: true
}));
app.use("/postPlanets", createProxyMiddleware({
    // target: "http://localhost:8003",
    target: "http://planets:8003",
    changeOrigin: true
}));



// ! DATABASE
app.use("/database", createProxyMiddleware({
    // target: "http://localhost:8003",
    target: "http://database:8004",
    changeOrigin: true
}));








app.listen(8000, () =>{
    console.log("Gateway on port 8000")
});