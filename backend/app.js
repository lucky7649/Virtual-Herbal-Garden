const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const herbRoutes = require('./routes/herbRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const Herbs = require("./models/herbModel");
const cors = require('cors');
const morgan = require('morgan');  // Optional: for logging HTTP requests

dotenv.config();

const app = express();

// CORS configuration for development environment
const corsOptions = {
  origin: 'http://localhost:5173', // Allow frontend on port 5173
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization' , "userid"],
};

app.use(cors(corsOptions));


// For logging HTTP requests (useful for development)
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/', herbRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/reviews', reviewRoutes);

// Error handling middleware for unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong, please try again later' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
