"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Schedules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      schedule_id: {
        type: Sequelize.STRING,
      },
      company_name: {
        type: Sequelize.STRING,
      },
      summary: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      start_date_time: {
        type: Sequelize.STRING,
      },
      start_date_time_local: {
        type: Sequelize.STRING,
      },
      role_name: {
        type: Sequelize.STRING,
      },
      phone_number: {
        type: Sequelize.STRING,
      },
      kind_of_interview: {
        type: Sequelize.STRING,
      },
      creator: {
        type: Sequelize.STRING,
      },
      organizer: {
        type: Sequelize.STRING,
      },
      event_name: {
        type: Sequelize.STRING,
      },
      created: {
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
    await queryInterface.dropTable("Schedules");
  },
};
