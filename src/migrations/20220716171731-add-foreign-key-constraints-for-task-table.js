'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const columns = [
      {
        column: 'project_id',
        constraint: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Projects',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          }
        }
      },
      {
        column: 'label_id',
        constraint: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Labels',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          }
        }
      },
      {
        column: 'priority_id',
        constraint: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Priorities',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          }
        }
      }
    ];
    columns.forEach(async ({ column, constraint }) => {
      await queryInterface.changeColumn('Tasks', column, constraint);
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     const columns = [
      {
        column: 'project_id',
      },
      {
        column: 'label_id',
      },
      {
        column: 'priority_id',
      }
    ];
    columns.forEach(async ({ column }) => {
      await queryInterface.changeColumn('Tasks', column, {
        type: Sequelize.DataTypes.INTEGER,
        references: null
      });
    });
  }
};
