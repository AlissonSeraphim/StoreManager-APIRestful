const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute(
    `SELECT 
    sales.id AS saleId, 
    sales.date AS date, 
    sales_products.product_id AS productId, 
    sales_products.quantity AS quantity
  FROM StoreManager.sales
  JOIN StoreManager.sales_products ON sales.id = sales_products.sale_id
  ORDER BY sales.id ASC, 
    sales_products.product_id ASC;`,
  );
  return camelize(sales);
};

const findById = async (saleId) => {
  const [sale] = await connection.execute(
`SELECT 
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

const insertSaleProductId = async (saleId, productId, quantity) => {
  const [{ affectedRows }] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)', 
    [saleId, productId, quantity],
    );
    return affectedRows;
};

const insertSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (CURRENT_TIMESTAMP());',
  );
  return insertId;
};

const findByProductId = async (productId) => {
  const [productIdExist] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products WHERE product_id = (?)',
    [productId],
  );

  return camelize(productIdExist);
};

module.exports = {
  findAll,
  findById,
  insertSales,
  insertSaleProductId,
  findByProductId,
};
