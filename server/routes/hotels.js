// routes/hotels.js

const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// GET /api/hotels - Retrieve hotels with name, location, and room types
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find({}, 'name location roomTypes');
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
