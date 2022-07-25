const express = require("express");
const exphbs = require("express-handlebars");
const bodypaser = require("body-parser");
const mysql = require("mysql");
const userRoutes = require('./routes/user')

require("dotenv").config();

const app = express();

app.use(bodypaser.urlencoded({ extended: false }));

// parse apllication/json
// app.use(express.json())
app.use(bodypaser.json());

// static files
app.use(express.static("public"));

// templating engines
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// connection

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// CONNECT TO DB

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log(`connected as ID, ${connection.threadId}`);
});

// Route
app.use("/api/v1/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT  ${PORT}.....`);
});
