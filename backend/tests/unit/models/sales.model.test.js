const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { allSalesDBMock,
  allSalesMockModel,
  saleByIDMockDB,
  saleByIDMockModel } = require('../mocks/sales.mock');

describe('Testes - Sales Model:', function () {
  it('Buscando Sales por ID com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([saleByIDMockDB]);

    const saleId = 1;
    const sale = await salesModel.findById(saleId);

    expect(sale).to.be.an('array');
    expect(sale).to.be.deep.equal(saleByIDMockModel);
  });
  
  it('Buscando Sales', async function () {
    sinon.stub(connection, 'execute').resolves([allSalesDBMock]);

    const sale = await salesModel.findAll();

    expect(sale).to.be.an('array');
    expect(sale).to.be.deep.equal(allSalesMockModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});
