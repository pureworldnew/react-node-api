const { tokenKey } = require("../config/config_env");
const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Register
exports.register = async (req, res) => {
  try {
    // Get the user input
    const { first_name, last_name, email, password } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({
      where: { email: { [Op.eq]: email } },
    });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    // Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in out database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign({ user_id: user.id, email }, tokenKey, {
      expiresIn: "2h",
    });

    console.log("token", token);

    // Save user token
    user.dataValues.token = token;
    console.log(user);
    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

// Login
exports.login = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // Validate if user exist in out database
    const user = await User.findOne({ where: { email: { [Op.eq]: email } } });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ user_id: user.id, email }, tokenKey, {
        expiresIn: "2h",
      });
      // save user token
      user.dataValues.token = token;

      res.status(200).json(user);
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};
