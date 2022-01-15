"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init(
    {
      scheduleId: DataTypes.STRING,
      companyName: DataTypes.STRING,
      summary: DataTypes.STRING,
      location: DataTypes.STRING,
      startDateTime: DataTypes.STRING,
      startDateTimeLocal: DataTypes.STRING,
      roleName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      kindOfInterview: DataTypes.STRING,
      creator: DataTypes.STRING,
      organizer: DataTypes.STRING,
      eventName: DataTypes.STRING,
      created: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
