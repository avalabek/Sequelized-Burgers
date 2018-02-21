


var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Burgers = sequelize.define("Burgers",{
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
    //how to auto increment

    },
    burger_name: {
         type: Sequelize.STRING,
         required: true
         
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
   }   },{
    timestamps:false
   }
    
);
Burgers.sync();
module.exports = Burgers;







// var orm = require("../config/orm.js");

// var burger = {
//     all: function(cb){
//         orm.all("burgers", function (res){
//             cb(res);
//         });
//     },
//     //cols and vals are arrays
//     create: function(cols, vals, cb) {
//         orm.create("burgers", cols, vals, function (res) {
//             cb(res);
//         });
//     },
//     update: function(objColVals, condition, cb){
//         orm.update("burgers", objColVals, condition, function(res){
//             cb(res);
//         });
//     }
// };
// // export the database functions for the controller
// module.exports = burger; 