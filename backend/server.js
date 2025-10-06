require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/companies', require('./routes/companyRoutes'));

// Default route
app.get('/', (req, res) => res.send('API is running...'));

// Error Handling
app.use((req, res) => res.status(404).json({ message: 'Route Not Found' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
