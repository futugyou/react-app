// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState } from 'react'
import Button from './components/botton_com'
import History from './components/history'
import NotesCom from './components/notes_com'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const handlerLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handlerRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  const setToValue = (num) => () => {
    setLeft(num)
  }
  const Notes = [
    {
      id: 1,
      context: "one",
      date: '2020-05-01',
      important: true
    },
    {
      id: 2,
      context: "two",
      date: '2020-05-02',
      important: false
    },
    {
      id: 3,
      context: "three",
      date: '2020-05-03',
      important: false
    },
  ]

  return (
    <div>
      {left}
      <Button onClick={handlerLeftClick} text='left'></Button>
      <Button onClick={handlerRightClick} text='right'></Button>
      {right}
      <History allClicks={allClicks}></History>
      <button onClick={setToValue(10)}>add</button>
      <NotesCom notes={Notes}></NotesCom>
    </div>
  )
}

export default App;
