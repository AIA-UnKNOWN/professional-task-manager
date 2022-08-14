'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Priority extends Model {
    static associate(models) {
      const { Task, Priority } = models;
      Priority.hasMany(Task, {
        foreignKey: 'priority_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Priority.init({
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Priority',
  });
  return Priority;
};