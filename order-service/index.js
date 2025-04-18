const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/order-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Sample route for creating an order
app.post('/orders', (req, res) => {
    const order = req.body;
    // Logic to save the order in the database would go here
    res.status(201).send({ message: 'Order created', order });
});

// Sample route for getting all orders
app.get('/orders', (req, res) => {
    // Logic to retrieve orders from the database would go here
    res.send([{ id: 1, item: 'Coffee', quantity: 2 }]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Order service running on port ${PORT}`);
});