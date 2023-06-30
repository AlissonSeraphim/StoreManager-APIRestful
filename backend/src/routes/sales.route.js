const express = require('express');

const { salesController } = require('../controllers');

const router = express.Router();

router.get('/', salesController.findSales);

router.get('/:id', salesController.findSalesById);

module.exports = router;
