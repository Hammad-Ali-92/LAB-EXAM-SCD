const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3002; // Default port for payment service

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/payment-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a simple route for payment processing
app.post('/api/payments', (req, res) => {
    const paymentData = req.body;
    // Here you would handle payment processing logic
    res.status(201).json({ message: 'Payment processed', data: paymentData });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Payment service running on port ${PORT}`);
});