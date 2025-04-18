const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/customer-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Sample route
app.get('/customers', (req, res) => {
    res.send('List of customers');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Customer service running on port ${PORT}`);
});