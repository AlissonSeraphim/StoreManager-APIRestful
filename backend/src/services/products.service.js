const { productsModel } = require('../models');
const validateProductId = require('./validations/validateIdIsValid');

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

const updateProduct = async (productId, productName) => {
  const productExist = await validateProductId(productId);
  if (!productExist) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

  const productUpdated = await productsModel.updateProduct(productName, productId);
  return { status: 'OK', data: productUpdated };
};

const deleteProduct = async (productId) => {
  const productExist = await validateProductId(productId);
  if (!productExist) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

  const afterDelete = await productsModel.deleteProduct(productId);
  return { status: 'NO_CONTENT', data: afterDelete };
};

module.exports = {
  findAll,
  findById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
