const messageProductNotFound = { message: 'Product not found' };

const productIdFromDB = {
  id: 1,
  name: 'Martelo de Thor',
};

const productIdFromModel = {
  id: 1,
  name: 'Martelo de Thor',
};

const allProductsFromDB = [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do CapitÃ£o AmÃ©rica',
    },
];

const allProductsFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const allProductsServiceOK = {
  status: 'OK',
  data: allProductsFromModel,
};

const productIdServiceOK = {
  status: 'OK',
  data: productIdFromModel,
};

const productIdServiceNotFound = {
  status: 'NOT_FOUND',
  data: messageProductNotFound,
};

module.exports = {
  messageProductNotFound,
  productIdFromModel,
  productIdFromDB,
  allProductsFromDB,
  allProductsFromModel,
  allProductsServiceOK,
  productIdServiceOK,
  productIdServiceNotFound,
};