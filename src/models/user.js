const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: { type: String },
  password: { type: String },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
