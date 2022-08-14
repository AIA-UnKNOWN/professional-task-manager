'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Projects",
          id: 'key',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      label_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Labels",
          id: 'key',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      priority_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Priorities",
          id: 'key',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      is_completed: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};