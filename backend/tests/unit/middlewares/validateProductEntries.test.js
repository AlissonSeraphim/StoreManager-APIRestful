const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { validateName } = require('../../../src/middlewares/validateProductEntries');
const { validateNameBadRequest, validateNameInvalidName } = require('../mocks/products.mock');

describe('Testes - Middleware ValidateName:', function () {
  it('Requisita atualização do Product sem a chave "name" - Status 400/BAD REQUEST', async function () {
    const req = { body: { name: null } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    validateName(req, res, next);
    expect(next).to.have.been.callCount(0);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(validateNameBadRequest);
  });

  it('Requisita atualização do Product com a chave "name" menor que 5 caracteres - Status 422/INVALID VALUE', async function () {
    const req = { body: { name: 'bola' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    validateName(req, res, next);
    expect(next).to.have.been.callCount(0);
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(validateNameInvalidName);
  });

  it('Requisita atualização do Product com sucesso', async function () {
    const req = { body: { name: 'Radio' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    validateName(req, res, next);
    expect(next).to.have.been.callCount(1);
  });

  afterEach(function () {
    sinon.restore();
  });
});