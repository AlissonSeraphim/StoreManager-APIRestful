const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { allSalesDBMock,
  allSalesMockModel,
  saleByIDMockDB,
  saleByIDMockModel,
  saleIdModel,
  saleIdDB,
  insertMultipleSalesMock,
  affectedRowsDB,
  affectedRowsModel,
  productIdMockDB,
  productByIdMockDB,
  productByIdMockModel,
 } = require('../mocks/sales.mock');

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

  it('Registrando Sale', async function () {
    sinon.stub(connection, 'execute').resolves(saleIdDB);

    const saleId = await salesModel.insertSales();

    expect(saleId).to.be.a('number');
    expect(saleId).to.equal(saleIdModel);
  });

  it('Registrando multiplos Products pela mesma Sale', async function () {
    sinon.stub(connection, 'execute')
    .onFirstCall()
    .resolves(saleIdDB)
    .onSecondCall()
    .resolves(affectedRowsDB)
    .onThirdCall()
    .resolves(affectedRowsDB);

    const saleId = await salesModel.insertSales();
    const affectedRowsPromises = insertMultipleSalesMock.map((sale) => salesModel.insertSaleProductId(saleId, sale.productId, sale.quantity));
    const affectedRows = await Promise.all(affectedRowsPromises);

    expect(affectedRows[0]).to.be.a('number');
    expect(affectedRows[0]).to.equal(affectedRowsModel);
    expect(affectedRows[1]).to.be.a('number');
    expect(affectedRows[1]).to.equal(affectedRowsModel);
  });

  it('Procura se existe produto pelo ProductId', async function () {
    sinon.stub(connection, 'execute').resolves(productByIdMockDB);

    const products = await salesModel.findByProductId(productIdMockDB);

    expect(products).to.be.a('array');
    expect(products).to.be.deep.equal(productByIdMockModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});
