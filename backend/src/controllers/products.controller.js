const { productsService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findProducts = async (_req, res) => {
  const { status, data } = await productsService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findProducts,
};
