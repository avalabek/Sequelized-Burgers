//initialize Sequelize
var Sequelize = require("sequelize");
//the sequelize instance, no caps
var sequelize = new Sequelize
("sequelize_burgers", "root", "root",{
   
    host: "localhost",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        idle: 10000
    } 
    });
    module.exports = sequelize;

// if (process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "root",
//         database: "burgers_db"
//     });
// };

// connection.connect(function(err){
//     if (err){
//         console.error("Error connecting: " + err.stack);
//         return;
//     }
//     console.log("Connected as id " + connection.threadId);
// });
// //export for ORM to use
// module.exports = connection;