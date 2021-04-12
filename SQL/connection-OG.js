const mysql = require("mysql");
require("dotenv").config();
//ME AND MATT WENT THRU THIS AND I BEILIEVE WE ONLY HAD A TYPING ISSUE WHICH WE RESOLVED
console.log("this is here", process.env.DB_HOST);
class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        // database: process.env.DB_SCHEMA,
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
