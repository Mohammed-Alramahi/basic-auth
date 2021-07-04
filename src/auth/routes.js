const express = require("express");
const router = express.Router();
const signUp = require("./sign-up");
const auth = require("./basicAuth");
router.post("/signup", signUp);
router.post("/signin", auth, (req, res) => {
  const user = req.user;
  res.status(200).json(user);
});
module.exports = router;
