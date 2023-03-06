const express = require("express");

const router = express.Router();

const {
  Restaurant,
  Review,
  ReviewDelete,
  NewReview,
  EditRestaurant,
  EditRestaurantPage,
} = require("../controllers/restController");

router.get("/:restId", Restaurant);

router.get("/reviews/:restId", Review);

router.get("/edit/:restId", EditRestaurantPage);

router.put("/edit", EditRestaurant);

router.post("/reviews/new", NewReview);

router.delete("/review", ReviewDelete);

module.exports = router;
