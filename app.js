const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

app.use(express.static("ui-react/build"));

require("./routes/user.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/company.routes")(app);
require("./routes/recruiter.routes")(app);

module.exports = app;
