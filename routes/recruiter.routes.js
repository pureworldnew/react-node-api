module.exports = (app) => {
  const recruiters = require("../controllers/recruiter.controller.js");
  const auth = require("../middleware/auth");

  let router = require("express").Router();

  // Retrieve all companies
  router.get("/", recruiters.findAll);

  // load recruiters
  router.get("/load", recruiters.load);

  // delete recruiters
  router.delete("/", recruiters.delete);

  app.use("/api/recruiters", router);
};
