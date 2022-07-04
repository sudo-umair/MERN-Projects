const express = require("express");
const router = express.Router();

const City = require("../models/City");

router.post("/", (req, res) => {
  console.log(req.body);
  const { ID, CITY, STATE, LAT_N, LONG_W } = req.body;

  const newCity = City({
    ID,
    CITY,
    STATE,
    LAT_N,
    LONG_W,
  });

  newCity.save(
    (err, city) => {
    if (err) {
      console.log(err);
    } else {
      res.send(city);
    }
  });
});

module.exports = router;
