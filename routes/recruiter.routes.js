module.exports = (app) => {
  const recruiters = require("../controllers/recruiter.controller.js");
  const auth = require("../middleware/auth");

  let router = require("express").Router();

  // load recruiters
  router.get("/load", recruiters.load);

  app.use("/api/recruiters", router);
};
