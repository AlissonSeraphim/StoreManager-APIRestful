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

module.exports = {
  allSalesDBMock,
  allSalesMockModel,
  saleByIDMockDB,
  saleByIDMockModel,
  saleIdServiceNotFound,
  saleIdServiceMock,
  allSalesServiceMock,
  messageSaleNotFound,
};
