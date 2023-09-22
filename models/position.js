"use strict";

module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define(
    "Position",
    {
      Id: DataTypes.NUMBER,
      Name: DataTypes.STRING,
      DepartmentId: DataTypes.NUMBER,
    },
    {
      tableName: "Positions",
    }
  );

  Position.associate = function (models) {
    Position.hasMany(models.Employee, {
      as: "PositionEmployee",
      foreignKey: "PositionId",
    });
    Position.belongsTo(models.Department, {
      as: "Department",
      foreignKey: "DepartmentId",
    });
  };

  return Position;
};
