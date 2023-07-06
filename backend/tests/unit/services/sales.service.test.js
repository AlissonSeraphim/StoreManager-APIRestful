const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSalesDBMock,
  allSalesMockModel,
  saleByIDMockDB,
  saleByIDMockModel,
  messageSaleNotFound,
  productsToInsertMock,
  insertSalesMock,
  saleIdModel,
  notAvailableProductIdReturn,
} = require('../mocks/sales.mock');

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

  it('Registrando Sales por ProductId Inexistente status NOT FOUND/404', async function () {
    sinon.stub(salesModel, 'findByProductId').resolves(false);

    const insertSalesResponse = await salesService.insertSales(productsToInsertMock);

    expect(insertSalesResponse.status).to.be.deep.equal(notAvailableProductIdReturn.status);
    expect(insertSalesResponse.data).to.be.deep.equal(notAvailableProductIdReturn.data);
  });

  it('Registrando Sales por ProductId com sucesso status CREATED/201', async function () {
    sinon.stub(salesModel, 'findByProductId').resolves([true]);
    sinon.stub(salesModel, 'insertSales').resolves(saleIdModel);
    sinon.stub(salesModel, 'insertSaleProductId')
    .onFirstCall()
    .resolves(null)
    .onSecondCall()
    .resolves(null);

    const insertSalesResponse = await salesService.insertSales(productsToInsertMock);

    expect(insertSalesResponse.status).to.be.deep.equal(insertSalesMock.status);
    expect(insertSalesResponse.data).to.be.deep.equal(insertSalesMock.data);
  });

  afterEach(function () {
    sinon.restore();
  });
});
