'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          questionText: 'Сколько будет 2+2?',
          points: 200,
          answer: '4',
          themeName: 'Математика',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Сколько будет 4/2?',
          points: 400,
          answer: '2',
          themeName: 'Математика',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Сколько будет 3**3?',
          points: 600,
          answer: '27',
          themeName: 'Математика',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Сколько будет 33/11?',
          points: 1000,
          answer: '3',
          themeName: 'Математика',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Дата крещения Руси',
          points: 200,
          answer: '988',
          themeName: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Дата Куликовской битвы',
          points: 400,
          answer: '1380',
          themeName: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Кто отменил Крепостное право?',
          points: 600,
          answer: 'Александр 2',
          themeName: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Дата отмены Крепостного права?',
          points: 1000,
          answer: '1861',
          themeName: 'История',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Самое большое животное на планете?',
          points: 200,
          answer: 'Голубой кит',
          themeName: 'Животные',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText:
            'Как морских выдр не уносит друг от друга течением во время сна?',
          points: 400,
          answer: 'Они держатся за лапки',
          themeName: 'Животные',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText:
            'Какое единственное млекопитающее способно к настоящему полету?',
          points: 600,
          answer: 'Летучая мышь',
          themeName: 'Животные',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'У какого животного самое высокое кровяное давление?',
          points: 1000,
          answer: 'Жираф',
          themeName: 'Животные',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Давай по-новой, Миша...',
          points: 200,
          answer: 'все хуйня',
          themeName: 'Фразы из мемов',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText:
            'Если я ношу кандибобер на голове, это не значит, что я - ...',
          points: 400,
          answer: 'все хуйня',
          themeName: 'Фразы из мемов',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Вы кто такие? Я вас не звал!...',
          points: 600,
          answer: 'Идите нахуй',
          themeName: 'Фразы из мемов',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          questionText: 'Чувак, это - ...',
          points: 1000,
          answer: 'репчик',
          themeName: 'Фразы из мемов',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
