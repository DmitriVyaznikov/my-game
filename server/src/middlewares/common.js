exports.isAuth = (req, res, next) => {
  if (req.session?.user) next();
};

exports.isValid = (req, res, next) => {
  const { login, password, email } = req.body;
  if (login && password && email) {
    next();
  } else res.status(401).json({ err: "Field can't be empty" });
};
