const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/menu-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Sample route for menu items
app.get('/menu', (req, res) => {
    res.send('Menu items will be here');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Menu Service is running on port ${PORT}`);
});