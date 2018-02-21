var express = require ("express");
var bodyParser = require("body-parser");
//3000 or 8080?
var PORT = process.env.PORT || 3000;
var app = express();

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
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

burger.sequelize.sync().then(function(){
app.listen(PORT, function(){
    console.log("App listening at port: " + PORT);
})
});