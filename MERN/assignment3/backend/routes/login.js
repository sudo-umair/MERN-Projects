const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", (req, res) => {
  console.log(req.body);
  
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (!user) {
      res.json({
        message: "User not found",
      });
    } else if (user.password !== password) {
      res.json({
        message: "Password is incorrect",
      });
    } else {
      res.json({
        message: "Login successful",
      });
    }
  });
}
);

//   User.findOne({ email, password })
//     .then((user) => {
//       if (user) {
//         res.json({ message: "Account Exists" });
//       } else {
//         res.json({ message: "Create Account First" });
//       }
//     })
//     .catch((err) => {
//       res.json({ message: "Error Logging User In" });
//     });
// });

module.exports = router;
