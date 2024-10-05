const express = require('express');
const router = express.Router();
const Room = require('../models/Room');
const Booking = require('../models/Booking');

router.post('/create', async (req, res) => {
    const { roomType, roomPrice, checkInDate, checkOutDate, name, contactNumber } = req.body;

    try {
        // Find the room by type
        const room = await Room.findOne({ type: roomType });

        if (!room) {
            return res.status(404).send('Room not found');
        }

        // Check the room's status
        if (room.status === 'booked') {
            return res.status(400).send('Room is already booked');
        }

        // If the room is available, proceed to book it
        const booking = new Booking({
            room: roomType,
            price: roomPrice,
            checkInDate,
            checkOutDate,
            name,
            contactNumber
        });

        await booking.save();

        // Update the room's status to booked
        room.status = 'booked';
        await room.save();

        res.status(200).send('Booking successful');
    } catch (error) {
        console.error('Error booking room:', error);
        res.status(500).send('Booking failed');
    }
});

module.exports = router;
