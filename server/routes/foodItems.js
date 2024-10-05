const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

// Get all food items
router.get('/all', async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.json(foodItems);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching food items' });
    }
});

// Get food items by category
router.get('/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const foodItems = await FoodItem.find({ category });
        res.json(foodItems);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching food items by category' });
    }
});

module.exports = router;
