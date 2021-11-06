'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recruiters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      created_time: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.STRING
      },
      interviewer_name: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      role_name: {
        type: Sequelize.STRING
      },
      kind_of_interview: {
        type: Sequelize.STRING
      },
      extra_notes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recruiters');
  }
};