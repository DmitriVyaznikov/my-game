/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Questions', 'theme_id', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Themes',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        });
        await queryInterface.removeColumn('Questions', 'themeName')

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Questions', 'theme_id');
    }
};
