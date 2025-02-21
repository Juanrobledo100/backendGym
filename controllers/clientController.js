const Client = require('../models/Client');
const catchAsync = require('../middleware/catchAsync');

const getAllClients = catchAsync(async (req, res) => {
  const clients = await Client.find();
  res.status(200).json({
    status: 'success',
    data: clients
  });
});

const createClient = catchAsync(async (req, res) => {
  const client = await Client.create(req.body);
  res.status(201).json({
    status: 'success',
    data: client
  });
});

const getClientById = catchAsync(async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    return res.status(404).json({
      status: 'fail',
      message: 'Cliente no encontrado'
    });
  }
  res.status(200).json({
    status: 'success',
    data: client
  });
});

const updateClient = catchAsync(async (req, res) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!client) {
    return res.status(404).json({
      status: 'fail',
      message: 'Cliente no encontrado'
    });
  }
  res.status(200).json({
    status: 'success',
    data: client
  });
});

const deleteClient = catchAsync(async (req, res) => {
  const client = await Client.findByIdAndDelete(req.params.id);
  if (!client) {
    return res.status(404).json({
      status: 'fail',
      message: 'Cliente no encontrado'
    });
  }
  res.status(204).json({
    status: 'success',
    data: null
  });
});

module.exports = {
  getAllClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient
};