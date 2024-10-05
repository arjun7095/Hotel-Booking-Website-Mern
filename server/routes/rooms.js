// routes/rooms.js
const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// GET all rooms
router.get('/rooms', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/rooms/:type', async (req, res) => {
    try {
        const room = await Room.findOne({ type: req.params.type });
        if (room) {
            res.json({ price: room.price });
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.put('/update/room/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).send('Room not found');
        }
        room.status = req.body.status;
        await room.save();
        res.status(200).send('Room status updated');
    } catch (error) {
        console.error('Error updating room status:', error);
        res.status(500).send('Failed to update room status');
    }
});

module.exports = router;
