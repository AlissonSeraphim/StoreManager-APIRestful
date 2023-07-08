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
  productToUpdate,
  productUpdatedDB,
  productUpdatedModel,
  productIdToDelete,
  productsAfterDeleteDB,
  productsAfterDeleteModel,
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

  it('Atualizando Product pelo ProductId', async function () {
    sinon.stub(connection, 'execute')
    .onFirstCall()
    .resolves(null)
    .onSecondCall()
    .resolves(productUpdatedDB);

    const products = await productsModel.updateProduct(productToUpdate.name, productToUpdate.id);

    expect(products).to.be.an('object');
    expect(products).to.be.deep.equal(productUpdatedModel);
  });

  it('Deleta um Product pelo ProductId', async function () {
    sinon.stub(connection, 'execute')
    .onFirstCall()
    .resolves(null)
    .onSecondCall()
    .resolves(productsAfterDeleteDB);

    const products = await productsModel.deleteProduct(productIdToDelete);

    expect(products).to.be.an('array');
    expect(products).to.be.deep.equal(productsAfterDeleteModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});
