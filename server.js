// if (process.env === "development") {
// }

require("dotenv").config();
// require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const indexRouter = require("./routes/index");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:admin123@next-server-s2yko.gcp.mongodb.net/server?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB error", error);
});
db.once("open", () => {
  console.log("MongoDB dabase connection established successfully");
});

app.use(express.json());
app.use("/", indexRouter);

// console.log(process.env.PORT);

app.listen(process.env.PORT || 5555);
