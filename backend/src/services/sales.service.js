const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { status: 'OK', data: sales };
};

module.exports = {
  findAll,
};
