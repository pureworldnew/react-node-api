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
  console.log(eventListDetails);
  res.send(eventListDetails);
};
