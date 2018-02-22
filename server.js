var express = require ("express");
var bodyParser = require("body-parser");

var db = require("./models");
db.sequelize.sync();

//3000 or 8080?
var PORT = process.env.PORT || 3000;
var app = express();

//afternoon changes this exists in burgers_controller but may belong here
var router = express.Router();




//additions ?

var connection = require("./config/connection.js");
// var db = require("./models");

//serve static contnet for the app from public directory
app.use(express.static("public"));
//should this be the below
//app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

//delete the below?
app.use (bodyParser.json());


//set handlebars
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes this then creates table in the sequelize_burgers database I already created
//below 3:43 pm
// var routes = require("./controllers/burgers_controller.js");

// app.use(routes);
require("./controllers/burgers_controller.js")(router);
app.use("/",router)

// db.sequelize.sync({force: true }).then(function(){
app.listen(PORT, function(){
    console.log("App listening at port: " + PORT);
})
//  });
module.exports = app;