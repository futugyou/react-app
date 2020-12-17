// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import './index.css'

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './AppReducer'
import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)