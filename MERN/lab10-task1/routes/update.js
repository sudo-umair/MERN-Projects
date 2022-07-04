const express = require("express");
const router = express.Router();

const City = require("../models/City");

router.put("/", (req, res) => {
  console.log(req.body);

  const { ID, CITY, STATE, LAT_N, LONG_W } = req.body;

  City.findOneAndUpdate(
    { ID: ID },
    { $set: { CITY: CITY, STATE: STATE, LAT_N: LAT_N, LONG_W: LONG_W } },
    { new: true },
    (err, city) => {
      if (err) {
        console.log(err);
      } else {
        res.send(city);
      }
    }
  );
});

module.exports = router;
