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

const insertProduct = async (req, res) => {
  const { name } = req.body;

  const { status, data } = await productsService.insertProduct(name);
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  const { status, data } = await productsService.updateProduct(id, name);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findProducts,
  findProductsById,
  insertProduct,
  updateProduct,
};
