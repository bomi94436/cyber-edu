const mysql = require("mysql2");
require("dotenv").config();

//
// Create mysql database pool on localhost
//

module.exports = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  charset: "utf8",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
