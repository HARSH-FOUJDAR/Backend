const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DatabseConnected = async () => {
  try {
    await mongoose.connect(process.env.Database_URL);
    console.log("Databse connected succesfully");
  } catch (error) {
    console.log("Databse is not connected", error.message);
  }
};

module.exports = DatabseConnected;
