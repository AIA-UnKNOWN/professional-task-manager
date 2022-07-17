'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Priorities', [
      {
        label: 'High',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Medium',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Low',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Priorities', null, {});
  }
};
