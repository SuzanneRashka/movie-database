var movies = require("../config/movies");

module.exports = function (app) {

    app.get('/api/movies', function (req, res) {
        return res.json(movies);
    });

}