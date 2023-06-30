const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );

  return camelize(products);
};

const findById = async (ProductId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ? ORDER BY id ASC', 
    [ProductId],
    );

  return product;
};

module.exports = {
  findAll,
  findById,
};
