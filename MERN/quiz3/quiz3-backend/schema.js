const express = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const rozeeSchema = new mongoose.Schema({
  jobtitle: {
    type: String,
    required: true
  },
  jobdate: {
    type: String,
    required: true
  },
  jobviews: {
    type: String,
    required: true
  }
})

const user = new mongoose.model('reported_jobs', rozeeSchema);
module.exports = user;
