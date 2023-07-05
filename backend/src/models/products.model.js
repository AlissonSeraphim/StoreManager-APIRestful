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

const insertProduct = async (productName) => {
  await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [productName],
  );

  const [[insertedProduct]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name = (?)', 
    [productName],
    );

  return insertedProduct;
};

module.exports = {
  findAll,
  findById,
  insertProduct,
};
