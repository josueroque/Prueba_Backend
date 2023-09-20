'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  position.init({
    PositionId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    DepartmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'position',
  });
  return position;
};