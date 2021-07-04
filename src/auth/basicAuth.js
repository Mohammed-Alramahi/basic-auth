const base64 = require("base-64");
const bcrypt = require("bcrypt");
const userModel = require("../models/user");
const authenticate = async (req, res, next) => {
  try {
    const basicHeader = req.headers.authorization.split(" ");
    const encodedString = basicHeader.pop();
    const decodedString = base64.decode(encodedString);
    let [username, password] = decodedString.split(":");
    const user = await userModel.findOne({ username: username });
    console.log(user);
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      req.user = user;
      next();
    } else {
      throw new Error("invalid credintials!");
    }
  } catch (err) {
    next("invalid credintials!");
  }
};

module.exports = authenticate;
