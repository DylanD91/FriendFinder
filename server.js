// Dependencies
const express = require("express");
const app = express();

//Port
const PORT = process.env.PORT || 8080;

// Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// Routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
