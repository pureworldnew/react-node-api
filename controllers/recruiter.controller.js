const db = require("../models");
const Recruiter = db.Recruiter;
const Op = db.Sequelize.Op;
const httpRequest = require("../utils");
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

  let organization = result.resource.current_organization;
  let status = "active";
  let min_start_time = "2021-11-04T17:15:00.000000Z";

  const eventListOptions = {
    host: "api.calendly.com",
    port: 443,
    path: `/scheduled_events?organization=${organization}&status=${status}&min_start_time=${min_start_time}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${calendlyKey}`,
    },
  };

  let eventList = await httpRequest(eventListOptions);
  let promises = [];

  eventList.collection.forEach((e) => {
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
  let insertPromises = eventListDetails.map((e) => {
    return Recruiter.create({
      createdTime: e.collection[0].created_at,
      phoneNumber: e.collection[0].email,
      startTime: e.collection[0].email,
      interviewerName: e.collection[0].name,
      companyName: e.collection[0].questions_and_answers[0].answer,
      roleName: e.collection[0].questions_and_answers[1].answer,
      kindOfInterview: e.collection[0].questions_and_answers[2].answer,
      extraNotes: e.collection[0].questions_and_answers[3]
        ? e.collection[0].questions_and_answers[3].answer
        : "",
    });
  });
  let dbInsertResult = await Promise.all(insertPromises);
  res.send(dbInsertResult);
};

//Retrieve all recruiters from the database
exports.findAll = (req, res) => {
  console.log("findall is working");
  //   const interviewer_name = req.query.interviewerName;
  //   let condition = interviewer_name
  //     ? { interviewer_name: { [Op.like]: `%${interviewer_name}%` } }
  //     : null;
  Recruiter.findAll({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving companys.",
      });
    });
};
