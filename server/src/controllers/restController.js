const express = require("express");

const { Restaurant, Review } = require("../../db/models");

exports.Restaurant = async (req, res) => {
  try {
    const userid = req.session?.user?.id;
    const username = req.session?.user?.name;
    const { restId } = req.params;

    const response = await Restaurant.findOne({ where: { id: restId } });

    res.json(response);
  } catch (e) {
    console.error(e);
  }
};

exports.EditRestaurantPage = async (req, res) => {
  try {
    const userid = req.session?.user?.id;
    const username = req.session?.user?.name;
    const { restId } = req.params;
    console.log("-> req.params", req.params);

    const response = await Restaurant.findOne({ where: { id: restId } });

    res.json(response);
  } catch (e) {
    console.error(e);
  }
};

exports.EditRestaurant = async (req, res) => {
  const { id, name, city, avPrice, description, open, close, image } = req.body;
  try {
    const userid = req.session?.user?.id;
    const username = req.session?.user?.name;

    const response = await Restaurant.update(
      {
        id,
        name,
        city,
        avPrice,
        description,
        open,
        close,
        image,
      },
      {
        where: { id },
        returning: true,
        plain: true,
      }
    );

    const updatedRests = await Restaurant.findAll({ order: [["id", "ASC"]] });

    res.json(updatedRests);
  } catch (e) {
    console.error(e);
  }
};

exports.ReviewDelete = async (req, res) => {
  try {
    const { id, userId, restId } = req.body;
    const userid = req.session?.user?.id;
    const username = req.session?.user?.name;
    const successDelRev = await Review.destroy({ where: { id, userId } });

    if (successDelRev) {
      const restWithRate = await Review.findAll({
        where: { restId },
        attributes: ["restRate"],
        raw: true,
        nest: true,
      });
      const raitingSum = restWithRate.reduce((acc, val) => {
        acc += val.restRate;
        return acc;
      }, 0);
      const ratingRest = Number((raitingSum / restWithRate.length).toFixed(1));
      const response = await Restaurant.update(
        {
          rating: ratingRest,
        },
        {
          where: { id: restId },
          returning: true,
          plain: true,
          raw: true,
          nest: true,
        }
      );

      const restWithDel = await Restaurant.findOne({ where: { id: restId } });
      console.log("-> restWithDel", restWithDel);
      const updatedListRevs = await Review.findAll();
      res.json({ restWithDel });
    }

    // const response = await Restaurant.findOne({where: {id: restId}});
    //
    // res.json(response);
  } catch (e) {
    console.error(e);
  }
};

exports.Review = async (req, res) => {
  try {
    const userid = req.session?.user?.id;
    const username = req.session?.user?.name;
    const { restId } = req.params;

    const response = await Review.findAll({ where: { restId } });

    res.json(response);
  } catch (e) {
    console.error(e);
  }
};

exports.NewReview = async (req, res) => {
  try {
    const userid = req.session?.user?.id;
    const username = req.session?.user?.name;
    const { reviewTitle, reviewText, restId, userId, restRate } = req.body;
    if (reviewTitle && reviewText && restRate) {
      const response = await Review.create({
        reviewTitle,
        reviewText,
        restId,
        userId,
        restRate,
      });
      if (response) {
        const restWithRating = await Review.findAll({
          where: { restId },
          attributes: ["restRate"],
          raw: true,
          nest: true,
        });
        const raitingSum = restWithRating.reduce((acc, val) => {
          acc += val.restRate;
          return acc;
        }, 0);
        const ratingRest = Number(
          (raitingSum / restWithRating.length).toFixed(1)
        );
        const newRatingRest = await Restaurant.update(
          {
            rating: ratingRest,
          },
          {
            where: { id: restId },
            returning: true,
            plain: true,
            raw: true,
            nest: true,
          }
        );

        if (response.id) {
          const updRest = response;
          console.log("-> updRest", updRest);
          const updatedRestsRate = await Restaurant.findAll();

          res.json({ updatedRestsRate, updRest });
        }
      }
    } else res.status(400).json({ err: "Все поля должны быть заполнены!" });
  } catch (e) {
    console.error(e);
  }
};
