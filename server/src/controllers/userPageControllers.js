const render = require('../lib/renderTemplate');

const UserPage = require('../views/UserPage');

const { TemporalRecipe, Favourite, Sequelize } = require('../../db/models');

exports.UserPage = async (req, res) => {
  try {
    const userId = req.session?.user?.id;
    const recipes = await Favourite.findAll({ where: { userId } });
  
    render(UserPage, { recipes }, res);
  } catch (error) {
    console.log(error)
  }
};
