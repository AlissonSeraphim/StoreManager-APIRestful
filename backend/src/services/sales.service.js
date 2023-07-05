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

const insertSales = async (sales) => {
  const saleId = await salesModel.insertSales();

  console.log('saleId', saleId);

  sales.forEach((sale) => salesModel.insertSaleProductId(
    saleId,
    sale.productId,
    sale.quantity,
    ));

  return { status: 'CREATED', data: { id: saleId, itemsSold: sales } };
};

module.exports = {
  findAll,
  findById,
  insertSales,
};
