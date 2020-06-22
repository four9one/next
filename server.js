// if (process.env === "development") {
// }

require("dotenv").config();
// require("dotenv").config();
// console.log(process.env.NODE_ENV);
const mongoose = require("mongoose");
const express = require("express");
const indexRouter = require("./routes/index");

const app = express();

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB error", error);
});
db.once("open", () => {
  console.log("MongoDB dabase connection established successfully");
});

app.use(express.json());
app.use("/", indexRouter);

app.listen(process.env.PORT || 5555);
