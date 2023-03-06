'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      this.hasMany(models.Score, { foreignKey: 'questionId' });
      this.belongsTo(models.Theme, { foreignKey: 'theme_id' })
    }
  }
  Question.init(
    {
      questionText: DataTypes.TEXT,
      points: DataTypes.INTEGER,
      answer: DataTypes.TEXT,
      themeName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
