// Description: Database connection configuration using MySQL with connection pooling
// This code sets up a MySQL connection pool using the mysql2 library and environment variables for configuration.
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise(); // Using promise wrapper for async/await
