const bcrypt = require("bcrypt");
const router = require("express").Router();
const { User } = require("../../db/models");

/**
 * Завершает запрос с ошибкой аутентификации
 * @param {object} res Ответ express
 * @param err  сообщение об ошибке
 */

const failAuth = (res, err) => res.status(401).json({ err });

exports.checkUserAndCreateSession = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username }, raw: true });

    if (!user) return failAuth(res, "Неправильное имя/пароль");

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return failAuth(res, "Неправильное имя/пароль");

    req.session.user = { id: user.id, name: user.username };
    console.log("Session Success");
    res.json(req.session.user);
  } catch (err) {
    console.error("Err message:", err.message);
    console.error("Err code", err.code);
    failAuth(res, err.message);
  }
};

exports.createUserAndSession = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !username.match(/^[A-Za-z]\w+$/)) {
      return res.status(400).send({ error: "Invalid login format" });
    }

    if (username.length < 4) {
      return res
        .status(400)
        .send({ error: "Register must be at least 4 characters long" });
    }

    // Password validation
    if (!password || password.length < 3) {
      return res
        .status(400)
        .send({ error: "Password must be at least 3 characters long" });
    }
    if (!/^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$/.test(email)) {
      return res.status(400).send({ error: "Invalid email address" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      username,
      password: hashedPassword,
      email,
    });

    res.send(200).end();
  } catch (error) {
    const err = error.message;
    console.error("Err message:", err.message);
    console.error("Err code", err.code);
    failAuth(res, err);
  }
};

exports.destroySession = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie("app").json({ message: "signout is successful" });
  });
};
