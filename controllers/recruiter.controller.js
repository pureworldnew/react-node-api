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

  eventList.collection.forEach(async (e) => {
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
  //   cancel_url: "https://calendly.com/cancellations/0e1f95e2-4624-4cb4-8e37-68bc508c6b98"
  // created_at: "2021-11-02T12:53:23.517969Z"
  // email: "alka.dagar@nlbtech.com"
  // event: "https://api.calendly.com/scheduled_events/85fe7947-0873-4b9f-89e3-227c947c6d50"
  // first_name: null
  // last_name: null
  // name: "Alka Dagar "
  // new_invitee: null
  // old_invitee: null
  // payment: null
  // questions_and_answers: [{answer: "NTT/Citi", position: 0, question: "Company or Client Name"},…]
  // reschedule_url: "https://calendly.com/reschedulings/0e1f95e2-4624-4cb4-8e37-68bc508c6b98"
  // rescheduled: false
  // status: "active"
  // text_reminder_number: null
  // timezone: "America/Chicago"
  // tracking: {utm_campaign: null, utm_source: null, utm_medium: null, utm_content: null, utm_term: null,…}
  // updated_at: "2021-11-02T12:53:23.517969Z"
  // uri: "https://api.calendly.com/scheduled_events/85fe7947-0873-4b9f-89e3-227c947c6d50/invitees/0e1f95e2-4624-4cb4-8e37-68bc508c6b98"
  console.log(eventListDetails);
  res.send(eventListDetails);
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
