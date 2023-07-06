const { salesModel } = require('../../models');

const validateProductIdExist = async (sales) => {
  const promisesProductsById = [];

  sales.forEach((sale) => {
    const returnFromProductId = salesModel.findByProductId(sale.productId);
    promisesProductsById.push(returnFromProductId);
  });

  const returnProductId = await Promise.all(promisesProductsById);

  const haveProductId = returnProductId.every((product) => product.length > 0);

  return haveProductId;
};

module.exports = validateProductIdExist;