const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/rozeejob';

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log('connected')
  })
}

module.exports = connectToMongo;