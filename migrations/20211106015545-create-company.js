"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Companies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      company_size: {
        type: Sequelize.STRING,
      },
      company_name: {
        type: Sequelize.STRING,
      },
      company_location: {
        type: Sequelize.STRING,
      },
      job_role: {
        type: Sequelize.STRING,
      },
      job_type: {
        type: Sequelize.STRING,
      },
      job_rating: {
        type: Sequelize.STRING,
      },
      job_how: {
        type: Sequelize.STRING,
      },
      job_where: {
        type: Sequelize.STRING,
      },
      job_req: {
        type: Sequelize.TEXT,
      },
      job_skills: {
        type: Sequelize.STRING,
      },
      social_account: {
        type: Sequelize.STRING,
      },
      reg_date: {
        type: Sequelize.STRING,
      },
      reg_weekday: {
        type: Sequelize.STRING,
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Companies");
  },
};
