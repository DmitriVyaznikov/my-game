/* eslint-disable max-len */
const express = require("express");

const router = express.Router();

// const { TemporalRecipe, Favourite } = require("../../db/models");

const { MainPage } = require("../controllers/MainControllers");

router.get("/rests", MainPage);

// router.get("/recipes/showlist/:sorted", async (req, res) => {
//   const { sorted } = req.params;
//   try {
//     const recipesFav = await Favourite.findAll();
//
//     const username = req.session?.user?.name;
//     if (sorted === "sortByIngredients") {
//       countRequest += 1;
//       if (countRequest % 2 !== 0) {
//         const sortedByIngredients = await TemporalRecipe.findAll({
//           order: [["ingredientsCount", "DESC"]],
//         });
//         res.json({ sortedByIngredients, recipesFav, username });
//       }
//       if (countRequest % 2 === 0) {
//         const sortedByIngredients = await TemporalRecipe.findAll({
//           order: [["ingredientsCount", "ASC"]],
//         });
//         res.json({ sortedByIngredients, recipesFav, username });
//       }
//     }
//     if (sorted === "sortByCooking") {
//       countRequest += 1;
//       if (countRequest % 2 !== 0) {
//         const sortedByIngredients = await TemporalRecipe.findAll({
//           order: [["cookingTime", "DESC"]],
//         });
//         res.json({ sortedByIngredients, recipesFav, username });
//       }
//       if (countRequest % 2 === 0) {
//         const sortedByIngredients = await TemporalRecipe.findAll({
//           order: [["cookingTime", "ASC"]],
//         });
//         res.json({ sortedByIngredients, recipesFav, username });
//       }
//     }
//
//     if (sorted === "sortByIngredientsFav") {
//       countRequest += 1;
//       if (countRequest % 2 !== 0) {
//         const sortedByIngredients = await Favourite.findAll({
//           order: [["ingredientsCount", "DESC"]],
//         });
//         res.json({ sortedByIngredients, recipesFav, username });
//       }
//       if (countRequest % 2 === 0) {
//         const sortedByIngredients = await Favourite.findAll({
//           order: [["ingredientsCount", "ASC"]],
//         });
//         res.json({ sortedByIngredients, recipesFav, username });
//       }
//     }
//     if (sorted === "sortByCookingFav") {
//       countRequest += 1;
//       if (countRequest % 2 !== 0) {
//         const sortedByIngredients = await Favourite.findAll({
//           order: [["cookingTime", "DESC"]],
//         });
//         res.json({ sortedByIngredients, recipesFav, username });
//       }
//       if (countRequest % 2 === 0) {
//         const sortedByIngredients = await Favourite.findAll({
//           order: [["cookingTime", "ASC"]],
//         });
//         res.json({ sortedByIngredients, recipesFav, username });
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });

module.exports = router;
