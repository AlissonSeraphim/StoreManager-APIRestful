const express = require('express');
const productsController = require('../controllers/products.controller');
const { validateName } = require('../middlewares/validateProductEntries');

const router = express.Router();

router.get('/', productsController.findProducts);

router.get('/:id', productsController.findProductsById);

router.post('/', productsController.insertProduct);

router.put('/:id', validateName, productsController.updateProduct);

module.exports = router;
