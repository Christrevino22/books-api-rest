const mysql = require("mysql");
require("dotenv").config();

console.log("this is here", process.env.DB_HOST);
class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.DB_HOST,
        user: process.env.BD_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
