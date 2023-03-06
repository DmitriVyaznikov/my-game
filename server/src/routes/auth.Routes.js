const express = require("express");
const { isAuth, isValid } = require("../middlewares/common");

const router = express.Router();

const {
  checkUserAndCreateSession,
  createUserAndSession,
  destroySession,
} = require("../controllers/authControllers");

router.route("/signin").post(checkUserAndCreateSession); // Аутентификация пользователя

router.route("/signup").post(isValid, createUserAndSession); // Регистрация пользователя

router.get("/signout", destroySession);

module.exports = router;
