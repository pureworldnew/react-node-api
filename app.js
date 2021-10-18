const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "API is working properly" });
});

//Logic goes here
// const User = require("./model/user");

//Register
app.post("/register", (req, res) => {});

//Login
app.post("/login", (req, res) => {});
module.exports = app;
