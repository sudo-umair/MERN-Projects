const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  User.findOne({ email, password }).then((user) => {
    if (user) {
      res.json({ message: "Account Exists" });
    }
    else {
      res.json({ message: "Account Does Not Exist" });
    }
  });
});

module.exports = router;
