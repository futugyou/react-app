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
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const handlerLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
      //right: clicks.right

    }
    setClicks(newClicks)
  }
  const handlerRightClick = () => {
    const newClicks = {
      //left: clicks.left,
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handlerLeftClick}>
        left
    </button>
      <button onClick={handlerRightClick}>
        right
    </button>
      {clicks.right}
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