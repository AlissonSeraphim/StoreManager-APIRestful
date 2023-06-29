const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM sales',
  );
  return camelize(sales);
};

module.exports = {
  findAll,
};
