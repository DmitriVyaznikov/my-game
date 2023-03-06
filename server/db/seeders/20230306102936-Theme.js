
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Themes', [{
    name: 'Математика',
      createdAt: new Date(),
      updatedAt: new Date(),
   },{
      name: 'История',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Животные',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Фразы из мемов',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Themes', null, {});

  }
};
