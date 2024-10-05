// models/Hotel.js

const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  roomTypes: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model('Hotel', hotelSchema);
