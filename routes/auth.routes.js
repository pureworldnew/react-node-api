module.exports = (app) => {
  const auth = require("../controllers/auth.controller.js");

  let router = require("express").Router();

  // Register a new user
  router.post("/register", auth.register);
  // Login user
  router.post("/login", auth.login);

  app.use("/api/auth", router);
};
