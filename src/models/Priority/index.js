const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('@models');

class Priority extends Model {}
Priority.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { sequelize });

module.exports = Priority;