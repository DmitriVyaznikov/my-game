'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          login: 'John Doe',
          password: '123',
          email: 'john@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          login: 'Ilya',
          password: '123',
          email: 'ilya@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
