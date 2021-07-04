const mongoose = require("mongoose");
require("dotenv").config();
const server = require("./src/server");
const port = process.env.PORT;
const mongouri = process.env.MONGODB_URI;
mongoose
  .connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.start(port);
  });
