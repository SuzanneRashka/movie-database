# SET UP LOCALHOST/SERVER

```
const express = require("express");
const bodyParser = require("body-parser");
// const router = require("./app/routes/apiMovies");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());

app.listen(PORT, function () {
console.log("Listening on port: " + PORT);
})
```

# SET UP THE FIRST ROUTE

- from the server.js file, require the file path and call on express to do so.
  - require("./controllers/htmlRoutes")(app);
  - can also be done with app.use() and calling require to route to the file path
- from the above example, going to the controllers folder to htmlRoutes... 
    - require 'path'
    - write a function for module_exports
    - write a GET, POST, etc. to send the file of a view
        - I'm not covering views or layouts yet


* From server page, request the file which is the route


