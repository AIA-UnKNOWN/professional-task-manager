'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    static associate(models) {
      const { Label, Task } = models;
      Label.hasMany(Task, {
        foreignKey: 'label_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Label.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Label',
  });
  return Label;
};