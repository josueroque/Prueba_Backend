"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let employees = [
      {
        Id: 100,
        DocumentNumber: "0801-1985-55654",
        FirstName: "Juan",
        LastName: "Flores",
        PhoneNumber: "(504)-55669988",
        Email: "juanflores@gmail.com",
        Password: "PasswordTest",
        PositionId: 3,
        Active: true,
        Gender: "M",
      },
      {
        Id: 101,
        DocumentNumber: "0801-1986-55625",
        FirstName: "Ana Marcela",
        LastName: "Flores",
        PhoneNumber: "(504)-33369988 ",
        Email: "anaflores@gmail.com",
        Password: "passwordTest",
        PositionId: 4,
        Active: true,
        Gender: "M",
      },
      {
        Id: 102,
        DocumentNumber: "0801-1989-88625",
        FirstName: "Francisco  ",
        LastName: "Matamoros",
        PhoneNumber: "(504)-66369988 ",
        Email: "aMatamoros@gmail.com",
        Password: "passwordTest",
        PositionId: 7,
        Active: true,
        Gender: "F",
      },
      {
        Id: 103,
        DocumentNumber: "0801-1975-56625",
        FirstName: "Ramon      ",
        LastName: "Juarez",
        PhoneNumber: "(504)-88869988 ",
        Email: "rjuarez@gmail.com",
        Password: "passwordTest",
        PositionId: 2,
        Active: true,
        Gender: "M",
      },
      {
        Id: 104,
        DocumentNumber: "0815-5966-65655",
        FirstName: "Jose Luis",
        LastName: "Velasquez",
        PhoneNumber: "(502)-33665544 ",
        Email: "jvelasquez@yahoo.com",
        Password: "Test2023",
        PositionId: 3,
        Active: true,
        Gender: "M",
      },
    ];

    return queryInterface.bulkInsert("employees", employees, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("employees", null, {});
  },
};
