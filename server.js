const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env'});

// Connect to database
connectDB();

// Route Files
const replays = require('./routes/replays');

const app = express();

// Route files
app.use('/api/replays', replays);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

