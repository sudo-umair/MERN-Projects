const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/umair";

const connectToMongo = () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, (err) => {
    if (err) {
      console.log("Error connecting to MongoDB");
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  });
};
module.exports = connectToMongo;
