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

const insertProduct = async (productName) => {
  if (!productName) return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };

  if (productName.length < 5) {
    const InvalidMessage = '"name" length must be at least 5 characters long';
    return { status: 'INVALID_VALUE', data: { message: InvalidMessage } };
  }

  const insertedProduct = await productsModel.insertProduct(productName);

  return { status: 'CREATED', data: insertedProduct };
};

module.exports = {
  findAll,
  findById,
  insertProduct,
};
