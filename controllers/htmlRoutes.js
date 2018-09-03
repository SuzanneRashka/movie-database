// const path = require("path");

var path = require('path');

module.exports = function (app) {

    // router.get("/movies", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../views/layouts/movies.html"));
    // });
    app.get("/movies", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/layouts/movies.html"));
    })

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/layouts/home.html"));
    })

}


// const routes = require('express').Router();

// routes.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/layouts/home.html"));
// })

// module.exports = routes;