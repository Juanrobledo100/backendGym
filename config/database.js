const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('*****CONEXION EXITOSA*****');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

process.on('SIGINT', async () => {
  await mongoose.disconnect();
  console.log('Desconectado de MongoDB');
  process.exit(0);
});

module.exports = connectDB;
