import React from 'react';

var CustomerList = function (props) {
  var customerItems = props.customers.map(function (item) {
    return (
      <li>{item.sayHello()}</li>
    );
  })
  return (
    <div>
      <ul>
        {customerItems}
      </ul>
    </div>
  );
}

export default CustomerList;
