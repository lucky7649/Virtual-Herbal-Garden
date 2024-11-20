// db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using URI from .env file
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
