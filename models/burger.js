


// var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes){

var Burgers = sequelize.define("Burgers",{
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
    //how to auto increment

    },
    burger_name: {
         type: DataTypes.STRING,
         required: true
         
    },
    devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
   }   },{
timestamps:false
   }
    
);
// Burgers.sync();
return Burgers;
};







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