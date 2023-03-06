/* eslint-disable max-len */
const express = require("express");

const router = express.Router();

const { MainPage } = require("../controllers/MainControllers");

router.get("/rests", MainPage);

module.exports = router;
