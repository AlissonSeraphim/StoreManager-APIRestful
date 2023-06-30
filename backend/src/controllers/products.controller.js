const { productsService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findProducts = async (_req, res) => {
  const { status, data } = await productsService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const findProductsById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsService.findById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findProducts,
  findProductsById,
};
