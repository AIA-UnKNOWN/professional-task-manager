const { Sequelize } = require('sequelize');
const { database } = require('@env');

let sequelize = new Sequelize(database.database, database.user, database.password, {
  host: database.host,
  dialect: database.dialect
});

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  await sequelize.sync();
  console.log('All models were synchronized!');
}

module.exports = {
  initializeDatabase,
  sequelize
};