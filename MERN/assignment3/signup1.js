const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  const newUser = new User({
    email,
    password,
  });
  newUser.save();
  res.json({ message: "Account Created" });
});

module.exports = router;
