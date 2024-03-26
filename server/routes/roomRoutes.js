const express = require('express');
const router = express.Router();
const { Room, Reservation } = require('../models'); // Adjust the import path

// Get all Available Rooms in a Hotel
router.get('/hotel/:hotelID/available', async (req, res) => {
  try {
    const rooms = await Room.findAll({
      where: { hotelID: req.params.hotelID, /* Additional conditions for availability */ }
      // Optionally include Reservations to check against current dates for availability
    });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
