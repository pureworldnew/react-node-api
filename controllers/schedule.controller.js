const db = require("../models");
const Schedule = db.Schedule;
const Op = db.Sequelize.Op;

const searchByScheduleId = async (scheduleId) => {
  try {
    let searchSchedules = await Schedule.findAll({
      where: { scheduleId: scheduleId },
    });
    if (!searchSchedules.length) return false;
    else return true;
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

exports.load = async (req, res) => {
  console.log(req.body);

  const schedules = req.body;
  let allSchedules = [];

  for (let i = 0; i < schedules.length; i++) {
    if (await searchByScheduleId(schedules[i].scheduleId)) continue;
    const schedule = {
      scheduleId: schedules[i].scheduleId,
      companyName: schedules[i].companyName,
      scheduleId: schedules[i].scheduleId,
      summary: schedules[i].summary,
      location: schedules[i].location,
      startDateTime: schedules[i].startDateTime,
      startDateTimeLocal: schedules[i].startDateTimeLocal,
      roleName: schedules[i].roleName,
      phoneNumber: schedules[i].phoneNumber,
      kindOfInterview: schedules[i].kindOfInterview,
      creator: schedules[i].creator,
      organizer: schedules[i].organizer,
      eventName: schedules[i].eventName,
      created: schedules[i].created,
    };
    allSchedules.push(schedule);
  }
  //insert multiple records from the above array to the schedule table
  if (!allSchedules.length) {
    Schedule.findAll({})
      .then((schedules) => {
        res.json(schedules);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Schedules.",
        });
      });
  } else {
    Schedule.bulkCreate(allSchedules, {
      returning: true,
    })
      .then((schedules) => {
        Schedule.findAll({})
          .then((schedules) => {
            res.json(schedules);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while retrieving Schedules.",
            });
          });
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  }
};

exports.get = (req, res) => {
  // const company_name = req.query.companyName;
  // let condition = company_name
  //   ? { company_name: { [Op.like]: `%${company_name}%` } }
  //   : null;

  searchByScheduleId("te4ovhl0dlu7orvhae24idksqggfgh");

  Schedule.findAll({})
    .then((schedules) => {
      res.json(schedules);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Schedules.",
      });
    });
};
