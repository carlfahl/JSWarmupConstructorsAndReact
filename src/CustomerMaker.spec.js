var CustomerMaker = require('./CustomerMaker');

describe('Testing the customerMaker function', function () {
  it('test the existance of customer', function () {
    var customer = new CustomerMaker('Carl', 36);
    expect(customer).toBeDefined();
  });
  it('test the sayHello function', function () {
    var customer = new CustomerMaker('Ed', 45);
    expect(customer.sayHello()).toEqual("Hello my name is Ed and my age is 45.");
  });
});
