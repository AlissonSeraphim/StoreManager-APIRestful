const { salesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findSales = async (_req, res) => {
  const { status, data } = await salesService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findSales,
};
