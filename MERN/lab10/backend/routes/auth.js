const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.post('/', (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const newUser = user({
    name,
    email,
    password
  });
  newUser.save()
  res.send('User created');
}
);



module.exports = router;