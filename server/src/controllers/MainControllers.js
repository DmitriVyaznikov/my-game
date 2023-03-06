require("dotenv").config();
const { Restaurant } = require("../../db/models");

exports.MainPage = async (req, res) => {
  try {
    const allRecords = await Restaurant.findAll({ order: [["id", "ASC"]] });
    res.json(allRecords);
  } catch (error) {
    console.error(error);
  }
};
