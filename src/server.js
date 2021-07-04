const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./error-handlers/500");
const notFoundHandler = require("./error-handlers/404");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const authRoutes = require("./auth/routes");

app.get("/", (req, res) => {
  res.send("ALive!");
});
app.use(authRoutes);
app.use(errorHandler);
app.use("*", notFoundHandler);
module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`Up and running! on port ${port}`));
  },
};
