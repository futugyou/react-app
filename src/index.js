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


import React from 'react'
import ReactDOM from 'react-dom'

const tt = [1, 2, 3, 4]
tt.push(5)

const obj = {
  first: "one",
  second: "two",
}

const sum = (num1, num2) => num1 + num2

const Hello = (p) => {
  return (
    <div>
      <p>Hello {p.name} age {p.age} like {p.like}</p>
      <p>{p.obj} sum is {p.sum}</p>
       
    </div>
  )
}

const parts = [
  { name: '1234', age: 10 },
  { name: '2345', age: 11 },
  { name: '3456', age: 12 },
  { name: '4567', age: 13 }
]

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  // return (
  //   <div>
  //     <p>Hello world, it si {now.toString()}</p>
  //     <p>
  //       {a} plus {b} is {a + b}
  //     </p>
  //   </div>
  // )
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'hello world , it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' puls ', b, ' is ', a + b
    ),
    <Hello name="vishel" age={b} like={tt} obj={obj.second} sum = {sum(1,2)} parts={parts} />
  
  )
}
ReactDOM.render(
  // <App />,
  React.createElement(App, null),
  document.getElementById('root')
)