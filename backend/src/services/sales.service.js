const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { status: 'OK', data: sales };
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (!sale || sale.length < 1) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };

  return { status: 'OK', data: sale };
};

module.exports = {
  findAll,
  findById,
};
