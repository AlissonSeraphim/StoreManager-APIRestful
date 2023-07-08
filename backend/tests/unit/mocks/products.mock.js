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

const productToInsert = {
  name: 'ProdutoX',
};

const insertedProductDB = {
  id: 4,
  name: 'ProdutoX',
};

const insertedProductModel = {
  id: 4,
  name: 'ProdutoX',
};

const noNameInsertMessage = { message: '"name" is required' };

const incorrectNameLength = { name: 'Prod' };

const InvalidLengthMessage = { message: '"name" length must be at least 5 characters long' };

const insertedProductService = { status: 'CREATED', data: insertedProductModel };

const productName = 'Martelo do Batman';
const productToUpdate = {
  id: 1,
  name: productName,
};

const productUpdatedDB = [[{
  id: 1,
  name: productName,
}]];

const productUpdatedModel = {
  id: 1,
  name: productName,
};

const productUpdatedService = { status: 'OK', data: productUpdatedModel };

const invalidProductIdToUpdate = {
  id: 6,
  name: productName,
};

const invalidProductIdMessage = { message: 'Product not found' };

const productToUpdateBody = { name: productName };
const productIdToUpdate = 1;

const productIdToDelete = 1;
const productIdInvalidToDelete = 6;

const productsAfterDeleteDB = [[
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
]];

const productsAfterDeleteModel = [
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' },
];

const productsDeleteService = { status: 'NO_CONTENT', data: productsAfterDeleteModel };

const validateNameBadRequest = { message: '"name" is required' };

const validateNameInvalidName = { message: '"name" length must be at least 5 characters long' };

module.exports = {
  messageProductNotFound,
  productIdFromModel,
  productIdFromDB,
  allProductsFromDB,
  allProductsFromModel,
  allProductsServiceOK,
  productIdServiceOK,
  productIdServiceNotFound,
  productToInsert,
  insertedProductDB,
  insertedProductModel,
  noNameInsertMessage,
  incorrectNameLength,
  InvalidLengthMessage,
  insertedProductService,
  productToUpdate,
  productUpdatedService,
  productUpdatedDB,
  productUpdatedModel,
  invalidProductIdToUpdate,
  invalidProductIdMessage,
  productToUpdateBody,
  productIdToUpdate,
  productIdToDelete,
  productsAfterDeleteDB,
  productsAfterDeleteModel,
  productIdInvalidToDelete,
  productsDeleteService,
  validateNameBadRequest,
  validateNameInvalidName,
};