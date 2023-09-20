"use strict";

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      Id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      DocumentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PhoneNumber: { type: DataTypes.STRING, allowNull: false },
      Email: { type: DataTypes.STRING, allowNull: false },
      Password: { type: DataTypes.STRING, allowNull: false },
      Gender: { type: DataTypes.CHAR },
      Active: { type: DataTypes.BOOLEAN },
    },
    {
      tableName: "Employees",
    }
  );

  Employee.associate = function (models) {
    Employee.belongsTo(models.Position, {
      as: "position",
      foreignKey: "PositionId",
    });
  };

  return Employee;
};
