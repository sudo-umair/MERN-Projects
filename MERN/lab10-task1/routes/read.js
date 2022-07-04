const express = require("express");
const router = express.Router();

const City = require("../models/City");

router.get("/", (req, res) => {
  console.log(req.body);
  const { ID } = req.body;
  City.find({ID}, (err, cities) => {
    if (err) {
      console.log(err);
    } else {
      res.send(cities);
    }
  });
});

module.exports = router;
