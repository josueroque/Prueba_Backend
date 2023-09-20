"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let departments = [
      { Name: "Conserje", Id: 1 },
      { Name: "Desarrollo", Id: 2 },
      { Name: "Diseño", Id: 3 },
      { Name: "Gerencia", Id: 4 },
      { Name: "Marketing", Id: 5 },
      { Name: "Operadores", Id: 6 },
      { Name: "Recursos Humanos", Id: 7 },
      { Name: "Transporte", Id: 8 },
    ];

    return queryInterface.bulkInsert("departments", departments, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("departments", null, {});
  },
};
