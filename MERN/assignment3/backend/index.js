const express = require("express");
const User = require("./models/User");
const router = express.Router();

const connectToMongo = require("./db");
const cors = require("cors");

connectToMongo();

const app = express();
const port = 4004;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Assignment 3");
});

app.use("/signup", require("./routes/signup"));

app.use("/login", require("./routes/login"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
