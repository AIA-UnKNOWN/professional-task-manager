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
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'Project 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Project 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Project 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Project 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Project 5',
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
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
