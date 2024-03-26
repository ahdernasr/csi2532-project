const express = require('express');
const router = express.Router();
const { createHotel, updateHotel, deleteHotel } = require('../sql/hotelOperations');

// Get all Hotel Chains
router.get('/', async (req, res) => {
  try {
    const chains = await HotelChain.findAll();
    res.json(chains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all Hotels in a Chain
router.get('/:hotelChainID/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: { hotelChainID: req.params.hotelChainID }
    });
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /hotels - Create a new Hotel
router.post('/', async (req, res) => {
  try {
    const hotel = await createHotel(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /hotels/:hotelID - Update a Hotel
router.put('/:hotelID', async (req, res) => {
  try {
    const hotel = await updateHotel(req.params.hotelID, req.body);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /hotels/:hotelID - Delete a Hotel
router.delete('/:hotelID', async (req, res) => {
  try {
    await deleteHotel(req.params.hotelID);
    res.status(200).send('Hotel successfully deleted');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
