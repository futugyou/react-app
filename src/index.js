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

const tt = [1, 2, 3, 4]
tt.push(5)

const obj = {
  first: "one",
  second: "two",
}

const sum = (num1, num2) => num1 + num2

const Hello = (p) => {
  const name = p.name
  const age = p.age
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {p.name} age {p.age} like {p.like}</p>
      <p>{p.obj} sum is {p.sum}</p>
      <p>so you were probdbly born in {bornYear()}</p>
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
  const [couter, setCouter] = useState(0)
  const handClick = () => {
    console.log('clicked')
  }

  // setTimeout(() => {
  //   setCouter(couter + 1)
  // }, 1000);
  // return (
  //   <div>
  //     <p>Hello world, it si {now.toString()}</p>
  //     <p>
  //       {a} plus {b} is {a + b}
  //     </p>
  //   </div>
  // )
  const increase = () => setCouter(couter + 1)
  const decrease = () => setCouter(couter - 1)
  const setZero = () => setCouter(0)
  return (
    <div>
      {/* <div>{couter}</div> */}
      <Display couter={couter} />
      <Button handClick={increase} text="plus"></Button>
      <Button handClick={decrease} text="de"></Button>
      <Button handClick={setZero} text="zero"></Button>
    </div>
  )
}

const Display = (props) => {
  return (
    <div>
      {props.couter}
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handClick}>
      {props.text}
    </button>
  )
}

ReactDOM.render(
  <App />,
  //React.createElement(App, null),
  document.getElementById('root')
)