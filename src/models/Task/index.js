const { DataTypes, Model, Deferrable } = require('sequelize');
const { sequelize } = require('@models');

const Project = require('@models/Project');
const Label = require('@models/Label');
const Priority = require('@models/Priority');

class Task extends Model {}
Task.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  is_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  project_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Project,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  label_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Label,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  priority_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Priority,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
}, { sequelize });

module.exports = Task;