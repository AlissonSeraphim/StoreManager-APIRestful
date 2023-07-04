const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSalesDBMock,
  allSalesMockModel,
  saleByIDMockDB,
  saleByIDMockModel,
  messageSaleNotFound } = require('../mocks/sales.mock');

describe('Testes - Sales Service:', function () {
  it('Buscando Sales por ID com sucesso', async function () {
    sinon.stub(salesModel, 'findById').resolves(saleByIDMockDB);

    const saleId = 1;
    const saleIdResponse = await salesService.findById(saleId);

    expect(saleIdResponse.status).to.equal('OK');
    expect(saleIdResponse.data).to.deep.equal(saleByIDMockModel);
  });

  it('Buscando Sales por ID Invalido', async function () {
    sinon.stub(salesModel, 'findById').resolves(undefined);

    const saleIdInvalid = 3;
    const saleIdResponse = await salesService.findById(saleIdInvalid);

    expect(saleIdResponse.status).to.equal('NOT_FOUND');
    expect(saleIdResponse.data).to.deep.equal(messageSaleNotFound);
  });
  
  it('Buscando Sales com Sucesso', async function () {
    sinon.stub(salesModel, 'findAll').resolves(allSalesDBMock);

    const salesResponse = await salesService.findAll();

    expect(salesResponse.status).to.equal('OK');
    expect(salesResponse.data).to.be.deep.equal(allSalesMockModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});
