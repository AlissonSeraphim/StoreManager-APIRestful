const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateName = (req, res, next) => {
  const { name } = req.body;
  const nameLengthMin = 5;

  if (!name) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: '"name" is required', 
    }); 
  }

  if (name.length < nameLengthMin) {
    return res.status(mapStatusHTTP('INVALID_VALUE')).json({
      message: '"name" length must be at least 5 characters long', 
    }); 
  }

next();
};

module.exports = {
  validateName,
};
