const express = require('express');
const router = express.Router();
const { createClient, updateClient, deleteClient } = require('../sql/clientOperations');

// Get all Clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single Client by id
router.get('/:clientID', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.clientID);
    if (client) {
      res.json(client);
    } else {
      res.status(404).send('Client not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new Client
router.post('/', async (req, res) => {
  try {
    const client = await createClient(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Client
router.put('/:clientID', async (req, res) => {
  try {
    const client = await updateClient(req.params.clientID, req.body);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Client
router.delete('/:clientID', async (req, res) => {
  try {
    await deleteClient(req.params.clientID);
    res.status(200).send('Client successfully deleted');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
