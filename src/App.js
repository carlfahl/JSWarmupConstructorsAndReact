import React from 'react';
import './App.css';
import CustomerMaker from './CustomerMaker';
import CustomerList from './CustomerList';

var App = React.createClass({
  getInitialState: function () {
    return ({customerData: [{name:'Carl', age: 36}, {name:'Ed', age:20}, {name: 'Sally', age:30}]});
  },
  render() {
    var customers = this.state.customerData.map(function (item) {
      return new CustomerMaker(item.name, item.age);
    });
    return (
      <div>
        <CustomerList customers={customers} />
      </div>
    );
  }
});

export default App;
