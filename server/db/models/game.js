'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.Score, { foreignKey: 'gameId' });
    }
  }
  Game.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
