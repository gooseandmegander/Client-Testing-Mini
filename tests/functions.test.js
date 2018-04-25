const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/functions.js');
const expect = chai.expect;
const assert = chai.assert;
chai.should();
chai.use(sinonChai);

describe('functions', () => {
  let testArray = [];
  beforeEach = () => {
    testArray = [1, 2, 3, 4, 'eggs', 'cheese', 'milk'];
  };

  afterEach = () => {
    testArray = [];
  };

  describe('addNums', () => {
    const addNums = cases.addNums;
    it('should be a function', () => {
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
    // i.e. if is called addNums(1, 2); the return value should be 3.
    it('should return sum of 2 numbers', () => {
      const num1 = 1;
      const num2 = 2;
      expect(addNums(num1, num2)).to.equal(3);
    });
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('function');
    });
    it('should invoke a given callback passed to it', () => {
      // this is where you're going to be using sinon's spy function.
      const callBack = sinon.spy();
      // const newCbInvoker = cases.callBackInvoker(callBack);
      cases.callBackInvoker(callBack);
      // pass our spy `callBack` to our newCbInvoker fn.
      // write a test that to see if our callback has been called.
      // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
      expect(callBack).to.have.been.called;
      expect(callBack).to.have.been.called;
      assert.called(callBack);
      assert.calledOnce(callBack);
      callBack.should.have.been.called;
      callBack.should.have.been.calledOnce;
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      // const iterator = cases.iterator;
      expect(cases.iterator).to.be.a('function');
    });
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('iterator should invoke a callback n times', () => {
      const num = 2;
      const callBack = sinon.spy();
      // const newIterator = cases.iterator(num, callBack);

      cases.iterator(num, callBack);
      expect(callBack).to.have.callCount(num);
      expect(callBack).to.have.been.calledTwice;
      assert.callCount(callBack, 2);
      assert.calledTwice(callBack);
      callBack.should.have.callCount(2);
      callBack.should.have.been.calledTwice;
    });
  });
});
