"use strict";

module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      Id: DataTypes.NUMBER,
      Name: DataTypes.STRING,
    },
    {
      tableName: "Departments",
    }
  );

  Department.associate = function (models) {
    Department.hasMany(models.Position, {
      as: "position",
      foreignKey: "DepartmentId",
    });
  };

  return Department;
};
