const { productsModel } = require('../models');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { status: 'OK', data: products };
};

module.exports = {
  findAll,
};
