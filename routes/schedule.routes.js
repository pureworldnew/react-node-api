module.exports = (app) => {
  const schedules = require("../controllers/schedule.controller.js");
  const auth = require("../middleware/auth");

  let router = require("express").Router();

  // Retrieve all companies
  //   router.get("/", schedules.findAll);

  // load schedules
  router.post("/", schedules.load);

  // get schedules
  router.get("/", schedules.get);

  // delete schedules
  //   router.delete("/", schedules.delete);

  app.use("/api/schedules", router);
};
