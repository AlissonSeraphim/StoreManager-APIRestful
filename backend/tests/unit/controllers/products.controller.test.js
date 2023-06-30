const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { 
  allProductsServiceOK,
  productIdServiceNotFound, 
  productIdServiceOK,
  allProductsFromModel,
  productIdFromModel,
  messageProductNotFound,
} = require('../mocks/products.mock');

describe('Testes - Products Service:', function () {
  it('Requisita o Product por ID com sucesso - Status 200/OK', async function () {
    sinon.stub(productsService, 'findById').resolves(productIdServiceOK);

    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findProductsById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productIdFromModel);
  });

  it('Requisita o Product com ID invalido - Status 404/Not Found', async function () {
    sinon.stub(productsService, 'findById').resolves(productIdServiceNotFound);

    const req = { params: { id: 4 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findProductsById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(messageProductNotFound);
  });
  
  it('Requisita Products - Status 200/OK', async function () {
    sinon.stub(productsService, 'findAll').resolves(allProductsServiceOK);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findProducts(undefined, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});