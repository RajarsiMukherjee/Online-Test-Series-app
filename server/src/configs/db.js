const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://rajarsi:rajarsi@cluster0.2i1xg.mongodb.net/mocktest?retryWrites=true&w=majority"
  );
};
