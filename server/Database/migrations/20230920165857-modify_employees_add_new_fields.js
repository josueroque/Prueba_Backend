"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Employees", "active", {
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.addColumn("Employees", "gender", {
        type: Sequelize.CHAR,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Employees", "active"),
      queryInterface.removeColumn("Employees", "gender"),
    ]);
  },
};
