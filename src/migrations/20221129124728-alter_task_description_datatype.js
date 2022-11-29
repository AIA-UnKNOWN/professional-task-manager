'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Tasks', 'description', {
      type: Sequelize.TEXT('long'),
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Tasks', 'description', {
      type: Sequelize.STRING,
    });
  }
};
