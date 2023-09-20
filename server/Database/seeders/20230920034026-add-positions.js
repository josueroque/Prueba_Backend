"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let positions = [
      { Id: 1, Name: "Conserje", DepartmentId: 1 },
      { Id: 2, Name: "Desarrollador Senior", DepartmentId: 2 },
      { Id: 3, Name: "Desarrollador Junior", DepartmentId: 2 },
      { Id: 4, Name: "Jefe de Recursos Humanos", DepartmentId: 7 },
      { Id: 5, Name: "Asistente de Recursos Humanos", DepartmentId: 7 },
      { Id: 6, Name: "Auxiliar de Recursos Humanos", DepartmentId: 7 },
      { Id: 7, Name: "Jefe de Marketing", DepartmentId: 5 },
    ];

    return queryInterface.bulkInsert("positions", positions, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("positions", null, {});
  },
};
