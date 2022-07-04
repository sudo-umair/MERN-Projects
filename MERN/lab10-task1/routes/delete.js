const express = require("express");
const router = express.Router();

const City = require("../models/City");

router.delete("/", (req, res) => {
  console.log(req.body);
  const {ID} = req.body;

  City.deleteOne({ ID: ID }, (err, city) => {
    if (err) {
      console.log(err);
    } else {
      res.send(city);
    }
  });
});

module.exports = router;
