const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.json({ message: "Account already exists" });
      } else {
        const newUser = new User({
          email,
          password,
        });
        newUser
          .save()
          .then((user) => {
            res.json({ message: "Account created successfully" });
          })
          .catch((err) => {
            res.json({ message: "Error creating Account" });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error creating Account" });
    });
});

module.exports = router;
