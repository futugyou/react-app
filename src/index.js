import React, { useState } from 'react'
import ReactDOM from 'react-dom' 
import FormComp from './components/form_com'
 
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

ReactDOM.render(
  <FormComp notes={Notes} />,
  //React.createElement(App, null),
  document.getElementById('root')
)