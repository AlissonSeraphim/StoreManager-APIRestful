const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { productIdFromDB, 
  productIdFromModel, 
  allProductsFromDB, 
  allProductsFromModel,
  productToInsert,
  insertedProductDB,
  insertedProductModel, 
} = require('../mocks/products.mock');

describe('Testes - Products Model:', function () {
  it('Buscando Product por ID com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[productIdFromDB]]);

    const productId = 1;
    const product = await productsModel.findById(productId);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productIdFromModel);
  });
  
  it('Buscando Products', async function () {
    sinon.stub(connection, 'execute').resolves([allProductsFromDB]);

    const products = await productsModel.findAll();

    expect(products).to.be.an('array');
    expect(products).to.be.deep.equal(allProductsFromModel);
  });

  it('Adicionando Product', async function () {
    sinon.stub(connection, 'execute').resolves([[insertedProductDB]]);

    const products = await productsModel.insertProduct(productToInsert.name);

    expect(products).to.be.an('object');
    expect(products).to.be.deep.equal(insertedProductModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});
