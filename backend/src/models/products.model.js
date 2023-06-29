const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  console.log('teste camelize: ', camelize(products));
  return camelize(products);
};

module.exports = {
  findAll,
};
