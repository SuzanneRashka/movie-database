var express = require("express");
var bodyParser = require("body-parser");
// const router = require("./app/routes/apiMovies");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// app.use('/', routes);

require("./controllers/htmlRoutes")(app);
require("./controllers/apiMovies")(app);

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});

