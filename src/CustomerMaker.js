function CustomerMaker(name, age) {
  this.name = name;
  this.age = age;
}

CustomerMaker.prototype.sayHello = function () {
  return "Hello my name is " + this.name + " and my age is " + this.age + ".";
}

// export default CustomerMaker;
module.exports = CustomerMaker;
