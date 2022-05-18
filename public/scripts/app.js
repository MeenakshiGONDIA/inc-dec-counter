'use strict';

// Creating an object in React JS

// console.log("App.js is running");

// var user = {
//   name: 'Anik',
//   age: 30,
//   location: 'WB'
// };

// var template = (
//   <div>
//     <h1> {user.name}</h1>
//     <p> {user.age}</p>
//     <p> {user.location}</p>
//   </div>
// );

// ReactDOM.render(template, document.getElementById('app'));


// Creating a function in ReactJS

// var user = {
//   name: 'Anik',
//   age: 30
// };

// function getLocation(location) {
//   if(location) {
//     console.log('You have some location to display');
//     return location;
//   }
//   else {
//     return 'Unknown';
//   }
// }

// var templateOne = (
//   <div>
//     <h1>{user.name}</h1>
//     <h1>{user.age}</h1>
//     <h1>{getLocation(user.location)}</h1>
//   </div>
// );

// ReactDOM.render(templateOne, document.getElementById('app'));


//Using Ternary Operator

// var user = {
//   name: 'Anik',
//   age: 30,
//   location: 'WB'
// };

// function getLocation(location) {
//   if(location) {
//     return <p>Location: {location}</p>
//   }
// }

// var templateOne = (
//   <div>
//     <h1>{user.name ? user.name : 'Unknown'}</h1>  
//      {user.age >= 18 && <p> Age is :- {user.age} </p>}
//      {getLocation(user.location)}
//   </div>
// );

// ReactDOM.render(templateOne, document.getElementById('app'));


//Events & Attributes

// let count = 0;

// const addOne = () => {      //Arrow Function of 'addOne'
//   console.log('addOne');
// };

// const templateTwo = (
//   <div>
//     <h1 id="head1"> Count :- {count} </h1>
//     <button onClick = {addOne}>+1</button>
//   </div>
// );

// console.log(templateTwo);

// ReactDOM.render(templateTwo, document.getElementById('app'));


var count = 0;
var addOne = function addOne() {
  //Arrow Function
  count++;
  renderCount();
  console.log('addOne called', count);
};

var subOne = function subOne() {
  count--;
  renderCount();
  console.log('subOne called', count);
};

var reset = function reset() {
  count = 0;
  renderCount();
};

var appRoot = document.getElementById('app');

var renderCount = function renderCount() {
  var templateThree = React.createElement(
    'div',
    { align: 'center' },
    React.createElement(
      'h1',
      { id: 'head1' },
      ' Count is :- ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    '   \xA0 \xA0 \xA0',
    React.createElement(
      'button',
      { onClick: subOne },
      '-1'
    ),
    ' \xA0 \xA0 \xA0',
    React.createElement(
      'button',
      { onClick: reset },
      'RESET'
    )
  );

  ReactDOM.render(templateThree, appRoot);
};

renderCount();
