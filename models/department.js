"use strict";

const { NUMBER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      Id: DataTypes.NUMBER,
      Name: DataTypes.STRING,
    },
    {
      tableName: "departments",
    }
  );

  User.associate = function (models) {
    User.hasmany(models.Position, {
      as: "position",
      foreignKey: "DepartmentId",
    });
  };

  return Department;
};
