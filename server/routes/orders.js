const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Assuming the Order.js file is in the models folder

router.post('/orders', async (req, res) => {
    try {
        const { billingInfo, cartItems, totalPrice } = req.body;
        
        const newOrder = new Order({
            billingInfo: billingInfo,
            items: cartItems,
            totalPrice: totalPrice
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ error: 'Failed to place order' });
    }
});
router.get('/orders/:orderId', async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
module.exports = router;
