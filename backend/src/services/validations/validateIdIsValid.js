const { productsModel } = require('../../models');

const validateProductId = async (productId) => {
  const haveProduct = await productsModel.findById(productId);
  return haveProduct;
};

module.exports = validateProductId;