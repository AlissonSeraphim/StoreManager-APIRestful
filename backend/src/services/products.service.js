const { productsModel } = require('../models');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { status: 'OK', data: products };
};

const findById = async (ProductId) => {
  const product = await productsModel.findById(ProductId);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

  return { status: 'OK', data: product };
};

module.exports = {
  findAll,
  findById,
};
