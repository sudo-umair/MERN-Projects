const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/umair';

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log('Connected to MongoDB');
  }
  );
}

module.exports = connectToMongo;