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

(async () => {
  await Priority.create({ label: 'High' });
  await Priority.create({ label: 'Medium' });
  await Priority.create({ label: 'Low' });
  await Priority.create({ label: 'None' });
})();

module.exports = Priority;