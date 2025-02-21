const validateClient = (req, res, next) => {
    const { fullName, dni, startDate, endDate } = req.body;
    
    if (!fullName || !dni || !startDate || !endDate) {
      return res.status(400).json({
        status: 'fail',
        message: 'Por favor proporcione todos los campos requeridos'
      });
    }
    
    next();
  };
  
  module.exports = validateClient;
  