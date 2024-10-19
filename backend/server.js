const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const resumeRoutes = require('./routes/resumeRoutes');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.json("Resume Builder");
});

// Middleware
app.use(cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/resumeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error: ', err));

// API Routes
app.use('/api/resumes', resumeRoutes);

// Export the app as a Vercel serverless function
module.exports = app;
