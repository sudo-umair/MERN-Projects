const mongoose = require('mongoose');
const {Schema}  = mongoose;

const citySchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true
  },
  CITY: {
    type: String,
    required: true
  },
  STATE: {
    type: String,
    required: true
  },
  LAT_N: {
    type: Number,
    required: true
  },
  LONG_W: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('city', citySchema);