const express = require('express');
const router = express.Router();
const {
  getAllClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient
} = require('../controllers/clientController');
const validateClient = require('../middleware/validateClient');

router
  .route('/')
  .get(getAllClients)
  .post(validateClient, createClient);

router
  .route('/:id')
  .get(getClientById)
  .put(validateClient, updateClient)
  .delete(deleteClient);

module.exports = router;