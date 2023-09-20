"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("employees", {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      DocumentNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      FirstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      LastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PhoneNumber: { type: Sequelize.STRING, allowNull: false },
      Email: { type: Sequelize.STRING, allowNull: false },
      Password: { type: Sequelize.STRING, allowNull: false },
      PositionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "positions",
          key: "Id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("employees");
  },
};
