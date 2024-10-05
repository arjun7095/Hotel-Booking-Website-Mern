const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    room: {
        type: String,
        
        required: true
    },
    price:{
        type:Number,    
        required:true,
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
