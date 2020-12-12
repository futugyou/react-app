// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React, { useState } from 'react'
import ReactDOM from 'react-dom' 
import App from './App'

const tt = [1, 2, 3, 4]
tt.push(5)

const obj = {
  first: "one",
  second: "two",
}

const sum = (num1, num2) => num1 + num2 

const parts = [
  { name: '1234', age: 10 },
  { name: '2345', age: 11 },
  { name: '3456', age: 12 },
  { name: '4567', age: 13 }
]



ReactDOM.render(
  <App />,
  //React.createElement(App, null),
  document.getElementById('root')
)