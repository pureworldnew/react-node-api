"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init(
    {
      companySize: DataTypes.STRING,
      companyName: DataTypes.STRING,
      companyLocation: DataTypes.STRING,
      jobRole: DataTypes.STRING,
      jobType: DataTypes.STRING,
      jobRating: DataTypes.STRING,
      jobHow: DataTypes.STRING,
      jobWhere: DataTypes.STRING,
      jobReq: DataTypes.TEXT,
      jobSkills: DataTypes.STRING,
      socialAccount: DataTypes.STRING,
      regDate: DataTypes.STRING,
      regWeekday: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      modelName: "Company",
    }
  );
  return Company;
};
