// models/Room.js
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    type: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true } ,
    status: { type: String },
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
