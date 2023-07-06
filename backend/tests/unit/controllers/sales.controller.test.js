const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { 
allSalesMockModel,
saleByIDMockModel,
allSalesServiceMock,
saleIdServiceMock,
saleIdServiceNotFound,
messageSaleNotFound,
insertSalesMock,
productsToInsertMock,
insertSalesServiceMock,
} = require('../mocks/sales.mock');

describe('Testes - Sales Service:', function () {
  it('Requisita Sales por ID com sucesso - Status 200/OK', async function () {
    sinon.stub(salesService, 'findById').resolves(saleIdServiceMock);

    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findSalesById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleByIDMockModel);
  });

  it('Requisita Sales com ID invalido - Status 404/Not Found', async function () {
    sinon.stub(salesService, 'findById').resolves(saleIdServiceNotFound);

    const req = { params: { id: 3 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findSalesById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(messageSaleNotFound);
  });
  
  it('Requisita Sales - Status 200/OK', async function () {
    sinon.stub(salesService, 'findAll').resolves(allSalesServiceMock);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findSales(undefined, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSalesMockModel);
  });

  it('Insere Sales com sucesso - Status 201/Created', async function () {
    sinon.stub(salesService, 'insertSales').resolves(insertSalesMock);

    const req = { body: productsToInsertMock };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.insertSales(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(insertSalesServiceMock.data);
  });

  afterEach(function () {
    sinon.restore();
  });
});