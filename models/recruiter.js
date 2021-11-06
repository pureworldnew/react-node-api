"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recruiter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recruiter.init(
    {
      created_time: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      start_time: DataTypes.STRING,
      interviewer_name: DataTypes.STRING,
      company_name: DataTypes.STRING,
      role_name: DataTypes.STRING,
      kind_of_interview: DataTypes.STRING,
      extra_notes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Recruiter",
    }
  );
  return Recruiter;
};
