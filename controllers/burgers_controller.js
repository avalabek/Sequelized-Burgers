var express = require ("express");
var router = express.Router();
//took out below as need both models?
// var burger = require("../models/burger.js");
var db = require("../models");
// wrap in function for export
module.exports = function(router){
router.get("/", function(req,res) {
    db.Burgers.findAll(function(data){
    // burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// GET route for getting all of the todos
  router.get("/api/burgers", function(req, res) {
    // Add a Sequelize findAll method inside the GET route which finds all of the todos and returns them to the user as JSON.
    db.Burger.findAll().then(function(results) {
      res.json(results);
    });
  });
router.post("/api/burgers", function(req, res) {
    db.Burgers.create({
        burger_name: req.body.burger_name,
        devoured:  req.body.devoured
    }).then(function(result){
        res.json({id:result.insertID});
    })
    // burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    //send back the id of the new burger
    // res.json({ id: result.insertID });
    //below has no effect
    // res.redirect("/");
   });
// });
router.put("/api/burgers/:id", function(req, res) {
   db.Burgers.update({
       devoured: true
   },{
       where: {id: req.params.id}
   }).then(function(results){
       res.send(results);
   });
   });
};
    // var condition = "id = " + req.params.id;
    // console.log("condition", condition);
    // burger.updateOne([req.body.devoured],
    // // burger.update(
    //     {
    //         devoured: req.body.devoured
    //     },
        // condition,
        // function(result){
        //     console.log(result);
        //     if (result.changedRows === 0) {
                
        //         return res.status(404).end();
        //     }
        //     //add res.redirect changes nothing
        //     //  res.redirect("/");
        //     // res.status(200).end();
        // res.send(result);
        // }
    // );
    
// });
// export for server.js to use
