'use strict';
const { Model, Sequelize } = require('sequelize');
const Project = require('@models/project');
const Label = require('@models/label');
const Priority = require('@models/priority');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      const { Project, Task, Priority, Label } = models;
      Task.belongsTo(Project, {
        foreignKey: 'project_id',
        sourceKey: 'id',
      });
      Task.belongsTo(Priority, {
        foreignKey: 'priority_id',
        sourceKey: 'id',
      });
      Task.belongsTo(Label, {
        foreignKey: 'label_id',
        sourceKey: 'id',
      })
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
    description: DataTypes.TEXT('long'),
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