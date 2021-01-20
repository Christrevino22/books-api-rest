const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const pool = require("./SQL/connection");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json("Hello, World!!!");
});
app.use(bodyParser.json());

app.get("/books", (req, res) => {
  pool.query("SELECT * FROM books", (err, rows) => {
    if (err) throw new Error(err);
    return res.json(rows);
  });
});
app.listen(PORT, console.log("APP LISTENING FROM", PORT));
