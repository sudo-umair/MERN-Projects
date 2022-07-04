const express = require('express');
const schema = require('./schema');
const mongoose = require('mongoose');
const router = express.Router();

try {
  console.log('welcome');
  router.post("/insert", async (req, res) => {
    const jobtitle = req.body.title;
    const jobdate = req.body.date;
    const jobviews = req.body.views;

    console.log(jobtitle, jobdate, jobviews);

    const users = new schema({
      jobtitle: jobtitle, jobdate: jobdate, jobviews: jobviews
    })
    await users.save();
    res.send({ message: 'Data Inserted' })
    console.log('success')
  })
} catch (err) {
  res.send(err);
}


module.exports = router;