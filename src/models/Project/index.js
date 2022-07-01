const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('@models');

class Project extends Model {}
Project.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, { sequelize });

module.exports = Project;