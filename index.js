const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const pool = require("./SQL/connection");

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Hello, World!!!");
});

app.get("/games", (req, res) => {
  pool.query("SELECT * FROM games", (err, rows) => {
    if (err) throw new Error(err);
    return res.json(rows);
  });
});
app.listen(PORT, console.log("APP LISTENING FROM", PORT));
