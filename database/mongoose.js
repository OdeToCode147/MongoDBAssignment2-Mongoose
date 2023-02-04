const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/Human_Resource";

const connect = async () => {
  try {
    const client = await mongoose.connect(url);
    console.log("Connected to database successful");
  } catch (error) {
    console.log("Error in connection via mongoose", error);
  }
};

module.exports = connect;
