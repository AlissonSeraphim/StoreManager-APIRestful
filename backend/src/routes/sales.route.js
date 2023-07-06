const express = require('express');

const { salesController } = require('../controllers');

const { validateQuantity,
  validateProductId,
  validateSalesExist, 
} = require('../middlewares/validateSales');

const router = express.Router();

router.get('/', salesController.findSales);

router.get('/:id', salesController.findSalesById);

router.post(
'/', 
validateSalesExist,
validateProductId,
validateQuantity,
salesController.insertSales,
);

module.exports = router;
