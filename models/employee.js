"use strict";

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    },
    {
      tableName: "Employees",
    }
  );

  Employee.associate = function (models) {
    Employee.belongsTo(modelsPosition, {
      as: "position",
      foreignKey: PositionId,
    });
  };
};
