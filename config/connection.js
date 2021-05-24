// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL)
}

else {
 sequelize =  new Sequelize('opus_db', 'root', process.env.myPassword, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    database: 'opus_db',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  });
}
// Exports the connection for other files to use
module.exports = sequelize;
