const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM sales',
  );
  return camelize(sales);
};

const findById = async (saleId) => {
  const [sale] = await connection.execute(
`SELECT 
    sales.id AS saleId, 
    sales.date AS date, 
    sales_products.product_id AS productId, 
    sales_products.quantity AS quantity
  FROM StoreManager.sales
  JOIN StoreManager.sales_products ON sales.id = sales_products.sale_id
  WHERE sales.id = ?
  ORDER BY sales.id ASC, 
    sales_products.product_id ASC;`, 
  [saleId],
    );
  return sale;
};

module.exports = {
  findAll,
  findById,
};
