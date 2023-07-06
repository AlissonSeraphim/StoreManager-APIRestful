const messageSaleNotFound = { message: 'Sale not found' };

const FIRSTDATEMOCK_ID1 = '2023-07-04T05:49:06.000Z';

const allSalesDBMock = [
  {
    saleId: 1,
    date: FIRSTDATEMOCK_ID1,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: FIRSTDATEMOCK_ID1,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: FIRSTDATEMOCK_ID1,
    productId: 3,
    quantity: 15,
  },
];

const allSalesMockModel = [
  {
    saleId: 1,
    date: FIRSTDATEMOCK_ID1,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: FIRSTDATEMOCK_ID1,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: FIRSTDATEMOCK_ID1,
    productId: 3,
    quantity: 15,
  },
];

const saleByIDMockDB = [
  {
    date: '2023-07-04T06:04:20.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2023-07-04T06:04:20.000Z',
    productId: 2,
    quantity: 10,
  },
];

const saleByIDMockModel = [
  {
    date: '2023-07-04T06:04:20.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2023-07-04T06:04:20.000Z',
    productId: 2,
    quantity: 10,
  },
];

const saleIdServiceMock = {
  status: 'OK',
  data: saleByIDMockModel,
};

const allSalesServiceMock = {
  status: 'OK',
  data: allSalesMockModel,
};

const saleIdServiceNotFound = {
  status: 'NOT_FOUND',
  data: messageSaleNotFound,
};

const saleIdDB = [{ insertId: 3 }];

const saleIdModel = 3;

const affectedRowsDB = [{ affectedRows: 1 }];

const affectedRowsModel = 1;

const insertMultipleSalesMock = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const productIdMockDB = 1;

const productByIdMockDB = [[
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
  }]];

  const productByIdMockModel = [
    {
      saleId: 1,
      productId: 1,
      quantity: 5,
    }];
  
  const productsToInsertMock = [
    {
      productId: 1,
      quantity: 4,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ];

  const insertSalesMock = { status: 'CREATED',
data: { 
    id: saleIdModel, 
    itemsSold: productsToInsertMock, 
  } };

  const insertSalesServiceMock = { status: 'CREATED',
  data: { 
      id: saleIdModel, 
      itemsSold: productsToInsertMock, 
    } };
    
  const notAvailableProductIdReturn = { status: 'NOT_FOUND',
  data: { message: 'Product not found' } };

module.exports = {
  allSalesDBMock,
  allSalesMockModel,
  saleByIDMockDB,
  saleByIDMockModel,
  saleIdServiceNotFound,
  saleIdServiceMock,
  allSalesServiceMock,
  messageSaleNotFound,
  saleIdDB,
  insertMultipleSalesMock,
  saleIdModel,
  affectedRowsDB,
  affectedRowsModel,
  productIdMockDB,
  productByIdMockDB,
  productByIdMockModel,
  productsToInsertMock,
  insertSalesMock,
  notAvailableProductIdReturn,
  insertSalesServiceMock,
};
