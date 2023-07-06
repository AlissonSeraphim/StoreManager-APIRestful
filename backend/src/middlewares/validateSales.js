const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validateSalesExist = (req, res, next) => {
  const data = req.body;

  if (!data || data.length < 1) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: 'productId and quantity is required', 
    }); 
  }

next();
};

const validateProductId = (req, res, next) => {
  const data = req.body;

  const productIdExist = data.every((product) => product.productId);

  if (!productIdExist) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: '"productId" is required', 
    }); 
  }

next();
};

const validateQuantity = (req, res, next) => {
  const data = req.body;

  const quantityIdExist = data.every((product) => typeof (product.quantity) === 'number');

  if (!quantityIdExist) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({
      message: '"quantity" is required', 
    }); 
  }

  const quantityIdIsValid = data.every((product) => product.quantity > 0);

  if (!quantityIdIsValid) {
    return res.status(mapStatusHTTP('INVALID_VALUE')).json({
      message: '"quantity" must be greater than or equal to 1', 
    }); 
  }

next();
};

module.exports = {
  validateSalesExist,
  validateProductId,
  validateQuantity,
};