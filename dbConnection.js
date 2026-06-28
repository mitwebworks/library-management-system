const mongoose = require("mongoose");

async function dbConnect() {
  const DB_URL = process.env.MONGODB_URI;

  try {
    await mongoose.connect(DB_URL);

    console.log("DB connected...");
  } catch (err) {
    console.error("Connection error: ", err.message);
  }
}

module.exports = dbConnect;
