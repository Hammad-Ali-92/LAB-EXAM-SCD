const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3005;

// Base URLs for microservices (use environment variables for flexibility)
const MENU_SERVICE_URL = process.env.MENU_SERVICE_URL || 'http://menu-service:3001';
const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL || 'http://order-service:3002';
const CUSTOMER_SERVICE_URL = process.env.CUSTOMER_SERVICE_URL || 'http://customer-service:3003';

// Middleware to parse JSON requests
app.use(express.json());

// Default route to confirm API Gateway is running
app.get('/', (req, res) => {
    res.json({ message: 'API Gateway is running on port ' + PORT });
});

// Route to get menu items
app.get('/api/menu', async (req, res) => {
    try {
        const response = await axios.get(`${MENU_SERVICE_URL}/api/menu`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching menu:', error.message);
        res.status(500).json({ error: 'Error fetching menu' });
    }
});

// Route to create an order
app.post('/api/order', async (req, res) => {
    try {
        const response = await axios.post(`${ORDER_SERVICE_URL}/api/order`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error creating order:', error.message);
        res.status(500).json({ error: 'Error creating order' });
    }
});

// Route to get customer details
app.get('/api/customer/:id', async (req, res) => {
    try {
        const response = await axios.get(`${CUSTOMER_SERVICE_URL}/api/customer/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching customer details:', error.message);
        res.status(500).json({ error: 'Error fetching customer details' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});