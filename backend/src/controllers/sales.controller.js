const { salesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findSales = async (_req, res) => {
  const { status, data } = await salesService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const findSalesById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.findById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const insertSales = async (req, res) => {
  const sales = req.body;
  const { status, data } = await salesService.insertSales(sales);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findSales,
  findSalesById,
  insertSales,
};
