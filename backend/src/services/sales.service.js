const { salesModel } = require('../models');
const validateProductIdExist = require('./validations/validateProductId');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { status: 'OK', data: sales };
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (!sale || sale.length < 1) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };

  return { status: 'OK', data: sale };
};

const insertSales = async (sales) => {
  const haveProductId = await validateProductIdExist(sales);

  if (!haveProductId) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  
  const saleId = await salesModel.insertSales();

  sales.forEach((sale) => salesModel.insertSaleProductId(saleId, sale.productId, sale.quantity));

  return { status: 'CREATED', data: { id: saleId, itemsSold: sales } };
};

module.exports = {
  findAll,
  findById,
  insertSales,
};
