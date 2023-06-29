const snakeize = require('snakeize');

const getFormattedColumnNames = (obj) => {
  Object.keys(snakeize(obj)).join(',');
};

const getFormattedPlaceholders = (obj) => {
  Object.keys(obj).map((_each) => '?').join(',');
};

module.exports = {
  getFormattedColumnNames,
  getFormattedPlaceholders,
};
