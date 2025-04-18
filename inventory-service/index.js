const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/inventory', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Sample route for inventory
app.get('/inventory', (req, res) => {
    res.send('Inventory service is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Inventory service listening on port ${PORT}`);
});