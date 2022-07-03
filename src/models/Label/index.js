const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('@models');

class Label extends Model {}
Label.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { sequelize });

module.exports = Label;