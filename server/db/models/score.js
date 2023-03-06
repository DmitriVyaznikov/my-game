'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Game, { foreignKey: 'gameId' });
      this.belongsTo(models.Question, { foreignKey: 'questionId' });
    }
  }
  Score.init(
    {
      userId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
      correctQuestion: DataTypes.BOOLEAN,
      questionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Score',
    }
  );
  return Score;
};
