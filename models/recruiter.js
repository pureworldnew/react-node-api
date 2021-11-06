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
      createdTime: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      startTime: DataTypes.STRING,
      interviewerName: DataTypes.STRING,
      companyName: DataTypes.STRING,
      roleName: DataTypes.STRING,
      kindOfInterview: DataTypes.STRING,
      extraNotes: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      modelName: "Recruiter",
    }
  );
  return Recruiter;
};
