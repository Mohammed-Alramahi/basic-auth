const bcrypt = require("bcrypt");
const userModel = require("../models/user");
const signUp = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = userModel({ username, password: hashedPassword });
    newUser.save();
    res.status(201).json(newUser);
    next();
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = signUp;
