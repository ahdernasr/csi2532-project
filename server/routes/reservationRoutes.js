const express = require('express');
const router = express.Router();
const { createReservation, updateReservation, deleteReservation } = require('../sql/reservationOperations');

// Get all Reservations in a Hotel
router.get('/hotel/:hotelID', async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      include: [{
        model: Room,
        where: { hotelID: req.params.hotelID }
      }]
    });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new Reservation
router.post('/', async (req, res) => {
  try {
    const reservation = await createReservation(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Reservation
router.put('/:reservationID', async (req, res) => {
  try {
    const reservation = await updateReservation(req.params.reservationID, req.body);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Reservation
router.delete('/:reservationID', async (req, res) => {
  try {
    await deleteReservation(req.params.reservationID);
    res.status(200).send('Reservation successfully deleted');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
