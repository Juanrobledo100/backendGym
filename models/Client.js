const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'El nombre completo es requerido']
  },
  dni: {
    type: String,
    required: [true, 'El DNI es requerido'],
    unique: true
  },
  startDate: {
    type: Date,
    required: [true, 'La fecha de inicio es requerida']
  },
  endDate: {
    type: Date,
    required: [true, 'La fecha de vencimiento es requerida']
  },
  paymentStatus: {
    type: String,
    enum: ['Pendiente', 'Pagado'],
    default: 'Pendiente'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Client', clientSchema);