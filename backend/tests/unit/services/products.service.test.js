const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { productIdFromDB, 
  productIdFromModel, 
  allProductsFromDB, 
  allProductsFromModel,
  messageProductNotFound,
} = require('../mocks/products.mock');

describe('Testes - Products Service:', function () {
  it('Buscando Product por ID com sucesso', async function () {
    sinon.stub(productsModel, 'findById').resolves(productIdFromDB);

    const productId = 1;
    const productResponse = await productsService.findById(productId);

    expect(productResponse.status).to.equal('OK');
    expect(productResponse.data).to.deep.equal(productIdFromModel);
  });

  it('Buscando Product por ID Invalido', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);

    const productId = 4;
    const productResponse = await productsService.findById(productId);

    expect(productResponse.status).to.equal('NOT_FOUND');
    expect(productResponse.data).to.deep.equal(messageProductNotFound);
  });
  
  it('Buscando Products com Sucesso', async function () {
    sinon.stub(productsModel, 'findAll').resolves(allProductsFromDB);

    const productsResponse = await productsService.findAll();

    expect(productsResponse.status).to.equal('OK');
    expect(productsResponse.data).to.be.deep.equal(allProductsFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});
