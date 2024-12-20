const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON request bodies

const corsOptions = {
  origin: 'https://noteappfronted.vercel.app', // Allow requests from your frontend domain
  methods: 'GET,POST,PUT,DELETE', // Allow methods
  allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
  credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions)); // Handle Cross-Origin Resource Sharing
app.use(helmet()); // Secure HTTP headers

// Routes
app.use('/api/users', userRoutes);
app.use('/api', noteRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
