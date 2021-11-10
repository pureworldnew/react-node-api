const db = require("../models");
const Recruiter = db.Recruiter;
const Op = db.Sequelize.Op;
const { httpRequest, asyncFilter, convertLocal } = require("../utils");
const { calendlyKey } = require("../config/config_env");

const userOptions = {
  host: "api.calendly.com",
  port: 443,
  path: "/users/me",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${calendlyKey}`,
  },
};

// let recruiter = [
//   {
//     field: "createdAt",
//     headerName: "Created",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "phoneNumber",
//     headerName: "Phone Number",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "startTime",
//     headerName: "Start Time",
//     type: "number",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "interviewerName",
//     headerName: "Interviewer Name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "companyName",
//     headerName: "Company Name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "roleName",
//     headerName: "Role Name",
//     width: 100,
//   },
//   {
//     field: "kindOfInterview",
//     headerName: "Kind Of Interview",
//     width: 150,
//   },
//   {
//     field: "extraNotes",
//     headerName: "Anything sharing",
//     width: 200,
//   },
// ];
// load scheduling event from calendly
exports.load = async (req, res) => {
  let result = await httpRequest(userOptions);
  let timezone = result.resource.timezone;
  let organization = result.resource.current_organization;
  let status = "active";
  let count = 90;
  let minDateTime = new Date(req.body.minDateTime);
  let maxDateTime = new Date(req.body.maxDateTime);
  let min_start_time = JSON.stringify(
    new Date(minDateTime.setHours(0, 0, 0, 0))
  );
  let max_start_time = JSON.stringify(
    new Date(maxDateTime.setHours(24, 0, 0, 0))
  );
  let path = `/scheduled_events?count=${count}&organization=${organization}&status=${status}&min_start_time=${min_start_time.substring(
    1,
    min_start_time.length - 1
  )}&max_start_time=${max_start_time.substring(1, min_start_time.length - 1)}`;

  console.log("path", path);

  const eventListOptions = {
    host: "api.calendly.com",
    port: 443,
    path: path,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${calendlyKey}`,
    },
  };

  let eventList = await httpRequest(eventListOptions);
  console.log("eventList", eventList);
  let promises = [];

  let startTime = [];

  try {
    eventList.collection.forEach((e) => {
      startTime.push(e.start_time);
      let eventDetailOptions = {
        host: "api.calendly.com",
        port: 443,
        path: `/scheduled_events/${e.uri.split("/").pop()}/invitees`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${calendlyKey}`,
        },
      };
      promises.push(httpRequest(eventDetailOptions));
    });

    let eventListDetails = await Promise.all(promises);

    // write data into DB
    let insertPromises = await asyncFilter(eventListDetails, async (e, i) => {
      let cnt = await Recruiter.count({
        where: { eventUid: e.collection[0].event.split("/").pop() },
      });
      if (cnt === 0) return true;
      else return false;
    });
    let dbInsertResult = {};
    if (!(insertPromises && Object.keys(insertPromises).length === 0)) {
      insertPromises.map((e, i) => {
        return Recruiter.create({
          createdTime: e.collection[0].created_at,
          eventUid: e.collection[0].event.split("/").pop(),
          startTime: startTime[i],
          interviewerName: e.collection[0].name,
          companyName: e.collection[0].questions_and_answers[0]
            ? e.collection[0].questions_and_answers[0].answer
            : "",
          roleName: e.collection[0].questions_and_answers[1]
            ? e.collection[0].questions_and_answers[1].answer
            : "",
          kindOfInterview: e.collection[0].questions_and_answers[2]
            ? e.collection[0].questions_and_answers[2].answer
            : "",
          extraNotes: e.collection[0].questions_and_answers[3]
            ? e.collection[0].questions_and_answers[3].answer
            : "",
        });
      });
      dbInsertResult = await Promise.all(insertPromises);
    }

    res.send(dbInsertResult);
  } catch (e) {
    console.log(e);
  }
};

//Retrieve all recruiters from the database
exports.findAll = (req, res) => {
  let todayTime = new Date(new Date().toUTCString());
  Recruiter.findAll({
    order: [["startTime", "ASC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving companys.",
      });
    });
};

//Delete all recruiters
exports.delete = (req, res) => {
  const ids = req.body.ids;
  if (ids == "All") {
    Recruiter.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} recruiters were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all recruiters!",
        });
      });
  }
};
