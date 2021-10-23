const db = require("../models");
const Company = db.Company;
const Op = db.Sequelize.Op;

// Create and Save a new Company
exports.create = (req, res) => {
  console.log("dsfsdf");
  // Validate request
  //   if (!req.body.first_name) {
  //     res.status(400).send({
  //       message: "Content can not be empty!",
  //     });
  //     return;
  //   }

  // Create a Company
  const company = {
    companyName: req.body.companyName,
    companySize: req.body.companySize,
    companyLocation: req.body.companyLocation,
    jobRole: req.body.jobRole,
    jobType: req.body.jobType,
    jobRating: req.body.jobRating,
    jobHow: req.body.jobHow,
    jobWhere: req.body.jobWhere,
    jobReq: req.body.jobReq,
    jobSkills: req.body.jobSkills,
    socialAccount: req.body.socialAccount,
    regDate: req.body.regDate,
    regWeekday: req.body.regWeekday,
  };

  // Save Company in the database
  Company.create(company)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Company.",
      });
    });
};

// Retrieve all Companys from the database.
exports.findAll = (req, res) => {
  const company_name = req.query.companyName;
  let condition = company_name
    ? { company_name: { [Op.like]: `%${company_name}%` } }
    : null;

  Company.findAll({ where: condition })
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

// Find a single Company with an id
exports.findOne = (req, res) => {
  console.log("param", req.params);
  const id = req.params.id;

  Company.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Company with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Company with id=" + id,
      });
    });
};

// Update a Company by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Company.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Company was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Company with id=${id}. Maybe Company was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Company with id=" + id,
      });
    });
};

// Delete a Company with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  console.log("id is here", id);
  Company.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Company was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Company with id=${id}. Maybe Company was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Company with id=" + id,
      });
    });
};

// Delete all Companys from the database
exports.deleteSelected = (req, res) => {
  const ids = req.body.ids;
  if (ids == "All") {
    Company.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} Companys were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Companys!",
        });
      });
  } else {
    Company.destroy({ where: { id: ids } })
      .then((nums) => {
        res.send({ message: `${nums} Companys were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Companys!",
        });
      });
  }
};
