'use strict';
const { Model, Sequelize } = require('sequelize');
const Project = require('@models/project');
const Label = require('@models/label');
const Priority = require('@models/priority');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Project,
        id: 'key',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    label_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Label,
        id: 'key',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    priority_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Priority,
        id: 'key',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    is_completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};